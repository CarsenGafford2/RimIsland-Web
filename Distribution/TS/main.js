import { Graphics } from "./engine/Graphics";
import { Map } from "./game/Map";
import { Renderer } from "./engine/Renderer";
import { Tickerer } from "./engine/Tickerer";
// Canvas 
const graphics = new Graphics(800, 800);
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