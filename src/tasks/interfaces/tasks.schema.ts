import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    email:{type:String, unique:true},
    title:String,
    content:String,
    date:Date
},{timestamps:true, collection: 'tasks'})
