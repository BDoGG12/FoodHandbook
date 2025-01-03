import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

type CategoryProps = {
    categoryName: string
    imageSource: string
}

const Category = ({categoryName, imageSource}: CategoryProps) => {

    return (
        <TouchableOpacity style={styles.container}>
            
            <Image
                style={styles.image}
                source={{uri: imageSource}}
                />
            <Text style={styles.categoryLbl}>
                {categoryName}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: 'black',
        padding: 'auto',
        backgroundColor: 'white',
        width: 'auto',
        margin: 15
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },
    categoryLbl: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})

export default Category;