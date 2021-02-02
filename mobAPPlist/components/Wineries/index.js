import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { H3, Icon, Left, List, ListItem, Right, Text } from "native-base";
import { ScrollView, View } from "react-native";

import { useQuery } from "react-query";
import { useHistory } from "react-router-native";


import { API } from "../../api";


export const Wineries = () => {
  const history = useHistory();
 
  const { isLoading, error, data } = useQuery("list", () =>
  //метод бетбрюви возвращает промис
    API.getWineries()
  );

  if (isLoading) return <AppLoading />;
  if (error) return <Text>An error has occurred: {error.message}</Text>;
  const onItemPressed = (id) => (ev) => history.push(`/Winery/${id}`);
  return (
    <View>
      <H3>List</H3>
      <ScrollView>
        <List>
          {data?.data?.map(({ id, name }) => {
            return (
              //список винодельнь и карточка товара
              <ListItem onPress={onItemPressed(id)} key={id}>
                <Left>
                  <Text>{name}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </ScrollView>
    </View>
  );
};
