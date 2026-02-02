import { Graphics } from "./engine/Graphics.js";
import { Map } from "./game/Map.js";
import { Renderer } from "./engine/Renderer.js";
import { Tickerer } from "./engine/Tickerer.js";
import { Sprite } from "./utilities/Sprite.js";
// Canvas - attach to the gameContainer div
const graphics = new Graphics(800, 800);
const sprite = new Sprite(graphics, 50, 50, 320, 320, "../../Assets/Entities/github-commit.png");
//sprite.draw();
// Map
const map = new Map(20, 20);
// Renderer
const renderer = Renderer.instance;
// Tickerer
const tick = Tickerer.instance;
// Attach
tick.attach(renderer);
tick.start();
let message = 'Hello, World!';
console.log(message);
//# sourceMappingURL=Main.js.map