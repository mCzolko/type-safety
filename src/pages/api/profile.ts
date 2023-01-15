// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import profile, { Profile } from '@/pages/services/profile'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
  res.status(200).json(await profile())
}
