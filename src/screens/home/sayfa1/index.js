import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Style from './styles';
import namazq from '../../../services/namazvakit';

const Login = () => {
  const date = new Date();
  const [datea, setDatea] = useState(date.toLocaleDateString('tr-TR'));
  const [namazvakit, setNamazvakit] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNamaz = async () => {
    try {
      const response = await namazq();

      if (response && response.result && Array.isArray(response.result)) {
        const info = response.result.map(item => ({
          time: item.saat,
          name: item.vakit,
        }));
        setNamazvakit(info);
      } else {
        throw new Error('API geçersiz veri döndürdü.');
      }
    } catch (err) {
      console.error('hata:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNamaz();
  }, []);

  return (
    <View style={{backgroundColor: 'rgba(128,128,128,0.8)', flex: 1}}>
      <View style={Style.header}>
        <Text style={Style.datetxt}>Tarih {datea}</Text>
      </View>
      <View style={Style.prayer}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>
          Elazığ'da bugün namaz tarihleri;
        </Text>
      </View>
      <View style={Style.times}>
        {loading ? (
          <Text>Yükleniyor...</Text>
        ) : (
          <FlatList
            data={namazvakit}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={Style.prayerback}>
                <View style={{marginVertical: 10, marginLeft: 20}}>
                  <Text style={{fontWeight: '800', fontSize: 25}}>
                    {item.name}: {item.time}
                  </Text>
                </View>
              </View>
            )}
            ListEmptyComponent={<Text>Namaz vakitleri bulunamadı.</Text>}
          />
        )}
      </View>
    </View>
  );
};

export default Login;
