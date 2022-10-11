import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { productsData } from '../../data/ProductsData'
import { CardProducts } from './components'

const Products = ({navigation}) => {
    //En este caso getArreglo tendra todos los valores del mismo
    const [getArreglo, setArreglo] = useState(productsData)
    const { top } = useSafeAreaInsets()
    const [getProducts, setProducts] = useState([])
    return (
        <>
            <View style={{ ...styles.header, marginTop: top + 2 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Productos Tecnologicos</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Ionicons size={30} name='cart-outline' style={styles.icon} onPress={() => navigation.navigate('Detail',{myProducts:getProducts})}></Ionicons>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17 }}>{getProducts.length}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>

                <FlatList numColumns={2} data={getArreglo} style={{marginBottom:150}}
                    keyExtractor={getArreglo.name}
                    renderItem={({ item }) => (<CardProducts products={item} totalProducts={getProducts} addProducts={setProducts} />)}></FlatList>
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    icon: {
        fontWeight: 'bold'
    }
})


export default Products
