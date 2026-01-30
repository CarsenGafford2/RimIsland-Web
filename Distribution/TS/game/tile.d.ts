import { vector2 } from "../utilities/vector2";
export declare abstract class tile {
    readonly position: vector2;
    traversable: boolean;
    constructor(position: vector2, traversable?: boolean);
    abstract update(deltaTime: number): void;
}
//# sourceMappingURL=tile.d.ts.map