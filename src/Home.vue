<template>

    <div>

        <app-server-status v-for="(server, index) in 5"  v-bind:item="server"
                           v-bind:index="index"
                           v-bind:key="server.id">


        </app-server-status>

    </div>

</template>

<script>
    import ServerStatus from './components/server/ServerStatus.vue';
    export default {
     components:{

         'app-server-status':ServerStatus

     }

    }
</script>

<style scoped>

</style>