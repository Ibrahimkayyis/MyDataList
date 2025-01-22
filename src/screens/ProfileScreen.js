import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const openLink = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open link:', err),
    );
  };

  const renderBottomTabs = () => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('ListData')}>
          <Text style={styles.tabText}>List Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Foto Profil */}
      <Image
        source={{
          uri: 'https://drive.google.com/uc?export=view&id=1VW5QbHb8JVfhzRjMzM0S4GI9XeJ1weuY',
        }}
        style={styles.profileImage}
      />

      {/* Informasi Profil */}
      <Text style={styles.title}>Name: Ibrahim Kayyis</Text>
      <Text style={styles.subTitle}>Expertise: Mobile Developer</Text>

      <Text style={styles.description}>
        Short Description: Mobile Developer and Information Systems student with
        a strong foundation in Android application development. Currently
        pursuing the Mobile Development track at Bangkit Academy, supported by
        Google, GoTo, and Traveloka, I am enhancing my expertise in Kotlin,
        Material Design 3, and MVVM architecture. I have experience leading the
        development of an innovative healthcare application featuring real-time
        camera integration and efficient user data management. Certified in
        Android development, machine learning, and AI through Dicoding
        Indonesia, I excel in collaboration, problem-solving, and delivering
        user-centered solutions. I am eager to contribute to impactful mobile
        development projects through an internship opportunity.
      </Text>

      {/* Tombol GitHub dan Portofolio */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openLink('https://github.com/Ibrahimkayyis')}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            openLink(
              'https://ibrahimkayyis.github.io/My-Mobile-Dev-Portofolio/',
            )
          }>
          <Text style={styles.buttonText}>Portofolio</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigasi */}
      {renderBottomTabs()}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    marginBottom: 16,
    textAlign: 'justify',
    fontSize: 14,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
});
