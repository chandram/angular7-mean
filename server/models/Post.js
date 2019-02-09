import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Post = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    default: 'Open'
  }
})

export default mongoose.model('Post', Post)
