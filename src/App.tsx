import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Containers/Home/footer";
import { RestaurantProvider } from "./context/restaurantesContext";
import Rotas from "./routes";
import { store } from "./store";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <RestaurantProvider>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </Provider>
    </RestaurantProvider>
  );
}

export default App;
