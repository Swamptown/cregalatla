import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/egg/mixin" {
    export class $LevelPlotAccessor {
    }
    export interface $LevelPlotAccessor {
        dimensionalsable$getContainer(): $SubLevelContainer;
        dimensionalsable$getLogSize(): number;
        dimensionalsable$getBiome(): $ResourceKey<$Biome>;
        dimensionalsable$getExpandPlotIfNecessary(): boolean;
        dimensionalsable$setExpandPlotIfNecessary(arg0: boolean): void;
    }
    export class $ServerLevelPlotAccessor {
        static dimensionalsable$invokeLogLoadingErrors(arg0: $ChunkPos, arg1: number, arg2: string): void;
    }
    export interface $ServerLevelPlotAccessor {
        dimensionalsable$invokeNewNonLitChunk(arg0: $ChunkPos): void;
        dimensionalsable$getLightEngine(): $LevelLightEngine;
        dimensionalsable$invokeLightChunk(arg0: $LevelChunk): void;
    }
}
