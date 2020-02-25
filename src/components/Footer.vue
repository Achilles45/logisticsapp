<template>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>The Company</h3>
          <p>
            The Company was established to cater for domestic and commercial
            shipping world wide with our headquartered in and Branches all over
            the world.
          </p> <br>
          <h6>For enquiries, send mails to</h6>
          <p>Isabelladangello11@gmail.com</p>
          <p>Ericlogan533@gmail.com</p>
          <h6>You can also contact us at</h6>
          <p>Al Khabaisi Area Dubai UAE</p>
        </div>
        <div class="col-md-4">
          <h3>Useful Links</h3>
          <ul class="d-block justify-content-between flex-direction-column">
            <li><router-link to="/"><i class="fa fa-angle-right"></i>&nbsp;&nbsp; Home</router-link></li>
            <li><router-link to="/about"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;About Us</router-link></li>
            <li><router-link to="/contact"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;Contact Us</router-link></li>
            <li><router-link to="/request"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;Service request</router-link></li>
            <li><router-link to="/tracking"><i class="fa fa-angle-right"></i>&nbsp;&nbsp;Track your goods</router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Subscribe to our newsletter</h3>
          <form action="">
            <input
              type="email"
              class="form-control"
              placeholder="Email Address"
            /><br />
            <button type="submit" class="newsletter__btn">Subscribe</button>
          </form>
        </div>
      </div>
      <br />
      <hr />
      <small
        >&copy; All right reserved. Logistics, 2020. Terms and Conditions
        Apply</small
      >
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.9)),
    url('../assets/images/slider-3.jpg');
  background-size: cover;
  background-position: center;
  padding: 7rem 0;
  color: #fff;
  h3 {
    padding-bottom: 2rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    opacity: 0.8;
  }
  h6{
    font-size: 1rem;
    opacity: .9;
    padding-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 1.7;
  }
  a{
    color:#fafafa;
    line-height: 3;
    text-decoration: none;
    font-size: .85rem;
   opacity: .8;
  }
  form {
    input {
      height: 3rem;
      background: #f5f5f5;
      border-radius: 3px;
      box-shadow: none !important;
      opacity: 0.9;
      font-size: 0.9rem;
      padding: 0.3rem 0.5rem;
    }
    .newsletter__btn {
      background: #052c7d;
      color: #fff;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      border: none;
      font-size: 0.9rem;
    }
  }
  small {
    opacity: 0.7;
  }
}
hr{
  background:#fafafa;
  widows: 0.05rem;
}
</style>
