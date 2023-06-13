import React from 'react';
import {View, SafeAreaView, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import usePost from '../../hooks/usePost/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const {data, error, loading, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu!');
  }
  if (data) {
    if (data.status === 'Error') {
      console.log(error.message)
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/shopping-icon.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />

            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;



const user = {
  address:
  {
      geolocation: {
          lat: "-37.3159",
          long: "81.1496"
      },
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874"
  },
  id: 1,
  email: "john@gmail.com",
  username: "johnd",

  password: "m38rmF$",
  name: {
      firstname: "john",
      lastname: "doe"
  },
  phone: "1-570-236-7033",
  __v: 0
}
