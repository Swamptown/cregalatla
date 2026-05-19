import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection, $Collection_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/dev/latvian/mods/kubejs/stages" {
    export class $Stages {
    }
    export interface $Stages {
        addNoUpdate(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        getPlayer(): $Player;
        toggle(stage: string): boolean;
        getAll(): $Collection<string>;
        has(stage: string): boolean;
        remove(stage: string): boolean;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        sync(): void;
        get player(): $Player;
        get all(): $Collection<string>;
    }
    export class $TagWrapperStages extends $Record implements $Stages {
        addNoUpdate(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        getPlayer(): $Player;
        getAll(): $Collection<string>;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        player(): $Player;
        toggle(stage: string): boolean;
        has(stage: string): boolean;
        remove(stage: string): boolean;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        sync(): void;
        constructor(player: $Player);
        get all(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $TagWrapperStages}.
     */
    export type $TagWrapperStages_ = { player?: $Player,  } | [player?: $Player, ];
    export class $StageCreationEvent extends $PlayerEvent implements $ICancellableEvent {
        setPlayerStages(s: $Stages): void;
        getPlayerStages(): $Stages;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
    }
    export class $StageEvents {
        static get(player: $Player): $Stages;
        static create(player: $Player): $Stages;
    }
    export interface $StageEvents {
    }
    export class $NoStages extends $Record implements $Stages {
        addNoUpdate(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        getPlayer(): $Player;
        getAll(): $Collection<string>;
        has(stage: string): boolean;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        sync(): void;
        player(): $Player;
        toggle(stage: string): boolean;
        remove(stage: string): boolean;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        static NULL_INSTANCE: $NoStages;
        constructor(player: $Player);
        get all(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $NoStages}.
     */
    export type $NoStages_ = { player?: $Player,  } | [player?: $Player, ];
}
