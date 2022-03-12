import { SOCIAL_MEDIA } from "../constants/Home";

export default function Home() {
  return (
    <div className="App">
      <h1 className="text-3xl md:text-6xl font-bold underline">
        Angeline Budinata
      </h1>
      <div>I like to code (lol.)</div>
      <br />
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
