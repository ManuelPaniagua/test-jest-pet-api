import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSdoc from 'swagger-jsdoc';
import petRoutes from './pets/routes/pets.routes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// swagger definition
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pets API',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./pets/routes/*.js'],
};

/* Global middlewares */
app.use(cors());
app.use(express.json());
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSdoc(swaggerSpec)),
);

/* Routes */
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.use('/pets', petRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(join(__dirname, 'public', 'index.html'));
});

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`),
  );
}

export default app;
