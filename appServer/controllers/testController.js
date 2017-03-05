'use strict';

/**
 * Module dependencies.
 */
import Admin from '../models/admin.model';

/**
 * Create a Session
 */
export function getPosts(req, res) {
Admin.find().exec(function(err,story){
		if(err) throw err;

		console.log(story);
		res.json(story);
	});
//res.json("Hello ");
}
