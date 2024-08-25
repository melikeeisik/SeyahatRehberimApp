import React from "react";
import { Flex } from "antd";
import { usePopUp } from "@/contexts/PopUpContext";
import "@/styles/popUp.css"
import { PopUpType } from "@/enums/PopUpEnums";
import Login from "./Login";
const PopUp = () => {
  const { showPopUp, popUpType } = usePopUp();
  console.log("show", showPopUp);
  return (
    <>
      {showPopUp && (
        <Flex className="popUp">
          {
            popUpType === PopUpType.login &&
            (
              <Login />
            )
          }
        </Flex>
      )}
    </>
  );
};

export default PopUp;
