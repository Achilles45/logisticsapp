<template>
  <div class="track">
    <Topbar />
    <Navbar />
    <div class="track__heading">
      <div class="container">
        <h2>About Us</h2>
        <p>Get to know that your logistics needs are in good hands.</p>
      </div>
    </div>
    <div class="container">
      <div class="row content">
        <div class="col-md-4">
          <img src="../assets/images/worker.jpg" class="img-fluid pb-5" alt="" />
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-7">
          <h3>About Us</h3>
          <p>
            We have been professionally handling logistics needs for all our
            customers for 10 years and we have proven to be a leader in the
            industry. Our services are not restricted to any particular state,
            region or country as we are a global company and we move goods world
            wide.<br />
            Our people are some of the best hands in the industry. When you use
            our services, you are sure of getting the best customer support. You
            get your goods delivered as at promise and you can track the
            movement of your goods in real time.
          </p>
        </div>
      </div>
    </div>
    <div class="vision__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>OUR GLOBAL VISION</h3>
            <p>
              From the onset, we set out to be a global provider of all forms of
              logistics needs and we have been expanding in that regards. Our
              vision is to help you effortlessly move goods from state to state,
              region to region, country to country and continent to continent
              through sea, air, land and others.<br />Our warehousing facilities
              are top notch and your goods are always secured until they are
              delivered to you
            </p>
          </div>
          <div class="col-md-6">
            <h3>WE ARE GROWING TOGETHER</h3>
            <p>
              Our core business relation is about people and we put people at
              them core of our business. Your growth is our priority. We enable
              businesses buy providing top notch logistics services. You want
              quality logistics services, try us today.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="team__wrapper">
      <div class="container">
        <h2>THE TEAM</h2>
        <div class="team">
          <div class="team__card">
            <img src="../assets/images/team3.jpg" class="img-fluid" alt="" />
            <h3>ALLAN STEWERT</h3>
            <P>CEO</P>
          </div>
          <div class="team__card">
            <img src="../assets/images/team4.jpg" class="img-fluid" alt="" />
            <h3>BRADON CASTILO</h3>
            <P>OPERATIONS HEAD</P>
          </div>
          <div class="team__card">
            <img src="../assets/images/team5.jpg" class="img-fluid" alt="" />
            <h3>ALLAN STEWERT</h3>
            <P>CUSTOMER RELATIONS</P>
          </div>
          <div class="team__card">
            <img src="../assets/images/team2.jpg" class="img-fluid" alt="" />
            <h3>JONATHAN GRANT</h3>
            <P>CTO</P>
          </div>
        </div>
      </div>
    </div>
    <div class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>Subscribe to our corporate newsletter</h3>
          </div>
          <div class="col-md-6">
            <form action="" class="d-flex">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email..."
              />
              <button type="submit" class="newsletter__btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    track() {
      alert('Working ...')
    }
  }
}
</script>

<style lang="scss" scoped>
.track {
  background: #fff;
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
  .content {
    margin-top: 6rem;
    h3{
      font-weight: bold;
      color: #2b2b2b;
    }
    p{
      color:#545454;
      font-size: .95rem;
      line-height: 2;
      padding-top: 1.2rem;
    }
  }
  .vision__wrapper {
    background: #f5f7f9;
    padding: 4rem 0rem;
    h3 {
      padding-bottom: 2rem;
      color: #454545;
      font-weight: bold;
    }
     p{
      color:#545454;
      font-size: .95rem;
      line-height: 2;
      padding-top: 1.2rem;
    }
  }
  .team__wrapper {
    background: #f5f7f9;
    h2{
      font-weight: bold;
      color: #2b2b2b;
      padding-bottom: 1rem;
    }
    .team {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      grid-gap: 40px;
      padding: 3rem 0;
      .team__card {
        text-align: center;
        h3 {
          font-size: 1.2rem;
          color: #2b2b2b;
          font-weight: bold;
          padding-top: 1rem;
        }
        p {
          font-size: 0.8rem;
          color: #545454;
        }
      }
    }
  }
  .newsletter {
    background: #2761d8;
    color: #fff;
    padding: 2rem 0;
    h3{
      font-size: 1.4rem;
    }
    form {
      align-items: center;
      width: 100%;
      input {
        height: 3rem;
        box-shadow: none !important;
        width: 100%;
        margin-right: 1rem;
        border-radius: 3px;
      }
      .newsletter__btn {
        background: #fff;
        color: #2761d8;
        border-radius: 3px;
        border: none;
        padding: 0.8rem 2.5rem;
        text-transform: uppercase;
        font-size: 0.8rem;
        &:hover {
          background: transparent;
          border: 0.5px solid #fff;
          transition: all ease-in 0.5s;
          color: #fff;
        }
      }
    }
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px) {
  .newsletter {
    h3 {
      text-align: center;
      font-size: 1.5rem;
      padding-bottom: 1.5rem;
    }
    form {
      flex-direction: column;
      input {
        width: 100% !important;
        margin-bottom: 1rem !important;
        margin-right: 0 !important;
      }
      .newsletter__btn {
        width: 100%;
      }
    }
  }
}
</style>
