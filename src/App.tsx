import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import styles from "./App.module.css";
import InformationPage from "./pages/Information";
import SearchAndDownloadPage from "./pages/SearchAndDownloadPage/SearchAndDownload.page";
import AppProviders from "./providers";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
  return (
    <AppProviders>
      <div className={styles.body}>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<SearchAndDownloadPage />} />
            <Route path="/:query" element={<SearchAndDownloadPage />} />
            <Route path="information" element={<InformationPage />} />
          </Routes>
        </Body>
        <Footer />
      </div>
    </AppProviders>
  );
}

export default App;
