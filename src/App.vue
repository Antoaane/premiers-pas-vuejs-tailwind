<template>
  <div class="w-[80vw] sm:w-[40vw] ml-0 mt-[10vh] sm:mt-0 sm:ml-[15vw] flex flex-col sm:items-baseline items-center z-10">
    <h1 class="text-4xl text-center sm:text-start font-semibold my-[5px]">Bonjour {{ selected.name.title }} {{ selected.name.first }} {{ selected.name.last }} !</h1>
    <div class="my-[5px] flex flex-wrap justify-center sm:flex-col">
      <p class="my-[10px] text-center sm:text-start">Sélectionnez un nouveau profil à l'aide de cette liste :</p> 
      <select class="my-[10px] px-8 py-4 bg-white text-black rounded-full hover:border-white border-2 hover:text-white hover:bg-black transition-all duration-300" @change="init = false" v-model="selected">
        <option :key="index" v-for="(name, index) in name" :value="name">
          {{ name.name.title }} {{ name.name.first }} {{ name.name.last }}&nbsp
        </option>
      </select>
    </div>
    <button class="my-[5px] px-8 py-4 bg-black text-white rounded-full hover:border-black border-2 hover:text-black hover:bg-white transition-all duration-300" @click="showPicture()">
      Afficher la photo de profil
    </button>
  </div>
  <img class="w-[100vw] sm:w-[50vw] absolute bottom-[-100px] sm:bottom-auto sm:translate-x-[-50%] sm:right-0 z-0 rotate-90 sm:rotate-0 animate-floating_back_r sm:animate-floating_back" src="./assets/back-arrow.svg" alt="">
  <Picture class="w-[60vw] sm:w-[30vw] absolute rounded-full bottom-[100px] sm:bottom-auto sm:translate-x-[-50%] sm:right-[15vw] animate-floating_pic_r sm:animate-floating_pic" :img="selected.picture.large" :init="init"></Picture>
  <img class="w-[50vw] sm:w-[25vw] absolute bottom-[-100px] sm:bottom-auto sm:translate-x-[-50%] sm:right-0 z-10 rotate-90 :rotate-0 animate-floating_front_r sm:animate-floating_front" src="./assets/front-arrow.svg" alt="">
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