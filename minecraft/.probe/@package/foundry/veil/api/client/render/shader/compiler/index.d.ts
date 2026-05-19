import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Set_, $Set } from "@package/java/util";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $ShaderProgram } from "@package/foundry/veil/api/client/render/shader/program";

declare module "@package/foundry/veil/api/client/render/shader/compiler" {
    export class $CompiledShader extends $Record implements $NativeResource {
        uniformBindings(): $Object2IntMap<string>;
        sourceFile(): $ResourceLocation;
        apply(arg0: $ShaderProgram): void;
        id(): number;
        free(): void;
        includes(): $Set<$ResourceLocation>;
        definitionDependencies(): $Set<string>;
        close(): void;
        constructor(sourceFile: $ResourceLocation_, id: number, uniformBindings: $Object2IntMap<string>, definitionDependencies: $Set_<string>, includes: $Set_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $CompiledShader}.
     */
    export type $CompiledShader_ = { definitionDependencies?: $Set_<string>, includes?: $Set_<$ResourceLocation_>, sourceFile?: $ResourceLocation_, id?: number, uniformBindings?: $Object2IntMap<string>,  } | [definitionDependencies?: $Set_<string>, includes?: $Set_<$ResourceLocation_>, sourceFile?: $ResourceLocation_, id?: number, uniformBindings?: $Object2IntMap<string>, ];
}
