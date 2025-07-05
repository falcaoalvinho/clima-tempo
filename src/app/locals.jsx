import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import deleteIcon from "../../assets/images/icons/DeleteIcon.png"
import searchIcon from "../../assets/images/icons/SearchIcon.png"


export  function LocalList(){
    return(
        <View style={style.container}>
            <View style={style.searchContainer}>
                <TextInput style={style.label}>Buscar local...</TextInput>

                <Image source={searchIcon} style={style.serchIcon}/>
            </View>

            <View style={style.localPreview}>
                <View style={style.localIten}>
                    <Text style={style.localText}>São Paulo</Text>

                    <View style={style.deleteButton}>
                        <Image style={style.deleteIcon} source={deleteIcon}/>
                    </View>
                </View>

                <View style={style.lineLocalDetail}/>

                <View style={style.localIten}>
                    <Text style={style.localText}>Rio de Janeiro</Text>

                    <View style={style.deleteButton}>
                        <Image style={style.deleteIcon} source={deleteIcon}/>
                    </View>
                </View>

                <View style={style.lineLocalDetail}/>

                <View style={style.localIten}>
                    <Text style={style.localText}>Brasília</Text>

                    <View style={style.deleteButton}>
                        <Image style={style.deleteIcon} source={deleteIcon}/>
                    </View>
                </View>

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
            
        },
        localPreview: {
            width: '100%',
            backgroundColor: '#212121',

            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 15,
            borderWidth: 3,
            borderColor: '#989898',

            zIndex: 1
        },
        localIten: {
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',

            flexDirection: 'row',
            padding: 10,
            gap: 10,
        },
        localIcon: {
            width: 30,
            height: 30,
        },
        lineLocalDetail: {
            height: 1,
            width: '90%',
            borderRadius: 3,
            backgroundColor:'#989898'
        },
        localText: {
            fontSize: 20,
            fontWeight: 700,
            color: '#5ECA75'
        }, 
        deleteButton: {
            borderRadius: '50%',
            backgroundColor: '#171717',

            width: 25,
            height: 25,
            
            alignItems: 'center',
            justifyContent: 'center'
        },
        deleteIcon: {
            width: 15,
            height: 15,

        } 
    }
)