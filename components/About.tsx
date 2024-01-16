import React from 'react';
import Image from 'next/image';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SendIcon from '@mui/icons-material/Send';

export const About = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEmail = () => {
    const email = 'tieuvanhien01@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Content of the email';

    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <section
      id="about"
      className="about flex flex-col justify-evenly w-full h-auto mt-16 lg:w-full lg:h-auto lg:flex lg:flex-col lg:items-center lg:justify-evenly"
    >
      <div className="heading mb-8 flex justify-start items-center lg:h-1/10 lg:w-full lg:mb-8 lg:flex lg:justify-start lg:items-center">
        <h1 className="text-2xl lg:text-4xl">About Me</h1>
        <div className="line ml-4 w-2/5 lg:w-1/4 lg:ml-4"></div>
      </div>
      <div className="container lg:flex lg:flex-row">
        <div className="card-container lg:h-screen  lg:w-2/5">
          <div className="card lg:rounded-md lg:p-9 lg:border-solid lg:border-2 lg:border-slate-500 lg:w-4/5 lg:h-3/5">
            <div className="image lg:flex lg:justify-center lg:h-3/4 lg:w-full">
              <Image
                className="lg:w-4/5 rounded-md lg:h-full"
                src={'/profile.jpg'}
                width={200}
                height={300}
                alt="profile card img"
              />
            </div>
            <div className="profile lg:mt-10 lg:w-full lg:justify-evenly lg:flex flex-row">
              <div className="button flex justify-center items-center lg:w-2/5 lg:h-10 rounded-lg">
                <DataObjectIcon />
                <button className="ml-1 w-full" onClick={handleDownload}>
                  Resume
                </button>
              </div>
              <div className="button-second flex justify-center items-center lg:pl-2 lg:pr-2 lg:w-2/5 lg:h-10 rounded-lg">
                <SendIcon />
                <button
                  className="ml-1 lg:h-10 rounded-lg"
                  onClick={handleEmail}
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="description lg:w-3/5 lg:h-screen lg:flex lg:justify-start lg:items-center lg:flex-col">
          <h2 className="lg:mb-6">
            Hey, I&apos;m Van Hien Tieu, and I&apos;m all about technology and
            coding. For as long as I can remember, I&apos;ve been immersed in
            the world of coding, turning ideas into digital realities.
          </h2>
          <h2 className="lg:mb-6">
            In my journey, I&apos;ve worked on impactful projects, collaborated
            with diverse teams. I specialize in front-end development but
            I&apos;m expanding myself to full-stack development with
            technologies such as React, Next.js for front-end, Node.js and
            Django for back-end to build powerful web application , and I firmly
            believe that coding has the power to shape the future. Beyond the
            screen, I love experimenting with new programming languages, playing
            video games and sports. Currently, I&apos;m actively seeking for new
            opportunities to continue developing my coding skills and learning
            new technologies, I&apos;m eager to collaborate on cutting-edge
            projects.
          </h2>
          <h2>
            Thanks for stopping by my portfolio. Let&apos;s connect and dive
            into the endless possibilities of technology and coding!
          </h2>
        </div>
      </div>
    </section>
  );
};
