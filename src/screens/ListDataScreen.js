import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ListDataScreen = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const allData = response.data;

      const perPage = 10;
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const slicedData = allData.slice(startIndex, endIndex);

      setPosts(prevPosts => [...prevPosts, ...slicedData]);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat memuat data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const loadMore = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderBottomTabs = () => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabItem, styles.activeTab]}
          onPress={() => navigation.navigate('ListData')}>
          <Text style={[styles.tabText, styles.activeTabText]}>List Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>List Data</Text>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={fetchData}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetailData', {id: item.id})}>
            <Text style={styles.idText}>
              ID: <Text style={styles.idNumber}>{item.id}</Text>
            </Text>
            <Text style={styles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#4CAF50" /> : null
        }
        contentContainerStyle={{paddingBottom: 80}}
      />

      {renderBottomTabs()}
    </View>
  );
};

export default ListDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 4,
    borderRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#4CAF50',
  },
  activeTabText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  idText: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  idNumber: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  titleText: {
    fontSize: 16,
    color: '#333',
  },
  errorContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  errorText: {
    color: 'red',
  },
  retryText: {
    color: '#4CAF50',
    marginTop: 4,
  },
});
