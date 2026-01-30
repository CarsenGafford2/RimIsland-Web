import { vector2 } from "../utilities/vector2";

export abstract class tile
{
    // Settings
    readonly position: vector2;
    traversable: boolean;

    constructor(position: vector2, traversable: boolean = true)
    {
        this.position = position.clone();
        this.traversable = traversable;
    }

    abstract update(deltaTime: number): void;
}