# MoreJS.villagerTrades

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: VillagerTradingEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| forEachTrades | List<Holder<VillagerProfession>>, IntRange, Consumer<List<VillagerTrades$ItemListing>> |  | void | ✘ |
| forEachTrades | VillagerTradingEventJS$ForEachCallback |  | void | ✘ |
| removeVanillaTypedTrades |  |  | void | ✘ |
| removeVanillaTypedTrades | List<Holder<VillagerProfession>> |  | void | ✘ |
| removeVanillaTypedTrades | List<Holder<VillagerProfession>>, IntRange |  | void | ✘ |
| removeModdedTypedTrades |  |  | void | ✘ |
| removeModdedTypedTrades | List<Holder<VillagerProfession>> |  | void | ✘ |
| removeModdedTypedTrades | List<Holder<VillagerProfession>>, IntRange |  | void | ✘ |
| addCustomTrade | Holder<VillagerProfession>, int, TransformableTrade$Transformer |  | void | ✘ |
| removeTrades | TradeFilter |  | void | ✘ |
| getTrades | Holder<VillagerProfession>, int |  | List<VillagerTrades$ItemListing> | ✘ |
| addTrade | Holder<VillagerProfession>, int, TradeItem;, TradeItem |  | SimpleTrade | ✘ |
| addTrade | Holder<VillagerProfession>, int, T extends VillagerTrades$ItemListing |  | T extends VillagerTrades$ItemListing | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `Object exit(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Context var0)`

  Parameters:
  - var0: Context

```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Context var0, Object var1)`

  Parameters:
  - var0: Context
  - var1: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Context var0)`

  Parameters:
  - var0: Context

```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
MoreJS.villagerTrades((event) => {
	// This space (un)intentionally left blank
});
```

