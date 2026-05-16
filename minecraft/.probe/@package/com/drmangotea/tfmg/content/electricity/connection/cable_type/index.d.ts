import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Component } from "@package/net/minecraft/network/chat";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/com/drmangotea/tfmg/content/electricity/connection/cable_type" {
    export class $CableType$Properties {
        color(arg0: number): $CableType$Properties;
        spool(arg0: $ItemEntry<never>): $CableType$Properties;
        wire(arg0: $ItemEntry<never>): $CableType$Properties;
        constructor(arg0: $ResourceLocation_);
    }
    export interface $CableType extends RegistryMarked<RegistryTypes.TfmgCableTypesTag, RegistryTypes.TfmgCableTypes> {}
    export class $CableType {
        getKey(): $ResourceLocation;
        getDisplayName(): $Component;
        getSpool(): $ItemEntry<never>;
        getWire(): $ItemEntry<never>;
        getOrCreateDescriptionId(): string;
        getColor(): number;
        getDescriptionId(): string;
        constructor(arg0: $CableType$Properties);
        get key(): $ResourceLocation;
        get displayName(): $Component;
        get spool(): $ItemEntry<never>;
        get wire(): $ItemEntry<never>;
        get orCreateDescriptionId(): string;
        get color(): number;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $CableType}.
     */
    export type $CableType_ = RegistryTypes.TfmgCableTypes;
}
