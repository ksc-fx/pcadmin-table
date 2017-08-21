<template>
  <div>
    <table-ele
            class='table' 
            :list-data='listData'
            :head-data='headData'
        >
            <template slot="fieldop" scope="aaa">
                <div @click="op(aaa.item)">操作</div>
            </template>
            <template slot="op" scope="aaa">
                <div @click="opAdd(aaa.item)">添加</div>
                <div @click="opDelete(aaa.item)">删除</div>
            </template>
        </table-ele> 

        <table-ele
            class='table' 
            :list-data='listData'
            :head-data='headDataMax'
            :width='200'
        >
            <template slot="fieldop" scope="aaa">
                <div @click="op(aaa.item)">操作</div>
            </template>
            <template slot="op" scope="aaa">
                <div @click="opAdd(aaa.item)">添加</div>
                <div @click="opDelete(aaa.item)">删除</div>
            </template>
        </table-ele> 

        <table-ele
            class='table' 
            :list-data='listData'
            :head-data='headDataMax'
            :max-width='350'
        >
            <template slot="fieldop" scope="aaa">
                <div @click="op(aaa.item)">操作</div>
            </template>
            <template slot="op" scope="aaa">
                <div @click="opAdd(aaa.item)">添加</div>
                <div @click="opDelete(aaa.item)">删除</div>
            </template>
        </table-ele> 
  </div>
</template>

<style lang="less">
</style>

<script>

import tableEle from "../src/table.vue";

export default {
    data(){
        return {
            listData: [
                {
                    name: '名字',
                    password: '密码',
                    tel: '13131313131',
                    qq: '1234567890',
                    email: '102301230@qq.com',
                },
                {
                    name: '名字',
                    password: '密码',
                    tel: '13131313131',
                    qq: '1234567890',
                    email: '102301230@qq.com',
                },
                {
                    name: '名字',
                    password: '密码',
                    tel: '13131313131',
                    qq: '1234567890',
                    email: '102301230@qq.com',
                },
                {
                    name: '名字',
                    password: '密码',
                    tel: '13131313131',
                    qq: '1234567890',
                    email: '102301230@qq.com',
                },
            ],
            headData: [
                {
                    field: 'name',
                    value: '这里是名字',
                },
                {
                    field: 'password',
                    value: '这里是密码',
                },
                {
                    field: 'email',
                    value: '这里是email',
                },
                {
                    field: 'op',
                    fieldslot: 'fieldop',
                    value: '操作',
                    type: 'slot',
                }
            ],
            headDataMax: [
                {
                    field: 'name',
                    value: '这里是名字',
                    width: '100'
                },
                {
                    field: 'password',
                    value: '这里是密码',
                    width: '100'
                },
                {
                    field: 'email',
                    value: '这里是email',
                    width: '100'
                },
                {
                    field: 'op',
                    fieldslot: 'fieldop',
                    value: '操作',
                    type: 'slot',
                    width: '100'
                }
            ],
        }
    },
    mounted(){
        
    },
    methods:{
        op(params){
            console.log('op',params);
        },
        opAdd(params){
            console.log('opAdd',params);
        },
        opDelete(params){
            console.log('opDelete',params);
        }
    },
    components: {
        tableEle
    }
}
</script>

