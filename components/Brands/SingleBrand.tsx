import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block w-[98px]"
      >
        <Image
          className="opacity-100 transition-all duration-300 hover:opacity-65 dark:hidden"
          src={image}
          alt={name}
          // fill
          width={100}
          height={100}
        />
        <Image
          className="hidden opacity-100 transition-all duration-300 hover:opacity-50 dark:block"
          src={imageLight}
          alt={name}
          // fill
          width={100}
          height={100}
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
