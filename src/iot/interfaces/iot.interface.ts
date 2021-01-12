import { Document } from 'mongoose';

export interface IIot extends Document {
    readonly id: number;
    readonly name: string;
}