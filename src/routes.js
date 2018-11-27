// Load express and Router
import express from 'express';
const router = express.Router();

// GET ROUTE(S)
router.get('/', (req, res) => {
  res.send('Hello World');
});

// POST ROUTE(S)
router.post('/save', (req, res) => {
  res.json(req.body);
});

export default router;