<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <input type="text" v-model="filteredText">
                <ul>
                    <li v-for="(item,index) in filteredFruits" :index="index" :item="item" :key="index.id">

                        {{item}}

                    </li>

                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from "../fruitMixin";

    export default {

        mixins:[fruitMixin]


    }
</script>

<style>

</style>
