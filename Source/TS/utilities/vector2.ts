export class Vector2
{
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0)
    {
       this.x = x;
       this.y = y; 
    }

    clone(): Vector2
    {
        return new Vector2(this.x, this.y);
    }

    sum(other: Vector2): Vector2
    {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    scale(scalar: number): Vector2
    {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    static zero(): Vector2
    {
        return new Vector2(0,0);
    }

}