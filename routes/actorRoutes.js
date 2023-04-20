import express from 'express';
import {
  createActor,
  getActor,
  getAllActors,
  updateActor,
  deleteActor,
} from './../controllers/actorController.js';

export const router = express.Router();

router.route('/').post(createActor).get(getAllActors);
router.route('/:id').get(getActor).patch(updateActor).delete(deleteActor);
