import React from "react";
import { View } from "react-native";
import * as Linking from "expo-linking";
import {
  Card,
  CardItem,
  Content,
  Grid,
  Col,
  H2,
  H3,
  Text,
  Title,
  Button,
} from "native-base";
import { useQuery } from "react-query";
import { useParams } from "react-router-native";

import { API } from "../../api";

// все тоже самое, только здесь берется ID рута (позволяет извлекать параметры рута через useParams)
export const WineryDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(id, () => API.getWinery(id));
  if (isLoading) return <H2>Loading...</H2>;
  if (error || !data.data)
    return <Text>An error has occurred: {error.message}</Text>;
    // кнопка позвонить
  const onCall = () => {
    Linking.openURL("tel:" + data.data.phone);
  };
  //перейти на веб сайт
  const onGoToWebsite = () => {
    Linking.openURL(data.data.website_url);
  };
  return (
    // название винодельни, штат, тип , кнопки позвонить и сайт
    <Content>
      <H2>{data.data.name}</H2>
      <H3>
        {data.data.state}, {data.data.city}
      </H3>
      <Text>Type: {data.data.Winery_type}</Text>
      <Card>
        <Grid>
          <Col>
            <Button onPress={onCall}>
              <Text>Call</Text>
            </Button>
          </Col>
          <Col>
            <Button onPress={onGoToWebsite}>
              <Text>Go to website</Text>
            </Button>
          </Col>
        </Grid>
      </Card>
    </Content>
  );
};
