"use client"

import Image from "next/image"
import { useState } from "react"

import type { Category } from "./categories-data"

type CategoriesProps = {
  categories: Category[]
  initialActiveName?: string
}

export function Categories({
  categories,
  initialActiveName,
}: CategoriesProps) {
  const [activeName, setActiveName] = useState(
    initialActiveName ?? categories[0]?.name,
  )

  return (
    <section aria-label="Categorias" className="w-full">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 md:py-8">
        <ul className="flex justify-start gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-8 xl:justify-center">
          {categories.map(({ name, icon }) => {
            const isActive = name === activeName

            return (
              <li key={name} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveName(name)}
                  className="group flex w-36 flex-col items-center"
                >
                  <span
                    className={`flex h-[140px] w-[140px] items-center justify-center rounded-lg shadow-sm transition-colors duration-200 ${
                      isActive ? "bg-white" : "bg-muted"
                    }`}
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={56}
                      height={56}
                      className={`h-14 w-14 transition-[filter] duration-200 ${
                        isActive ? "icon-blue" : "group-hover:icon-blue"
                      }`}
                    />
                  </span>

                  <span
                    className={`mt-3 text-center text-[13px] leading-tight font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-blue"
                        : "text-gray-700 group-hover:text-blue"
                    }`}
                  >
                    {name}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
