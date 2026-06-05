import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $ContraptionMatrices, $ActorVisual } from "@package/com/simibubi/create/content/contraptions/render";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $NonNullConsumer } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/simibubi/create/api/behaviour/movement" {
    export class $MovementBehaviour {
        static movementBehaviour<B extends $Block>(arg0: $MovementBehaviour): $NonNullConsumer<B>;
        static REGISTRY: $SimpleRegistry<$Block, $MovementBehaviour>;
    }
    export interface $MovementBehaviour {
        cancelStall(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        disableBlockEntityRendering(): boolean;
        tick(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        isActive(arg0: $MovementContext): boolean;
    }
}
