<template>
  <div class="app">
    <Topbar />
    <Navbar />
    <Banner />
    <Tracking />
    <Services />
    <Why />
    <Gallery />
    <More />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Tracking from '@/components/Tracking.vue'
import Services from '@/components/Services.vue'
import Why from '@/components/Why.vue'
import Gallery from '@/components/Gallery.vue'
import More from '@/components/More.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Topbar,
    Navbar,
    Banner,
    Tracking,
    Services,
    Why,
    Gallery,
    More,
    Testimonials,
    Footer
  }
}
</script>
