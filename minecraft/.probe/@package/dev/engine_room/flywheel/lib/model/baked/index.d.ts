import { $ConcurrentMap } from "@package/java/util/concurrent";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $AccessorPartialModel } from "@package/com/railwayteam/railways/mixin/client";

declare module "@package/dev/engine_room/flywheel/lib/model/baked" {
    export class $PartialModel implements $AccessorPartialModel {
        static getALL$railways_$md$3b3139$0(): $ConcurrentMap<any, any>;
        static setPopulateOnInit$railways_$md$3b3139$1(arg0: boolean): void;
        static getPopulateOnInit$railways_$md$3b3139$2(): boolean;
        get(): $BakedModel;
        static of(modelLocation: $ResourceLocation_): $PartialModel;
        modelLocation(): $ResourceLocation;
        railways$setBakedModel(arg0: $BakedModel): void;
        static get ALL$railways_$md$3b3139$0(): $ConcurrentMap<any, any>;
        static set populateOnInit$railways_$md$3b3139$1(value: boolean);
        static get populateOnInit$railways_$md$3b3139$2(): boolean;
    }
}
