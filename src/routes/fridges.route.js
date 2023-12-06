import express from "express";
import asyncHandler from 'express-async-handler';

import { makeFridge, eraseFridge, showFridges } from "../controllers/fridges.controller";

export const fridgesRouter = express.Router();

//Handlers
fridgesRouter.post('/', asyncHandler(makeFridge));
fridgesRouter.get('/lists', asyncHandler(showFridges));
fridgesRouter.delete('/:fridgeId', asyncHandler(eraseFridge));