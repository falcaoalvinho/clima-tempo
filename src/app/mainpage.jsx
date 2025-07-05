import appIcon from '../../assets/images/icons/AppIcon.png'
import hamburguerMenu from '../../assets/images/icons/HamburgerMenu.png'

import nilsinho from '../../assets/images/nilsinho/Sunny.png'
import weatherIcon from '../../assets/images/weatherIcons/ClearDay.png'

import humidityIcon from '../../assets/images/icons/Humidity.png'
import rainIcon from '../../assets/images/icons/Rain.png'
import windIcon from '../../assets/images/icons/Wind.png'

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const collors = {
    red : '#D20000',
    orange: '#FF8800',
    green : '#31D200',
    blue: '#276BBA',
    purple: '#9747FF'

}

export default function Index(){
    return (
        <ScrollView>  
            <View style={style.container}>
                <View style={style.header}>
                    <Image style={style.headerIcon} source={appIcon} />
                    <Image style={style.hamburguerMenu} source={hamburguerMenu}/>
                </View>

                <View style={style.previewContainer}>
                    <View style={style.textContainer}>
                        <Text style={style.smallTitle}>São Paulo, SP</Text>
                        <Text style={style.smallSubTitle}>Segunda-feira, Jan 01</Text>
                    </View>

                    <Image style={style.previewImage} source={weatherIcon}/>

                    <View style={style.temperatureContainer}>
                        <Text style={[style.smallTitle, {color: collors.orange}]}>Ensolarado</Text>
                        <Text style={style.textTemperature}>30ºC</Text>
                        <Image style={style.nilsinhoImage} source={nilsinho}/>
                    </View>
                </View>


                <View style={style.tablePreview}>

                    <View style={style.tableIten}>
                        <Image style={style.tableIcon} source={rainIcon}/>
                        <Text style={style.tableText}>Chance de Chuva: </Text>
                        <Text style={[style.tableTextSpam, {color: collors.blue}]}>50%</Text>
                    </View>

                    <View style={style.lineTableDetail}/>

                    <View style={style.tableIten}>
                        <Image style={style.tableIcon} source={humidityIcon}/>
                        <Text style={style.tableText}>Umidade do ar: </Text>
                        <Text style={[style.tableTextSpam, {color: collors.blue}]}>Normal</Text>
                    </View>

                    <View style={style.lineTableDetail}/>

                    <View style={style.tableIten}>
                        <Image style={style.tableIcon} source={windIcon}/>
                        <Text style={style.tableText}>Velocidade do vento: </Text>
                        <Text style={[style.tableTextSpam, {color: collors.purple}]}>5m/s</Text>
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
        },
        hamburguerMenu: {
            height: 37,
            width: 50
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
            borderColor: collors.orange

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

            color: collors.orange
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
            width: 30,
            height: 30,
        },
        lineTableDetail: {
            height: 1,
            width: '90%',
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
            width: 200,
            height: 200,

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