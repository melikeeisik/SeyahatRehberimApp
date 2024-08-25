import React from "react";
import { Flex } from "antd";
import { usePopUp } from "@/contexts/PopUpContext";
import "@/styles/popUp.css"
import { PopUpType } from "@/enums/PopUpEnums";
import Login from "./Login";
import { CloseOutlined } from "@ant-design/icons";
const PopUp = () => {
  const { showPopUp,setShowPopUp, popUpType } = usePopUp();
  console.log("show", showPopUp);
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
            </Flex>
        </Flex>
      )}
    </>
  );
};

export default PopUp;
