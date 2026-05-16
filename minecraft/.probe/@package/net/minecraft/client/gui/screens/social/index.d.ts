import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $MutableComponent, $Component, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $WidgetTooltipHolder, $EditBox, $AbstractSelectionList, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $UUID, $List, $Set, $UUID_, $Collection_ } from "@package/java/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $SocialInteractionsScreen$Page extends $Enum<$SocialInteractionsScreen$Page> {
        static values(): $SocialInteractionsScreen$Page[];
        static valueOf(arg0: string): $SocialInteractionsScreen$Page;
        static ALL: $SocialInteractionsScreen$Page;
        static BLOCKED: $SocialInteractionsScreen$Page;
        static HIDDEN: $SocialInteractionsScreen$Page;
    }
    /**
     * Values that may be interpreted as {@link $SocialInteractionsScreen$Page}.
     */
    export type $SocialInteractionsScreen$Page_ = "all" | "hidden" | "blocked";
    export class $PlayerEntry extends $ContainerObjectSelectionList$Entry<$PlayerEntry> {
        isChatReportable(): boolean;
        hasRecentMessages(): boolean;
        getPlayerName(): string;
        getSkinGetter(): $Supplier<$PlayerSkin>;
        getEntryNarationMessage(arg0: $MutableComponent_): $MutableComponent;
        setHasRecentMessages(arg0: boolean): void;
        isRemoved(): boolean;
        setRemoved(arg0: boolean): void;
        getPlayerId(): $UUID;
        static BG_FILL: number;
        static PLAYERNAME_COLOR: number;
        static BG_FILL_REMOVED: number;
        static SKIN_SHADE: number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$PlayerEntry>;
        static PLAYER_STATUS_COLOR: number;
        constructor(arg0: $Minecraft, arg1: $SocialInteractionsScreen, arg2: $UUID_, arg3: string, arg4: $Supplier_<$PlayerSkin>, arg5: boolean);
        get chatReportable(): boolean;
        get playerName(): string;
        get skinGetter(): $Supplier<$PlayerSkin>;
        get playerId(): $UUID;
    }
    export class $SocialInteractionsScreen extends $Screen {
        onAddPlayer(arg0: $PlayerInfo): void;
        onRemovePlayer(arg0: $UUID_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static EMPTY_SEARCH: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static LIST_START: number;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static SEARCH_START: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        socialInteractionsPlayerList: $SocialInteractionsPlayerList;
        searchBox: $EditBox;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        constructor(arg0: $Screen);
    }
    export class $SocialInteractionsPlayerList extends $ContainerObjectSelectionList<$PlayerEntry> {
        isEmpty(): boolean;
        setFilter(arg0: string): void;
        addPlayer(arg0: $PlayerInfo, arg1: $SocialInteractionsScreen$Page_): void;
        removePlayer(arg0: $UUID_): void;
        updatePlayerList(arg0: $Collection_<$UUID_>, arg1: number, arg2: boolean): void;
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        headerHeight: number;
        hovered: $PlayerEntry;
        height: number;
        constructor(arg0: $SocialInteractionsScreen, arg1: $Minecraft, arg2: number, arg3: number, arg4: number, arg5: number);
        get empty(): boolean;
        set filter(value: string);
    }
    export class $PlayerSocialManager {
        isHidden(arg0: $UUID_): boolean;
        hidePlayer(arg0: $UUID_): void;
        showPlayer(arg0: $UUID_): void;
        getDiscoveredUUID(arg0: string): $UUID;
        addPlayer(arg0: $PlayerInfo): void;
        removePlayer(arg0: $UUID_): void;
        getHiddenPlayers(): $Set<$UUID>;
        stopOnlineMode(): void;
        isBlocked(arg0: $UUID_): boolean;
        shouldHideMessageFrom(arg0: $UUID_): boolean;
        startOnlineMode(): void;
        constructor(arg0: $Minecraft, arg1: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
