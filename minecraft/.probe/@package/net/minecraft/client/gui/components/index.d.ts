import { $IMixinEditBox as $IMixinEditBox$1, $IMixinAbstractWidget as $IMixinAbstractWidget$1, $IMixinAbstractSliderButton, $IMixinBossHealthOverlay, $IMixinSplashRenderer, $IMixinSuggestionsList, $IMixinButton, $IMixinCommandSuggestions } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $CubeMap, $PanoramaRenderer, $Rect2i } from "@package/net/minecraft/client/renderer";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $BuggerScreenRenderLinesInvoker } from "@package/io/github/mortuusars/exposure/mixin/client";
import { $GuiMessage, $OptionInstance, $GuiMessageTag, $NarratorStatus, $OptionInstance$TooltipSupplier_, $Minecraft, $GuiMessage_, $Options, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $Map, $OptionalInt, $UUID, $List, $SequencedCollection, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $CheckboxAccessor, $ImageButtonAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $BossEvent$BossBarColor, $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_, $BossEvent$BossBarOverlay } from "@package/net/minecraft/world";
import { $Supplier_, $Consumer_, $BiFunction, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $Suggestions, $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $CustomizableWidget$CustomBackgroundResetBehavior_, $CustomizableWidget, $UniqueLabeledSwitchCycleButton, $CustomizableSlider, $CustomizableWidget$CustomBackgroundResetBehavior, $UniqueWidget } from "@package/de/keksuccino/fancymenu/util/rendering/ui/widget";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $AbstractWidgetInvoker } from "@package/com/faboslav/structurify/common/mixin";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $IMixinAbstractWidget, $IMixinEditBox } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier {
        static create(arg0: $Component_): $Tooltip;
        static create(arg0: $Component_, arg1: $Component_): $Tooltip;
        updateNarration(arg0: $NarrationElementOutput): void;
        static splitTooltip(arg0: $Minecraft, arg1: $Component_): $List<$FormattedCharSequence>;
        toCharSequence(arg0: $Minecraft): $List<$FormattedCharSequence>;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        constructor(arg0: $Component_, arg1: $Component_);
    }
    export class $CommonButtons {
        static language(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        static accessibility(arg0: number, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(arg0: $Tooltip): void;
        updateNarration(arg0: $NarrationElementOutput): void;
        setDelay(arg0: $Duration_): void;
        refreshTooltipForNextRenderPass(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle_): void;
        createTooltipPositioner(arg0: $ScreenRectangle_, arg1: boolean, arg2: boolean): $ClientTooltipPositioner;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { action?: $Consumer_<$PopupScreen>, message?: $Component_,  } | [action?: $Consumer_<$PopupScreen>, message?: $Component_, ];
    export class $MultilineTextField$StringView extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        renderMenuBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isSelected(): boolean;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $TabManager, arg1: $Tab, arg2: number, arg3: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer implements $IMixinSplashRenderer {
        render(arg0: $GuiGraphics, arg1: number, arg2: $Font, arg3: number): void;
        getSplashFancyMenu(): string;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(arg0: string);
        get splashFancyMenu(): string;
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderContents(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setScrollAmount(arg0: number): void;
        scrollAmount(): number;
        scrollRate(): number;
        innerPadding(): number;
        totalInnerPadding(): number;
        withinContentAreaTopBottom(arg0: number, arg1: number): boolean;
        withinContentAreaPoint(arg0: number, arg1: number): boolean;
        getMaxScrollAmount(): number;
        renderBackground(arg0: $GuiGraphics): void;
        renderBorder(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderDecorations(arg0: $GuiGraphics): void;
        scrollbarVisible(): boolean;
        getInnerHeight(): number;
        scrollbarWidth(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get maxScrollAmount(): number;
        get innerHeight(): number;
    }
    export class $Button extends $AbstractButton implements $IMixinButton {
        static builder(arg0: $Component_, arg1: $Button$OnPress_): $Button$Builder;
        setPressActionFancyMenu(arg0: $Button$OnPress_): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Button$CreateNarration_);
        set pressActionFancyMenu(value: $Button$OnPress_);
    }
    export class $CycleButton$Builder<T> {
        create(arg0: $Component_, arg1: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_): $CycleButton<T>;
        create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        withCustomNarration(arg0: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        withTooltip(arg0: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(...arg0: T[]): $CycleButton$Builder<T>;
        withValues(arg0: $List_<T>, arg1: $List_<T>): $CycleButton$Builder<T>;
        withValues(arg0: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$Builder<T>;
        withInitialValue(arg0: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        constructor(arg0: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(arg0: number, arg1: number): $Button$Builder;
        bounds(arg0: number, arg1: number, arg2: number, arg3: number): $Button$Builder;
        pos(arg0: number, arg1: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(arg0: number): $Button$Builder;
        createNarration(arg0: $Button$CreateNarration_): $Button$Builder;
        tooltip(arg0: $Tooltip): $Button$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(arg0: $Font, ...arg1: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: number, arg2: number, ...arg3: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: number, ...arg2: $Component_[]): $MultiLineLabel;
        static create(arg0: $Font, arg1: $Component_, arg2: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        renderLeftAligned(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderCentered(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getLineCount(): number;
        renderLeftAlignedNoShadow(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): number;
        getWidth(): number;
        get lineCount(): number;
        get width(): number;
    }
    export class $CommandSuggestions$SuggestionsList implements $IMixinSuggestionsList {
        useSuggestion(): void;
        getNarrationMessage(): $Component;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        select(arg0: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        cycle(arg0: number): void;
        mouseScrolled(arg0: number): boolean;
        getLastMouseFancyMenu(): $Vec2;
        setLastMouseFancyMenu(arg0: $Vec2): void;
        getRectFancyMenu(): $Rect2i;
        getCurrentFancyMenu(): number;
        getOffsetFancyMenu(): number;
        tabCycles: boolean;
        this$0: $CommandSuggestions;
        get narrationMessage(): $Component;
        get rectFancyMenu(): $Rect2i;
        get currentFancyMenu(): number;
        get offsetFancyMenu(): number;
    }
    export class $LogoRenderer {
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        renderLogo(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(arg0: boolean);
    }
    export class $Checkbox$Builder {
        pos(arg0: number, arg1: number): $Checkbox$Builder;
        build(): $Checkbox;
        maxWidth(arg0: number): $Checkbox$Builder;
        tooltip(arg0: $Tooltip): $Checkbox$Builder;
        selected(arg0: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(arg0: boolean): $Checkbox$Builder;
        onValueChange(arg0: $Checkbox$OnValueChange_): $Checkbox$Builder;
        constructor(arg0: $Component_, arg1: $Font);
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { name?: $Component_, scoreWidth?: number, formattedScore?: $Component_, score?: number,  } | [name?: $Component_, scoreWidth?: number, formattedScore?: $Component_, score?: number, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $SpriteIconButton extends $Button {
        static builder(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean): $SpriteIconButton$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_);
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(arg0: $CycleButton<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccessor {
        remove(arg0: number): E;
        addEntry(arg0: E): number;
        getEntry(arg0: number): E;
        nextEntry(arg0: $ScreenDirection_, arg1: $Predicate_<E>, arg2: E): E;
        nextEntry(arg0: $ScreenDirection_): E;
        nextEntry(arg0: $ScreenDirection_, arg1: $Predicate_<E>): E;
        getMaxScroll(): number;
        updateSize(arg0: number, arg1: $HeaderAndFooterLayout): void;
        centerScrollOn(arg0: E): void;
        setScrollAmount(arg0: number): void;
        renderSelection(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        clearEntries(): void;
        getMaxPosition(): number;
        getSelected(): E;
        enableScissor(arg0: $GuiGraphics): void;
        renderItem(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getItemCount(): number;
        setSelected(arg0: E): void;
        removeEntry(arg0: E): boolean;
        getFocused(): E;
        getRowWidth(): number;
        getRowLeft(): number;
        getRowRight(): number;
        updateSizeAndPosition(arg0: number, arg1: number, arg2: number): void;
        getScrollAmount(): number;
        replaceEntries(arg0: $Collection_<E>): void;
        getScrollbarPosition(): number;
        isSelectedItem(arg0: number): boolean;
        getHovered(): E;
        narrateListElementPosition(arg0: $NarrationElementOutput, arg1: E): void;
        renderHeader(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        setRenderHeader(arg0: boolean, arg1: number): void;
        getFirstElement(): E;
        addEntryToTop(arg0: E): void;
        removeEntryFromTop(arg0: E): boolean;
        getEntryAtPosition(arg0: number, arg1: number): E;
        clampScrollAmount(): void;
        clickedHeader(arg0: number, arg1: number): boolean;
        renderDecorations(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        renderListBackground(arg0: $GuiGraphics): void;
        renderListItems(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderListSeparators(arg0: $GuiGraphics): void;
        scrollbarVisible(): boolean;
        getRowTop(arg0: number): number;
        setClampedScrollAmount(arg0: number): void;
        updateScrollingState(arg0: number, arg1: number, arg2: number): void;
        getDefaultScrollbarPosition(): number;
        isValidMouseClick(arg0: number): boolean;
        getRowBottom(arg0: number): number;
        bindEntryToSelf(arg0: $AbstractSelectionList$Entry<E>): void;
        ensureVisible(arg0: E): void;
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        get maxScroll(): number;
        get maxPosition(): number;
        get itemCount(): number;
        get focused(): E;
        get rowWidth(): number;
        get rowLeft(): number;
        get rowRight(): number;
        get scrollbarPosition(): number;
        get firstElement(): E;
        set clampedScrollAmount(value: number);
        get defaultScrollbarPosition(): number;
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_);
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener): void;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        targetPercent: number;
        setTime: number;
        constructor(arg0: $UUID_, arg1: $Component_, arg2: number, arg3: $BossEvent$BossBarColor_, arg4: $BossEvent$BossBarOverlay_, arg5: boolean, arg6: boolean, arg7: boolean);
    }
    export class $MultilineTextField {
        value(): string;
        setValue(arg0: string): void;
        cursor(): number;
        hasSelection(): boolean;
        deleteText(arg0: number): void;
        setSelecting(arg0: boolean): void;
        hasCharacterLimit(): boolean;
        characterLimit(): number;
        seekCursorLine(arg0: number): void;
        getSelectedText(): string;
        getPreviousWord(): $MultilineTextField$StringView;
        getNextWord(): $MultilineTextField$StringView;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        getLineView(arg0: number): $MultilineTextField$StringView;
        getLineAtCursor(): number;
        seekCursorToPoint(arg0: number, arg1: number): void;
        seekCursor(arg0: $Whence_, arg1: number): void;
        setCursorListener(arg0: $Runnable_): void;
        getSelected(): $MultilineTextField$StringView;
        keyPressed(arg0: number): boolean;
        insertText(arg0: string): void;
        getLineCount(): number;
        setCharacterLimit(arg0: number): void;
        setValueListener(arg0: $Consumer_<string>): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(arg0: $Font, arg1: number);
        set selecting(value: boolean);
        get selectedText(): string;
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
        get lineAtCursor(): number;
        set cursorListener(value: $Runnable_);
        get selected(): $MultilineTextField$StringView;
        get lineCount(): number;
        set valueListener(value: $Consumer_<string>);
    }
    export class $ChatComponent$State {
        messages: $List<$GuiMessage>;
        history: $List<string>;
        delayedMessageDeletions: $List<$ChatComponent$DelayedMessageDeletion>;
        constructor(arg0: $List_<$GuiMessage_>, arg1: $List_<string>, arg2: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        focusPathAtIndex(arg0: $FocusNavigationEvent_, arg1: number): $ComponentPath;
        updateNarration(arg0: $NarrationElementOutput): void;
        narratables(): $List<$NarratableEntry>;
        setFocused(arg0: $GuiEventListener): void;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxAccessor {
        static builder(arg0: $Component_, arg1: $Font): $Checkbox$Builder;
        static getDefaultWidth(arg0: $Component_, arg1: $Font): number;
        selected(): boolean;
        static getBoxSize(arg0: $Font): number;
        setSelected(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_, arg4: $Font, arg5: boolean, arg6: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $Font, arg1: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(arg0: number, arg1: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(arg0: number): $SpriteIconButton$Builder;
        sprite(arg0: $ResourceLocation_, arg1: number, arg2: number): $SpriteIconButton$Builder;
        narration(arg0: $Button$CreateNarration_): $SpriteIconButton$Builder;
        constructor(arg0: $Component_, arg1: $Button$OnPress_, arg2: boolean);
    }
    export class $PlainTextButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $WidgetSprites extends $Record {
        get(arg0: boolean, arg1: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        disabled(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_,  } | [disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, ];
    export class $ImageButton extends $Button implements $ImageButtonAccessor {
        getSprites(): $WidgetSprites;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $WidgetSprites_, arg3: $Button$OnPress_, arg4: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_, arg6: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $WidgetSprites_, arg5: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(arg0: $FormattedText, arg1: number, arg2: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        setStateTriggered(arg0: boolean): void;
        isStateTriggered(): boolean;
        initTextureValues(arg0: $WidgetSprites_): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { width?: number, text?: $FormattedCharSequence_,  } | [width?: number, text?: $FormattedCharSequence_, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>,  } | [wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { time?: number, location?: $Vec3_,  } | [time?: number, location?: $Vec3_, ];
    export class $Renderable {
    }
    export interface $Renderable {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AbstractWidgetInvoker, $IMixinAbstractWidget, $IMixinAbstractWidget$1, $UniqueWidget, $CustomizableWidget {
        getMessage(): $Component;
        isActive(): boolean;
        setSize(arg0: number, arg1: number): void;
        getHitboxRotationDegreesFancyMenu(): number;
        getTooltip(): $Tooltip;
        clicked(arg0: number, arg1: number): boolean;
        resetWidgetSizeAndPositionFancyMenu(): void;
        getY(): number;
        isMouseOver(arg0: number, arg1: number): boolean;
        getTabOrderGroup(): number;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        getRectangle(): $ScreenRectangle;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getX(): number;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        setMessage(arg0: $Component_): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        getRight(): number;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: number, arg3: number): void;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        setAlpha(arg0: number): void;
        isHiddenFancyMenu(): boolean;
        setTooltip(arg0: $Tooltip): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        resetWidgetCustomizationsFancyMenu(): void;
        /**
         * @deprecated
         */
        onClick(arg0: number, arg1: number): void;
        isHovered(): boolean;
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        setTooltipDelay(arg0: $Duration_): void;
        createNarrationMessage(): $MutableComponent;
        static wrapDefaultNarrationMessage(arg0: $Component_): $MutableComponent;
        onRelease(arg0: number, arg1: number): void;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        isValidClickButton(arg0: number): boolean;
        playDownSound(arg0: $SoundManager): void;
        isHoveredOrFocused(): boolean;
        getFGColor(): number;
        setFGColor(arg0: number): void;
        clearFGColor(): void;
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        defaultButtonNarrationText(arg0: $NarrationElementOutput): void;
        getBottom(): number;
        setRectangle(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setTabOrderGroup(arg0: number): void;
        resolveLabelScaleFancyMenu(): number;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<any>): void;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        getResetCustomizationsListenersFancyMenu(): $List<any>;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<any>): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<any>): void;
        getHoverStateListenersFancyMenu(): $List<any>;
        getFocusStateListenersFancyMenu(): $List<any>;
        getHoverOrFocusStateListenersFancyMenu(): $List<any>;
        getLastHoverStateFancyMenu(): boolean;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        getLastFocusStateFancyMenu(): boolean;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        setHiddenFancyMenu(arg0: boolean): void;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        setLabelShadowFancyMenu(arg0: boolean): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        setLabelScaleFancyMenu(arg0: number): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setCustomXFancyMenu(arg0: number): void;
        setCustomYFancyMenu(arg0: number): void;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        getCustomLabelFancyMenu(): $Component;
        getHoverLabelFancyMenu(): $Component;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        isLabelShadowFancyMenu(): boolean;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getLabelScaleFancyMenu(): number;
        getCustomClickSoundFancyMenu(): $IAudio;
        getHoverSoundFancyMenu(): $IAudio;
        getUnhoverSoundFancyMenu(): $IAudio;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        getWidgetIdentifierFancyMenu(): string;
        getWidth(): number;
        getHeight(): number;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setPosition(arg0: number, arg1: number): void;
        onClick(arg0: number, arg1: number, arg2: number): void;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        getOriginalMessageFancyMenu(): $Component;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        stopUnhoverSoundFancyMenu(): void;
        setHeightKonkrete(arg0: number): void;
        getAlphaFancyMenu(): number;
        setHeightFancyMenu(arg0: number): void;
        setMessageFieldFancyMenu(arg0: $Component_): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        get hitboxRotationDegreesFancyMenu(): number;
        get right(): number;
        get hovered(): boolean;
        set tooltipDelay(value: $Duration_);
        get hoveredOrFocused(): boolean;
        get bottom(): number;
        get resetCustomizationsListenersFancyMenu(): $List<any>;
        get hoverStateListenersFancyMenu(): $List<any>;
        get focusStateListenersFancyMenu(): $List<any>;
        get hoverOrFocusStateListenersFancyMenu(): $List<any>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        set nineSliceBorderX_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        set nineSliceBorderY_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        set nineSliceBorderTop_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        set nineSliceBorderRight_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        set nineSliceBorderBottom_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        set nineSliceBorderLeft_FancyMenu(value: number);
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        get currentFocusPath(): $ComponentPath;
        get originalMessageFancyMenu(): $Component;
        set heightKonkrete(value: number);
        get alphaFancyMenu(): number;
        set heightFancyMenu(value: number);
        set messageFieldFancyMenu(value: $Component_);
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(arg0: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { message?: $Component_, maxWidth?: number, maxRows?: $OptionalInt,  } | [message?: $Component_, maxWidth?: number, maxRows?: $OptionalInt, ];
    export class $DebugScreenOverlay implements $BuggerScreenRenderLinesInvoker {
        reset(): void;
        clearChunkCache(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        handler$hdl000$betterf3$addAutomaticDebugOption(minecraft: $Minecraft, ci: $CallbackInfo): void;
        handler$zcf000$sodium_extra$preRender(arg0: $GuiGraphics, arg1: $CallbackInfo): void;
        handler$hdj000$betterf3$renderBefore(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$hdj000$betterf3$renderAnimation(context: $GuiGraphics, ci: $CallbackInfo): void;
        collectGameInformationText(): $List<string>;
        getGameInformation(): $List<string>;
        drawGameInformation(arg0: $GuiGraphics): void;
        redirect$zcf000$sodium_extra$sodiumExtra$redirectDrawLeftText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        collectSystemInformationText(): $List<string>;
        getSystemInformation(): $List<string>;
        drawSystemInformation(arg0: $GuiGraphics): void;
        redirect$zcf000$sodium_extra$sodiumExtra$redirectDrawRightText(arg0: $DebugScreenOverlay, arg1: $GuiGraphics, arg2: $List_<any>, arg3: boolean): void;
        handler$ckm000$necronomicon$getLeftText(info: $CallbackInfoReturnable<any>): void;
        handler$dai000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        handler$dcn001$fabric_renderer_api_v1$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        redirect$hdj000$betterf3$allocationRateCalculatorGet(instance: $DebugScreenOverlay$AllocationRateCalculator, allocatedBytes: number): number;
        localvar$zjp000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        localvar$fkf000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        showFpsCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        handler$hdj000$betterf3$renderFontScaleBefore(context: $GuiGraphics, ci: $CallbackInfo): void;
        handler$hdi000$betterf3$drawText(guiGraphics: $GuiGraphics, ci: $CallbackInfo): void;
        render(arg0: $GuiGraphics): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(arg0: number): void;
        getPingLogger(): $LocalSampleLogger;
        logRemoteSample(arg0: number[], arg1: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        toggleProfilerChart(): void;
        toggleFpsCharts(): void;
        toggleNetworkCharts(): void;
        toggleOverlay(): void;
        drawLines(arg0: $GuiGraphics, arg1: $List_<string>, arg2: boolean): void;
        renderFpsCharts: boolean;
        static HEIGHTMAP_NAMES: $Map<$Heightmap$Types, string>;
        renderProfilerChart: boolean;
        constructor(arg0: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get gameInformation(): $List<string>;
        get systemInformation(): $List<string>;
        get bandwidthLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: number, arg2: $ResourceLocation_, arg3: $Component_, arg4: $Component_, arg5: $List_<$PopupScreen$ButtonOption_>, arg6: $Runnable_);
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
        bytesAllocatedPerSecond(arg0: number): number;
        constructor();
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox, $IMixinEditBox, $IMixinEditBox$1 {
        getValue(): string;
        setValue(arg0: string): void;
        setFilter(arg0: $Predicate_<string>): void;
        setFormatter(arg0: $BiFunction_<string, number, $FormattedCharSequence>): void;
        moveCursorToEnd(arg0: boolean): void;
        setTextColorUneditable(arg0: number): void;
        deleteChars(arg0: number): void;
        deleteWords(arg0: number): void;
        deleteCharsToPos(arg0: number): void;
        deleteText(arg0: number): void;
        getWordPosition(arg0: number): number;
        getHighlighted(): string;
        setCursorPosition(arg0: number): void;
        setHighlightPos(arg0: number): void;
        moveCursorTo(arg0: number, arg1: boolean): void;
        setEditable(arg0: boolean): void;
        getCursorPosition(): number;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        insertText(arg0: string): void;
        setMaxLength(arg0: number): void;
        setBordered(arg0: boolean): void;
        setResponder(arg0: $Consumer_<string>): void;
        setCanLoseFocus(arg0: boolean): void;
        setTextColor(arg0: number): void;
        setHint(arg0: $Component_): void;
        canConsumeInput(): boolean;
        moveCursorToStart(arg0: boolean): void;
        getInnerWidth(): number;
        setTextShadow(arg0: boolean): void;
        moveCursor(arg0: number, arg1: boolean): void;
        isBordered(): boolean;
        setSuggestion(arg0: string): void;
        getScreenX(arg0: number): number;
        getTextShadow(): boolean;
        getHighlightPosFancyMenu(): number;
        setDisplayPosFancyMenu(arg0: number): void;
        invokeDeleteTextFancyMenu(arg0: number): void;
        getDisplayPosFancyMenu(): number;
        getMaxLengthFancyMenu(): number;
        getBorderedFancyMenu(): boolean;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        getIsEditableKonkrete(): boolean;
        getHightlightPosKonkrete(): number;
        getMaxLengthKonkrete(): number;
        onValueChangeKonkrete(arg0: string): void;
        getIsEditableFancyMenu(): boolean;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        getTextColorFancyMenu(): number;
        getTextColorUneditableFancyMenu(): number;
        getFocusedTimeFancyMenu(): number;
        getHintFancyMenu(): $Component;
        getSuggestionFancyMenu(): string;
        invokeRenderHighlightFancyMenu(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static FORWARDS: number;
        height: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $EditBox, arg6: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_);
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: $Component_);
        set filter(value: $Predicate_<string>);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set textColorUneditable(value: number);
        get highlighted(): string;
        set highlightPos(value: number);
        set editable(value: boolean);
        set maxLength(value: number);
        set responder(value: $Consumer_<string>);
        set textColor(value: number);
        set hint(value: $Component_);
        get innerWidth(): number;
        set suggestion(value: string);
        get highlightPosFancyMenu(): number;
        get maxLengthFancyMenu(): number;
        get borderedFancyMenu(): boolean;
        get isEditableKonkrete(): boolean;
        get hightlightPosKonkrete(): number;
        get maxLengthKonkrete(): number;
        get isEditableFancyMenu(): boolean;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get textColorFancyMenu(): number;
        get textColorUneditableFancyMenu(): number;
        get focusedTimeFancyMenu(): number;
        get hintFancyMenu(): $Component;
        get suggestionFancyMenu(): string;
    }
    export class $StringWidget extends $AbstractStringWidget {
        alignLeft(): $StringWidget;
        alignCenter(): $StringWidget;
        alignRight(): $StringWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        constructor(arg0: $Component_, arg1: $Font);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_);
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(arg0: $Checkbox, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(arg0: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: boolean, arg4: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font, arg3: number);
        constructor(arg0: number, arg1: $Component_, arg2: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton implements $UniqueLabeledSwitchCycleButton {
        getValue(): T;
        static builder<T>(arg0: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(arg0: T): void;
        setLabeledSwitchComponentLabel_FancyMenu(arg0: $Component_): void;
        getLabeledSwitchComponentLabel_FancyMenu(): $Component;
        createDefaultNarrationMessage(): $MutableComponent;
        static booleanBuilder(arg0: $Component_, arg1: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(arg0: boolean): $CycleButton$Builder<boolean>;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: T, arg8: $CycleButton$ValueListSupplier<T>, arg9: $Function_<T, $Component>, arg10: $Function_<$CycleButton<T>, $MutableComponent>, arg11: $CycleButton$OnValueChange_<T>, arg12: $OptionInstance$TooltipSupplier_<T>, arg13: boolean);
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(arg0: number): $FittingMultiLineTextWidget;
        showingScrollBar(): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(arg0: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        options: $Options;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(arg0: number, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $ImageWidget;
        static sprite(arg0: number, arg1: number, arg2: $ResourceLocation_): $ImageWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay implements $IMixinBossHealthOverlay {
        reset(): void;
        update(arg0: $ClientboundBossEventPacket): void;
        render(arg0: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        shouldDarkenScreen(): boolean;
        shouldCreateWorldFog(): boolean;
        handler$hdm007$betterf3$init(info: $CallbackInfo): void;
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(arg0: $Minecraft);
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(arg0: $BooleanSupplier_, arg1: $List_<T>, arg2: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(arg0: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(arg0: number): $AbstractStringWidget;
        getFont(): $Font;
        getColor(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Font);
        get font(): $Font;
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        isMouseOver(arg0: number, arg1: number): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        renderBack(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        getRectangle(): $ScreenRectangle;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        getTabOrderGroup(): number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        onPress(): void;
        getXaero_tooltip(): $Supplier<any>;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        renderString(arg0: $GuiGraphics, arg1: $Font, arg2: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $EntityModelSet, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setColor(arg0: number): $MultiLineTextWidget;
        setCentered(arg0: boolean): $MultiLineTextWidget;
        setMaxWidth(arg0: number): $MultiLineTextWidget;
        setMaxRows(arg0: number): $MultiLineTextWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $Component_, arg1: $Font);
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: $Font);
        set color(value: number);
        set centered(value: boolean);
        set maxWidth(value: number);
        set maxRows(value: number);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        getNarration(): $Component;
        updateNarration(arg0: $NarrationElementOutput): void;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions implements $IMixinCommandSuggestions {
        static calculateSuggestionSuffix(arg0: string, arg1: string): string;
        renderSuggestions(arg0: $GuiGraphics, arg1: number, arg2: number): boolean;
        renderUsage(arg0: $GuiGraphics): void;
        showSuggestions(arg0: boolean): void;
        hide(): void;
        getUsageNarration(): $Component;
        getNarrationMessage(): $Component;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        isVisible(): boolean;
        mouseScrolled(arg0: number): boolean;
        setAllowHiding(arg0: boolean): void;
        updateCommandInfo(): void;
        setAllowSuggestions(arg0: boolean): void;
        setSuggestionsFancyMenu(arg0: $CommandSuggestions$SuggestionsList): void;
        invokeUpdateUsageInfoFancyMenu(): void;
        invokeSortSuggestionsFancyMenu(arg0: $Suggestions): $List<$Suggestion>;
        getCurrentParseFancyMenu(): $ParseResults<$SharedSuggestionProvider>;
        setCurrentParseFancyMenu(arg0: $ParseResults<$SharedSuggestionProvider>): void;
        getPendingSuggestionsFancyMenu(): $CompletableFuture<$Suggestions>;
        setPendingSuggestionsFancyMenu(arg0: $CompletableFuture<$Suggestions>): void;
        getCommandUsageFancyMenu(): $List<$FormattedCharSequence>;
        getSuggestionsFancyMenu(): $CommandSuggestions$SuggestionsList;
        getAllowSuggestionsFancyMenu(): boolean;
        getKeepSuggestionsFancyMenu(): boolean;
        minecraft: $Minecraft;
        fillColor: number;
        input: $EditBox;
        keepSuggestions: boolean;
        anchorToBottom: boolean;
        lineStartOffset: number;
        suggestions: $CommandSuggestions$SuggestionsList;
        suggestionLineLimit: number;
        font: $Font;
        constructor(arg0: $Minecraft, arg1: $Screen, arg2: $EditBox, arg3: $Font, arg4: boolean, arg5: boolean, arg6: number, arg7: number, arg8: boolean, arg9: number);
        get usageNarration(): $Component;
        get narrationMessage(): $Component;
        get visible(): boolean;
        set allowHiding(value: boolean);
        set allowSuggestions(value: boolean);
        get commandUsageFancyMenu(): $List<$FormattedCharSequence>;
        get allowSuggestionsFancyMenu(): boolean;
        get keepSuggestionsFancyMenu(): boolean;
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(arg0: $Runnable_): $PopupScreen$Builder;
        addButton(arg0: $Component_, arg1: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setImage(arg0: $ResourceLocation_): $PopupScreen$Builder;
        setMessage(arg0: $Component_): $PopupScreen$Builder;
        setWidth(arg0: number): $PopupScreen$Builder;
        constructor(arg0: $Screen, arg1: $Component_);
        set image(value: $ResourceLocation_);
        set message(value: $Component_);
        set width(value: number);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $ChatComponent {
        tick(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addMessage(arg0: $Component_, arg1: $MessageSignature_, arg2: $GuiMessageTag_): void;
        addMessage(arg0: $Component_): void;
        restoreState(arg0: $ChatComponent$State): void;
        getScale(): number;
        handleChatQueueClicked(arg0: number, arg1: number): boolean;
        getMessageTagAt(arg0: number, arg1: number): $GuiMessageTag;
        getClickedComponentStyleAt(arg0: number, arg1: number): $Style;
        addRecentChat(arg0: string): void;
        resetChatScroll(): void;
        getRecentChat(): $ArrayListDeque<string>;
        getLinesPerPage(): number;
        scrollChat(arg0: number): void;
        static defaultUnfocusedPct(): number;
        storeState(): $ChatComponent$State;
        deleteMessage(arg0: $MessageSignature_): void;
        rescaleChat(): void;
        clearMessages(arg0: boolean): void;
        isChatFocused(): boolean;
        static getWidth(arg0: number): number;
        getWidth(): number;
        getHeight(): number;
        static getHeight(arg0: number): number;
        constructor(arg0: $Minecraft);
        get scale(): number;
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay {
        reset(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: $Scoreboard, arg3: $Objective): void;
        setVisible(arg0: boolean): void;
        setHeader(arg0: $Component_): void;
        setFooter(arg0: $Component_): void;
        getNameForDisplay(arg0: $PlayerInfo): $Component;
        renderPingIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $PlayerInfo): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(arg0: $Minecraft, arg1: $Gui);
        set header(value: $Component_);
        set footer(value: $Component_);
    }
    export class $PlayerFaceRenderer {
        static draw(arg0: $GuiGraphics, arg1: $PlayerSkin_, arg2: number, arg3: number, arg4: number): void;
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
        static draw(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        addSmall(arg0: $AbstractWidget, arg1: $AbstractWidget): void;
        addSmall(arg0: $List_<$AbstractWidget>): void;
        addSmall(...arg0: $OptionInstance<never>[]): void;
        applyUnsavedChanges(): void;
        findOption(arg0: $OptionInstance<never>): $AbstractWidget;
        getMouseOver(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        addBig(arg0: $OptionInstance<never>): void;
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
        hovered: $OptionsList$Entry;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        onPlaySound(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number): void;
        render(arg0: $GuiGraphics): void;
        constructor(arg0: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget implements $IMixinAbstractSliderButton, $CustomizableSlider {
        setNineSliceSliderHandleBorderX_FancyMenu(arg0: number): void;
        getSprite(): $ResourceLocation;
        updateMessage(): void;
        applyValue(): void;
        getHandleSprite(): $ResourceLocation;
        setNineSliceCustomSliderBackground_FancyMenu(arg0: boolean): void;
        isNineSliceCustomSliderBackground_FancyMenu(): boolean;
        setNineSliceSliderBackgroundBorderX_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderX_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderY_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderTop_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderTop_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderRight_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderRight_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderBottom_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderBottom_FancyMenu(): number;
        setNineSliceSliderBackgroundBorderLeft_FancyMenu(arg0: number): void;
        getNineSliceSliderBackgroundBorderLeft_FancyMenu(): number;
        getNineSliceSliderHandleBorderX_FancyMenu(): number;
        setNineSliceSliderHandleBorderY_FancyMenu(arg0: number): void;
        getNineSliceSliderHandleBorderY_FancyMenu(): number;
        setCustomSliderBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundNormalFancyMenu(): $RenderableResource;
        setCustomSliderBackgroundHighlightedFancyMenu(arg0: $RenderableResource): void;
        getCustomSliderBackgroundHighlightedFancyMenu(): $RenderableResource;
        setNineSliceCustomSliderHandle_FancyMenu(arg0: boolean): void;
        setNineSliceSliderHandleBorderTop_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderRight_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderBottom_FancyMenu(arg0: number): void;
        setNineSliceSliderHandleBorderLeft_FancyMenu(arg0: number): void;
        isNineSliceCustomSliderHandle_FancyMenu(): boolean;
        getNineSliceSliderHandleBorderTop_FancyMenu(): number;
        getNineSliceSliderHandleBorderRight_FancyMenu(): number;
        getNineSliceSliderHandleBorderBottom_FancyMenu(): number;
        getNineSliceSliderHandleBorderLeft_FancyMenu(): number;
        renderSliderBackgroundFancyMenu(arg0: $GuiGraphics, arg1: $AbstractSliderButton, arg2: boolean): boolean;
        getCanChangeValueFancyMenu(): boolean;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: number);
        get sprite(): $ResourceLocation;
        get handleSprite(): $ResourceLocation;
        get canChangeValueFancyMenu(): boolean;
    }
    export class $LockIconButton extends $Button {
        isLocked(): boolean;
        setLocked(arg0: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget {
        getValue(): string;
        setValue(arg0: string): void;
        setCharacterLimit(arg0: number): void;
        setValueListener(arg0: $Consumer_<string>): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: $Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Component_, arg6: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
    }
}
