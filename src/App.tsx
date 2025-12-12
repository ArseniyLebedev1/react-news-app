import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
};

export { App };
