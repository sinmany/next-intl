import { Link, routing } from "@/i18n/routing";
import styles from "../page.module.css";
import { useLocale, useTranslations } from 'next-intl';
import SwitchSelectLanguage from "@/components/SwitchSelectLanguage";

export default function Home() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  return (
    <div className={styles.page}>
      <div>
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
      </div>
      <div>
        <SwitchSelectLanguage defaultValue={locale} label={t('label')}>
          {routing.locales.map((cur) => (
            <option key={cur} value={cur}>
              {t('locale', { locale: cur })}
            </option>
          ))}
        </SwitchSelectLanguage>
      </div>
    </div>
  );
}
