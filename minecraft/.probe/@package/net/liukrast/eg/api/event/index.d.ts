import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $Event } from "@package/net/neoforged/bus/api";
import { $AbstractPanelBehaviour } from "@package/net/liukrast/eg/api/logistics/board";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/liukrast/eg/api/event" {
    export class $AbstractPanelRenderEvent extends $Event {
        overlay: number;
        light: number;
        poseStack: $PoseStack;
        behaviour: $AbstractPanelBehaviour;
        bufferSource: $MultiBufferSource;
        partialTicks: number;
        constructor(arg0: $AbstractPanelBehaviour, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number);
    }
}
