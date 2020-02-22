<template>
  <div class="why__section container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-3 left">
          <small>Safe & Affordable Cargo Services</small><br />
          <h5>WE OFFER QUICK CARGO SHIPMENT FACILITIES</h5>
          <p>
            Our Services are world class, cheap and efficient and we pride our
            selves in integrity and confidentiality
          </p>
          <router-link to="/" class="why__btn">Request a Quote</router-link>
        </div>
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-9">
          <div class="holder__wrapper">
            <div class="holder">
              <img src="../assets/images/icon1.svg" class="icons" alt="" />
              <h6>PACKAGED STORAGED</h6>
              <small>Professional Productize</small>
              <p>
                We also assure you of quality storage whilst your parcel is with
                us
              </p>
            </div>
            <div class="holder">
              <img src="../assets/images/icon2.svg" class="icons" alt="" />
              <h6>COMPANY CONTACT</h6>
              <small>Professional Productize</small>
              <p>
                You are sure that we bind to our contract and your items gets to
                you in record time
              </p>
            </div>
            <div class="holder">
              <img src="../assets/images/icon3.svg" class="icons" alt="" />
              <h6>VISIBILITY AND RREPORT</h6>
              <small>Professional Productize</small>
              <p>
                You can also track your package on the go from the comfort of
                any device
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.why__section {
  background: linear-gradient(rgba(4, 9, 30, 0.8), rgba(4, 9, 30, 0.8)),
    url('../assets/images/slider-3.jpg');
  padding: 10rem 0;
  color: #fff;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .left {
    small {
      font-weight: normal;
      opacity: 0.9;
    }
    h5 {
      padding-top: 1.3rem;
      padding-bottom: 1rem;
      line-height: 1.4;
    }
    p {
      font-size: 0.8rem;
      opacity: 0.9;
      padding-bottom: 2rem;
    }
    .why__btn {
      background: #052c7d;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      padding: 1.4rem 4rem;
      font-size: 0.82rem;
      &:hover {
        background: #1ecf68;
        transition: all ease-in-out 0.05;
      }
    }
  }
  .holder__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: 30px;
    text-align: center;
    .holder {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      margin-left: 0.5rem;
      color: #fff;
      padding: 2rem 2rem;
      animation-name: animate;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      .icons {
        max-width: 40px;
        height: auto;
        padding-bottom: 1rem;
        color: #fff;
      }
      h6 {
        color: #fff;
        font-size: 0.9rem;
        font-weight: normal;
        opacity: 0.95;
      }
      small {
        color: #fff;
        font-size: 0.7rem;
      }
      p {
        padding-top: 1.3rem;
        color: #fff;
        opacity: 0.9;
        font-size: 0.8rem;
      }
    }
  }
}
//Animation
@keyframes animate {
  from {
    transform: translateY(-12px);
  }
  to {
    transform: translateY(12px);
  }
}

@media only screen and (max-width: 600px) {
  .holder__wrapper {
    margin-top: 4rem !important;
  }
}
</style>
