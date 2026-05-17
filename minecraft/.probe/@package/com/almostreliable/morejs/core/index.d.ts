import { $EventGroup, $EventHandler } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/com/almostreliable/morejs/core" {
    export class $Events {
        static VILLAGER_TRADING: $EventHandler;
        static ENCHANTMENT_TABLE_ENCHANT: $EventHandler;
        static STRUCTURE_AFTER_PLACE: $EventHandler;
        static PIGLIN_PLAYER_BEHAVIOR: $EventHandler;
        static XP_CHANGE: $EventHandler;
        static IS_ENCHANTABLE: $EventHandler;
        static ENCHANTMENT_TABLE_TOOLTIP: $EventHandler;
        static POST_UPDATE_OFFERS: $EventHandler;
        static GROUP: $EventGroup;
        static PLAYER_START_TRADING: $EventHandler;
        static POTION_BREWING_REGISTER: $EventHandler;
        static WANDERING_TRADING: $EventHandler;
        static TELEPORT: $EventHandler;
        static ENCHANTMENT_TABLE_CHANGED: $EventHandler;
        static UPDATE_OFFER: $EventHandler;
        static STRUCTURE_LOAD: $EventHandler;
    }
    export interface $Events {
    }
}
