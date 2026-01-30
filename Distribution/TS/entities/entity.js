import { vector2 } from "../utilities/vector2";
export class entity {
    // Settings
    position;
    velocity;
    // Stats
    health = 100;
    melee = 0;
    mogging = 0;
    // Checks
    alive = true;
    constructor(position) {
        this.position = position;
        this.velocity = vector2.zero();
    }
    move(deltaTime) {
        this.position.sum(this.velocity.clone().scale(deltaTime));
    }
    damage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        }
    }
    die() {
        this.alive = false;
    }
    get getPosition() {
        return this.position.clone();
    }
}
//# sourceMappingURL=entity.js.map