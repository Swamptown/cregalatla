import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $SensorType, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $SpawnPlacements$Data, $EntityType } from "@package/net/minecraft/world/entity";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $SimpleParticleType } from "@package/net/minecraft/core/particles";
import { $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $Set_, $List, $Map, $Set } from "@package/java/util";
import { $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $ItemPropertyFunction } from "@package/net/minecraft/client/renderer/item";
import { $Supplier_ } from "@package/java/util/function";
import { $RepositorySource, $RepositorySource_ } from "@package/net/minecraft/server/packs/repository";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blackgear/platform/core/mixin/access" {
    export class $ItemPropertiesAccessor {
        static getGENERIC_PROPERTIES(): $Map<$ResourceLocation, $ItemPropertyFunction>;
        static get GENERIC_PROPERTIES(): $Map<$ResourceLocation, $ItemPropertyFunction>;
    }
    export interface $ItemPropertiesAccessor {
    }
    export class $SimpleParticleTypeAccessor {
        static createSimpleParticleType(overrideLimiter: boolean): $SimpleParticleType;
    }
    export interface $SimpleParticleTypeAccessor {
    }
    export class $SpawnPlacementsAccessor {
        static getDATA_BY_TYPE(): $Map<$EntityType<never>, $SpawnPlacements$Data>;
        static get DATA_BY_TYPE(): $Map<$EntityType<never>, $SpawnPlacements$Data>;
    }
    export interface $SpawnPlacementsAccessor {
    }
    export class $CameraAccessor {
    }
    export interface $CameraAccessor {
        getLevel(): $BlockGetter;
        get level(): $BlockGetter;
    }
    /**
     * Values that may be interpreted as {@link $CameraAccessor}.
     */
    export type $CameraAccessor_ = (() => $BlockGetter);
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        getNarratables(): $List<$NarratableEntry>;
        getRenderables(): $List<$Renderable>;
        callAddRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        callAddRenderableOnly<T extends $Renderable>(arg0: T): T;
        callAddWidget<T extends $GuiEventListener>(arg0: T): T;
        get narratables(): $List<$NarratableEntry>;
        get renderables(): $List<$Renderable>;
    }
    export class $PackRepositoryAccessor {
    }
    export interface $PackRepositoryAccessor {
        getSources(): $Set<$RepositorySource>;
        setSources(arg0: $Set_<$RepositorySource_>): void;
    }
    export class $SensorTypeAccessor {
        static createSensorType<T extends $Sensor<never>>(supplier: $Supplier_<T>): $SensorType<T>;
    }
    export interface $SensorTypeAccessor {
    }
    export class $ActivityAccessor {
        static createActivity(name: string): $Activity;
    }
    export interface $ActivityAccessor {
    }
    export class $LevelResourceAccessor {
        static createLevelResource(string: string): $LevelResource;
    }
    export interface $LevelResourceAccessor {
    }
    export class $NearPlaneAccessor {
    }
    export interface $NearPlaneAccessor {
        getForward(): $Vec3;
        get forward(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $NearPlaneAccessor}.
     */
    export type $NearPlaneAccessor_ = (() => $Vec3_);
}
