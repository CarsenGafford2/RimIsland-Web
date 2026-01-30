import { vector2 } from "../utilities/vector2";

export abstract class entity
{
    // Settings
    protected position: vector2;
    protected velocity: vector2;

    // Stats
    protected health: number = 100;
    protected melee: number = 0;
    protected mogging: number = 0;
    
    // Checks
    protected alive: boolean = true;

    constructor(position: vector2)
    {
        this.position = position;
        this.velocity = vector2.zero();
    }

    // Remove deltaTime if not planned, this is mainly just a placeholder
    abstract update(deltaTime: number): void;

    protected move(deltaTime: number): void
    {
        this.position.sum(this.velocity.clone().scale(deltaTime));
    }

    damage(amount: number): void
    {
        this.health -= amount;
        if (this.health <= 0)
        {
            this.die();
        }
    }

    protected die(): void
    {
        this.alive = false;
    }

    get getPosition()
    {
        return this.position.clone();
    }
}