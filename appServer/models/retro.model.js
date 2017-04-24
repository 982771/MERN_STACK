'use strict';

/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const createRetroSchema = new Schema({
  created_by: {
		type: String,
		default: '',
	},
	type: {
		type: String,
    trim: true,
		required: 'comment cannot be blank',
	},
  project_name: {
    type: String,
    trim: true,
    default: '',
  }
  });


export default mongoose.model('CreateRetro', createRetroSchema);
