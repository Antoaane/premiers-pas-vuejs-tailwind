<template>
    <img :src="img" v-if="init == true" alt="">
    <img src="../assets/hero-image.jpg" v-else alt="">
</template>

<script>
export default{
    props: {
        img: String,
        init: Boolean
    }
}
</script>