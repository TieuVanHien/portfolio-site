import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const downloadHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.resolve('public/resume.pdf');

  try {
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).end('Internal Server Error');
  }
};

export default downloadHandler;
