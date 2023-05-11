import express from "express";
import {genrerateNewShortUrl, getAnalytics} from "../controllers/urlController.js"

const router = express.Router();

router.post('/', genrerateNewShortUrl);
// router.get('/', (req, res) => {
//     res.status(200).send("succes");
// });

router.get('/analytics/:shortId',getAnalytics);

export default router;