import { $Consumer_ } from "@package/java/util/function";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Runnable_ } from "@package/java/lang";
import { $Stack } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Transformation } from "@package/com/mojang/math";
import { $Rect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering" {
    export class $EnhancedPoseStack {
        setOnTransform(arg0: $Runnable_): $EnhancedPoseStack;
        clear(): boolean;
        scale(arg0: number, arg1: number, arg2: number): void;
        last(): $PoseStack$Pose;
        setIdentity(): void;
        pushTransformation(arg0: $Transformation): void;
        mulPose(arg0: $Matrix4f): void;
        mulPose(arg0: $Quaternionf): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        pushPose(): void;
        popPose(): void;
        rotateAround(arg0: $Quaternionf, arg1: number, arg2: number, arg3: number): void;
        pose: $PoseStack;
        constructor(arg0: $PoseStack);
        set onTransform(value: $Runnable_);
    }
    export class $UIVisualLayer {
        unbind(): void;
        bind(arg0: $GUIContext): void;
        clear(): void;
        release(): void;
        draw(arg0: $GUIContext): void;
        textureId(): number;
        constructor(arg0: $UIElement);
    }
    export class $GUIContext {
        pushVisualLayer(arg0: $UIVisualLayer): void;
        popVisualLayer(): void;
        setElementColor(arg0: number): void;
        resetElementColor(): void;
        drawTexture(arg0: $IGuiTexture_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        postRendering(arg0: $Consumer_<$GUIContext>): void;
        refreshLocalMouse(): void;
        callPostRendering(): void;
        static of(arg0: $ModularUI, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): $GUIContext;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Matrix4f): void;
        disableScissor(): void;
        mouseX: number;
        visualLayers: $Stack<$UIVisualLayer>;
        modularUI: $ModularUI;
        pose: $EnhancedPoseStack;
        mouseY: number;
        localMouseY: number;
        scissorStack: $Stack<$Rect>;
        graphics: $GuiGraphics;
        localMouseX: number;
        elementColor: number;
        partialTick: number;
        mc: $Minecraft;
        constructor();
    }
}
