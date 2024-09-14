

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="content">
        <div className="title-desc">
          <h1 className="title">More than just shorter links</h1>
          <p className="desc">
            Build your brand&apos;s recognition and gain insights into link
            performance.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="img-wrapper">
          <Image
            src="/illustration-working.svg"
            alt="illustration-working"
            width={1000}
            height={1000}
            role="presentation"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
