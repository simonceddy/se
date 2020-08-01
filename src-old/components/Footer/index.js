import React from 'react';
import PhoneIcon from './PhoneIcon';
import MailIcon from './MailIcon';

function Footer() {
  return (
    <div className="border-t border-gray-500 flex justify-between mt-2 mx-4 font-mono py-3 flex-col md:flex-row">
      <PhoneIcon />
      <MailIcon />
    </div>
  );
}

export default Footer;
