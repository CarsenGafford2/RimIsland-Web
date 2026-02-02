import { Vector2 } from "./Vector2.js";

export abstract class Grid<T>
{
    // Settings
    readonly dimension: { x: number, y: number };

    // Overload Signatures
    // constructor(width: number, height: number);
    // constructor(dimension: Vector2);

    // Constructor
    constructor(width: number, height: number)
    {
        this.dimension = { x: width, y: height};
    }
    
    abstract set(x: number, y: number, value: T): void;

    abstract get(x: number, y: number): T | null;
}