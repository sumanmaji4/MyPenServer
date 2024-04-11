import { Request, Response } from 'express'
import { Code } from '../models/Code'

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body

  try {
    const newCode = await Code.create({
      fullCode: fullCode,
    })
    newCode.save()
    return res.status(201).send({ url: newCode._id, status: 'saved' })
  } catch (error) {
    return res.status(500).send({ message: 'Error saving code', error })
  }
}

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body
  try {
    const dbResponse = await Code.findOne({ _id: urlId })
    if (!dbResponse) return res.status(404).send({ message: 'Code not found' })
    return res.status(200).send({ fullCode: dbResponse.fullCode })
  } catch (error) {
    return res.status(500).send({ message: 'Error saving code', error })
  }
}
