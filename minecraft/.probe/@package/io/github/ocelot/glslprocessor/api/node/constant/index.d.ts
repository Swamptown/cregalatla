import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $Number, $Enum } from "@package/java/lang";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/constant" {
    export class $GlslIntFormat extends $Enum<$GlslIntFormat> {
        static values(): $GlslIntFormat[];
        static valueOf(arg0: string): $GlslIntFormat;
        static HEXADECIMAL: $GlslIntFormat;
        static OCTAL: $GlslIntFormat;
        static DECIMAL: $GlslIntFormat;
    }
    /**
     * Values that may be interpreted as {@link $GlslIntFormat}.
     */
    export type $GlslIntFormat_ = "hexadecimal" | "octal" | "decimal";
    export class $GlslIntConstantNode implements $GlslConstantNode {
        setSigned(arg0: boolean): void;
        getNodeType(): $GlslNodeType;
        numberValue(): $Number;
        signed(): boolean;
        setFormat(arg0: $GlslIntFormat_): void;
        booleanValue(): boolean;
        intValue(): number;
        format(): $GlslIntFormat;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        isNumber(): boolean;
        unsignedIntValue(): number;
        floatValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: $GlslIntFormat_, arg1: boolean, arg2: number);
        get nodeType(): $GlslNodeType;
        get number(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslBoolConstantNode implements $GlslConstantNode {
        getNodeType(): $GlslNodeType;
        numberValue(): $Number;
        booleanValue(): boolean;
        set(arg0: boolean): void;
        set(arg0: $Number): void;
        isNumber(): boolean;
        unsignedIntValue(): number;
        intValue(): number;
        floatValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: boolean);
        get nodeType(): $GlslNodeType;
        get number(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslDoubleConstantNode implements $GlslConstantNode {
        getNodeType(): $GlslNodeType;
        numberValue(): $Number;
        booleanValue(): boolean;
        doubleValue(): number;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        isNumber(): boolean;
        unsignedIntValue(): number;
        intValue(): number;
        floatValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: number);
        get nodeType(): $GlslNodeType;
        get number(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslFloatConstantNode implements $GlslConstantNode {
        getNodeType(): $GlslNodeType;
        numberValue(): $Number;
        booleanValue(): boolean;
        floatValue(): number;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        isNumber(): boolean;
        unsignedIntValue(): number;
        intValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        constructor(arg0: number);
        get nodeType(): $GlslNodeType;
        get number(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslConstantNode {
    }
    export interface $GlslConstantNode extends $GlslNode {
        unsignedIntValue(): number;
        numberValue(): $Number;
        booleanValue(): boolean;
        intValue(): number;
        floatValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        visit(arg0: $GlslNodeVisitor): void;
        isNumber(): boolean;
        get number(): boolean;
    }
}
