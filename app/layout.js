import { TableContextProvider } from "@/components/tableContext/tableContext";
import "@styles/global.css";
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
        {" "}
        <TableContextProvider>{children}</TableContextProvider>
      </body>
    </html>
  );
}
