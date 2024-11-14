import { useSearchParams } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSquareCheck
} from "@fortawesome/free-solid-svg-icons";

interface ProductTypeItem {
  key: string,
  name: string
}

export interface ProductTypeFilterProps {
  productTypeList: ProductTypeItem[]
}

const ProductTypeFilter: React.FC<ProductTypeFilterProps> = ({ productTypeList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectProductType = (productType: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("product_type") === productType) {
      params.delete("product_type");
    } else {
      params.set("product_type", productType);
    }
    setSearchParams(params);
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-start items-center flex-wrap gap-4">
        {
          productTypeList.map(item => (
            <div key={item.key} className="w-fit flex items-center gap-2">
              <FontAwesomeIcon icon={searchParams.get("product_type") === item.key ? faSquareCheck : faSquare}
                className="w-[2rem] h-[2rem] text-[#333] hover:cursor-pointer"
                onClick={() => handleSelectProductType(item.key)} />
              <p className="text-[#222] text-[1.6rem] font-semibold tracking-wide">{item.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductTypeFilter;
