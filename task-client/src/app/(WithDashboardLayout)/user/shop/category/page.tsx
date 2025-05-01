import ManageCategory from '@/components/modules/shop/category'
import { getAllCategories } from '@/services/Category'
import React from 'react'

const ProductCategoryPage = async() => {
 const {data,meta}=await getAllCategories()
  return (
    <div>
      <ManageCategory categories={data}></ManageCategory>
    </div>
  )
}

export default ProductCategoryPage
