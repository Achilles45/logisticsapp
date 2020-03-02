<template>
<div class="add">
    <div class="container">
        <div class="row pt-5">
            <!-- <div class="col-md-2"></div> -->
            <div class="col-12">
                <h3>Create a new Package</h3>
                <p>This is to enable you create a new Package easily</p>
                <hr>
                <br>
                <form @submit.prevent="createPackage()" action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Receiver's Name</label>
                                <input type="text" class="form-control" v-model="receiver_name">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Items (Number e.g 2,4,7...)</label>
                                <input type="number" class="form-control" v-model="items">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Current Location</label>
                                <input type="text" class="form-control" v-model="location">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Insurance e.g safety</label>
                                <input type="text" class="form-control" v-model="insurance">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Senders Name</label>
                                <input type="text" class="form-control" v-model="sender_name">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Senders Address</label>
                                <input type="text" class="form-control" v-model="sender_address">
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Shipment Date</label>
                                <input type="date" class="form-control" v-model="shipment_date">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Shipping Address</label>
                                <input type="text" class="form-control" v-model="shipping_address">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Status e.g On hold</label>
                                <input type="text" class="form-control" v-model="status">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Weight e.g 100Kg</label>
                                <input type="text" class="form-control" v-model="weight">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Delivery Date</label>
                                <input type="date" class="form-control" v-model="delivery_date">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Comment e.g To be delivered</label>
                                <input type="text" class="form-control" v-model="comment">
                            </div>
                        </div>
                    </div><br>
                      <div v-if="err" class="alert alert-danger">
                        {{err}}
                    </div>
                      <div v-if="success" class="alert alert-success">
                        {{success}}
                        </div>
                    <button type="submit" class="add__btn">Create Package</button>
                </form>
                <br>
            </div>
            <!-- <div class="col-md-2"></div> -->
        </div>
    </div>
</div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    data(){
        return{
            comment:null,
            delivery_date:null,
            insurance:null,
            items:null,
            location:null,
            receiver_name:null,
            sender_name:null,
            sender_address:null,
            shipment_date:null,
            shipping_address:null,
            weight:null,
            status:null,
            err:null,
            success:null
        }
    },
    methods:{
        createPackage(){
            //Check if the user has filled in all the details now
            if(!this.comment || !this.delivery_date || !this.insurance || !this.items || !this.location || !this.receiver_name || !this.sender_name || !this.sender_address || !this.shipment_date || !this.shipping_address || !this.weight || !this.status){
                this.err = 'Error. Please make sure all fields has been filled out first'
            }else{
                //Create a new package in firestore now
                db.collection('package').add({
                    comment:this.comment,
                    delivery_date:this.delivery_date,
                    insurance:this.insurance,
                    items:this.items,
                    location:this.location,
                    receiver_name:this.receiver_name,
                    sender_name:this.sender_name,
                    sender_address:this.sender_address,
                    shipment_date:this.shipment_date,
                    shipping_address:this.shipping_address,
                    weight:this.weight,
                    status:this.status
                })
                .then(()=>{
                    this.success = 'Package successfully created. Please go to your firebase databse and copy the ID under packages section'
                })
                .catch(err =>{
                    this.err = err.message
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
form{
    label{
        font-size: .85rem;
        font-weight: bold;
        color:#454545;
    }
    input{
        height: 2.8rem;
        box-shadow: none !important;
        font-size: .9rem;
    }
    .add__btn{
        background: #052c7d;
        padding: 1rem 4rem;
        width: 100%;
        color:#fff;
        font-size: .9rem;
        border: none;
        border-radius: 3px;
        font-weight: bold;
    }
    .alert{
        font-size: .9rem;
    }
}
</style>