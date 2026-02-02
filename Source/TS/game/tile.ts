import { Vector2 } from "../utilities/Vector2.js";

export abstract class Tile
{
    // Settings
    readonly position: Vector2;
    traversable: boolean;

    constructor(position: Vector2, traversable: boolean = true)
    {
        this.position = position.clone();
        this.traversable = traversable;
    }

    abstract update(deltaTime: number): void;
}