import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Clog Monsters Septic Pumping",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
