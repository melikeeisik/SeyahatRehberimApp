import React from 'react'
import { Button, Flex, Typography, Divider } from "antd";
import { FormattedMessage } from 'react-intl';
import {TbWorldSearch} from 'react-icons/tb';
const Header = () => {
  return (
    <Flex justify='space-between'>
        <Typography>SeyahatRehberim</Typography>
        <Flex >
            <Button>
                <TbWorldSearch/>
                <Divider type="vertical" />
                <Typography>TR</Typography>
            </Button>
            <Button style={{backgroundColor:"black", color:"#fff"}}>
                <FormattedMessage id="header_login-button" />
            </Button>
        </Flex>
    </Flex>
  )
}

export default Header
