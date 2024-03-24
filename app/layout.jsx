import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Properties | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rental, find rpoperties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
