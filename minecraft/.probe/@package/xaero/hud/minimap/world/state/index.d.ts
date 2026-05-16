import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Level } from "@package/net/minecraft/world/level";
import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $HudMod } from "@package/xaero/common";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/world/state" {
    export class $MinimapWorldState {
        setAutoRootContainerPath(arg0: $XaeroPath): void;
        setOutdatedAutoRootContainerPath(arg0: number, arg1: $XaeroPath): void;
        getOutdatedAutoRootContainerPath(arg0: number): $XaeroPath;
        setAutoWorldPath(arg0: $XaeroPath): void;
        getAutoContainerPathIgnoreCaseCache(): $XaeroPath;
        setAutoContainerPathIgnoreCaseCache(arg0: $XaeroPath): void;
        getAutoRootContainerPath(): $XaeroPath;
        getCurrentContainerPath(): $XaeroPath;
        getCurrentRootContainerPath(): $XaeroPath;
        getCustomContainerPath(): $XaeroPath;
        getCustomWorldPath(): $XaeroPath;
        getAutoWorldPath(): $XaeroPath;
        getCurrentWorldPath(arg0: $XaeroPath): $XaeroPath;
        getCurrentWorldPath(): $XaeroPath;
        setCustomWorldPath(arg0: $XaeroPath): void;
        constructor();
        get currentContainerPath(): $XaeroPath;
        get currentRootContainerPath(): $XaeroPath;
        get customContainerPath(): $XaeroPath;
    }
    export class $MinimapWorldStateUpdater {
        update(): void;
        /**
         * @deprecated
         */
        update(arg0: $MinimapSession): void;
        init(): void;
        getAutoRootContainerPath(arg0: number): $XaeroPath;
        /**
         * @deprecated
         */
        getAutoRootContainerPath(arg0: number, arg1: $ClientPacketListener, arg2: $MinimapSession): $XaeroPath;
        /**
         * @deprecated
         */
        ignoreContainerCase(arg0: $XaeroPath, arg1: $XaeroPath, arg2: $MinimapSession): $XaeroPath;
        ignoreContainerCase(arg0: $XaeroPath, arg1: $XaeroPath): $XaeroPath;
        /**
         * @deprecated
         */
        getPotentialWorldNode(arg0: $ResourceKey_<$Level>, arg1: boolean, arg2: $MinimapSession): string;
        getPotentialWorldNode(arg0: $ResourceKey_<$Level>, arg1: boolean): string;
        /**
         * @deprecated
         */
        getPotentialContainerPath(arg0: $MinimapSession): $XaeroPath;
        getPotentialContainerPath(): $XaeroPath;
        hasServerLevelId(arg0: $MinimapWorldRootContainer): boolean;
        getAutoWorldNodeBase(arg0: $MinimapWorldRootContainer): $Object;
        onServerLevelId(arg0: number): void;
        setCurrentWorldSpawn(arg0: $BlockPos_): void;
        static ROOT_CONTAINER_FORMAT: number;
        constructor(arg0: $HudMod, arg1: $MinimapSession, arg2: $ClientPacketListener);
        set currentWorldSpawn(value: $BlockPos_);
    }
}
