import { NextIntlClientProvider } from "next-intl";
import { QueryContext } from "./qurey-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider>
      <QueryContext>{children}</QueryContext>
    </NextIntlClientProvider>
  );
}
