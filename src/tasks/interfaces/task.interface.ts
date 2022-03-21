import {Document} from 'mongoose';
export interface Task extends Document{
    readonly _id:string;
    readonly email:string;
    title:string;
    content:string;
    date:Date;
    createAt:Date;
    updateAt:Date;
}
