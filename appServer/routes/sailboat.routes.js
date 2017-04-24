import { Router } from 'express';
import * as sailBoatController from '../controllers/sailBoatController';
const router = new Router();

// Get all Posts
router.route('/sailboat/:id').get(sailBoatController.getSailBoat);

// Get one post by cuid
router.route('/sailboat/:id').post(sailBoatController.createSailBoat);

//Create a New Session
//router.route('/gsd').post(GSDController.createGSD);

// Delete a post by cuid
//router.route('/admins/:id').delete(AdminController.deleteAdmin);

export default router;
