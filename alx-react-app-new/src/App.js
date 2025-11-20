import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// ⭐ NEW IMPORT
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <UserProfile name="BK" age="29" bio="Frontend developer" />
      <MainContent />

      {/* ⭐ NEW COMPONENT */}
      <Counter />

      <Footer />
    </>
  );
}

export default App;
