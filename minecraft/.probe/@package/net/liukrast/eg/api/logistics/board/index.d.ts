import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $UUID, $List, $Map, $Set } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $FactoryPanelBlockEntity, $FactoryPanelConnection, $FactoryPanelPosition, $FactoryPanelBlock$PanelType_, $FactoryPanelBehaviour, $FactoryPanelBlock$PanelSlot_, $FactoryPanelBlock$PanelSlot, $FactoryPanelBlock$PanelState_, $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $PanelType_, $PanelType } from "@package/net/liukrast/eg/api/registry";
import { $Consumer_, $BiConsumer_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ConnectionExtra, $ConnectionExtra_ } from "@package/net/liukrast/eg/api/util";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";

declare module "@package/net/liukrast/eg/api/logistics/board" {
    export class $PanelConnection<T> {
        static makeContext(arg0: $BlockState_): $Direction;
        getListener(arg0: $Block_): $ConnectionExtra<T>;
        addListener(arg0: $ConnectionExtra_<T>, ...arg1: $Block_[]): void;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $PanelConnection}.
     */
    export type $PanelConnection_<T> = RegistryTypes.ExtraGaugesPanelConnections;
    export interface $PanelConnection<T> extends RegistryMarked<RegistryTypes.ExtraGaugesPanelConnectionsTag, RegistryTypes.ExtraGaugesPanelConnections> {}
    export class $AbstractPanelBehaviour$PanelConnectionBuilder {
        put<T>(arg0: $DeferredHolder<$PanelConnection_<never>, $PanelConnection_<T>>, arg1: $Supplier_<T>): $AbstractPanelBehaviour$PanelConnectionBuilder;
        put<T>(arg0: $PanelConnection_<T>, arg1: $Supplier_<T>): $AbstractPanelBehaviour$PanelConnectionBuilder;
    }
    export class $AbstractPanelBehaviour extends $FactoryPanelBehaviour {
        hasConnection<T>(arg0: $DeferredHolder<$PanelConnection_<never>, $PanelConnection_<T>>): boolean;
        hasConnection(arg0: $PanelConnection_<never>): boolean;
        addConnections(arg0: $AbstractPanelBehaviour$PanelConnectionBuilder): void;
        getConnectionValue<T>(arg0: $DeferredHolder<$PanelConnection_<never>, $PanelConnection_<T>>): (T) | undefined;
        getConnectionValue<T>(arg0: $PanelConnection_<T>): (T) | undefined;
        easyRead(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        withFilteringBehaviour(): boolean;
        easyWrite(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        skipOriginalTick(): boolean;
        shouldRenderBulb(arg0: boolean): boolean;
        ignoreIssue(arg0: string): boolean;
        calculatePath(arg0: $FactoryPanelBehaviour, arg1: number): number;
        calculateExtraPath(arg0: $BlockPos_): number;
        getPanelType(): $PanelType<never>;
        consumeForLinks(arg0: $Consumer_<$FactoryPanelSupportBehaviour>): void;
        consumeForPanels<T>(arg0: $PanelConnection_<T>, arg1: $Consumer_<T>): void;
        consumeForExtra<T>(arg0: $PanelConnection_<T>, arg1: $BiConsumer_<$BlockPos, T>): void;
        notifyRedstoneOutputs(): void;
        getDisplayLinkComponent(arg0: boolean): $MutableComponent;
        getItem(): $Item;
        getConnections(): $Set<$PanelConnection<never>>;
        getModel(arg0: $FactoryPanelBlock$PanelState_, arg1: $FactoryPanelBlock$PanelType_): $PartialModel;
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
        constructor(arg0: $PanelType_<never>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot_);
        constructor(arg0: $ValueBoxTransform, arg1: $PanelType_<never>, arg2: $FactoryPanelBlockEntity, arg3: $FactoryPanelBlock$PanelSlot_);
        get panelType(): $PanelType<never>;
        get item(): $Item;
        get connections(): $Set<$PanelConnection<never>>;
    }
}
