"use client";

import React, { useEffect, useState } from "react";

const Stats = () => {
  const [url, setUrl] = useState<string>("");
  const [shortenedUrls, setShortenedUrls] = useState<
    { original: string; short: string }[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedUrls = localStorage.getItem("shortenedUrls");
    if (storedUrls) {
      try {
        setShortenedUrls(JSON.parse(storedUrls));
      } catch {
        localStorage.removeItem("shortenedUrls");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shortenedUrls", JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          url.trim()
        )}`
      );

      if (!response.ok) throw new Error("Failed to shorten the URL.");

      const data = await response.json();
      setShortenedUrls((prevUrls) => [
        ...prevUrls,
        { original: url.trim(), short: data.shorturl },
      ]);
      setUrl(""); // Clear the input field
    } catch (err: any) {
      setError(err.message);
    }
  };

  const copyToClipboard = (shortUrl: string, index: number) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  return (
    <section className="stats-wrapper">
      <form className="shorten-url-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here…"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn">
          Shorten It!
        </button>
      </form>

      {shortenedUrls.length > 0 && (
        <div className="shortened-urls">
          <ul>
            {shortenedUrls.map((link, index) => (
              <li key={index} className="shortened-url">
                <p className="">{link.original}</p>
                <a
                  href={link.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {link.short}
                </a>
                <button
                  onClick={() => copyToClipboard(link.short, index)}
                  className="btn"
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="stats">
        <div className="content">
          <h1 className="title">Advanced Statistics</h1>
          <p className="desc">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>

          <div className="cards">
            <div className="card">
              <div className="card-icon">
                <img
                  src="/icon-brand-recognition.svg"
                  alt="Brand Recognition Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="card-title">Brand Recognition</h3>
              <p className="card-body">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <img
                  src="/icon-detailed-records.svg"
                  alt="Detailed Records Icon"
                  width={40}
                  height={40}
                />
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
                <img
                  src="/icon-fully-customizable.svg"
                  alt="Fully Customizable Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="card-title">Fully Customizable</h3>
              <p className="card-body">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
