import Footer from "@/components/_landingpgComponents/footer";
import Navbar from "@/components/_landingpgComponents/navbar";
import Provider from "@/util/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Xyz',
	description: 'Business Management Software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={inter.className}>
				<StoreProvider>
					<Provider>
						{children}
					</Provider>
				</StoreProvider>
			</body>
		</html>
	);
};
