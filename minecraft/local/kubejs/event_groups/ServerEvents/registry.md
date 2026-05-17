# ServerEvents.registry

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [ServerRegistryKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/registry/ServerRegistryKubeEvent.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| registryKey | ResourceKey<Registry<T>> | ✘ |
| codec | Codec<T> | ✘ |
| jsonOps | DynamicOps<JsonElement> | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| create | Context, KubeResourceLocation |  | BuilderBase<? extends T> | ✘ |
| create | Context, KubeResourceLocation, KubeResourceLocation |  | BuilderBase<? extends T> | ✘ |
| createFromJson | Context, KubeResourceLocation, JsonElement |  | CustomBuilderObject | ✘ |
| createCustom | Context, KubeResourceLocation, Supplier<Object> |  | CustomBuilderObject | ✘ |
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
ServerEvents.registry(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

