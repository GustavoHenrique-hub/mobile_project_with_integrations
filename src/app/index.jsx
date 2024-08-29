import { Link } from 'expo-router';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import Logo from './assets/Logo.png';
import {
  Container,
  Safe,
  LoginLogo,
  FormContainer,
  LoginText,
  LoginInput,
  LoginButton,
  ForgotText,
  LoginButtonText,
  LoginButtonView,
} from './styles';
import DropShadow from 'react-native-drop-shadow';

export default function Page() {
  return (
    <Safe>
      <Container>
        <StatusBar
          backgroundColor="#D7A1FF"
          hidden
          barStyle={'dark-content'}
        />
        <LoginLogo source={Logo} />
        <FormContainer>
          <LoginText>Usuário</LoginText>
          <LoginInput></LoginInput>
          <LoginText>Senha</LoginText>
          <LoginInput></LoginInput>
        </FormContainer>
        <LoginButton>
          <Link href={'./pages/home'}>
            <LoginButtonText>Entrar</LoginButtonText>
          </Link>
        </LoginButton>
        <ForgotText>Primeiro acesso?</ForgotText>
        <ForgotText>Esqueci a senha</ForgotText>
      </Container>
    </Safe>
  );
}