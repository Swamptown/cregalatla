import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $Stream } from "@package/java/util/stream";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getIndex(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getNodeType(): $GlslNodeType;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        visit(arg0: $GlslNodeVisitor): void;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        getStructSpecifier(): $GlslStructSpecifier;
        getSpecifiedType(): $GlslSpecifiedType;
        getNodeType(): $GlslNodeType;
        isField(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslSpecifiedType);
        get structSpecifier(): $GlslStructSpecifier;
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get struct(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        getFieldSelection(): string;
        getNodeType(): $GlslNodeType;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslNewFieldNode;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        getInitializer(): $GlslNode;
        getNodeType(): $GlslNodeType;
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        isField(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        toList(): $List<$GlslNode>;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get struct(): boolean;
        get declaration(): boolean;
        get function(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        visit(arg0: $GlslNodeVisitor): void;
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        getNames(): $List<string>;
        getNodeType(): $GlslNodeType;
        isField(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get names(): $List<string>;
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get struct(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
