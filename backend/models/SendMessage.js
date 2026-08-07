import mongoose from "mongoose";

const sendMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    serviceType: {
      type: String,
      required: true,
      enum: {
        values: [
          "bridal",
          "party",
          "hd",
          "halloween",
          "hair",
          "draping",
          "pro-classes",
          "self-grooming",
          "other",
        ],
        message: "{VALUE} is not a valid makeup category",
      },
      default: "other",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const sendMessageModel = mongoose.model("Inquiry", sendMessageSchema);

export default sendMessageModel;