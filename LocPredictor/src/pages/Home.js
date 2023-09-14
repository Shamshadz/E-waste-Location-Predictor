import RenderMap from "../Components/maps/renderMap.jsx";
import "./pagesCSS/Home.css";
import Footer from "../Components/HomeFooter.jsx";
import HomePageAnimation1 from "../assets/animations/HomePage1.jsx";
import HomePageAnimation2 from "../assets/animations/HomePage2.jsx";
import HomePageAnimation3 from "../assets/animations/HomePage3.jsx";
import HomePageAnimation4 from "../assets/animations/HomePage4.jsx";
import RecyclePageAnimation from "../assets/animations/Recycle.jsx";

function Home() {
  return (
    <>
      <div className="homeDiv">
        <div className="renderMapDiv">
          <RenderMap />
          <div className="siteInfo">
            <div className="siteInfo-anime">
              <RecyclePageAnimation />
            </div>
            <div className="siteInfo-para">
              <p>Welcome to our innovative online platform dedicated to revolutionizing the
                way we handle electronic waste (e-waste). Our website is your go-to destination
                for locating convenient e-waste disposal points and,
                as an extra incentive, rewarding you based on the value of the materials
                you recycle. </p>
            </div>
          </div>
        </div>
        <div className="homeDiv-Moto">Recycle E-Waste To Save Planet For Better Future. And Earn Reward.</div>
        <article className="homeDiv-article">
          <div className="article-odd">
            <div className="article-odd-info-div" >
              <h2>Locate and Dispose with Ease ::</h2>
              <p>
                Our user-friendly website provides an extensive database of verified e-waste
                collection centers and recycling facilities near you. Whether you have old
                smartphones, laptops, or any other electronic devices, we make it effortless
                to find the most convenient and responsible way to dispose of your e-waste,
                reducing its harmful impact on the environment.
              </p>
            </div>
            <div className="article-odd-anime-div" >
              <HomePageAnimation3 />
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div className="article-even">
            <div className="article-even-anime-div" >
              <HomePageAnimation1 />
            </div>
            <div className="article-even-info-div" >
              <h2>Earn Rewards for Responsible Recycling ::</h2>
              <p>
                Incentivizing responsible e-waste disposal, we offer a unique rewards program.
                You can earn rewards points based on the recyclable materials' value contained
                in the devices you bring in. These points can be redeemed for exciting rewards,
                including discounts on new electronic devices, gift cards, or even charitable donations.
                It's our way of thanking you for being an eco-conscious citizen.
              </p>
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div className="article-odd">
            <div className="article-odd-info-div" >
              <h2>Environmental Responsibility ::</h2>
              <p>
                At the heart of our platform lies a deep commitment to environmental sustainability.
                By using our services, you actively contribute to reducing electronic waste in landfills
                and help to conserve valuable resources. We ensure that all our partner facilities adhere
                to strict environmental standards for the safe and eco-friendly disposal of e-waste.
              </p>
            </div>
            <div className="article-odd-anime-div" >
              <HomePageAnimation2 />
            </div>
          </div>
        </article>
      </div>

    </>
  );
}

export default Home;
