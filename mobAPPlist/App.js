
import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import {
  BackButton,
  NativeRouter as Router,
  Route,
  Switch,
} from "react-router-native";

import { Container, Header, Body, Title } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

import { Wineries } from "./components/Wineries";
import { WineryDetails } from "./components/Winery";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      
      setIsLoading(false);
    };
    loadFonts();
  }, []);


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
