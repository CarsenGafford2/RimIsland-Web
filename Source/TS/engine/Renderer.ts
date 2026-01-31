
// Singleton Renderer, There should only be one global instance at all times.
export class Renderer
{
    private static _instance: Renderer | null = null;

    public static get instance(): Renderer
    {
        if (!Renderer._instance)
        {
            Renderer._instance = new Renderer();
        }
        return Renderer._instance;
    }

    private constructor()
    {

    }

    render(deltaTime: number): void
    {
        console.log("Rendering Frame")
    }
}