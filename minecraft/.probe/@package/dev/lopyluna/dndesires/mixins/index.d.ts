import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/dev/lopyluna/dndesires/mixins" {
    export class $FurnaceBEAccessor {
    }
    export interface $FurnaceBEAccessor {
        getCookingProgress$D2D(): number;
        getCookingTotalTime$D2D(): number;
        get cookingProgress$D2D(): number;
        get cookingTotalTime$D2D(): number;
    }
    export class $PotatoProjectileEntityAccessor {
    }
    export interface $PotatoProjectileEntityAccessor {
        recoveryChance(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PotatoProjectileEntityAccessor}.
     */
    export type $PotatoProjectileEntityAccessor_ = ((arg0: number) => void);
    export class $AxeItemAccessor {
        static playerHasShieldUseIntent(arg0: $UseOnContext): boolean;
    }
    export interface $AxeItemAccessor {
    }
    export class $FurnaceBlockAccessor {
    }
    export interface $FurnaceBlockAccessor {
        openContainer$D2D(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $FurnaceBlockAccessor}.
     */
    export type $FurnaceBlockAccessor_ = ((arg0: $Level, arg1: $BlockPos, arg2: $Player) => void);
    export class $ServerGamePacketListenerImplAccessor {
    }
    export interface $ServerGamePacketListenerImplAccessor {
        aboveGroundTickCount(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImplAccessor}.
     */
    export type $ServerGamePacketListenerImplAccessor_ = ((arg0: number) => void);
}
