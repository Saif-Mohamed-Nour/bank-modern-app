import styles from "./style"
import {
  Billing,
  Bisnuss,
  CardDeal,
  Clinets,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./Components";
import GetStarted from "./Components/GetStarted";


const App = () => {
  return (
    <div className="bg-[#00040f] w-full min-h-screen overflow-hidden overflow-x-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[rgb(0,4,15)] w-full`}>
        {/* <div className=""> */}
        <div className="sm:ml-30">
          <Hero />
        </div>
      </div>

      <div className={`bg-[#00040f]  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bisnuss />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clinets />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
