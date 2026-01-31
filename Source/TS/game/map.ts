import { Grid } from "../utilities/Grid";
import { Tile } from "./Tile";

export class Map extends Grid<Tile>
{
    constructor(width: number, height: number)
    {
        super(width, height);

        for (let y = 0; y < this.dimension.y; y++)
        {
            for (let x= 0; x < this.dimension.x; x++)
            {
                // TODO: map out tiles
            }
        }
    }

    set(x: number, y: number, value: Tile): void 
    {
        throw new Error("Method not implemented.");
    }

    get(x: number, y: number): Tile | null 
    {
        throw new Error("Method not implemented.");
    }
}