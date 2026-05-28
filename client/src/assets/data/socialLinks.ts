import dribble from "../images/dribble.png";
import google from "../images/google.png";
import twitter from "../images/twitter.png";

interface socialLinksCells {
	icon: string;
	label: string;
}

export const socialLinks: socialLinksCells[] = [
	{ icon: dribble, label: "dribble" },
	{ icon: google, label: "google" },
	{ icon: twitter, label: "twitter" },
];
