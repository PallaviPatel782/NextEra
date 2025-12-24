import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import KeyboardAvoidWrapper from '../../../../components/KeyboardAvoidWrapper';
import CustomButton from '../../../../components/CustomButton';
import GlobalStyles from '../../../../utils/GlobalStyles/GlobalStyles';
import styles from './styles';
import { SH } from '../../../../utils/Responsiveness/Dimensions';
import Colors from '../../../../utils/Colors/Colors';
import { Lock, Eye, EyeOff } from 'lucide-react-native';
// import { showMessage } from "react-native-flash-message";
import { useDispatch } from 'react-redux';
// import { signupBroker } from '../../../../redux/slices/authSlice';
import { AppDispatch } from '../../../../redux/store';

type RootStackParamList = {
  ForgotPassword: undefined;
  App: undefined;
};

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Signup: React.FC<SignupScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();

  // ---------------- STATE ----------------
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // ---------------- HANDLER ----------------
  const handleContinue = async () => {
    /**
     *  SIGNUP API FLOW (COMMENTED FOR NOW)
     *
     * if (!name || contact.length !== 10 || !email || !country || password.length < 6) {
     *   showMessage({
     *     message: "Please fill all required fields correctly",
     *     type: "danger",
     *   });
     *   return;
     * }
     *
     * if (password !== confirmPassword) {
     *   showMessage({
     *     message: "Passwords do not match",
     *     type: "danger",
     *   });
     *   return;
     * }
     *
     * const result = await dispatch(
     *   signupBroker({ name, contact, email, country, password })
     * );
     *
     * if (signupBroker.fulfilled.match(result)) {
     *   navigation.replace("App");
     * }
     */

    // ✅ TEMP DEV FLOW
    navigation.replace("App");
  };

  return (
    <KeyboardAvoidWrapper
      bottomComponent={
        <View style={{ marginBottom: SH(200) }}>
          <CustomButton
            title="Create Broker Account"
            onPress={handleContinue}
            Icon={<Lock size={18} color="#fff" />}
          />
        </View>
      }
    >
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/Images/BokerBackground.jpg')}
          style={styles.topImage}
          resizeMode="cover"
        />

        <View style={styles.card}>
          <Text style={styles.title}>Create Broker Account 👋</Text>
          <Text style={styles.subtitle}>
            Join NextEra to manage deliveries, partners & earnings
          </Text>

          {/* Full Name */}
          <View style={GlobalStyles.textInputContainer}>
            <Text style={GlobalStyles.inputLabel}>Full Name</Text>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Enter your full name"
              placeholderTextColor={Colors.light_gray}
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Contact Number */}
          <View style={GlobalStyles.textInputContainer}>
            <Text style={GlobalStyles.inputLabel}>Contact Number</Text>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Enter mobile number"
              placeholderTextColor={Colors.light_gray}
              keyboardType="phone-pad"
              maxLength={10}
              value={contact}
              onChangeText={setContact}
            />
          </View>

          {/* Email */}
          <View style={GlobalStyles.textInputContainer}>
            <Text style={GlobalStyles.inputLabel}>Email Address</Text>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Enter email address"
              placeholderTextColor={Colors.light_gray}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Country */}
          <View style={GlobalStyles.textInputContainer}>
            <Text style={GlobalStyles.inputLabel}>Country</Text>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Enter country"
              placeholderTextColor={Colors.light_gray}
              value={country}
              onChangeText={setCountry}
            />
          </View>

          {/* Password */}
          <View style={GlobalStyles.textInputContainer}>
            <Text style={GlobalStyles.inputLabel}>Password</Text>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.light_gray,
              borderRadius: 8,
              paddingHorizontal: 10
            }}>
              <TextInput
                style={[GlobalStyles.textInput, { flex: 1, borderWidth: 0 }]}
                placeholder="Create password"
                placeholderTextColor={Colors.light_gray}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(p => !p)}>
                {showPassword ? (
                  <Eye size={20} color={Colors.darkGray} />
                ) : (
                  <EyeOff size={20} color={Colors.darkGray} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View style={GlobalStyles.textInputContainer}>
            <Text style={GlobalStyles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Re-enter password"
              placeholderTextColor={Colors.light_gray}
              secureTextEntry={!showPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default Signup;
