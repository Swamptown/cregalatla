import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/io/github/mortuusars/exposure/world/camera/component" {
    export class $ShutterSpeed implements $StringRepresentable {
        shouldCauseTickingSound(): boolean;
        getDurationTicks(): number;
        getNotation(): string;
        getStopsDifference(relative: $ShutterSpeed): number;
        getDurationMilliseconds(): number;
        getStops(): number;
        getBrightness(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ShutterSpeed>;
        static DEFAULT: $ShutterSpeed;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShutterSpeed>;
        constructor(notation: string);
        get durationTicks(): number;
        get notation(): string;
        get durationMilliseconds(): number;
        get stops(): number;
        get brightness(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $FocalRange implements $StringRepresentable {
        zoomFromFov(fov: number): number;
        clampFocalLength(focalLength: number): number;
        clampFov(fov: number): number;
        fovFromZoom(zoom: number): number;
        focalLengthFromZoom(zoom: number): number;
        min(): number;
        max(): number;
        static getDefault(): $FocalRange;
        static parse(value: string): $FocalRange;
        static fromJson(json: $JsonElement_): $FocalRange;
        isPrime(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static REGULAR: $FocalRange;
        static CODEC: $Codec<$FocalRange>;
        static RANGE_CODEC: $Codec<$FocalRange>;
        static ALLOWED_MIN: number;
        static PRIME_CODEC: $Codec<$FocalRange>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FocalRange>;
        static ALLOWED_MAX: number;
        constructor(min: number, max: number);
        constructor(primeValue: number);
        static get default(): $FocalRange;
        get prime(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
}
