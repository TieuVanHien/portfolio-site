import React, { useState, useEffect } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

interface TypeProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typing = ({
  text,
  speed = 500,
  delay = 50,
  className = 'typing-skill'
}: TypeProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const options = {
    delay,
    speed
  };

  const onInit = (typewriter: TypewriterClass) => {
    typewriter.typeString(text).start();
  };

  useEffect(() => {
    const type = async () => {
      if (currentText.length < text.length) {
        if (!isTyping) {
          setIsTyping(true);
        }

        setCurrentText(text.slice(0, currentText.length + 1));
      }
    };
    type().catch((err) => console.log(err));
  }, [currentText.length, text, speed, delay, isTyping]);

  return (
    <div className={className}>
      <h1>
        <Typewriter onInit={onInit} options={options} />
      </h1>
    </div>
  );
};
