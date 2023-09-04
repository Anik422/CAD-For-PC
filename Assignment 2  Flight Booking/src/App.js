import './App.css';
import Header from './Components/Header';
import BookingView from './Components/BookingView';
import { Provider } from "react-redux";
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <Header />
      <BookingView />
    </Provider>
  );
}

export default App;
