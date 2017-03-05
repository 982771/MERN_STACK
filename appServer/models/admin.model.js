'use strict';

/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
		type: String,
		default: '',
	},
	fmno: {
		type: Number,
		default: 0
	}
  });

export default mongoose.model('Admin', adminSchema);




