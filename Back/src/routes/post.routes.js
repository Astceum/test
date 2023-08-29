import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPost, createPost, updatePost, deletePost, getPosts } from "../controllers/post.controller.js";

const router = Router()

router.get('/post', getPosts)
router.post('/post', authRequired, createPost )
router.put('/post/:id', authRequired, updatePost )
router.delete('/post/:id', authRequired, deletePost )
router.get('/post/:id', authRequired, getPost)

export default router