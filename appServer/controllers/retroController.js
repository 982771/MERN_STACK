'use strict';

/**
 * Module dependencies.
 */
import Retro from '../models/retro.model';
import GSD from '../models/gsd.model';
import mongoose from 'mongoose';

export function getRetrosById(req, res) {
  const validId = mongoose.Types.ObjectId.isValid(req.params.sessionId);
  if(validId)
  {
    Retro.findOne({_id: req.params.sessionId}).exec(function(err, retro){
        if(err) throw err;
        else res.json(retro);
    });
  }
  else res.json(null);

}

export function createSession(req, res){
  const retro = new Retro(req.body);
	retro.save(function (error, retros) {
		if(error) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(error)
			});

		}
		else {
			res.json(retros);
		}
	});
}
