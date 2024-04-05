import { Sora } from "next/font/google";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Best Cine Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={
          sora.className +
          " " +
          "dark:bg-body bg-white font-[Sora] dark:text-white text-dark"
        }>
        {children}
      </body>
    </html>
  );
}
