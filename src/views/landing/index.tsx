import React, { Suspense } from 'react';

const Landing = () => {

  return (
    <Suspense fallback={<div className="loading" />}>
      <div>
        LANDING
      </div>
    </Suspense>
  );

}

export default Landing;