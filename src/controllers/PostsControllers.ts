import { Request, Response } from 'express'
import { PostsModel } from '../models/PostsModels'
import { PostsT } from '../types/PostsTypes'

export const Get = async (req: Request, res: Response) => {
    const Posts: PostsT[] = await PostsModel.find()

    return res.status(200).send({ success: true, data: Posts})
}

export const Post = async (req: Request, res: Response) => {
    const { title, description } = req.body

    const Create: PostsT = await PostsModel.create({ title, description })

    return res.status(200).send({ success: true, data: Create})
}

export const Put = async (req: Request, res: Response) => {
    const { id } = req.params
    const payload = req.body

    const Edit: PostsT | null = await PostsModel.findByIdAndUpdate({ id }, { payload })

    if (Edit == null)
        return res.status(404).send({ success: false, data: 'Post to edit not found' })

    return res.status(200).send({ success: true, data: Edit})
}

export const Delete = async (req: Request, res: Response) => {
    const { id } = req.params
    
    const Delete: PostsT | null = await PostsModel.findByIdAndDelete({ id })

    if (Delete == null)
        return res.status(404).send({ success: false, data: 'Post to delete not found' })

    return res.status(200).send({ success: true, data: Delete})
}