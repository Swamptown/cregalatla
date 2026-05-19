import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultBlockEntity$Server {
        static setVaultState(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $VaultConfig_, arg5: $VaultSharedData): void;
        static tryInsertKey(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultConfig_, arg4: $VaultServerData, arg5: $VaultSharedData, arg6: $Player, arg7: $ItemStack_): void;
        static cycleDisplayItemFromLootTable(arg0: $ServerLevel, arg1: $VaultState_, arg2: $VaultConfig_, arg3: $VaultSharedData, arg4: $BlockPos_): void;
        static tick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultConfig_, arg4: $VaultServerData, arg5: $VaultSharedData): void;
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        getSharedData(): $VaultSharedData;
        getClientData(): $VaultClientData;
        setConfig(arg0: $VaultConfig_): void;
        static access$000(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        getConfig(): $VaultConfig;
        getServerData(): $VaultServerData;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get sharedData(): $VaultSharedData;
        get clientData(): $VaultClientData;
        get serverData(): $VaultServerData;
    }
    export class $VaultBlockEntity$Client {
        static shouldDisplayActiveEffects(arg0: $VaultSharedData): boolean;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultClientData, arg4: $VaultSharedData): void;
        static emitActivationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $VaultSharedData, arg4: $ParticleOptions_): void;
        static emitDeactivationParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $ParticleOptions_): void;
        constructor();
    }
    export class $VaultClientData {
        updateDisplayItemSpin(): void;
        previousSpin(): number;
        currentSpin(): number;
        static ROTATION_SPEED: number;
        constructor();
    }
    export class $VaultConfig extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        playerDetector(): $PlayerDetector;
        entitySelector(): $PlayerDetector$EntitySelector;
        activationRange(): number;
        deactivationRange(): number;
        keyItem(): $ItemStack;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        static CODEC: $Codec<$VaultConfig>;
        static DEFAULT: $VaultConfig;
        static TAG_NAME: string;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { activationRange?: number, keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined,  } | [activationRange?: number, keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, ];
    export class $VaultState$LightLevel extends $Enum<$VaultState$LightLevel> {
    }
    /**
     * Values that may be interpreted as {@link $VaultState$LightLevel}.
     */
    export type $VaultState$LightLevel_ = "half_lit" | "lit";
    export class $VaultServerData {
        stateUpdatingResumesAt(): number;
        setLastInsertFailTimestamp(arg0: number): void;
        getLastInsertFailTimestamp(): number;
        getRewardedPlayers(): $Set<$UUID>;
        hasRewardedPlayer(arg0: $Player): boolean;
        addToRewardedPlayers(arg0: $Player): void;
        setItemsToEject(arg0: $List_<$ItemStack_>): void;
        pauseStateUpdatingUntil(arg0: number): void;
        getItemsToEject(): $List<$ItemStack>;
        markEjectionFinished(): void;
        ejectionProgress(): number;
        popNextItemToEject(): $ItemStack;
        getNextItemToEject(): $ItemStack;
        set(arg0: $VaultServerData): void;
        static CODEC: $Codec<$VaultServerData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor();
        constructor(arg0: $Set_<$UUID_>, arg1: number, arg2: $List_<$ItemStack_>, arg3: number);
        get rewardedPlayers(): $Set<$UUID>;
        get nextItemToEject(): $ItemStack;
    }
    export class $VaultSharedData {
        connectedParticlesRange(): number;
        setDisplayItem(arg0: $ItemStack_): void;
        updateConnectedPlayersWithinRange(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultServerData, arg3: $VaultConfig_, arg4: number): void;
        hasConnectedPlayers(): boolean;
        hasDisplayItem(): boolean;
        getDisplayItem(): $ItemStack;
        getConnectedPlayers(): $Set<$UUID>;
        set(arg0: $VaultSharedData): void;
        static CODEC: $Codec<$VaultSharedData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor();
        constructor(arg0: $ItemStack_, arg1: $Set_<$UUID_>, arg2: number);
        get connectedPlayers(): $Set<$UUID>;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        lightLevel(): number;
        tickAndGetNext(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultConfig_, arg3: $VaultServerData, arg4: $VaultSharedData): $VaultState;
        onEnter(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultConfig_, arg3: $VaultSharedData, arg4: boolean): void;
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        onExit(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultConfig_, arg3: $VaultSharedData): void;
        getSerializedName(): string;
        onTransition(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $VaultState_, arg3: $VaultConfig_, arg4: $VaultSharedData, arg5: boolean): void;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
}
