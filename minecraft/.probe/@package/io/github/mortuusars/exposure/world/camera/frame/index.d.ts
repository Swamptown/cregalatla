import { $ExtraData$Type_, $ExtraData, $ExtraData$Type } from "@package/io/github/mortuusars/exposure/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $ExposureType_, $ColorChannel, $ExposureType } from "@package/io/github/mortuusars/exposure/world/camera";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ExposureIdentifier } from "@package/io/github/mortuusars/exposure/world/level/storage";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ShutterSpeed } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/frame" {
    export class $Frame$Mutable {
        getPhotographer(): $Photographer;
        setChromatic(chromatic: boolean): $Frame$Mutable;
        setIdentifier(identifier: $ExposureIdentifier): $Frame$Mutable;
        setPhotographer(photographer: $Photographer): $Frame$Mutable;
        setEntitiesInFrame(entitiesInFrame: $List_<$EntityInFrame_>): $Frame$Mutable;
        addExtraData<T>(type: $ExtraData$Type_<T>, value: T): $Frame$Mutable;
        updateExtraData(updater: $Consumer_<$ExtraData>): $Frame$Mutable;
        getEntitiesInFrame(): $List<$EntityInFrame>;
        getIdentifier(): $ExposureIdentifier;
        getTag(): $ExtraData;
        setType(type: $ExposureType_): $Frame$Mutable;
        getType(): $ExposureType;
        toImmutable(): $Frame;
        setTag(tag: $ExtraData): $Frame$Mutable;
        constructor(photographData: $Frame_);
        set chromatic(value: boolean);
    }
    export class $Frame extends $Record {
        photographer(): $Photographer;
        toMutable(): $Frame$Mutable;
        entitiesInFrame(): $List<$EntityInFrame>;
        isTakenBy(entity: $LivingEntity): boolean;
        getExtraDataForReading(): $ExtraData;
        isProjected(): boolean;
        isChromatic(): boolean;
        getColorChannel(): ($ColorChannel) | undefined;
        wasTakenWithChromaticFilter(): boolean;
        extraData(): $ExtraData;
        static intersect(identifier: $ExposureIdentifier, frames: $List_<$Frame_>): $Frame;
        identifier(): $ExposureIdentifier;
        type(): $ExposureType;
        static create(): $Frame$Mutable;
        static WEATHER: $ExtraData$Type<string>;
        static CODEC: $Codec<$Frame>;
        static BIOME: $ExtraData$Type<$ResourceLocation>;
        static LIGHT_LEVEL: $ExtraData$Type<number>;
        static SHUTTER_SPEED: $ExtraData$Type<$ShutterSpeed>;
        static FOCAL_LENGTH: $ExtraData$Type<number>;
        static PITCH: $ExtraData$Type<number>;
        static FLASH: $ExtraData$Type<boolean>;
        static ON_STAND: $ExtraData$Type<boolean>;
        static YAW: $ExtraData$Type<number>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Frame>;
        static UNDERWATER: $ExtraData$Type<boolean>;
        static POSITION: $ExtraData$Type<$Vec3>;
        static STRUCTURES: $ExtraData$Type<$List<$ResourceLocation>>;
        static DIMENSION: $ExtraData$Type<$ResourceLocation>;
        static DAY_TIME: $ExtraData$Type<number>;
        static TIMESTAMP: $ExtraData$Type<number>;
        static PROJECTED: $ExtraData$Type<boolean>;
        static COLOR_CHANNEL: $ExtraData$Type<$ColorChannel>;
        static SELFIE: $ExtraData$Type<boolean>;
        static IN_CAVE: $ExtraData$Type<boolean>;
        static EMPTY: $Frame;
        static CHROMATIC: $ExtraData$Type<boolean>;
        constructor(identifier: $ExposureIdentifier, type: $ExposureType_, photographer: $Photographer, entitiesInFrame: $List_<$EntityInFrame_>, extraData: $ExtraData);
        get extraDataForReading(): $ExtraData;
        get projected(): boolean;
        get chromatic(): boolean;
        get colorChannel(): ($ColorChannel) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Frame}.
     */
    export type $Frame_ = { identifier?: $ExposureIdentifier, extraData?: $ExtraData, entitiesInFrame?: $List_<$EntityInFrame_>, type?: $ExposureType_, photographer?: $Photographer,  } | [identifier?: $ExposureIdentifier, extraData?: $ExtraData, entitiesInFrame?: $List_<$EntityInFrame_>, type?: $ExposureType_, photographer?: $Photographer, ];
    export class $Photographer {
        isPlayer(): boolean;
        isNPC(): boolean;
        name(): string;
        isEmpty(): boolean;
        matches(entity: $Entity): boolean;
        uuid(): $UUID;
        static CODEC: $Codec<$Photographer>;
        static EMPTY: $Photographer;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Photographer>;
        constructor(cameraHolder: $CameraHolder);
        get player(): boolean;
        get NPC(): boolean;
        get empty(): boolean;
    }
    export class $EntityInFrame extends $Record {
        extraData(): $ExtraData;
        name(): string;
        static of(cameraHolder: $Entity, entity: $Entity): $EntityInFrame;
        static of(cameraHolder: $Entity, entity: $Entity, data: $Consumer_<$ExtraData>): $EntityInFrame;
        static of(cameraHolder: $Entity, entity: $Entity, extraData: $ExtraData): $EntityInFrame;
        id(): $ResourceLocation;
        pos(): $BlockPos;
        distance(): number;
        static CODEC: $Codec<$EntityInFrame>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $EntityInFrame>;
        constructor(id: $ResourceLocation_, name: string, pos: $BlockPos_, distance: number, extraData: $ExtraData);
    }
    /**
     * Values that may be interpreted as {@link $EntityInFrame}.
     */
    export type $EntityInFrame_ = { distance?: number, extraData?: $ExtraData, name?: string, pos?: $BlockPos_, id?: $ResourceLocation_,  } | [distance?: number, extraData?: $ExtraData, name?: string, pos?: $BlockPos_, id?: $ResourceLocation_, ];
}
