<template>
  <div class="home">
    <Nav/>
    <Header/>
    <bodymain/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Nav from '@/components/nav.vue'
import Bodymain from '@/components/bodymain.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Nav,
    Bodymain,
    Footer
  }
}
</script>
