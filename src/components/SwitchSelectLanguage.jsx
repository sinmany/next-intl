"use client";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "../i18n/routing";

export default function SwitchSelectLanguage({ children, defaultValue }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    router.replace({ pathname, params }, { locale: nextLocale });
  }

  return (
    <select defaultValue={defaultValue} onChange={onSelectChange}>
      {children}
    </select>
  );
}
