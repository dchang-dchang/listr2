# Type alias: ListrEvent

[index](../modules/index.md).ListrEvent

Ƭ **ListrEvent**: { `type`: `Exclude`<[`ListrEventType`](../enums/index.ListrEventType.md), ``"MESSAGE"`` \| ``"DATA"``\> ; `data?`: `string` \| `boolean`  } \| { `type`: [`DATA`](../enums/index.ListrEventType.md#data) ; `data`: `string`  } \| { `type`: [`MESSAGE`](../enums/index.ListrEventType.md#message) ; `data`: [`ListrTaskObject`](../classes/index.ListrTaskObject.md)<`any`, `any`\>[``"message"``]  }

The internal communication event.

#### Defined in

src/interfaces/listr.interface.ts:188
