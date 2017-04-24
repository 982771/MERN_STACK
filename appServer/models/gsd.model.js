'use strict';

/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gladSchema = new Schema({
  story:{
    type: String,
    default: ''
  },
  created_by: {
    type: String,
    default: '',
  }
});
const madSchema = new Schema({
  story:{
    type: String,
    default: ''
  },
  created_by: {
    type: String,
    default: '',
  }
});
const sadSchema = new Schema({
  story:{
    type: String,
    default: ''
  },
  created_by: {
    type: String,
    default: '',
  }
});

const GSDSchema = new Schema({
  parent_id:{
    type: Schema.ObjectId,
    required: 'cannot be left blank'
  },
	glad: [gladSchema],
  mad: [madSchema],
  sad: [sadSchema],
  });



export default mongoose.model('GSD', GSDSchema);
