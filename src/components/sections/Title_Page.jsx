import "./section_styles/title_page.css";
import coffee_cut_img from "../../source/img/coffee_cut.png";
import regerg from "../../source/img/autumn-concept-background-with-autumn-leaves-and-coffee-served-in-cup-on-dark-background.jpg"

function Title_Page() {
    const bg_img = {
        backgroundImage: `url(${regerg})`
    }
    return (
    <>
      <div className="cut" style={bg_img}>
        <img className="coffee_cut_img_up" src={coffee_cut_img} alt="" />
        <span>
          <p style={{ color: "#f88e04", display: "inline-block" }}>О</p>
          НАС
        </span>
        <img className="coffee_cut_img_down" src={coffee_cut_img} alt="" />
      </div>
    </>
  );
}

export default Title_Page;
