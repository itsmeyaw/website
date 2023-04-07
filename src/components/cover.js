import * as React from 'react';

const Cover = ({ title, date, desc, text }) => {
  return (
    <header className={'min-h-56 px-16 py-32 lg:px-24 block text-center'}>
      <h1
        className={`text-4xl md:text-7xl font-serif ${
          date || desc ? 'mb-3' : ''
        }`}
      >
        {title}
      </h1>
      {date ? (
        <>
          <small>{date}</small>
          {desc ? <br /> : <></>}
        </>
      ) : (
        <></>
      )}
      {desc ? <p className={'text-lg'}>{desc}</p> : <></>}
    </header>
  );
};

export default Cover;
