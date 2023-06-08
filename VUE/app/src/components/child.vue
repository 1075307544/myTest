<template>
    <div id="child">
        <slot nm="吃了吗">
            <p>xxxxxx</p>
        </slot>
        <slot name="hello" nm="zhangsan">

        </slot>
        <slot name="byebye" nm="lisi">

        </slot>
        <p>{{ $attrs.name }}</p>
        

        <form action="/myurl" v-on:submit.prevent="onSubmit">
            <input type="text" v-model.lazy="value">
            <div>[{{ value }}]</div>
            <div @click.self="shout(2)">
            <button  @click.self="shout(1)">console</button>
            <button @click.left="shout(1)">ok</button>
            <button @click.right="shout(1)">ok</button>
            <button @click.middle="shout(1)">ok</button>
            <input type="text" @keyup.enter="shout(33)">
        </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value:''
        }
    },
    methods:{
        shout(i){
            console.log('[ i ] >', i)
        },
        onSubmit() {
            console.log('[  ] >', 'submit')
        }
    }
}
</script>
<style>
</style>