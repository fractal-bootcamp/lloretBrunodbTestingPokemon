import app from "..";
import { Request, Response, Router } from 'express';
import { dbGetTrainersList } from "../Controllers/controllers.ts";


const router = Router();


router.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello there :)")

});

router.get('/trainers', dbGetTrainersList)






export default router