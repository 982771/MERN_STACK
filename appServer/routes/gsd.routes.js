import { Router } from 'express';
import * as GSDController from '../controllers/gsdcontroller';
const router = new Router();

// Get all Posts
router.route('/gsd/:id').get(GSDController.getGSD);

// Get one post by cuid
router.route('/gsd/:id').post(GSDController.createGSD);
router.route('/glad/:id').post(GSDController.createGladStory);
router.route('/sad/:id').post(GSDController.createSadStory);
router.route('/mad/:id').post(GSDController.createMadStory);
//Create a New Session
//router.route('/gsd').post(GSDController.createGSD);

// Delete a post by cuid
//router.route('/admins/:id').delete(AdminController.deleteAdmin);

export default router;
