import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { HelpScreen } from "./HelpScreen"
import { ConfigScreen } from "./ConfigScreen"

const Stack = createStackNavigator();

function Menu({ navigation }) {
    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={styles.logo}
                source={require('../assets/allerga.png')}
            />
            <View style={{ height: 50 }} />
            <Button
                mode="contained" color="#80ced7"
                onPress={() => navigation.navigate(ConfigScreen)}
                style={styles.buttonCustom}
            >

                <Ionicons name="settings-outline" size={20} />
                <View style={{ paddingLeft: 5 }}></View>
                <Text style={styles.buttonText}>Configuración</Text>
            </Button>
            <Button
                mode="contained" color="#80ced7"
                onPress={() => navigation.navigate(HelpScreen)}
                style={styles.buttonCustom}
            >
                <Ionicons name="help-circle" size={20} />
                <View style={{ paddingLeft: 5 }}></View>
                <Text style={styles.buttonText}>Ayuda</Text>
            </Button>
        </View>
    );
}

export function HomeScreen() {
    return (
        <Stack.Navigator
            initialRouteName="Menu"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#9ad1d4',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen
                name="ConfigScreen"
                component={ConfigScreen}
                options={{
                    title: 'Configuración'
                }}
            />
            <Stack.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{
                    title: 'Ayuda'
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    buttonCustom: {
        marginTop: 20,
        height: 45,
        width: 200,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',

    },
    logo: {
        width: 200,
        height: 200,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        height: '100%',
        width: '100%',
        paddingLeft: 10,
    }
});