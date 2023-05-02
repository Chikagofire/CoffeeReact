import "./Header_Footer.css";
import logo from "../../source/icon/COFFEE MARKET_free-file (1).png";

function Header() {
  return (
    <div className="menu">
      <ul>
        <li className="logo">
          <a href="/"><img src={logo} alt="" /></a>
        </li>
        <ul>
          <li>
            <a href="/about">
              <span style={{ color: "#f88e04" }}>О</span> нас
            </a>
          </li>
          <li>
            <a href="/products">
              <span style={{ color: "#f88e04" }}>Н</span>аши продукты
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ color: "#f88e04" }}>У</span>слуги
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ color: "#f88e04" }}>О</span>тзывы
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ color: "#f88e04" }}>К</span>онтакты
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
