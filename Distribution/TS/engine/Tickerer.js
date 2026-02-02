export class Tickerer {
    static _instance;
    lastTime = 0;
    running = false;
    renderer;
    constructor() { }
    static get instance() {
        if (!this._instance) {
            this._instance = new Tickerer();
        }
        return this._instance;
    }
    attach(renderer) {
        this.renderer = renderer;
    }
    start() {
        if (this.running)
            return;
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.tick);
    }
    stop() {
        this.running = false;
    }
    tick = (tickerer) => {
        if (!this.running)
            return;
        const delta = (tickerer - this.lastTime) / 1000;
        this.lastTime = tickerer;
        // UPDATE SYSTEMS HERE:
        // physics.update(delta)
        // input.update()
        // RENDER LAST!
        this.renderer?.render(delta);
        requestAnimationFrame(this.tick);
    };
}
//# sourceMappingURL=Tickerer.js.map