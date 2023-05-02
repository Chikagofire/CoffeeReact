import "./page_styles/home_page.css";
import coffee_cut from "../../source/img/coffee_cut.png";

function Home_Page() {
  return (
    <div className="title_wrap">
      <img src={coffee_cut} alt="" />

      <div className="title_coffee_market">
        <div className="first_letter" data-aos="fade-up">
          <span style={{ color: "#f88e04" }}>C</span>
          <span>offee</span>
        </div>
        <div className="first_letter" data-aos="fade-up">
          <span style={{ color: "#f88e04" }}>M</span>
          <span>arket</span>
        </div>
        <span className="subtitle">
          best grain <span style={{ color: "white" }}>coffee</span> wholesale
          <span style={{ color: "white" }}>and</span> retail
        </span>
        <button>
          <a href="#">VIEW PRODUCTS</a>
        </button>
      </div>
      <img src={coffee_cut} alt="" />
    </div>
  );
}

export default Home_Page;
