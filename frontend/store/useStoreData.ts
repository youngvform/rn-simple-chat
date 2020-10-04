import {Context, useContext} from 'react';

export const useStoreData = <ContextData, Store, Selection>(
  context: Context<ContextData>,
  storeSelector: (context: ContextData) => Store,
  dataSelector: (store: Store) => Selection,
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error();
  }
  const store = storeSelector(value);
  return dataSelector(store);
};
