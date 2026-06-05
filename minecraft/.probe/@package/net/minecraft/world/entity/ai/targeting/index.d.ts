import { $Predicate_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/world/entity/ai/targeting" {
    export class $TargetingConditions {
        static forCombat(): $TargetingConditions;
        static forNonCombat(): $TargetingConditions;
        ignoreLineOfSight(): $TargetingConditions;
        ignoreInvisibilityTesting(): $TargetingConditions;
        selector(arg0: $Predicate_<$LivingEntity>): $TargetingConditions;
        test(arg0: $LivingEntity, arg1: $LivingEntity): boolean;
        copy(): $TargetingConditions;
        range(arg0: number): $TargetingConditions;
        static DEFAULT: $TargetingConditions;
    }
}
