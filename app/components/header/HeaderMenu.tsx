import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faClose,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import InputSearchKeyword from "./InputSearchKeyword";
import ShoppingCart from "./ShoppingCart";
import { AccountMenu } from "~/utils/config";

const HeaderMenu = () => {
  const navigate = useNavigate();

  const [isShowAccountMenu, setIsShowAccountMenu] = useState<boolean>(false);
  const [isShowCartMenu, setIsShowCartMenu] = useState<boolean>(false);

  const handleSearchKeyword = (keyword: string) => {
    navigate(`?keyword=${keyword}`);
  }

  return (
    <div className="w-full flex justify-between items-center h-fit">
      <div className="w-fit flex items-center gap-8">
        <img src="/assets/images/logo.jpg" alt="Logo" />
        <p className="text-[1rem] text-black tracking-wide leading-relaxed">
          3135, Moise-Vincent, #104
          <br />
          St-Hubert (Qc) J3Z 0G7
          <br />
          514-664-2000
        </p>
      </div>
      <div className="h-full flex flex-col justify-between items-end gap-4">
        <div className="w-fit flex justify-start items-center gap-4">
          <div className="relative">
            <button className="p-2 flex items-center gap-2 text-gray-600 hover:text-[#3399cc]" onClick={() => setIsShowAccountMenu(!isShowAccountMenu)}>
              <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px]" />
              <span className="text-[1.4rem] text-gray-600 uppercase">account</span>
            </button>
            <div className={`absolute top-[3.5rem] right-[1rem] z-10 ${isShowAccountMenu ? 'block' : 'hidden'}`}>
              <div className="w-[25rem] bg-[#FBFBFB] border border-gray-700 rounded-md py-4 flex flex-col gap-2">
                {
                  AccountMenu.map((item, index) => (
                    <Link to={"/"} key={index} className="text-center text-[1.4rem] w-full py-2 bg-inherit">
                      {item.name}
                    </Link>
                  ))
                }
                <Link to="/" className="text-center text-[1.4rem] w-full py-2 bg-inherit">Logout</Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <button className="p-2 flex items-center gap-2 text-gray-600 hover:text-[#3399cc]" onClick={() => setIsShowCartMenu(!isShowCartMenu)}>
              <FontAwesomeIcon icon={faCartShopping} className="w-[20px] h-[20px]" />
              <span className="text-[1.4rem] text-gray-600 uppercase">cart</span>
            </button>
            <div className={`absolute w-[30rem] top-[3.5rem] right-[1rem] z-10 ${isShowCartMenu ? 'block' : 'hidden'}`}>
              <button className="absolute top-2 right-2 z-20" onClick={() => setIsShowCartMenu(false)}>
                <FontAwesomeIcon icon={faClose} size="lg" />
              </button>
              <ShoppingCart />
            </div>
          </div>
        </div>
        <div className="w-full">
          <InputSearchKeyword handleSearchKeyword={handleSearchKeyword} isMobile={false} />
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu;
