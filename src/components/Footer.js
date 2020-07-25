import React from 'react';
import PhoneIcon from './Footer/PhoneIcon';
import MailIcon from './Footer/MailIcon';

function Footer() {
  return (
    <div className="border-t border-gray-500 flex justify-between mt-2 mx-4 font-mono py-3 flex-col md:flex-row">
      <PhoneIcon />
      <MailIcon />
    </div>
  );
}

export default Footer;
