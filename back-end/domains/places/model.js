import { model, Schema } from "mongoose";
const placeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  photo: [String],
  adress: String,
  perks:[String],
  description: String,
  price: Number,
  checkin: String,
  extras: String,
  checkout: String,
  guest: Number,
});
export default model("Place", placeSchema);
