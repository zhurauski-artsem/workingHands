import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../models';
import { Button, FlatList, Image, Text, View } from 'react-native';
import { styles } from './styles';
import Toast from 'react-native-toast-message';

type ShiftDetailsPageProps = NativeStackScreenProps<
  RootStackParamList,
  'ShiftDetails'
>;

export const ShiftDetails: React.FC<ShiftDetailsPageProps> = props => {
  const {
    logo,
    address,
    workTypes,
    companyName,
    timeEndByCity,
    dateStartByCity,
    timeStartByCity,
  } = props.route.params.shift;

  const handleClickApply = () => {
    Toast.show({
      position: 'bottom',
      type: 'success',
      text1: 'Спасибо за отклик',
      text2: 'Работодатель свяжется с вами в ближайшее время',
    });
  };

  return (
    <View style={styles.container}>
      <Toast />
      <View style={styles.imgageWrapper}>
        <Image source={{ uri: logo }} width={100} height={100} />
      </View>
      <Text>Компания: {companyName}</Text>
      <Text>Адрес: {address}</Text>
      <Text>
        Время работ: {dateStartByCity} {timeStartByCity} - {timeEndByCity}
      </Text>
      <View style={styles.divider} />
      <Text>Типы работ:</Text>
      <View>
        <FlatList
          data={workTypes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Text>{item.nameOne}</Text>}
        />
      </View>
      <Button onPress={handleClickApply} title="Откликнуться" />
    </View>
  );
};
