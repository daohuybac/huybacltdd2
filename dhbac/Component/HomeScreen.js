import React from 'react';
import { View, ScrollView } from 'react-native';
import ListProduct from './ListProduct';
import Header from './Header';
export default function HomeScreen() {
    return (
        <>
            <Header></Header>
            <ScrollView >
                <ListProduct></ListProduct>
            </ScrollView>
        </>

    );
}