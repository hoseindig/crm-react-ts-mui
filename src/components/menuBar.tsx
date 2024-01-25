import { Link } from "react-router-dom";
import style from "../styles/MenuBar.module.scss";
const MenuBar = () => {
  return (
    <div className={style.box}>
      <ul>
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/products">محصولات</Link>
        </li>
        <li>
          <Link to="/orders">سفارشات</Link>
        </li>
        <li>
          <Link to="/customers">مشتریان</Link>
        </li>
        <li>
          <Link to="/cards">کارت ها</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
