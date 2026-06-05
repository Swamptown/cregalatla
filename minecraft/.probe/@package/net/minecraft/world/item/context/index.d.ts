import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        handler$hgb000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$hgb000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$hgb000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        getNearestLookingDirection(): $Direction;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        canPlace(): boolean;
        static at(arg0: $BlockPlaceContext, arg1: $BlockPos_, arg2: $Direction_): $BlockPlaceContext;
        replaceClicked: boolean;
        constructor(arg0: $UseOnContext);
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $ItemStack_, arg3: $BlockHitResult);
        get nearestLookingDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ItemStack_, arg4: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getPlayer(): $Player;
        getHitResult(): $BlockHitResult;
        isInside(): boolean;
        getClickLocation(): $Vec3;
        getHorizontalDirection(): $Direction;
        getHand(): $InteractionHand;
        getLevel(): $Level;
        isSecondaryUseActive(): boolean;
        getItemInHand(): $ItemStack;
        getRotation(): number;
        create$getHitResult(): $BlockHitResult;
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult);
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get player(): $Player;
        get hitResult(): $BlockHitResult;
        get inside(): boolean;
        get clickLocation(): $Vec3;
        get horizontalDirection(): $Direction;
        get hand(): $InteractionHand;
        get level(): $Level;
        get secondaryUseActive(): boolean;
        get itemInHand(): $ItemStack;
        get rotation(): number;
    }
}
