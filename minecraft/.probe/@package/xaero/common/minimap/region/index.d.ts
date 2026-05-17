import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        isHasSomething(): boolean;
        isChanged(): boolean;
        updateBuffers(arg0: number, arg1: number[][]): void;
        setLevelsBuffered(arg0: number): void;
        recycleTiles(): void;
        getLevelsBuffered(): number;
        setBlockTextureUpload(arg0: boolean): void;
        getGlTexture(arg0: number): number;
        setGlTexture(arg0: number, arg1: number): void;
        isRefreshRequired(arg0: number): boolean;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        setHasSomething(arg0: boolean): void;
        getLevelToRefresh(arg0: number): number;
        isBlockTextureUpload(): boolean;
        getX(): number;
        getZ(): number;
        bindTexture(arg0: number): number;
        setChanged(arg0: boolean): void;
        getTile(arg0: number, arg1: number): $MinimapTile;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isChunkGrid(): boolean;
        recycle(): void;
        isHasSomething(): boolean;
        setWasTransfered(arg0: boolean): void;
        setHasSomething(arg0: boolean): void;
        getHighlightVersion(): number;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setHighlightVersion(arg0: number): void;
        hasTerrain(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        setSuccess(arg0: boolean): void;
        isWasTransfered(): boolean;
        getX(): number;
        getZ(): number;
        isSuccess(): boolean;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        getHighlights(): number[];
        getHeight(arg0: number, arg1: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get chunkGrid(): boolean;
        get x(): number;
        get z(): number;
    }
}
