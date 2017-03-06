'use strict';

/**
 * Module dependencies.
 */
import Admin from '../models/admin.model';

/**
 * Create a Session
 */
export function getAdmins(req, res) {
Admin.find().exec(function(err,admin){
		if(err) throw err;
		res.json(admin);
	});
//res.json("Hello ");
}

export function addAdmin(req, res){
	const admin = new Admin(req.body);
	admin.save(function (error, admins) {
		if(error) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(error)
			});

		}
		else {
			res.json(admins);
		}
	});

}

export function deleteAdmin(req, res) {
	var adminId = req.params.id;
	Admin.remove({_id: adminId},function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
	});
};
