import app from "..";
import { Request, Response, Router } from 'express';

const router = Router();


router.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello there :)")

});




export default router