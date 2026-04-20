import About from "./about/page";
import Services from "./services/page";
import Elite from "./elite/page";
import Industries from "./industries/page";
import Testimonials from "./component/testimonials/Testimonials";
import Insights from "./component/insights/Insights";
import Faq from "./component/faq/Faq";
import Credentials from "./component/credentials/Credentials";

export default function Home() {
  return (
    <>
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