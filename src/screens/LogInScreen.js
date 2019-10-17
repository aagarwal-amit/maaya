import React, { Component } from 'react'
import {
    View, Text, ScrollView,
    KeyboardAvoidingView, StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import transparentHeaderStyle from '../styles/navigation';
import Loader from '../components/Loader';
import Notification from '../components/Notification';
import colors from '../styles/Colors';
import NavBarButton from '../components/buttons/NavBarButton';
import NextArrowButton from '../components/buttons/NextArrowButton';
import InputField from '../components/form/InputField';
import styles from './styles/LogIn';

export class LogInScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton
            handleButtonPress={() => navigation.navigate('ForgotPassword')}
            location="right"
            color={colors.white}
            text="Forgot Password"
        />,
        headerLeft: <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="ios-arrow-back" color={colors.white} size={30} />}
        />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false,
        };

        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }

    handleNextButton() {
        this.setState({ loadingVisible: true });
        const { logIn, navigation } = this.props;
        const { navigate } = navigation;

        setTimeout(() => {
            const { emailAddress, password } = this.state;
            //if (logIn(emailAddress, password)) {
            if (true) {
                this.setState({ formValid: true, loadingVisible: false });
                navigate({
                    routeName: 'LoggedIn',
                });
            } else {
                this.setState({ formValid: false, loadingVisible: false });
            }
        }, 100);
    }

    handleCloseNotification() {
        this.setState({ formValid: true });
    }

    handleEmailChange(email) {
        // eslint-disable-next-line
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({ emailAddress: email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
        }
    }

    handlePasswordChange(password) {
        const { validPassword } = this.state;

        this.setState({ password });

        if (!validPassword) {
            if (password.length > 4) {
                // Password has to be at least 4 characters long
                this.setState({ validPassword: true });
            }
        } else if (password <= 4) {
            this.setState({ validPassword: false });
        }
    }

    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state;
        if (validEmail && validPassword) {
            return false;
        }
        return true;
    }

    render() {
        const {
            formValid, loadingVisible, validEmail, validPassword,
        } = this.state;
        const showNotification = !formValid;
        const background = formValid ? colors.gray06 : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10 : 0;
        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
                behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>
                            Log In
                        </Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                        />
                    </ScrollView>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                        disabled={this.toggleNextButtonState()}
                    />
                </View>
                <Loader
                    modalVisible={loadingVisible}
                    animationType="fade"
                />
                <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                    <Notification
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="Those credentials don't look right."
                        secondLine="Please try again."
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedInStatus: state.loggedInStatus,

})

const mapDispatchToProps = dispatch => ({
    onLoginError: (errors) =>
        dispatch({ type: LOGIN_ERROR, error: errors }),
    onLoginSuccess: (data) =>
        dispatch({ type: LOGIN_SUCCESS, ...data }),
    onLoginStart: () =>
        dispatch({ type: LOGIN_START })
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)


