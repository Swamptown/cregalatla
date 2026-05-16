import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $RecipeHolder, $RecipeManager, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $LevelRenderer, $GameRenderer, $FogRenderer$FogMode_, $FogRenderer$FogMode, $MultiBufferSource_, $RenderType, $DimensionSpecialEffects, $MultiBufferSource, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $EntityType_, $HumanoidArm_, $Entity, $EquipmentSlotGroup_, $HumanoidArm, $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $ParticleType_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $RecipeBookCategories_, $Camera, $DeltaTracker, $RecipeBookCategories, $Options } from "@package/net/minecraft/client";
import { $ResourceProvider, $PreparableReloadListener_, $ReloadableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $SpriteSourceType, $SpriteSourceType_, $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $PlayerRenderer } from "@package/net/minecraft/client/renderer/entity/player";
import { $InteractionHand_, $InteractionHand } from "@package/net/minecraft/world";
import { $MultiPlayerGameMode, $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $IItemDecorator_, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $AttributeTooltipContext, $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $PresetEditor_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $Music } from "@package/net/minecraft/sounds";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Connection } from "@package/net/minecraft/network";
import { $ClientTooltipComponent, $ClientTooltipPositioner_, $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $MenuType_, $AbstractContainerMenu, $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $FogShape_, $FogShape } from "@package/com/mojang/blaze3d/shaders";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGeometryLoader_ } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ParticleProvider$Sprite_, $ParticleEngine$SpriteParticleRegistration_, $ParticleProvider_, $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $PlayerChatMessage_, $Component_, $ChatType$Bound, $ChatType$Bound_, $FormattedText, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiLayerManager$NamedLayer_ } from "@package/net/neoforged/neoforge/client/gui";
import { $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $PlayerSkin$Model, $PlayerSkin$Model_ } from "@package/net/minecraft/client/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Block_, $SkullBlock$Type_ } from "@package/net/minecraft/world/level/block";
import { $EntityHitResult, $BlockHitResult, $HitResult } from "@package/net/minecraft/world/phys";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
import { $AnimationTarget_ } from "@package/net/neoforged/neoforge/client/entity/animation";
import { $ItemColors, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $BakedModel, $ModelResourceLocation, $ModelResourceLocation_, $ModelManager, $ModelBakery, $Material } from "@package/net/minecraft/client/resources/model";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID, $SequencedMap } from "@package/java/util";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SkullModelBase, $EntityModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $Function, $UnaryOperator_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockColors, $BlockColor_ } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $TextureAtlas, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Class } from "@package/java/lang";
import { $ItemLike_, $ColorResolver_, $Level_, $BlockAndTintGetter, $GameType, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $File_, $File } from "@package/java/io";
import { $QuadLighter } from "@package/net/neoforged/neoforge/client/model/lighting";
import { $LivingEntityRenderer, $EntityRendererProvider_, $ItemFrameRenderer, $EntityRendererProvider$Context, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $Toast_, $Toast } from "@package/net/minecraft/client/gui/components/toasts";
import { $FogType_, $FogType } from "@package/net/minecraft/world/level/material";
import { $EntityModelSet, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $LocalPlayer, $Input, $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $LerpingBossEvent } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList, $ImmutableList$Builder, $ImmutableMap$Builder, $BiMap } from "@package/com/google/common/collect";
import { $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $AnimationChannel$Interpolation_ } from "@package/net/minecraft/client/animation";
import { $MenuScreens$ScreenConstructor_, $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen, $EffectRenderingInventoryScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $ByteBufferBuilder, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LayeredDraw$Layer_, $LayeredDraw$Layer, $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as sound from "@package/net/neoforged/neoforge/client/event/sound";

declare module "@package/net/neoforged/neoforge/client/event" {
    export class $ViewportEvent extends $Event {
        getPartialTick(): number;
        getCamera(): $Camera;
        getRenderer(): $GameRenderer;
        constructor(arg0: $GameRenderer, arg1: $Camera, arg2: number);
        get partialTick(): number;
        get camera(): $Camera;
        get renderer(): $GameRenderer;
    }
    export class $EntityRenderersEvent$CreateSkullModels extends $EntityRenderersEvent {
        getEntityModelSet(): $EntityModelSet;
        registerSkullModel(arg0: $SkullBlock$Type_, arg1: $SkullModelBase): void;
        constructor(arg0: $ImmutableMap$Builder<$SkullBlock$Type_, $SkullModelBase>, arg1: $EntityModelSet);
        get entityModelSet(): $EntityModelSet;
    }
    export class $RenderLevelStageEvent$RegisterStageEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $RenderType): $RenderLevelStageEvent$Stage;
        constructor();
    }
    export class $ClientChatReceivedEvent extends $Event implements $ICancellableEvent {
        getMessage(): $Component;
        isSystem(): boolean;
        getSender(): $UUID;
        getBoundChatType(): $ChatType$Bound;
        setMessage(arg0: $Component_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ChatType$Bound_, arg1: $Component_, arg2: $UUID_);
        get system(): boolean;
        get sender(): $UUID;
        get boundChatType(): $ChatType$Bound;
    }
    export class $RegisterKeyMappingsEvent extends $Event implements $IModBusEvent {
        register(arg0: $KeyMapping): void;
        constructor(arg0: $Options);
    }
    export class $RenderGuiLayerEvent$Post extends $RenderGuiLayerEvent {
        constructor(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $ResourceLocation_, arg3: $LayeredDraw$Layer_);
    }
    export class $RenderArmEvent extends $Event implements $ICancellableEvent {
        getArm(): $HumanoidArm;
        getMultiBufferSource(): $MultiBufferSource;
        getPackedLight(): number;
        getPlayer(): $AbstractClientPlayer;
        getPoseStack(): $PoseStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $AbstractClientPlayer, arg4: $HumanoidArm_);
        get arm(): $HumanoidArm;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get player(): $AbstractClientPlayer;
        get poseStack(): $PoseStack;
    }
    export class $RegisterClientCommandsEvent extends $Event {
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getBuildContext(): $CommandBuildContext;
        constructor(arg0: $CommandDispatcher<$CommandSourceStack>, arg1: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get buildContext(): $CommandBuildContext;
    }
    export class $ScreenEvent$MouseDragged$Pre extends $ScreenEvent$MouseDragged implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $ModelEvent$RegisterGeometryLoaders extends $ModelEvent implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $IGeometryLoader_<never>): void;
        constructor(arg0: $Map_<$ResourceLocation_, $IGeometryLoader_<never>>);
    }
    export class $ClientPauseChangeEvent extends $Event {
        isPaused(): boolean;
        constructor(arg0: boolean);
        get paused(): boolean;
    }
    export class $RenderTooltipEvent extends $Event {
        getY(): number;
        getGraphics(): $GuiGraphics;
        getComponents(): $List<$ClientTooltipComponent>;
        getX(): number;
        getFont(): $Font;
        getItemStack(): $ItemStack;
        get y(): number;
        get graphics(): $GuiGraphics;
        get components(): $List<$ClientTooltipComponent>;
        get x(): number;
        get font(): $Font;
        get itemStack(): $ItemStack;
    }
    export class $RecipesUpdatedEvent extends $Event {
        getRecipeManager(): $RecipeManager;
        constructor(arg0: $RecipeManager);
        get recipeManager(): $RecipeManager;
    }
    export class $RenderPlayerEvent extends $PlayerEvent {
        getPartialTick(): number;
        getMultiBufferSource(): $MultiBufferSource;
        getPackedLight(): number;
        getRenderer(): $PlayerRenderer;
        getPoseStack(): $PoseStack;
        get partialTick(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get renderer(): $PlayerRenderer;
        get poseStack(): $PoseStack;
    }
    export class $RegisterDimensionSpecialEffectsEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $DimensionSpecialEffects): void;
        constructor(arg0: $Map_<$ResourceLocation_, $DimensionSpecialEffects>);
    }
    export class $ClientTickEvent$Post extends $ClientTickEvent {
        constructor();
    }
    export class $ComputeFovModifierEvent extends $Event {
        getPlayer(): $Player;
        setNewFovModifier(arg0: number): void;
        getNewFovModifier(): number;
        getFovModifier(): number;
        constructor(arg0: $Player, arg1: number);
        get player(): $Player;
        get fovModifier(): number;
    }
    export class $CustomizeGuiOverlayEvent$Chat extends $CustomizeGuiOverlayEvent {
        getPosX(): number;
        getPosY(): number;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        constructor(arg0: $Window, arg1: $GuiGraphics, arg2: $DeltaTracker, arg3: number, arg4: number);
    }
    export class $EntityRenderersEvent$RegisterRenderers extends $EntityRenderersEvent {
        registerBlockEntityRenderer<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRendererProvider_<T>): void;
        registerEntityRenderer<T extends $Entity>(arg0: $EntityType_<T>, arg1: $EntityRendererProvider_<T>): void;
        constructor();
    }
    export class $ScreenEvent$MouseButtonReleased$Pre extends $ScreenEvent$MouseButtonReleased implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $RegisterColorHandlersEvent$ColorResolvers extends $RegisterColorHandlersEvent {
        register(arg0: $ColorResolver_): void;
        constructor(arg0: $ImmutableList$Builder<$ColorResolver_>);
    }
    export class $ClientPlayerNetworkEvent extends $Event {
        getMultiPlayerGameMode(): $MultiPlayerGameMode;
        getPlayer(): $LocalPlayer;
        getConnection(): $Connection;
        get multiPlayerGameMode(): $MultiPlayerGameMode;
        get player(): $LocalPlayer;
        get connection(): $Connection;
    }
    export class $RenderGuiEvent$Pre extends $RenderGuiEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $GuiGraphics, arg1: $DeltaTracker);
    }
    export class $ClientTickEvent$Pre extends $ClientTickEvent {
        constructor();
    }
    export class $AddSectionGeometryEvent$AdditionalSectionRenderer {
    }
    export interface $AddSectionGeometryEvent$AdditionalSectionRenderer {
        render(arg0: $AddSectionGeometryEvent$SectionRenderingContext): void;
    }
    /**
     * Values that may be interpreted as {@link $AddSectionGeometryEvent$AdditionalSectionRenderer}.
     */
    export type $AddSectionGeometryEvent$AdditionalSectionRenderer_ = ((arg0: $AddSectionGeometryEvent$SectionRenderingContext) => void);
    export class $MovementInputUpdateEvent extends $PlayerEvent {
        getInput(): $Input;
        constructor(arg0: $Player, arg1: $Input);
        get input(): $Input;
    }
    export class $CustomizeGuiOverlayEvent$BossEventProgress extends $CustomizeGuiOverlayEvent implements $ICancellableEvent {
        getIncrement(): number;
        getBossEvent(): $LerpingBossEvent;
        setIncrement(arg0: number): void;
        getY(): number;
        getX(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Window, arg1: $GuiGraphics, arg2: $DeltaTracker, arg3: $LerpingBossEvent, arg4: number, arg5: number, arg6: number);
        get bossEvent(): $LerpingBossEvent;
        get y(): number;
        get x(): number;
    }
    export class $RegisterShadersEvent extends $Event implements $IModBusEvent {
        getResourceProvider(): $ResourceProvider;
        registerShader(arg0: $ShaderInstance, arg1: $Consumer_<$ShaderInstance>): void;
        constructor(arg0: $ResourceProvider_, arg1: $List_<$Pair<$ShaderInstance, $Consumer_<$ShaderInstance>>>);
        get resourceProvider(): $ResourceProvider;
    }
    export class $RegisterJsonAnimationTypesEvent extends $Event implements $IModBusEvent {
        registerTarget(arg0: $ResourceLocation_, arg1: $AnimationTarget_): void;
        registerInterpolation(arg0: $ResourceLocation_, arg1: $AnimationChannel$Interpolation_): void;
        constructor(arg0: $ImmutableMap$Builder<$ResourceLocation_, $AnimationTarget_>, arg1: $ImmutableMap$Builder<$ResourceLocation_, $AnimationChannel$Interpolation_>);
    }
    export class $ScreenEvent$RenderInventoryMobEffects extends $ScreenEvent implements $ICancellableEvent {
        isCompact(): boolean;
        getHorizontalOffset(): number;
        getAvailableSpace(): number;
        setHorizontalOffset(arg0: number): void;
        addHorizontalOffset(arg0: number): void;
        setCompact(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: boolean, arg3: number);
        get availableSpace(): number;
    }
    export class $RegisterColorHandlersEvent extends $Event implements $IModBusEvent {
    }
    export class $RenderHighlightEvent$Entity extends $RenderHighlightEvent {
        getTarget(): $EntityHitResult;
        constructor(arg0: $LevelRenderer, arg1: $Camera, arg2: $EntityHitResult, arg3: $DeltaTracker, arg4: $PoseStack, arg5: $MultiBufferSource_);
        get target(): $EntityHitResult;
    }
    export class $RegisterParticleProvidersEvent extends $Event implements $IModBusEvent {
        registerSpriteSet<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        registerSpecial<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleProvider_<T>): void;
        registerSprite<T extends $ParticleOptions>(arg0: $ParticleType_<T>, arg1: $ParticleProvider$Sprite_<T>): void;
        constructor(arg0: $ParticleEngine);
    }
    export class $ScreenEvent$MouseDragged$Post extends $ScreenEvent$MouseDragged {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $EntityRenderersEvent extends $Event implements $IModBusEvent {
    }
    export class $ScreenEvent$Render$Pre extends $ScreenEvent$Render implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number);
    }
    export class $CalculatePlayerTurnEvent extends $Event {
        getMouseSensitivity(): number;
        getCinematicCameraEnabled(): boolean;
        setMouseSensitivity(arg0: number): void;
        setCinematicCameraEnabled(arg0: boolean): void;
        constructor(arg0: number, arg1: boolean);
    }
    export class $ModelEvent$RegisterAdditional extends $ModelEvent implements $IModBusEvent {
        register(arg0: $ModelResourceLocation_): void;
        constructor(arg0: $Set_<$ModelResourceLocation_>);
    }
    export class $InputEvent$MouseButton$Pre extends $InputEvent$MouseButton implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $RenderFrameEvent$Pre extends $RenderFrameEvent {
        constructor(arg0: $DeltaTracker);
    }
    export class $ViewportEvent$RenderFog extends $ViewportEvent implements $ICancellableEvent {
        getType(): $FogType;
        scaleFarPlaneDistance(arg0: number): void;
        scaleNearPlaneDistance(arg0: number): void;
        setNearPlaneDistance(arg0: number): void;
        setFarPlaneDistance(arg0: number): void;
        getNearPlaneDistance(): number;
        getFarPlaneDistance(): number;
        getFogShape(): $FogShape;
        setFogShape(arg0: $FogShape_): void;
        getMode(): $FogRenderer$FogMode;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $FogRenderer$FogMode_, arg1: $FogType_, arg2: $Camera, arg3: number, arg4: number, arg5: number, arg6: $FogShape_);
        get type(): $FogType;
        get mode(): $FogRenderer$FogMode;
    }
    export class $ScreenEvent$MouseButtonPressed$Pre extends $ScreenEvent$MouseButtonPressed implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScreenEvent$Init$Post extends $ScreenEvent$Init {
        constructor(arg0: $Screen, arg1: $List_<$GuiEventListener>, arg2: $Consumer_<$GuiEventListener>, arg3: $Consumer_<$GuiEventListener>);
    }
    export class $RegisterMaterialAtlasesEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        constructor(arg0: $Map_<$ResourceLocation_, $ResourceLocation_>);
    }
    export class $ScreenEvent$CharacterTyped extends $ScreenEvent {
        getModifiers(): number;
        getCodePoint(): string;
        constructor(arg0: $Screen, arg1: string, arg2: number);
        get modifiers(): number;
        get codePoint(): string;
    }
    export class $RenderLivingEvent$Post<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLivingEvent<T, M> {
        constructor(arg0: $LivingEntity, arg1: $LivingEntityRenderer<T, M>, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number);
    }
    export class $ScreenEvent$MouseDragged extends $ScreenEvent$MouseInput {
        getMouseButton(): number;
        getDragX(): number;
        getDragY(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get mouseButton(): number;
        get dragX(): number;
        get dragY(): number;
    }
    export class $RenderTooltipEvent$Color extends $RenderTooltipEvent {
        setBorderEnd(arg0: number): void;
        setBorderStart(arg0: number): void;
        setBackgroundStart(arg0: number): void;
        setBackgroundEnd(arg0: number): void;
        getOriginalBackgroundStart(): number;
        getOriginalBackgroundEnd(): number;
        getOriginalBorderStart(): number;
        getOriginalBorderEnd(): number;
        setBackground(arg0: number): void;
        getBackgroundStart(): number;
        getBackgroundEnd(): number;
        getBorderStart(): number;
        getBorderEnd(): number;
        constructor(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: $Font, arg5: number, arg6: number, arg7: number, arg8: $List_<$ClientTooltipComponent>);
        get originalBackgroundStart(): number;
        get originalBackgroundEnd(): number;
        get originalBorderStart(): number;
        get originalBorderEnd(): number;
        set background(value: number);
    }
    export class $CalculateDetachedCameraDistanceEvent extends $Event {
        getCamera(): $Camera;
        getDistance(): number;
        setDistance(arg0: number): void;
        isCameraFlipped(): boolean;
        getEntityScalingFactor(): number;
        constructor(arg0: $Camera, arg1: boolean, arg2: number, arg3: number);
        get camera(): $Camera;
        get cameraFlipped(): boolean;
        get entityScalingFactor(): number;
    }
    export class $RenderTooltipEvent$Pre extends $RenderTooltipEvent implements $ICancellableEvent {
        getTooltipPositioner(): $ClientTooltipPositioner;
        setFont(arg0: $Font): void;
        getScreenWidth(): number;
        getScreenHeight(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Font, arg7: $List_<$ClientTooltipComponent>, arg8: $ClientTooltipPositioner_);
        get tooltipPositioner(): $ClientTooltipPositioner;
        set font(value: $Font);
        get screenWidth(): number;
        get screenHeight(): number;
        set x(value: number);
        set y(value: number);
    }
    export class $ViewportEvent$ComputeFogColor extends $ViewportEvent {
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        constructor(arg0: $Camera, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ModelEvent$BakingCompleted extends $ModelEvent implements $IModBusEvent {
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModelBakery(): $ModelBakery;
        getModelManager(): $ModelManager;
        constructor(arg0: $ModelManager, arg1: $Map_<$ModelResourceLocation_, $BakedModel>, arg2: $ModelBakery);
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelBakery(): $ModelBakery;
        get modelManager(): $ModelManager;
    }
    export class $RenderHighlightEvent$Block extends $RenderHighlightEvent implements $ICancellableEvent {
        getTarget(): $BlockHitResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelRenderer, arg1: $Camera, arg2: $BlockHitResult, arg3: $DeltaTracker, arg4: $PoseStack, arg5: $MultiBufferSource_);
        get target(): $BlockHitResult;
    }
    export class $RenderNameTagEvent extends $EntityEvent {
        getContent(): $Component;
        getPartialTick(): number;
        getMultiBufferSource(): $MultiBufferSource;
        getPackedLight(): number;
        canRender(): $TriState;
        setContent(arg0: $Component_): void;
        getPoseStack(): $PoseStack;
        setCanRender(arg0: $TriState_): void;
        getOriginalContent(): $Component;
        getEntityRenderer(): $EntityRenderer<never>;
        constructor(arg0: $Entity, arg1: $Component_, arg2: $EntityRenderer<never>, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number);
        get partialTick(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get poseStack(): $PoseStack;
        get originalContent(): $Component;
        get entityRenderer(): $EntityRenderer<never>;
    }
    export class $RegisterGuiLayersEvent$Ordering extends $Enum<$RegisterGuiLayersEvent$Ordering> {
    }
    /**
     * Values that may be interpreted as {@link $RegisterGuiLayersEvent$Ordering}.
     */
    export type $RegisterGuiLayersEvent$Ordering_ = "before" | "after";
    export class $RenderTooltipEvent$GatherComponents extends $Event implements $ICancellableEvent {
        getTooltipElements(): $List<$Either<$FormattedText, $TooltipComponent>>;
        getMaxWidth(): number;
        setMaxWidth(arg0: number): void;
        getScreenWidth(): number;
        getScreenHeight(): number;
        getItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: $List_<$Either<$FormattedText, $TooltipComponent>>, arg4: number);
        get tooltipElements(): $List<$Either<$FormattedText, $TooltipComponent>>;
        get screenWidth(): number;
        get screenHeight(): number;
        get itemStack(): $ItemStack;
    }
    export class $RegisterMenuScreensEvent extends $Event implements $IModBusEvent {
        register<M extends $AbstractContainerMenu, U extends $Screen>(arg0: $MenuType_<M>, arg1: $MenuScreens$ScreenConstructor_<M, U>): void;
        constructor(arg0: $Map_<$MenuType_<never>, $MenuScreens$ScreenConstructor_<never, never>>);
    }
    export class $RenderHandEvent extends $Event implements $ICancellableEvent {
        getPartialTick(): number;
        getEquipProgress(): number;
        getInterpolatedPitch(): number;
        getMultiBufferSource(): $MultiBufferSource;
        getPackedLight(): number;
        getHand(): $InteractionHand;
        getSwingProgress(): number;
        getPoseStack(): $PoseStack;
        getItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $InteractionHand_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $ItemStack_);
        get partialTick(): number;
        get equipProgress(): number;
        get interpolatedPitch(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get hand(): $InteractionHand;
        get swingProgress(): number;
        get poseStack(): $PoseStack;
        get itemStack(): $ItemStack;
    }
    export class $ScreenEvent$KeyPressed$Post extends $ScreenEvent$KeyPressed implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $RegisterSpriteSourceTypesEvent extends $Event implements $IModBusEvent {
        /**
         * @deprecated
         */
        register(arg0: $ResourceLocation_, arg1: $MapCodec_<$SpriteSource>): $SpriteSourceType;
        register(arg0: $ResourceLocation_, arg1: $SpriteSourceType_): void;
        constructor(arg0: $BiMap<$ResourceLocation_, $SpriteSourceType_>);
    }
    export class $ScreenEvent$CharacterTyped$Pre extends $ScreenEvent$CharacterTyped implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: string, arg2: number);
    }
    export class $ScreenEvent$Opening extends $ScreenEvent implements $ICancellableEvent {
        getCurrentScreen(): $Screen;
        setNewScreen(arg0: $Screen): void;
        getNewScreen(): $Screen;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: $Screen);
        get currentScreen(): $Screen;
    }
    export class $RenderGuiEvent extends $Event {
        getPartialTick(): $DeltaTracker;
        getGuiGraphics(): $GuiGraphics;
        get partialTick(): $DeltaTracker;
        get guiGraphics(): $GuiGraphics;
    }
    export class $ClientPlayerNetworkEvent$LoggingOut extends $ClientPlayerNetworkEvent {
        constructor(arg0: $MultiPlayerGameMode, arg1: $LocalPlayer, arg2: $Connection);
    }
    export class $ClientPlayerNetworkEvent$Clone extends $ClientPlayerNetworkEvent {
        getOldPlayer(): $LocalPlayer;
        getNewPlayer(): $LocalPlayer;
        constructor(arg0: $MultiPlayerGameMode, arg1: $LocalPlayer, arg2: $LocalPlayer, arg3: $Connection);
        get oldPlayer(): $LocalPlayer;
        get newPlayer(): $LocalPlayer;
    }
    export class $EntityRenderersEvent$RegisterLayerDefinitions extends $EntityRenderersEvent {
        registerLayerDefinition(arg0: $ModelLayerLocation, arg1: $Supplier_<$LayerDefinition>): void;
        constructor();
    }
    export class $RegisterEntitySpectatorShadersEvent extends $Event implements $IModBusEvent {
        register(arg0: $EntityType_<never>, arg1: $ResourceLocation_): void;
        constructor(arg0: $Map_<$EntityType_<never>, $ResourceLocation_>);
    }
    export class $RegisterClientReloadListenersEvent extends $Event implements $IModBusEvent {
        registerReloadListener(arg0: $PreparableReloadListener_): void;
        constructor(arg0: $ReloadableResourceManager);
    }
    export class $GatherEffectScreenTooltipsEvent extends $Event {
        getEffectInstance(): $MobEffectInstance;
        getTooltip(): $List<$Component>;
        getScreen(): $EffectRenderingInventoryScreen<never>;
        constructor(arg0: $EffectRenderingInventoryScreen<never>, arg1: $MobEffectInstance, arg2: $List_<$Component_>);
        get effectInstance(): $MobEffectInstance;
        get tooltip(): $List<$Component>;
        get screen(): $EffectRenderingInventoryScreen<never>;
    }
    export class $ScreenEvent extends $Event {
        getScreen(): $Screen;
        get screen(): $Screen;
    }
    export class $AddAttributeTooltipsEvent extends $Event {
        getStack(): $ItemStack;
        getContext(): $AttributeTooltipContext;
        addTooltipLines(...arg0: $Component_[]): void;
        shouldShow(): boolean;
        constructor(arg0: $ItemStack_, arg1: $Consumer_<$Component>, arg2: $AttributeTooltipContext);
        get stack(): $ItemStack;
        get context(): $AttributeTooltipContext;
    }
    export class $RegisterPresetEditorsEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceKey_<$WorldPreset>, arg1: $PresetEditor_): void;
        constructor(arg0: $Map_<$ResourceKey_<$WorldPreset>, $PresetEditor_>);
    }
    export class $RegisterClientTooltipComponentFactoriesEvent extends $Event implements $IModBusEvent {
        register<T extends $TooltipComponent>(arg0: $Class<T>, arg1: $Function_<T, $ClientTooltipComponent>): void;
        constructor(arg0: $Map_<$Class<$TooltipComponent>, $Function_<$TooltipComponent, $ClientTooltipComponent>>);
    }
    export class $ScreenEvent$Closing extends $ScreenEvent {
        constructor(arg0: $Screen);
    }
    export class $RenderHighlightEvent extends $Event {
        getTarget(): $HitResult;
        getMultiBufferSource(): $MultiBufferSource;
        getDeltaTracker(): $DeltaTracker;
        getCamera(): $Camera;
        getLevelRenderer(): $LevelRenderer;
        getPoseStack(): $PoseStack;
        get target(): $HitResult;
        get multiBufferSource(): $MultiBufferSource;
        get deltaTracker(): $DeltaTracker;
        get camera(): $Camera;
        get levelRenderer(): $LevelRenderer;
        get poseStack(): $PoseStack;
    }
    export class $ScreenshotEvent extends $Event implements $ICancellableEvent {
        getImage(): $NativeImage;
        getResultMessage(): $Component;
        getScreenshotFile(): $File;
        setScreenshotFile(arg0: $File_): void;
        setResultMessage(arg0: $Component_): void;
        getCancelMessage(): $Component;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        static DEFAULT_CANCEL_REASON: $Component;
        constructor(arg0: $NativeImage, arg1: $File_);
        get image(): $NativeImage;
        get cancelMessage(): $Component;
    }
    export class $ClientPauseChangeEvent$Post extends $ClientPauseChangeEvent {
        constructor(arg0: boolean);
    }
    /**
     * @deprecated
     */
    export class $ScreenEvent$BackgroundRendered extends $ScreenEvent {
        getGuiGraphics(): $GuiGraphics;
        constructor(arg0: $Screen, arg1: $GuiGraphics);
        get guiGraphics(): $GuiGraphics;
    }
    export class $EntityRenderersEvent$AddLayers extends $EntityRenderersEvent {
        getContext(): $EntityRendererProvider$Context;
        getSkins(): $Set<$PlayerSkin$Model>;
        getEntityTypes(): $Set<$EntityType<never>>;
        getSkin<R extends $EntityRenderer<$Player>>(arg0: $PlayerSkin$Model_): R;
        getRenderer<T extends $Entity, R extends $EntityRenderer<T>>(arg0: $EntityType_<T>): R;
        getEntityModels(): $EntityModelSet;
        constructor(arg0: $Map_<$EntityType_<never>, $EntityRenderer<never>>, arg1: $Map_<$PlayerSkin$Model_, $EntityRenderer<$Player>>, arg2: $EntityRendererProvider$Context);
        get context(): $EntityRendererProvider$Context;
        get skins(): $Set<$PlayerSkin$Model>;
        get entityTypes(): $Set<$EntityType<never>>;
        get entityModels(): $EntityModelSet;
    }
    export class $AddSectionGeometryEvent extends $Event {
        getLevel(): $Level;
        addRenderer(arg0: $AddSectionGeometryEvent$AdditionalSectionRenderer_): void;
        getSectionOrigin(): $BlockPos;
        getAdditionalRenderers(): $List<$AddSectionGeometryEvent$AdditionalSectionRenderer>;
        constructor(arg0: $BlockPos_, arg1: $Level_);
        get level(): $Level;
        get sectionOrigin(): $BlockPos;
        get additionalRenderers(): $List<$AddSectionGeometryEvent$AdditionalSectionRenderer>;
    }
    export class $CustomizeGuiOverlayEvent$DebugText extends $CustomizeGuiOverlayEvent {
        getLeft(): $List<string>;
        getRight(): $List<string>;
        constructor(arg0: $Window, arg1: $GuiGraphics, arg2: $DeltaTracker, arg3: $List_<string>, arg4: $List_<string>);
        get left(): $List<string>;
        get right(): $List<string>;
    }
    export class $RegisterItemDecorationsEvent extends $Event implements $IModBusEvent {
        register(arg0: $ItemLike_, arg1: $IItemDecorator_): void;
        constructor(arg0: $Map_<$Item_, $List_<$IItemDecorator_>>);
    }
    export class $ContainerScreenEvent extends $Event {
        getContainerScreen(): $AbstractContainerScreen<never>;
        get containerScreen(): $AbstractContainerScreen<never>;
    }
    export class $RegisterGuiLayersEvent extends $Event implements $IModBusEvent {
        registerAbove(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $LayeredDraw$Layer_): void;
        wrapLayer(arg0: $ResourceLocation_, arg1: $UnaryOperator_<$LayeredDraw$Layer>): void;
        registerBelowAll(arg0: $ResourceLocation_, arg1: $LayeredDraw$Layer_): void;
        registerBelow(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $LayeredDraw$Layer_): void;
        registerAboveAll(arg0: $ResourceLocation_, arg1: $LayeredDraw$Layer_): void;
        replaceLayer(arg0: $ResourceLocation_, arg1: $LayeredDraw$Layer_): void;
        constructor(arg0: $List_<$GuiLayerManager$NamedLayer_>);
    }
    export class $ScreenEvent$Init extends $ScreenEvent {
        getListenersList(): $List<$GuiEventListener>;
        removeListener(arg0: $GuiEventListener): void;
        addListener(arg0: $GuiEventListener): void;
        get listenersList(): $List<$GuiEventListener>;
    }
    export class $ScreenEvent$MouseButtonReleased extends $ScreenEvent$MouseInput {
        getButton(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
        get button(): number;
    }
    export class $RenderBlockScreenEffectEvent extends $Event implements $ICancellableEvent {
        getPlayer(): $Player;
        getPoseStack(): $PoseStack;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        getOverlayType(): $RenderBlockScreenEffectEvent$OverlayType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $PoseStack, arg2: $RenderBlockScreenEffectEvent$OverlayType_, arg3: $BlockState_, arg4: $BlockPos_);
        get player(): $Player;
        get poseStack(): $PoseStack;
        get blockPos(): $BlockPos;
        get blockState(): $BlockState;
        get overlayType(): $RenderBlockScreenEffectEvent$OverlayType;
    }
    export class $RegisterNamedRenderTypesEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $RenderType, arg2: $RenderType): void;
        register(arg0: $ResourceLocation_, arg1: $RenderType, arg2: $RenderType, arg3: $RenderType): void;
        constructor(arg0: $Map_<$ResourceLocation_, $RenderTypeGroup_>);
    }
    export class $ScreenEvent$KeyReleased$Pre extends $ScreenEvent$KeyReleased implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $RegisterRecipeBookCategoriesEvent extends $Event implements $IModBusEvent {
        registerAggregateCategory(arg0: $RecipeBookCategories_, arg1: $List_<$RecipeBookCategories_>): void;
        registerBookCategories(arg0: $RecipeBookType_, arg1: $List_<$RecipeBookCategories_>): void;
        registerRecipeCategoryFinder(arg0: $RecipeType_<never>, arg1: $Function_<$RecipeHolder<never>, $RecipeBookCategories>): void;
        constructor(arg0: $Map_<$RecipeBookCategories_, $ImmutableList<$RecipeBookCategories_>>, arg1: $Map_<$RecipeBookType_, $ImmutableList<$RecipeBookCategories_>>, arg2: $Map_<$RecipeType_<never>, $Function_<$RecipeHolder<never>, $RecipeBookCategories>>);
    }
    export class $ContainerScreenEvent$Render extends $ContainerScreenEvent {
        getMouseX(): number;
        getMouseY(): number;
        getGuiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
        get guiGraphics(): $GuiGraphics;
    }
    export class $ScreenEvent$MouseScrolled$Post extends $ScreenEvent$MouseScrolled {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ViewportEvent$ComputeFov extends $ViewportEvent {
        getFOV(): number;
        usedConfiguredFov(): boolean;
        setFOV(arg0: number): void;
        constructor(arg0: $GameRenderer, arg1: $Camera, arg2: number, arg3: number, arg4: boolean);
    }
    export class $ModelEvent extends $Event {
    }
    export class $ScreenEvent$KeyReleased extends $ScreenEvent$KeyInput {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ContainerScreenEvent$Render$Foreground extends $ContainerScreenEvent$Render {
        constructor(arg0: $AbstractContainerScreen<never>, arg1: $GuiGraphics, arg2: number, arg3: number);
    }
    export class $InputEvent$InteractionKeyMappingTriggered extends $InputEvent implements $ICancellableEvent {
        isUseItem(): boolean;
        setSwingHand(arg0: boolean): void;
        isAttack(): boolean;
        isPickBlock(): boolean;
        getKeyMapping(): $KeyMapping;
        getHand(): $InteractionHand;
        shouldSwingHand(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: number, arg1: $KeyMapping, arg2: $InteractionHand_);
        get useItem(): boolean;
        set swingHand(value: boolean);
        get attack(): boolean;
        get pickBlock(): boolean;
        get keyMapping(): $KeyMapping;
        get hand(): $InteractionHand;
    }
    export class $InputEvent$Key extends $InputEvent {
        getModifiers(): number;
        getKey(): number;
        getAction(): number;
        getScanCode(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get modifiers(): number;
        get key(): number;
        get action(): number;
        get scanCode(): number;
    }
    export class $InputEvent extends $Event {
    }
    export class $ToastAddEvent extends $Event implements $ICancellableEvent {
        getToast(): $Toast;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Toast_);
        get toast(): $Toast;
    }
    export class $ScreenEvent$KeyReleased$Post extends $ScreenEvent$KeyReleased implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $ClientPauseChangeEvent$Pre extends $ClientPauseChangeEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: boolean);
    }
    export class $ScreenEvent$KeyPressed$Pre extends $ScreenEvent$KeyPressed implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $RenderGuiEvent$Post extends $RenderGuiEvent {
        constructor(arg0: $GuiGraphics, arg1: $DeltaTracker);
    }
    export class $RenderPlayerEvent$Post extends $RenderPlayerEvent {
        constructor(arg0: $Player, arg1: $PlayerRenderer, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number);
    }
    export class $InputEvent$MouseButton$Post extends $InputEvent$MouseButton {
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $SelectMusicEvent extends $Event implements $ICancellableEvent {
        getMusic(): $Music;
        getOriginalMusic(): $Music;
        getPlayingMusic(): $SoundInstance;
        setMusic(arg0: $Music): void;
        overrideMusic(arg0: $Music): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Music, arg1: $SoundInstance);
        get originalMusic(): $Music;
        get playingMusic(): $SoundInstance;
    }
    export class $ClientChatReceivedEvent$System extends $ClientChatReceivedEvent {
        isOverlay(): boolean;
        constructor(arg0: $Component_, arg1: boolean);
        get overlay(): boolean;
    }
    export class $RenderItemInFrameEvent extends $Event implements $ICancellableEvent {
        getMultiBufferSource(): $MultiBufferSource;
        getPackedLight(): number;
        getRenderer(): $ItemFrameRenderer<never>;
        getPoseStack(): $PoseStack;
        getItemStack(): $ItemStack;
        getItemFrameEntity(): $ItemFrame;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemFrame, arg1: $ItemFrameRenderer<never>, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number);
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get renderer(): $ItemFrameRenderer<never>;
        get poseStack(): $PoseStack;
        get itemStack(): $ItemStack;
        get itemFrameEntity(): $ItemFrame;
    }
    export class $InputEvent$MouseButton extends $InputEvent {
        getModifiers(): number;
        getAction(): number;
        getButton(): number;
        get modifiers(): number;
        get action(): number;
        get button(): number;
    }
    export class $RenderPlayerEvent$Pre extends $RenderPlayerEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $PlayerRenderer, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number);
    }
    export class $ScreenEvent$MouseButtonPressed$Post$Result extends $Enum<$ScreenEvent$MouseButtonPressed$Post$Result> {
        static values(): $ScreenEvent$MouseButtonPressed$Post$Result[];
        static valueOf(arg0: string): $ScreenEvent$MouseButtonPressed$Post$Result;
        static FORCE_HANDLED: $ScreenEvent$MouseButtonPressed$Post$Result;
        static FORCE_UNHANDLED: $ScreenEvent$MouseButtonPressed$Post$Result;
        static DEFAULT: $ScreenEvent$MouseButtonPressed$Post$Result;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvent$MouseButtonPressed$Post$Result}.
     */
    export type $ScreenEvent$MouseButtonPressed$Post$Result_ = "force_handled" | "default" | "force_unhandled";
    export class $ScreenEvent$MouseScrolled$Pre extends $ScreenEvent$MouseScrolled implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $ViewportEvent$ComputeCameraAngles extends $ViewportEvent {
        getRoll(): number;
        setPitch(arg0: number): void;
        setYaw(arg0: number): void;
        setRoll(arg0: number): void;
        getYaw(): number;
        getPitch(): number;
        constructor(arg0: $Camera, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $AddSectionGeometryEvent$SectionRenderingContext {
        getRegion(): $BlockAndTintGetter;
        getOrCreateChunkBuffer(arg0: $RenderType): $VertexConsumer;
        getPoseStack(): $PoseStack;
        getQuadLighter(arg0: boolean): $QuadLighter;
        constructor(arg0: $Function_<$RenderType, $VertexConsumer>, arg1: $BlockAndTintGetter, arg2: $PoseStack);
        get region(): $BlockAndTintGetter;
        get poseStack(): $PoseStack;
    }
    export class $ClientPlayerNetworkEvent$LoggingIn extends $ClientPlayerNetworkEvent {
        constructor(arg0: $MultiPlayerGameMode, arg1: $LocalPlayer, arg2: $Connection);
    }
    export class $ScreenEvent$MouseScrolled extends $ScreenEvent$MouseInput {
        getScrollDeltaX(): number;
        getScrollDeltaY(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: number);
        get scrollDeltaX(): number;
        get scrollDeltaY(): number;
    }
    export class $RegisterColorHandlersEvent$Block extends $RegisterColorHandlersEvent {
        register(arg0: $BlockColor_, ...arg1: $Block_[]): void;
        getBlockColors(): $BlockColors;
        constructor(arg0: $BlockColors);
        get blockColors(): $BlockColors;
    }
    export class $CustomizeGuiOverlayEvent extends $Event {
        getPartialTick(): $DeltaTracker;
        getWindow(): $Window;
        getGuiGraphics(): $GuiGraphics;
        get partialTick(): $DeltaTracker;
        get window(): $Window;
        get guiGraphics(): $GuiGraphics;
    }
    export class $RenderBlockScreenEffectEvent$OverlayType extends $Enum<$RenderBlockScreenEffectEvent$OverlayType> {
        static values(): $RenderBlockScreenEffectEvent$OverlayType[];
        static valueOf(arg0: string): $RenderBlockScreenEffectEvent$OverlayType;
        static FIRE: $RenderBlockScreenEffectEvent$OverlayType;
        static BLOCK: $RenderBlockScreenEffectEvent$OverlayType;
        static WATER: $RenderBlockScreenEffectEvent$OverlayType;
    }
    /**
     * Values that may be interpreted as {@link $RenderBlockScreenEffectEvent$OverlayType}.
     */
    export type $RenderBlockScreenEffectEvent$OverlayType_ = "fire" | "block" | "water";
    export class $RegisterRenderBuffersEvent extends $Event implements $IModBusEvent {
        registerRenderBuffer(arg0: $RenderType): void;
        registerRenderBuffer(arg0: $RenderType, arg1: $ByteBufferBuilder): void;
        constructor(arg0: $SequencedMap<$RenderType, $ByteBufferBuilder>);
    }
    export class $RenderGuiLayerEvent$Pre extends $RenderGuiLayerEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $GuiGraphics, arg1: $DeltaTracker, arg2: $ResourceLocation_, arg3: $LayeredDraw$Layer_);
    }
    export class $ContainerScreenEvent$Render$Background extends $ContainerScreenEvent$Render {
        constructor(arg0: $AbstractContainerScreen<never>, arg1: $GuiGraphics, arg2: number, arg3: number);
    }
    export class $ModelEvent$ModifyBakingResult extends $ModelEvent implements $IModBusEvent {
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getModelBakery(): $ModelBakery;
        constructor(arg0: $Map_<$ModelResourceLocation_, $BakedModel>, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelBakery);
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get textureGetter(): $Function<$Material, $TextureAtlasSprite>;
        get modelBakery(): $ModelBakery;
    }
    export class $RenderLivingEvent<T extends $LivingEntity, M extends $EntityModel<T>> extends $Event {
        getPartialTick(): number;
        getMultiBufferSource(): $MultiBufferSource;
        getPackedLight(): number;
        getEntity(): $LivingEntity;
        getRenderer(): $LivingEntityRenderer<T, M>;
        getPoseStack(): $PoseStack;
        get partialTick(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get entity(): $LivingEntity;
        get renderer(): $LivingEntityRenderer<T, M>;
        get poseStack(): $PoseStack;
    }
    export class $ClientChatEvent extends $Event implements $ICancellableEvent {
        getMessage(): string;
        setMessage(arg0: string): void;
        getOriginalMessage(): string;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: string);
        get originalMessage(): string;
    }
    export class $RenderGuiLayerEvent extends $Event {
        getName(): $ResourceLocation;
        getLayer(): $LayeredDraw$Layer;
        getPartialTick(): $DeltaTracker;
        getGuiGraphics(): $GuiGraphics;
        get name(): $ResourceLocation;
        get layer(): $LayeredDraw$Layer;
        get partialTick(): $DeltaTracker;
        get guiGraphics(): $GuiGraphics;
    }
    export class $ScreenEvent$KeyPressed extends $ScreenEvent$KeyInput {
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
    }
    export class $RegisterColorHandlersEvent$Item extends $RegisterColorHandlersEvent {
        register(arg0: $ItemColor_, ...arg1: $ItemLike_[]): void;
        getBlockColors(): $BlockColors;
        getItemColors(): $ItemColors;
        constructor(arg0: $ItemColors, arg1: $BlockColors);
        get blockColors(): $BlockColors;
        get itemColors(): $ItemColors;
    }
    export class $InputEvent$MouseScrollingEvent extends $InputEvent implements $ICancellableEvent {
        isLeftDown(): boolean;
        isRightDown(): boolean;
        isMiddleDown(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getScrollDeltaX(): number;
        getScrollDeltaY(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: number);
        get leftDown(): boolean;
        get rightDown(): boolean;
        get middleDown(): boolean;
        get mouseX(): number;
        get mouseY(): number;
        get scrollDeltaX(): number;
        get scrollDeltaY(): number;
    }
    export class $ClientTickEvent extends $Event {
        constructor();
    }
    export class $ScreenEvent$Init$Pre extends $ScreenEvent$Init implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Screen, arg1: $List_<$GuiEventListener>, arg2: $Consumer_<$GuiEventListener>, arg3: $Consumer_<$GuiEventListener>);
    }
    export class $ScreenEvent$Render$Post extends $ScreenEvent$Render {
        constructor(arg0: $Screen, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number);
    }
    export class $ScreenEvent$KeyInput extends $ScreenEvent {
    }
    export class $ScreenEvent$MouseButtonReleased$Post extends $ScreenEvent$MouseButtonReleased {
        getResult(): $ScreenEvent$MouseButtonReleased$Post$Result;
        setResult(arg0: $ScreenEvent$MouseButtonReleased$Post$Result_): void;
        getReleaseResult(): boolean;
        wasReleaseHandled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: boolean);
        get releaseResult(): boolean;
    }
    export class $ScreenEvent$MouseButtonPressed$Post extends $ScreenEvent$MouseButtonPressed {
        getResult(): $ScreenEvent$MouseButtonPressed$Post$Result;
        setResult(arg0: $ScreenEvent$MouseButtonPressed$Post$Result_): void;
        getClickResult(): boolean;
        wasClickHandled(): boolean;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number, arg4: boolean);
        get clickResult(): boolean;
    }
    export class $RenderFrameEvent$Post extends $RenderFrameEvent {
        constructor(arg0: $DeltaTracker);
    }
    export class $GatherSkippedAttributeTooltipsEvent extends $Event {
        getStack(): $ItemStack;
        getContext(): $AttributeTooltipContext;
        isSkipped(arg0: $EquipmentSlotGroup_): boolean;
        isSkipped(arg0: $ResourceLocation_): boolean;
        skipId(arg0: $ResourceLocation_): void;
        skipGroup(arg0: $EquipmentSlotGroup_): void;
        setSkipAll(arg0: boolean): void;
        isSkippingAll(): boolean;
        constructor(arg0: $ItemStack_, arg1: $AttributeTooltipContext);
        get stack(): $ItemStack;
        get context(): $AttributeTooltipContext;
        set skipAll(value: boolean);
        get skippingAll(): boolean;
    }
    export class $ScreenEvent$Render extends $ScreenEvent {
        getPartialTick(): number;
        getMouseX(): number;
        getMouseY(): number;
        getGuiGraphics(): $GuiGraphics;
        get partialTick(): number;
        get mouseX(): number;
        get mouseY(): number;
        get guiGraphics(): $GuiGraphics;
    }
    export class $ScreenEvent$MouseButtonPressed extends $ScreenEvent$MouseInput {
        getButton(): number;
        constructor(arg0: $Screen, arg1: number, arg2: number, arg3: number);
        get button(): number;
    }
    export class $ScreenEvent$MouseInput extends $ScreenEvent {
    }
    export class $TextureAtlasStitchedEvent extends $Event implements $IModBusEvent {
        getAtlas(): $TextureAtlas;
        constructor(arg0: $TextureAtlas);
        get atlas(): $TextureAtlas;
    }
    export class $RenderLevelStageEvent$Stage {
        static fromRenderType(arg0: $RenderType): $RenderLevelStageEvent$Stage;
        static AFTER_WEATHER: $RenderLevelStageEvent$Stage;
        static AFTER_SKY: $RenderLevelStageEvent$Stage;
        static AFTER_CUTOUT_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_TRANSLUCENT_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_SOLID_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_TRIPWIRE_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_LEVEL: $RenderLevelStageEvent$Stage;
        static AFTER_BLOCK_ENTITIES: $RenderLevelStageEvent$Stage;
        static AFTER_ENTITIES: $RenderLevelStageEvent$Stage;
        static AFTER_PARTICLES: $RenderLevelStageEvent$Stage;
        static AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS: $RenderLevelStageEvent$Stage;
    }
    export class $ScreenEvent$MouseButtonReleased$Post$Result extends $Enum<$ScreenEvent$MouseButtonReleased$Post$Result> {
        static values(): $ScreenEvent$MouseButtonReleased$Post$Result[];
        static valueOf(arg0: string): $ScreenEvent$MouseButtonReleased$Post$Result;
        static FORCE_HANDLED: $ScreenEvent$MouseButtonReleased$Post$Result;
        static FORCE_UNHANDLED: $ScreenEvent$MouseButtonReleased$Post$Result;
        static DEFAULT: $ScreenEvent$MouseButtonReleased$Post$Result;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvent$MouseButtonReleased$Post$Result}.
     */
    export type $ScreenEvent$MouseButtonReleased$Post$Result_ = "force_handled" | "default" | "force_unhandled";
    export class $ScreenEvent$CharacterTyped$Post extends $ScreenEvent$CharacterTyped {
        constructor(arg0: $Screen, arg1: string, arg2: number);
    }
    export class $RenderFrameEvent extends $Event {
        getPartialTick(): $DeltaTracker;
        get partialTick(): $DeltaTracker;
    }
    export class $ClientPlayerChangeGameTypeEvent extends $Event {
        getInfo(): $PlayerInfo;
        getCurrentGameType(): $GameType;
        getNewGameType(): $GameType;
        constructor(arg0: $PlayerInfo, arg1: $GameType_, arg2: $GameType_);
        get info(): $PlayerInfo;
        get currentGameType(): $GameType;
        get newGameType(): $GameType;
    }
    export class $RenderLevelStageEvent extends $Event {
        getPartialTick(): $DeltaTracker;
        getRenderTick(): number;
        getCamera(): $Camera;
        getLevelRenderer(): $LevelRenderer;
        getProjectionMatrix(): $Matrix4f;
        getFrustum(): $Frustum;
        getPoseStack(): $PoseStack;
        getStage(): $RenderLevelStageEvent$Stage;
        getModelViewMatrix(): $Matrix4f;
        constructor(arg0: $RenderLevelStageEvent$Stage, arg1: $LevelRenderer, arg2: $PoseStack, arg3: $Matrix4f, arg4: $Matrix4f, arg5: number, arg6: $DeltaTracker, arg7: $Camera, arg8: $Frustum);
        get partialTick(): $DeltaTracker;
        get renderTick(): number;
        get camera(): $Camera;
        get levelRenderer(): $LevelRenderer;
        get projectionMatrix(): $Matrix4f;
        get frustum(): $Frustum;
        get poseStack(): $PoseStack;
        get stage(): $RenderLevelStageEvent$Stage;
        get modelViewMatrix(): $Matrix4f;
    }
    export class $ClientChatReceivedEvent$Player extends $ClientChatReceivedEvent {
        getPlayerChatMessage(): $PlayerChatMessage;
        constructor(arg0: $ChatType$Bound_, arg1: $Component_, arg2: $PlayerChatMessage_, arg3: $UUID_);
        get playerChatMessage(): $PlayerChatMessage;
    }
    export class $RenderLivingEvent$Pre<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLivingEvent<T, M> implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $LivingEntityRenderer<T, M>, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number);
    }
    export class $RegisterDimensionTransitionScreenEvent extends $Event implements $IModBusEvent {
        registerIncomingEffect(arg0: $ResourceKey_<$Level>, arg1: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_): boolean;
        registerOutgoingEffect(arg0: $ResourceKey_<$Level>, arg1: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_): boolean;
        registerConditionalEffect(arg0: $ResourceKey_<$Level>, arg1: $ResourceKey_<$Level>, arg2: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_): boolean;
        constructor(arg0: $Map_<$Pair<$ResourceKey_<$Level>, $ResourceKey_<$Level>>, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_>, arg1: $Map_<$ResourceKey_<$Level>, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_>, arg2: $Map_<$ResourceKey_<$Level>, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_>);
    }
}
