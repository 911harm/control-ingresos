<template>
  <div class="home">
    <Nav/>
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Nav from '@/components/nav.vue'
import Body from '@/components/body.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Nav,
    Body,
    Footer
  }
}
</script>
