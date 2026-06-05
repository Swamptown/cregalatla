import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $Codec } from "@package/com/mojang/serialization";
import { $OptionInstance$ValueSet } from "@package/net/minecraft/client";

declare module "@package/de/johni0702/minecraft/bobby/mixin" {
    export class $BiomeManagerAccessor {
    }
    export interface $BiomeManagerAccessor {
        getBiomeZoomSeed(): number;
        get biomeZoomSeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManagerAccessor}.
     */
    export type $BiomeManagerAccessor_ = (() => number);
    export class $ClientLevelAccessor {
    }
    export interface $ClientLevelAccessor {
        getConnection(): $ClientPacketListener;
        get connection(): $ClientPacketListener;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelAccessor}.
     */
    export type $ClientLevelAccessor_ = (() => $ClientPacketListener);
    export class $OptionInstanceIntRangeAccessor {
    }
    export interface $OptionInstanceIntRangeAccessor {
        setMaxInclusive(arg0: number): void;
        set maxInclusive(value: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstanceIntRangeAccessor}.
     */
    export type $OptionInstanceIntRangeAccessor_ = ((arg0: number) => void);
    export class $OptionInstanceAccessor<T> {
    }
    export interface $OptionInstanceAccessor<T> {
        setValues(arg0: $OptionInstance$ValueSet<T>): void;
        setCodec(arg0: $Codec<T>): void;
        set values(value: $OptionInstance$ValueSet<T>);
        set codec(value: $Codec<T>);
    }
}
