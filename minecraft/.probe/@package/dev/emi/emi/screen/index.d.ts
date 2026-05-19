import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Bounds_ } from "@package/dev/emi/emi/api/widget";
import { $MultiBufferSource_, $CubeMap, $RenderType, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $EmiDrawContext } from "@package/dev/emi/emi/runtime";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $SidebarType } from "@package/dev/emi/emi/config";
import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $EmiBind } from "@package/dev/emi/emi/input";
import { $Supplier_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $Field } from "@package/java/lang/reflect";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $ListWidget } from "@package/dev/emi/emi/screen/widget/config";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as widget from "@package/dev/emi/emi/screen/widget";

declare module "@package/dev/emi/emi/screen" {
    export class $ConfigScreen$Mutator<T> implements $GlobalMixin {
        get(): T;
        set(value: T): void;
        constructor(this$0: $ConfigScreen);
    }
    export class $EmiScreenManager$ScreenSpace implements $GlobalMixin {
        containsNotExcluded(x: number, y: number): boolean;
        getRawOffsetFromMouse(mouseX: number, mouseY: number): number;
        getRawX(off: number): number;
        getRawY(off: number): number;
        getClosestEdge(x: number, y: number): number;
        getEdgeX(off: number): number;
        getEdgeY(off: number): number;
        getPage(page: number): $List<$EmiIngredient>;
        getY(x: number, y: number): number;
        getWidth(y: number): number;
        getRawOffset(x: number, y: number): number;
        getStacks(): $List<$EmiIngredient>;
        contains(x: number, y: number): boolean;
        getType(): $SidebarType;
        render(context: $EmiDrawContext, mouseX: number, mouseY: number, delta: number, startIndex: number): void;
        getX(x: number, y: number): number;
        search: boolean;
        tw: number;
        tx: number;
        th: number;
        ty: number;
        pageSize: number;
        widths: number[];
        rtl: boolean;
        batcher: $StackBatcher;
        constructor(tx: number, ty: number, tw: number, th: number, rtl: boolean, exclusion: $List_<$Bounds_>, typeSupplier: $Supplier_<$SidebarType>, search: boolean);
        get stacks(): $List<$EmiIngredient>;
        get type(): $SidebarType;
    }
    export class $StackBatcher implements $GlobalMixin {
        repopulate(): void;
        isPopulated(): boolean;
        begin(x: number, y: number, z: number): void;
        static isEnabled(): boolean;
        render(batchable: $StackBatcher$Batchable, draw: $GuiGraphics, x: number, y: number, delta: number): void;
        render(stack: $EmiIngredient, draw: $GuiGraphics, x: number, y: number, delta: number, flags: number): void;
        render(stack: $EmiIngredient, draw: $GuiGraphics, x: number, y: number, delta: number): void;
        draw(): void;
        bake(layer: $RenderType, bldr: $BufferBuilder): void;
        static EXTRA_RENDER_LAYERS: $List<$RenderType>;
        constructor();
        get populated(): boolean;
        static get enabled(): boolean;
    }
    export class $ConfigScreen extends $Screen implements $GlobalMixin {
        setActiveBind(bind: $EmiBind, offset: number): void;
        static getFieldTooltip(field: $Field): $List<$ClientTooltipComponent>;
        modify$bbb000$emixx$init(widget: $GuiEventListener): $GuiEventListener;
        objectMutator<T>(field: $Field): $ConfigScreen$Mutator<T>;
        updateChanges(): void;
        jump(jump: string): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        lastModifier: number;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        activeBindOffset: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        resetButton: $Button;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        list: $ListWidget;
        static FOOTER_SEPARATOR: $ResourceLocation;
        activeBind: $EmiBind;
        narratorButton: $CycleButton<$NarratorStatus>;
        originalConfig: string;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        activeModifiers: number;
        font: $Font;
        constructor(last: $Screen);
    }
    export class $StackBatcher$Batchable {
    }
    export interface $StackBatcher$Batchable extends $GlobalMixin {
        isSideLit(): boolean;
        renderForBatch(arg0: $MultiBufferSource_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setUnbatchable(): void;
        isUnbatchable(): boolean;
        get sideLit(): boolean;
    }
}
