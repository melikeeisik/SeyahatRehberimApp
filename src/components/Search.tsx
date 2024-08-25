import { Flex, Typography, Tabs ,Input} from "antd";
import React, { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineLocalActivity } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoSearchOutline } from 'react-icons/io5'
import { useIntl } from 'react-intl';
import { getLocalesText } from "@/utils/getLocalesText"
import type { GetProps } from 'antd';
import "@/styles/searchPage.css";

type SearchProps = GetProps<typeof Input.Search>;

const Search = () => {
  const { Title } = Typography;
  const { Search } = Input;
  const intl = useIntl();
  const [inputPlaceholder, setInputPlaceholder] = useState<string>("home-tab1_placeholder")
  const [title, setTitle] = useState<string>("home_title-where")
  
  const handleTabChange = (key : string) => {
    switch (key) {
      case '1':
        setTitle("home_title-where")
        setInputPlaceholder("home-tab1_placeholder")
        break;
      case '2':
        setTitle("home_title-activites")
        setInputPlaceholder("home-tab2_placeholder")
        break;
      case '3':
        setTitle("home_title-dishes")
        setInputPlaceholder("home-tab3_placeholder")
        break;
      default:
        setTitle("home_title-where")
        setInputPlaceholder("home-tab1_placeholder")
    }
  }

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log("basıldı");

  return (
    <Flex align="center" vertical>
      <Title style={{ fontWeight: "bold", fontSize:"60px" }}>
        {getLocalesText(intl, title)}
      </Title>
      <Tabs
        className="ant-tabs-nav-list"
        defaultActiveKey="1"
        onChange={handleTabChange}
        items={[
          {
            key: "1",
            label: "Tüm kategoriler",
            icon: <RiHomeLine />,
          },
          {
            key: "2",
            label: "Aktiviteler",
            icon: <MdOutlineLocalActivity />,
          },
          {
            key: "3",
            label: "Restoranlar",
            icon: <IoRestaurantOutline />,
          },
        ]}
      />
      <Search size="large" placeholder={getLocalesText(intl, inputPlaceholder)} prefix={<IoSearchOutline />} enterButton="Search" onSearch={onSearch} />
    </Flex>
  );
};

export default Search;
