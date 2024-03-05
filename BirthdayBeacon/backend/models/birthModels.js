import mongoose from 'mongoose';

const birthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    entryDate: {
        type: Date,
        default: Date.now,
    },
    });

export const Birthday = mongoose.model('birthday', birthSchema);