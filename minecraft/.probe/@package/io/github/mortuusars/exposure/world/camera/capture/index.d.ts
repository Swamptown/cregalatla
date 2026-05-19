import { $ExtraData$Type_, $ExtraData, $ExtraData$Type } from "@package/io/github/mortuusars/exposure/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CameraId_, $CameraId, $ColorChannel, $ColorChannel_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $FilmProperties, $FilmProperties_ } from "@package/io/github/mortuusars/exposure/world/camera/film/properties";
import { $Consumer_ } from "@package/java/util/function";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $ShutterSpeed } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/capture" {
    export class $CaptureParameters$Builder {
        setProjectionInfo(projection: $Projection_): $CaptureParameters$Builder;
        setCameraID(cameraId: $CameraId_): $CaptureParameters$Builder;
        setCameraHolder(holder: $CameraHolder): $CaptureParameters$Builder;
        setCropFactor(cropFactor: number): $CaptureParameters$Builder;
        setChromaticChannel(chromaticChannel: $ColorChannel_): $CaptureParameters$Builder;
        setChromaticChannel(chromaticChannel: ($ColorChannel_) | undefined): $CaptureParameters$Builder;
        setFilmProperties(filmProperties: $FilmProperties_): $CaptureParameters$Builder;
        extraData(extraDataUpdater: $Consumer_<$ExtraData>): $CaptureParameters$Builder;
        extraData<T>(type: $ExtraData$Type_<T>, value: T): $CaptureParameters$Builder;
        setProjection(projection: ($Projection_) | undefined): $CaptureParameters$Builder;
        setFov(fov: number): $CaptureParameters$Builder;
        setFilter(filter: $ResourceLocation_): $CaptureParameters$Builder;
        build(): $CaptureParameters;
        constructor(exposureId: string);
        constructor(params: $CaptureParameters_);
        set projectionInfo(value: $Projection_);
        set cameraID(value: $CameraId_);
        set cameraHolder(value: $CameraHolder);
        set cropFactor(value: number);
        set filmProperties(value: $FilmProperties_);
        set projection(value: ($Projection_) | undefined);
        set fov(value: number);
        set filter(value: $ResourceLocation_);
    }
    export class $DitherMode extends $Enum<$DitherMode> implements $StringRepresentable {
        static values(): $DitherMode[];
        static valueOf(name: string): $DitherMode;
        cycle(): $DitherMode;
        translate(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DITHERED: $DitherMode;
        static CODEC: $Codec<$DitherMode>;
        static CLEAN: $DitherMode;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DitherMode>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DitherMode}.
     */
    export type $DitherMode_ = "dithered" | "clean";
    export class $CaptureParameters extends $Record {
        cropFactor(): number;
        getShutterSpeed(): $ShutterSpeed;
        cameraHolderId(): (number) | undefined;
        getFlash(): boolean;
        cameraId(): ($CameraId) | undefined;
        exposureId(): string;
        filmProperties(): $FilmProperties;
        singleChannel(): ($ColorChannel) | undefined;
        extraData(): $ExtraData;
        projection(): ($Projection) | undefined;
        getLightLevel(): (number) | undefined;
        fov(): (number) | undefined;
        filter(): ($ResourceLocation) | undefined;
        mutable(): $CaptureParameters$Builder;
        static CODEC: $Codec<$CaptureParameters>;
        static LIGHT_LEVEL: $ExtraData$Type<number>;
        static SHUTTER_SPEED: $ExtraData$Type<$ShutterSpeed>;
        static FLASH: $ExtraData$Type<boolean>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CaptureParameters>;
        constructor(exposureId: string, cameraId: ($CameraId_) | undefined, cameraHolderId: (number) | undefined, fov: (number) | undefined, cropFactor: number, filter: ($ResourceLocation_) | undefined, projection: ($Projection_) | undefined, singleChannel: ($ColorChannel_) | undefined, filmProperties: $FilmProperties_, extraData: $ExtraData);
        get shutterSpeed(): $ShutterSpeed;
        get flash(): boolean;
        get lightLevel(): (number) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $CaptureParameters}.
     */
    export type $CaptureParameters_ = { fov?: (number) | undefined, cameraHolderId?: (number) | undefined, singleChannel?: ($ColorChannel_) | undefined, exposureId?: string, cameraId?: ($CameraId_) | undefined, filter?: ($ResourceLocation_) | undefined, projection?: ($Projection_) | undefined, cropFactor?: number, filmProperties?: $FilmProperties_, extraData?: $ExtraData,  } | [fov?: (number) | undefined, cameraHolderId?: (number) | undefined, singleChannel?: ($ColorChannel_) | undefined, exposureId?: string, cameraId?: ($CameraId_) | undefined, filter?: ($ResourceLocation_) | undefined, projection?: ($Projection_) | undefined, cropFactor?: number, filmProperties?: $FilmProperties_, extraData?: $ExtraData, ];
    export class $Projection extends $Record {
        mode(): $DitherMode;
        path(): string;
        static CODEC: $Codec<$Projection>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Projection>;
        constructor(path: string, mode: $DitherMode_);
    }
    /**
     * Values that may be interpreted as {@link $Projection}.
     */
    export type $Projection_ = { mode?: $DitherMode_, path?: string,  } | [mode?: $DitherMode_, path?: string, ];
}
