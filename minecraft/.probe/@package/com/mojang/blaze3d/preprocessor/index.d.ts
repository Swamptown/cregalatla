import { $List } from "@package/java/util";

declare module "@package/com/mojang/blaze3d/preprocessor" {
    export class $GlslPreprocessor$Context {
    }
    export class $GlslPreprocessor {
        applyImport(arg0: boolean, arg1: string): string;
        process(arg0: string): $List<string>;
        constructor();
    }
}
