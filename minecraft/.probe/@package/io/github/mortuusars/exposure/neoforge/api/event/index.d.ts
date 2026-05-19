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
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCamera(): $ItemStack;
        getFrame(): $Frame;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>);
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get entitiesInFrame(): $List<$LivingEntity>;
        get camera(): $ItemStack;
        get frame(): $Frame;
    }
    export class $ModifyFrameExtraDataEvent extends $Event {
        getPositionsInFrame(): $List<$BlockPos>;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getCaptureProperties(): $CaptureParameters;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCamera(): $ItemStack;
        getData(): $ExtraData;
        constructor(cameraHolder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>, data: $ExtraData);
        get positionsInFrame(): $List<$BlockPos>;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get captureProperties(): $CaptureParameters;
        get entitiesInFrame(): $List<$LivingEntity>;
        get camera(): $ItemStack;
        get data(): $ExtraData;
    }
    export class $ModifyEntityInFrameDataEvent extends $Event {
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getEntityInFrame(): $LivingEntity;
        getCamera(): $ItemStack;
        getData(): $ExtraData;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, entityInFrame: $LivingEntity, data: $ExtraData);
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get entityInFrame(): $LivingEntity;
        get camera(): $ItemStack;
        get data(): $ExtraData;
    }
}
