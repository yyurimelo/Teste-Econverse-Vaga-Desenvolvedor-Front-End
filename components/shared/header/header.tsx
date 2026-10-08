import {
  HeartIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { Navigation, SearchBar, TopBar } from "./index";

export function Header() {
  return (
    <header className="bg-card">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
        <TopBar />

        <div className="flex flex-col gap-3 px-2 md:grid md:grid-cols-[1fr_minmax(0,50%)_1fr] md:items-center md:gap-8">
          <div className="flex items-center justify-between gap-4 md:contents">
            <Image
              src="/Logo.png"
              alt="Econverse"
              width={139}
              height={42}
              priority
              className="h-10 w-auto shrink-0 md:order-1 md:justify-self-start"
            />

            <div className="flex shrink-0 items-center gap-6 text-muted-foreground md:order-3 md:justify-self-end">
              <Image
                src="/icons/box-arrow.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <HeartIcon size={28} />
              <UserCircleIcon size={28} />
              <ShoppingCartIcon size={28} />
            </div>
          </div>

          <div className="flex justify-center md:order-2">
            <SearchBar />
          </div>
        </div>

        <Navigation />
      </div>
    </header>
  );
}
