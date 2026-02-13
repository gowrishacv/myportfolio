import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const STORAGE_KEY = "portfolio_lang";

type Lang = "en" | "de";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const initialLang = useMemo<Lang>(() => {
    const raw = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (raw === "de" || raw.startsWith("de")) return "de";
    return "en";
  }, []);

  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang);
    }
    localStorage.setItem(STORAGE_KEY, lang);
  }, [i18n, lang]);

  return (
    <div
      className="rounded-xl border border-border bg-background/80 backdrop-blur px-2 py-2"
      aria-label={t("common.language")}
    >
      <ToggleGroup
        type="single"
        value={lang}
        onValueChange={(value) => {
          if (value === "en" || value === "de") setLang(value);
        }}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <ToggleGroupItem value="en" aria-label="English">
          {t("common.en")}
        </ToggleGroupItem>
        <ToggleGroupItem value="de" aria-label="Deutsch">
          {t("common.de")}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageSwitcher;
