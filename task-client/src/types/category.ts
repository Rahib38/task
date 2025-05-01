export interface ICategory{
    _id:string;
    name:string;
    description:string;
    icon:string;
    isActive:boolean;
    slug:string;
    createdAt:string;
    createdBy:string;
    parent:string|null;
    updatedAt:string;
    children:ICategory[]
}