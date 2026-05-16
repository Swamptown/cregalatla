import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Vector2f } from "@package/org/joml";
export * as interpolate from "@package/com/lowdragmc/lowdraglib2/math/interpolate";

declare module "@package/com/lowdragmc/lowdraglib2/math" {
    export class $Position {
        static of(arg0: number, arg1: number): $Position;
        add(arg0: $Position): $Position;
        add(arg0: $Size): $Position;
        add(arg0: number, arg1: number): $Position;
        subtract(arg0: $Position): $Position;
        vector2f(): $Vector2f;
        addX(arg0: number): $Position;
        addY(arg0: number): $Position;
        getY(): number;
        vec2(): $Vec2;
        getX(): number;
        static ORIGIN: $Position;
        static CODEC: $Codec<$Position>;
        x: number;
        y: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Position>;
    }
    export class $PositionedRect {
        static of(arg0: $Position, arg1: $Size): $PositionedRect;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        static of(arg0: $Position, arg1: $Position): $PositionedRect;
        getSize(): $Size;
        intersects(arg0: $Position): boolean;
        intersects(arg0: $PositionedRect): boolean;
        getPosition(): $Position;
        size: $Size;
        position: $Position;
    }
    export class $Size {
        static of(arg0: number, arg1: number): $Size;
        add(arg0: number, arg1: number): $Size;
        static add(arg0: $Position): $Size;
        add(arg0: $Size): $Size;
        subtract(arg0: $Size): $Size;
        addWidth(arg0: number): $Size;
        addHeight(arg0: number): $Size;
        getWidth(): number;
        getHeight(): number;
        static ZERO: $Size;
        static CODEC: $Codec<$Size>;
        width: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Size>;
        height: number;
    }
    export class $Rect {
        expand(arg0: number): $Rect;
        expand(arg0: number, arg1: number): $Rect;
        static of(arg0: $Position, arg1: $Size): $Rect;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        move(arg0: $Size): $Rect;
        move(arg0: $Position): $Rect;
        move(arg0: number, arg1: number): $Rect;
        intersects(arg0: $Rect): $Rect;
        isCollide(arg0: $Rect): boolean;
        getDown(): number;
        getUp(): number;
        withLeft(arg0: number): $Rect;
        withRight(arg0: number): $Rect;
        static ofAbsolute(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        static ofRelative(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        toLeftUp(): $Position;
        toLeftCenter(): $Position;
        toLeftDown(): $Position;
        toDownCenter(): $Position;
        toRightDown(): $Position;
        toRightCenter(): $Position;
        toRightUp(): $Position;
        toUpCenter(): $Position;
        upAnd(arg0: number): $Position;
        rightAnd(arg0: number): $Position;
        downAnd(arg0: number): $Position;
        leftAnd(arg0: number): $Position;
        horizontalExpand(arg0: number): $Rect;
        horizontalExpand(arg0: number, arg1: number): $Rect;
        verticalExpand(arg0: number): $Rect;
        verticalExpand(arg0: number, arg1: number): $Rect;
        expandLeft(arg0: number): $Rect;
        expandRight(arg0: number): $Rect;
        expandUp(arg0: number): $Rect;
        expandDown(arg0: number): $Rect;
        getWidthCenter(): number;
        getHeightCenter(): number;
        withUp(arg0: number): $Rect;
        withDown(arg0: number): $Rect;
        withLeftFixedWidth(arg0: number): $Rect;
        withRightFixedWidth(arg0: number): $Rect;
        withUpFixedHeight(arg0: number): $Rect;
        withDownFixedHeight(arg0: number): $Rect;
        moveHorizontal(arg0: number): $Rect;
        moveVertical(arg0: number): $Rect;
        unions(arg0: $Rect): $Rect;
        getWidth(): number;
        getHeight(): number;
        getLeft(): number;
        getRight(): number;
        static ZERO: $Rect;
        left: number;
        up: number;
        right: number;
        down: number;
        get widthCenter(): number;
        get heightCenter(): number;
        get width(): number;
        get height(): number;
    }
}
