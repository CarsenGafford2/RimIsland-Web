import { Graphics } from "../engine/Graphics.js";
export class Sprite {
    gfx;
    x;
    y;
    width;
    height;
    texture;
    constructor(gfx, x, y, width, height, src) {
        this.gfx = gfx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            this.texture = gfx.createTexture(img);
            this.gfx.clear();
            this.draw();
        };
    }
    draw() {
        if (!this.texture)
            return;
        this.gfx.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }
}
//# sourceMappingURL=Sprite.js.map