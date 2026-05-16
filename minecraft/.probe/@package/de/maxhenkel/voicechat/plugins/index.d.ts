import { $VolumeCategoryImpl } from "@package/de/maxhenkel/voicechat/plugins/impl";
import { $Collection } from "@package/java/util";

declare module "@package/de/maxhenkel/voicechat/plugins" {
    export class $CategoryManager {
        removeCategory(arg0: string): $VolumeCategoryImpl;
        getCategories(): $Collection<$VolumeCategoryImpl>;
        addCategory(arg0: $VolumeCategoryImpl): void;
        constructor();
        get categories(): $Collection<$VolumeCategoryImpl>;
    }
}
