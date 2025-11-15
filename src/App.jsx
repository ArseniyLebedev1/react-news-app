import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </>
  );
};

export { App };
