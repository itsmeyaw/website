import * as React from 'react';

const Container = ({ children }) => {
  return (
    <div
      className={'min-h-screen w-full dark:bg-background-900 dark:text-white'}
    >
      {children}
    </div>
  );
};

export default Container;
