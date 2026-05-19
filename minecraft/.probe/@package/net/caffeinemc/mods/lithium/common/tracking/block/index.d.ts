import { $Level_ } from "@package/net/minecraft/world/level";
import { $SectionPos } from "@package/net/minecraft/core";
import { $ListeningBlockStatePredicate, $BlockListeningSection } from "@package/net/caffeinemc/mods/lithium/common/block";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $WorldSectionBox_, $WorldSectionBox } from "@package/net/caffeinemc/mods/lithium/common/util/tuples";

declare module "@package/net/caffeinemc/mods/lithium/common/tracking/block" {
    export class $ChunkSectionChangeCallback {
        onChunkSectionInvalidated(arg0: $SectionPos): void;
        addTracker(arg0: $SectionedBlockChangeTracker, arg1: $ListeningBlockStatePredicate): number;
        removeTracker(arg0: $SectionedBlockChangeTracker, arg1: $ListeningBlockStatePredicate): number;
        onBlockChange(arg0: number, arg1: $BlockListeningSection): number;
        static init(): void;
        static create(arg0: number, arg1: $Level_): $ChunkSectionChangeCallback;
        constructor();
    }
    export class $SectionedBlockChangeTracker {
        matchesMovedBox(arg0: $AABB_): boolean;
        listenToAllSections(): void;
        onChunkSectionInvalidated(arg0: $SectionPos): void;
        isUnchangedSince(arg0: number): boolean;
        static registerAt(arg0: $Level_, arg1: $AABB_, arg2: $ListeningBlockStatePredicate): $SectionedBlockChangeTracker;
        unregister(): void;
        register(): void;
        setChanged(arg0: number): void;
        setChanged(arg0: $BlockListeningSection): void;
        trackedWorldSections: $WorldSectionBox;
        blockGroup: $ListeningBlockStatePredicate;
        constructor(arg0: $WorldSectionBox_, arg1: $ListeningBlockStatePredicate);
    }
}
