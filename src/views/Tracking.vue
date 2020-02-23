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
          <form action="" @submit.prevent="track(trackingId)">
            <div class="form-group">
              <div class="text">
                <label for="title">Insert tracking ID here</label>
                <input
                  id="trackingId"
                  v-model="trackingId"
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
      <div class="row" v-if="foundTrackedPackage">
        <div class="col-md-12">
         <img src="../assets/images/barcode.webp" class="icon" alt="">
          {{trackedPackage.id}}<br /><br /><br />
          <h6>Thank you for trusting us to deliver your package</h6>
          <small>These is the information about your order</small>
          <hr>
          <br>
        </div>
        </div>
        <div class="row">
            <div class="col-md-6">
            <h5>Package Detials</h5>
            <small>These refers to the information about the package in transit. Please contact us if you feel it's not correct</small><br /><br>
          <p>Package ID: {{trackedPackage.id}}</p>
          <p>Package Name: {{trackedPackage.name}}</p>
          <p>Package Price: {{trackedPackage.price}}</p>
          <p>Date of Purchase: {{trackedPackage.date__of__purchase}}</p>
          <p>Expected Date Of Delivery: {{trackedPackage.expected__date}}</p>
          <br>
        </div>
         <div class="col-md-6">
            <h5>Buyers Details</h5>
            <small>Your information as provided while placing this order</small><br /><br>
          <p>Buyers Name: {{trackedPackage.buyers__name}}</p>
          <p>Buyers Name: {{trackedPackage.buyers__email}}</p>
          <p>Buyers Contact Address: {{trackedPackage.buyers__contact}}</p>
          </div>
          </div><br>
            <div class="row">
            <div class="col-md-6">
            <h5>Sellers Detials</h5>
            <small>The information of the seller while receiving this order</small><br><br>
          <p>Sellers Name: {{trackedPackage.sellers__name}}</p>
          <p>Sellers Email: {{trackedPackage.sellers__email}}</p>
          <p>Sellers Orgaization: {{trackedPackage.sellers__organization}}</p>
          <br>
        </div>
         <div class="col-md-6">
            <h5>Current State Of Consignment</h5>
            <small>This is the current state of things about this package</small><br /><br>
          <p>Current Location: {{trackedPackage.current__location}}</p>
          <p>Current Country: {{trackedPackage.current__country}}</p>
          </div>
          </div>
      </div>
    <br /><br />

    <div class="bottom pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
        <small>The company shall be held responsible for any alteration or physical damage made to your package while with us during transit. Please if you need any clarification on our policies and operation, please send a message in the contact section and a customer support persion will  get back to you in less than 24hours. As at this time, the google maps API is unvailable.</small>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
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
      trackingId: null,
      foundTrackedPackage: false,
      trackedPackage: {}
    }
  },
  methods: {
    async track(trackingId) {
      if (!trackingId) return
      const trackedPackage = await db.collection('package').doc(trackingId).get()
      console.log(trackedPackage.data())
      if (trackedPackage.data().id) {
        this.trackedPackage = trackedPackage.data()
        this.foundTrackedPackage = true
      }
    }
  },
  mounted () {
    if (this.$route.params.id) {
      const trackingId = this.$route.params.id
      this.trackingId = trackingId
      this.track(trackingId)
    }
  },
}
</script>

<style lang="scss" scoped>
.track {
  background: #f4f4f4;
  .track__heading {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('../assets/images/map.jpeg');
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
    margin-top: 5rem;
    margin-bottom: 5rem;
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
h5{
  color:#454545;
  font-size: 1.2rem;
  font-weight: bold;
}
p{
  color:#545454;
  font-size: .9rem;

}
.icon{
  max-width: 100px;
  height: auto;
}
</style>
