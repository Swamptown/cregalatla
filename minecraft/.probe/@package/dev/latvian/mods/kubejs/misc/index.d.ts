import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $MapCodec_, $Codec } from "@package/com/mojang/serialization";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $SoundsGenerator$SoundGen } from "@package/dev/latvian/mods/kubejs/client";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $MobEffect$AttributeTemplate, $MobEffectInstance, $MobEffectCategory_, $MobEffect } from "@package/net/minecraft/world/effect";
import { $SimpleParticleType, $ParticleOptions_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $Attribute, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $List_ } from "@package/java/util";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Registry, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/misc" {
    export class $PotionBuilder extends $BuilderBase<$Potion> {
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean): this;
        effect(effect: $Holder_<$MobEffect>): this;
        effect(effect: $Holder_<$MobEffect>, duration: number): this;
        addEffect(effect: $MobEffectInstance): this;
        registryKey: $ResourceKey<$Registry<$Potion>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $ParticleTypeBuilder extends $BuilderBase<$ParticleType<never>> {
        textures(textures: $List_<string>): this;
        texture(texture: string): this;
        streamCodec(s: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleOptions_>): this;
        codec(c: $MapCodec_<$ParticleOptions_>): this;
        overrideLimiter(o: boolean): this;
        registryKey: $ResourceKey<$Registry<$ParticleType<never>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $ComplexParticleType extends $ParticleType<$ParticleOptions> {
        constructor(builder: $ParticleTypeBuilder);
    }
    export class $MobEffectBuilder$EffectEntityCallback {
    }
    export interface $MobEffectBuilder$EffectEntityCallback {
        applyEffectTick(entity: $LivingEntity, level: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectBuilder$EffectEntityCallback}.
     */
    export type $MobEffectBuilder$EffectEntityCallback_ = ((entity: $LivingEntity, level: number) => void);
    export class $BasicMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(builder: $MobEffectBuilder);
    }
    export class $VillagerProfessionBuilder extends $BuilderBase<$VillagerProfession> {
        poiTypeTag(t: $ResourceLocation_): this;
        workSound(t: $SoundEvent_): this;
        secondaryPoi(t: $Block_[]): this;
        requestedItems(t: $Item_[]): this;
        poiType(t: $ResourceLocation_): this;
        registryKey: $ResourceKey<$Registry<$VillagerProfession>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $PoiTypeBuilder extends $BuilderBase<$PoiType> {
        block(r: $Block_): this;
        validRange(i: number): this;
        blocks(r: $BlockState_[]): this;
        maxTickets(i: number): this;
        registryKey: $ResourceKey<$Registry<$PoiType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $PaintingVariantBuilder extends $BuilderBase<$PaintingVariant> {
        size(width: number, height: number): this;
        assetId(assetId: $ResourceLocation_): this;
        registryKey: $ResourceKey<$Registry<$PaintingVariant>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $BasicParticleType extends $SimpleParticleType {
        getType(): $ParticleType<never>;
        constructor(bl: boolean);
        get type(): $ParticleType<never>;
    }
    export class $VillagerTypeBuilder extends $BuilderBase<$VillagerType> {
        registryKey: $ResourceKey<$Registry<$VillagerType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $MobEffectBuilder extends $BuilderBase<$MobEffect> {
        color(col: $KubeColor_): this;
        instant(): this;
        instant(instant: boolean): this;
        category(c: $MobEffectCategory_): this;
        harmful(): this;
        beneficial(): this;
        effectTick(effectTick: $MobEffectBuilder$EffectEntityCallback_): this;
        modifyAttribute(attribute: $ResourceLocation_, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): this;
        registryKey: $ResourceKey<$Registry<$MobEffect>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $CustomStatBuilder extends $BuilderBase<$ResourceLocation> {
        registryKey: $ResourceKey<$Registry<$ResourceLocation>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $SoundEventBuilder extends $BuilderBase<$SoundEvent> {
        sounds(gen: $Consumer_<$SoundsGenerator$SoundGen>): this;
        registryKey: $ResourceKey<$Registry<$SoundEvent>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
}
