import { $Record } from "@package/java/lang";

declare module "@package/com/faboslav/structurify/common/world/level/structure" {
    export class $StructureSectionClaim extends $Record {
        structureCenter(): number;
        structureId(): string;
        token(): number;
        constructor(token: number, structureId: string, structureCenter: number);
    }
    /**
     * Values that may be interpreted as {@link $StructureSectionClaim}.
     */
    export type $StructureSectionClaim_ = { token?: number, structureId?: string, structureCenter?: number,  } | [token?: number, structureId?: string, structureCenter?: number, ];
}
