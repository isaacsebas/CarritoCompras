import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const CardProducts = ({ products, totalProducts, addProducts }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{`${products.name} #${products.id}`}</Text>
            <Text style={styles.subTitle}>Precio: ${products.price}</Text>
            <Image source={{ uri: products.image }} style={styles.image}></Image>
            <TouchableOpacity style={styles.button} onPress={() => addProducts([...totalProducts, products])}>
                <Text style={{ color: '#fff' }}>Agregar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        margin: 15,
        width: 170,
        height: 150,
        overflow: 'hidden',
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        left: 75,
        bottom: 10,
        zIndex: 999
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subTitle: {
        marginTop: 5,

    },
    button: {
        padding: 10,
        backgroundColor: '#208EF7FF',
        width: 70,
        position: 'absolute',
        bottom: 10,
        left: 5,
        borderRadius: 10,

    }
})

export default CardProducts
