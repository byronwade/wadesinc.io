import Banner from "@/components/ui/Banner";
import LogoCloud from "@/components/sections/LogoCloud";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import { Step } from "@/components/sections/Step";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";

export const metadata = {
	title: {
		default: "Wades Plumbing and Septic",
		template: "%s | Wades Plumbing and Septic",
	},
	description: "Wades Plumbing and Septic is a...",
	openGraph: {
		title: "Wades Plumbing and Septic",
		description: "The React Framework for the Web",
		type: "article",
		publishedTime: "2023-01-01T00:00:00.000Z",
		authors: ["Seb", "Josh"],
		url: "https://nextjs.org",
		images: [
			{
				url: "https://nextjs.org/og.png",
				width: 800,
				height: 600,
			},
		],
	},
	robots: {
		index: true,
	},
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<Step />
			<FeatureSection />
			<FAQ />
			{/* <Testimonials /> */}
			<LogoCloud />
		</>
	);
}
