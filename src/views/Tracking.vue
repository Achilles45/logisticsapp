<template>
  <div class="track">
    <Topbar />
    <Navbar />
    <div class="track__heading">
      <div class="container">
        <h2>Track Your Items</h2>
        <p>Get real time information on the state of your shipments</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <form action="" @submit.prevent="track()">
            <div class="form-group">
              <div class="text">
                <label for="title">Insert tracking ID here</label>
                <input
                  id="trackingId"
                  v-model="trackingdId"
                  type="text"
                  class="form-control"
                />
              </div>
              <button type="submit" class="form__btn">
                Track your shipments here
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    <br /><br />
    <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Topbar,
    Navbar,
    Footer
  },
  data() {
    return {
      trackingdId: null
    }
  },
  methods: {
    track() {
      alert('Working ...')
    }
  }
}
</script>

<style lang="scss" scoped>
.track {
  background: #f4f4f4;
  .track__heading {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('../assets/images/banner.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 5rem 0;
    h2 {
      color: #fff;
      padding-top: 5rem;
      font-weight: bold;
    }
    p {
      font-size: 0.85rem;
      opacity: 0.8;
      color: #fff;
    }
  }
  form {
    margin-top: 9rem;
    margin-bottom: 8rem;
    label {
      color: #545454;
      font-size: 0.84rem;
      opacity: 0.9;
      padding-bottom: 0.5rem;
    }
    input {
      width: 100%;
      height: 2.8rem;
      background: #f4f4f4;
      box-shadow: none !important;
      border-radius: 0px;
      margin-bottom: 1rem;
    }
    .form__btn {
      background: #052c7d;
      color: #fff;
      width: 100%;
      border-radius: 3px;
      padding: 0.9rem 2rem;
      border: none;
      font-size: 0.85rem;
    }
  }
}
</style>
