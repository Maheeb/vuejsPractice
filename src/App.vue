<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Routing</h1>
                <hr>
                <app-header></app-header>
                <router-view></router-view>

            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
    export default {
        components:{
            appHeader:Header
        }
    }
</script>

<style scoped>

</style>
