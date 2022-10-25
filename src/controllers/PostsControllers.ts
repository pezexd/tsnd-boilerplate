import { Request, Response } from 'express';

export const Get = (req: Request, res: Response) => {
    res.status(200).send('Post 1')
}