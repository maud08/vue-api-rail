<template>
    <div >
        <h1>{{station.station}}</h1>
        <ul v-for="(item,index) in station.departures" :key="(item)+index">
            <li>{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "station",
    created(){
        let url = "http://api.irail.be//liveboard/?id="+ this.$route.params.id+"&format=json";
        this.$Axios.get(url)
        .then(response =>{
            this.station = response.data
            console.log(this.station)
        })
    },
    data(){
        return{
            station: []
        }
    }
}
</script>