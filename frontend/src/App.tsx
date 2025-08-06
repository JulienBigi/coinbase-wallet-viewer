import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/Layout/ThemeToggle";
import PieChart from "./components/Chart/PieChart";
import useAccount from "./hooks/useAccount";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const { wallet, loading, error, getWalletData } = useAccount();

  const renderHeader = () => (
    <header>
      <ThemeToggle />
      <button
        onClick={getWalletData}
        disabled={loading}
        className="fetch-button"
      >
        {loading ? <Spinner /> : "Fetch Wallet Data"}
      </button>
    </header>
  );

  const renderBody = () => (
    <main>
      {error && <p className="error-message">{error}</p>}
      {wallet && (
        <div className="wallet-data">
          <PieChart wallet={wallet} />
        </div>
      )}
    </main>
  );

  return (
    <ThemeProvider>
      <div className="app">
        {renderHeader()}
        {renderBody()}
      </div>
    </ThemeProvider>
  );
}

export default App;
