import { useNavigate } from "@remix-run/react"
import { Link } from "@remix-run/react";

import { FooterMenu } from "~/utils/config";

const Footer = () => {
  return (
    <div className="w-full max-w-primary-max-width mx-auto bg-white custom-xl:px-0 px-4">
      <div className="w-full border-t border-[#ccc] py-8">
        <div className="w-full max-w-[600px] mx-auto grid grid-cols-1 custom-xs:grid-cols-2 sm:grid-cols-3 gap-6">
          {
            FooterMenu.map(item => (
              <div key={item.key} className="w-full text-center border-t border-[#ccc]">
                <p className="w-full text-left text-main-color tracking-wide uppercase text-[1.4rem]">{item.name}</p>
                <div className="mt-[1.6rem] w-full flex flex-col gap-2">
                  {
                    item.subMenu.map(subItem => (
                      <Link key={subItem.key} to={subItem.path} className="w-full text-[1.2rem] text-[#636363] text-left uppercase tracking-normal">
                        {subItem.name}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full border-t border-[#ccc] py-8">
        <p className="w-full text-center text-main-color text-[1.2rem]">
          &copy; 2024 Groupe Millenium Micro. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;
