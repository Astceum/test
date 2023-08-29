import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPost, createPost, updatePost, deletePost, getPosts } from "../controllers/sliderhome.controller.js";

const router = Router()

router.get('/post-slider', getPosts)
router.post('/post-slider', authRequired, createPost )
router.put('/post-slider/:id', authRequired, updatePost )
router.delete('/post-slider/:id', authRequired, deletePost )
router.get('/post-slider/:id', authRequired, getPost)


export default router