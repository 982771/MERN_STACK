import { Router } from 'express';
import * as AdminController from '../controllers/admincontroller';
const router = new Router();

// Get all Posts
router.route('/admins').get(AdminController.getAdmins);

// Get one post by cuid
//router.route('/posts/:cuid').get(PostController.getPost);

//Add a new Post
router.route('/admins').post(AdminController.addAdmin);

// Delete a post by cuid
router.route('/admins/:id').delete(AdminController.deleteAdmin);

export default router;
