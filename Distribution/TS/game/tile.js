import { vector2 } from "../utilities/vector2";
export class tile {
    // Settings
    position;
    traversable;
    constructor(position, traversable = true) {
        this.position = position.clone();
        this.traversable = traversable;
    }
}
//# sourceMappingURL=tile.js.map