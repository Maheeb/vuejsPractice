<template>
  <div class="container">

        <input type="text" v-model="filteredText">
        <ul>
            <li v-for="(item,index) in filteredFruits" :index="index" :item="item" :key="index.id">

              {{item}}

            </li>
        </ul>
        <hr>
        <app-list></app-list>

  </div>
</template>

<script>
  import {fruitMixin} from "./fruitMixin";
  import List from './components/List'
    export default {
      mixins: [fruitMixin],
        components:{
            appList: List

        },
        data: function () {
            return{
                text: 'Hello world',

            }

        },

        filters:{
            toUppercase : function (value) {
                return value.toUpperCase();

            }
        },


    }
</script>

<style>

</style>
