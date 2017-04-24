'use strict';

/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import GSD from '../models/gsd.model';
import Retro from '../models/retro.model';

export function getGSD(req, res) {

  GSD.aggregate([
    { $match: {'parent_id' : mongoose.Types.ObjectId(req.params.id)}},
    {$lookup: {
        from: 'createretros',
        localField: 'parent_id',
        foreignField: '_id',
        as: 'retro'
      }
    },
    { $unwind: "$retro" },
  ], function(err, gsd){
      res.json(gsd[0]);
  })
  // GSD.findOne({parent_id: req.params.id}).exec(function(err, gsd){
  //     if(err) throw err;
  //     else res.json(gsd);
  //
  // });

}

export function createGSD(req, res){
  console.log(req.params.id);
  const gsd = new GSD();
  gsd.parent_id = mongoose.Types.ObjectId(req.params.id);
  gsd.save(function (error, gsd) {
		if(error) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(error)
			});

		}
		else {
			res.json(gsd);
		}
	});

}

export function createGladStory(req, res){
  const glad = req.body;
  GSD.findOneAndUpdate({parent_id: req.params.id},{$push: {glad: req.body}}, {safe: true, upsert: true, new : true},).exec(function(err,gsd){
    res.json(gsd);
  })
}
