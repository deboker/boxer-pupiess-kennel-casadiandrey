import { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkmode] = useState(false);

  const toggleDarkMode = () => {
    setDarkmode((prevState) => !prevState);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const fakeDataFech = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFech();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Header handleClick={toggleDarkMode} darkMode={darkMode} />
      <Body darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
