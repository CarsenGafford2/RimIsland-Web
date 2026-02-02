import { Vector2 } from "../utilities/Vector2";
export class Entity {
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
        this.velocity = Vector2.zero();
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
//# sourceMappingURL=Entity.js.map