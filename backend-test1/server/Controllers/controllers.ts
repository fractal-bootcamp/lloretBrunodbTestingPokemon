import prisma from '../client'
import { Request, Response } from 'express';

//create the getUsersListFromDB

export const dbGetTrainersList = async function (req: Request, res: Response) {

    try {
        const trainers = await prisma.trainer.findMany()
        return res.json({ trainers })
    }

    catch (error) {

        res.status(400).send("Error here :)")
    }

}

