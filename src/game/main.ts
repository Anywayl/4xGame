import { AnimatedSprite, Container, Loader, Texture } from "pixi.js";
import ScreenUtils from "../utils/screenUtils";
export default class Main extends Container {
    constructor() {
        super();
        this.init();
    }

    private async init(): Promise<void> {
        await this.loadGameAssets();

        const birdFromSprite = this.getBird();
        birdFromSprite.anchor.set(0.5, 0.5);
        birdFromSprite.position.set(ScreenUtils.width / 2, ScreenUtils.height / 2);
        this.addChild(birdFromSprite);
    }

    private async loadGameAssets(): Promise<void> {
        return new Promise((res, rej) => {
            const loader = Loader.shared;
            loader.add("rabbit", "./assets/simpleSpriteSheet.json");

            loader.onComplete.once(() => {
                res();
            });

            loader.onError.once(() => {
                rej();
            });

            loader.load();
        });
    }

    private getBird(): AnimatedSprite {
        const bird = new AnimatedSprite([
            Texture.from("birdUp.png"),
            Texture.from("birdMiddle.png"),
            Texture.from("birdDown.png"),
        ]);

        bird.loop = true;
        bird.animationSpeed = 0.1;
        bird.play();
        bird.scale.set(3);

        return bird;
    }
}
