import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) sgMail.setApiKey(SENDGRID_API_KEY);
interface EmailData {
  name: string;
  email: string;
  message: string;
  success: boolean;
}

export const SendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      name,
      email,
      message
    }: { name: EmailData; email: EmailData; message: EmailData } = req.body;
    const body = {
      to: 'tieuvanhien01@gmail.com',
      from: 'tieuvanhien01@gmail.com',
      subject: `${name} sent you a message`,
      text: `Email => ${email}`,
      html: `<p>${message}</p>`
    };
    try {
      await sgMail.send(body);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({ success: false });
    }
  }
};

export default SendEmail;
