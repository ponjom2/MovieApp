import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },

  section: {
    width: "80%",
    height: "auto",
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    backgroundColor: "#e3e3",
  },

  header: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    color: "#d3d3d3",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 20,
    paddingVertical: 10,
    color: "#d3d3d3",
  },

  left: {
    marginLeft: 30,
  },

  right: {
    marginRight: 30,
  },
})

export default style;