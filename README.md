# table组件

## 基于vue视觉组件

主要配合[pcadmin](https://github.com/ksc-fx/pcadmin)使用。
使用方法：
```
npm install pcadmin-table
```

```javascript
import table from 'pcadmin-table';
```


### Data
| 参数      | 说明          | 类型      | 是否必选                           | 可选值  | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| listData | 数据列表 | Array | 必选 | — | — |
| headData | 要展示的列表 | Array | 必选 | - | — |
| maxWidth | 表格div最大展示宽度,超出滚轴显示（最好结合headData使用，使用时关注不同宽度的展示结果） | Number | — | — | — |
| height | 表格最大高度，超出滚轴显示（暂不支持） | Number | — |  - | — |


### headData
| 参数      | 说明          | 类型      | 是否必选                           | 可选值  | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |
| field | 对应要展示的字段 | String | 必选 | — | — |
| value | head展示的名称 | String | 必选 | - | - |
| width | 列宽度 | Number | — | — | — |
| type | 目前只要slot选项（使用slot自定义内容进行处理，注意slot的name和field一致）） | String | — | - | solt | - |
| fieldslot | head头部使用slot的name，有则使用，没有不使用） | String | — |  - |


### Events(对应headData的所需要的solt)
| 事件名称 | 说明 | 回调参数 |
