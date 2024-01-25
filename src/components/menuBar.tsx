import { NavLink } from "react-router-dom";
import style from "../styles/MenuBar.module.scss";
const MenuBar = () => {
  return (
    <div className={style.box}>
      <ul>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.isActive : "none"
            }
            to="/"
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.isActive : "none"
            }
            to="/products"
          >
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.isActive : "none"
            }
            to="/orders"
          >
            سفارشات
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.isActive : "none"
            }
            to="/customers"
          >
            مشتریان
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? style.isActive : "none"
            }
            to="/cards"
          >
            کارت ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
