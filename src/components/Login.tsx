import { Flex, Typography, Input, Button,Divider } from "antd";
import Image from "next/image";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useIntl } from 'react-intl';
import Link from "next/link";
import { getLocalesText } from "@/utils/getLocalesText"
import "@/styles/login.css";

const Login = () => {
  const { Title } = Typography;
  const intl = useIntl();
  return (
    <Flex vertical className="login" align="start">
      <Image
        width={50}
        height={50}
        src="/assets/images/travelSee.svg"
        alt="SeyahatRehberim Logo"
      />
      <Title level={2}><FormattedMessage id="login-title"/></Title>
      <Flex className="form">
        <form className="form">
          <Flex className="inputBox">
            <Typography><FormattedMessage id="login-username" /></Typography>
            <Input className="input" size="large" placeholder={getLocalesText(intl, "login-username")} />
          </Flex>
          <Flex className="inputBox">
            <Typography><FormattedMessage id="login-password" /></Typography>
            <Input
              type="password"
              className="input"
              size="large"
              placeholder={getLocalesText(intl, "login-password")} 
            />
          </Flex>
          <Button><FormattedMessage id="login-button" /></Button>
        </form>
        <Divider plain><FormattedMessage id="login-divider" /></Divider>
        <Typography className="link">{getLocalesText(intl, "login-link_text")} <Link href="http://localhost:3000/">{getLocalesText(intl, "login-link_link")}</Link></Typography>
      </Flex>
    </Flex>
  );
};

export default Login;
