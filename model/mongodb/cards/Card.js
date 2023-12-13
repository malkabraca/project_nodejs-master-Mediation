const mongoose = require("mongoose");
const {
  URL,
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidation");

const cardSchema = new mongoose.Schema({
  title: DEFAULT_STRING_SCHEMA_REQUIRED,
  street: {
    type: String,
    maxLength: 256,
    trim: true,
    minLength: 2,
    required: true,
  },
  meter: {
    type: Number,
    required: true,
    trim: true,
    minLength: 1,
  },
  floor: {
    type: Number,
    required: true,
    trim: true,
    minLength: 1,
  },
  rooms: {
    type: Number,
    required: true,
    trim: true,
    minLength: 1,
  },
  description: { ...DEFAULT_STRING_SCHEMA_REQUIRED, maxLength: 1024 },
  price: {
    type: String,
    minLength: 1,
    required: true,
  },
  imageUrl: {
    type: String,
    validate: {
      validator: function (value) {
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/;
        const filePathRegex = /^(\.\.\/)?[\w-\/.]+$/;
        return urlRegex.test(value) || filePathRegex.test(value);
      },
      message: "Invalid address format",
      trim: true,
       default:
         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  imageAlt: {
    type: String,
    maxLength: 256,
    trim: true,
    default:
      "The pictures of the house",
  },
  category: DEFAULT_STRING_SCHEMA_REQUIRED,
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
    trim: true,
  },
  likes: [String],
  additionalPictures: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Card = mongoose.model("cards", cardSchema);

module.exports = Card;
