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
    <section
      id="contact"
      className="contact flex flex-col h-auto justify-start lg:h-90vh lg:w-full lg:flex-row lg:flex lg:items-center lg:pt-16"
    >
      <div className="info w-full h-50vh lg:p-12 lg:w-1/2 lg:h-full  lg:flex lg:flex-col lg:justify-start ">
        <div className="info-heading">
          <div className="heading flex justify-start items-center lg:flex lg:items-center">
            <h1 className="text-4xl lg:text-6xl">Let&apos;s Chat</h1>
            <div className="line ml-4 w-1/3 lg:w-1/3 lg:ml-4"></div>
          </div>

          <h2 className="mt-8 text-base lg:text-lg lg:mt-6 lg:w-3/4">
            I&apos;m open for new projects and opportunities. Whether you
            represent a company seeking to hire or you simply want to engage in
            a conversation, I am eager to connect with you.
          </h2>
        </div>
        <div className="social-info mt-8 w-full lg:w-full lg:mt-14 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <Link
            href={`tel:${phone}`}
            className="flex mb-1 lg:flex lg:justify-center lg:items-center lg:mb-2"
          >
            <div className="icon mr-2 lg:w-8 lg:h-8">
              <PermPhoneMsgOutlinedIcon />
            </div>
            <p className="lg:text-lg lg:ml-4">{phone}</p>
          </Link>
          <Link
            href={`mailto:${emailAdr}`}
            className="flex mb-2 lg:flex lg:justify-center lg:items-center"
          >
            <div className="icon mr-2 lg:w-8 lg:h-8">
              <EmailIcon />
            </div>
            <p className="lg:text-lg lg:ml-4"> {emailAdr}</p>
          </Link>
          <div className="lg:flex lg:mt-4">
            <Link
              className="mr-1 lg:icon lg:flex lg:justify-center lg:items-center lg:mr-2"
              href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" className="lg:w-8 lg:h-8" />
            </Link>
            <Link
              className="icon lg:flex lg:justify-center lg:items-center"
              href="https://github.com/TieuVanHien"
              target="_blank"
            >
              <GitHubIcon fontSize="large" className="lg:w-8 lg:h-8" />
            </Link>
          </div>
        </div>
      </div>
      <div className="form-container mt-8 w-full h-70vh lg:m-0 lg:w-1/2 lg:h-full lg:flex lg:justify-start">
        <form
          className="form w-full h-full flex flex-col lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-evenly lg:items-center"
          onSubmit={handleSubmit}
        >
          <TextField
            className="input mb-8 w-full h-20 lg:mb-2 lg:w-3/4 lg:text-white"
            label="Name"
            variant="standard"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="input mb-8 h-20 lg:mb-2 lg:w-3/4 lg:text-white"
            label="Subject"
            variant="standard"
            multiline
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            className="input mb-8 h-20 lg:mb-2 lg:w-3/4 lg:text-white"
            label="Email"
            variant="standard"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="input mb-8 resize-y lg:resize-y lg:mb-2 lg:w-3/4 lg:text-white"
            label="Message"
            maxRows={50}
            variant="standard"
            required
            multiline
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {email && name && message ? (
            <button
              className="button w-full lg:w-1/4 lg:h-12 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          ) : (
            <button
              className="button-disabled h-12 w-1/2 mt-16 lg:w-1/4 lg:h-12 rounded-lg"
              type="submit"
              disabled={disable}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
};
