import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import chatStore, {ChatStore} from '../store/chat';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useStore from '../store/useObservable';

interface Props {
  store: ChatStore;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = observer(({store}: Props) => {
  const {isChat, setIsChat} = store;
  const onPress = useCallback(() => {
    setIsChat(!isChat);
  }, [isChat, setIsChat]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Chat</Text>
      <Button title={!isChat ? 'Create a Room' : 'Exit'} onPress={onPress} />
    </View>
  );
});

// useStore
// const Header = observer(({store}: Props) => {
//   // const {isChat, setIsChat} = store;
//   const {chat} = useStore();
//   const {isChat} = chat;
//   // const onPress = useCallback(() => {
//   //   chat.setIsChat(!isChat);
//   // }, [isChat, setIsChat]);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Simple Chat</Text>
//       <Button title={!isChat ? 'Create a Room' : 'Exit'} onPress={onPress} />
//     </View>
//   );
// });

// useChatData
// const Header = observer(() => {
//   // const {isChat, setIsChat} = store;
//   const {isChat, setIsChat} = useChatData();
//   const onPress = useCallback(() => {
//     setIsChat(!isChat.get());
//   }, [isChat, setIsChat]);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Simple Chat</Text>
//       <Button
//         title={!isChat.get() ? 'Create a Room' : 'Exit'}
//         onPress={onPress}
//       />
//     </View>
//   );
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 25,
  },
});

export default () => <Header store={chatStore} />;
// export default Header;
