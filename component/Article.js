import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';



class Article extends React.Component {

    render() {

       const produit1 = this.props.produit;
        console.log(produit1);
        return (
            <View style={styles.article}>
                <View style={styles.contenerImage}>
                <Image
                    source={produit1.image}
                    style={{width: 150, height: 156}}
                />
                </View>
                <View style={styles.partieDroite}>

                    <View style={styles.textTete}>
                        <Text style={styles.textTitle}>{produit1.title} </Text>
                        <Text style={styles.textPrix}>{produit1.prix}  </Text>

                    </View>

                    <View style={styles.textGlobal}>
                        <Text style={styles.textDescription} numberOfLines={5}>{produit1.description}  </Text>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    article: {
        height: 156,
        flexDirection: "row",
        width: "97%",
        backgroundColor: '#70866f',
        borderColor: 'black',
        borderRadius: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 10

    },
    contenerImage: {
        flex: 0.8

    },
    textTitle: {
        flex:1.3,
        fontSize: 20
    },
    partieDroite: {
        flex:1,
        flexDirection: "column"
    },
    textGlobal: {
        flexDirection: "column",

        marginRight: 10,
        marginBottom: 50,

    },
    textTete: {
        flexDirection: "row",
        justifyContent: "space-around",

        marginBottom: 20,
        fontSize: 15
    },

    textDescription: {
        color: 'white',
        fontSize: 15
    },
    textPrix: {
        flex: 0.7,
        marginLeft:5,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',

    },
});

export default Article
