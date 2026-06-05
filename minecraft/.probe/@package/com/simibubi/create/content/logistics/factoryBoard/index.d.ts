import { $Codec } from "@package/com/mojang/serialization";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $EnumMap, $UUID_, $Map, $Set } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $IFPExtra } from "@package/net/liukrast/eg/api/util";
import { $Enum, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $FactoryPanelBehaviourIMixin, $FactoryPanelBehaviourAccessor } from "@package/net/liukrast/eg/mixin";
import { $BlockAndTintGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";
import { $FactoryPanelBlockEntityMixinDuck } from "@package/net/zlt/create_vibrant_vaults/duck";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ModBlocks$VibrantVaultColor } from "@package/net/zlt/create_vibrant_vaults/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/factoryBoard" {
    export class $FactoryPanelBlockEntity extends $SmartBlockEntity implements $FactoryPanelBlockEntityMixinDuck {
        addPanel(arg0: $FactoryPanelBlock$PanelSlot_, arg1: $UUID_): boolean;
        activePanels(): number;
        removePanel(arg0: $FactoryPanelBlock$PanelSlot_): boolean;
        getRestockedPackager(): $PackagerBlockEntity;
        createVibrantVaults$getRestockerColor(): $ModBlocks$VibrantVaultColor;
        getShape(): $VoxelShape;
        redraw: boolean;
        worldPosition: $BlockPos;
        advancements: $AdvancementBehaviour;
        level: $Level;
        panels: $EnumMap<$FactoryPanelBlock$PanelSlot, $FactoryPanelBehaviour>;
        restocker: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        lastShape: $VoxelShape;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get restockedPackager(): $PackagerBlockEntity;
        get shape(): $VoxelShape;
    }
    export class $FactoryPanelBlock$PanelState extends $Enum<$FactoryPanelBlock$PanelState> {
        static values(): $FactoryPanelBlock$PanelState[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelState;
        static PASSIVE: $FactoryPanelBlock$PanelState;
        static ACTIVE: $FactoryPanelBlock$PanelState;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelState}.
     */
    export type $FactoryPanelBlock$PanelState_ = "passive" | "active";
    export class $FactoryPanelBehaviour extends $FilteringBehaviour implements $MenuProvider, $FactoryPanelBehaviourAccessor, $FactoryPanelBehaviourIMixin, $IFPExtra {
        setNetwork(arg0: $UUID_): void;
        displayScreen(arg0: $Player): void;
        disconnectAll(): void;
        getPanelPosition(): $FactoryPanelPosition;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelSupportBehaviour;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelSupportBehaviour;
        extra_gauges$getExtra(): $Map<any, any>;
        extra_gauges$getWidth(): number;
        checkForRedstoneInput(): void;
        getUnloadedLinks(): number;
        panelBE(): $FactoryPanelBlockEntity;
        resetTimer(): void;
        isMissingAddress(): boolean;
        disconnectAllLinks(): void;
        resetTimerSlightly(): void;
        static getTypeForSlot(arg0: $FactoryPanelBlock$PanelSlot_): $BehaviourType<never>;
        getFrogAddress(): string;
        extra_gauges$setWidth(arg0: number): void;
        addConnection(arg0: $FactoryPanelPosition_): void;
        getLevelInStorage(): number;
        getIngredientStatusColor(): number;
        getPromised(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        enable(): void;
        getDisplayName(): $Component;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelBehaviour;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelBehaviour;
        disable(): void;
        moveTo(arg0: $FactoryPanelPosition_, arg1: $ServerPlayer): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        extra_gauges$notifyRedstoneOutputs(): void;
        getLastReportedLevelInStorage(): number;
        getLastReportedUnloadedLinks(): number;
        getLastReportedPromises(): number;
        getTimer(): number;
        static TOP_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        upTo: boolean;
        static BOTTOM_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        restockerPromises: $RequestPromiseQueue;
        slot: $FactoryPanelBlock$PanelSlot;
        activeCraftingArrangement: $List<$ItemStack>;
        network: $UUID;
        recipeAddress: string;
        targeting: $Set<$FactoryPanelPosition>;
        redstonePowered: boolean;
        blockEntity: $SmartBlockEntity;
        static TOP_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        promisedSatisfied: boolean;
        static BOTTOM_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        forceClearPromises: boolean;
        waitingForNetwork: boolean;
        satisfied: boolean;
        targetedByLinks: $Map<$BlockPos, $FactoryPanelConnection>;
        bulb: $LerpedFloat;
        count: number;
        active: boolean;
        targetedBy: $Map<$FactoryPanelPosition, $FactoryPanelConnection>;
        recipeOutput: number;
        customLabel: $MutableComponent;
        promiseClearingInterval: number;
        constructor(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_);
        get panelPosition(): $FactoryPanelPosition;
        get unloadedLinks(): number;
        get missingAddress(): boolean;
        get frogAddress(): string;
        get levelInStorage(): number;
        get ingredientStatusColor(): number;
        get promised(): number;
        get displayName(): $Component;
        get lastReportedLevelInStorage(): number;
        get lastReportedUnloadedLinks(): number;
        get lastReportedPromises(): number;
        get timer(): number;
    }
    export class $FactoryPanelBlock$PanelType extends $Enum<$FactoryPanelBlock$PanelType> {
        static values(): $FactoryPanelBlock$PanelType[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelType;
        static NETWORK: $FactoryPanelBlock$PanelType;
        static PACKAGER: $FactoryPanelBlock$PanelType;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelType}.
     */
    export type $FactoryPanelBlock$PanelType_ = "network" | "packager";
    export class $FactoryPanelBlock$PanelSlot extends $Enum<$FactoryPanelBlock$PanelSlot> implements $StringRepresentable {
        static values(): $FactoryPanelBlock$PanelSlot[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelSlot;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOP_LEFT: $FactoryPanelBlock$PanelSlot;
        yOffset: number;
        static CODEC: $Codec<$FactoryPanelBlock$PanelSlot>;
        xOffset: number;
        static BOTTOM_RIGHT: $FactoryPanelBlock$PanelSlot;
        static TOP_RIGHT: $FactoryPanelBlock$PanelSlot;
        static BOTTOM_LEFT: $FactoryPanelBlock$PanelSlot;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelBlock$PanelSlot>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelSlot}.
     */
    export type $FactoryPanelBlock$PanelSlot_ = "top_left" | "top_right" | "bottom_left" | "bottom_right";
    export class $FactoryPanelConnection {
        calculatePathDiff(arg0: $BlockState_, arg1: $FactoryPanelPosition_): $Vec3;
        getPath(arg0: $Level_, arg1: $BlockState_, arg2: $FactoryPanelPosition_): $List<$Direction>;
        path: $List<$Direction>;
        amount: number;
        static CODEC: $Codec<$FactoryPanelConnection>;
        cachedSource: $WeakReference<$Object>;
        success: boolean;
        from: $FactoryPanelPosition;
        arrowBendMode: number;
        constructor(arg0: $FactoryPanelPosition_, arg1: number);
        constructor(arg0: $FactoryPanelPosition_, arg1: number, arg2: number);
    }
    export class $FactoryPanelPosition extends $Record {
        slot(): $FactoryPanelBlock$PanelSlot;
        pos(): $BlockPos;
        static CODEC: $Codec<$FactoryPanelPosition>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelPosition>;
        constructor(pos: $BlockPos_, slot: $FactoryPanelBlock$PanelSlot_);
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelPosition}.
     */
    export type $FactoryPanelPosition_ = { slot?: $FactoryPanelBlock$PanelSlot_, pos?: $BlockPos_,  } | [slot?: $FactoryPanelBlock$PanelSlot_, pos?: $BlockPos_, ];
    export class $FactoryPanelSupportBehaviour extends $BlockEntityBehaviour {
        shouldBePoweredTristate(): boolean;
        isOutput(): boolean;
        notifyPanels(): void;
        shouldPanelBePowered(): boolean;
        notifyLink(): void;
        getLinkedPanels(): $List<$FactoryPanelPosition>;
        connect(arg0: $FactoryPanelBehaviour): void;
        disconnect(arg0: $FactoryPanelBehaviour): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$FactoryPanelSupportBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $Supplier_<boolean>, arg2: $Supplier_<boolean>, arg3: $Runnable_);
        get output(): boolean;
        get linkedPanels(): $List<$FactoryPanelPosition>;
    }
}
