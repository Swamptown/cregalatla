import { $Codec } from "@package/com/mojang/serialization";
import { $TagType, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BiFunction, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $TriConsumer_, $TriConsumer } from "@package/org/apache/commons/lang3/function";
export * as color from "@package/io/github/mortuusars/exposure/util/color";

declare module "@package/io/github/mortuusars/exposure/util" {
    export class $TranslatableError extends $Record {
        casual(): $MutableComponent;
        code(): string;
        key(): string;
        technical(): $MutableComponent;
        static GENERIC: $TranslatableError;
        static CODEC: $Codec<$TranslatableError>;
        static TIMED_OUT: $TranslatableError;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TranslatableError>;
        constructor(key: string, code: string);
    }
    /**
     * Values that may be interpreted as {@link $TranslatableError}.
     */
    export type $TranslatableError_ = { key?: string, code?: string,  } | [key?: string, code?: string, ];
    export class $ExtraData extends $CompoundTag {
        remove<T>(type: $ExtraData$Type_<T>): void;
        get<T>(type: $ExtraData$Type_<T>): (T) | undefined;
        put<T>(type: $ExtraData$Type_<T>, value: T): void;
        merge(other: $CompoundTag_): $ExtraData;
        getOrDefault<T>(type: $ExtraData$Type_<T>, defaultValue: T): T;
        copy(): $ExtraData;
        static CODEC: $Codec<$ExtraData>;
        static EMPTY: $ExtraData;
        static TYPE: $TagType<$CompoundTag>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ExtraData>;
        tags: $Map<string, $Tag>;
        constructor(tag: $CompoundTag_);
        constructor();
    }
    export class $PointOfView extends $Record {
        reverseDirection(): $PointOfView;
        limitMaxDistance(holder: $CameraHolder, distance: number): $PointOfView;
        limitMaxDistance(entity: $Entity, distance: number): $PointOfView;
        move(x: number, y: number, z: number): $PointOfView;
        static of(entity: $Entity): $PointOfView;
        static of(holder: $CameraHolder): $PointOfView;
        pos(): $Vec3;
        dir(): $Vec3;
        rotateX(degrees: number): $PointOfView;
        rotateY(degrees: number): $PointOfView;
        constructor(pos: $Vec3_, dir: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $PointOfView}.
     */
    export type $PointOfView_ = { pos?: $Vec3_, dir?: $Vec3_,  } | [pos?: $Vec3_, dir?: $Vec3_, ];
    export class $ExtraData$Type<T> extends $Record {
        static stringBasedList<T>(key: string, extractFunc: $Function_<string, T>, packFunc: $Function_<T, string>): $ExtraData$Type<$List<T>>;
        static longVal(key: string): $ExtraData$Type<number>;
        static doubleVal(key: string): $ExtraData$Type<number>;
        static floatVal(key: string): $ExtraData$Type<number>;
        static intVal(key: string): $ExtraData$Type<number>;
        getter(): $BiFunction<$ExtraData, string, T>;
        setter(): $TriConsumer<$ExtraData, string, T>;
        static list<T>(key: string, tagType: number, extractFunc: $Function_<$Tag, T>, packFunc: $Function_<T, $Tag>): $ExtraData$Type<$List<T>>;
        key(): string;
        static string(key: string): $ExtraData$Type<string>;
        static bool(key: string): $ExtraData$Type<boolean>;
        static resourceLocation(key: string): $ExtraData$Type<$ResourceLocation>;
        static stringRepresentable<T extends $StringRepresentable>(key: string, deserializeFunction: $Function_<string, T>): $ExtraData$Type<T>;
        static vec3(key: string): $ExtraData$Type<$Vec3>;
        constructor(key: string, getter: $BiFunction_<$ExtraData, string, T>, setter: $TriConsumer_<$ExtraData, string, T>);
    }
    /**
     * Values that may be interpreted as {@link $ExtraData$Type}.
     */
    export type $ExtraData$Type_<T> = { key?: string, setter?: $TriConsumer_<$ExtraData, string, any>, getter?: $BiFunction_<$ExtraData, string, any>,  } | [key?: string, setter?: $TriConsumer_<$ExtraData, string, any>, getter?: $BiFunction_<$ExtraData, string, any>, ];
}
