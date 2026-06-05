import { $BackpackEntity } from "@package/com/beansgalaxy/backpacks/traits/common";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/beansgalaxy/backpacks/util" {
    export class $PlaceProgress {
        static get(arg0: $Player): $PlaceProgress;
        constructor();
    }
    export class $ModSound$Type extends $Enum<$ModSound$Type> {
        static values(): $ModSound$Type[];
        static valueOf(arg0: string): $ModSound$Type;
        static EQUIP: $ModSound$Type;
        static HIT: $ModSound$Type;
        static BREAK: $ModSound$Type;
        static REMOVE: $ModSound$Type;
        static INSERT: $ModSound$Type;
        static CLOSE: $ModSound$Type;
        static PLACE: $ModSound$Type;
        static OPEN: $ModSound$Type;
    }
    /**
     * Values that may be interpreted as {@link $ModSound$Type}.
     */
    export type $ModSound$Type_ = "equip" | "place" | "hit" | "break" | "insert" | "remove" | "open" | "close";
    export class $ModSound extends $Enum<$ModSound> implements $StringRepresentable {
        atClient(arg0: $Player, arg1: $ModSound$Type_): void;
        atClient(arg0: $Player, arg1: $ModSound$Type_, arg2: number, arg3: number): void;
        toClient(arg0: $Player, arg1: $ModSound$Type_, arg2: number, arg3: number): void;
        get(arg0: $ModSound$Type_): $SoundEvent;
        static get(arg0: $ModSound_, arg1: $ModSound$Type_): $SoundEvent;
        static values(): $ModSound[];
        static valueOf(arg0: string): $ModSound;
        at(arg0: $Entity, arg1: $ModSound$Type_, arg2: number, arg3: number): void;
        at(arg0: $Entity, arg1: $ModSound$Type_): void;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ModSound>;
        static MAP_CODEC: $MapCodec<$ModSound>;
        static HARD: $ModSound;
        static VWOOMP: $ModSound;
        static SOFT: $ModSound;
        static CRUNCH: $ModSound;
        static CLAY: $ModSound;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ModSound>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ModSound}.
     */
    export type $ModSound_ = "hard" | "soft" | "vwoomp" | "crunch" | "clay";
    export class $ViewableBackpack implements $ComponentHolder {
        entity(): $Entity;
        toStack(): $ItemStack;
        onOpen(arg0: $Player): void;
        updateOpen(): void;
        setOpen(arg0: boolean): void;
        remove<T>(arg0: $DataComponentType_<T>): T;
        get<T>(arg0: $DataComponentType_<T>): T;
        static get(arg0: $BackpackEntity): $ViewableBackpack;
        static get(arg0: $LivingEntity): $ViewableBackpack;
        isOpen(): boolean;
        set<T>(arg0: $DataComponentType_<T>, arg1: T): void;
        getId(): number;
        onClose(arg0: $Player): void;
        fallDistance(): number;
        playSound(arg0: $ModSound$Type_): void;
        shouldClose(): boolean;
        has(arg0: $DataComponentType_<never>): boolean;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        getOrElse<T>(arg0: $DataComponentType_<T>, arg1: $Supplier_<T>): T;
        setChanged(): void;
        lastPitch: number;
        velocity: number;
        wobble: number;
        headPitch: number;
        lastDelta: number;
        constructor();
        get id(): number;
    }
    export class $ComponentHolder {
        static of(arg0: $Slot): $ComponentHolder;
        static of(arg0: $ItemStack_): $ComponentHolder;
        static of(arg0: $ItemStack_, arg1: $Player): $ComponentHolder;
    }
    export interface $ComponentHolder {
        has(arg0: $DataComponentType_<never>): boolean;
        remove<T>(arg0: $DataComponentType_<T>): T;
        get<T>(arg0: $DataComponentType_<T>): T;
        set<T>(arg0: $DataComponentType_<T>, arg1: T): void;
        getOrDefault<T>(arg0: $DataComponentType_<T>, arg1: T): T;
        getOrElse<T>(arg0: $DataComponentType_<T>, arg1: $Supplier_<T>): T;
        setChanged(): void;
    }
}
