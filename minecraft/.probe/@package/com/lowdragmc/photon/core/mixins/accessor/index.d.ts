import { $Particle, $ParticleRenderType_, $ParticleRenderType } from "@package/net/minecraft/client/particle";
import { $Map_, $Map, $Queue } from "@package/java/util";

declare module "@package/com/lowdragmc/photon/core/mixins/accessor" {
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        getParticles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
        get particles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngineAccessor}.
     */
    export type $ParticleEngineAccessor_ = (() => $Map_<$ParticleRenderType_, $Queue<$Particle>>);
}
