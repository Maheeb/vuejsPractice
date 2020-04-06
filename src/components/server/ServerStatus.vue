<template>
    <div>

        <p>server status: {{ status}}</p>

        <hr>

        <button @click="changeStatus">click me</button>

    </div>
</template>

<script>
    export default {
        // name: "Home",
        data: function () {
            return{

                status: 'critical'
            }
        },
        methods: {
            changeStatus: function () {

                this.status = 'Normal'

            }
        }

    }
</script>

<style scoped>

</style>