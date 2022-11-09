<template>
  <div class="container">
    <h1>Bonjour {{ selected.name.title }} {{ selected.name.first }} {{ selected.name.last }} !</h1>
    <div class="profile-select">
      <p>Sélectionnez un nouveau profil à l'aide de cette liste :</p> 
      <select @change="init = false" v-model="selected">
        <option :key="index" v-for="(name, index) in name" :value="name">
          {{ name.name.title }} {{ name.name.first }} {{ name.name.last }}&nbsp
        </option>
      </select>
    </div>
    <button @click="showPicture()">
      Afficher la photo de profil
    </button>
  </div>
  <img class="back-arrow" src="./assets/back-arrow.svg" alt="">
  <Picture :img="selected.picture.large" :init="init"></Picture>
  <img class="front-arrow" src="./assets/front-arrow.svg" alt="">
</template>

<script>
  import axios from 'axios'
  import Picture from './components/Picture.vue'

  export default {
    components: {
      Picture,
    } ,
    data() {
      return {
        name: '',
        selected: {
          name: {
            title: '',
            first: '',
            last: ''
          },
          picture: {
            large: ''
          }
        },
        init: false
      }
    },
    mounted() {
      axios
      .get('https://randomuser.me/api/?results=10')
      .then(response => {
        this.name = response.data.results;
        console.log(this.name)
      })
    },
    methods: {
      showPicture() {
        if (this.init == false) {
          this.init = true
        }
        else {
          this.init = false
        }
      }
    }
  }
</script>