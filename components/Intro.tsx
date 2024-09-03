"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Intro: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState<
    { original: string; short: string }[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load shortened URLs from local storage on component mount
    const storedUrls = localStorage.getItem("shortenedUrls");
    if (storedUrls) {
      try {
        setShortenedUrl(JSON.parse(storedUrls));
      } catch (e) {
        console.error("Failed to parse shortened URLs from local storage", e);
        localStorage.removeItem("shortenedUrls");
      }
    }
  }, []);

  useEffect(() => {
    // Save shortened URLs to local storage whenever they change
    if (shortenedUrl.length > 0) {
      localStorage.setItem("shortenedUrls", JSON.stringify(shortenedUrl));
    }
  }, [shortenedUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          url.trim()
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to shorten the URL. Please try again.");
      }

      // Check the response format
      const data = await response.json();
      console.log("API Response:", data);
      const newShortenedUrl = data.shorturl;
      setShortenedUrl([
        ...shortenedUrl,
        { original: url.trim(), short: newShortenedUrl },
      ]);
      setUrl("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
  };

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
      <form className="shorten-url-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here&hellip;"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Shorten It!
        </button>
      </form>

      {shortenedUrl.length > 0 && (
        <div className="result">
          <h2>Shortened Links:</h2>
          <ul>
            {shortenedUrl.map((link, index) => (
              <li key={index} className="shortened-link">
                <span className="original-url">{link.original}</span>
                <span className="shortened-url">
                  <a
                    href={link.short}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.short}
                  </a>
                  <button onClick={() => handleCopy(link.short)}>Copy</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default Intro;
