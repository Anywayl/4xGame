import { Application } from "pixi.js";

export default class ScreenUtils {
    private static game: Application;

    constructor(game: Application) {
        ScreenUtils.game = game;
    }

    public static get width() {
        return ScreenUtils.game.view.width;
    }

    public static get height() {
        return ScreenUtils.game.view.height;
    }

    public static pX(obj: any, px: number) {
        obj.position.x = ScreenUtils.width * px;
    }

    public static pY(obj: any, py: number) {
        obj.position.y = ScreenUtils.height * py;
    }

    public static pXY(obj: any, px: number, py: number) {
        obj.position.x = ScreenUtils.width * px;
        obj.position.y = ScreenUtils.height * py;
    }
}
