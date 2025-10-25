import type { NextApiRequest, NextApiResponse } from 'next';
import * as Server from '@common/server';

export default async function apiIndex(req: NextApiRequest, res: NextApiResponse) {
  await Server.cors(req, res);

  res.json({
    success: true,
    message: 'hey there, friend.',
  });
}

export const config = {
  api: {},
};
