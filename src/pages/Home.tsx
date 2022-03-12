import imgLinkedIn from "../assets/Home/linked-in.svg";

const LINKEDIN_URL = "https://id.linkedin.com/in/angeline-budinata-478ba412a";

export default function Home() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Angeline Budinata</h1>
      <div>I like to code (lol.)</div>
      <br />
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        <img src={imgLinkedIn} alt="Linked In" />
      </a>
    </div>
  );
}
