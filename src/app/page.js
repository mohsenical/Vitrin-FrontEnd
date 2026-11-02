import Categoreis from "@/components/templates/index/Categoreis";
import Baner from "@/components/templates/index/Baner";
import Offer from "@/components/templates/index/Offer";
import Stories from "@/components/templates/index/Stories";
import Advertisements from "@/components/templates/index/Advertisements";
import Products from "@/components/templates/index/Products";
import Proposal from "@/components/modules/Proposal";

import Footer from "@/components/modules/Footer";
import FooterMobile from "@/components/modules/FooterMobile";
import TopBar from "@/components/modules/TopBar";
import TopbarMobile from "@/components/templates/index/TopbarMobile";


export default function Home() {
  return (
    <div className="">
      <TopBar />
      <TopbarMobile />

      <Baner />

      {/* Body Section */}
      <div className="flex flex-col justify-center items-center gap-y-1 w-full sm:*:w-[90%] md:*:w-[80%] *:my-1 bg-white">
        <Stories />
        <Offer />
        <Categoreis />
        <Advertisements />
        <Offer />
        <Products />

        <Proposal sectiontitle="محصولات پیشنهادی" />
        <Proposal sectiontitle="کالاهای مشابه" />
      </div >

      <Footer />
      <FooterMobile />
    </div>
  );
}
