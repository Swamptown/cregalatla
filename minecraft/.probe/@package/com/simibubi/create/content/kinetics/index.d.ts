import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FlywheelAccessibleKineticNetwork } from "@package/com/kipti/bnb/mixin_accessor";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork implements $FlywheelAccessibleKineticNetwork {
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        getSize(): number;
        sync(): void;
        calculateCapacity(): number;
        updateCapacity(): void;
        handler$bia000$bits_n_bobs$addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$bia000$bits_n_bobs$add(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        handler$bia000$bits_n_bobs$remove(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        calculateStress(): number;
        handler$bia000$bits_n_bobs$updateNetworkHead(arg0: $CallbackInfo): void;
        redirect$dgg000$simulated$extraKineticsCapacity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        redirect$dgg000$simulated$extraKineticsStress(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        bits_n_bobs$getFlywheelStressAbsoptionCapacity(): number;
        bits_n_bobs$getFlywheelStressReleaseCapacity(): number;
        bits_n_bobs$updateFlywheelStresses(): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
    }
}
