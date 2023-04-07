import * as React from 'react';

const Talk = ({ date, title, event, eo, children }) => {
  return (
    <div className={'mb-8'}>
      <span className={'font-bold text-sans dark:text-white'}>{date}</span>
      <div className={'block'}>
        {title}
        {event && ' at ' + event}
        {eo && ' by ' + eo}
        <br />
        <div className={'ml-7'}>{children}</div>
      </div>
    </div>
  );
};

export default Talk;
