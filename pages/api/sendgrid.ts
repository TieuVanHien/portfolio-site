import axios from 'axios';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailData) => {
  const apiKey = process.env.SENDGRID_API_KEY;
  const url = 'https://api.sendgrid.com/v3/mail/send';
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };
  const data = {
    personalizations: [
      {
        to: [{ email: 'tieuvanhien01@gmail.com' }], // Replace with your own email address
        subject: 'New message from your website!'
      }
    ],
    from: { email: email, name: name },
    content: [{ type: 'text/plain', value: message }]
  };

  try {
    await axios.post(url, data, { headers: headers });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error(error);
  }
};
