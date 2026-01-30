import { vector2 } from "./vector2";

export class grid<T>
{
    // Settings
    readonly dimension: vector2;

    // Overload Signatures
    constructor(width: number, height: number);
    constructor(dimension: vector2);

    // Constructor
    constructor(value: number | vector2, height?: number)
    {
        if (value instanceof vector2)
        {
            this.dimension = value;
        }
        else if (typeof value === "number" && typeof height === "number") 
        {
            this.dimension = new vector2(value, height);
        }
        else
        {
            throw new Error("Your grid constructor sharted.");
        }
    }
}