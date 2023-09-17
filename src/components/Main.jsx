import React from 'react';

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex flex-col items-center justify-center text-white space-y-8">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Redux Central</h1>
        <p className="text-lg max-w-lg">
          Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.
        </p>
      </div>

      <div className="space-y-4">
        <button className="btn btn-primary btn-lg">Get Started</button>
        <button className="btn btn-ghost btn-lg">Learn More</button>
      </div>

      <div className="absolute bottom-5 left-5 text-base">
        Built with ❤️ using Redux, Tailwind, and daisyUI
      </div>
    </div>
  );
};

export default Main;
