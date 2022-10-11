import { useState,useEffect } from "react"
import { View, Text, FlatList, Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"


const DetailProducts = ({ route }) => {
    const { myProducts } = route.params
    const [getTotal, setTotal] = useState(0)
    const { top } = useSafeAreaInsets()

    const calculateTotal = () => {
        const suma = myProducts.reduce((prev, next) => prev.price + next.price)
        setTotal(suma)
    }

    useEffect(() => {
        calculateTotal();
    }, [])


    return (
        <View style={{ marginTop: top + 20, padding: 20 }}>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, }}>MIS PRODUCTOS</Text>
            </View>
            <FlatList data={myProducts} keyExtractor={myProducts.name}
                renderItem={({ item }) =>
                (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 3 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }}></Image>
                            <Text>{item.name}</Text>
                        </View>
                        <Text>${item.price}</Text>
                    </View>
                )}
            >
            </FlatList>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total</Text>
                <Text>{getTotal}</Text>
            </View>
        </View>
    )
}

export default DetailProducts