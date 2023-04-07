import * as React from 'react';

const Award = ({ date, title, children }) => {
  return (
    <div className={'mb-8'}>
      <span className={'font-bold text-sans dark:text-white'}>{date}</span>
      <div className={'block'}>{title}</div>
    </div>
  );
};

export default Award;
