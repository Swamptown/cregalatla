# LDLib2UI.player

## Basic info

- Valid script types: [STARTUP, SERVER, CLIENT]

- Has result? ✘

- Event class: KJSPlayerUIMenuType$PlayerUIEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| level | Level | ✘ |
| modularUI | ModularUI | ✘ |
| displayName | Component | ✘ |
| validator | Predicate<Player> | ✘ |
| id | String | ✘ |
| player | Player | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getMenuType |  |  | MenuType<ModularUIContainerMenu> | ✘ |
| exit | Context |  | Object | ✘ |
| exit | Context, Object |  | Object | ✘ |
| cancel | Context |  | Object | ✘ |
| cancel | Context, Object |  | Object | ✘ |
| success | Context, Object |  | Object | ✘ |
| success | Context |  | Object | ✘ |
| shouldTriggerClientSideContainerClosingOnOpen |  |  | boolean | ✘ |
| shouldCloseCurrentScreen |  |  | boolean | ✘ |


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
LDLib2UI.player(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

