import { model, models, Schema } from 'mongoose'

const TransactionSchema = new Schema({
  createAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    tupe: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
})

const Transaction =
  models?.Transaction || model('Transacttion', TransactionSchema)

export default Transaction
