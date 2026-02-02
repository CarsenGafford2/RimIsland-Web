import { Graphics } from "../engine/Graphics.js";

export class Sprite 
{
    private texture?: WebGLTexture;

    constructor(
        private gfx: Graphics,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        src: string
    )
    {
        const img = new Image();
        img.src = src;
        img.onload = () => 
        {
            this.texture = gfx.createTexture(img);
            this.gfx.clear();
            this.draw();
        };
    }

    draw()
    {
        if (!this.texture) return;
        this.gfx.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }
}