import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

export interface InputSearchKeywordProps {
  handleSearchKeyword: (keyword: string) => void,
  isMobile: boolean
}

const InputSearchKeyword: React.FC<InputSearchKeywordProps> = ({ handleSearchKeyword, isMobile }) => {
  const [isFocusSearchInput, setIsFocusSearchInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className={clsx(
      "w-full border rounded-lg flex items-center gap-2 overflow-hidden py-2 px-4",
      !isMobile && isFocusSearchInput ? "border-main-color" : "border-gray-600",
      isMobile && "bg-white"
    )}>
      <input type="text" placeholder="Search entire store here..." className="flex-1 text-[1.6rem] p-2 outline-none"
        value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocusSearchInput(true)}
        onBlur={() => setIsFocusSearchInput(false)} />
      <button onClick={() => handleSearchKeyword(searchValue)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[1.6rem] h-[1.6rem] text-gray-700" />
      </button>
    </div>
  )
}

export default InputSearchKeyword;