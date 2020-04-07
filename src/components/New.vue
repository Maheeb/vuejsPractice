<template>
    <div>
            <h3>New Quote</h3>
        <button @click="increase">Click me</button>
        {{counter}}
    </div>
</template>

<script>
    export default {
        name: "New",

        data: function () {
            return{

                counter:0
            }

        },

        methods:{
            increase:function () {
                return this.counter++
            }


        }




    }
</script>

<style scoped>

</style>