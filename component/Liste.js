import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import produit from "../helper/Produit"
import Article from "./Article";

export default class Liste extends React.Component{
    render() {
        return (
            <View>
                <FlatList
                    data={produit}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Article produit={item}/>}
                    onEndReachedThreshold={0.5}
                />
            </View>
        )
    }
}
