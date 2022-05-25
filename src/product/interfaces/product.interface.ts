import{Document} from 'mongoose'
export interface Product extends Document {
    readonly name : string;
    readonly description : string;
    readonly createdAt : Date;
 }