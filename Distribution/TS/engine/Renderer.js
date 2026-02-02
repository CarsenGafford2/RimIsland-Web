// Singleton Renderer, There should only be one global instance at all times.
export class Renderer {
    static _instance = null;
    static get instance() {
        if (!Renderer._instance) {
            Renderer._instance = new Renderer();
        }
        return Renderer._instance;
    }
    constructor() {
    }
    render(deltaTime) {
        console.log("Rendering Frame");
    }
}
//# sourceMappingURL=Renderer.js.map