import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum, $Record } from "@package/java/lang";
import { $DirectionalAnalogSnapshot } from "@package/com/example/createthrusters/lib/control";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/example/createthrusters/content/navigation" {
    export class $NavigationTableExtensionAccess$RunState extends $Enum<$NavigationTableExtensionAccess$RunState> {
        static values(): $NavigationTableExtensionAccess$RunState[];
        static valueOf(arg0: string): $NavigationTableExtensionAccess$RunState;
        static PAUSED: $NavigationTableExtensionAccess$RunState;
        static RUNNING: $NavigationTableExtensionAccess$RunState;
        static IDLE: $NavigationTableExtensionAccess$RunState;
    }
    /**
     * Values that may be interpreted as {@link $NavigationTableExtensionAccess$RunState}.
     */
    export type $NavigationTableExtensionAccess$RunState_ = "idle" | "running" | "paused";
    export class $NavigationTableExtensionAccess {
        static SLOT_COUNT: number;
    }
    export interface $NavigationTableExtensionAccess {
        ct$getSelectedSlot(): number;
        ct$getMapInSlot(arg0: number): $ItemStack;
        ct$setMapInSlot(arg0: number, arg1: $ItemStack_): void;
        ct$setMapInSlot(arg0: number, arg1: $ItemStack_, arg2: $Player): void;
        ct$getRunState(): $NavigationTableExtensionAccess$RunState;
        ct$stopNavigation(): void;
        ct$setSelectedSlot(arg0: number): void;
        ct$getResolvedTarget(arg0: number): $NavigationTableMapResolver$ResolvedTarget;
        ct$pauseNavigation(): void;
        ct$getTargetLabel(): string;
        ct$getRelativeAngleDeg(): number;
        ct$getDirectionalSnapshot(): $DirectionalAnalogSnapshot;
        ct$startNavigation(): void;
    }
    export class $NavigationTableMapResolver$ResolvedTarget extends $Record {
        bannerTarget(): boolean;
        slotIndex(): number;
        label(): string;
        distanceSquared(): number;
        targetPos(): $Vec3;
        constructor(slotIndex: number, targetPos: $Vec3_, label: string, bannerTarget: boolean, distanceSquared: number);
    }
    /**
     * Values that may be interpreted as {@link $NavigationTableMapResolver$ResolvedTarget}.
     */
    export type $NavigationTableMapResolver$ResolvedTarget_ = { targetPos?: $Vec3_, bannerTarget?: boolean, label?: string, slotIndex?: number, distanceSquared?: number,  } | [targetPos?: $Vec3_, bannerTarget?: boolean, label?: string, slotIndex?: number, distanceSquared?: number, ];
}
