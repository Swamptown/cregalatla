import { $File_, $File } from "@package/java/io";
import { $Predicate_, $Consumer_ } from "@package/java/util/function";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $List, $List_ } from "@package/java/util";
import { $Runnable_, $Runnable } from "@package/java/lang";
import { $Tuple } from "@package/net/minecraft/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/util" {
    export class $FileNode implements $ITreeNode<$File, void> {
        setValid(arg0: $Predicate_<$FileNode>): $FileNode;
        isLeaf(): boolean;
        getChildren(): $List<$FileNode>;
        getDimension(): number;
        getParent(): $FileNode;
        getSiblingIndex(): number;
        isBranch(): boolean;
        getChild(arg0: $File_): $ITreeNode<$File, void>;
        flatten(): $List<$ITreeNode<$File, void>>;
        getKey(): $File;
        getContent(): void;
        parent: $FileNode;
        dimension: number;
        key: $File;
        constructor(arg0: $File_);
        set valid(value: $Predicate_<$FileNode>);
        get leaf(): boolean;
        get children(): $List<$FileNode>;
        get siblingIndex(): number;
        get branch(): boolean;
        get content(): void;
    }
    export class $TreeNode<T, K> implements $ITreeNode<T, K> {
        addContent(arg0: T, arg1: K): void;
        getOrCreateChild(arg0: T): $TreeNode<T, K>;
        removeChild(arg0: T): void;
        removeChild(arg0: $TreeNode<T, K>): void;
        setValid(arg0: $Predicate_<$TreeNode<T, K>>): $TreeNode<T, K>;
        getChildren(): $List<$TreeNode<T, K>>;
        getDimension(): number;
        createChild(arg0: T): $TreeNode<T, K>;
        getKey(): T;
        getParent(): $TreeNode<T, K>;
        getContent(): K;
        getSiblingIndex(): number;
        isBranch(): boolean;
        getChild(arg0: T): $ITreeNode<T, K>;
        isLeaf(): boolean;
        flatten(): $List<$ITreeNode<T, K>>;
        parent: $TreeNode<T, K>;
        dimension: number;
        constructor(arg0: T);
        constructor(arg0: $TreeNode<T, K>, arg1: number, arg2: T);
        set valid(value: $Predicate_<$TreeNode<T, K>>);
        get children(): $List<$TreeNode<T, K>>;
        get key(): T;
        get content(): K;
        get siblingIndex(): number;
        get branch(): boolean;
        get leaf(): boolean;
    }
    export class $TreeBuilder<K, V> {
        endBranch(): $TreeBuilder<K, V>;
        diveBranch(arg0: $List_<K>, arg1: $Consumer_<$TreeBuilder<K, V>>): $TreeBuilder<K, V>;
        startBranch(arg0: K): $TreeBuilder<K, V>;
        branch(arg0: K, arg1: $Consumer_<$TreeBuilder<K, V>>): $TreeBuilder<K, V>;
        remove(arg0: K): $TreeBuilder<K, V>;
        isEmpty(): boolean;
        static start<K, V>(arg0: K): $TreeBuilder<K, V>;
        peek(): $ITreeNode<K, V>;
        build(): $TreeNode<K, V>;
        content(arg0: V): $TreeBuilder<K, V>;
        leaf(arg0: K, arg1: V): $TreeBuilder<K, V>;
        constructor(arg0: K);
        get empty(): boolean;
    }
    export class $TreeBuilder$Menu extends $TreeBuilder<$Tuple<$IGuiTexture, $Component>, $Runnable> {
        static uiProvider(arg0: $Tuple<$IGuiTexture_, $Component_>): $UIElement;
        static hoverTextureProvider(arg0: $ITreeNode<$Tuple<$IGuiTexture_, $Component_>, $Runnable_>): $IGuiTexture;
        static isCrossLine(arg0: $Tuple<$IGuiTexture_, $Component_>): boolean;
        crossLine(): $TreeBuilder$Menu;
        branch(arg0: $IGuiTexture_, arg1: string, arg2: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $Component_, arg1: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: string, arg1: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        branch(arg0: $IGuiTexture_, arg1: $Component_, arg2: $Consumer_<$TreeBuilder$Menu>): $TreeBuilder$Menu;
        static getName(arg0: $Tuple<$IGuiTexture_, $Component_>): $Component;
        remove(arg0: string): $TreeBuilder$Menu;
        remove(arg0: $Component_): $TreeBuilder$Menu;
        static start(): $TreeBuilder$Menu;
        static handle(arg0: $ITreeNode<$Tuple<$IGuiTexture_, $Component_>, $Runnable_>): void;
        static getIcon(arg0: $Tuple<$IGuiTexture_, $Component_>): $IGuiTexture;
        leaf(arg0: $Component_, arg1: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $IGuiTexture_, arg1: string, arg2: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: $IGuiTexture_, arg1: $Component_, arg2: $Runnable_): $TreeBuilder$Menu;
        leaf(arg0: string, arg1: $Runnable_): $TreeBuilder$Menu;
        static CROSS_LINE: $Tuple<$IGuiTexture, $Component>;
    }
    export class $ITickable {
    }
    export interface $ITickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $ITickable}.
     */
    export type $ITickable_ = (() => void);
    export class $ITreeNode<KEY, CONTENT> {
    }
    export interface $ITreeNode<KEY, CONTENT> {
        getSiblingIndex(): number;
        isBranch(): boolean;
        getChild(arg0: KEY): $ITreeNode<KEY, CONTENT>;
        isLeaf(): boolean;
        getChildren(): $List<$ITreeNode<KEY, CONTENT>>;
        getDimension(): number;
        flatten(): $List<$ITreeNode<KEY, CONTENT>>;
        getKey(): KEY;
        getParent(): $ITreeNode<KEY, CONTENT>;
        getContent(): CONTENT;
        get siblingIndex(): number;
        get branch(): boolean;
        get leaf(): boolean;
        get children(): $List<$ITreeNode<KEY, CONTENT>>;
        get dimension(): number;
        get key(): KEY;
        get parent(): $ITreeNode<KEY, CONTENT>;
        get content(): CONTENT;
    }
}
