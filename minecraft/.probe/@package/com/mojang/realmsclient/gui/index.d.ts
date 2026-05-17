import { $Consumer_ } from "@package/java/util/function";
import { $DataFetcher$Task, $DataFetcher } from "@package/com/mojang/realmsclient/gui/task";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetTooltipHolder, $ObjectSelectionList$Entry, $Button$OnPress_, $Button$CreateNarration, $WidgetSprites, $Button } from "@package/net/minecraft/client/gui/components";
import { $RealmsPersistence } from "@package/com/mojang/realmsclient/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Spliterator, $Iterator, $List, $List_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Enum, $Record, $Iterable } from "@package/java/lang";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $RealmsNews, $RealmsServer, $RealmsServerPlayerLists, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
import { $RealmsObjectSelectionList } from "@package/net/minecraft/realms";
export * as screens from "@package/com/mojang/realmsclient/gui/screens";
export * as task from "@package/com/mojang/realmsclient/gui/task";

declare module "@package/com/mojang/realmsclient/gui" {
    export class $RealmsWorldSlotButton$Action extends $Enum<$RealmsWorldSlotButton$Action> {
        static values(): $RealmsWorldSlotButton$Action[];
        static valueOf(arg0: string): $RealmsWorldSlotButton$Action;
        static SWITCH_SLOT: $RealmsWorldSlotButton$Action;
        static JOIN: $RealmsWorldSlotButton$Action;
        static NOTHING: $RealmsWorldSlotButton$Action;
    }
    /**
     * Values that may be interpreted as {@link $RealmsWorldSlotButton$Action}.
     */
    export type $RealmsWorldSlotButton$Action_ = "nothing" | "switch_slot" | "join";
    export class $RealmsDataFetcher {
        getTasks(): $List<$DataFetcher$Task<never>>;
        dataFetcher: $DataFetcher;
        notificationsTask: $DataFetcher$Task<$List<$RealmsNotification>>;
        pendingInvitesTask: $DataFetcher$Task<number>;
        trialAvailabilityTask: $DataFetcher$Task<boolean>;
        newsTask: $DataFetcher$Task<$RealmsNews>;
        newsManager: $RealmsNewsManager;
        serverListUpdateTask: $DataFetcher$Task<$RealmsDataFetcher$ServerListData>;
        onlinePlayersTask: $DataFetcher$Task<$RealmsServerPlayerLists>;
        constructor(arg0: $RealmsClient);
        get tasks(): $List<$DataFetcher$Task<never>>;
    }
    export class $RealmsWorldSlotButton extends $Button {
        getState(): $RealmsWorldSlotButton$State;
        setServerData(arg0: $RealmsServer): void;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        static EMPTY_SLOT_LOCATION: $ResourceLocation;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static SMALL_WIDTH: number;
        alpha: number;
        static DEFAULT_WORLD_SLOT_2: $ResourceLocation;
        static DEFAULT_WORLD_SLOT_3: $ResourceLocation;
        static DEFAULT_WORLD_SLOT_1: $ResourceLocation;
        static DEFAULT_SPACING: number;
        height: number;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_HEIGHT: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Button$OnPress_);
        get state(): $RealmsWorldSlotButton$State;
        set serverData(value: $RealmsServer);
    }
    export class $RowButton {
        static rowButtonMouseClicked(arg0: $RealmsObjectSelectionList<never>, arg1: $ObjectSelectionList$Entry<never>, arg2: $List_<$RowButton>, arg3: number, arg4: number, arg5: number): void;
        drawForRowAt(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static drawButtonsInRow(arg0: $GuiGraphics, arg1: $List_<$RowButton>, arg2: $RealmsObjectSelectionList<never>, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getRight(): number;
        onClick(arg0: number): void;
        getBottom(): number;
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get right(): number;
        get bottom(): number;
    }
    export class $RealmsWorldSlotButton$State {
        minigame: boolean;
        action: $RealmsWorldSlotButton$Action;
        empty: boolean;
        constructor(arg0: $RealmsServer, arg1: number);
    }
    export class $RealmsNewsManager {
        newsLink(): string;
        updateUnreadNews(arg0: $RealmsNews): void;
        hasUnreadNews(): boolean;
        constructor(arg0: $RealmsPersistence);
    }
    export class $RealmsServerList implements $Iterable<$RealmsServer> {
        isEmpty(): boolean;
        iterator(): $Iterator<$RealmsServer>;
        updateServersList(arg0: $List_<$RealmsServer>): void;
        removeItem(arg0: $RealmsServer): void;
        spliterator(): $Spliterator<$RealmsServer>;
        forEach(arg0: $Consumer_<$RealmsServer>): void;
        constructor(arg0: $Minecraft);
        [Symbol.iterator](): Iterator<$RealmsServer>
        get empty(): boolean;
    }
    export class $RealmsDataFetcher$ServerListData extends $Record {
        serverList(): $List<$RealmsServer>;
        availableSnapshotServers(): $List<$RealmsServer>;
        constructor(arg0: $List_<$RealmsServer>, arg1: $List_<$RealmsServer>);
    }
    /**
     * Values that may be interpreted as {@link $RealmsDataFetcher$ServerListData}.
     */
    export type $RealmsDataFetcher$ServerListData_ = { availableSnapshotServers?: $List_<$RealmsServer>, serverList?: $List_<$RealmsServer>,  } | [availableSnapshotServers?: $List_<$RealmsServer>, serverList?: $List_<$RealmsServer>, ];
}
