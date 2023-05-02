import cut_down from "../../source/img/coffee_cut_down.png"

function Footer() {
  return (
    <>
      <footer>
        <img className="footer_img" src={cut_down} alt="" />
        <span className="copyright">
          <span style={{color: "#f88e04", margin: 0}}>C</span>offee
          <span style={{color: "#f88e04", margin: 0}}>M</span>arket ©️ 2023
        </span>
      </footer>
    </>
  );
}
export default Footer;
