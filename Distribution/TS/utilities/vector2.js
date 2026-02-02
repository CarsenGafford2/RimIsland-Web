export class Vector2 {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    sum(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    static zero() {
        return new Vector2(0, 0);
    }
}
//# sourceMappingURL=Vector2.js.map