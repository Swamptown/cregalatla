import { $TextAction } from "@package/dev/latvian/mods/kubejs/text/action";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Tristate_, $Tristate } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/text/tooltip" {
    export class $TooltipRequirements extends $Record {
        ctrl(): $Tristate;
        shift(): $Tristate;
        alt(): $Tristate;
        advanced(): $Tristate;
        creative(): $Tristate;
        stages(): $Map<string, $Tristate>;
        static DEFAULT: $TooltipRequirements;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TooltipRequirements>;
        constructor(shift: $Tristate_, ctrl: $Tristate_, alt: $Tristate_, advanced: $Tristate_, creative: $Tristate_, stages: $Map_<string, $Tristate_>);
    }
    /**
     * Values that may be interpreted as {@link $TooltipRequirements}.
     */
    export type $TooltipRequirements_ = { shift?: $Tristate_, advanced?: $Tristate_, stages?: $Map_<string, $Tristate_>, ctrl?: $Tristate_, alt?: $Tristate_, creative?: $Tristate_,  } | [shift?: $Tristate_, advanced?: $Tristate_, stages?: $Map_<string, $Tristate_>, ctrl?: $Tristate_, alt?: $Tristate_, creative?: $Tristate_, ];
    export class $ItemTooltipData extends $Record {
        requirements(): ($TooltipRequirements) | undefined;
        actions(): $List<$TextAction>;
        filter(): ($Ingredient) | undefined;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemTooltipData>;
        constructor(filter: ($Ingredient_) | undefined, requirements: ($TooltipRequirements_) | undefined, actions: $List_<$TextAction>);
    }
    /**
     * Values that may be interpreted as {@link $ItemTooltipData}.
     */
    export type $ItemTooltipData_ = { requirements?: ($TooltipRequirements_) | undefined, filter?: ($Ingredient_) | undefined, actions?: $List_<$TextAction>,  } | [requirements?: ($TooltipRequirements_) | undefined, filter?: ($Ingredient_) | undefined, actions?: $List_<$TextAction>, ];
}
