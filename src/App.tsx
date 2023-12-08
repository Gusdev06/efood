import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Containers/Home/footer";
import Rotas from "./routes";
import { store } from "./store";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
