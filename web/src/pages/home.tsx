import React, { useEffect } from "react";
import { Header, Button, Text, Box } from "@stardust-ui/react";
import { useTranslation } from "react-i18next";

import { HomePage, NS, Common } from "../locales";
import ChatWithPopover from "../components/chat";
import Compose from "../components/compose";
import LanguageButton from "../components/language";

export default function Home() {
    const { t } = useTranslation([NS.common, NS.homePage]);
    useEffect(() => {
        document.title = t(Common.title);
    }, [t]);
    return (
        <>
            <LanguageButton />
            <Header
                as="h1"
                color="brand"
                align="center"
                styles={{ padding: "2em 0 1em" }}
                content={t(Common.title)}
                description={t(Common.description)}
            ></Header>
            <Box styles={{ padding: "1em", textAlign: "center" }}>
                <Button
                    styles={{ textDecoration: "none", margin: ".8em" }}
                    as="a"
                    href={process.env.PUBLIC_URL + "/custom-stickers.zip"}
                    download
                    icon="download"
                    content={t(HomePage.downloadExtension)}
                    size="largest"
                    primary
                ></Button>
                <Text fluid as="div" size="small" weight="light" important content={t(HomePage.tips)} />
            </Box>
            <ChatWithPopover />
            <Compose />
        </>
    );
}
