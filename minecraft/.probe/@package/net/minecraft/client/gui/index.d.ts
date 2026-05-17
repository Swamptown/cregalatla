import { $DrawContextAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $IMixinGui, $IMixinGuiGraphics } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $MultiBufferSource, $MultiBufferSource$BufferSource, $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $SpectatorGui } from "@package/net/minecraft/client/gui/components/spectator";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $DeltaTracker, $StringSplitter } from "@package/net/minecraft/client";
import { $FontAccessor, $GuiAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $List_ } from "@package/java/util";
import { $JadeFont } from "@package/snownee/jade/gui";
import { $GuiRenderStateSink } from "@package/dev/isxander/yacl3/gui/render";
import { $FormattedCharSequence, $FormattedCharSequence_, $RandomSource, $FormattedCharSink } from "@package/net/minecraft/util";
import { $Function_, $BooleanSupplier_, $Function } from "@package/java/util/function";
import { $IFontExtension, $IGuiGraphicsExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $GuiGraphicsAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $DrawContextAccessor as $DrawContextAccessor$1 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $GuiGraphicsExtensions } from "@package/com/misterpemodder/shulkerboxtooltip/impl/hook";
import { $ScreenRectangle_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $GuiSpriteScaling$NineSlice_, $GuiSpriteScaling } from "@package/net/minecraft/client/resources/metadata/gui";
import { $BossHealthOverlay, $SubtitleOverlay, $DebugScreenOverlay, $PlayerTabOverlay, $ChatComponent } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $FontAccess } from "@package/com/kipti/bnb/mixin_accessor";
import { $TextureAtlasHolder, $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
export * as components from "@package/net/minecraft/client/gui/components";
export * as layouts from "@package/net/minecraft/client/gui/layouts";
export * as screens from "@package/net/minecraft/client/gui/screens";
export * as navigation from "@package/net/minecraft/client/gui/navigation";
export * as font from "@package/net/minecraft/client/gui/font";
export * as narration from "@package/net/minecraft/client/gui/narration";
export * as spectator from "@package/net/minecraft/client/gui/spectator";

declare module "@package/net/minecraft/client/gui" {
    export class $Font$StringRenderOutput implements $FormattedCharSink {
        accept(arg0: number, arg1: $Style, arg2: number): boolean;
        finish(arg0: number, arg1: number): number;
        this$0: $Font;
        x: number;
        y: number;
        bufferSource: $MultiBufferSource;
        constructor(arg0: $Font, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Matrix4f, arg7: $Font$DisplayMode_, arg8: number);
    }
    export class $GuiGraphics implements $IGuiGraphicsExtension, $GuiGraphicsAccessor, $DrawContextAccessor, $GuiGraphicsExtensions, $DrawContextAccessor$1, $IMixinGuiGraphics, $GuiRenderStateSink {
        flush(): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        fill(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fill(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        bufferSource(): $MultiBufferSource$BufferSource;
        /**
         * @deprecated
         */
        drawManaged(arg0: $Runnable_): void;
        hLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        hLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        vLine(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number): void;
        vLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        enableScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        disableScissor(): void;
        containsPointInScissor(arg0: number, arg1: number): boolean;
        fillGradient(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        fillGradient(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fillRenderType(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawCenteredString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): void;
        drawCenteredString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): void;
        drawWordWrap(arg0: $Font, arg1: $FormattedText, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawStringWithBackdrop(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        blitSprite(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        innerBlit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderOutline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        blitTiledSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderItem(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number): void;
        renderFakeItem(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number, arg4: string): void;
        renderItemDecorations(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: $ItemStack_, arg4: number, arg5: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: ($TooltipComponent) | undefined, arg3: number, arg4: number): void;
        renderTooltip(arg0: $Font, arg1: $ItemStack_, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $Component_, arg2: number, arg3: number): void;
        renderTooltip(arg0: $Font, arg1: $List_<$FormattedCharSequence_>, arg2: $ClientTooltipPositioner_, arg3: number, arg4: number): void;
        renderTooltipInternal(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$FormattedText>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        renderComponentTooltip(arg0: $Font, arg1: $List_<$Component_>, arg2: number, arg3: number): void;
        renderComponentTooltipFromElements(arg0: $Font, arg1: $List_<$Either<$FormattedText, $TooltipComponent>>, arg2: number, arg3: number, arg4: $ItemStack_): void;
        renderComponentHoverEffect(arg0: $Font, arg1: $Style, arg2: number, arg3: number): void;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        drawString(arg0: $Font, arg1: $FormattedCharSequence_, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        getMouseX(): number;
        getMouseY(): number;
        pose(): $PoseStack;
        guiWidth(): number;
        guiHeight(): number;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $TextureAtlasSprite): void;
        blit(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        getTooltipTopYPosition(): number;
        getTooltipBottomYPosition(): number;
        setTooltipTopYPosition(topY: number): void;
        setTooltipBottomYPosition(bottomY: number): void;
        setMouseX(mouseX: number): void;
        setMouseY(mouseY: number): void;
        yacl$bufferSource(): $MultiBufferSource;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        blitWithBorder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        blitInscribed(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean): void;
        getColorFromFormattingCharacter(arg0: string, arg1: boolean): number;
        drawScrollingString(arg0: $Font, arg1: $Component_, arg2: number, arg3: number, arg4: number, arg5: number): number;
        callBlitNineSlicedSprite(arg0: $TextureAtlasSprite, arg1: $GuiSpriteScaling$NineSlice_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        invokeDrawTooltip(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
        libgui$getVertexConsumers(): $MultiBufferSource$BufferSource;
        getBufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
        minecraft: $Minecraft;
        static MIN_GUI_Z: number;
        static MAX_GUI_Z: number;
        constructor(arg0: $Minecraft, arg1: $MultiBufferSource$BufferSource);
        get bufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
    }
    export class $LayeredDraw {
        add(arg0: $LayeredDraw, arg1: $BooleanSupplier_): $LayeredDraw;
        add(arg0: $LayeredDraw$Layer_): $LayeredDraw;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static Z_SEPARATION: number;
        constructor();
    }
    export class $MapRenderer$MapInstance implements $AutoCloseable {
    }
    export class $MapRenderer implements $AutoCloseable {
        update(arg0: $MapId_, arg1: $MapItemSavedData): void;
        close(): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $MapId_, arg3: $MapItemSavedData, arg4: boolean, arg5: number): void;
        resetData(): void;
        decorationTextures: $MapDecorationTextureManager;
        textureManager: $TextureManager;
        constructor(arg0: $TextureManager, arg1: $MapDecorationTextureManager);
    }
    export class $ComponentPath$Leaf extends $Record implements $ComponentPath {
        component(): $GuiEventListener;
        applyFocus(arg0: boolean): void;
        constructor(arg0: $GuiEventListener);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Leaf}.
     */
    export type $ComponentPath$Leaf_ = { component?: $GuiEventListener,  } | [component?: $GuiEventListener, ];
    export class $Gui$1DisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Gui$1DisplayEntry}.
     */
    export type $Gui$1DisplayEntry_ = { name?: $Component_, scoreWidth?: number, score?: $Component_,  } | [name?: $Component_, scoreWidth?: number, score?: $Component_, ];
    export class $Font implements $IFontExtension, $FontAccess, $FontAccessor, $JadeFont {
        split(arg0: $FormattedText, arg1: number): $List<$FormattedCharSequence>;
        self(): $Font;
        width(arg0: $FormattedCharSequence_): number;
        width(arg0: $FormattedText): number;
        width(arg0: string): number;
        wordWrapHeight(arg0: string, arg1: number): number;
        wordWrapHeight(arg0: $FormattedText, arg1: number): number;
        jade$setGlint(arg0: number, arg1: number): void;
        jade$setGlintStrength(arg0: number, arg1: number): void;
        getFontSet(arg0: $ResourceLocation_): $FontSet;
        bidirectionalShaping(arg0: string): string;
        drawInBatch8xOutline(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: number): void;
        renderChar(arg0: $BakedGlyph, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: $Matrix4f, arg7: $VertexConsumer, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        bits_n_bobs$getFontSet(arg0: $ResourceLocation_): $FontSet;
        plainSubstrByWidth(arg0: string, arg1: number, arg2: boolean): string;
        plainSubstrByWidth(arg0: string, arg1: number): string;
        substrByWidth(arg0: $FormattedText, arg1: number): $FormattedText;
        renderText(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        isBidirectional(): boolean;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        drawInBatch(arg0: string, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number, arg10: boolean): number;
        drawInBatch(arg0: $Component_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        drawInBatch(arg0: $FormattedCharSequence_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Matrix4f, arg6: $MultiBufferSource_, arg7: $Font$DisplayMode_, arg8: number, arg9: number): number;
        getSplitter(): $StringSplitter;
        ellipsize(arg0: $FormattedText, arg1: number): $FormattedText;
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
        random: $RandomSource;
        filterFishyGlyphs: boolean;
        fonts: $Function<$ResourceLocation, $FontSet>;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        splitter: $StringSplitter;
        constructor(arg0: $Function_<$ResourceLocation, $FontSet>, arg1: boolean);
        get bidirectional(): boolean;
    }
    export class $Gui$HeartType extends $Enum<$Gui$HeartType> implements $IExtensibleEnum {
        static values(): $Gui$HeartType[];
        static valueOf(arg0: string): $Gui$HeartType;
        static forPlayer(arg0: $Player): $Gui$HeartType;
        getSprite(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation;
        static getExtensionInfo(): $ExtensionInfo;
        static ABSORBING: $Gui$HeartType;
        static CONTAINER: $Gui$HeartType;
        static WITHERED: $Gui$HeartType;
        static POISIONED: $Gui$HeartType;
        static FROZEN: $Gui$HeartType;
        static NORMAL: $Gui$HeartType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Gui$HeartType}.
     */
    export type $Gui$HeartType_ = "container" | "normal" | "poisioned" | "withered" | "absorbing" | "frozen";
    export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
        static values(): $Font$DisplayMode[];
        static valueOf(arg0: string): $Font$DisplayMode;
        static POLYGON_OFFSET: $Font$DisplayMode;
        static SEE_THROUGH: $Font$DisplayMode;
        static NORMAL: $Font$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Font$DisplayMode}.
     */
    export type $Font$DisplayMode_ = "normal" | "see_through" | "polygon_offset";
    export class $GuiGraphics$ScissorStack {
        push(arg0: $ScreenRectangle_): $ScreenRectangle;
        pop(): $ScreenRectangle;
        containsPoint(arg0: number, arg1: number): boolean;
        constructor();
    }
    export class $Gui implements $GuiAccessor, $IMixinGui {
        clear(): void;
        setTimes(arg0: number, arg1: number, arg2: number): void;
        tick(arg0: boolean): void;
        clearCache(): void;
        renderSelectedItemName(arg0: $GuiGraphics, arg1: number): void;
        handler$hdo008$betterf3$init(info: $CallbackInfo): void;
        initModdedOverlays(): void;
        getLayerCount(): number;
        getChat(): $ChatComponent;
        getFont(): $Font;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        renderSavingIndicator(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        setNowPlaying(arg0: $Component_): void;
        setTitle(arg0: $Component_): void;
        getDebugOverlay(): $DebugScreenOverlay;
        isShowingChatDisabledByPlayer(): boolean;
        setChatDisabledByPlayerShown(arg0: boolean): void;
        setOverlayMessage(arg0: $Component_, arg1: boolean): void;
        getSpectatorGui(): $SpectatorGui;
        onDisconnected(): void;
        getBossOverlay(): $BossHealthOverlay;
        getGuiTicks(): number;
        resetTitleTimes(): void;
        setSubtitle(arg0: $Component_): void;
        getTabList(): $PlayerTabOverlay;
        create$getSubtitleOverlay(): $SubtitleOverlay;
        create$getToolHighlightTimer(): number;
        create$renderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
        get_title_FancyMenu(): $Component;
        get_subtitle_FancyMenu(): $Component;
        get_overlayMessageString_FancyMenu(): $Component;
        get_overlayMessageTime_FancyMenu(): number;
        get_toolHighlightTimer_FancyMenu(): number;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        leftHeight: number;
        constructor(arg0: $Minecraft);
        get layerCount(): number;
        get chat(): $ChatComponent;
        get font(): $Font;
        set nowPlaying(value: $Component_);
        set title(value: $Component_);
        get debugOverlay(): $DebugScreenOverlay;
        get showingChatDisabledByPlayer(): boolean;
        set chatDisabledByPlayerShown(value: boolean);
        get spectatorGui(): $SpectatorGui;
        get bossOverlay(): $BossHealthOverlay;
        get guiTicks(): number;
        set subtitle(value: $Component_);
        get tabList(): $PlayerTabOverlay;
        get _title_FancyMenu(): $Component;
        get _subtitle_FancyMenu(): $Component;
        get _overlayMessageString_FancyMenu(): $Component;
        get _overlayMessageTime_FancyMenu(): number;
        get _toolHighlightTimer_FancyMenu(): number;
    }
    export class $GuiSpriteManager extends $TextureAtlasHolder {
        getSpriteScaling(arg0: $TextureAtlasSprite): $GuiSpriteScaling;
        textureAtlas: $TextureAtlas;
        constructor(arg0: $TextureManager);
    }
    export class $ComponentPath$Path extends $Record implements $ComponentPath {
        component(): $ContainerEventHandler;
        childPath(): $ComponentPath;
        applyFocus(arg0: boolean): void;
        constructor(arg0: $ContainerEventHandler, arg1: $ComponentPath);
    }
    /**
     * Values that may be interpreted as {@link $ComponentPath$Path}.
     */
    export type $ComponentPath$Path_ = { component?: $ContainerEventHandler, childPath?: $ComponentPath,  } | [component?: $ContainerEventHandler, childPath?: $ComponentPath, ];
    export class $LayeredDraw$Layer {
    }
    export interface $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
    }
    /**
     * Values that may be interpreted as {@link $LayeredDraw$Layer}.
     */
    export type $LayeredDraw$Layer_ = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
    export class $ComponentPath {
        static path(arg0: $ContainerEventHandler, arg1: $ComponentPath): $ComponentPath;
        static path(arg0: $GuiEventListener, ...arg1: $ContainerEventHandler[]): $ComponentPath;
        static leaf(arg0: $GuiEventListener): $ComponentPath;
    }
    export interface $ComponentPath {
        component(): $GuiEventListener;
        applyFocus(arg0: boolean): void;
    }
}
