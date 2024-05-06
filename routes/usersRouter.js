import express from "express";
import { getUser, getUsers, createUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
