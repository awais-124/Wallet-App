import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import StorageService from '../utils/StorageHelper';
import Task from '../components/Task';

import {styles} from '../styles/styles';
import theme from '../themes/theme';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const onAddPress = () => {
    navigation.navigate('AddTask');
  };

  const loadData = async () => {
    const data = await StorageService.getItem('tasks');
    if (data) {
      setTasks(JSON.parse(data));
    }
  };

  const saveData = async tasks => {
    await StorageService.saveItem('tasks', JSON.stringify(tasks));
  };

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
    saveData(updatedTasks);
  };

  const deleteTask = taskId => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
    saveData(filteredTasks);
  };

  const editTask = taskId => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      navigation.navigate('AddTask', {task: taskToEdit});
    }
  };

  const renderItem = ({item}) => (
    <Task
      task={item}
      onToggle={toggleTask}
      onDelete={deleteTask}
      onEdit={editTask}
    />
  );

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={[styles.fill, styles.p20]}>
      <Text style={styles.title}>Welcome to ToDo List App</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={onAddPress}>
        <Ionicons name="add" size={22} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
