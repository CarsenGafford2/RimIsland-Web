import { Grid } from "../utilities/Grid.js";
import { Tile } from "./Tile.js";
export class Map extends Grid {
    constructor(width, height) {
        super(width, height);
        for (let y = 0; y < this.dimension.y; y++) {
            for (let x = 0; x < this.dimension.x; x++) {
                // TODO: map out tiles
            }
        }
    }
    set(x, y, value) {
        throw new Error("Method not implemented.");
    }
    get(x, y) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=Map.js.map