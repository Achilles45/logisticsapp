<template>
  <div class="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <small>Why you should consider using our services</small><br />
          <h4 class="pt-1 pb-2">COMPANY BENEFITS</h4>
          <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Real Time Tracking
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        The company has built a very intuitive tool to help you track your consignments in realtime from any device that can acess the internet
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Affordable Rates
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        All our pricing are considerate to our customers as we know humans are very sensitive to prices and it is also very competitive in the market place
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          World Class Storage
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Our storage facilities are world class and you don't have to worry if your item will get damaged while in transit. We provide world class storage and handling.
      </div>
    </div>
  </div>
</div>
        </div>
        <div class="col-md-7">
          <div class="testimonial__wrapper text-center">
        <div class="testimonial__card">
          <img src="../assets/images/quote.svg" class="icon" alt="" />
          <div class="text">
            <img src="../assets/images/review.png" class="review" alt="" />
            <p>
              Their storage facilities are top notch... I got my parcel without
              a single scratch or dent to it. It was like they were handling it
              as though they were handling an egg.
            </p>
          </div>
        </div>
        <div class="testimonial__card">
          <img src="../assets/images/quote.svg" class="icon" alt="" />
          <div class="text">
            <img src="../assets/images/review2.png" class="review" alt="" />
            <p>
              Their sshipping services are worth the prices and they just don't
              deliver, they deliver on time and their staff are very polite.
            </p>
          </div>
        </div>
        <div class="testimonial__card">
          <img src="../assets/images/quote.svg" class="icon" alt="" />
          <div class="text">
            <img src="../assets/images/review3.png" class="review" alt="" />
            <p>
              I was actually satisfied. I got all my items in record time and
              the tracking process was very efficient.
            </p>
          </div>
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
.testimonial {
  padding: 6rem 0;
  h4{
    font-weight: bold;
    color:#2b2b2b;
    padding-top: .5rem;
    font-size: 1rem;
    opacity: .9;
  }
  .card{
    font-size: .8rem;
    button{
      font-size: .8rem;
    }
  }
  .heading {
    small {
      font-weight: bold;
      color: #052c7d;
    }
    h1 {
      font-weight: bold;
      padding-top: 0.5rem;
      font-size: 2.4rem;
      color: #272727;
    }
  }
  .testimonial__wrapper {
    margin-top: 3rem;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    align-items: center;
    ::-webkit-scrollbar {
      height: 1px; /* height of horizontal scrollbar ← You're missing this */
      width: 1px; /* width of vertical scrollbar */
      color: red;
    }
    .testimonial__card {
      display: inline-block;
      margin: 0 0.3rem;
      min-width: 550px;
      padding: 3rem;
      position: relative;
      .icon {
        position: absolute;
        left: 20px;
        top: 20px;
        max-width: 25px;
        height: auto;
      }
      .review {
        border-radius: 50px;
        max-width: 70px;
        height: auto;
      }
      p {
        padding-top: 1rem;
        font-size: 0.9rem;
        color: #2b2b2b;
      }
    }
  }
}
</style>
