import { Flex, Typography, Input, Button, Divider, Row, Col } from "antd";
import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { getLocalesText } from "@/utils/getLocalesText";
import { usePopUp } from "@/contexts/PopUpContext";
import "@/styles/signup.css";

const SignUp = () => {
  const { Title } = Typography;
  const intl = useIntl();
  const { setPopUpType } = usePopUp();
  return (
    <Flex vertical className="signup" align="start">
      <Image
        width={50}
        height={50}
        src="/assets/images/travelSee.svg"
        alt="SeyahatRehberim Logo"
      />
      <Title level={2}>
        <FormattedMessage id="signup-title" />
      </Title>
      <Flex className="form">
        <form className="form">
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <Flex className="inputBox">
                <Typography>
                  <FormattedMessage id="signup-name" />
                </Typography>
                <Input
                  className="input"
                  size="large"
                  placeholder={getLocalesText(intl, "signup-name")}
                />
              </Flex>
            </Col>
            <Col className="gutter-row" span={12}>
              <Flex className="inputBox">
                <Typography>
                  <FormattedMessage id="signup-surname" />
                </Typography>
                <Input
                  className="input"
                  size="large"
                  placeholder={getLocalesText(intl, "signup-surname")}
                />
              </Flex>
            </Col>
          </Row>
          <Flex className="inputBox">
            <Typography>
              <FormattedMessage id="signup-email" />
            </Typography>
            <Input
              className="input"
              size="large"
              placeholder={getLocalesText(intl, "signup-email")}
            />
          </Flex>
          <Flex className="inputBox">
            <Typography>
              <FormattedMessage id="signup-password" />
            </Typography>
            <Input
              type="password"
              className="input"
              size="large"
              placeholder={getLocalesText(intl, "signup-password")}
            />
          </Flex>
          <Button>
            <FormattedMessage id="signup-button" />
          </Button>
        </form>
        <Divider plain>
          <FormattedMessage id="signup-divider" />
        </Divider>
        <Typography className="link">
          {getLocalesText(intl, "signup-link_text")}
          <Typography onClick={() => setPopUpType("login")}>
            {getLocalesText(intl, "signup-link_link")}
          </Typography>
        </Typography>
      </Flex>
    </Flex>
  );
};

export default SignUp;
