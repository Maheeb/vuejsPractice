<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-highlight:background.delayed="'red'"> This is global text</p>
        <p v-local-highlight:background.delayed.blink="'red'">Some text</p>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        directives:{
            'local-highlight': {
                bind(el,binding){
                    // el.style.backgroundColor='green';
                    var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay =2000;
                    }
                    if(binding.modifiers['blink']){

                          let maincolor = binding.value;
                          let secondcolor = 'blue';
                          let currentcolor = maincolor;

                        setTimeout(()=>{

                            setInterval( ()=>{

                              currentcolor === secondcolor? currentcolor=maincolor: currentcolor=secondcolor;

                                if(binding.arg==='background'){

                                    el.style.backgroundColor=currentcolor;

                                }else{

                                    el.style.color= currentcolor;
                                }

                            },1000);



                        },delay)




                    }

                   else {

                        setTimeout(()=>{

                            if(binding.arg==='background'){

                                el.style.backgroundColor=binding.value;

                            }else{

                                el.style.color= binding.value;
                            }


                        },delay)

                    }



                }



            }





        }



    }
</script>

<style>

</style>
