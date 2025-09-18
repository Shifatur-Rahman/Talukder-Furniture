import BlogDetails from "@/components/blogs/BlogDetails";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

import Breadcumb from "@/components/blogs/Breadcumb";
import { allBlogs } from "@/data/blogs";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Blog Details || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function BlogDetailsPage() {
  let params = useParams();
  const id = Number(params.id);

  const blog = allBlogs.filter((p) => p.id == id)[0] || allBlogs[0];
  // allBlogs
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Breadcumb />
      <div className="main-content">
        <BlogDetails blog={blog} />
        <RelatedBlogs />
      </div>
      <Footer1 />
    </>
  );
}
