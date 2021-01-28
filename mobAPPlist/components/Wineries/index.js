import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { H3, Icon, Left, List, ListItem, Right, Text } from "native-base";
import { ScrollView, View } from "react-native";
//используем библиотеку Реакт-квэри, позволяет круто обащаться к Беку, кэшируя, 
import { useQuery } from "react-query";
import { useHistory } from "react-router-native";

//здесь экспортируется объект API
import { API } from "../../api";

//показывая ошибки, если есть, ставить флаги загружаются или нет
export const Wineries = () => {
  const history = useHistory();
  //Юзер-квэри - реатовский хук, то есть когда мы вызываем ЮК, мы передаем в качестве параметра Название "List",может быть любым
  //и переда. колбэк, который вызывает и возвращает промис
  const { isLoading, error, data } = useQuery("list", () =>
  //метод бетбрюви возвращает промис
    API.getWineries()
  );
  //если загрузка., то показываем загрузку
  //если ошибка , то выводим текс об ошибке, 
  //объявляем обработчик onItemPressed, который ,если не передает ID, то переводит нас на рут с одной___(виноделен)
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
