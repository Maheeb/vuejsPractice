<template>

    <div style="margin-left: 5px">
        <p>Server Status: {{status}}</p>
        <hr>
        <button @click="changeStatus">Click me</button>
    </div>

</template>

<script>

    export default {
        data: function () {
            return{
                status: 'critical',
                show: false
            }
        },
        methods:{
            changeStatus:function () {
                // this.status= 'normal';
                // this.show=true;

                if(this.status==='normal'){
                    this.status= 'critical'
                }else{
                    this.status = 'normal';
                }

            }

        }

    }
</script>

<style scoped>

</style>