import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Row: Logo, Language, Back */}
        <View style={styles.topRow}>
          <Image source={require('./assets/images/Group8.png')} style={styles.logo} resizeMode="contain" />
          <View style={styles.topRightRow}>
            <TouchableOpacity style={styles.languageBtn} activeOpacity={0.8}>
              <Image source={require('./assets/images/Frame 6.png')} style={styles.languageImage} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.backBtn} activeOpacity={0.8}>
              <Text style={styles.backText}>←  Back</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting Text */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>
            Hi, Abc patient, Let's get started — I'm here to listen and help you feel better!
          </Text>
        </View>

        {/* Upload Medical Reports Button */}
        <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.85}>
          <Image source={require('./assets/images/Frame 4.png')} style={styles.uploadImage} resizeMode="contain" />
        </TouchableOpacity>

        {/* Talk to ZIVANKH Button */}
        <TouchableOpacity style={styles.talkBtn} activeOpacity={0.85}>
          <Image source={require('./assets/images/Frame 5.png')} style={styles.talkImage} resizeMode="contain" />
        </TouchableOpacity>

        {/* Doctor Illustration */}
        <View style={styles.doctorContainer}>
          <Image source={require('./assets/images/image 6.png')} style={styles.doctorImg} resizeMode="contain" />
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6FDFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6FDFF',
    paddingHorizontal: '6%',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logo: {
    width: width * 0.18,
    height: width * 0.12,
  },
  topRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageBtn: {
    width: 120,
    aspectRatio: 3.2,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  languageImage: {
    width: '100%',
    height: '100%',
  },
  backBtn: {
    backgroundColor: '#C6E9F6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#B3D8E7',
  },
  backText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textShadowColor: '#00000022',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  greetingContainer: {
    marginTop: height * 0.15,
    marginBottom: height * 0.04,
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  greetingText: {
    fontSize: 20,
    color: '#222',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 28,
  },
  uploadBtn: {
    width: width * 0.98,
    aspectRatio: 5.5,
    alignSelf: 'center',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  uploadImage: {
    width: '100%',
    height: '100%',
  },
  talkBtn: {
    width: width * 0.98,
    aspectRatio: 5.5,
    alignSelf: 'center',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  talkImage: {
    width: '100%',
    height: '100%',
  },
  doctorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  doctorImg: {
    width: width * 0.95,
    height: height * 0.55,
    maxHeight: 400,
  },
});
