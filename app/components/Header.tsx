
import HeaderMenu from "./header/HeaderMenu";
import MobileHeaderMenu from "./header/MobileHeaderMenu";
import { Languages } from "~/utils/config";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#3399cc] text-white">
        <div className="max-w-primary-max-width w-full mx-auto custom-xl:px-0 px-2 py-4">
          <div className="w-full flex flex-col custom-xs:flex-row custom-xs:justify-between justify-start items-center gap-4">
            <div className="w-fit flex items-center gap-2">
              <span className="text-[1.4rem] uppercase">your language:</span>
              <select className="bg-white rounded-md p-2 text-[1.6rem] w-[15rem] border-black text-black outline-none">
                {
                  Languages.map((item) => (
                    <option key={item.key} value={item.key}>{item.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="w-fit">
              <p className="text-[1.4rem] uppercase">welcome vienvenue!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-primary-max-width mx-auto custom-xl:px-0 px-2 py-4">
        <div className="w-full sm:hidden block">
          <MobileHeaderMenu />
        </div>
        <div className="w-full sm:block hidden">
          <HeaderMenu />
        </div>
      </div>
    </div>
  )
}

export default Header;
