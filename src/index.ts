import { Application, Loader, Texture, AnimatedSprite } from "pixi.js";
import "./style.css";
import Main from "./game/main";
import ScreenUtils from "./utils/screenUtils";

const gameWidth = 1920;
const gameHeight = 1080;
const main = new Main();

const app = new Application({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
    autoDensity: true,
});

window.onload = async (): Promise<void> => {
    document.body.appendChild(app.view);

    resizeCanvas();

    new ScreenUtils(app);

    app.stage.addChild(main);
    app.stage.interactive = true;
};

function resizeCanvas(): void {
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        // const scaleX = window.innerWidth / gameWidth;
        // const scaleY = window.innerHeight / gameHeight;
        // const appScale = Math.max(scaleX, scaleY);
        // app.stage.scale.set(appScale)
        // main.x = app.stage.width / 2 - actualWidth() / 2;
        // main.y = app.stage.height / 2 - actualHeight() / 2;

        // works fine but not
        // const scaleFactor = Math.min(
        //     window.innerWidth / gameWidth,
        //     window.innerHeight / gameHeight
        // );
        // const newWidth = Math.ceil(gameWidth * scaleFactor);
        // const newHeight = Math.ceil(gameHeight * scaleFactor);

        // app.renderer.view.style.width = `${newWidth}px`;
        // app.renderer.view.style.height = `${newHeight}px`;

        // app.renderer.resize(newWidth, newHeight);
        // main.scale.set(scaleFactor);
    };

    resize();

    window.addEventListener("resize", resize);
}

function actualWidth() {
    const { width, height } = app.stage;
    const isWidthConstrained = width < (height * 9) / 16;
    return isWidthConstrained ? width : (height * 9) / 16;
}

function actualHeight() {
    const { width, height } = app.stage;
    const isHeightConstrained = (width * 16) / 9 > height;
    return isHeightConstrained ? height : (width * 16) / 9;
}
