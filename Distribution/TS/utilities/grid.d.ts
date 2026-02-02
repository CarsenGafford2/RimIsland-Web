export declare abstract class Grid<T> {
    readonly dimension: {
        x: number;
        y: number;
    };
    constructor(width: number, height: number);
    abstract set(x: number, y: number, value: T): void;
    abstract get(x: number, y: number): T | null;
}
//# sourceMappingURL=Grid.d.ts.map