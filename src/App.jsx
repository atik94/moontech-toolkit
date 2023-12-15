import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./app/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
