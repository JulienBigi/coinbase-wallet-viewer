import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/Layout/ThemeToggle";
import PieChart from './components/Chart/PieChart';
import useAccount from "./hooks/useAccount";

function App() {
  const { wallet, loading, error, getWalletData } = useAccount();

  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <ThemeToggle />
          <button
            onClick={getWalletData}
            disabled={loading}
            className="fetch-button"
          >
            {loading ? "Loading..." : "Fetch Wallet Data"}
          </button>
        </header>
        <main>
          {error && <p className="error-message">{error}</p>}

          {wallet && (
            <div className="wallet-data">
              <PieChart wallet={wallet} />
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
