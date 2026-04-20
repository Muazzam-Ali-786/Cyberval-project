import About from "./component/about/page";
import Services from "./services/page";
import Elite from "./elite/page";
import Industries from "./industries/page";
import Hero from "./component/header/hero/hero";
import Testimonials from "./component/testimonials/Testimonials";
import Insights from "./component/insights/Insights";
import Faq from "./component/faq/Faq";
import Credentials from "./component/credentials/Credentials";

export default function Home() {
  return (
    <>
       <Hero />
      <About />
      <Services />
      <Elite />
      <Industries />
      <Testimonials />
      <Insights />
      <Faq />
      <Credentials />
    </>
  );
}