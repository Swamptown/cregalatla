import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $IMixinInfo, $IMixinConfigPlugin } from "@package/org/spongepowered/asm/mixin/extensibility";
import { $Set_ } from "@package/java/util";

declare module "@package/concerrox/emixx/neoforge/mixinplugin" {
    export class $EmiPlusPlusNeoForgeMixinPlugin implements $IMixinConfigPlugin {
        onLoad(mixinPackage: string): void;
        getMixins(): void;
        getRefMapperConfig(): void;
        postApply(targetClassName: string, targetClass: $ClassNode, mixinClassName: string, mixinInfo: $IMixinInfo): void;
        preApply(targetClassName: string, targetClass: $ClassNode, mixinClassName: string, mixinInfo: $IMixinInfo): void;
        shouldApplyMixin(targetClassName: string, mixinClassName: string): boolean;
        acceptTargets(myTargets: $Set_<string>, otherTargets: $Set_<string>): void;
        constructor();
        get mixins(): void;
        get refMapperConfig(): void;
    }
}
