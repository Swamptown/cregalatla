import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/level/storage" {
    export class $ExposureIdentifier {
        isEmpty(): boolean;
        map<T>(ifId: $Function_<string, T>, ifTexture: $Function_<$ResourceLocation, T>): T;
        static id(id: string): $ExposureIdentifier;
        id(): string;
        getId(): (string) | undefined;
        static createId(...parts: string[]): string;
        static createId(entity: $Entity, ...middleParts: string[]): string;
        isTexture(): boolean;
        ifId(idConsumer: $Consumer_<string>): $ExposureIdentifier;
        ifTexture(textureConsumer: $Consumer_<$ResourceLocation>): $ExposureIdentifier;
        mapTexture<T>(mappingFunc: $Function_<$ResourceLocation, T>): (T) | undefined;
        toValueString(): string;
        static texture(texture: $ResourceLocation_): $ExposureIdentifier;
        texture(): $ResourceLocation;
        isId(): boolean;
        mapId<T>(mappingFunc: $Function_<string, T>): (T) | undefined;
        getTexture(): ($ResourceLocation) | undefined;
        static CODEC: $Codec<$ExposureIdentifier>;
        static FULL_CODEC: $Codec<$ExposureIdentifier>;
        static SIMPLE_ID_CODEC: $Codec<$ExposureIdentifier>;
        static EMPTY: $ExposureIdentifier;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ExposureIdentifier>;
        get empty(): boolean;
    }
}
