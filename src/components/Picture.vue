<template>
    <img class="picture" :src="img" v-if="init == true" alt="">
    <img class="picture" src="../assets/hero-image.jpg" v-else alt="">
</template>

<script>
export default{
    props: {
        img: String,
        init: Boolean
    }
}
</script>