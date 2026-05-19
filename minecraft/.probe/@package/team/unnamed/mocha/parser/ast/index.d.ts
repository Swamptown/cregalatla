import { $List, $List_ } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";

declare module "@package/team/unnamed/mocha/parser/ast" {
    export class $IdentifierExpression implements $Expression {
        name(): string;
        write(arg0: $ByteBuf): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        constructor(arg0: $ByteBuf);
        constructor(arg0: string);
    }
    export class $StatementExpression implements $Expression {
        write(arg0: $ByteBuf): void;
        op(): $StatementExpression$Op;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
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
        visitArrayAccess(arg0: $ArrayAccessExpression): R;
        visitIdentifier(arg0: $IdentifierExpression): R;
        visitTernaryConditional(arg0: $TernaryConditionalExpression): R;
        visitExecutionScope(arg0: $ExecutionScopeExpression): R;
        visitBinary(arg0: $BinaryExpression): R;
        visitAccess(arg0: $AccessExpression): R;
        visitUnary(arg0: $UnaryExpression): R;
        visitStatement(arg0: $StatementExpression): R;
        visitCall(arg0: $CallExpression): R;
        visit(arg0: $Expression): R;
        visitString(arg0: $StringExpression): R;
        visitFloat(arg0: $FloatExpression): R;
    }
    /**
     * Values that may be interpreted as {@link $ExpressionVisitor}.
     */
    export type $ExpressionVisitor_<R> = ((arg0: $Expression) => R);
    export class $ExecutionScopeExpression implements $Expression {
        write(arg0: $ByteBuf): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        expressions(): $List<$Expression>;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $List_<$Expression>);
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
        write(arg0: $ByteBuf): void;
        op(): $BinaryExpression$Op;
        left(): $Expression;
        left(arg0: $Expression): void;
        right(arg0: $Expression): void;
        right(): $Expression;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
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
        object(arg0: $Expression): void;
        object(): $Expression;
        write(arg0: $ByteBuf): void;
        property(): string;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: string);
    }
    export class $TernaryConditionalExpression implements $Expression {
        trueExpression(): $Expression;
        trueExpression(arg0: $Expression): void;
        falseExpression(): $Expression;
        falseExpression(arg0: $Expression): void;
        write(arg0: $ByteBuf): void;
        condition(): $Expression;
        condition(arg0: $Expression): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: $Expression, arg2: $Expression);
    }
    export class $UnaryExpression implements $Expression {
        write(arg0: $ByteBuf): void;
        op(): $UnaryExpression$Op;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        expression(arg0: $Expression): void;
        expression(): $Expression;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $UnaryExpression$Op_, arg1: $Expression);
    }
    export class $CallExpression implements $Expression {
        write(arg0: $ByteBuf): void;
        function(arg0: $Expression): void;
        function(): $Expression;
        arguments(): $List<$Expression>;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: $List_<$Expression>);
    }
    export class $FloatExpression implements $Expression {
        value(): number;
        static of(arg0: number): $FloatExpression;
        static of(arg0: number): $FloatExpression;
        write(arg0: $ByteBuf): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        static ZERO: $FloatExpression;
        static ONE: $FloatExpression;
        constructor(arg0: $ByteBuf);
    }
    export class $StringExpression implements $Expression {
        value(): string;
        write(arg0: $ByteBuf): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        constructor(arg0: $ByteBuf);
        constructor(arg0: string);
    }
    export class $ArrayAccessExpression implements $Expression {
        index(arg0: $Expression): void;
        index(): $Expression;
        array(arg0: $Expression): void;
        array(): $Expression;
        write(arg0: $ByteBuf): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
        constructor(arg0: $ByteBuf);
        constructor(arg0: $Expression, arg1: $Expression);
    }
    export class $Expression {
    }
    export interface $Expression {
        write(arg0: $ByteBuf): void;
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
    }
}
