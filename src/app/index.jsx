import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Index(){
    return (
        <ScrollView>  
            <View style={style.container}>
                <View style={style.header}>
                    <View style={style.headerIcon}/>
                    <View style={style.headerIcon}/>
                </View>

                <View style={style.previewContainer}>
                    <View style={style.textContainer}>
                        <Text style={style.smallTitle}>São Paulo, SP</Text>
                        <Text style={style.smallSubTitle}>Segunda-feira, Jan 01</Text>
                    </View>

                    <View style={style.previewImage}/>

                    <View style={style.temperatureContainer}>
                        <Text style={style.smallTitle}>Placeholder</Text>
                        <Text style={style.textTemperature}>25ºC</Text>
                        <View style={style.nilsinhoImage}/>
                    </View>
                </View>


                <View style={style.tablePreview}>

                    <View style={style.tableIten}>
                        <View style={style.tableIcon}/>
                        <Text style={style.tableText}>Chance de Chuva: </Text>
                        <Text style={style.tableTextSpam}>50%</Text>
                    </View>

                    <View style={style.lineTableDetail}/>

                    <View style={style.tableIten}>
                        <View style={style.tableIcon}/>
                        <Text style={style.tableText}>Umidade do ar: </Text>
                        <Text style={style.tableTextSpam}>Normal</Text>
                    </View>

                    <View style={style.lineTableDetail}/>

                    <View style={style.tableIten}>
                        <View style={style.tableIcon}/>
                        <Text style={style.tableText}>Velocidade do vento: </Text>
                        <Text style={style.tableTextSpam}>5m/s</Text>
                    </View>
                </View>

                <View style={style.carouselContainer}>
                    <View style={style.carouselBorder}/>

                    <View style={style.carouselItem}>
                        <Text style={style.carouselTitle}>Seg</Text>
                        <Text style={style.corouselText}>30º</Text>
                        <Text style={style.corouselText}>20º</Text>
                    </View>

                    <View style={style.carouselItem}>
                        <Text style={style.carouselTitle}>Ter</Text>
                        <Text style={style.corouselText}>30º</Text>
                        <Text style={style.corouselText}>20º</Text>
                    </View>

                    <View style={style.carouselItem}>
                        <Text style={style.carouselTitle}>Qua</Text>
                        <Text style={style.corouselText}>30º</Text>
                        <Text style={style.corouselText}>20º</Text>
                    </View>

                    <View style={style.carouselItem}>
                        <Text style={style.carouselTitle}>Qui</Text>
                        <Text style={style.corouselText}>30º</Text>
                        <Text style={style.corouselText}>20º</Text>
                    </View>

                    <View style={style.carouselItem}>
                        <Text style={style.carouselTitle}>Sex</Text>
                        <Text style={style.corouselText}>30º</Text>
                        <Text style={style.corouselText}>20º</Text>
                    </View>

                    <View style={style.carouselItem}>
                        <Text style={style.carouselTitle}>Sab</Text>
                        <Text style={style.corouselText}>30º</Text>
                        <Text style={style.corouselText}>20º</Text>
                    </View>

                    <View style={style.carouselBorder}/>
                </View>

                <Text style={style.weatherText}>Esse texto é um placeholder para weatherText</Text>
            </View>
        </ScrollView>
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
        header: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        headerIcon: {
            width: 75,
            height: 75,
            backgroundColor: '#989898',
            borderRadius: 15
        },
        previewContainer: {
            width: '100%',
            
            alignItems: 'center',
            justifyContent: 'center',

            gap: 15,
            padding: 15,

            backgroundColor: '#212121',
            borderRadius: 15,
            borderWidth: 3,
            borderColor: '#989898'

        },
        textContainer: {
            width: '100%',

            alignItems: 'center',
            justifyContent: 'center'
        },
        smallTitle: {
            color: "#FFF",
            fontSize: 25,
            fontWeight: '600',

        },
        smallSubTitle: {
            color: '#989898',

            fontSize: 20,
            fontWeight: '600',

        },
        previewImage: {
            width: 200,
            height: 200,

            backgroundColor: '#989898'
        },
        temperatureContainer: {
            width: '100%',

            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        textTemperature: {
            fontSize: 60,
            fontWeight: '900',
            lineHeight: 60,

            color: '#fff'
        },
        tablePreview: {
            width: '100%',
            backgroundColor: '#212121',

            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 15,
            borderWidth: 3,
            borderColor: '#989898',

            zIndex: 1
        },
        tableIten: {
            width: '100%',

            flexDirection: 'row',
            padding: 10,
            gap: 10,
        },
        tableIcon: {
            alignItems: 'flex_start',
            justifyContent: 'center',

            width: 30,
            height: 30,
            backgroundColor: '#989898'
        },
        lineTableDetail: {
            height: 1,
            width: '80%',
            borderRadius: 3,
            backgroundColor:'#989898'
        },
        tableText: {
            fontSize: 20,
            fontWeight: 400,
            color: '#fff'
        },
        tableTextSpam: {
            fontSize: 20,
            fontWeight: 700,
            color: '#989898'
        },
        nilsinhoImage: {
            width: 170,
            height: 170,
            backgroundColor: '#d9d9d9',

            position: 'absolute',
            left: '50%',
            zIndex: 0
        },
        carouselContainer: {
            width: '100%',

            flexDirection: 'row',            
            alignItems: 'center',
            justifyContent: 'center'
        },
        carouselBorder: {
            width: 3,
            height: '100%',
            backgroundColor: '#989898',
        },
        carouselItem: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,

            width: 55,
            backgroundColor: '#212121',

            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#989898',
        },
        carouselTitle: {
            fontSize: 15,
            fontWeight: 600,
            color: '#fff'
        },
        corouselText: {
            fontSize: 10,
            fontWeight: 400,
            color: "#989898"
        },
        weatherText: {
            fontSize: 20,
            fontWeight: 600,
            color: '#989898',
            textAlign: 'center'
        }
    }
)