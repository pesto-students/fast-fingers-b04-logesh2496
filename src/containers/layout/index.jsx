import React from "react";
import { useSelector } from "react-redux";
import { screenInfo } from "../../helpers/enums";
import GameScreen from "../GameScreen";
import HomeScreen from "../HomeScreen";
import "./layout.scss";

const Layout = () => {
  const currentUserScreen = useSelector(
    (state) => state.currentUserScreen.value
  );
  const renderContent = () => {
    switch (currentUserScreen) {
      case screenInfo.GAME:
        return <GameScreen />;
      default:
        return <HomeScreen />;
    }
  };
  return <div className="f-layout">{renderContent()}</div>;
};

export default Layout;
