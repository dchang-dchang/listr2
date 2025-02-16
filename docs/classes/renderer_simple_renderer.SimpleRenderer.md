# Class: SimpleRenderer

[renderer/simple.renderer](../modules/renderer_simple_renderer.md).SimpleRenderer

This is the default renderer which is neither verbose or updating.
It provides short output like update renderer, but does not disturb
stdin during execution of listr tasks

## Implements

- [`ListrRenderer`](index.ListrRenderer.md)

## Properties

### nonTTY

▪ `Static` **nonTTY**: `boolean` = `true`

designate whether this renderer can work in non-tty environments

#### Implementation of

[ListrRenderer](index.ListrRenderer.md).[nonTTY](index.ListrRenderer.md#nontty)

#### Defined in

src/renderer/simple.renderer.ts:18

___

### rendererOptions

▪ `Static` **rendererOptions**: `Object`

designate renderer global options that is specific to the current renderer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefixWithTimestamp?` | `boolean` | if true this will add timestamp at the begin of the rendered line **`Example`** ```bash [12:33:44] ✔ Do something important ``` **`Default`** false |
| `output?` | ``"stdout"`` \| ``"stderr"`` | choose between process.stdout and process.stderr **`Default`** stdout |

#### Implementation of

[ListrRenderer](index.ListrRenderer.md).[rendererOptions](index.ListrRenderer.md#rendereroptions)

#### Defined in

src/renderer/simple.renderer.ts:21

___

### rendererTaskOptions

▪ `Static` **rendererTaskOptions**: `never`

designate renderer per task options that is specific to the current renderer

#### Implementation of

[ListrRenderer](index.ListrRenderer.md).[rendererTaskOptions](index.ListrRenderer.md#renderertaskoptions)

#### Defined in

src/renderer/simple.renderer.ts:44

___

### eventTypeRendererMap

• **eventTypeRendererMap**: `Partial`<{ `TITLE`: (`t`: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>, `event`: { `type`: [`TITLE`](../enums/index.ListrEventType.md#title) \| [`STATE`](../enums/index.ListrEventType.md#state) \| [`ENABLED`](../enums/index.ListrEventType.md#enabled) \| [`SUBTASK`](../enums/index.ListrEventType.md#subtask) ; `data?`: `string` \| `boolean`  }) => `void` ; `STATE`: (`t`: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>, `event`: { `type`: [`TITLE`](../enums/index.ListrEventType.md#title) \| [`STATE`](../enums/index.ListrEventType.md#state) \| [`ENABLED`](../enums/index.ListrEventType.md#enabled) \| [`SUBTASK`](../enums/index.ListrEventType.md#subtask) ; `data?`: `string` \| `boolean`  }) => `void` ; `ENABLED`: (`t`: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>, `event`: { `type`: [`TITLE`](../enums/index.ListrEventType.md#title) \| [`STATE`](../enums/index.ListrEventType.md#state) \| [`ENABLED`](../enums/index.ListrEventType.md#enabled) \| [`SUBTASK`](../enums/index.ListrEventType.md#subtask) ; `data?`: `string` \| `boolean`  }) => `void` ; `SUBTASK`: (`t`: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>, `event`: { `type`: [`TITLE`](../enums/index.ListrEventType.md#title) \| [`STATE`](../enums/index.ListrEventType.md#state) \| [`ENABLED`](../enums/index.ListrEventType.md#enabled) \| [`SUBTASK`](../enums/index.ListrEventType.md#subtask) ; `data?`: `string` \| `boolean`  }) => `void` ; `DATA`: (`t`: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>, `event`: { `type`: [`DATA`](../enums/index.ListrEventType.md#data) ; `data`: `string`  }) => `void` ; `MESSAGE`: (`t`: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>, `event`: { `type`: [`MESSAGE`](../enums/index.ListrEventType.md#message) ; `data`: { `duration?`: `number` ; `error?`: `string` ; `skip?`: `string` ; `rollback?`: `string` ; `retry?`: { `count`: `number` ; `withError?`: `any`  }  }  }) => `void`  }\>

Event type renderer map contains functions to process different task events

#### Defined in

src/renderer/simple.renderer.ts:49

___

### tasks

• `Readonly` **tasks**: [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>[]

#### Defined in

src/renderer/simple.renderer.ts:105

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefixWithTimestamp?` | `boolean` | if true this will add timestamp at the begin of the rendered line **`Example`** ```bash [12:33:44] ✔ Do something important ``` **`Default`** false |
| `output?` | ``"stdout"`` \| ``"stderr"`` | choose between process.stdout and process.stderr **`Default`** stdout |

#### Defined in

src/renderer/simple.renderer.ts:105

## Constructors

### constructor

• **new SimpleRenderer**(`tasks`, `options`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tasks` | [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>[] | - |
| `options` | `Object` | - |
| `options.prefixWithTimestamp?` | `boolean` | if true this will add timestamp at the begin of the rendered line **`Example`** ```bash [12:33:44] ✔ Do something important ``` **`Default`** false |
| `options.output?` | ``"stdout"`` \| ``"stderr"`` | choose between process.stdout and process.stderr **`Default`** stdout |

#### Defined in

src/renderer/simple.renderer.ts:105

## Methods

### now

▸ `Static` **now**(): `Date`

#### Returns

`Date`

#### Defined in

src/renderer/simple.renderer.ts:110

___

### formatTitle

▸ `Static` **formatTitle**(`task?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task?` | [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\> |

#### Returns

`string`

#### Defined in

src/renderer/simple.renderer.ts:115

___

### log

▸ **log**(`output?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output?` | `string` |

#### Returns

`void`

#### Defined in

src/renderer/simple.renderer.ts:120

___

### end

▸ **end**(): `void`

A function to what to do on end of the render

#### Returns

`void`

#### Implementation of

ListrRenderer.end

#### Defined in

src/renderer/simple.renderer.ts:140

___

### render

▸ **render**(`tasks?`): `void`

A function to what to do on render

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks?` | [`ListrTaskObject`](index.ListrTaskObject.md)<`any`, typeof [`SimpleRenderer`](renderer_simple_renderer.SimpleRenderer.md)\>[] |

#### Returns

`void`

#### Implementation of

ListrRenderer.render

#### Defined in

src/renderer/simple.renderer.ts:143
