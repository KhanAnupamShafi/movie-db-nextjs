import { Sora } from "next/font/google";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
        <Navbar />
        <main>
          <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
            <Aside />
            {children}
          </div>
        </main>
        <Footer />/
      </body>
    </html>
  );
}
