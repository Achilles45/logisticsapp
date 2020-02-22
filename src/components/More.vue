<template>
  <div class="more container-fluid">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h2>MORE SERVICES</h2>
                  <P>We offer a wide range of serices to our customers</P>
              </div>
          </div>
          <div class="services__wrapper">
              <div class="services__card d-flex justify-content-between">
                 <div class="img__holder">
                      <img src="../assets/images/plane.svg" class="icon" alt="">
                 </div>
                  <div class="content">
                      <h6>Air Freight</h6>
                      <p>Our air facilities are always available to deliver packages with great speed and efficiency</p>
                  </div>
              </div>
               <div class="services__card d-flex justify-content-between">
                  <div class="img__holder">
                      <img src="../assets/images/ship.svg" class="icon" alt="">
                  </div>
                  <div class="content">
                      <h6>Ocean Freight</h6>
                      <p>The company has vessels at it's disposals to help transfer goods across continents anytime the need arises.</p>
                  </div>
              </div>
               <div class="services__card d-flex justify-content-between">
             <div class="img__holder">
                      <img src="../assets/images/ship.svg" class="icon" alt="">
             </div>
                  <div class="content">
                      <h6>Ground Freight</h6>
                      <p>Our door-to-door service is superb for quick same day delivery and we actually deliver on time.</p>
                  </div>
              </div>
               <div class="services__card d-flex justify-content-between">
             <div class="img__holder">
                      <img src="../assets/images/house.svg" class="icon" alt="">
             </div>
                  <div class="content">
                      <h6>Warehousing</h6>
                      <p>You don't need to worry if your goods will ever get damaged while with us. We provide decent warehousing for all shipments until they are delivered.</p>
                  </div>
              </div>
               <div class="services__card d-flex justify-content-between">
             <div class="img__holder">
                      <img src="../assets/images/bus.svg" class="icon" alt="">
             </div>
                  <div class="content">
                      <h6>Delivery</h6>
                      <p>Door to door delivery is our pride. We are happy when we move an item to our customer and with a smile on their face receiving their items.</p>
                  </div>
              </div>
               <div class="services__card d-flex justify-content-between">
             <div class="img__holder">
                      <img src="../assets/images/track.svg" class="icon" alt="">
             </div>
                  <div class="content">
                      <h6>Tracking</h6>
                      <p>Want to know where your item is at any given point in time? No problem. We have provided you with an easy way of tracking your items in real time.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.more {
    padding: 3rem 0;
    h2{
        font-weight: bold;
        color: #2b2b2b;
        padding-top: 2rem;
    }
    .services__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 50px;
        padding-top: 1.5rem;
        .services__card{
            .icon{
                max-width: 50px;
                height: auto;
            }
            .content{
                padding-left: 1.3rem;
                h6{
                    font-weight: bold;
                    color: #2b2b2b;
                    padding-bottom: 1rem;
                }
                p{
                    font-size: .9rem;
                    color: #545454;
                    line-height: 1.7;
                }
            }
        }
    }
}
</style>