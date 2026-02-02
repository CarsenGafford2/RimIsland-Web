import type { Renderer } from "./Renderer.js";
export declare class Tickerer {
    private static _instance?;
    private lastTime;
    private running;
    private renderer?;
    private constructor();
    static get instance(): Tickerer;
    attach(renderer: Renderer): void;
    start(): void;
    stop(): void;
    private tick;
}
//# sourceMappingURL=Tickerer.d.ts.map