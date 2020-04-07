<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">

          <p>Default content</p>
        </component>
        <!--<app-quote>-->
          <!--<h2 slot="title">{{quoteTitle}}</h2>-->
          <!--<p slot="content">A wonderful quote</p>-->
        <!--</app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>

import Quote from './components/Quote';
import Author from './components/Author';
import New from  './components/New';
    export default {

        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        },

        data:function () {
            return{

                quoteTitle: 'I am the title',
                selectedComponent: 'appQuote'
            }

        }

    }
</script>

<style>
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>
