import { parseEnv } from 'znv'
import { z } from 'zod'

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

export const { NICKNAME } = parseEnv(process.env, {
    NICKNAME: z.string().min(1),
})
