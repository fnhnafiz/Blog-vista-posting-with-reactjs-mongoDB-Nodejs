import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import QuotePost from "./QuotePost";
import RelatedPost from "./RelatedPost";
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();
  // console.log(location);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-250px)]">
        <section>
          <Outlet></Outlet>
        </section>
        <section>
          <RelatedPost></RelatedPost>
        </section>
        <section>
          <Newsletter></Newsletter>
        </section>
        <section>
          <QuotePost></QuotePost>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
