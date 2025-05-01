import ManageBrand from '@/components/modules/shop/brand'
import { getAllBrand } from '@/services/Brand'
import React from 'react'

const BrandPage =async () => {
    const{data,meta}=await getAllBrand()
  return (
    <div>
      <ManageBrand brand={data}></ManageBrand>
    </div>
  )
}

export default BrandPage
