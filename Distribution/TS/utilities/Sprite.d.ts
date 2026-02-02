import { Graphics } from "../engine/Graphics.js";
export declare class Sprite {
    private gfx;
    x: number;
    y: number;
    width: number;
    height: number;
    private texture?;
    constructor(gfx: Graphics, x: number, y: number, width: number, height: number, src: string);
    draw(): void;
}
//# sourceMappingURL=Sprite.d.ts.map