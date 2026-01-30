import { vector2 } from "./vector2";
export class grid {
    // Settings
    dimension;
    // Constructor
    constructor(value, height) {
        if (value instanceof vector2) {
            this.dimension = value;
        }
        else if (typeof value === "number" && typeof height === "number") {
            this.dimension = new vector2(value, height);
        }
        else {
            throw new Error("Your grid constructor sharted.");
        }
    }
}
//# sourceMappingURL=grid.js.map