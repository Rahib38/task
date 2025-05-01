import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";
import Link from "next/link";

const CategorySection = async() => {
    const {data:categories}=await getAllCategories()
    console.log(categories,'data')
  return (
    <div className="container mx-auto my-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Category </h2>

        <Link href={"/products"}>
          <Button variant={"outline"} className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4  gap-8 my-5">
        {categories?.map((category:ICategory,idx:number)=><CategoryCard key={idx} category={category}/>)

        }
      </div>
    </div>
  );
};

export default CategorySection;
