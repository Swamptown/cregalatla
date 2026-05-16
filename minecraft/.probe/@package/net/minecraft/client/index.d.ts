import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $WorldStem_ } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Connection } from "@package/net/minecraft/network";
import { $Proxy } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $AccessorKeyMapping } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $MinecraftAccessor, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $CameraAccessor as $CameraAccessor$2 } from "@package/com/zigythebird/playeranim/mixin";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IMixinOptions, $IMixinMinecraft } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $KeyBindingAccessor } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $TimerAccessor, $MinecraftAccessor as $MinecraftAccessor$1, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$1, $MouseHandlerAccessor as $MouseHandlerAccessor$2 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Throwable, $Runnable, $Enum, $Comparable, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $File_, $File } from "@package/java/io";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $WidgetTooltipHolder, $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CameraAccessor } from "@package/net/mcreator/mymod/mixin";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $CrashReport } from "@package/net/minecraft";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $LocalDoubleRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $MinecraftClientAccessor } from "@package/me/flashyreese/mods/sodiumextra/mixin/gui";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $IMixinMouseHandler } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $PlayerModelPart_, $ChatVisiblity, $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $Gson } from "@package/com/google/gson";
import { $CameraAccessor as $CameraAccessor$1, $NearPlaneAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$2, $IMixinMouseHandler, $MouseHandlerAccessor$1, $MouseHandlerAccessor {
        setup(arg0: number): void;
        isRightPressed(): boolean;
        xpos(): number;
        ypos(): number;
        releaseMouse(): void;
        grabMouse(): void;
        handleAccumulatedMovement(): void;
        setIgnoreFirstMove(): void;
        cursorEntered(): void;
        isMouseGrabbed(): boolean;
        isLeftPressed(): boolean;
        isMiddlePressed(): boolean;
        handler$bhn000$ok_zoomer$applyZoomChanges(arg0: number, arg1: $CallbackInfo, arg2: $LocalDoubleRef, arg3: $LocalDoubleRef, arg4: number): void;
        getXVelocity(): number;
        getYVelocity(): number;
        getMouseX(): number;
        getMouseY(): number;
        getActiveButtonKonkrete(): number;
        getActiveButton(): number;
        create$setXPos(arg0: number): void;
        create$setYPos(arg0: number): void;
        constructor(arg0: $Minecraft);
        set up(value: number);
        get rightPressed(): boolean;
        get mouseGrabbed(): boolean;
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get XVelocity(): number;
        get YVelocity(): number;
        get mouseX(): number;
        get mouseY(): number;
        get activeButtonKonkrete(): number;
        get activeButton(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getClientId(): (string) | undefined;
        getXuid(): (string) | undefined;
        getSessionId(): string;
        getAccessToken(): string;
        getProfileId(): $UUID;
        constructor(arg0: string, arg1: $UUID_, arg2: string, arg3: (string) | undefined, arg4: (string) | undefined, arg5: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get clientId(): (string) | undefined;
        get xuid(): (string) | undefined;
        get sessionId(): string;
        get accessToken(): string;
        get profileId(): $UUID;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        getCollection(arg0: $RecipeBookCategories_): $List<$RecipeCollection>;
        setupCollections(arg0: $Iterable_<$RecipeHolder<never>>, arg1: $RegistryAccess): void;
        getCollections(): $List<$RecipeCollection>;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
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
        constructor(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $OptionInstance<N>, arg6: $OptionInstance$SliderableValueSet<N>, arg7: $OptionInstance$TooltipSupplier_<N>, arg8: $Consumer_<N>, arg9: boolean);
    }
    export class $HotbarManager {
        get(arg0: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(arg0: $Path_, arg1: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $Supplier<$List<T>>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { codec?: $Codec<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>,  } | [codec?: $Codec<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { period?: number, title?: string, message?: string, delay?: number,  } | [period?: number, title?: string, message?: string, delay?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        close(): $File;
        static takeScreenshot(arg0: $RenderTarget): $NativeImage;
        static grab(arg0: $File_, arg1: string, arg2: $RenderTarget, arg3: $Consumer_<$Component>): void;
        static grab(arg0: $File_, arg1: $RenderTarget, arg2: $Consumer_<$Component>): void;
        addRegion(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        saveRow(): void;
        static SCREENSHOT_DIR: string;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options implements $IMixinOptions {
        load(): void;
        load(arg0: boolean): void;
        save(): void;
        getFile(): $File;
        getBackgroundOpacity(arg0: number): number;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        simulationDistance(): $OptionInstance<number>;
        autoJump(): $OptionInstance<boolean>;
        fov(): $OptionInstance<number>;
        static isFalse(arg0: string): boolean;
        hideLightningFlash(): $OptionInstance<boolean>;
        onboardingAccessibilityFinished(): void;
        operatorItemsTab(): $OptionInstance<boolean>;
        fovEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        bobView(): $OptionInstance<boolean>;
        touchscreen(): $OptionInstance<boolean>;
        screenEffectScale(): $OptionInstance<number>;
        static isTrue(arg0: string): boolean;
        setKey(arg0: $KeyMapping, arg1: $InputConstants$Key): void;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        gamma(): $OptionInstance<number>;
        hideSplashTexts(): $OptionInstance<boolean>;
        chatLinks(): $OptionInstance<boolean>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        glintSpeed(): $OptionInstance<number>;
        getSoundSourceVolume(arg0: $SoundSource_): number;
        narrator(): $OptionInstance<$NarratorStatus>;
        glintStrength(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        getBackgroundColor(arg0: number): number;
        getBackgroundColor(arg0: number): number;
        loadSelectedResourcePacks(arg0: $PackRepository): void;
        mipmapLevels(): $OptionInstance<number>;
        fullscreen(): $OptionInstance<boolean>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        dumpOptionsForReport(): string;
        particles(): $OptionInstance<$ParticleStatus>;
        getCameraType(): $CameraType;
        setCameraType(arg0: $CameraType_): void;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        renderDistance(): $OptionInstance<number>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        textBackgroundOpacity(): $OptionInstance<number>;
        chatOpacity(): $OptionInstance<number>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        getMenuBackgroundBlurriness(): number;
        getCloudsType(): $CloudStatus;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        setServerRenderDistance(arg0: number): void;
        notificationDisplayTime(): $OptionInstance<number>;
        sensitivity(): $OptionInstance<number>;
        entityDistanceScaling(): $OptionInstance<number>;
        chatLineSpacing(): $OptionInstance<number>;
        panoramaSpeed(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        chatHeightUnfocused(): $OptionInstance<number>;
        chatHeightFocused(): $OptionInstance<number>;
        useNativeTransport(): boolean;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        autoSuggestions(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        darknessEffectScale(): $OptionInstance<number>;
        soundDevice(): $OptionInstance<string>;
        updateResourcePacks(arg0: $PackRepository): void;
        getSoundSourceOptionInstance(arg0: $SoundSource_): $OptionInstance<number>;
        static genericValueOrOffLabel(arg0: $Component_, arg1: number): $Component;
        broadcastOptions(): void;
        buildPlayerInformation(): $ClientInformation;
        isModelPartEnabled(arg0: $PlayerModelPart_): boolean;
        toggleModelPart(arg0: $PlayerModelPart_, arg1: boolean): void;
        static genericValueLabel(arg0: $Component_, arg1: $Component_): $Component;
        static genericValueLabel(arg0: $Component_, arg1: number): $Component;
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        invokeProcessOptionsFancyMenu(arg0: $Options$FieldAccess): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(arg0: $Minecraft, arg1: $File_);
        get file(): $File;
        get effectiveRenderDistance(): number;
        get cloudsType(): $CloudStatus;
        set serverRenderDistance(value: number);
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        validateValue(arg0: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        applyValueImmediately(): boolean;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { applyValueImmediately?: boolean, minInclusive?: number, maxInclusive?: number,  } | [applyValueImmediately?: boolean, minInclusive?: number, maxInclusive?: number, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        reset(): void;
        modifyReturnValue$ggp000$xaerominimap$onIsDown(arg0: boolean): boolean;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: number, arg2: string, arg3: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        validateValue(arg0: number): (number) | undefined;
        xmap<R>(arg0: $DoubleFunction_<R>, arg1: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        fromSliderValue(arg0: number): $Object;
        toSliderValue(arg0: number): number;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        advanceTime(arg0: number, arg1: boolean): number;
        updatePauseState(arg0: boolean): void;
        updateFrozenState(arg0: boolean): void;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        constructor(arg0: number, arg1: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record {
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        addedTime(): number;
        endOfEntry(): boolean;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, endOfEntry?: boolean, addedTime?: number,  } | [tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, endOfEntry?: boolean, addedTime?: number, ];
    export class $GameNarrator {
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        sayChat(arg0: $Component_): void;
        say(arg0: $Component_): void;
        updateNarratorStatus(arg0: $NarratorStatus_): void;
        checkStatus(arg0: boolean): void;
        sayNow(arg0: $Component_): void;
        sayNow(arg0: string): void;
        static NO_TITLE: $Component;
        constructor(arg0: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        validateValue(arg0: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        maxSupplier(): $IntSupplier;
        encodableMaxInclusive(): number;
        createCycleButton(): boolean;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { encodableMaxInclusive?: number, maxSupplier?: $IntSupplier_, minInclusive?: number,  } | [encodableMaxInclusive?: number, maxSupplier?: $IntSupplier_, minInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static system(): $GuiMessageTag;
        text(): $Component;
        static chatNotSecure(): $GuiMessageTag;
        static chatModified(arg0: string): $GuiMessageTag;
        static chatError(): $GuiMessageTag;
        icon(): $GuiMessageTag$Icon;
        indicatorColor(): number;
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_, arg2: $Component_, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { icon?: $GuiMessageTag$Icon_, logTag?: string, text?: $Component_, indicatorColor?: number,  } | [icon?: $GuiMessageTag$Icon_, logTag?: string, text?: $Component_, indicatorColor?: number, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(arg0: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        close(): void;
        constructor(arg0: $ResourceLocation_, arg1: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record {
        signature(): $MessageSignature;
        tag(): $GuiMessageTag;
        content(): $Component;
        icon(): $GuiMessageTag$Icon;
        addedTime(): number;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_, arg3: $GuiMessageTag_);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { tag?: $GuiMessageTag_, content?: $Component_, signature?: $MessageSignature_, addedTime?: number,  } | [tag?: $GuiMessageTag_, content?: $Component_, signature?: $MessageSignature_, addedTime?: number, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getCategories(arg0: $RecipeBookType_): $List<$RecipeBookCategories>;
        static getExtensionInfo(): $ExtensionInfo;
        getIconItems(): $List<$ItemStack>;
        static setAGGREGATE_CATEGORIES$connector_$md$8e2dbe$0(arg0: $Map_<any, any>): void;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static get extensionInfo(): $ExtensionInfo;
        get iconItems(): $List<$ItemStack>;
        static set AGGREGATE_CATEGORIES$connector_$md$8e2dbe$0(value: $Map_<any, any>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec<any>,  } | [values?: $List_<any>, codec?: $Codec<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(arg0: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        history(): $Collection<string>;
        addCommand(arg0: string): void;
        constructor(arg0: $Path_);
    }
    export class $Camera implements $CameraAccessor$2, $CameraAccessor$1, $CameraZoomExtension, $CameraWaterOcclusionExtension, $CameraAccessor {
        reset(): void;
        setup(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number): void;
        move(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        getPosition(): $Vec3;
        getRoll(): number;
        handler$zba000$sodium_extra$noLerp(arg0: $CallbackInfo): void;
        handler$gde000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        getNearPlane(): $Camera$NearPlane;
        handler$fmp000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$fog001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        getEntity(): $Entity;
        /**
         * @deprecated
         */
        setRotation(arg0: number, arg1: number): void;
        setRotation(arg0: number, arg1: number, arg2: number): void;
        isDetached(): boolean;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        isInitialized(): boolean;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        getXRot(): number;
        getYRot(): number;
        sable$setZoomAmount(arg0: number): void;
        rotation(): $Quaternionf;
        getUpVector(): $Vector3f;
        sable$isOccluded(): boolean;
        getBlockPosition(): $BlockPos;
        getLookVector(): $Vector3f;
        sable$getZoomAmount(): number;
        getLevel(): $BlockGetter;
        setDetached(arg0: boolean): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        static $assertionsDisabled: boolean;
        constructor();
        get roll(): number;
        get nearPlane(): $Camera$NearPlane;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get entity(): $Entity;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        get initialized(): boolean;
        get XRot(): number;
        get YRot(): number;
        get upVector(): $Vector3f;
        get blockPosition(): $BlockPos;
        get lookVector(): $Vector3f;
        get level(): $BlockGetter;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(arg0: $Style, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(arg0: string): $User$Type;
        static byName(arg0: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient,  } | [quickPlayData?: $GameConfig$QuickPlayData_, realmsClient?: $RealmsClient, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any> {
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(arg0: $Object): void;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number, arg4: $Consumer_<$Object>): $AbstractWidget;
        createButton(arg0: $Options): $AbstractWidget;
        createButton(arg0: $Options, arg1: number, arg2: number, arg3: number): $AbstractWidget;
        codec(): $Codec<$Object>;
        static createBoolean(arg0: string, arg1: boolean, arg2: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: $OptionInstance$CaptionBasedToString_<boolean>, arg3: boolean, arg4: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean, arg3: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: boolean): $OptionInstance<boolean>;
        static createBoolean(arg0: string, arg1: $OptionInstance$TooltipSupplier_<boolean>, arg2: boolean): $OptionInstance<boolean>;
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static cachedConstantTooltip<T>(arg0: $Component_): $OptionInstance$TooltipSupplier<T>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Object, arg5: $Consumer_<$Object>);
        constructor(arg0: string, arg1: $OptionInstance$TooltipSupplier_<$Object>, arg2: $OptionInstance$CaptionBasedToString_<$Object>, arg3: $OptionInstance$ValueSet<$Object>, arg4: $Codec<$Object>, arg5: $Object, arg6: $Consumer_<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftClientAccessor, $IWorldMapMinecraftClient, $MinecraftAccessor, $MinecraftClientAccessor$1, $MinecraftClientKJS, $MinecraftAccessor$1, $IXaeroMinimapMinecraftClient, $IMixinMinecraft {
        run(): void;
        static getInstance(): $Minecraft;
        stop(): void;
        destroy(): void;
        tick(): void;
        setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_): void;
        getConnection(): $ClientPacketListener;
        disconnect(arg0: $Screen, arg1: boolean): void;
        disconnect(): void;
        disconnect(arg0: $Screen): void;
        isRunning(): boolean;
        static crash(arg0: $Minecraft, arg1: $File_, arg2: $CrashReport): void;
        getProfiler(): $ProfilerFiller;
        getTimer(): $DeltaTracker;
        getCurrentServer(): $ServerData;
        getProxy(): $Proxy;
        getTextureManager(): $TextureManager;
        getWindow(): $Window;
        setOverlay(arg0: $Overlay): void;
        getVanillaPackResources(): $VanillaPackResources;
        getGuiSprites(): $GuiSpriteManager;
        renderBuffers(): $RenderBuffers;
        allowsMultiplayer(): boolean;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        isLocalServer(): boolean;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        setWindowActive(arg0: boolean): void;
        getItemRenderer(): $ItemRenderer;
        updateFontOptions(): void;
        getBlockRenderer(): $BlockRenderDispatcher;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        resizeDisplay(): void;
        setScreen(arg0: $Screen): void;
        isGameLoadFinished(): boolean;
        multiplayerBan(): $BanDetails;
        updateTitle(): void;
        static checkModStatus(): $ModCheck;
        clearResourcePacksOnError(arg0: $Throwable, arg1: $Component_, arg2: $Minecraft$GameLoadCookie_): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        getToasts(): $ToastComponent;
        handler$bcp000$balm$run(arg0: $CallbackInfo): void;
        getDebugOverlay(): $DebugScreenOverlay;
        emergencySaveAndCrash(arg0: $CrashReport): void;
        getMainRenderTarget(): $RenderTarget;
        modifyReturnValue$bgk000$exposure$onGetMainRenderTarget(original: $RenderTarget): $RenderTarget;
        getLaunchedVersion(): string;
        getVersionType(): string;
        delayCrash(arg0: $CrashReport): void;
        delayCrashRaw(arg0: $CrashReport): void;
        static fillReport(arg0: $Minecraft, arg1: $LanguageManager, arg2: string, arg3: $Options, arg4: $CrashReport): void;
        fillReport(arg0: $CrashReport): $CrashReport;
        isEnforceUnicode(): boolean;
        getModelManager(): $ModelManager;
        getLevelSource(): $LevelStorageSource;
        getChatStatus(): $Minecraft$ChatStatus;
        setLastInputType(arg0: $InputType_): void;
        handler$bgk000$exposure$onSetScreen(screen: $Screen, ci: $CallbackInfo): void;
        handler$znf002$veil$close(arg0: $CallbackInfo): void;
        handler$zeh000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$zmd000$veil$beginFrame(arg0: $CallbackInfo): void;
        modify$zeh000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$zmd000$veil$endFrame(arg0: $CallbackInfo): void;
        hasSingleplayerServer(): boolean;
        cursorEntered(): void;
        getFps(): number;
        getFrameTimeNs(): number;
        debugClientMetricsStart(arg0: $Consumer_<$Component>): boolean;
        getSingleplayerServer(): $IntegratedServer;
        debugFpsMeterKeyPress(arg0: number): void;
        pauseGame(arg0: boolean): void;
        handler$bgk000$exposure$onStartAttack(cir: $CallbackInfoReturnable<any>): void;
        handler$bgk000$exposure$onStartUseItem(ci: $CallbackInfo): void;
        getMusicManager(): $MusicManager;
        handleKeybinds(): void;
        handler$flk000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        getCameraEntity(): $Entity;
        getTelemetryManager(): $ClientTelemetryManager;
        getGpuUtilization(): number;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        createWorldOpenFlows(): $WorldOpenFlows;
        doWorldLoad(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $PackRepository, arg2: $WorldStem_, arg3: boolean): void;
        updateReportEnvironment(arg0: $ReportEnvironment_): void;
        getUser(): $User;
        handler$bgk000$exposure$onLevelUnload(newLevel: $ClientLevel, reason: $ReceivingLevelScreen$Reason_, ci: $CallbackInfo): void;
        clearDownloadedResourcePacks(): void;
        handler$bgk000$exposure$disconnect(nextScreen: $Screen, keepResourcePacks: boolean, ci: $CallbackInfo): void;
        clearClientLevel(arg0: $Screen): void;
        forceSetScreen(arg0: $Screen): void;
        telemetryOptInExtra(): boolean;
        extraTelemetryAvailable(): boolean;
        allowsTelemetry(): boolean;
        isNameBanned(): boolean;
        allowsRealms(): boolean;
        isBlocked(arg0: $UUID_): boolean;
        isDemo(): boolean;
        static renderNames(): boolean;
        static useFancyGraphics(): boolean;
        static useShaderTransparency(): boolean;
        static useAmbientOcclusion(): boolean;
        addCustomNbtData(arg0: $ItemStack_, arg1: $BlockEntity, arg2: $RegistryAccess): void;
        localvar$hdc000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$hdc000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        handler$cee000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        static getLauncherBrand(): string;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        delayTextureReload(): $CompletableFuture<void>;
        isSingleplayer(): boolean;
        isLocalPlayer(arg0: $UUID_): boolean;
        getGameProfile(): $GameProfile;
        getResourceManager(): $ResourceManager;
        getResourcePackRepository(): $PackRepository;
        getDownloadedPackSource(): $DownloadedPackSource;
        getResourcePackDirectory(): $Path;
        getLanguageManager(): $LanguageManager;
        getTextureAtlas(arg0: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        isPaused(): boolean;
        getSoundManager(): $SoundManager;
        getSituationalMusic(): $Music;
        getMinecraftSessionService(): $MinecraftSessionService;
        getSkinManager(): $SkinManager;
        setCameraEntity(arg0: $Entity): void;
        shouldEntityAppearGlowing(arg0: $Entity): boolean;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getFixerUpper(): $DataFixer;
        getBlockColors(): $BlockColors;
        showOnlyReducedInfo(): boolean;
        getTutorial(): $Tutorial;
        isWindowActive(): boolean;
        getHotbarManager(): $HotbarManager;
        getPaintingTextures(): $PaintingTextureManager;
        getMobEffectTextures(): $MobEffectTextureManager;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        grabPanoramixScreenshot(arg0: $File_, arg1: number, arg2: number): $Component;
        getProgressListener(): $StoringChunkProgressListener;
        getSplashManager(): $SplashManager;
        getOverlay(): $Overlay;
        getPlayerSocialManager(): $PlayerSocialManager;
        updateMaxMipLevel(arg0: number): void;
        getItemColors(): $ItemColors;
        getEntityModels(): $EntityModelSet;
        isTextFilteringEnabled(): boolean;
        prepareForMultiplayer(): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        canValidateProfileKeys(): boolean;
        getLastInputType(): $InputType;
        getNarrator(): $GameNarrator;
        getChatListener(): $ChatListener;
        getReportingContext(): $ReportingContext;
        getXaeroWorldMap_fps(): number;
        getTitle(): string;
        getScheduledEvents(): $ScheduledEvents;
        getXaeroMinimap_fps(): number;
        static getFPS$sodium_extra_$md$8e2dbe$0(): number;
        getLocale(): $Locale;
        pushGuiLayer(arg0: $Screen): void;
        popGuiLayer(): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        getName(): $Component;
        getCurrentScreen(): $Screen;
        setCurrentScreen(gui: $Screen): void;
        setTitle(t: string): void;
        getCurrentWorldName(): string;
        isKeyBindDown(id: string): boolean;
        getKeyBindPressedTicks(id: string): number;
        isKeyMappingDown(key: $KeyMapping): boolean;
        isShiftDown(): boolean;
        isCtrlDown(): boolean;
        isAltDown(): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        self(): $Minecraft;
        tell(message: $Component_): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        ldlib2$getClientTickCount(): number;
        create$setMissTime(arg0: number): void;
        openChatScreenFancyMenu(arg0: string): void;
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(arg0: $GameConfig);
        get connection(): $ClientPacketListener;
        get running(): boolean;
        get profiler(): $ProfilerFiller;
        get timer(): $DeltaTracker;
        get currentServer(): $ServerData;
        get proxy(): $Proxy;
        get textureManager(): $TextureManager;
        get window(): $Window;
        get vanillaPackResources(): $VanillaPackResources;
        get guiSprites(): $GuiSpriteManager;
        get localServer(): boolean;
        get itemRenderer(): $ItemRenderer;
        get blockRenderer(): $BlockRenderDispatcher;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get gameLoadFinished(): boolean;
        get toasts(): $ToastComponent;
        get debugOverlay(): $DebugScreenOverlay;
        get mainRenderTarget(): $RenderTarget;
        get launchedVersion(): string;
        get versionType(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get fps(): number;
        get frameTimeNs(): number;
        get singleplayerServer(): $IntegratedServer;
        get musicManager(): $MusicManager;
        get telemetryManager(): $ClientTelemetryManager;
        get gpuUtilization(): number;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get user(): $User;
        get nameBanned(): boolean;
        get demo(): boolean;
        static get launcherBrand(): string;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get singleplayer(): boolean;
        get gameProfile(): $GameProfile;
        get resourceManager(): $ResourceManager;
        get resourcePackRepository(): $PackRepository;
        get downloadedPackSource(): $DownloadedPackSource;
        get resourcePackDirectory(): $Path;
        get languageManager(): $LanguageManager;
        get paused(): boolean;
        get soundManager(): $SoundManager;
        get situationalMusic(): $Music;
        get minecraftSessionService(): $MinecraftSessionService;
        get skinManager(): $SkinManager;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get fixerUpper(): $DataFixer;
        get blockColors(): $BlockColors;
        get tutorial(): $Tutorial;
        get hotbarManager(): $HotbarManager;
        get paintingTextures(): $PaintingTextureManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get progressListener(): $StoringChunkProgressListener;
        get splashManager(): $SplashManager;
        get playerSocialManager(): $PlayerSocialManager;
        get itemColors(): $ItemColors;
        get entityModels(): $EntityModelSet;
        get textFilteringEnabled(): boolean;
        get profileKeySignatureValidator(): $SignatureValidator;
        get narrator(): $GameNarrator;
        get chatListener(): $ChatListener;
        get reportingContext(): $ReportingContext;
        get xaeroWorldMap_fps(): number;
        get scheduledEvents(): $ScheduledEvents;
        get xaeroMinimap_fps(): number;
        static get FPS$sodium_extra_$md$8e2dbe$0(): number;
        get locale(): $Locale;
        get currentWorldName(): string;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get altDown(): boolean;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get displayName(): $Component;
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
    }
    export class $Camera$NearPlane implements $NearPlaneAccessor {
        getTopLeft(): $Vec3;
        getTopRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getBottomRight(): $Vec3;
        getPointOnPlane(arg0: number, arg1: number): $Vec3;
        getForward(): $Vec3;
        forward: $Vec3;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
        get topLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get bottomRight(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static create$nochatreports_$md$8e2dbe$0(arg0: string, arg1: number, arg2: $ResourceLocation_, arg3: number, arg4: number): $GuiMessageTag$Icon;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified" | "chat_ncr_encrypted";
    export class $KeyboardHandler {
        setup(arg0: number): void;
        tick(): void;
        setClipboard(arg0: string): void;
        handler$zkn000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$hca000$betterf3$processF3(key: number, cir: $CallbackInfoReturnable<any>): void;
        handler$zkn000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$hca000$betterf3$processF3Messages(key: number, cir: $CallbackInfoReturnable<any>): void;
        keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$doi001$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        handler$doi000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        getClipboard(): string;
        cached_key_FancyMenu: number;
        cached_scanCode_FancyMenu: number;
        cached_action_FancyMenu: number;
        cached_char_codePoint_FancyMenu: number;
        static DEBUG_CRASH_TIME: number;
        cached_char_windowPointer_FancyMenu: number;
        cached_char_modifiers_FancyMenu: number;
        cached_modifiers_FancyMenu: number;
        constructor(arg0: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(arg0: number, arg1: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(arg0: $ResourceLoadStateTracker$ReloadReason_, arg1: $List_<$PackResources>): void;
        startRecovery(arg0: $Throwable): void;
        fillCrashReport(arg0: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(arg0: T): (T) | undefined;
        createButton(arg0: $OptionInstance$TooltipSupplier_<T>, arg1: $Options, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
        codec(): $Codec<T>;
    }
    export class $ComponentCollector {
        reset(): void;
        append(arg0: $FormattedText): void;
        getResult(): $FormattedText;
        getResultOrEmpty(): $FormattedText;
        constructor();
        get result(): $FormattedText;
        get resultOrEmpty(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        values(): $List<T>;
        validateValue(arg0: T): (T) | undefined;
        codec(): $Codec<T>;
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altValues(): $List<T>;
        altCondition(): $BooleanSupplier;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { values?: $List_<any>, altValues?: $List_<any>, codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_,  } | [values?: $List_<any>, altValues?: $List_<any>, codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        plainTailByWidth(arg0: string, arg1: number, arg2: $Style): string;
        plainHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        headByWidth(arg0: $FormattedText, arg1: number, arg2: $Style): $FormattedText;
        static getWordPosition(arg0: string, arg1: number, arg2: number, arg3: boolean): number;
        stringWidth(arg0: $FormattedCharSequence_): number;
        stringWidth(arg0: string): number;
        stringWidth(arg0: $FormattedText): number;
        componentStyleAtWidth(arg0: $FormattedCharSequence_, arg1: number): $Style;
        componentStyleAtWidth(arg0: $FormattedText, arg1: number): $Style;
        splitLines(arg0: string, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: string, arg1: number, arg2: $Style, arg3: boolean, arg4: $StringSplitter$LinePosConsumer_): void;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $FormattedText): $List<$FormattedText>;
        splitLines(arg0: $FormattedText, arg1: number, arg2: $Style, arg3: $BiConsumer_<$FormattedText, boolean>): void;
        plainIndexAtWidth(arg0: string, arg1: number, arg2: $Style): number;
        formattedIndexByWidth(arg0: string, arg1: number, arg2: $Style): number;
        formattedHeadByWidth(arg0: string, arg1: number, arg2: $Style): string;
        findLineBreak(arg0: string, arg1: number, arg2: $Style): number;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(arg0: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingAccessor, $AccessKeyMapping, $KeyMappingsAccessor, $KeyMappingAccessor$1, $KeyBindingAccessor, $AccessorKeyMapping, $KeyBindingAccessor$1 {
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(arg0: number, arg1: number): boolean;
        static set(arg0: $InputConstants$Key, arg1: boolean): void;
        isDefault(): boolean;
        static setAll(): void;
        getDefaultKey(): $InputConstants$Key;
        static resetToggleKeys(): void;
        static click(arg0: $InputConstants$Key): void;
        matchesMouse(arg0: number): boolean;
        setKey(arg0: $InputConstants$Key): void;
        getCategory(): string;
        same(arg0: $KeyMapping): boolean;
        isUnbound(): boolean;
        static createNameSupplier(arg0: string): $Supplier<$Component>;
        static releaseAll(): void;
        consumeClick(): boolean;
        isDown(): boolean;
        setDown(arg0: boolean): void;
        static resetMapping(): void;
        getTranslatedKeyMessage(): $Component;
        getKeyConflictContext(): $IKeyConflictContext;
        getKeyModifier(): $KeyModifier;
        getDefaultKeyModifier(): $KeyModifier;
        saveString(): string;
        setKeyConflictContext(arg0: $IKeyConflictContext): void;
        setKeyModifierAndCode(arg0: $KeyModifier_, arg1: $InputConstants$Key): void;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$8e2dbe$1(): $Map<any, any>;
        getDisplayName(): $Component;
        setToDefault(): void;
        isActiveAndMatches(arg0: $InputConstants$Key): boolean;
        isConflictContextAndModifierActive(): boolean;
        hasKeyModifierConflict(arg0: $KeyMapping): boolean;
        getKey(): $InputConstants$Key;
        fabric_getTimesPressed(): number;
        controlling$getKey(): $InputConstants$Key;
        fabric_getBoundKey(): $InputConstants$Key;
        static ALL: $Map<string, $KeyMapping>;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: number, arg2: string);
        constructor(arg0: string, arg1: $InputConstants$Type_, arg2: number, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        get name(): string;
        get default(): boolean;
        get defaultKey(): $InputConstants$Key;
        get category(): string;
        get unbound(): boolean;
        get translatedKeyMessage(): $Component;
        get keyModifier(): $KeyModifier;
        get defaultKeyModifier(): $KeyModifier;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(arg0: boolean): number;
        constructor(arg0: number);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(arg0: string, arg1: T, arg2: $Function_<string, T>, arg3: $Function_<T, string>): T;
        process(arg0: string, arg1: number): number;
        process(arg0: string, arg1: string): string;
        process(arg0: string, arg1: boolean): boolean;
        process(arg0: string, arg1: number): number;
    }
    export class $DebugQueryHandler {
        handleResponse(arg0: number, arg1: $CompoundTag_): boolean;
        queryBlockEntityTag(arg0: $BlockPos_, arg1: $Consumer_<$CompoundTag>): void;
        queryEntityTag(arg0: number, arg1: $Consumer_<$CompoundTag>): void;
        constructor(arg0: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        static byId(arg0: number): $NarratorStatus;
        shouldNarrateChat(): boolean;
        shouldNarrateSystem(): boolean;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(arg0: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(arg0: $Component_, arg1: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(arg0: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(arg0: $OptionInstance<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
