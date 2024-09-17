"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-3 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 mt-6 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                To become a full member of the association, one must meet the following obligations:
              </h2>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-gray-300 dark:border-strokedark dark:bg-blacksection">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-sm text-black dark:text-white">
                    Maintain a personal or business financial state where income exceeds expenses.</h3>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-gray-300 dark:border-strokedark dark:bg-blacksection">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-sm text-black dark:text-white">
                    Recruit two new members within three to six months after completing the membership orientation.
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-gray-300 dark:border-strokedark dark:bg-blacksection">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-sm text-black dark:text-white">
                    Contribute an annual support fee of $50.
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-gray-300 dark:border-strokedark dark:bg-blacksection">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-sm text-black dark:text-white">
                    Possess a positive outlook for oneself, the association, and the nation.
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-gray-300 dark:border-strokedark dark:bg-blacksection">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-sm text-black dark:text-white">
                    Agree to attend and pass the required basic courses annually to retain membership.
                  </h3>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-gray-300 dark:border-strokedark dark:bg-blacksection">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    06
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-sm text-black dark:text-white">
                    Uphold the principles and bylaws of the association.
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <a
                  href="signup.html"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Sign up
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
