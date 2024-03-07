import express, { response } from 'express';
import { PORT, mongodbURL } from './config.js';
import mongoose from 'mongoose';
import birthdayRoutes from './routes/birthdayRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());

/* Checks if the server is running */
app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Welcome to the Birthday Beacon API!');
});

/* CORS policy: Middleware enabling CORS for all routes */
app.use(cors());

/* Connects the router to the server */
app.use('/birthdays', birthdayRoutes);

/* Sets up database connection */
mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log('MongoDB successfully connected!');
        app.listen(PORT, () => {
            console.log(`Server is running on port localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection error: ', error);
    });
