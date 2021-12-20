import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './assets/styles/style1';
import ReactDOM from 'react-dom';

//import { ApolloProvider } from '@apollo/react-hooks';

import Task from './Components/Task';

function Home({ navigation }) {
  const [task, setTask] = useState();
  //   ReactDOM.render(
  //     <ApolloProvider client={Client}>
  //         <AuthProvider>
  //             <App />
  //         </AuthProvider>
  //     </ApolloProvider>
  // , document.getElementById('root'));s
  //   // const [styles, changeStyle] = useState('usera');
  //   // function DynamicComponent(props) {
  //   // const SelectUser = components[props.backgroundColor];
  //   // return <SelectUser />;
  //   // }
  //   // const [buttonClicked, setButtonClicked] = useState(false);
  //   // const handlePress = (e) => {
  //   //   setButtonClicked(true);
  //   //   btnProc();
  //   // };
  //   // const btnProc = () => {
  //   //   navigation.navigate('Page1');
  //   //   //styles.content.setState({ BackgroundColor: 'red' });
  //   // };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task text={'task1'} />
          <Task text={'task2'} />
          <Task />
          <Task />
          <Task />
          <Task />
        </View>
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Write a task'}
          ></TextInput>
          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default Home;
