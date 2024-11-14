import { Link, useNavigate } from "@remix-run/react"

export interface ProdustItem {
  id: number,
  header_image?: string,
  title: string,
  content?: string,
  main_categories: string[]
}

export interface ProductListProps {
  productList: ProdustItem[]
}

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  const navigate = useNavigate();

  const handleProductDetailView = (productId: number) => {
    navigate(`/product?id=${productId}`);
  }

  return (
    <div className="w-full py-4">
      <div className="w-full grid grid-cols-1 custom-xs:grid-cols-2 sm:grid-cols-3 gap-8">
        {
          productList.map((product, index) => (
            <div key={index} className="w-full max-w-[30rem] mx-auto">
              <div className="w-full rounded-[1rem] border border-[#DCDCDC] overflow-hidden h-fit bg-[#f2f3f5]">
                <div className="w-full h-[20rem] bg-cover bg-center bg-no-repeat" style={{
                  backgroundImage: `url(${product.header_image || '/assets/images/product_default.jpg'})`
                }}></div>
                <div className="p-4 w-full h-[30rem] flex flex-col justify-between gap-4">
                  <div className="w-full">
                    <p className="text-center text-[1.8rem] font-semibold tracking-wide py-2">{product.title}</p>
                    <div className="w-full h-[10rem] text-[1.2rem] leading-relaxed tracking-wide mt-2 overflow-hidden">
                      {product.content}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center gap-2 py-4">
                      <button onClick={() => handleProductDetailView(product.id)} className="w-[15rem] py-2 rounded-full border-[2px] border-[#555] text-center text-[#555] text-[1.4rem] bg-[#f2f3f5] hover:text-[#dcdcdc] hover:bg-[#555]">
                        Product Details
                      </button>
                      <Link to={"/"} className="underline text-[1.2rem] text-[#555]">Resources</Link>
                    </div>
                    <p className="w-full overflow-x-auto py-4 whitespace-nowrap scrollbar-x-container-hidden border-t border-[#dcdcdc]">
                      {
                        product.main_categories.map((mainCategory, index) => (
                          <span key={index} className="inline-block rounded-lg px-4 py-2 mr-2 text-[1.2rem] border border-[#555] text-[#555]">
                            {mainCategory}
                          </span>
                        ))
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList;
