import { $Event } from "@package/net/neoforged/bus/api";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/com/supermartijn642/core/render" {
    export class $RenderWorldEvent extends $Event {
        getPoseStack(): $PoseStack;
        getPartialTicks(): number;
        constructor(poseStack: $PoseStack, partialTicks: number);
        get poseStack(): $PoseStack;
        get partialTicks(): number;
    }
}
