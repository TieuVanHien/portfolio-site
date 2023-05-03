import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typing } from '../components/Typing';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disable, setDisable] = useState(true);

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
      // If the request is successful, clear the input fields
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
    <div>
      <Typing text="Contact Me!!" />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-white">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-white" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {email && name && message ? (
          <button className="button" type="submit" value="submit">
            Submit
          </button>
        ) : (
          <button
            className="button"
            type="submit"
            value="submit"
            disabled={disable}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};
