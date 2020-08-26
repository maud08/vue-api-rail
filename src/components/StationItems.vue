<template>
    <ul>
        <li v-for="(station,index) in stations" :key="(station) + index">
        <router-link :to="'/station/' + station.id">{{station.name}}</router-link>
        </li>
    </ul>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name: 'StationItems',
    data(){
        return {
            stations: this.$store.getters.stations
        }
    },
    methods: {
        ...mapMutations([
            'addStations'
        ]),
    }
}
</script>