import { $OreConfiguration$TargetBlockState } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryTypes } from "@special/types";
import { $ReplacementMatch } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RuleTest } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Object, $Enum, $Record } from "@package/java/lang";
import { $Pattern } from "@package/java/util/regex";
import { $List, $List_, $Collection, $Set } from "@package/java/util";

declare module "@package/dev/latvian/mods/kubejs/block/state" {
    export class $BlockStatePredicate$OrMatch extends $Record implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        getBlockIds(): $Set<$ResourceLocation>;
        test(state: $BlockState_): boolean;
        list(): $List<$BlockStatePredicate>;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(list: $List_<$BlockStatePredicate_>);
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate$OrMatch}.
     */
    export type $BlockStatePredicate$OrMatch_ = { list?: $List_<$BlockStatePredicate_>,  } | [list?: $List_<$BlockStatePredicate_>, ];
    export class $BlockStatePredicate$BlockMatch extends $Record implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        getBlockIds(): $Set<$ResourceLocation>;
        test(state: $BlockState_): boolean;
        block(): $Block;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(block: $Block_);
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate$BlockMatch}.
     */
    export type $BlockStatePredicate$BlockMatch_ = { block?: $Block_,  } | [block?: $Block_, ];
    export class $BlockStatePredicate$AndMatch implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        test(state: $BlockState_): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(list: $List_<$BlockStatePredicate_>);
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    export class $BlockStatePredicate$TagMatch extends $Record implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        tag(): $TagKey<$Block>;
        test(state: $BlockState_): boolean;
        getBlocks(): $Collection<$Block>;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockStates(): $Collection<$BlockState>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(tag: $TagKey_<$Block>);
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate$TagMatch}.
     */
    export type $BlockStatePredicate$TagMatch_ = { tag?: $TagKey_<$Block>,  } | [tag?: $TagKey_<$Block>, ];
    export class $BlockStatePredicate {
        static wrapRuleTest(o: $Object): $RuleTest;
        static wrap(o: $Object): $BlockStatePredicate;
        static fromString(s: string): $BlockStatePredicate;
    }
    export interface $BlockStatePredicate extends $Predicate<$BlockState>, $ReplacementMatch {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        getBlockIds(): $Set<$ResourceLocation>;
        test(state: $BlockState_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate}.
     */
    export type $BlockStatePredicate_ = $BlockStatePredicate_[] | { or?: $BlockStatePredicate_, not?: $BlockStatePredicate_,  } | $Block_ | RegistryTypes.BlockTag | RegExp | "*" | "-" | ((state: $BlockState) => boolean);
    export class $BlockStatePredicate$Simple extends $Enum<$BlockStatePredicate$Simple> implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        static values(): $BlockStatePredicate$Simple[];
        test(state: $BlockState_): boolean;
        static valueOf(name: string): $BlockStatePredicate$Simple;
        getBlockStates(): $Collection<$BlockState>;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlocks(): $Collection<$Block>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static ALL: $BlockStatePredicate$Simple;
        static NONE: $BlockStatePredicate$Simple;
        get blockStates(): $Collection<$BlockState>;
        get blockIds(): $Set<$ResourceLocation>;
        get blocks(): $Collection<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate$Simple}.
     */
    export type $BlockStatePredicate$Simple_ = "all" | "none";
    export class $BlockStatePredicate$StateMatch extends $Record implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        getBlockIds(): $Set<$ResourceLocation>;
        test(s: $BlockState_): boolean;
        state(): $BlockState;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(state: $BlockState_);
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate$StateMatch}.
     */
    export type $BlockStatePredicate$StateMatch_ = { state?: $BlockState_,  } | [state?: $BlockState_, ];
    export class $BlockStatePredicate$RegexMatch implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        test(state: $BlockState_): boolean;
        getBlocks(): $Collection<$Block>;
        getBlockIds(): $Set<$ResourceLocation>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlockStates(): $Collection<$BlockState>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        pattern: $Pattern;
        constructor(p: $Pattern);
        get blocks(): $Collection<$Block>;
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
    }
    export class $BlockStatePredicate$NotMatch implements $BlockStatePredicate {
        testBlock(block: $Block_): boolean;
        asRuleTest(): $RuleTest;
        getBlockIds(): $Set<$ResourceLocation>;
        test(state: $BlockState_): boolean;
        getBlockStates(): $Collection<$BlockState>;
        getBlocks(): $Collection<$Block>;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(predicate: $BlockStatePredicate_);
        get blockIds(): $Set<$ResourceLocation>;
        get blockStates(): $Collection<$BlockState>;
        get blocks(): $Collection<$Block>;
    }
}
