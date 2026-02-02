import { Grid } from "../utilities/Grid";
import { Tile } from "./Tile";
export declare class Map extends Grid<Tile> {
    constructor(width: number, height: number);
    set(x: number, y: number, value: Tile): void;
    get(x: number, y: number): Tile | null;
}
//# sourceMappingURL=Map.d.ts.map