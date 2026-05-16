import { $AnimationProcessor } from "@package/com/zigythebird/playeranimcore/animation";
import { $PlayerAnimManager } from "@package/com/zigythebird/playeranim/animation";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IAnimation } from "@package/com/zigythebird/playeranimcore/animation/layered";

declare module "@package/com/zigythebird/playeranim/accessors" {
    export class $IMutableModel {
    }
    export interface $IMutableModel {
        playerAnimLib$setAnimation(arg0: $PlayerAnimManager): void;
        playerAnimLib$getAnimation(): $PlayerAnimManager;
    }
    export class $ICapeLayer {
    }
    export interface $ICapeLayer {
        applyBend(cape: $ModelPart, torso: $ModelPart, bend: number): void;
        resetBend(cape: $ModelPart): void;
    }
    export class $IAnimatedPlayer {
    }
    export interface $IAnimatedPlayer {
        playerAnimLib$getAnimManager(): $PlayerAnimManager;
        playerAnimLib$getAnimation(arg0: $ResourceLocation_): $IAnimation;
        playerAnimLib$getAnimProcessor(): $AnimationProcessor;
    }
}
