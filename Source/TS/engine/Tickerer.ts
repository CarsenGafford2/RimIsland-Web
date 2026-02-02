import type { Renderer } from "./Renderer.js";

export class Tickerer
{
    private static _instance?: Tickerer;

    private lastTime = 0;
    private running = false;

    private renderer?: Renderer;

    private constructor() {}

    static get instance(): Tickerer
    {
        if (!this._instance)
        {
            this._instance = new Tickerer();
        }
        return this._instance;
    }

    attach(renderer: Renderer): void
    {
        this.renderer = renderer;
    }

    start(): void 
    {
        if (this.running) return;
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.tick);
    }

    stop(): void 
    {
        this.running = false;
    }

    private tick = (tickerer: number): void =>
    {
        if (!this.running) return;

        const delta = (tickerer - this.lastTime) / 1000;
        this.lastTime = tickerer;

        // UPDATE SYSTEMS HERE:
        // physics.update(delta)
        // input.update()

        // RENDER LAST!
        this.renderer?.render(delta);
        requestAnimationFrame(this.tick);
    }
}