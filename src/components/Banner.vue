<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/slider-2.jpg" alt="First slide" />
          <div class="carousel-caption">
             <h5 class="animated slideInDown animate3d">Reliable and Flexible Logistics</h5>
            <h2 class="animated bounceIn animate3d">Personalized cargo services in worldwide commerce</h2>
            <!-- <router-link to="/products" class="carousel-btn animated zoomIn animate3d">See Products</router-link> -->
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/slider-1.jpg" alt="Second slide" />
          <div class="carousel-caption">
            <h5>Reliable and Flexible Logistics</h5>
            <h2 class="animated slideInLeft animate2d">Send and receive pakages around the world easily</h2>
            <p
              class="animated slideInRight animate3d"
            >The logistics partner you can trust for all your logistics needs.</p>
            <!-- <router-link to="/contact" class="carousel-btn animated zoomIn animate3d">Invest Now</router-link> -->
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/slider-3.jpg" alt="Third slide" />
          <div class="carousel-caption">
            <h2
              class="animated slideInDown animate3d"
            >Customized services to suit all your logistics needs</h2>
            <p
              class="animated slideInDown animate3d"
            >We design our services and products with our customers in our heart.</p>
            <!-- <router-link to="/products" class="carousel-btn animated zoomIn animate3d">Get Started</router-link> -->
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
  .carousel-img {
    width: auto;
    height: 82vh;
    display: block !important;
    width: 100vw;
  }
  .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 30%;
    transform: translateX(-50%, -50%);
    width: 60%;
    text-align: left;
    color:#fff;
    h5{
      color:#fff;
      padding-bottom: 1rem;
    }
    h2 {
      font-weight: 900;
      font-size: 3rem;
      padding-bottom: 2rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      text-shadow: 0.03em 0.03em .0.5em rgba(0,0,0,.5);
      line-height: 1.3;
    }
    p {
      letter-spacing: 1px;
      font-size: 1rem;
      padding-bottom: 1rem;
      opacity: 0.5;
    }
    .carousel-btn {
      color: #fff;
      background: #2ECC71;
      padding: 1.2rem 4rem;
      text-align: center;
      font-size: 0.9rem;
      text-decoration: none;
      border-radius: 3px;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
}

@media only screen and (max-width: 960px) {
  .carousel__wrapper {
    .carousel-img {
      width: auto;
      height: 100vh;
      max-height: 600px;
      display: block;
    }
    .carousel-caption {
      position: absolute;
      top: 28%;
      width: 80%;
      transform: translateX(-50%, -50%);
      text-align: left;
      h2 {
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }
      p {
        font-size: 0.8rem;
        padding-bottom: 2rem;
      }
    }
  }
}
</style>