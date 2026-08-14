import { model, Schema } from "mongoose";
const bookingSchema = new Schema({
  place: { type: Schema.Types.ObjectId, ref: "Place" },
   user: { type: Schema.Types.ObjectId, ref: "User" },
  price: Number,
  totalprice:Number,
  checkin: String,
  checkout: String,
  guest: Number,
  nights: Number,
});
export default model("Booking", bookingSchema);
