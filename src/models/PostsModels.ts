import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { collection: 'Posts', timestamps: true } })
export class PostsClass {
    @prop({ type: String })
    title?: string

    @prop({ type: String })
    description?: string
}

export const PostsModel = getModelForClass(PostsClass)