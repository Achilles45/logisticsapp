<template>
  <div class="tracking">
  <div class="container">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10 tracking__wrapper">
        <h6>Track your consignment here</h6>
          <form action="" @submit.prevent="track()">
            <div class="form-group">
              <div class="text">
                <input
                  id="trackingId"
                  v-model="trackingId"
                  type="text"
                  class="form-control"
                  placeholder="Insert your tracking ID here"
                />
                <button type="submit" class="form__btn">Track Now</button>
              </div>
            </div>
          </form>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
  </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
   data() {
    return {
      trackingId: null,
      name:null,
      price:null
    }
  },
  methods: {
    track() {
      if (!trackingId) return
      this.$router.push(`tracking/${this.trackingId}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.tracking {
  margin-top: 3rem;
  position: absolute;
  top: 90%;
  width: 100%;
  z-index: 1000 !important;
  .tracking__wrapper{
    background: #052c7d;
    padding: 1.5rem 5rem;
    border-radius: 8px;
    color: #fff;
    h6{
      font-size: .9rem;
      opacity: .8;
      padding-bottom: .5rem;
      }
    form{
     .text{
       display: flex;
       justify-content: space-between;
        input{
        width: 80%;
        height: 2.8rem;
        box-shadow: none;
        font-size: .9rem;
        opacity: .9;
        border-radius: 3px;
      }
      .form__btn{
        padding: .6rem 2rem;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        background: #2ECC71;
        color:#fff;
        font-size: .9rem;
      }
     }
    }
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
 .tracking{
   top: 82%;
    .tracking__wrapper{
    padding: 1rem 2rem !important;
    .text{
    flex-direction: column;
    input{
      width: 100% !important;
      margin-bottom: 1rem;
    }
  }
  }
 }
}
</style>
