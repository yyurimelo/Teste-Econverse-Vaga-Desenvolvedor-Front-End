import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Econverse",
  description: "E-commerce platform for buying and selling products online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
