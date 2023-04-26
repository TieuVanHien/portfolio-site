import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage
} from '@chakra-ui/react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('Required');
  const [valid, setValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleValid = (e: any) => {
    if (!name || !email || !message) {
      setValid(true);
      setSubmit(false);
    } else if (!valid) {
      setValid(false);
      setSubmit(true);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl className="text-black" isInvalid={valid} isRequired>
          <FormLabel className="text-white">Name</FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            errorBorderColor="red.500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onSubmit={handleValid}
          />
          <FormErrorMessage className="text-white"></FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={valid} className="text-black" isRequired>
          <FormLabel className="text-white" htmlFor="email">
            Email
          </FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onSubmit={handleValid}
          />
          <FormErrorMessage className="text-white">
            {errorMessage}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={valid} className="text-black" isRequired>
          <FormLabel className="text-white" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            className="text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onSubmit={handleValid}
          />
          <FormErrorMessage className="text-white">
            {errorMessage}
          </FormErrorMessage>
        </FormControl>
        <button disabled={submit}>Submit</button>
      </form>
    </div>
  );
};
