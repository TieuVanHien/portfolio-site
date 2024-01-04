import React, { useEffect } from 'react';
import Typed from 'typed.js';

export const TypingComponent = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Hello, World!',
        'I love building things for web apps.',
        'I love learning new tech stacks.',
        'Coding with love.',
        'Feel free to reach me!'
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true
    };

    const typed = new Typed('.typing-element', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing-element text-base"></span>;
};
