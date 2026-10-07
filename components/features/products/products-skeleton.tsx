type ProductsSkeletonProps = {
  count?: number;
};

export function ProductsSkeleton({ count = 8 }: ProductsSkeletonProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="flex flex-col overflow-hidden rounded-lg bg-card p-3 shadow-xl"
        >
          <div className="aspect-square animate-pulse rounded bg-muted" />

          <div className="mt-4 flex flex-col gap-2">
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
            <div className="h-6 w-1/2 animate-pulse rounded bg-muted" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
          </div>

          <div className="mt-3 h-12 w-full animate-pulse rounded-lg bg-muted" />
        </li>
      ))}
    </ul>
  );
}
