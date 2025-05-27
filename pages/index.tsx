import About from "@/components/About";
import Cta from "@/components/Cta";
import Loc from "@/components/Loc";
import Main from "@/components/Main";
import Meats from "@/components/Meats";
import Products from "@/components/Products";


export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Meats />
      <Loc />
      <Products />
      <Cta /> 
    </>
  );
}
