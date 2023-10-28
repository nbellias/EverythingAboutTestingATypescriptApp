import Joi from 'joi';

export interface Joke {
    type: string;
    setup: string;
    punchline: string;
    id: number;
}

export const jokeSchema = Joi.object({
    type: Joi.string().required(),
    setup: Joi.string().required(),
    punchline: Joi.string().required(),
    id: Joi.number().required(),
});