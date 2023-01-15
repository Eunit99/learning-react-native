import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#222A48',
    height: "100vh",
    width: "100vw"
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1rem",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
  },

  headerIconContainer: {
    width: "34px",
    height: "34px",
    position: "relative",
  },

  balanceContainer: {
    width: "90%",
    height: "190px",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D7E8EF",
    borderRadius: 16,
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",
  },

  balanceContainerButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  balanceContainerButton: {
    width: "138px",
    height: "49px",
    backgroundColor: "#539BF0",
    borderRadius: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  balanceContainerButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },


  bottomNavigation: {
    position: "absolute",
    width: "100%",
    height: "80px",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "12px",
  },

  nav: {
    height: "100%",
    width: "50px",
    alignItems: "center",
  },

  balanceContainerBalance: {
    fontFamily: "InaiMathi",
    fontWeight: "700",
    fontSize: 24,
    color: "#000000",
  },

  text: {
    fontFamily: "InaiMathi",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    color: "#000000",
    whiteSpace: "nowrap",
  }
});