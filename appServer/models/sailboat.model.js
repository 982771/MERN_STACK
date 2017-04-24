'use strict';

/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sailSchema = new Schema({
  story:{
    type: String,
    default: ''
  },
  created_by: {
    type: String,
    default: '',
  }
});
const anchorSchema = new Schema({
  story:{
    type: String,
    default: ''
  },
  created_by: {
    type: String,
    default: '',
  }
});


const SailBoatSchema = new Schema({
  parent_id:{
    type: Schema.ObjectId,
    required: 'cannot be left blank'
  },
	sail: [sailSchema],
  anchor: [anchorSchema]
  });



export default mongoose.model('sailboat', SailBoatSchema);
