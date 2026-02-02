import { Vector2 } from "../utilities/Vector2.js";
export declare abstract class Tile {
    readonly position: Vector2;
    traversable: boolean;
    constructor(position: Vector2, traversable?: boolean);
    abstract update(deltaTime: number): void;
}
//# sourceMappingURL=Tile.d.ts.map