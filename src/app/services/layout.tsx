import Nav from "../../../components/Home Components/Nav";
import "./../globals.css";

import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Services",
  description: " Carlos Castro Migration and Educatoin Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        <Nav />

        </div>
        {children}
      
      </body>
    </html>
  );
}