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
                <div v-if="err" class="alert alert-danger">
                  {{ err }}
                </div>
                <input
                  id="trackingId"
                  v-model="trackingId"
                  type="text"
                  class="form-control"
                />
              </div>
              <button type="submit" class="form__btn">
                {{ button__text}}
              </button>
            </div>
          </form>
          <div class="result__wrapper" v-if="trackedPackage">
            <table class="table mt-5">
              <tbody>
                <tr>
                  <td>DELIVERING STATUS FOR</td>
                  <td>{{ trackedPackage.receiver_name }}</td>
                </tr>
                <tr>
                  <td>ITEMS</td>
                  <td>{{ trackedPackage.items }}</td>
                </tr>
                <tr>
                  <td>WEIGHT OF THE ITEMS</td>
                  <td>{{ trackedPackage.weight }}</td>
                </tr>
                <tr>
                  <td>INSURANCE COVER AND CUSTOM DUTY</td>
                  <td>{{ trackedPackage.insurance }}</td>
                </tr>
                <tr>
                  <td>PRESENT LOCATION</td>
                  <td class="location">{{ trackedPackage.location }}</td>
                </tr>
                <tr>
                  <td>SENDER'S NAME</td>
                  <td>{{ trackedPackage.sender_name }}</td>
                </tr>
                <tr>
                  <td>SENDER'S ADDRESS</td>
                  <td>{{ trackedPackage.sender_address }}</td>
                </tr>
                <tr>
                  <td>RECEIVER'S NAME</td>
                  <td>{{ trackedPackage.receiver_name }}</td>
                </tr>
                <tr>
                  <td>SHIPPING ADDRESS</td>
                  <td>{{ trackedPackage.shipping_address }}</td>
                </tr>
                <tr>
                  <td>PRESENT DESTINATION DELIVERING STATUS</td>
                  <td class="destination">{{ trackedPackage.status }}</td>
                </tr>
                <tr>
                  <td>FINAL DESTINATION DELIVERING DATE</td>
                  <td>{{ trackedPackage.delivery_date }}</td>
                </tr>
                <tr>
                  <td>COMMENT</td>
                  <td class="comment">{{ trackedPackage.comment }}</td>
                </tr>
              </tbody>
             <div class="bottom d-flex justify-content-between">
                <p><router-link to="/contact">CLICK HERE TO CONTACT<br /> CUSTOMER CARE</router-link></p>
                 <p>Alwyas refresh to see changes</p>
             </div>
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
import db from "@/firebase/init";
import firebase from "firebase";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      trackedPackage: null,
      button__text: 'Track your package here',
      err:null
    };
  },
  methods: {
    async track(trackingId) {
      this.button__text = 'Loading .....'
      if (!trackingId) return;

      // wrapping in a try catch block for error handling
      try {
        const trackedPackage = await db
          .collection("package")
          .doc(trackingId)
          .get();
        this.trackedPackage = trackedPackage.data();
        this.foundTrackedPackage = true;
        this.button__text = 'See tracking result below'
      } catch (error) {
        this.err = 'Tracking failed. Please check your internet connection and try again!'
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      const trackingId = this.$route.params.id;
      this.trackingId = trackingId;
      this.track(trackingId);
    }
  }
};
</script>

<style lang="scss" scoped>
.track {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .track__heading {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/images/map.jpeg");
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
  .result__holder {
    background: rgba(0, 0, 0, 0.5);
  }
  .content__holder {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    hr {
      background: #fff !important;
    }
    h5 {
      color: #fff;
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
table {
  color: #fff;
  
  font-size: 0.9rem;
  text-transform: uppercase !important;
  p{
    font-size: .9rem;
    padding-top: 1rem;
  }
  a{
    color: #fff;
    padding-right: 1rem;
  }
}

.location {
  color: green !important;
}
.destination {
  color: red !important;
}
.comment {
  color: blue !important;
}
</style>
