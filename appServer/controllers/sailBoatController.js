'use strict';

/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import SailBoat from '../models/sailboat.model';
import Retro from '../models/retro.model';

export function getSailBoat(req, res) {

  SailBoat.aggregate([
    { $match: {'parent_id' : mongoose.Types.ObjectId(req.params.id)}},
    {$lookup: {
        from: 'createretros',
        localField: 'parent_id',
        foreignField: '_id',
        as: 'retro'
      }
    },
    { $unwind: "$retro" },
  ], function(err, sailboat){
      res.json(sailboat[0]);
  })
  // GSD.findOne({parent_id: req.params.id}).exec(function(err, gsd){
  //     if(err) throw err;
  //     else res.json(gsd);
  //
  // });

}

export function createSailBoat(req, res){
  console.log(req.params.id);
  const sailboat = new SailBoat();
  sailboat.parent_id = mongoose.Types.ObjectId(req.params.id);
  sailboat.save(function (error, sailboat) {
		if(error) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(error)
			});

		}
		else {
			res.json(sailboat);
		}
	});

}
