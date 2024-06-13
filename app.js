// app.js

import express from 'express';
import cors from 'cors';
import petRoutes from './pets/routes/pets.routes.js';

const app = express();
const port = 3000;

/* Global middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use('/pets', petRoutes);  // Monta las rutas de pets bajo /pets en la URL

/* Server setup */
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
