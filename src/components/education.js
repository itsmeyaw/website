import * as React from 'react';

const Education = ({ from, to, title, institution, children }) => {
  return (
    <div className={'mb-8'}>
      <span className={'font-bold text-sans dark:text-white'}>
        {from} - {to}
      </span>
      <div className={'block'}>
        {title}
        <br />
        {institution}
      </div>
    </div>
  );
};

export default Education;
