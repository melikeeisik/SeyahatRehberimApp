import React from "react";
import { Flex } from "antd";
import { usePopUp } from "@/contexts/PopUpContext";
import "@/styles/popUp.css"
import { PopUpType } from "@/enums/PopUpEnums";
import Login from "@/components/Auth/Login";
import { CloseOutlined } from "@ant-design/icons";
import SignUp from "@/components/Auth/SignUp";

const PopUp = () => {
  const { showPopUp,setShowPopUp, popUpType } = usePopUp();

  return (
    <>
      {showPopUp && (
        <Flex className="popUp">
          <Flex className="popUpBox">
            <CloseOutlined onClick={() => setShowPopUp(false)}/>
            {
              popUpType === PopUpType.login &&
              (
                <Login />
              )
            }
            {
              popUpType === PopUpType.signup &&
              (
                <SignUp />
              )
            }
            </Flex>
        </Flex>
      )}
    </>
  );
};

export default PopUp;
