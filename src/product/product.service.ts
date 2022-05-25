import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {}
