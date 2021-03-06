import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';
import { StatusBar } from 'expo-status-bar';

export default function ListThumbnailExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Would you like to invite your friends to join this group ?</Text>
            <Button style={styles.button}><Text style={{ color: 'white', marginLeft: 50 }}>Create Chatters</Text></Button>
            <Button style={styles.button}><Text style={{ color: 'white', marginLeft: 40 }}>Invite via Whatsapp</Text></Button>
            <View style={styles.button1}><Text style={{ color: 'white', marginLeft: 85, cursor:'pointer' }}>Skip</Text></View>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 30,
        height: 450,
        width: 300,
        backgroundColor: 'rgb(46, 33, 70)'
    },
    header: {
        paddingTop: 80,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        marginTop: 150,
        marginLeft: 30,
        marginRight: 30,
        color: 'white',
        textAlign: 'center',
    },
    button: {
        borderRadius: 10,
        backgroundColor: 'lightgreen',
        width: 250,
        marginLeft: 20,
        marginTop: 20,
    },
    button1: {
        borderRadius: 10,
        backgroundColor: 'rgb(46, 33, 70)',
        width: 250,
        marginLeft: 50,
        marginTop: 30,
    }
})