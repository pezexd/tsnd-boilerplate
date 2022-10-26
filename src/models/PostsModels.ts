import { getModelForClass, prop } from '@typegoose/typegoose'

export class PostsClass {
    @prop({ type: String })
    title?: string

    @prop({ type: String })
    description?: string
}

export const PostsModel = getModelForClass(PostsClass)