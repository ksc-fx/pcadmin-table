<!-- 调用说明 (组件table建议换成其它标签)
    <table-ele
        :list-data='listData'
        :head-data='headData'
        // :height='height'
        :maxWidth='maxWidth'
    >
        <template slot="fieldop" scope="aaa">
            <div @click="op(aaa.item)">操作</div>
        </template>
        <template slot="op" scope="XXX">
            <div @click="opAdd(XXX.item)">添加</div>
            <div @click="opDelete(XXX.item)">删除</div>
        </template>
    </table-ele>
-->
<!-- 参数说明 -->
<!-- 
listData: Array  必须 
headData: Array  必须
    [
        {
            field: String,对应要展示的字段   必须
            value: String,head展示的名称  必须
            width: Number,列宽度  可选
            type: String, 可选，目前只要slot选项（使用slot自定义内容进行处理，注意slot的name和field一致）
            fieldslot: String, 可选，（head头部使用slot的name，有则使用，没有不使用）
        },
    ]
maxWidth: Number,表格div最大展示宽度,超出滚轴显示（最好结合headData使用，使用时关注不同宽度的展示结果）
height: Number,表格最大高度，超出滚轴显示（暂不支持）
-->
<!-- demo展示 -->
<!-- 
return {
    width: 300,
    // height: 300,
    listData: [
        {
            name: '名字',
            password: '密码',
        },
        {
            name: '名字',
            password: '密码',
        },
    ],
    headData: [
        {
            field: 'name',
            value: '这里是名字',
            width: '180'
        },
        {
            field: 'op',
            fieldslot: 'fieldop',
            value: '操作',
            type: 'slot',
        }
    ]
};
-->`
<template>
    <div class="table" __vuec__  :style="{ maxWidth:  divMaxWidth}">
        <table cellspacing="0" cellpadding="0" border="0">
            <thead class="table-header">
                <tr>
                    <th v-for="(item, index) in headData" :key="index" :style="{ width:  item.width + 'px' }">
                        <slot
                            :name="item.fieldslot"
                            v-if="item.fieldslot"
                            :item="item"
                        ></slot>
                        <div class="cell" v-else>{{item.value}}</div>
                    </th>
                </tr>
            </thead>
            <tbody class="table-body" :style="{ maxHeight:  bodyHeight}">
                <tr v-for="(itemList, indexList) in listData" :key="indexList">
                    <td v-for="(itemHead, indexHead) in headData" :key="indexHead" :style="{ width:  itemHead.width + 'px' }">
                        <slot
                            :name="itemHead.field"
                            v-if="itemHead.type === 'slot'"
                            :item="itemList"
                            :index="indexList"
                        ></slot>
                        <div class="cell" v-else>{{itemList[itemHead.field]}}</div>
                    </td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<style lang="less">
    @fontColorHead: #3B484C;
    @fontColorBody: #5E6460;
    @fontSize: 15px;
    @lineHeight: 70px;
    @cellPadding: 10px 24px;

    .table[__vuec__] {
        font-size: @fontSize;
        box-shadow: 0px 2px 4px #DCDCDC;
        overflow-x: auto;
        tr {
            display:table;  
            width:100%;  
            table-layout:fixed;
        }
        th,td {
            height: 70px;
            border-right: 1px solid #ffffff;
            .cell {
                padding: @cellPadding;
                text-align: center;
                word-wrap:break-word;
                // width: 100%;
            }
        }
        th:last-child {
            border-right-color: #E4E8E9;
        }
        td {
            border-right: 1px solid #E8EBEC;
        }
        .table-header {
            background-color: #E4E8E9;
        }
        .table-body {
            color: @fontColorBody;
            display:block;  
            // overflow-y:scroll;  
            td {
                border-top: 1px solid #E8EBEC;
            }
            tr:nth-child(2n+1){
                background-color: #FAFAFA;
            }
            tr:hover {
                background-color: #F2F2F2;
            }
        }
    }
</style>
<script>
    export default{
        name: "table",
        props: {
            listData: {
                type: Array,
                default: function () { return [];}
            },
            headData: {
                type: Array,
                default: function () { return [];}
            },
            // height: {
            //     // type: Number,
            //     default: 0
            // },
            maxWidth: {
                default: 0
            },
            // minWidth: {
            //     default: 0
            // },
        },
        data(){
            return{
            }
        },
        watch: {
        },
        computed:{
            divMaxWidth: function() {
                let width = Number(this.maxWidth) || 0;
                if (width) {
                    return  width > 0 ? width + 'px' : 'auto';
                }
                else {
                    return 'auto';
                }
            },
            divMinWidth: function() {
                return 'auto'
                // let width = Number(this.minWidth) || 0;
                // if (width) {
                //     return  width > 0 ? width + 'px' : 'auto';
                // }
                // else {
                //     return 'auto';
                // }
            },
            bodyHeight: function() {
                // let height = Number(this.height) || 0;
                // let bodyHeight = '';
                // if (height) {
                //     bodyHeight = height - 70;
                //     bodyHeight = bodyHeight > 0 ? bodyHeight + 'px' : 'auto';
                //     return bodyHeight ;
                // }
                // else {
                //     return 'auto';
                // }
                return 'auto'
            }
        },
        mounted() {
        },

        methods:{
        }
    }
</script>
