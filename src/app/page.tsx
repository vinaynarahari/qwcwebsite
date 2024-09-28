import Image from "next/image";
import Hero from "@/../components/Hero"
import PhotoMontage from "../../components/PhotoMontage"
import Guide from "@/../components/Guide"

import Testomonial from "@/../components/testomonial"
import MoreInfo from "@/../components/MoreInfo"
import Work from "@/../components/Work"


export default function Home() {
  return (
   <> 
   <Hero />
   <Work />
   <PhotoMontage />
   <Guide  />
   <MoreInfo />
   
   </>
  );
}
