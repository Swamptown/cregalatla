import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $GenericTraits } from "@package/com/beansgalaxy/backpacks/traits/generic";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";
import { $ComponentHolder } from "@package/com/beansgalaxy/backpacks/util";

declare module "@package/com/beansgalaxy/backpacks/screen" {
    export class $TinyClickType extends $Enum<$TinyClickType> {
        static getHotbar(arg0: number): $TinyClickType;
        isHotbar(): boolean;
        isShift(): boolean;
        isAction(): boolean;
        isDrop(): boolean;
        isRight(): boolean;
        static values(): $TinyClickType[];
        static valueOf(arg0: string): $TinyClickType;
        static H_8: $TinyClickType;
        static H_7: $TinyClickType;
        static LEFT: $TinyClickType;
        hotbarSlot: number;
        equipmentSlot: $EquipmentSlot;
        static DROP: $TinyClickType;
        static SHIFT: $TinyClickType;
        static ACTION: $TinyClickType;
        static CRAFT: $TinyClickType;
        static H_0: $TinyClickType;
        static RIGHT: $TinyClickType;
        static I_SHIFT: $TinyClickType;
        static H_2: $TinyClickType;
        static H_1: $TinyClickType;
        static H_4: $TinyClickType;
        static H_3: $TinyClickType;
        static H_6: $TinyClickType;
        static H_5: $TinyClickType;
        get shift(): boolean;
        get action(): boolean;
        get drop(): boolean;
        get right(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TinyClickType}.
     */
    export type $TinyClickType_ = "left" | "right" | "shift" | "i_shift" | "craft" | "action" | "drop" | "h_0" | "h_1" | "h_2" | "h_3" | "h_4" | "h_5" | "h_6" | "h_7" | "h_8";
    export class $TraitMenu<T extends $GenericTraits> {
        menuClicked(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<boolean>): void;
        static create(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Slot): $TraitMenu<never>;
        render(arg0: $AbstractContainerScreen<never>, arg1: $GuiGraphics, arg2: number, arg3: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfoReturnable<boolean>): void;
        isFocused(): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<boolean>): void;
        isHovering(arg0: number, arg1: number): boolean;
        isHoveringSlot(arg0: number, arg1: number): boolean;
        dropHoveredItem(arg0: $CallbackInfoReturnable<boolean>): void;
        setFocus(arg0: boolean): void;
        timeOpened: number;
        traits: T;
        holder: $ComponentHolder;
        slot: $Slot;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Slot, arg6: $ComponentHolder, arg7: T);
        constructor(arg0: $Minecraft, arg1: $Slot, arg2: $ComponentHolder, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number);
        get focused(): boolean;
        set focus(value: boolean);
    }
}
