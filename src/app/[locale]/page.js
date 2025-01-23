import { Link } from "@/i18n/routing";
import styles from "../page.module.css";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <div>
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
      </div>
    </div>
  );
}
