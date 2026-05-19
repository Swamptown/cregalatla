import { $Codec } from "@package/com/mojang/serialization";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $StoredItemStack } from "@package/io/github/mortuusars/exposure/world/item/component";
import { $List, $List_, $Map } from "@package/java/util";
import { $Predicate, $BiConsumer_, $Supplier_, $Function_, $Consumer_, $Predicate_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Filter } from "@package/io/github/mortuusars/exposure/data";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $CaptureParameters_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $IItemExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $SoundEffect, $SoundEffect_ } from "@package/io/github/mortuusars/exposure/world/sound";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $PointOfView, $PointOfView_, $TranslatableError_ } from "@package/io/github/mortuusars/exposure/util";
import { $Item_, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $CameraId } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FilmProperties } from "@package/io/github/mortuusars/exposure/world/camera/film/properties";
import { $FilmRollItem } from "@package/io/github/mortuusars/exposure/world/item";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $CameraStandEntity, $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CameraInstance$ProjectionState_ } from "@package/io/github/mortuusars/exposure/server";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ShutterSpeed, $FocalRange } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/item/camera" {
    export class $Timer {
        setStartTick(stack: $ItemStack_, tick: number): void;
        setEndTick(stack: $ItemStack_, tick: number): void;
        getLastReleaseTick(stack: $ItemStack_): number;
        setLastReleaseTick(stack: $ItemStack_, tick: number): void;
        getTicksSinceLastRelease(holder: $CameraHolder, stack: $ItemStack_): number;
        getEndTick(stack: $ItemStack_): number;
        getStartTick(stack: $ItemStack_): number;
        getRemainingTicks(holder: $CameraHolder, stack: $ItemStack_): number;
        isTicking(holder: $CameraHolder, stack: $ItemStack_): boolean;
        tick(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): boolean;
        set(holder: $CameraHolder, stack: $ItemStack_, ticks: number): void;
        stop(stack: $ItemStack_): void;
        constructor();
    }
    export class $Attachment<T extends $Item> extends $Record {
        insertedSound(): ($SoundEffect) | undefined;
        removedSound(): ($SoundEffect) | undefined;
        playRemoveSoundSided(entity: $Entity): void;
        playInsertSoundSided(entity: $Entity): void;
        ifPresent(stack: $ItemStack_, ifPresent: $Consumer_<$ItemStack>): $Attachment<T>;
        ifPresent(stack: $ItemStack_, ifPresent: $BiConsumer_<T, $ItemStack>): $Attachment<T>;
        get(stack: $ItemStack_): $StoredItemStack;
        isEmpty(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_): boolean;
        map<R>(stack: $ItemStack_, mappingFunc: $Function_<$ItemStack, R>): (R) | undefined;
        map<R>(stack: $ItemStack_, mappingFunc: $BiFunction_<T, $ItemStack, R>): (R) | undefined;
        component(): $DataComponentType<$StoredItemStack>;
        id(): $ResourceLocation;
        set(stack: $ItemStack_, attachment: $ItemStack_): $Attachment<T>;
        isPresent(stack: $ItemStack_): boolean;
        orElse(stack: $ItemStack_, orElse: $Runnable_): $Attachment<T>;
        ifPresentOrElse(stack: $ItemStack_, ifPresent: $BiConsumer_<T, $ItemStack>, orElse: $Runnable_): $Attachment<T>;
        mapOrElse<R>(stack: $ItemStack_, ifPresentMappingFunc: $Function_<$ItemStack, R>, orElseSupplier: $Supplier_<R>): R;
        mapOrElse<R>(stack: $ItemStack_, ifPresentMappingFunc: $BiFunction_<T, $ItemStack, R>, orElseSupplier: $Supplier_<R>): R;
        maxCount(): $Supplier<number>;
        itemType(): $Class<T>;
        itemPredicate(): $Predicate<$ItemStack>;
        static FILTER: $Attachment<$Item>;
        static FILM: $Attachment<$FilmRollItem>;
        static FLASH: $Attachment<$Item>;
        static LENS: $Attachment<$Item>;
        constructor(id: $ResourceLocation_, component: $DataComponentType_<$StoredItemStack>, itemPredicate: $Predicate_<$ItemStack>, itemType: $Class<T>, maxCount: $Supplier_<number>);
        constructor(id: $ResourceLocation_, component: $DataComponentType_<$StoredItemStack>, itemPredicate: $Predicate_<$ItemStack>, itemType: $Class<T>, maxCount: $Supplier_<number>, insertedSound: $SoundEffect_, removedSound: $SoundEffect_);
        constructor(id: $ResourceLocation_, component: $DataComponentType_<$StoredItemStack>, itemPredicate: $Predicate_<$ItemStack>, itemType: $Class<T>, maxCount: $Supplier_<number>, insertedSound: ($SoundEffect_) | undefined, removedSound: ($SoundEffect_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Attachment}.
     */
    export type $Attachment_<T> = { itemPredicate?: $Predicate_<$ItemStack>, removedSound?: ($SoundEffect_) | undefined, insertedSound?: ($SoundEffect_) | undefined, id?: $ResourceLocation_, maxCount?: $Supplier_<number>, component?: $DataComponentType_<$StoredItemStack>, itemType?: $Class<$Item_>,  } | [itemPredicate?: $Predicate_<$ItemStack>, removedSound?: ($SoundEffect_) | undefined, insertedSound?: ($SoundEffect_) | undefined, id?: $ResourceLocation_, maxCount?: $Supplier_<number>, component?: $DataComponentType_<$StoredItemStack>, itemType?: $Class<$Item_>, ];
    export class $Shutter {
        playOpenSound(holder: $CameraHolder): void;
        playCloseSound(holder: $CameraHolder): void;
        onClosed(onClosed: $TriConsumer_<$CameraHolder, $ServerLevel, $ItemStack>): void;
        onOpen(onOpen: $TriConsumer_<$CameraHolder, $ServerLevel, $ItemStack>): void;
        tick(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): boolean;
        isOpen(stack: $ItemStack_): boolean;
        getState(stack: $ItemStack_): $ShutterState;
        setState(stack: $ItemStack_, shutterState: $ShutterState_): void;
        close(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): void;
        open(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_, shutterSpeed: $ShutterSpeed): void;
        shouldClose(stack: $ItemStack_, gameTime: number): boolean;
        constructor();
    }
    export class $ShutterState extends $Record {
        openedAtTick(): number;
        getCloseTick(): number;
        shutterSpeed(): $ShutterSpeed;
        isOpen(): boolean;
        static open(openedAt: number, shutterSpeed: $ShutterSpeed): $ShutterState;
        static closed(): $ShutterState;
        static CODEC: $Codec<$ShutterState>;
        static CLOSED: $ShutterState;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShutterState>;
        constructor(isOpen: boolean, openedAtTick: number, shutterSpeed: $ShutterSpeed);
        get closeTick(): number;
    }
    /**
     * Values that may be interpreted as {@link $ShutterState}.
     */
    export type $ShutterState_ = { shutterSpeed?: $ShutterSpeed, isOpen?: boolean, openedAtTick?: number,  } | [shutterSpeed?: $ShutterSpeed, isOpen?: boolean, openedAtTick?: number, ];
    export class $CameraItem extends $Item implements $IItemExtension {
        getShutter(): $Shutter;
        hasAttachmentsMenu(): boolean;
        handleStandSneakInteraction(stand: $CameraStandEntity, player: $Player, hand: $InteractionHand_, cameraStack: $ItemStack_): $InteractionResult;
        getOrCreateId(stack: $ItemStack_): $CameraId;
        setDisassembled(stack: $ItemStack_, disassembled: boolean): void;
        activateOnStand(player: $Player, stack: $ItemStack_, cameraStand: $CameraStandEntity): $InteractionResultHolder<$ItemStack>;
        getFlash(): $Flash;
        getAvailableShutterSpeeds(): $List<$ShutterSpeed>;
        getFilmAttachment(): $Attachment<never>;
        getFilmProperties(stack: $ItemStack_): $FilmProperties;
        getViewfinderOpenSound(): $SoundEvent;
        getViewfinderCloseSound(): $SoundEvent;
        getReleaseButtonSound(): $SoundEvent;
        getCaptureType(stack: $ItemStack_): $ResourceLocation;
        getSelfieCameraDistance(stack: $ItemStack_): number;
        getYPositionOffset(stack: $ItemStack_): number;
        getScaleOnStand(): number;
        getCropFactor(): number;
        getFocalRange(registryAccess: $RegistryAccess, stack: $ItemStack_): $FocalRange;
        getViewfinderFov(level: $Level_, stack: $ItemStack_): number;
        getPointOfView(holder: $CameraHolder, stack: $ItemStack_): $PointOfView;
        isInSelfieMode(stack: $ItemStack_): boolean;
        getFilterShaderLocation(registryAccess: $RegistryAccess, stack: $ItemStack_): ($ResourceLocation) | undefined;
        isDisassembled(stack: $ItemStack_): boolean;
        setLastActionTime(stack: $ItemStack_, lastActionTime: number): void;
        actionPerformed(stack: $ItemStack_, holder: $CameraHolder): void;
        activateInHand(player: $Player, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        calculateCooldownAfterShot(stack: $ItemStack_, captureParameters: $CaptureParameters_): number;
        openCameraAttachments(player: $Player, slotIndex: number, openedFromGUI: boolean): $InteractionResultHolder<$ItemStack>;
        openCameraAttachments(player: $Player, stack: $ItemStack_, openedFromGUI: boolean): $InteractionResultHolder<$ItemStack>;
        canTakePhoto(holder: $CameraHolder, stack: $ItemStack_): boolean;
        addNewFrame(level: $ServerLevel, holder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_): void;
        getPositionsInFrame(cameraHolder: $CameraHolder, pov: $PointOfView_, fov: number): $List<$BlockPos>;
        createFrame(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>): $Frame;
        addFrameToFilm(stack: $ItemStack_, frame: $Frame_): void;
        onFrameAdded(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>): void;
        handleProjectionResult(level: $ServerLevel, holder: $CameraHolder, stack: $ItemStack_, projectionState: $CameraInstance$ProjectionState_, error: ($TranslatableError_) | undefined): void;
        static getGlassTintColor(stack: $ItemStack_, tintIndex: number): number;
        getFilter(registryAccess: $RegistryAccess, stack: $ItemStack_): ($Filter) | undefined;
        tick(holder: $CameraHolder, stack: $ItemStack_): boolean;
        release(holder: $CameraHolder, stack: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        isActive(stack: $ItemStack_): boolean;
        getFov(level: $Level_, stack: $ItemStack_): number;
        activate(entity: $Entity, stack: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        deactivate(entity: $Entity, stack: $ItemStack_): $InteractionResultHolder<$ItemStack>;
        setActive(stack: $ItemStack_, active: boolean): void;
        getTimer(): $Timer;
        getCooldownPercent(holder: $CameraHolder, stack: $ItemStack_): number;
        isOnCooldown(holder: $CameraHolder, stack: $ItemStack_): boolean;
        getLastActionTime(stack: $ItemStack_): number;
        getAttachments(): $List<$Attachment<never>>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static PROJECT_COOLDOWN: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BASE_COOLDOWN: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
        get shutter(): $Shutter;
        get flash(): $Flash;
        get availableShutterSpeeds(): $List<$ShutterSpeed>;
        get filmAttachment(): $Attachment<never>;
        get viewfinderOpenSound(): $SoundEvent;
        get viewfinderCloseSound(): $SoundEvent;
        get releaseButtonSound(): $SoundEvent;
        get scaleOnStand(): number;
        get cropFactor(): number;
        get timer(): $Timer;
        get attachments(): $List<$Attachment<never>>;
    }
    export class $Flash {
        shouldFire(camera: $ItemStack_, lightLevel: number): boolean;
        fire(holder: $CameraHolder, level: $ServerLevel, stack: $ItemStack_): boolean;
        getCooldown(): number;
        isAvailable(camera: $ItemStack_): boolean;
        getSound(): $SoundEvent;
        constructor();
        get cooldown(): number;
        get sound(): $SoundEvent;
    }
}
