import { useCallback, useState } from 'react';
import type { Accounts } from '../types/account.types';

const useAccount = () => {
  const [wallet, setWallet] = useState<Accounts | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWalletData = useCallback(async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch('/accounts.json');
    const data = await response.json();
    setWallet(data);
  } catch (err) {
    setError('Failed to fetch wallet data');
  } finally {
    setLoading(false);
  }
}, []);

  return { wallet, loading, error, getWalletData };
};

export default useAccount;