import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $UUID_, $List_, $UUID, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Quaterniond, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics" {
    export class $StructureTemplateExtension {
    }
    export interface $StructureTemplateExtension {
        sable$getSubLevels(): $List<$StructureTemplateExtension$SubLevelTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateExtension}.
     */
    export type $StructureTemplateExtension_ = (() => $List_<$StructureTemplateExtension$SubLevelTemplate_>);
    export class $StructureTemplateExtension$SubLevelTemplate extends $Record {
        position(): $Vector3d;
        uuid(): $UUID;
        template(): $StructureTemplate;
        orientation(): $Quaterniond;
        constructor(uuid: $UUID_, position: $Vector3d, orientation: $Quaterniond, template: $StructureTemplate);
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateExtension$SubLevelTemplate}.
     */
    export type $StructureTemplateExtension$SubLevelTemplate_ = { orientation?: $Quaterniond, position?: $Vector3d, template?: $StructureTemplate, uuid?: $UUID_,  } | [orientation?: $Quaterniond, position?: $Vector3d, template?: $StructureTemplate, uuid?: $UUID_, ];
}
