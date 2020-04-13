import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { useRootData } from 'hooks/useRootData';

export function useLogout() {
  const {
    setAccessModal,
    setModal,
    setProvider,
    setWalletName,
    setZkWallet,
  } = useRootData(s => ({
    ...s,
    error: s.error.get(),
    provider: s.provider.get(),
    walletName: s.walletName.get(),
    zkWallet: s.zkWallet.get(),
  }));

  const history = useHistory();

  const handleLogOut = useCallback(() => {
    setModal('');
    setWalletName('Metamask');
    setAccessModal(true);
    setZkWallet(null);
    history.push('/');
  }, [
    history,
    setModal,
    setAccessModal,
    setProvider,
    setWalletName,
    setZkWallet,
  ]);

  return handleLogOut;
}