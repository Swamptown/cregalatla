import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslFunctionHeader, $GlslParameterDeclaration, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslFunctionNode implements $GlslRootNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        setName(arg0: string): $GlslFunctionNode;
        getParameters(): $List<$GlslParameterDeclaration>;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslFunctionHeader;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setHeader(arg0: $GlslFunctionHeader): void;
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
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
        get returnType(): $GlslSpecifiedType;
        get parameters(): $List<$GlslParameterDeclaration>;
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get struct(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        getParameters(): $List<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslNode;
        getNodeType(): $GlslNodeType;
        setHeader(arg0: $GlslNode): void;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get parameters(): $List<$GlslNode>;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        getNodeType(): $GlslNodeType;
        getPrimitiveType(): $GlslTypeSpecifier;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        constructor(arg0: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
