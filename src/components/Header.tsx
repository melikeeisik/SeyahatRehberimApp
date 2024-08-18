"use client"
import React, { useState } from 'react'
import { Button, Flex, Typography, Divider, Dropdown , Menu} from "antd";
import { FormattedMessage } from 'react-intl';
import {TbWorldSearch} from 'react-icons/tb';
import {useLocale} from '../contexts/LocaleContext';
import type { MenuProps } from 'antd';

const Header = () => {
  const {locale, setLocale} = useLocale();

  const handleChangeLocale = () =>{
    console.log
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Typography onClick={() => setLocale("tr")}>
          {locale === "tr" ? "Türkçe (TR)" : "Turkish (TR)" }
        </Typography>
      ),
    },
    {
      key: '2',
      label: (
        <Typography onClick={() => setLocale("en")}>
           {locale === "tr" ? "İngilizce (ENG)" : "English (ENG)" }
        </Typography>
      ),
    },
  ];
  
  return (
    <Flex justify='space-between'>
        <Typography>SeyahatRehberim</Typography>
        <Flex >
          <Dropdown menu={{items}} placement="bottomCenter">
            <Button>
                  <TbWorldSearch/>
                  <Divider type="vertical" />
                  <Typography>{locale === "tr" ? "TR" : "ENG" }</Typography>
              </Button>
          </Dropdown>
            <Button style={{backgroundColor:"black", color:"#fff"}}>
                <FormattedMessage id="header_login-button" />
            </Button>
        </Flex>
    </Flex>
  )
}

export default Header
