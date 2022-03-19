import { useEffect, useState } from "react";
import { SOCIAL_MEDIA } from "../constants/Home";

const TEXT = "I am a Senior Software Engineer.";

export default function Home() {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const handleType = () => {
      if (desc.length < TEXT.length) {
        setDesc((prev) => prev + TEXT.charAt(desc.length));
      } else setDesc("");
    };

    const timer = setTimeout(handleType, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [desc]);

  return (
    <div className="App">
      <h1 className="text-3xl md:text-6xl font-bold underline">
        Angeline Budinata
      </h1>
      <div className="mb-5">Hi! {desc}</div>
      <div className="flex">
        {SOCIAL_MEDIA.map(({ url, icon, name }) => (
          <a
            className="px-1"
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon} alt={name} />
          </a>
        ))}
      </div>
    </div>
  );
}
