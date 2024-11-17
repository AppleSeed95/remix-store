import { useState } from "react";
import { useSearchParams } from "@remix-run/react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faSquare,
  faSquarePlus,
  faSquareMinus
} from "@fortawesome/free-solid-svg-icons";

interface SubMenuItem {
  key: string,
  name: string
}

export interface SidebarMenu {
  key: string,
  name: string,
  subMenu?: SubMenuItem[]
}

export interface SidebarProps {
  sidebarMenu: SidebarMenu[]
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [expandedMainItems, setExpandedMainItems] = useState<string[]>([]);

  const handleExpandMainItem = (mainKey: string) => {
    const isAlreadySelectedIndex = expandedMainItems.findIndex(item => item === mainKey);
    const prevExpandedItems = [...expandedMainItems];

    if (isAlreadySelectedIndex > -1) {
      prevExpandedItems.splice(isAlreadySelectedIndex, 1);
    } else {
      prevExpandedItems.push(mainKey);
    }

    setExpandedMainItems(prevExpandedItems);
  }

  const handleSelectedMainItem = (mainKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("main_category") === mainKey) {
      params.delete("main_category");
    } else {
      params.set("main_category", mainKey);
    }
    setSearchParams(params, {
      preventScrollReset: false
    })
  }

  const handleSelectedSubItem = (subKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const subCategories = params.getAll("sub_category") || [];
    const isSelectedItemIndex = subCategories.findIndex(item => item === subKey);
    if (isSelectedItemIndex > -1) {
      subCategories.splice(isSelectedItemIndex, 1);
    } else {
      subCategories.push(subKey);
    }
    params.delete("sub_category");
    for (const category of subCategories) {
      params.append("sub_category", category);
    }
    setSearchParams(params, {
      preventScrollReset: false
    })
  }

  return (
    <div className="w-full px-4">
      <p className="text-[1.4rem] font-semibold text-[#636363] py-4">Filter by</p>
      <div className="w-full flex flex-col items-start gap-0">
        {
          sidebarMenu.map(mainItem => (
            <div key={mainItem.key} className="w-full">
              <div className="w-full border-t border-[#555] flex justify-between items-center py-4 gap-2 hover:cursor-pointer">
                <FontAwesomeIcon icon={searchParams.get("main_category") === mainItem.key ? faSquareCheck : faSquare}
                  className="w-[2rem] h-[2rem] text-[#333]"
                  onClick={() => handleSelectedMainItem(mainItem.key)} />
                <p className="flex-1 text-left text-[#222] font-semibold text-[1.6rem]">{mainItem.name}</p>
                <FontAwesomeIcon icon={
                  expandedMainItems.some(item => item === mainItem.key) ?
                    faSquareMinus :
                    faSquarePlus
                }
                  className="w-[2rem] h-[2rem] text-[#333] hover:cursor-pointer"
                  onClick={() => handleExpandMainItem(mainItem.key)} />
              </div>
              <div className={clsx(
                "w-full flex flex-col gap-2",
                expandedMainItems.some(item => item === mainItem.key) && mainItem.subMenu?.length ? "block pt-2 pb-4" : "hidden pt-0 pb-0"
              )}>
                {
                  mainItem.subMenu?.map(subItem => (
                    <div key={subItem.key} className="w-full flex justify-between items-center gap-2 pl-4">
                      <FontAwesomeIcon icon={searchParams.getAll("sub_category").some(subCategory => subCategory === subItem.key) ? faSquareCheck : faSquare}
                        className="w-[2rem] h-[2rem] text-[#555] hover:cursor-pointer"
                        onClick={() => handleSelectedSubItem(subItem.key)} />
                      <p className="flex-1 text-left text-[#333] text-[1.4rem]">{subItem.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar;
