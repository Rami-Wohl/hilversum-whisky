import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { LayoutWithNav } from "~/components/nav/layout-with-nav";

export const metadata: Metadata = {
  title: "WCH - Whiskey Club Hilversum",
  description: "Tastings en reviews van diverse soorten whisk(e)y",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className="h-screen bg-black bg-cover bg-fixed bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: "url('../../../../assets/images/wood.jpg')",
        // }}
      >
        <LayoutWithNav>{children}</LayoutWithNav>
      </body>
    </html>
  );
}
