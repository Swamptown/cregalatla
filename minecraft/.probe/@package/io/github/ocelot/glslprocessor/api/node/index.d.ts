import { $Consumer_, $UnaryOperator_, $IntFunction_, $Predicate_ } from "@package/java/util/function";
import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslNewFieldNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $Stream } from "@package/java/util/stream";
import { $GlslVersionStatement, $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslIntConstantNode, $GlslDoubleConstantNode, $GlslBoolConstantNode, $GlslFloatConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslInjectionPoint_ } from "@package/io/github/ocelot/glslprocessor/api";
import { $Spliterator, $Comparator, $Iterator, $List, $SequencedCollection, $Map_, $Map, $ListIterator, $Collection_ } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";
import { $GlslTreeVisitor, $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";
export * as constant from "@package/io/github/ocelot/glslprocessor/api/node/constant";
export * as function from "@package/io/github/ocelot/glslprocessor/api/node/function";
export * as variable from "@package/io/github/ocelot/glslprocessor/api/node/variable";
export * as branch from "@package/io/github/ocelot/glslprocessor/api/node/branch";
export * as expression from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/node" {
    export class $GlslNode {
        static intConstant(arg0: number): $GlslIntConstantNode;
        static unsignedIntConstant(arg0: number): $GlslIntConstantNode;
        static floatConstant(arg0: number): $GlslFloatConstantNode;
        static doubleConstant(arg0: number): $GlslDoubleConstantNode;
        static booleanConstant(arg0: boolean): $GlslBoolConstantNode;
        static compound(arg0: $Collection_<$GlslNode>): $GlslNode;
        static compound(...arg0: $GlslNode[]): $GlslNode;
    }
    export interface $GlslNode {
        toList(): $List<$GlslNode>;
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        get type(): $GlslSpecifiedType;
        get nodeType(): $GlslNodeType;
    }
    export class $GlslRootNode {
    }
    export interface $GlslRootNode extends $GlslNode {
        getName(): string;
        setName(arg0: string): $GlslRootNode;
        isField(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asFunction(): $GlslFunctionNode;
        asField(): $GlslNewFieldNode;
        get field(): boolean;
        get struct(): boolean;
        get declaration(): boolean;
        get function(): boolean;
    }
    export class $GlslNodeList implements $List<$GlslNode> {
        remove(arg0: $Object): boolean;
        size(): number;
        get(arg0: number): $GlslNode;
        sort(arg0: $Comparator<$GlslNode>): void;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        replaceAll(arg0: $UnaryOperator_<$GlslNode>): void;
        add(arg0: $GlslInjectionPoint_, arg1: $GlslNode): void;
        add(arg0: $GlslNode): boolean;
        add(arg0: number, arg1: $GlslNode): void;
        subList(arg0: number, arg1: number): $List<$GlslNode>;
        toArray<T>(arg0: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<$GlslNode>;
        contains(arg0: $Object): boolean;
        spliterator(): $Spliterator<$GlslNode>;
        addAll(arg0: $GlslInjectionPoint_, arg1: $Collection_<$GlslNode>): void;
        addAll(arg0: $Collection_<$GlslNode>): boolean;
        addAll(arg0: number, arg1: $Collection_<$GlslNode>): boolean;
        set(arg0: number, arg1: $GlslNode): $GlslNode;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(arg0: number): $ListIterator<$GlslNode>;
        listIterator(): $ListIterator<$GlslNode>;
        containsAll(arg0: $Collection_<never>): boolean;
        getFirst(): $GlslNode;
        getLast(): $GlslNode;
        addFirst(arg0: $GlslNode): void;
        addLast(arg0: $GlslNode): void;
        removeFirst(): $GlslNode;
        removeLast(): $GlslNode;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$GlslNode>;
        removeIf(arg0: $Predicate_<$GlslNode>): boolean;
        parallelStream(): $Stream<$GlslNode>;
        forEach(arg0: $Consumer_<$GlslNode>): void;
        reversed(): $SequencedCollection<$GlslNode>;
        constructor();
        constructor(arg0: $Collection_<$GlslNode>);
        [Symbol.iterator](): Iterator<$GlslNode>
        get empty(): boolean;
        get first(): $GlslNode;
        get last(): $GlslNode;
    }
    export class $GlslTree {
        field(arg0: string): ($GlslNewFieldNode) | undefined;
        fields(): $Stream<$GlslNewFieldNode>;
        functions(): $Stream<$GlslFunctionNode>;
        visit(arg0: $GlslTreeVisitor): void;
        static stripGLMacros(arg0: $Map_<string, string>): void;
        getMacros(): $Map<string, string>;
        searchField(arg0: string): $Stream<$GlslNewFieldNode>;
        getMarkers(): $Map<string, $GlslNode>;
        getBody(): $GlslNodeList;
        getDirectives(): $List<string>;
        getVersionStatement(): $GlslVersionStatement;
        containingBlock(arg0: $GlslNode): ($GlslTree$GlslBlock) | undefined;
        mainFunction(): ($GlslFunctionNode) | undefined;
        markOutputs(): void;
        toSourceString(): string;
        constructor();
        constructor(arg0: $GlslVersionStatement, arg1: $Collection_<$GlslNode>, arg2: $Collection_<string>, arg3: $Map_<string, $GlslNode>);
        get macros(): $Map<string, string>;
        get markers(): $Map<string, $GlslNode>;
        get body(): $GlslNodeList;
        get directives(): $List<string>;
        get versionStatement(): $GlslVersionStatement;
    }
    export class $GlslNodeType extends $Enum<$GlslNodeType> {
        static values(): $GlslNodeType[];
        static valueOf(arg0: string): $GlslNodeType;
        static GET_FIELD: $GlslNodeType;
        static ASSIGN: $GlslNodeType;
        static STRUCT_DECLARATION: $GlslNodeType;
        static PRECISION: $GlslNodeType;
        static FOR_LOOP: $GlslNodeType;
        static RETURN: $GlslNodeType;
        static DISCARD: $GlslNodeType;
        static VARIABLE: $GlslNodeType;
        static BREAK: $GlslNodeType;
        static CASE_LABEL: $GlslNodeType;
        static UNARY: $GlslNodeType;
        static INVOKE_FUNCTION: $GlslNodeType;
        static LOGICAL_XOR: $GlslNodeType;
        static OR: $GlslNodeType;
        static LOGICAL_AND: $GlslNodeType;
        static LOGICAL_OR: $GlslNodeType;
        static FUNCTION: $GlslNodeType;
        static IF_ELSE: $GlslNodeType;
        static CONTINUE: $GlslNodeType;
        static CONDITIONAL: $GlslNodeType;
        static VARIABLE_DECLARATION: $GlslNodeType;
        static WHILE_LOOP: $GlslNodeType;
        static BOOL_CONSTANT: $GlslNodeType;
        static OPERATION: $GlslNodeType;
        static INT_CONSTANT: $GlslNodeType;
        static AND: $GlslNodeType;
        static COMPARE: $GlslNodeType;
        static DOUBLE_CONSTANT: $GlslNodeType;
        static NEW_FIELD: $GlslNodeType;
        static SWITCH: $GlslNodeType;
        static XOR: $GlslNodeType;
        static FLOAT_CONSTANT: $GlslNodeType;
        static GET_ARRAY: $GlslNodeType;
        static PRIMITIVE_CONSTRUCTOR: $GlslNodeType;
    }
    /**
     * Values that may be interpreted as {@link $GlslNodeType}.
     */
    export type $GlslNodeType_ = "for_loop" | "while_loop" | "continue" | "break" | "discard" | "return" | "if_else" | "switch" | "case_label" | "and" | "or" | "xor" | "logical_and" | "logical_or" | "logical_xor" | "assign" | "operation" | "compare" | "conditional" | "precision" | "unary" | "function" | "invoke_function" | "primitive_constructor" | "double_constant" | "float_constant" | "int_constant" | "bool_constant" | "variable_declaration" | "get_array" | "get_field" | "new_field" | "struct_declaration" | "variable";
}
