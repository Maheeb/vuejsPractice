<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset</button>

    </div>
</template>

<script>
    export default {
        // props:['myName'],
        props:{
          myName:{
              type: String,

          },
            userAge: Number
        },
        methods:{
            switchName: function () {
                return this.myName.split("").reverse().join("");
            },

            resetName: function () {
                this.myName ="maheeb";
                this.$emit('nameWasReset', this.myName);
            }

        }

    }

</script>

<style scoped>
    .component {
        background-color: lightcoral;
    }
</style>
