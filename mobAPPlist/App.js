//используем библиотееку Экспо
//
import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import {
  BackButton,
  NativeRouter as Router,
  Route,
  Switch,
} from "react-router-native";
//используем Нэйтив бэйс в качестве фрейм вока
import { Container, Header, Body, Title } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

import { Wineries } from "./components/Wineries";
import { WineryDetails } from "./components/Winery";

// в главном компоненте мы объявляем загрузку приложения, для подгрузкки шрифтов
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //подружаются шрифты
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      //далее загружается приложение и ставим флаг, загружается ли (нет не загнружается)
      setIsLoading(false);
    };
    loadFonts();
  }, []);

  // если загрузилось, то показывает загрузку и показывает Контент
  return isLoading ? (
    <AppLoading />
  ) : (
    <Container>
      <Header>
        <Body>
          <Title>Wineries</Title>
        </Body>
      </Header>
      <Router>
        <BackButton>
          <Switch>
            <Route exact path="/" component={Wineries} />
            <Route path="/Winery/:id" component={WineryDetails} />
          </Switch>
        </BackButton>
      </Router>
    </Container>
  );
}
