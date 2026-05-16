import { $Object } from "@package/java/lang";

declare module "@package/com/illusivesoulworks/polymorph/api/common/base" {
    export class $IRecipeContext {
    }
    export interface $IRecipeContext {
        polymorph$getContext(): $Object;
        polymorph$setContext(arg0: $Object): void;
    }
}
