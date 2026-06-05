import { $ContentHandler, $ErrorHandler } from "@package/org/xml/sax";
import { $LSResourceResolver, $LSResourceResolver_ } from "@package/org/w3c/dom/ls";
import { $Object } from "@package/java/lang";
import { $Source, $Result } from "@package/javax/xml/transform";
import { $TypeInfo } from "@package/org/w3c/dom";

declare module "@package/javax/xml/validation" {
    export class $ValidatorHandler implements $ContentHandler {
        setResourceResolver(arg0: $LSResourceResolver_): void;
        getResourceResolver(): $LSResourceResolver;
        getTypeInfoProvider(): $TypeInfoProvider;
        getContentHandler(): $ContentHandler;
        getFeature(arg0: string): boolean;
        setErrorHandler(arg0: $ErrorHandler): void;
        getErrorHandler(): $ErrorHandler;
        setContentHandler(arg0: $ContentHandler): void;
        getProperty(arg0: string): $Object;
        setProperty(arg0: string, arg1: $Object): void;
        setFeature(arg0: string, arg1: boolean): void;
        declaration(arg0: string, arg1: string, arg2: string): void;
        get typeInfoProvider(): $TypeInfoProvider;
    }
    export class $TypeInfoProvider {
        getElementTypeInfo(): $TypeInfo;
        getAttributeTypeInfo(arg0: number): $TypeInfo;
        isIdAttribute(arg0: number): boolean;
        isSpecified(arg0: number): boolean;
        get elementTypeInfo(): $TypeInfo;
    }
    export class $Schema {
        newValidatorHandler(): $ValidatorHandler;
        newValidator(): $Validator;
    }
    export class $Validator {
        setResourceResolver(arg0: $LSResourceResolver_): void;
        getResourceResolver(): $LSResourceResolver;
        getFeature(arg0: string): boolean;
        setErrorHandler(arg0: $ErrorHandler): void;
        getErrorHandler(): $ErrorHandler;
        reset(): void;
        getProperty(arg0: string): $Object;
        validate(arg0: $Source, arg1: $Result): void;
        validate(arg0: $Source): void;
        setProperty(arg0: string, arg1: $Object): void;
        setFeature(arg0: string, arg1: boolean): void;
    }
}
