import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [disable, setDisable] = useState(true);
  const phone = '+1 (587)-917-5931';
  const emailAdr = 'tieuvanhien01@gmail.com';

  const handleValid = () => {
    if (name && email && message && subject) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleValid();

    try {
      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (res.ok) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setDisable(true);
        toast.success('Thanks for submitting the form!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="container contact flex items-center">
      <div className="contact-container flex justify-center  pt-16">
        <div className="info flex flex-col justify-start ">
          <div className="info-heading">
            <div className="heading flex items-center">
              <h1 className="text-6xl mb-4">Let&apos;s Chat</h1>
              <div className="line"></div>
            </div>

            <h2 className="text-lg mt-6">
              I&apos;m open for new projects and opportunities. Whether you
              represent a company seeking to hire or you simply want to engage
              in a conversation, I am eager to connect with you.
            </h2>
          </div>
          <div className="social-info mt-14 flex flex-col justify-center items-start">
            <Link
              href={`tel:${phone}`}
              className="flex justify-center items-center mb-2"
            >
              <div className="icon">
                <PermPhoneMsgOutlinedIcon />
              </div>
              <p className="text-lg ml-4">{phone}</p>
            </Link>
            <Link
              href={`mailto:${emailAdr}`}
              className="flex justify-center items-center"
            >
              <div className="icon">
                <EmailIcon />
              </div>
              <p className="text-lg ml-4"> {emailAdr}</p>
            </Link>
            <div className="flex mt-4">
              <Link
                className="icon flex justify-center items-center mr-2"
                href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                className="icon flex justify-center items-center"
                href="https://github.com/TieuVanHien"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </div>
          </div>
        </div>
        <div className="form-container flex justify-start">
          <form
            className="form flex flex-col justify-evenly items-center"
            onSubmit={handleSubmit}
          >
            <TextField
              className="input"
              label="Name"
              variant="standard"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className="input"
              label="Subject"
              variant="standard"
              multiline
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              className="input"
              label="Email"
              variant="standard"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="input"
              label="Message"
              variant="standard"
              rows={6}
              required
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {email && name && message ? (
              <button className="button" type="submit">
                Submit
              </button>
            ) : (
              <button
                className="button-disabled"
                type="submit"
                disabled={disable}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
