import {storeContext} from './context';
import {TStore} from './store';
import {useStoreData} from './useStoreData';

export const useChatData = () => {
  return useStoreData(
    storeContext,
    (contextData) => contextData!,
    (store: TStore) => store,
  );
};
