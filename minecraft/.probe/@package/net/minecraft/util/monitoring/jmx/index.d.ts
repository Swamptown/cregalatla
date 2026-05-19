import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MBeanInfo, $DynamicMBean, $AttributeList, $Attribute } from "@package/javax/management";
import { $Object } from "@package/java/lang";

declare module "@package/net/minecraft/util/monitoring/jmx" {
    export class $MinecraftServerStatistics implements $DynamicMBean {
        static registerJmxMonitoring(arg0: $MinecraftServer): void;
        getMBeanInfo(): $MBeanInfo;
        setAttributes(arg0: $AttributeList): $AttributeList;
        getAttribute(arg0: string): $Object;
        setAttribute(arg0: $Attribute): void;
        invoke(arg0: string, arg1: $Object[], arg2: string[]): $Object;
        getAttributes(arg0: string[]): $AttributeList;
        get MBeanInfo(): $MBeanInfo;
    }
    export class $MinecraftServerStatistics$AttributeDescription {
    }
}
