import { Vector2 } from "../utilities/Vector2";
export class Tile {
    // Settings
    position;
    traversable;
    constructor(position, traversable = true) {
        this.position = position.clone();
        this.traversable = traversable;
    }
}
//# sourceMappingURL=Tile.js.map