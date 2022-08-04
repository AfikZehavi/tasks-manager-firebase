<template>
    <router-link to="/task">back To Task List</router-link>
    <h2>hello afik</h2>
    <pre v-if="task">{{ task }}</pre>

</template>
    
<script >
export default {
    data() {
        return {
            task: null,
        }
    },




    watch: {
        '$route.params.id': {
            handler: function (id) {
                this.task = this.$store.getters.getTaskById(id)
            },
            deep: true,
            immediate: true,
        }
    }
}
</script>
    
<style>
</style>