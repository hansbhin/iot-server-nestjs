import * as mongoose from 'mongoose';

export const IotSchema = new mongoose.Schema({
    id: Number,
    name: String,
});