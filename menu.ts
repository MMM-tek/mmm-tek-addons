//% color="#22f70a" icon="" block="MMM-tek Addons"
//% groups=['Pause', 'System Menu']
namespace Mtek {
    //% block="Add system menu option $name icon $image function:"
    //% handlerStatement=1
    //% image.shadow=screen_image_picker
    //% group="System Menu"
    export function addmenuoption(name: string, image: Image, handler: () => void): void {
        scene.systemMenu.addEntry(() => name, handler, image);
    }
    //%block
    //%group="Pause"
    export function pauseGameA() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.A.isPressed();
                if (currentState) {
                    game.popScene();
                    controller._setUserEventsEnabled(true);
                }
        })
    }
    //%block
    //%group="Pause"
    export function pauseGameB() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.B.isPressed();
            if (currentState) {
                game.popScene();
                controller._setUserEventsEnabled(true);
            }
        })
    }
    //%block
    //%group="Pause"
    export function pauseGameUp() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.up.isPressed();
            if (currentState) {
                game.popScene();
                controller._setUserEventsEnabled(true);
            }
        })
    }
    //%block
    //%group="Pause"
    export function pauseGameDown() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.down.isPressed();
            if (currentState) {
                game.popScene();
                controller._setUserEventsEnabled(true);
            }
        })
    }
    //%block
    //%group="Pause"
    export function pauseGameRight() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.right.isPressed();
            if (currentState) {
                game.popScene();
                controller._setUserEventsEnabled(true);
            }
        })
    }
    //%block
    //%group="Pause"
    export function pauseGameLeft() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.left.isPressed();
            if (currentState) {
                game.popScene();
                controller._setUserEventsEnabled(true);
            }
        })
    }
    //%block
    //%group="Pause"
    export function pauseGameAny() {
        controller._setUserEventsEnabled(true);
        game.pushScene();
        game.currentScene().flags |= scene.Flag.SeeThrough;
        pauseUntil(() => !(controller.anyButton.isPressed()))
        game.onUpdate(() => {
            const currentState = controller.anyButton.isPressed();
            if (currentState) {
                game.popScene();
                controller._setUserEventsEnabled(true);
            }
        })
    }
}