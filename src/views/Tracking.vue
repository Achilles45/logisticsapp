<template>
  <div class="track">
    <Topbar />
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 content__holder">
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
          <div class="result__wrapper">
            <table class="table mt-5">
  <tbody>
    <tr>
      <td>PACKAGE ID</td>
      <td>{{trackedPackage.id}}</td>
    </tr>
     <tr>
      <td>PACKAGE NAME</td>
      <td>{{trackedPackage.name}}</td>
    </tr>
     <tr>
      <td>PACKAGE PRICE</td>
      <td>{{trackedPackage.price}}</td>
    </tr>
    <tr>
      <td>DATE OF PURCHASE</td>
      <td>{{trackedPackage.date__of__purchase}}</td>
    </tr>
     <tr>
      <td>EXPECTED DATE OF DELIVERY</td>
      <td>{{trackedPackage.expected__date}}</td>
    </tr>
    <tr>
      <td>BUYERS NAME</td>
      <td>{{trackedPackage.buyers__name}}</td>
    </tr>
    <tr>
      <td>BUYERS EMAIL</td>
      <td>{{trackedPackage.buyers__email}}</td>
    </tr>
    <tr>
      <td>BUYERS CONTACT ADDRESS</td>
      <td>{{trackedPackage.buyers__contact}}</td>
    </tr>
    <tr>
      <td>SELLERS NAME</td>
      <td>{{trackedPackage.sellers__name}}</td>
    </tr>
    <tr>
      <td>SELLERS EMAIL</td>
      <td>{{trackedPackage.sellers__email}}</td>
    </tr>
     <tr>
      <td>CURRENT LOCATION</td>
      <td>{{trackedPackage.current_location}}</td>
    </tr>
    <tr>
      <td>COUNTRY</td>
      <td>{{trackedPackage.current__country}}</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
        <div class="col-md-2"></div>
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('../assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  .result__holder{
    background:rgba(0,0,0,.5);
  }
 .content__holder{
   background: rgba(0, 0, 0, 0.5);
   color: #fff;
   hr{
  background:#fff !important;
   }
   h5{
     color:#fff;
     font-weight: normal;
     font-size: 1rem;
   }
    form {
    margin-top: 5rem;
    margin-bottom: 3rem;
    label {
      color: #fff;
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
}
table{
  color:#fff;
  opacity: .8;
  font-size: .9rem;
}
</style>
