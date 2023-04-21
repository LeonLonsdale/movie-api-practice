import express from 'express';
import {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from './../controllers/userController.js';

export const router = express.Router();

router.route('/').post(createUser).get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
