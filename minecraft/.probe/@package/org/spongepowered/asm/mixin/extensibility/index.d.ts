import { $MixinEnvironment, $MixinEnvironment$Phase } from "@package/org/spongepowered/asm/mixin";
import { $ClassNode } from "@package/org/objectweb/asm/tree";
import { $Set_, $Set, $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/extensibility" {
    export class $IEnvironmentTokenProvider {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IEnvironmentTokenProvider {
        getToken(arg0: string, arg1: $MixinEnvironment): number;
        getPriority(): number;
        get priority(): number;
    }
    export class $IMixinConfigPlugin {
    }
    export interface $IMixinConfigPlugin {
        onLoad(arg0: string): void;
        getMixins(): $List<string>;
        getRefMapperConfig(): string;
        postApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        preApply(arg0: string, arg1: $ClassNode, arg2: string, arg3: $IMixinInfo): void;
        shouldApplyMixin(arg0: string, arg1: string): boolean;
        acceptTargets(arg0: $Set_<string>, arg1: $Set_<string>): void;
        get mixins(): $List<string>;
        get refMapperConfig(): string;
    }
    export class $IMixinInfo {
    }
    export interface $IMixinInfo {
        getName(): string;
        getPriority(): number;
        getClassName(): string;
        getClassBytes(): number[];
        getConfig(): $IMixinConfig;
        getClassNode(arg0: number): $ClassNode;
        getPhase(): $MixinEnvironment$Phase;
        getClassRef(): string;
        isDetachedSuper(): boolean;
        getTargetClasses(): $List<string>;
        get name(): string;
        get priority(): number;
        get className(): string;
        get classBytes(): number[];
        get config(): $IMixinConfig;
        get phase(): $MixinEnvironment$Phase;
        get classRef(): string;
        get detachedSuper(): boolean;
        get targetClasses(): $List<string>;
    }
    export class $IRemapper {
    }
    export interface $IRemapper {
        unmap(arg0: string): string;
        map(arg0: string): string;
        mapDesc(arg0: string): string;
        mapFieldName(arg0: string, arg1: string, arg2: string): string;
        mapMethodName(arg0: string, arg1: string, arg2: string): string;
        unmapDesc(arg0: string): string;
    }
    export class $IMixinConfigSource {
    }
    export interface $IMixinConfigSource {
        getDescription(): string;
        getId(): string;
        get description(): string;
        get id(): string;
    }
    export class $IMixinConfig {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IMixinConfig {
        getEnvironment(): $MixinEnvironment;
        getSource(): $IMixinConfigSource;
        getName(): string;
        getPriority(): number;
        isRequired(): boolean;
        getTargets(): $Set<string>;
        decorate<V>(arg0: string, arg1: V): void;
        getCleanSourceId(): string;
        getDecoration<V>(arg0: string): V;
        getMixinPackage(): string;
        getPlugin(): $IMixinConfigPlugin;
        hasDecoration(arg0: string): boolean;
        get environment(): $MixinEnvironment;
        get source(): $IMixinConfigSource;
        get name(): string;
        get priority(): number;
        get required(): boolean;
        get targets(): $Set<string>;
        get cleanSourceId(): string;
        get mixinPackage(): string;
        get plugin(): $IMixinConfigPlugin;
    }
}
