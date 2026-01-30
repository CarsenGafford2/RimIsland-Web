export class vector2
{
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0)
    {
       this.x = x;
       this.y = y; 
    }

    clone(): vector2
    {
        return new vector2(this.x, this.y);
    }

    sum(other: vector2): vector2
    {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    scale(scalar: number): vector2
    {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    static zero(): vector2
    {
        return new vector2(0,0);
    }

}