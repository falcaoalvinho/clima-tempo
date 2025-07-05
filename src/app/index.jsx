import { Image, StyleSheet, TextInput, View } from "react-native"
import searchIcon from "../../assets/images/icons/SearchIcon.png"


export default function Index(){
    return(
        <View style={style.container}>
            <View style={style.searchContainer}>
                <TextInput style={style.label}>Buscar local...</TextInput>

                <Image source={searchIcon} style={style.serchIcon}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'top',
            alignItems: 'center',

            padding: 30,
            gap: 20,

            backgroundColor: '#171717'
        },

        searchContainer: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',

            padding: 10, 
            marginTop: 10,

            borderRadius: 15,

            width: '100%',
            backgroundColor: '#212121'
        },

        label: {
            fontSize: 16,
            fontWeight: 400,

            color: '#989898'
        },
        
        serchIcon: {
            width: 25,
            height: 25,
            
            color: '#989898'
        }
    }
)