import { $TagType, $StreamTagVisitor$EntryResult, $StreamTagVisitor$ValueResult, $StreamTagVisitor, $Tag } from "@package/net/minecraft/nbt";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/nbt/visitors" {
    export class $SkipFields extends $CollectToTag {
        constructor(...arg0: $FieldSelector_[]);
    }
    export class $CollectToTag implements $StreamTagVisitor {
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: string): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        getResult(): $Tag;
        depth(): number;
        visitEntry(arg0: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitEntry(arg0: $TagType<never>, arg1: string): $StreamTagVisitor$EntryResult;
        visitRootEntry(arg0: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitList(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$ValueResult;
        visitElement(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$EntryResult;
        constructor();
        get result(): $Tag;
    }
    export class $SkipAll {
        static INSTANCE: $SkipAll;
    }
    export interface $SkipAll extends $StreamTagVisitor {
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: string): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitEntry(arg0: $TagType<never>, arg1: string): $StreamTagVisitor$EntryResult;
        visitEntry(arg0: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitRootEntry(arg0: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitList(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$ValueResult;
        visitElement(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$EntryResult;
    }
    export class $FieldTree extends $Record {
        selectedFields(): $Map<string, $TagType<never>>;
        static createRoot(): $FieldTree;
        fieldsToRecurse(): $Map<string, $FieldTree>;
        depth(): number;
        addEntry(arg0: $FieldSelector_): void;
        isSelected(arg0: $TagType<never>, arg1: string): boolean;
        constructor(arg0: number, arg1: $Map_<string, $TagType<never>>, arg2: $Map_<string, $FieldTree_>);
    }
    /**
     * Values that may be interpreted as {@link $FieldTree}.
     */
    export type $FieldTree_ = { depth?: number, fieldsToRecurse?: $Map_<string, $FieldTree_>, selectedFields?: $Map_<string, $TagType<never>>,  } | [depth?: number, fieldsToRecurse?: $Map_<string, $FieldTree_>, selectedFields?: $Map_<string, $TagType<never>>, ];
    export class $CollectFields extends $CollectToTag {
        getMissingFieldCount(): number;
        constructor(...arg0: $FieldSelector_[]);
        get missingFieldCount(): number;
    }
    export class $FieldSelector extends $Record {
        name(): string;
        type(): $TagType<never>;
        path(): $List<string>;
        constructor(arg0: $List_<string>, arg1: $TagType<never>, arg2: string);
        constructor(arg0: string, arg1: string, arg2: $TagType<never>, arg3: string);
        constructor(arg0: string, arg1: $TagType<never>, arg2: string);
        constructor(arg0: $TagType<never>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $FieldSelector}.
     */
    export type $FieldSelector_ = { path?: $List_<string>, name?: string, type?: $TagType<never>,  } | [path?: $List_<string>, name?: string, type?: $TagType<never>, ];
}
