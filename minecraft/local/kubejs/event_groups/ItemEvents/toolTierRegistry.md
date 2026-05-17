# ItemEvents.toolTierRegistry

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [ItemToolTierRegistryKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/item/custom/ItemToolTierRegistryKubeEvent.java)

```
Invoked when the game is starting up and the item tool tiers are being registered.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| equals | Object |  | boolean | ✘ |
| toString |  |  | String | ✘ |
| hashCode |  |  | int | ✘ |
| add | String, Consumer<MutableToolTier> |  | void | ✘ |
| tiers |  |  | Map<String, Tier> | ✘ |
| addBasedOnExisting | String, String, Consumer<MutableToolTier> |  | void | ✘ |
| addExisting | String, Tier |  | void | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `void add(String var0, Consumer<MutableToolTier> var1)`

  Parameters:
  - var0: String
  - var1: Consumer<MutableToolTier>

```
Adds a new tool tier.
```

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
ItemEvents.toolTierRegistry((event) => {
	// This space (un)intentionally left blank
});
```

