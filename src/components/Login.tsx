import { Flex, Typography, Input, Button,Divider } from "antd";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import "@/styles/login.css";
import Link from "next/link";
const Login = () => {
  const { Title } = Typography;
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Flex vertical className="login" align="start">
      <Image
        width={50}
        height={50}
        src="/assets/images/travelSee.svg"
        alt="SeyahatRehberim Logo"
      />
      <Title level={2}>Gezilecek yerleri keşfetmek için giriş yapın</Title>
      <Flex className="form">
        <form className="form">
          <Flex className="inputBox">
            <Typography>Kullanıcı adı</Typography>
            <Input className="input" size="large" placeholder="Kullanıcı adı" />
          </Flex>
          <Flex className="inputBox">
            <Typography>Parola</Typography>
            <Input
              type="password"
              className="input"
              size="large"
              placeholder="Parola"
            />
          </Flex>
          <Button>Giriş yap</Button>
        </form>
        <Divider plain>Üye değil misiniz?</Divider>
        <Typography className="link">Seyehat Rehberimin en iyilerine erişmek için <Link href="http://localhost:3000/">üye olun</Link></Typography>
      </Flex>
    </Flex>
  );
};

export default Login;
