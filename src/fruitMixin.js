export const fruitMixin={

    data: function () {
        return{
            fruits: ['apple','mango','malone','jackfruit'],
            filteredText: ''
        }

    },

    computed:{
        filteredFruits: function(){

            return this.fruits.filter((element)=>{

                return element.match(this.filteredText)


            });

        }
    }

}