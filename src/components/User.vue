<template>
<div>
    <h1>The user page</h1>
    <p>Loaded ID: {{ id }}</p>
</div>


</template>
<script>
export default{
        data(){
            return{
                id:this.$route.params.id
            }
        }

}
</script>