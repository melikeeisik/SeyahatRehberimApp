import { Flex, Typography, Tabs } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineLocalActivity } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

import "../styles/tabStyle.css";
const Search = () => {
  const { Title } = Typography;
  return (
    <Flex align="center" vertical>
      <Title style={{ fontWeight: "bold", fontSize:"60px" }}>
        <FormattedMessage id="home_where" /> ?{" "}
      </Title>
      <Tabs
        className="ant-tabs-nav-list"
        defaultActiveKey="3"
        style={{ fontSize: '25px' }}  
        items={[
          {
            key: "1",
            label: "Tüm kategoriler",
            children: "Tab 1",
            icon: <RiHomeLine />,
          },
          {
            key: "2",
            label: "Aktiviteler",
            children: "Tab 2",
            icon: <MdOutlineLocalActivity />,
          },
          {
            key: "3",
            label: "Restoranlar",
            children: "Tab 3",
            icon: <IoRestaurantOutline />,
          },
        ]}
      />
    </Flex>
  );
};

export default Search;
