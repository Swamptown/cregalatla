import { $Logger } from "@package/org/slf4j";
import { $InetSocketAddress } from "@package/java/net";
import { $TicketSmuggler } from "@package/link/e4mc";

declare module "@package/net/minecraft/client/multiplayer/resolver" {
    export class $ResolvedServerAddress {
        static from(arg0: $InetSocketAddress): $ResolvedServerAddress;
    }
    export interface $ResolvedServerAddress {
        getHostIp(): string;
        asInetSocketAddress(): $InetSocketAddress;
        getHostName(): string;
        getPort(): number;
        get hostIp(): string;
        get hostName(): string;
        get port(): number;
    }
    export class $AddressCheck {
        static createFromService(): $AddressCheck;
    }
    export interface $AddressCheck {
        isAllowed(arg0: $ServerAddress): boolean;
        isAllowed(arg0: $ResolvedServerAddress): boolean;
    }
    export class $ServerNameResolver {
        resolveAddress(arg0: $ServerAddress): ($ResolvedServerAddress) | undefined;
        static DEFAULT: $ServerNameResolver;
        constructor(arg0: $ServerAddressResolver_, arg1: $ServerRedirectHandler_, arg2: $AddressCheck);
    }
    export class $ServerRedirectHandler {
        static createDnsSrvRedirectHandler(): $ServerRedirectHandler;
        static LOGGER: $Logger;
        static EMPTY: $ServerRedirectHandler;
    }
    export interface $ServerRedirectHandler {
        lookupRedirect(arg0: $ServerAddress): ($ServerAddress) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ServerRedirectHandler}.
     */
    export type $ServerRedirectHandler_ = ((arg0: $ServerAddress) => ($ServerAddress) | undefined);
    export class $ServerAddressResolver {
        static SYSTEM: $ServerAddressResolver;
        static LOGGER: $Logger;
    }
    export interface $ServerAddressResolver {
        resolve(arg0: $ServerAddress): ($ResolvedServerAddress) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ServerAddressResolver}.
     */
    export type $ServerAddressResolver_ = ((arg0: $ServerAddress) => ($ResolvedServerAddress) | undefined);
    export class $ServerAddress implements $TicketSmuggler {
        static isValidAddress(arg0: string): boolean;
        e4mc$setSmuggledTicket(ticket: string): void;
        e4mc$getSmuggledTicket(): string;
        static parsePort(arg0: string): number;
        static parseString(arg0: string): $ServerAddress;
        getHost(): string;
        getPort(): number;
        constructor(arg0: string, arg1: number);
        get host(): string;
        get port(): number;
    }
}
