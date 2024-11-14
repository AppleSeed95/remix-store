import { useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const KeywordSearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isFocusSearchField, setIsFocusSearchField] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(searchParams.get("keyword") || "");

  const handleSearchKeyword = (keyword: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", keyword);
    setSearchParams(params, {
      preventScrollReset: false
    });
  }

  return (
    <div className="w-full">
      <div className={clsx(
        "w-full border rounded-lg flex items-center gap-2 overflow-hidden py-1 px-4",
        isFocusSearchField ? "border-main-color" : "border-gray-600"
      )}>
        <input type="text" placeholder="Search..." className="text-[1.6rem] p-2 outline-none flex-grow w-full"
          value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocusSearchField(true)}
          onBlur={() => setIsFocusSearchField(false)} />
        <button onClick={() => handleSearchKeyword(searchValue)} className="p-2 rounded-md bg-[#636363] text-white text-[1.2rem]">
          Search
        </button>
      </div>
    </div>
  )
}

export default KeywordSearchFilter;
