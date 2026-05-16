import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $PlayerAnimBone } from "@package/com/zigythebird/playeranimcore/bones";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $AnimationStack } from "@package/com/zigythebird/playeranimcore/animation/layered";

declare module "@package/com/zigythebird/playeranim/animation" {
    export class $PlayerAnimManager extends $AnimationStack {
        getPlayer(): $AbstractClientPlayer;
        getLastUpdateTime(): number;
        getTickDelta(): number;
        setTickDelta(tickDelta: number): void;
        updatedAt(updateTime: number): void;
        isFirstTick(): boolean;
        updatePart(part: $ModelPart, secondLayer: $ModelPart, bone: $PlayerAnimBone): void;
        constructor(player: $AbstractClientPlayer);
        get player(): $AbstractClientPlayer;
        get lastUpdateTime(): number;
        get firstTick(): boolean;
    }
}
