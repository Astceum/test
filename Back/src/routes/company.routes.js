import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPost, createPost, updatePost, deletePost, getPosts } from "../controllers/company.controller.js";

const router = Router()

router.get('/post-company', getPosts)
router.post('/post-company', authRequired, createPost )
router.put('/post-company/:id', authRequired, updatePost )
router.delete('/post-company/:id', authRequired, deletePost )
router.get('/post-company/:id', authRequired, getPost)


export default router