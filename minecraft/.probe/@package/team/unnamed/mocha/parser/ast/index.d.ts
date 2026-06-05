import { $List, $List_ } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";

declare module "@package/team/unnamed/mocha/parser/ast" {
    export class $IdentifierExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        name(): string;
        write(arg0: $ByteBuf): void;
        constructor(arg0: $ByteBuf);
        constructor(arg0: string);
    }
    export class $StatementExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
        op(): $StatementExpression$Op;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $StatementExpression$Op_);
    }
    export class $StatementExpression$Op extends $Enum<$StatementExpression$Op> {
        static values(): $StatementExpression$Op[];
        static valueOf(arg0: string): $StatementExpression$Op;
        static CONTINUE: $StatementExpression$Op;
        static BREAK: $StatementExpression$Op;
    }
    /**
     * Values that may be interpreted as {@link $StatementExpression$Op}.
     */
    export type $StatementExpression$Op_ = "break" | "continue";
    export class $ExpressionVisitor<R> {
    }
    export interface $ExpressionVisitor<R> {
        visitCall(arg0: $CallExpression): R;
        visitBinary(arg0: $BinaryExpression): R;
        visitUnary(arg0: $UnaryExpression): R;
        visitArrayAccess(arg0: $ArrayAccessExpression): R;
        visitIdentifier(arg0: $IdentifierExpression): R;
        visitTernaryConditional(arg0: $TernaryConditionalExpression): R;
        visitExecutionScope(arg0: $ExecutionScopeExpression): R;
        visitAccess(arg0: $AccessExpression): R;
        visitStatement(arg0: $StatementExpression): R;
        visit(arg0: $Expression): R;
        visitString(arg0: $StringExpression): R;
        visitFloat(arg0: $FloatExpression): R;
    }
    /**
     * Values that may be interpreted as {@link $ExpressionVisitor}.
     */
    export type $ExpressionVisitor_<R> = ((arg0: $Expression) => R);
    export class $ExecutionScopeExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
        expressions(): $List<$Expression>;
        constructor(arg0: $List_<$Expression>);
        constructor(arg0: $ByteBuf);
    }
    export class $BinaryExpression$Op extends $Enum<$BinaryExpression$Op> {
        static values(): $BinaryExpression$Op[];
        static valueOf(arg0: string): $BinaryExpression$Op;
        precedence(): number;
        static ADD: $BinaryExpression$Op;
        static SUB: $BinaryExpression$Op;
        static OR: $BinaryExpression$Op;
        static MUL: $BinaryExpression$Op;
        static LT: $BinaryExpression$Op;
        static NULL_COALESCE: $BinaryExpression$Op;
        static ASSIGN: $BinaryExpression$Op;
        static EQ: $BinaryExpression$Op;
        static GT: $BinaryExpression$Op;
        static DIV: $BinaryExpression$Op;
        static CONDITIONAL: $BinaryExpression$Op;
        static ARROW: $BinaryExpression$Op;
        static AND: $BinaryExpression$Op;
        static GTE: $BinaryExpression$Op;
        static NEQ: $BinaryExpression$Op;
        static LTE: $BinaryExpression$Op;
    }
    /**
     * Values that may be interpreted as {@link $BinaryExpression$Op}.
     */
    export type $BinaryExpression$Op_ = "and" | "or" | "lt" | "lte" | "gt" | "gte" | "add" | "sub" | "mul" | "div" | "arrow" | "null_coalesce" | "assign" | "conditional" | "eq" | "neq";
    export class $BinaryExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
        op(): $BinaryExpression$Op;
        left(arg0: $Expression): void;
        left(): $Expression;
        right(arg0: $Expression): void;
        right(): $Expression;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $BinaryExpression$Op_, arg1: $Expression, arg2: $Expression);
    }
    export class $UnaryExpression$Op extends $Enum<$UnaryExpression$Op> {
        static values(): $UnaryExpression$Op[];
        static valueOf(arg0: string): $UnaryExpression$Op;
        static RETURN: $UnaryExpression$Op;
        static ARITHMETICAL_NEGATION: $UnaryExpression$Op;
        static LOGICAL_NEGATION: $UnaryExpression$Op;
    }
    /**
     * Values that may be interpreted as {@link $UnaryExpression$Op}.
     */
    export type $UnaryExpression$Op_ = "logical_negation" | "arithmetical_negation" | "return";
    export class $AccessExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        object(arg0: $Expression): void;
        object(): $Expression;
        write(arg0: $ByteBuf): void;
        property(): string;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: string);
    }
    export class $TernaryConditionalExpression implements $Expression {
        trueExpression(arg0: $Expression): void;
        trueExpression(): $Expression;
        falseExpression(): $Expression;
        falseExpression(arg0: $Expression): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
        condition(): $Expression;
        condition(arg0: $Expression): void;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: $Expression, arg2: $Expression);
    }
    export class $UnaryExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
        op(): $UnaryExpression$Op;
        expression(): $Expression;
        expression(arg0: $Expression): void;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $UnaryExpression$Op_, arg1: $Expression);
    }
    export class $CallExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
        function(arg0: $Expression): void;
        function(): $Expression;
        arguments(): $List<$Expression>;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: $List_<$Expression>);
    }
    export class $FloatExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        value(): number;
        static of(arg0: number): $FloatExpression;
        static of(arg0: number): $FloatExpression;
        write(arg0: $ByteBuf): void;
        static ZERO: $FloatExpression;
        static ONE: $FloatExpression;
        constructor(arg0: $ByteBuf);
    }
    export class $StringExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        value(): string;
        write(arg0: $ByteBuf): void;
        constructor(arg0: $ByteBuf);
        constructor(arg0: string);
    }
    export class $ArrayAccessExpression implements $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        index(): $Expression;
        index(arg0: $Expression): void;
        array(arg0: $Expression): void;
        array(): $Expression;
        write(arg0: $ByteBuf): void;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: $Expression);
    }
    export class $Expression {
    }
    export interface $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        write(arg0: $ByteBuf): void;
    }
}
