import UpdateProductForm from "@/components/modules/shop/product/UpdateProductForm"
import { getSingleProduct } from "@/services/Product"

const UpdatePage =async ({params}:{params:Promise<{productId:string}>}) => {
    const {productId}= await params
    const product = await getSingleProduct(productId)
  return (
    <div>
        <UpdateProductForm product={product}/>
    </div>
  )
}

export default UpdatePage
