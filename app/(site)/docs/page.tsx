import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import pdf from "@/public/images/icon/pdf.png"
import Image from "next/image";
import { getDocsService } from "@/service/DocService";
export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default async function DocsPage() {
  const DocsData = await getDocsService();
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32 font-siemreap tracking-wide">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-2 lg:w-3/4">
              <div className="flex gap-3 blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">

                {
                  DocsData?.map((item) => (
                    <a href={item.files} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-dark">
                      <Image className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" width={100} height={100} src={pdf} alt="pdf" />
                      <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.metadata}</p>
                      </div>
                    </a>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
