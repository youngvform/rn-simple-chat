import {useLocalObservable} from 'mobx-react-lite';
import React, {createContext} from 'react';
import {createStore, TStore} from './store';

export const storeContext = createContext<TStore | null>(null);

const StoreProvider: React.FC = ({children}) => {
  const store = useLocalObservable(createStore);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
