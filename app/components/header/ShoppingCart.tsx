
const ShoppingCart = () => {
  return (
    <div className="w-full bg-[#FBFBFB] px-4 py-2 relative border border-gray-700 rounded-md">
      <p className="text-[#3399cc] text-[1.2rem] text-center uppercase">recently added item(s)</p>
      <div className="mt-[2rem] w-full">
        <p className="text-center text-[1.4rem] py-4">
          You have no items in your shopping cart.
        </p>
      </div>
    </div>
  )
}

export default ShoppingCart;
