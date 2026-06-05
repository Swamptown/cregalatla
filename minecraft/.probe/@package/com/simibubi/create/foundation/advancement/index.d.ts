import { $Level_, $BlockGetter } from "@package/net/minecraft/world/level";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID_ } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/advancement" {
    export class $AdvancementBehaviour extends $BlockEntityBehaviour {
        awardPlayer(arg0: $CreateAdvancement): void;
        awardPlayerIfNear(arg0: $CreateAdvancement, arg1: number): void;
        setPlayer(arg0: $UUID_): void;
        static tryAward(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CreateAdvancement): void;
        isOwnerPresent(): boolean;
        static setPlacedBy(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity): void;
        add(...arg0: $CreateAdvancement[]): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AdvancementBehaviour>;
        constructor(arg0: $SmartBlockEntity, ...arg1: $CreateAdvancement[]);
        set player(value: $UUID_);
        get ownerPresent(): boolean;
    }
    export class $CreateAdvancement$Builder {
    }
    export class $CreateAdvancement {
        isAlreadyAwardedTo(arg0: $Player): boolean;
        awardTo(arg0: $Player): void;
        constructor(arg0: string, arg1: $UnaryOperator_<$CreateAdvancement$Builder>);
    }
}
