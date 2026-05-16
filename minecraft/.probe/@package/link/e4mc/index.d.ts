
declare module "@package/link/e4mc" {
    export class $TicketSmuggler {
    }
    export interface $TicketSmuggler {
        e4mc$setSmuggledTicket(arg0: string): void;
        e4mc$getSmuggledTicket(): string;
    }
    export class $DialtoneConnectionExtensions {
    }
    export interface $DialtoneConnectionExtensions {
        e4mc$exportKeyingMaterial(arg0: number[], arg1: number[], arg2: number): number[];
    }
    /**
     * Values that may be interpreted as {@link $DialtoneConnectionExtensions}.
     */
    export type $DialtoneConnectionExtensions_ = ((arg0: number[], arg1: number[], arg2: number) => number[]);
}
