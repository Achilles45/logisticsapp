<template>
  <div class="wrapper">
      <div class="content text-center">
          <h1>Exceeded Allocated Bandwidth</h1>
          <p>Your website traffic analytics has shown that you have exceeded the total bandwidth resources that was allocated to your servers on the February 25th, 2020 hosted with namecheap.com. To be able to continue enjoying our reliable web hosting, please purchase more bandwidth resources starting from $100 to $300 depending on the plan that suits your company most. Sorry for any inconvenience.</p>
          <hr>
          <p>&copy; 2020. All rights reserved. Namecheap.com</p>
          <small>Namecheap, Inc. 4600 East Washington Street Suite 305 Phoenix, AZ 85034, USA</small><br><br><br>
          <a href="https://www.namecheap.com/myaccount/login-signup/" class="button">Purchase Plan Now</a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper{
    background: #052c7d;
    font-family: 'Nunito';
    height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        max-width: 600px;
        margin: 0 auto;
        padding: 0 .7rem;
        hr{
            background: #fff;
            opacity: .6;
        }
        h1{
            font-weight: bold;
        }
        p{
            font-size: .9rem;
            padding-top: 1rem;
            opacity: .9;
            line-height: 2;
        }
        small{
            opacity: .7;
        }
        .button{
            background: #2ECC71;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            color:#fff;
            text-decoration: none;
        }
    }
}
</style>