<template>
    <h2>hello afik</h2>
    <pre>{{ task }}</pre>

</template>
    
<script >
export default {
    data() {
        return {
            task: null,
        }
    },

    created() {
        this.task = this.$store.getters.getTaskById('CeTRhqsduWnvv2FK7cAs')
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