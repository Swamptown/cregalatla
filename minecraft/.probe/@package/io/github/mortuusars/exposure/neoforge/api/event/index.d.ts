import { $ExtraData } from "@package/io/github/mortuusars/exposure/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CaptureParameters, $CaptureParameters_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";

declare module "@package/io/github/mortuusars/exposure/neoforge/api/event" {
    export class $FrameAddedEvent extends $Event {
        getFrame(): $Frame;
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCamera(): $ItemStack;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>);
        get frame(): $Frame;
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get entitiesInFrame(): $List<$LivingEntity>;
        get camera(): $ItemStack;
    }
    export class $ModifyFrameExtraDataEvent extends $Event {
        getData(): $ExtraData;
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getCaptureProperties(): $CaptureParameters;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCamera(): $ItemStack;
        constructor(cameraHolder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>, data: $ExtraData);
        get data(): $ExtraData;
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get captureProperties(): $CaptureParameters;
        get entitiesInFrame(): $List<$LivingEntity>;
        get camera(): $ItemStack;
    }
    export class $ModifyEntityInFrameDataEvent extends $Event {
        getData(): $ExtraData;
        getEntityInFrame(): $LivingEntity;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getCamera(): $ItemStack;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, entityInFrame: $LivingEntity, data: $ExtraData);
        get data(): $ExtraData;
        get entityInFrame(): $LivingEntity;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get camera(): $ItemStack;
    }
}
