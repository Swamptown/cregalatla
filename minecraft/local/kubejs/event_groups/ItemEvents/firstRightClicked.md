# ItemEvents.firstRightClicked

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: [ItemClickedKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/item/ItemClickedKubeEvent.java)

```
Invoked when a player right clicks with an item **without targeting anything**.

Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getTarget |  |  | KubeRayTraceResult | ✘ |
| getHand |  |  | InteractionHand | ✘ |
| getEntity |  |  | Entity | ✘ |
| getItem |  |  | ItemStack | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getRegistries |  |  | RegistryAccess | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |


### Documented members:

- `KubeRayTraceResult getTarget()`
```
The ray trace result of the click.
```

- `InteractionHand getHand()`
```
The hand that the item was clicked with.
```

- `Entity getEntity()`
```
The player that clicked with the item.
```

- `ItemStack getItem()`
```
The item that was clicked with.
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
ItemEvents.firstRightClicked(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

