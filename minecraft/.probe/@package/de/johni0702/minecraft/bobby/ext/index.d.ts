import { $VisibleChunksTracker, $FakeChunkManager } from "@package/de/johni0702/minecraft/bobby";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $DataLayer, $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ClientboundLightUpdatePacketData } from "@package/net/minecraft/network/protocol/game";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $LevelLightEngine, $LayerLightEventListener } from "@package/net/minecraft/world/level/lighting";

declare module "@package/de/johni0702/minecraft/bobby/ext" {
    export class $WorldChunkExt {
        static get(arg0: $LevelChunk): $WorldChunkExt;
    }
    export interface $WorldChunkExt {
        bobby_setInitialLightData(arg0: $ClientboundLightUpdatePacketData): void;
        bobby_getInitialLightData(): $ClientboundLightUpdatePacketData;
    }
    export class $ClientPlayNetworkHandlerExt {
        static get(arg0: $ClientPacketListener): $ClientPlayNetworkHandlerExt;
    }
    export interface $ClientPlayNetworkHandlerExt {
        bobby_queueUnloadFakeLightDataTask(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayNetworkHandlerExt}.
     */
    export type $ClientPlayNetworkHandlerExt_ = ((arg0: $Runnable) => void);
    export class $ChunkLightProviderExt {
        static get(arg0: $LayerLightEventListener): $ChunkLightProviderExt;
    }
    export interface $ChunkLightProviderExt {
        bobby_addSectionData(arg0: number, arg1: $DataLayer): void;
        bobby_removeSectionData(arg0: number): void;
        bobby_setTainted(arg0: number, arg1: number): void;
    }
    export class $LightingProviderExt {
        static get(arg0: $LevelLightEngine): $LightingProviderExt;
    }
    export interface $LightingProviderExt {
        bobby_enabledColumn(arg0: number): void;
        bobby_disableColumn(arg0: number): void;
    }
    export class $ClientChunkManagerExt {
    }
    export interface $ClientChunkManagerExt {
        bobby_getRealChunksTracker(): $VisibleChunksTracker;
        bobby_onFakeChunkRemoved(arg0: number, arg1: number, arg2: boolean): void;
        bobby_getFakeChunkManager(): $FakeChunkManager;
        bobby_onFakeChunkAdded(arg0: number, arg1: number): void;
    }
}
