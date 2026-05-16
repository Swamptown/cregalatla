import { $ModdedNetworkQueryComponent_ } from "@package/net/neoforged/neoforge/network/payload";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PayloadRegistration_ } from "@package/net/neoforged/neoforge/network/registration";
import { $PacketFlow, $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/negotiation" {
    export class $NetworkComponentNegotiator$ComponentNegotiationResult extends $Record {
        success(): boolean;
        failureReason(): $Component;
        constructor(success: boolean, failureReason: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $NetworkComponentNegotiator$ComponentNegotiationResult}.
     */
    export type $NetworkComponentNegotiator$ComponentNegotiationResult_ = { success?: boolean, failureReason?: $Component_,  } | [success?: boolean, failureReason?: $Component_, ];
    export class $NegotiableNetworkComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        optional(): boolean;
        flow(): ($PacketFlow) | undefined;
        constructor(id: $ResourceLocation_, version: string, flow: ($PacketFlow_) | undefined, optional: boolean);
        constructor(arg0: $ModdedNetworkQueryComponent_);
        constructor(arg0: $PayloadRegistration_<never>);
    }
    /**
     * Values that may be interpreted as {@link $NegotiableNetworkComponent}.
     */
    export type $NegotiableNetworkComponent_ = { version?: string, optional?: boolean, flow?: ($PacketFlow_) | undefined, id?: $ResourceLocation_,  } | [version?: string, optional?: boolean, flow?: ($PacketFlow_) | undefined, id?: $ResourceLocation_, ];
    export class $NegotiationResult extends $Record {
        failureReasons(): $Map<$ResourceLocation, $Component>;
        components(): $List<$NegotiatedNetworkComponent>;
        success(): boolean;
        constructor(components: $List_<$NegotiatedNetworkComponent_>, success: boolean, failureReasons: $Map_<$ResourceLocation_, $Component_>);
    }
    /**
     * Values that may be interpreted as {@link $NegotiationResult}.
     */
    export type $NegotiationResult_ = { success?: boolean, components?: $List_<$NegotiatedNetworkComponent_>, failureReasons?: $Map_<$ResourceLocation_, $Component_>,  } | [success?: boolean, components?: $List_<$NegotiatedNetworkComponent_>, failureReasons?: $Map_<$ResourceLocation_, $Component_>, ];
    export class $NetworkComponentNegotiator {
        static negotiate(arg0: $List_<$NegotiableNetworkComponent_>, arg1: $List_<$NegotiableNetworkComponent_>): $NegotiationResult;
        static validateComponent(arg0: $NegotiableNetworkComponent_, arg1: $NegotiableNetworkComponent_, arg2: string): ($NetworkComponentNegotiator$ComponentNegotiationResult) | undefined;
        constructor();
    }
    export class $NegotiatedNetworkComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, version: string);
    }
    /**
     * Values that may be interpreted as {@link $NegotiatedNetworkComponent}.
     */
    export type $NegotiatedNetworkComponent_ = { version?: string, id?: $ResourceLocation_,  } | [version?: string, id?: $ResourceLocation_, ];
}
