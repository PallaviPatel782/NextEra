import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors/Colors";
import { SH, SW, SF } from "../../../utils/Responsiveness/Dimensions";
import Fonts from "../../../utils/Fonts/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SW(24),
  },

  splashImage: {
    width: SW(260),
    height: SH(220),
    marginBottom: SH(30),
  },

  title: {
    fontSize: SF(26),
    fontFamily: Fonts.Inter_Bold,
    color: Colors.black,
    marginBottom: SH(8),
  },

  subtitle: {
    fontSize: SF(14),
    fontFamily: Fonts.Inter_Regular,
    color: Colors.darkGray,
    marginBottom: SH(40),
    textAlign: "center",
    lineHeight: SH(20),
  },

  loginBtn: {
    width: "100%",
    height: SH(50),
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SH(16),
  },

  loginText: {
    color: Colors.white,
    fontSize: SF(14),
    fontFamily: Fonts.Inter_Medium,
  },

  signupBtn: {
    width: "100%",
    height: SH(50),
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  signupText: {
    color: Colors.primary,
    fontSize: SF(14),
    fontFamily: Fonts.Inter_Medium,
  },
});
