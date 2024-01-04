import express from 'express';
const router = express.Router();


router.post('/chat', (req, res) => {
    res.send('POST request to the homepage');
});

router.get('/history/:id', (req, res) => {
    res.send('GET request to the homepage');
});

export default router;