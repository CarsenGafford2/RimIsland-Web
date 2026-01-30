import { vector2 } from "../utilities/vector2";
export declare abstract class entity {
    protected position: vector2;
    protected velocity: vector2;
    protected health: number;
    protected melee: number;
    protected mogging: number;
    protected alive: boolean;
    constructor(position: vector2);
    abstract update(deltaTime: number): void;
    protected move(deltaTime: number): void;
    damage(amount: number): void;
    protected die(): void;
    get getPosition(): vector2;
}
//# sourceMappingURL=entity.d.ts.map