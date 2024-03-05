import express, { response } from 'express';
import { PORT, mongodbURL } from './config.js';
import mongoose from 'mongoose';
import { Birthday } from './models/birthModels.js';
import birthdayRoutes from './routes/birthdayRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());

/* Checks if the server is running */
app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Welcome to the Birthday Beacon API!');
});

/* Connects the router to the server */
app.use('/birthdays', birthdayRoutes);

/* CORS policy */
app.use(cors());

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
