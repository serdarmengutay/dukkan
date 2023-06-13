import React from 'react';
import { FlatList } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useDispatch } from 'react-redux';

const Products = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);
  const handleItemSelect = id => {
    navigation.navigate('Details', { id });
  };

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleItemSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
