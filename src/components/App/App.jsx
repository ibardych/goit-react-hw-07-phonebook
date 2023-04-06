import { MainContainer } from './App.styled';
import PhoneBook from '../PhoneBook/PhoneBook';
import Copyright from 'components/Copyright/Copyright';
import { Provider } from 'react-redux';
import { store } from './../../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <PhoneBook />
        <Copyright message="©2023 Made by Iurii Bardych" />
      </MainContainer>
    </Provider>
  );
};

export default App;
