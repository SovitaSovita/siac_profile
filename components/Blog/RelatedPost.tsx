import React from "react";
import Image from "next/image";
import Link from "next/link";
// import BlogData from "./blogData";
import { getBlogsService } from "@/service/BlogService";
import { Blog } from "@/types/blog";
import placeholder from "@/public/images/holder/placeholder.jpg"

const RelatedPost = async () => {
  const BlogData = await getBlogsService();

  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {BlogData.slice(0, 3).map((post: any, key: number) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-18 w-45">
                {post.mainImage ? (
                  <Image fill
                    src={
                      post?.mainImage && post.mainImage !== "no_link"
                        ? post.mainImage
                        : placeholder
                    } alt="Blog" className="object-cover" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/blog-details/${post._id}`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
