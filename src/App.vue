<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="UserName">User Name</label>
                    <input type="text" class="form-control" v-model="user.userName">
                </div>
                <div class="form-group">
                    <label for="Mail">Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>

                <button class="btn btn-primary"  @click="submit" >Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get data</button>
                <br><br>
                <ul>
                    <li class="list-group-item" v-for="(item, index) in users" :key="index" :item="item">
                            {{item.userName}} - {{item.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data:function () {
            return{
                user: {
                    userName: '',
                    email: ''
                },
                users:[],
                resource:{}
            };

        },
        methods:{
            submit:function () {

                // this.$http.post('',this.user)
                //     .then(response=>{
                //        console.log(response)
                //     },
                //     error=>{
                //         console.log(error)
                //     }
                //
                //     );

                this.resource.saveAlt(this.user);
            },
            fetchData: function () {

                this.$http.get('', this.user)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {

                        const resultArray = [];

                        for (let key in data) {

                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;

                    });

            }
            },

            created(){
                const customActions ={

                    saveAlt: {method: 'POST', url: 'alternative.json'}
                };

                this.resource = this.$resource('data.json',{}, customActions);

            }



    }
</script>

<style>

</style>
