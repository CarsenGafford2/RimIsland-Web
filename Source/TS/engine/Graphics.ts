export class Graphics
{
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGLRenderingContext;
    private program!: WebGLProgram;
    private positionBuffer!: WebGLBuffer;
    private positionLocation!: number;
    private texcoordLocation!: number;
    private textureLocation!: WebGLUniformLocation | null;
    private texcoordBuffer!: WebGLBuffer;

    constructor(width: number, height: number, parent: HTMLElement = document.body)
    {

        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        parent.appendChild(this.canvas);

        const gl = this.canvas.getContext("webgl")
        if (!gl) throw new Error("Web GL not supported")
        this.gl = gl;

        // default view
        this.gl.viewport(0,0, width, height);
        this.gl.clearColor(0,0,0, 1);
        this.gl.enable(gl.BLEND);
        this.gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        this.initShaders();
        this.initBuffers();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    private createShader(type: number, source: string): WebGLShader 
    {
        const shader = this.gl.createShader(type)!;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
        {
            throw new Error(this.gl.getShaderInfoLog(shader) ?? "Shader error");
        }
        return shader;
    }

    private createProgram(vs: string, fs: string): WebGLProgram
    {
        const program = this.gl.createProgram();
        this.gl.attachShader(program, this.createShader(this.gl.VERTEX_SHADER, vs));
        this.gl.attachShader(program, this.createShader(this.gl.FRAGMENT_SHADER, fs));
        this.gl.linkProgram(program);

        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS))
        {
            throw new Error(this.gl.getProgramInfoLog(program) ?? "Program error");
        }
        return program;
    }

    private initShaders()
    {
        const vertexSrc = 
        `
            attribute vec2 a_position;
            attribute vec2 a_texcoord;

            varying vec2 v_texcoord;

            void main()
            {
                gl_Position = vec4(a_position, 0.0, 1.0);
                v_texcoord = a_texcoord;
            }
        `;

        const fragmentSrc =
        `
            precision mediump float;

            varying vec2 v_texcoord;
            uniform sampler2D u_texture;

            void main()
            {
                gl_FragColor = texture2D(u_texture, v_texcoord);
            }
        `;

        this.program = this.createProgram(vertexSrc, fragmentSrc);
            
        this.positionLocation = this.gl.getAttribLocation(this.program, "a_position");
        this.texcoordLocation = this.gl.getAttribLocation(this.program, "a_texcoord");
        this.textureLocation = this.gl.getUniformLocation(this.program, "u_texture");

    }

    private initBuffers()
    {
        this.positionBuffer = this.gl.createBuffer()!;
        this.texcoordBuffer = this.gl.createBuffer()!;
    }

    clear()
    {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    resize(width: number, height: number)
    {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl.viewport(0,0, width, height);
    }

    createTexture(image: HTMLImageElement): WebGLTexture
    {
        const gl = this.gl;
        const texture = gl.createTexture()!;

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            image
        );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        
        return texture;
    }

    private pxToClipX(px: number): number
    {
        return (px / this.canvas.width) * 2 - 1;
    }

    private pxToClipY(py: number): number 
    {
        return 1 - (py / this.canvas.height) * 2;
    }

    drawImage (
        texture: WebGLTexture,
        x: number,
        y: number,
        width: number,
        height: number
    )
    {
        const gl = this.gl;
        const x1 = this.pxToClipX(x);
        const y1 = this.pxToClipY(y);
        const x2 = this.pxToClipX(x + width);
        const y2 = this.pxToClipY(y + height);
        const positions = [
            x1, y1,
            x2, y1,
            x1, y2,

            x1, y2,
            x2, y1,
            x2, y2,
        ];

        const uvs = [
            0, 0,
            1, 0,
            0, 1,

            0, 1,
            1, 0,
            1, 1,
        ];

        gl.useProgram(this.program);
        
        // positions
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.positionLocation);
        gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);

        // uvs
        gl.bindBuffer(gl.ARRAY_BUFFER, this.texcoordBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.texcoordLocation);
        gl.vertexAttribPointer(this.texcoordLocation, 2, gl.FLOAT, false, 0, 0);

        // texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(this.textureLocation, 0);
        
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}