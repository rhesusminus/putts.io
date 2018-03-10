require('dotenv').config();

const prefix = `${process.env.API_BASE}/auth`;

export default router => {
  router.get(`${prefix}`, (req, res) => {
    res.send('auth!');
  });
}
