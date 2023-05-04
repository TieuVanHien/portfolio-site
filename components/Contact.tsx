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
      // If the request is successful, clear the TextField  fields
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
              className="phone flex justify-start items-center mb-2"
            >
              <FontAwesomeIcon icon={faPhone} />
              <p className="text-lg ml-6">{phone}</p>
            </Link>
            <Link
              href={`mailto:${emailAdr}`}
              className="email flex justify-start items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} />
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
