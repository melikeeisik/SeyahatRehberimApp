"use client";
import React, { useState } from "react";
import { Button, Flex, Typography, Divider, Dropdown } from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import { TbWorldSearch } from "react-icons/tb";
import type { MenuProps } from "antd";
import Image from "next/image";
import { useLocale } from "../contexts/IntlContext";
import "../styles/header.css"
const Header = () => {
  const { Title } = Typography;
  const intl = useIntl();
  const { locale, setLocale } = useLocale();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Typography onClick={() => setLocale("tr")}>
          {locale === "tr" ? "Türkçe (TR)" : "Turkish (TR)"}
        </Typography>
      ),
    },
    {
      key: "2",
      label: (
        <Typography onClick={() => setLocale("en")}>
          {locale === "tr" ? "İngilizce (ENG)" : "English (ENG)"}
        </Typography>
      ),
    },
  ];

  return (
    <Flex justify="space-between">
      <Flex align="center" gap="5px"> 
        <Image
          width={50}
          height={50}
          src="/assets/images/travelSee.svg"
          alt="SeyahatRehberim Logo"
        />
        <Title level={3} style={{margin:0}}>Seyahat Rehberim</Title>
      </Flex>
      <Flex>
        <Dropdown menu={{ items }} placement="bottomCenter">
          <Button  >
            <TbWorldSearch />
            <Divider type="vertical" />
            <Typography>{locale === "tr" ? "TR" : "ENG"}</Typography>
          </Button>
        </Dropdown>
        <Flex className="button">
          <Button className="button" >
            <FormattedMessage id="header_login-button" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
