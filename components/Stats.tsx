import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <section className="stats">
      <div className="content">
        <h1 className="title">Advanced Statistics</h1>
        <p className="desc">
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard.
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">
              <Image
                src="/icon-brand-recognition.svg"
                alt="icon-brand-recognition"
                width={40}
                height={40}
                role="presentation"
              ></Image>
            </div>
            <h3 className="card-title">Brand Recognition</h3>
            <p className="card-body">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <Image
                src="/icon-detailed-records.svg"
                alt="icon-detailed-records"
                width={40}
                height={40}
                role="presentation"
              ></Image>
            </div>
            <h3 className="card-title">Detailed Records</h3>
            <p className="card-body">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <Image
                src="/icon-fully-customizable.svg"
                alt="icon-detailed-records"
                width={40}
                height={40}
                role="presentation"
              ></Image>
            </div>
            <h3 className="card-title">Full Customizable</h3>
            <p className="card-body">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
