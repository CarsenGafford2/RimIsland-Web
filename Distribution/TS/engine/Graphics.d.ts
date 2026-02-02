export declare class Graphics {
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGLRenderingContext;
    private program;
    private positionBuffer;
    private positionLocation;
    private texcoordLocation;
    private textureLocation;
    private texcoordBuffer;
    constructor(width: number, height: number, parent?: HTMLElement);
    private createShader;
    private createProgram;
    private initShaders;
    private initBuffers;
    clear(): void;
    resize(width: number, height: number): void;
    createTexture(image: HTMLImageElement): WebGLTexture;
    private pxToClipX;
    private pxToClipY;
    drawImage(texture: WebGLTexture, x: number, y: number, width: number, height: number): void;
}
//# sourceMappingURL=Graphics.d.ts.map