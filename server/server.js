import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Post from './models/Post';
import { nextTick } from 'q';

const app = express();
// app.get('/', (req, res) => {res.send('hellow')});

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// run sudo mkdir -p /data/db &
// run mondo db with sudo ./mongod
// https://michelebusta.com/the-little-things-5-initialize-a-local-mongo-db-8972d71b7715
const url = 'mongodb://localhost:27017/AngularMean';
mongoose.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created! ");
  // console.log(db);
  // db.close();
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established successfully!");
});
connection.once('close', () => {
  console.log("MongoDB connection closed successfully!");
});

router.route('/posts').get((req, res) => {
  Post.find((err, posts) => {
    if (err)
      console.log(err);
    else {
      res.json(posts);
    }
  })
});

router.route('/posts/:id').get((req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err)
      console.log(err);
    else {
      res.json(post);
    }
  })
});

router.route('/posts').post((req, res) => {
  let post = new Post(req.body);
  post.save()
  .then((issue) => {
    res.status(200).json({'message' : 'Added Successfully!' })
  })
  .catch(err => {
    res.status(400).json({'message' : 'failed to create new record' })
  })
});

router.route('/posts/:id').put((req, res) => {
  Post.findById(req.param.id, (err, post) => {
    if (!post) {
      return next(new Error('could not find any post'))
    } else {
      console.log(req.body);
      post.title = req.body.title;
      post.content = req.body.content;
      post.save().then(post  => {
        res.status(200).json({})
      }).catch(err => {
        res.status(400).json({})
      })
    }
  })
});

router.route('/posts/:id').delete((req, res) => {
  Post.findByIdAndDelete({_id: req.params.id}, (err, post) => {
    if (err)
      console.log(err);
    else {
      res.json(post);
    }
  })
});

app.use('/', router);
app.listen(4000, () => console.log("Express running on port 4000"))
