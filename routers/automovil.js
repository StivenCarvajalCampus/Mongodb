import { Router } from "express";
import { conex } from "../db/atlas.js";
import { limitGet } from "../limit/config.js";
import { plainToClass } from "class-transformer";
import { DTO } from '../dtocontroller'