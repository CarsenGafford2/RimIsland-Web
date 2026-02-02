import { Vector2 } from "../utilities/Vector2.js";
export declare abstract class Entity {
    protected position: Vector2;
    protected velocity: Vector2;
    protected health: number;
    protected melee: number;
    protected mogging: number;
    protected alive: boolean;
    constructor(position: Vector2);
    abstract update(deltaTime: number): void;
    protected move(deltaTime: number): void;
    damage(amount: number): void;
    protected die(): void;
    get getPosition(): Vector2;
}
//# sourceMappingURL=entity.d.ts.map