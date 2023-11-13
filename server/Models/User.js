const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialItemSchema = new Schema({
  id: String, //id
  name: String, // e.g., 'Instagram', 'LinkedIn', etc.
  socialHandle: String, // Social media profile name
  logo: String, // URL to the social media logo
  description: String // Description or additional information about the social media profile
});


const aboutSchema = new Schema({
  GSTIN: String,
  PANNumber: String,
  AboutText: String
});

const locationSchema = new Schema({
  Address: String,
  ZipCode: String,
  Latitude: Number,
  Longitude: Number
});

const gallerySchema = new Schema({
  IMG1: String,
  IMG2: String,
  IMG3: String,
  IMG4: String,
  IMG5: String
});

const paymentSchema = new Schema({
  PayPal: String,
  BankName: String,
  AccountHolderName: String,
  AccountNumber: String,
  IFSC: String,
  GooglePay: String,
  PhonePe: String,
  Paytm: String,
  UPI: String
});

const authenticationSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }

});

const cardSchema = new Schema({
  CardID: String,
  FirstName: String,
  LastName: String,
  ProfileImage: String,
  CoverImage: String,
  CoverLogo: String,
  Contact: String,
  DOB: String,
  BusinessName: String,
  Position: String,
  Designation: String,
  Website: String,
  Socials: [socialItemSchema],
  About: aboutSchema,
  Location: locationSchema,
  Gallery: gallerySchema,
  Payment: paymentSchema
  
});



const userSchema = new Schema({

displayName:String,
displayProfile:String,
email:String,
Authentication: authenticationSchema,
Cards:[cardSchema]
})



const User = mongoose.model('User', userSchema);

module.exports = User;
