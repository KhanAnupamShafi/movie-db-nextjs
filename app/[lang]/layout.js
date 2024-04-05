import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Best Cine Portal",
};

export default function DefaultLayout({ children, params: { lang } }) {
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          <Aside lang={lang} />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
