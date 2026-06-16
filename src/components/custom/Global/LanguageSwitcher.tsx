import {
    Menu,
    Button,
    Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", label: "🇬🇧 English" },
    { code: "fr", label: "🇫🇷 Français" },
];

export function LanguageDropdown() {
    const { i18n } = useTranslation();


    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const [open, setOpen] = useState(false)
    return (
        <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    {i18n.language === "en" ? "🇬🇧 En" : "🇫🇷 Fr"}

                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {
                            languages.map(l => <Menu.Item value={l.label} key={l.code} onSelect={() => changeLanguage(l.code)}>
                                {l.label}
                            </Menu.Item>)
                        }
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>)
}


/**
 * 
 * 
 * <Menu.Button as={Button} variant="outline">
        🌐 {current?.label ?? "Language"}
      </MenuButton>

      <MenuList>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() =>
              changeLanguage(lang.code)
            }
          >
            {lang.label}
          </MenuItem>
        ))}
      </MenuList>
 */