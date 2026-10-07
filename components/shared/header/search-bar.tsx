import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

export function SearchBar() {
  return (
    <div className="flex h-11 w-full max-w-[600px] items-center rounded-lg bg-muted px-4">
      <input
        type="text"
        placeholder="O que você está buscando?"
        className="flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground"
      />

      <MagnifyingGlassIcon
        size={25}
        weight="regular"
        className="text-muted-foreground"
      />
    </div>
  );
}