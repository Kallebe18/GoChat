import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#555'
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    color: '#fff'
  },
  profileInfo: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  }
})
