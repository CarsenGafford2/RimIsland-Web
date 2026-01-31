import { Vector2 } from "../utilities/Vector2";

export abstract class Entity
{
    // Settings
    protected position: Vector2;
    protected velocity: Vector2;

    // Stats
    protected health: number = 100;
    protected melee: number = 0;
    protected mogging: number = 0;
    
    // Checks
    protected alive: boolean = true;

    constructor(position: Vector2)
    {
        this.position = position;
        this.velocity = Vector2.zero();
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