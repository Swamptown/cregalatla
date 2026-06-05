import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/dev/emi/emi/runtime" {
    export class $EmiDrawContext implements $GlobalMixin {
        drawTextWithShadow(text: $Component_, x: number, y: number): void;
        drawTextWithShadow(text: $FormattedCharSequence_, x: number, y: number, color: number): void;
        drawTextWithShadow(text: $Component_, x: number, y: number, color: number): void;
        drawStack(stack: $EmiIngredient, x: number, y: number): void;
        drawStack(stack: $EmiIngredient, x: number, y: number, delta: number, flags: number): void;
        drawStack(stack: $EmiIngredient, x: number, y: number, flags: number): void;
        drawCenteredText(text: $Component_, x: number, y: number): void;
        drawCenteredText(text: $Component_, x: number, y: number, color: number): void;
        drawTexture(texture: $ResourceLocation_, x: number, y: number, u: number, v: number, width: number, height: number): void;
        drawTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number): void;
        drawTexture(texture: $ResourceLocation_, x: number, y: number, z: number, u: number, v: number, width: number, height: number, textureWidth: number, textureHeight: number): void;
        drawTexture(texture: $ResourceLocation_, x: number, y: number, z: number, u: number, v: number, width: number, height: number): void;
        drawText(text: $FormattedCharSequence_, x: number, y: number, color: number): void;
        drawText(text: $Component_, x: number, y: number): void;
        drawText(text: $Component_, x: number, y: number, color: number): void;
        drawCenteredTextWithShadow(text: $Component_, x: number, y: number): void;
        drawCenteredTextWithShadow(text: $Component_, x: number, y: number, color: number): void;
        push(): void;
        pop(): void;
        setColor(r: number, g: number, b: number): void;
        setColor(r: number, g: number, b: number, a: number): void;
        static wrap(context: $GuiGraphics): $EmiDrawContext;
        fill(x: number, y: number, width: number, height: number, color: number): void;
        raw(): $GuiGraphics;
        matrices(): $PoseStack;
        disableDepthTest(): void;
        enableDepthTest(): void;
        enableBlend(): void;
        disableBlend(): void;
        resetColor(): void;
    }
}
