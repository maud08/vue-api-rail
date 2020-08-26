import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stations: []
  },
  getters:{
    stations(state){
      return state.stations
    }
  },
  mutations: {
    addStations(state,stations){
      state.stations = stations;
    }
  },
  actions: {
    fetchStations(context){
      Axios.get("http://api.irail.be/stations/?format=json")
      .then(response => {
        context.commit("addStations", response.data.station)
        console.log(this.state.stations)
      })
    }
  },
  modules: {
  }
})
