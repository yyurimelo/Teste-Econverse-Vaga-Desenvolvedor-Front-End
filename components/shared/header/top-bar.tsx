import {
  CreditCardIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@phosphor-icons/react/dist/ssr";

const items = [
  {
    icon: ShieldCheckIcon,
    content: (
      <>
        <span>Compra</span>
        <span className="text-chart-4">
          100% segura
        </span>
      </>
    ),
  },
  {
    icon: TruckIcon,
    content: (
      <>
        <span>
          Frete grátis
        </span>
        <span className="text-chart-4">acima de R$ 200</span>
      </>
    ),
  },
  {
    icon: CreditCardIcon,
    content: (
      <>
        <span className="text-chart-4">
          Parcele
        </span>
        <span>suas compras</span>
      </>
    ),
  },
];

export function TopBar() {
  return (
    <div className="hidden items-center justify-center gap-20 border-b px-2 py-2.5 font-medium text-muted-foreground md:flex">
      {items.map(({ icon: Icon, content }) => (
        <div
          key={Icon.displayName}
          className="flex items-center gap-2"
        >
          <Icon weight="bold" size={26} />

          <div className="flex items-center gap-1 text-sm">
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}