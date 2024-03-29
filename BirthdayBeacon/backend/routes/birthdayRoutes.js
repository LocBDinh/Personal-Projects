import express from 'express';
import { Birthday } from '../models/birthModels.js';

/* Create a router to handle the requests */
const router = express.Router();

/* Checks if the birthday is valid and allows for new birthdays to be added */
router.post('/', async (request, response) => {
    try{
        if (!request.body.name || !request.body.birthdate || !request.body.phone) {
            return response.status(400).send({
                message: 'Send all of the required fields: Name, Birthdate, and Phone Number!',
            });
        } 

        const newBirthday = {
            name: request.body.name,
            birthdate: request.body.birthdate,
            phone: request.body.phone,
        };
        
        const birthday = await Birthday.create(newBirthday);
        return response.status(201).send(birthday);
    
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }   
});

/* Get all birthdays */
router.get('/', async (request, response) => {
    try {
        const birthdays = await Birthday.find({});
        /* Format the schema to be more readable */
        const formattedSchema = birthdays.map(birthday => {
            /* Format the birthdate */
            const date = new Date(birthday.birthdate);
            const month = date.toLocaleString('default', { month: 'long' });
            const day = date.getDate();
            const year = date.getFullYear();
            /* Format the phone number */
            const number = birthday.phone;
            const areaCode = number.slice(0, 3);
            const prefix = number.slice(3, 6);
            const lineNumber = number.slice(6, 10);
            return {
            ...birthday.toObject(),
            birthdate: `${month} ${day}, ${year}`,
            phone: `(${areaCode}) ${prefix}-${lineNumber}`
            };
        });
        /* Return the formatted birthdays */
        return response.status(200).json({
            count: formattedSchema.length,
            data: formattedSchema
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* Get one birthday from id */
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const birthday = await Birthday.findById(id);
        return response.status(200).json(birthday);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* Update a birthday database */
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.name || !request.body.birthdate || !request.body.phone) {
            return response.status(400).send({
                message: 'Send all of the required fields: Name, Birthdate, and Phone Number',
            });
        }
        /* Create a result variable to store the updated birthday */
        const { id } = request.params;
        const result = await Birthday.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({message: 'Birthday not found'});
        }
        return response.status(200).send({message: 'Birthday updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* Delete a birthday from the database */
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Birthday.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({message: 'Birthday not found'});
        }
        return response.status(200).send({message: 'Birthday deleted successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;