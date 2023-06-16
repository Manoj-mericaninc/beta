/** @format */

import "@/styles/globals.css";
import Submenus from "@/components/cards/subMenus/subMenu";

export const metadata = {
  title: "Zen Time",
  description: "Zen Time application to manage time sheets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.jpeg"
          type="image/x-icon"
        />
      </head>
      <body>
        <Submenus
          message={"Streams Software Solution Pvt."}
          address={"Ganapathy,Coimbatore-641006"}
        />
        {children}
      </body>
    </html>
  );
}
