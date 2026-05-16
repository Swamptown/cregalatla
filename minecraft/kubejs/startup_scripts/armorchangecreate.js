ItemEvents.modification(event => {
    event.modify("create_sa:andesite_exoskeleton_chestplate", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 6, id: 'minecraft:armor.chestplate', operation: 'add_value'}, 'chest'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("create_sa:brass_exoskeleton_chestplate", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 6, id: 'minecraft:armor.chestplate', operation: 'add_value'}, 'chest'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("create_sa:netherite_jetpack_chestplate", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 6, id: 'minecraft:armor.chestplate', operation: 'add_value'}, 'chest'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("create:netherite_diving_boots", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 2, id: 'minecraft:armor.boots', operation: 'add_value'}, 'feet'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("create:netherite_diving_helmet", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 2, id: 'minecraft:armor.helmet', operation: 'add_value'}, 'head'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
    event.modify("create_sa:brass_chestplate", item => {
        let modifiedAttributeModifer = Item.of(item.item().id).attributeModifiers
            .withModifierAdded('generic.armor',
                {amount: 6, id: 'minecraft:armor.chestplate', operation: 'add_value'}, 'chest'
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifer.modifiers())
        })
})