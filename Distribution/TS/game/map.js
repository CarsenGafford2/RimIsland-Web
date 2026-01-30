import { grid } from "../utilities/grid";
import { tile } from "./tile";
export class map extends grid {
    constructor(width, height) {
        super(width, height);
        for (let y = 0; y < this.dimension.y; y++) {
            for (let x = 0; x < this.dimension.x; x++) {
                // TODO: map out tiles
            }
        }
    }
}
//# sourceMappingURL=map.js.map