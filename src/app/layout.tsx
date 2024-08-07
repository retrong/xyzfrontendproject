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
						<div className="bg-foundation-grey-grey-50 px-16 py-[10px] w-[100%] sm:px-6 fixed z-[998]">
							<Navbar />
						</div>
						{children}
						<div className="w-full bg-foundation-purple-purple-900 overflow-hidden">
							<Footer />
						</div>
					</Provider>
				</StoreProvider>
			</body>
		</html>
	);
};
