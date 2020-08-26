<template>
        <StationItems/>
</template>
<script>
import StationItems from '@/components/StationItems.vue'

export default {
    name: 'Stations',
     created(){
        this.$store.dispatch("fetchStations")
    },
    components: {
        StationItems
    }
}
</script>