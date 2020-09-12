import React, {useState, useCallback} from 'react';
import {Title} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ChatScreen = ({}: Props): React.ReactElement => {
  // https://github.com/FaridSafi/react-native-gifted-chat/issues/1371
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  const onSend = useCallback((newMessages) => {
    setMessages((prevMessages) => [...newMessages, ...prevMessages]);
  }, []);

  return (
    <SafeAreaView style={[styles.safeareaview]}>
      <Title style={[styles.title]}>Gifted Chat Example</Title>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  safeareaview: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
  },
});

export default ChatScreen;
