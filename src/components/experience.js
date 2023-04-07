import * as React from 'react';

const Experience = ({ from, to, title, company, children }) => {
  return (
    <div className={'mb-8'}>
      <span className={'font-bold text-sans dark:text-white'}>
        {from} - {to}
      </span>
      <div className={'block'}>
        {title} at {company}
        <br />
        <div className={'ml-7'}>{children}</div>
      </div>
    </div>
  );
};

export default Experience;
