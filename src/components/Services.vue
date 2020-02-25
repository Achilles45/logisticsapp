<template>
  <div class="services">
    <div class="container">
      <div class="row pt-5">
        <div class="col-12 heading text-center">
          <p>WHAT WE PROVIDE FOR CLIENTS AMONG OTHERS</p>
          <h1>QUICK CARGO SERVICES</h1>
        </div>
      </div>
      <br /><br />
      <div class="services__wrapper">
        <div class="services__card">
          <img
            src="../assets/images/img2.jpeg"
            class="card--img img-fluid"
            alt=""
          /><br />
          <h3>Ocean Freight</h3>
          <small>Delivery 10-30 Days</small><br />
          <li class="pt-2">No Commision Or Monthly Fee</li>
          <li>Save Hundreds of Dollars</li>
          <li>Over 4,000 Dedicated Staff</li>
        </div>
        <div class="services__card">
          <img
            src="../assets/images/img3.jpeg"
            class="card--img img-fluid"
            alt=""
          /><br />
          <h3>Warehousing</h3>
          <small>Delivery 10-30 Days</small><br />
          <li class="pt-2">No Commision Or Monthly Fee</li>
          <li>Save Hundreds of Dollars</li>
          <li>Over 2,000 Dedicated Staff</li>
        </div>
        <div class="services__card">
          <img
            src="../assets/images/img5.jpeg"
            class="card--img img-fluid"
            alt=""
          /><br />
          <h3>Air Freight</h3>
          <small>Delivery 3-4 Days</small><br />
          <li class="pt-2">Flat Rate For Each Shipment</li>
          <li>Dellivery To Your Doorstep</li>
          <li>Charters And International Transportation</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.services {
  padding: 10rem 0;
  .heading {
    padding-top: 2rem;
    p {
      color: #052c7d;
      font-size: 0.8rem;
      font-weight: bold;
    }
    h1 {
      font-weight: bold;
      font-size: 2.4rem;
      color: #272727;
    }
  }
  .services__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 30px;
    .services__card {
      .card--img {
        padding-bottom: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          animation-name: scale;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-duration: 3s;
          transition: all ease-in-out 5s;
        }
      }
      small {
        color: #052c7d;
        font-weight: bold;
      }
      h3 {
        text-transform: uppercase;
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        padding-top: 0.6rem;
      }
      li {
        font-size: 0.8rem;
        font-weight: bold;
        opacity: 0.6;
        color: #000;
      }
    }
  }
}

//Keyframes
@keyframes scale {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

//MEDIA QUERIES
</style>
