import { Router } from "express";
import { addStudent } from "../controllers/studentController.js";

const studentRouter=Router()

studentRouter.post("/add",addStudent)

export default studentRouter