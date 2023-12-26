import mongoose from "mongoose" ;

const listingSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true ,
    },
    description : {
        type : String , 
        required : true 
    }, 
    size : {
        type : Number , 
        required : true 
    },
    gender : {
        type : String , 
        required : true 
    }, 
    regularPrice : {
        type : Number , 
        required : true
    }, 
    discountPrice :  {
        type : Number , 
        required : true 
    },
    offer : {
        type : Boolean , 
        required : true 
    }, 
    used : {
        type : Boolean , 
        required : true 
    }, 
    imageUrls : {
        type : Array , 
        required : true 
    },
    userRef : {
        type : String , 
        required : true 
    }
}, {timestamps : true} )

const Listing = mongoose.model('Listing' , listingSchema) ; 

export default Listing ; 