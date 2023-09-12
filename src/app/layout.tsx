import "./globals.css";
import localFont from "next/font/local";
import { Orbitron } from "next/font/google";

const nextSphere = localFont({
  src: "./fonts/NextSphereBlack.ttf",
  variable: "--font-next-sphere",
});
const nexa = localFont({
  src: "./fonts/nexaregular.otf",
  variable: "--font-nexa",
  display: "swap",
});
const nexaHeavy = localFont({
  src: "./fonts/Nexa-Heavy.ttf",
  variable: "--font-nexa-heavy",
  display: "swap",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nextSphere.variable} ${nexa.variable} ${nexaHeavy.variable} ${orbitron.variable}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import Image from "next/image";
import HeaderBtn from "@/components/HeaderBtn";
import { Providers } from "./clientProviders";
import NavLink from "@/components/NavLink";

const Header = () => {
  return (
    <>
      <header className="flex flex-row items-center justify-center py-4 px-4 w-full">
        <div className="container w-full flex flex-row items-center justify-between">
          <div>
            <Image
              src="/square_logo.png"
              width={100}
              height={100}
              alt="squareLogo"
            />
          </div>
          <nav className="md:flex flex-row items-center uppercase gap-x-4 text-lg hidden">
            <NavLink href="/home">About</NavLink>
            <NavLink href="/stake">STAKe</NavLink>
            <NavLink href="/">Buy NFT</NavLink>
            <a className="font-nexa w-[100px] text-center block underline-offset-8 px-2 py-2">
              Lottery
            </a>
          </nav>
        </div>
        <div className="pl-4">
          <HeaderBtn />
        </div>
      </header>
    </>
  );
};
