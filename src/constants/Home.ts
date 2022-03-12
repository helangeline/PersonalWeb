import icLinkedIn from "../assets/Home/linkedin.svg";
import icInstagram from "../assets/Home/instagram.svg";

const LINKEDIN_URL = "https://id.linkedin.com/in/angeline-budinata-478ba412a";
const INSTAGRAM_URL = "https://www.instagram.com/helangeline";

interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  { name: "Linked In", url: LINKEDIN_URL, icon: icLinkedIn },
  { name: "Instagram", url: INSTAGRAM_URL, icon: icInstagram }
];
