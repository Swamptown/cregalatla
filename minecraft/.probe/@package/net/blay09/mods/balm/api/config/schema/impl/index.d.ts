import { $LoadedConfig } from "@package/net/blay09/mods/balm/api/config";
import { $Function_ } from "@package/java/util/function";
import { $ConfigPropertyBuilder, $ConfigCategory, $ConfigCategoryBuilder } from "@package/net/blay09/mods/balm/api/config/schema/builder";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Collection } from "@package/java/util";
import { $ConfiguredProperty, $BalmConfigSchema, $ConfigSchemaBuilder } from "@package/net/blay09/mods/balm/api/config/schema";

declare module "@package/net/blay09/mods/balm/api/config/schema/impl" {
    export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {
        defaults(): $LoadedConfig;
        property(arg0: string): $ConfigPropertyBuilder;
        category(arg0: string): $ConfigCategoryBuilder;
        addAndReturn<T extends $ConfiguredProperty<never>>(arg0: T): T;
        rootProperties(): $Collection<$ConfiguredProperty<never>>;
        findRootProperty(arg0: string): $ConfiguredProperty<never>;
        categories(): $Collection<$ConfigCategory>;
        findProperty(arg0: string, arg1: string): $ConfiguredProperty<never>;
        identifier(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {
        name(): string;
        properties(): $List<$ConfiguredProperty<never>>;
        comment(): string;
        comment(arg0: string): $ConfigCategoryImpl;
        property(arg0: string): $ConfigPropertyBuilder;
        via<T>(arg0: $Function_<$ConfigCategoryBuilder, T>): T;
        parentSchema(): $BalmConfigSchema;
        addProperty<T extends $ConfiguredProperty<never>>(arg0: T): void;
        constructor(arg0: $ConfigSchemaImpl, arg1: string);
    }
}
