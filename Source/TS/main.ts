import { Graphics } from "./engine/Graphics";
import { Map } from "./game/Map";
import { Renderer } from "./engine/Renderer";
import { Tickerer } from "./engine/Tickerer";


// Canvas - attach to the gameContainer div
const container = document.getElementById("gameContainer");
if (!container) throw new Error("Game container not found");
const graphics = new Graphics(800, 800, container);

// Map
const map = new Map(20, 20);

// Renderer
const renderer = Renderer.instance;

// Tickerer
const tick = Tickerer.instance;

// Attach
tick.attach(renderer);
tick.start();



let message: string = 'Hello, World!';
console.log(message);