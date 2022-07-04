import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Page from "./components/Page";
import { Provider } from "react-redux";
import { store } from "store";
import ThemeComponent from "theme";
import { Toaster } from "react-hot-toast";
import { ConfirmProvider } from "material-ui-confirm";

const App = () => {
  return (
    <Provider store={store}>
      <ConfirmProvider>
        <ThemeComponent>
          <Page>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </Page>
          <Toaster
            position="top-center"
            toastOptions={{ className: "react-hot-toast" }}
          />
        </ThemeComponent>
      </ConfirmProvider>
    </Provider>
  );
};

export default App;
