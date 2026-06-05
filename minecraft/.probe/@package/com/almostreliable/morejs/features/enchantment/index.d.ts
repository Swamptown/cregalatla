import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiPredicate_ } from "@package/java/util/function";
import { $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Holder_, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { $EnchantmentInstance, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnchantmentMenu } from "@package/net/minecraft/world/inventory";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $IntRange } from "@package/com/almostreliable/morejs/features/villager";
import { $Enum, $Object } from "@package/java/lang";

declare module "@package/com/almostreliable/morejs/features/enchantment" {
    export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {
        getRequiredLevel(): number;
        getClue(): $EnchantmentInstance;
        clearComponents(): void;
        getClueId(): $ResourceLocation;
        getSlot(): number;
        addComponent(arg0: number, arg1: $Component_): void;
        addComponent(arg0: $Component_): void;
        getComponents(): $List<$Component>;
        removeComponent(arg0: number): void;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $Player, arg4: $EnchantmentMenu, arg5: number, arg6: $List_<$Component_>);
        get requiredLevel(): number;
        get clue(): $EnchantmentInstance;
        get clueId(): $ResourceLocation;
        get slot(): number;
        get components(): $List<$Component>;
    }
    export class $EnchantmentData {
        setClue(arg0: $Holder_<$Enchantment>, arg1: number): void;
        setClue(arg0: $EnchantmentInstance): void;
        clearClue(): void;
        hasEnchantment(arg0: $ResourceLocation_): boolean;
        hasEnchantment(arg0: $ResourceLocation_, arg1: $IntRange): boolean;
        getRequiredLevel(): number;
        setRequiredLevel(arg0: number): void;
        getClue(): $EnchantmentInstance;
        randomClue(): void;
        getEnchantmentIds(): $List<$ResourceLocation>;
        removeEnchantments(arg0: $BiPredicate_<$Holder<$Enchantment>, number>): void;
        addEnchantment(arg0: $Holder_<$Enchantment>, arg1: number): void;
        getEnchantments(): $List<$EnchantmentInstance>;
        constructor(arg0: $List_<$EnchantmentInstance>, arg1: number, arg2: $EnchantmentMenu, arg3: $Level_);
        get enchantmentIds(): $List<$ResourceLocation>;
        get enchantments(): $List<$EnchantmentInstance>;
    }
    export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {
        itemWasChanged(): boolean;
        setItem(arg0: $ItemStack_): void;
        getPosition(): $BlockPos;
        get(arg0: number): $EnchantmentData;
        getSize(): number;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $EnchantmentMenuState);
        set item(value: $ItemStack_);
        get position(): $BlockPos;
        get size(): number;
    }
    export class $EnchantmentTableEventJS implements $KubeLevelEvent {
        getSecondItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $Player, arg4: $EnchantmentMenu);
        get secondItem(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get item(): $ItemStack;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $EnchantmentMenuState {
        setCurrentItem(arg0: $ItemStack_): void;
        clearEnchantments(): void;
        setFreezeBroadcast(arg0: boolean): void;
        isFreezeBroadcast(): boolean;
        getCurrentItem(): $ItemStack;
        getPlayer(): $Player;
        storeItemIsEnchantable(arg0: boolean): boolean;
        getMenu(): $EnchantmentMenu;
        setEnchantments(arg0: number, arg1: $List_<$EnchantmentInstance>): void;
        getEnchantments(arg0: number): $List<$EnchantmentInstance>;
        matchesCurrentItem(arg0: $ItemStack_): boolean;
        prepareEvent(arg0: $ItemStack_): void;
        reset(arg0: $ItemStack_): void;
        getState(): $EnchantmentState;
        setState(arg0: $EnchantmentState_): void;
        constructor(arg0: $EnchantmentMenu, arg1: $Player);
        get player(): $Player;
        get menu(): $EnchantmentMenu;
    }
    export class $EnchantmentState extends $Enum<$EnchantmentState> {
        static values(): $EnchantmentState[];
        static valueOf(arg0: string): $EnchantmentState;
        static STORE_ENCHANTMENTS: $EnchantmentState;
        static IDLE: $EnchantmentState;
        static USE_STORED_ENCHANTMENTS: $EnchantmentState;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentState}.
     */
    export type $EnchantmentState_ = "idle" | "store_enchantments" | "use_stored_enchantments";
    export class $PlayerEnchantEventJS extends $EnchantmentTableEventJS {
        getRequiredLevel(): number;
        getEnchantmentIds(): $List<$ResourceLocation>;
        getEnchantments(): $List<$EnchantmentInstance>;
        getPosition(): $BlockPos;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $EnchantmentMenuState, arg6: number, arg7: $List_<$EnchantmentInstance>);
        get requiredLevel(): number;
        get enchantmentIds(): $List<$ResourceLocation>;
        get enchantments(): $List<$EnchantmentInstance>;
        get position(): $BlockPos;
    }
    export class $IsEnchantableEventJS extends $EnchantmentTableServerEventJS {
        setIsEnchantable(arg0: boolean): void;
        getIsEnchantable(): boolean;
        constructor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Level_, arg3: $BlockPos_, arg4: $EnchantmentMenuState, arg5: $MutableBoolean);
    }
    export class $EnchantmentMenuExtension {
        static morejs$cast(arg0: $EnchantmentMenu): $EnchantmentMenuExtension;
    }
    export interface $EnchantmentMenuExtension {
        morejs$getState(): ($EnchantmentMenuState) | undefined;
        morejs$getContainer(): $Container;
        morejs$getCosts(): number[];
        morejs$getEnchantmentClues(): number[];
        morejs$getLevelClues(): number[];
        morejs$getRandom(): $RandomSource;
    }
}
