import ManageProducts from "@/components/modules/shop/product";
import { getAllProduct } from "@/services/Product";



const ManageProductsPage = async() => {
const {data,meta}=await getAllProduct()
  return (
    <div>
      <ManageProducts products={data}/>
    </div>
  );
};

export default ManageProductsPage;