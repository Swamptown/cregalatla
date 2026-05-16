import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        constructor(arg0: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        write(arg0: $CompoundTag_): void;
        getSize(): number;
        static read(arg0: $DynamicLike<never>, arg1: $WorldBorder$Settings): $WorldBorder$Settings;
        getWarningTime(): number;
        getWarningBlocks(): number;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        getDamagePerBlock(): number;
        getCenterX(): number;
        getCenterZ(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
        constructor(arg0: $WorldBorder);
        get size(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get safeZone(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
        get damagePerBlock(): number;
        get centerX(): number;
        get centerZ(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        update(): $WorldBorder$BorderExtent;
        getSize(): number;
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        onCenterChange(): void;
        getLerpRemainingTime(): number;
        getLerpTarget(): number;
        onAbsoluteMaxSizeChange(): void;
        getLerpSpeed(): number;
        getMinX(): number;
        getStatus(): $BorderStatus;
        getCollisionShape(): $VoxelShape;
        get size(): number;
        get maxX(): number;
        get minZ(): number;
        get maxZ(): number;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get minX(): number;
        get status(): $BorderStatus;
        get collisionShape(): $VoxelShape;
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        tick(): void;
        setSize(arg0: number): void;
        setAbsoluteMaxSize(arg0: number): void;
        clampToBounds(arg0: $BlockPos_): $BlockPos;
        clampToBounds(arg0: $Vec3_): $BlockPos;
        clampToBounds(arg0: number, arg1: number, arg2: number): $BlockPos;
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        handler$fld000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        setCenter(arg0: number, arg1: number): void;
        getLerpRemainingTime(): number;
        getLerpTarget(): number;
        lerpSizeBetween(arg0: number, arg1: number, arg2: number): void;
        getAbsoluteMaxSize(): number;
        setDamageSafeZone(arg0: number): void;
        setDamagePerBlock(arg0: number): void;
        getLerpSpeed(): number;
        getWarningTime(): number;
        setWarningTime(arg0: number): void;
        getWarningBlocks(): number;
        setWarningBlocks(arg0: number): void;
        wrapOperation$dcf000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        createSettings(): $WorldBorder$Settings;
        applySettings(arg0: $WorldBorder$Settings): void;
        handler$fld000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getMinX(): number;
        removeListener(arg0: $BorderChangeListener): void;
        getListeners(): $List<$BorderChangeListener>;
        addListener(arg0: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        isWithinBounds(arg0: $ChunkPos): boolean;
        isWithinBounds(arg0: number, arg1: number): boolean;
        isWithinBounds(arg0: number, arg1: number, arg2: number): boolean;
        isWithinBounds(arg0: $Vec3_): boolean;
        isWithinBounds(arg0: $AABB_): boolean;
        isWithinBounds(arg0: $BlockPos_): boolean;
        getDistanceToBorder(arg0: $Entity): number;
        getDistanceToBorder(arg0: number, arg1: number): number;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        getCollisionShape(): $VoxelShape;
        isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        sable$setLevel(arg0: $Level_): void;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get maxX(): number;
        get minZ(): number;
        get maxZ(): number;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get minX(): number;
        get listeners(): $List<$BorderChangeListener>;
        get status(): $BorderStatus;
        get collisionShape(): $VoxelShape;
        get centerX(): number;
        get centerZ(): number;
    }
}
