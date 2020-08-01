import React from 'react';

const Services = () => {
  return (
    <div>
      <h1 className="theme-font-main">What I Can Do For You</h1>
      <p className="m-4">
        I primarily provide web based application/website development and database design and development, as well as some I.T. Support services.
      </p>

      <p className="m-4">
        I also offer basic Audio Engineering services, including recording and mixing.
      </p>

      <h2 className="theme-font-main mt-4">The Jargon</h2>
      <p className="m-4">
        Usually, I will use PHP and the Laravel Framework or Node.js and Express.
      </p>
      <p className="m-4">I often use Symfony PHP Components when writing non-Laravel code.</p>
      <p className="m-4">
        React and TailwindCSS/Bootstrap are my goto frontend frameworks.
      </p>
      <p className="m-4">I primarily work with MySQL/MariaDB databases, but have used MongoDB quite extensively.</p>
    </div>
  );
};

export default Services;