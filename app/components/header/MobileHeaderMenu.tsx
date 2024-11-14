import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputSearchKeyword from "./InputSearchKeyword";
import ShoppingCart from "./ShoppingCart";
import { MobileMenu, AccountMenu } from "~/utils/config";

const MobileHeaderMenu = () => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSearchKeyword = (keyword: string) => {
    navigate(`?keyword=${keyword}`);
  }

  const handleSelectItem = (itemKey: string) => {
    setSelectedItem(itemKey === selectedItem ? "" : itemKey);
  }

  const SelectedComponent = (key: string) => {
    let component;
    switch (key) {
      case "account":
        component = (
          <div className="w-full bg-[#FBFBFB] rounded-md py-4 flex flex-col items-center">
            {
              AccountMenu.map((item, index) => (
                <Link to={"/"} key={index} className="text-center text-[1.4rem] w-full py-2 bg-inherit">
                  {item.name}
                </Link>
              ))
            }
            <Link to="/" className="text-center text-[1.4rem] w-full py-2 bg-inherit">Logout</Link>
          </div>
        );
        break;
      case "search":
        component = (
          <InputSearchKeyword handleSearchKeyword={handleSearchKeyword} isMobile={true} />
        );
        break;
      case "cart":
        component = (
          <ShoppingCart />
        );
        break;
      default:
        component = null;
        break;
    }

    return component;
  }

  return (
    <div className="w-full">
      <div className="w-full p-4 flex justify-between items-center">
        <img src="/assets/images/logo.jpg" alt="Logo" />
        <p className="text-[1rem] text-black tracking-wide leading-relaxed">
          3135, Moise-Vincent, #104
          <br />
          St-Hubert (Qc) J3Z 0G7
          <br />
          514-664-2000
        </p>
      </div>
      <div className="w-full relative">
        <div className="w-full grid grid-cols-3 gap-0">
          {
            MobileMenu.map(item => (
              <button key={item.key} className={clsx(
                "w-full border border-gray-400 flex justify-center gap-2 py-4 px-4",
                selectedItem === item.key ? "bg-gray-400 text-white" : "bg-white text-gray-400"
              )} onClick={() => handleSelectItem(item.key)}>
                <FontAwesomeIcon icon={item.icon} className="w-[2rem] h-[2rem]" />
                <p className="custom-xs:block hidden text-[1.6rem]">{item.name}</p>
              </button>
            ))
          }
        </div>
        <div className={clsx(
          "w-full bg-gray-400 p-4",
          !selectedItem && "hidden"
        )}>
          {SelectedComponent(selectedItem)}
        </div>
      </div>
    </div>
  )
}

export default MobileHeaderMenu;
