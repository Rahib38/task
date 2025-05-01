import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ui/core/ProductCard"
import { getAllProduct } from "@/services/Product"
import { IProduct } from "@/types"
import Link from "next/link"

const FeatureProduct = async() => {
    const {data:products}=await getAllProduct()
  return (

    <div className="bg-gray-100 bg-opacity-50 py-10">

    <div className='container mx-auto '>
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Feature Products</h2>

        <Link href={"/products"}>
          <Button variant={"outline"} className="rounded-full">
           All Collection
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 my-5">
{
  products?.map((product:IProduct,idx:number)=><ProductCard key={idx} product={product}/>)  
}
      </div>
    </div>
    </div>

  )
}

export default FeatureProduct
