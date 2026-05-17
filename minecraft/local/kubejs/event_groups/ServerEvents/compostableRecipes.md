# ServerEvents.compostableRecipes

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [CompostableRecipesKubeEvent](https://github.com/KubeJS-Mods/KubeJS/tree/main/src/main/java/dev/latvian/mods/kubejs/recipe/CompostableRecipesKubeEvent.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| remove | ItemPredicate |  | void | ✘ |
| equals | Object |  | boolean | ✘ |
| toString |  |  | String | ✘ |
| hashCode |  |  | int | ✘ |
| replaceAll |  |  | void | ✘ |
| add | ItemPredicate, float |  | void | ✘ |
| add | ItemPredicate, float, boolean |  | void | ✘ |
| removeAll |  |  | void | ✘ |
| compostables |  |  | VirtualDataMapFile<Item, Compostable> | ✘ |
| addReplace | ItemPredicate, float |  | void | ✘ |
| addReplace | ItemPredicate, float, boolean |  | void | ✘ |
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
ServerEvents.compostableRecipes((event) => {
	// This space (un)intentionally left blank
});
```

