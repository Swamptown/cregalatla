import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/branch" {
    export class $GlslJumpNode extends $Enum<$GlslJumpNode> implements $GlslNode {
        static values(): $GlslJumpNode[];
        static valueOf(arg0: string): $GlslJumpNode;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        static CONTINUE: $GlslJumpNode;
        static DISCARD: $GlslJumpNode;
        static BREAK: $GlslJumpNode;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    /**
     * Values that may be interpreted as {@link $GlslJumpNode}.
     */
    export type $GlslJumpNode_ = "continue" | "break" | "discard";
    export class $GlslSwitchNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setBranches(arg0: $Collection_<$GlslNode>): $GlslSwitchNode;
        setBranches(...arg0: $GlslNode[]): $GlslSwitchNode;
        setCondition(arg0: $GlslNode): $GlslSwitchNode;
        getCondition(): $GlslNode;
        getNodeType(): $GlslNodeType;
        getBranches(): $List<$GlslNode>;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslWhileLoopNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setLoopType(arg0: $GlslWhileLoopNode$Type_): $GlslWhileLoopNode;
        setCondition(arg0: $GlslNode): $GlslWhileLoopNode;
        getCondition(): $GlslNode;
        getLoopType(): $GlslWhileLoopNode$Type;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $GlslWhileLoopNode$Type_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslCaseLabelNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        isDefault(): boolean;
        visit(arg0: $GlslNodeVisitor): void;
        setCondition(arg0: $GlslNode): void;
        getCondition(): $GlslNode;
        getNodeType(): $GlslNodeType;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode);
        get default(): boolean;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslIfNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getFirst(): $GlslNodeList;
        visit(arg0: $GlslNodeVisitor): void;
        getSecond(): $GlslNodeList;
        setFirst(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        setSecond(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        getNodeType(): $GlslNodeType;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslReturnNode implements $GlslNode {
        getValue(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        setValue(arg0: $GlslNode): void;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslWhileLoopNode$Type extends $Enum<$GlslWhileLoopNode$Type> {
        static values(): $GlslWhileLoopNode$Type[];
        static valueOf(arg0: string): $GlslWhileLoopNode$Type;
        static WHILE: $GlslWhileLoopNode$Type;
        static DO: $GlslWhileLoopNode$Type;
    }
    /**
     * Values that may be interpreted as {@link $GlslWhileLoopNode$Type}.
     */
    export type $GlslWhileLoopNode$Type_ = "while" | "do";
    export class $GlslForLoopNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setCondition(arg0: $GlslNode): $GlslForLoopNode;
        getCondition(): $GlslNode;
        getIncrement(): $GlslNode;
        setIncrement(arg0: $GlslNode): $GlslForLoopNode;
        getNodeType(): $GlslNodeType;
        getInit(): $GlslNode;
        getBody(): $GlslNodeList;
        setInit(arg0: $GlslNode): $GlslForLoopNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslNode, arg3: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
