
import MetaComponent from "@/components/common/MetaComponent";
import BookShelf from "@/components/products/BookShelf";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function BookShelfPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <BookShelf /> 
    </>  
  );
} 
