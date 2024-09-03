import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="content mx-auto">
        <div className="title-desc">
          <h1 className="title mt-16">More than just shorter links</h1>
          <p className="desc mb-9">
            Build your brand's recognition and get detailed insights on how your
            links are performing
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
          ></Image>
        </div>
      </div>
      <form className="shorten-url-form">
        <input type="text" placeholder="Shorten a link here&hellip;" />
        <button type="submit" className="btn btn-primary">
          Shorten It!
        </button>
      </form>
    </section>
  );
};

export default Intro;
