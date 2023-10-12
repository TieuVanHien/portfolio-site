import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typing } from '../components/Typing';
import { TextField, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disable, setDisable] = useState(true);
  const phone = '+1 (587)-917-5931';
  const emailAdr = 'tieuvanhien01@gmail.com';

  const handleValid = () => {
    if (name && email && message) {
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
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setDisable(true);
        toast.success('Thanks for submitting the form!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contact"
      className="container contact flex flex-col justify-evenly items-center"
    >
      <Typing text="Contact Me!!" />
      <div className="contact-med flex justify-center items-center">
        <div className="info flex flex-col justify-start">
          <div className="info-heading">
            <h1 className="text-6xl mb-4">Let&apos;s Chat</h1>
            <h2 className="text-lg">
              Fill in the form to send me a message. Otherwise, feel free to
              reach me at my email address.
            </h2>
          </div>
          <div className="social-info">
            <Link
              href={`tel:${phone}`}
              className="phone icon flex justify-start items-center mb-2"
            >
              <div className="phone-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  ></path>
                </svg>
              </div>
              <p className="text-lg ml-6">{phone}</p>
            </Link>
            <Link
              href={`mailto:${emailAdr}`}
              className="email icon flex justify-start items-center"
            >
              <div className="email-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <polyline points="8 10 12 14 16 10" />
                </svg>
              </div>
              <p className="text-lg ml-6"> {emailAdr}</p>
            </Link>
          </div>
        </div>
        <form
          className="form flex flex-col justify-evenly items-center"
          onSubmit={handleSubmit}
        >
          <TextField
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
          />
          <TextField
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
          />
          <TextField
            className="input"
            id="message"
            name="message"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            inputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
          />

          {email && name && message ? (
            <Button className="button" variant="contained" type="submit">
              Submit
            </Button>
          ) : (
            <Button
              className="button-disabled"
              type="submit"
              variant="contained"
              disabled={disable}
            >
              Submit
            </Button>
          )}
          <h1 className="text-center">
            *Please fill out all required information before submitting
          </h1>
        </form>
      </div>
    </div>
  );
};
