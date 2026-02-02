export class Graphics {
    canvas;
    gl;
    constructor(width, height, parent = document.body) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        parent.appendChild(this.canvas);
        const gl = this.canvas.getContext("webgl");
        if (!gl)
            throw new Error("Web GL not supported");
        this.gl = gl;
        // default view
        this.gl.viewport(0, 0, width, height);
        // alpha blending
        this.gl.enable(gl.BLEND);
        this.gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        // clear color
        this.gl.clearColor(0, 0, 0, 1);
        this.clear();
    }
    clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl.viewport(0, 0, width, height);
    }
}
//# sourceMappingURL=Graphics.js.map