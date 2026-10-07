"use client"

import { useState } from "react";

import { CrownSimpleIcon } from "@phosphor-icons/react/dist/ssr";

const navigationItems = [
  {
    label: "Todas categorias",
  },
  {
    label: "Supermercado",
  },
  {
    label: "Livros",
  },
  {
    label: "Moda",
  },
  {
    label: "Lançamentos",
  },
  {
    label: "Ofertas do dia",
    highlight: true,
  },
  {
    label: "Assinatura",
    icon: CrownSimpleIcon,
  },
];

const defaultActive =
  navigationItems.find((item) => item.highlight)?.label ??
  navigationItems[0].label;

export function Navigation() {
  const [active, setActive] = useState(defaultActive);

  return (
    <nav className="flex h-11 items-center gap-6 overflow-x-auto border-t px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:gap-16 md:overflow-x-visible md:px-0">
      {navigationItems.map(({ label, icon: Icon }) => {
        const isActive = active === label;

        return (
          <a
            key={label}
            href="#"
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              setActive(label);
            }}
            className={`flex shrink-0 items-center gap-2 text-md font-[600] uppercase ${
              isActive ? "font-semibold text-chart-4" : "text-muted-foreground"
            }`}
          >
            {Icon && <Icon size={18} weight="bold" />}
            {label}
          </a>
        );
      })}
    </nav>
  );
}
