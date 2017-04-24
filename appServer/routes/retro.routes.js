import { Router } from 'express';
import * as RetroController from '../controllers/retrocontroller';
const router = new Router();

// Get all Posts
router.route('/retro/:sessionId').get(RetroController.getRetrosById);

// Get one post by cuid
//router.route('/posts/:cuid').get(PostController.getPost);

//Create a New Session
router.route('/retro').post(RetroController.createSession);

// Delete a post by cuid
//router.route('/admins/:id').delete(AdminController.deleteAdmin);

export default router;
