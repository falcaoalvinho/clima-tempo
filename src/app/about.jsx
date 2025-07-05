import { Image, StyleSheet, Text, View } from "react-native";

import appIcon from "../../assets/images/icons/AppIcon.png";
import nilsinho from "../../assets/images/nilsinho/Standard.png";

export function AboutPage(){
    return(
        <View style={styles.container}>
            <View style={styles.topContent}>
                <View style={styles.header}>
                    <Image style={styles.headerIcon} source={appIcon} />
                </View>

                <View style={styles.nilsinhoContainer}>
                    <Text style={styles.subTitleText}>Nilsinho</Text>
                    <Text style={styles.nodeText}>O mascote do projeto</Text>
                </View>
            </View>

            <Image source={nilsinho} style={styles.nilsinhoImage}/>
            <View style={styles.aboutTextContainer}>

                <Text style={styles.titleText}>Sobre o Projeto</Text>
                
                <Text style={styles.aboutText}>
                    O projeto <Text style={styles.aboutTextSpam}>ClimaTempo</Text>, surgiu de uma atividade do curso técnico de desenvolvimento de sistemas ofertado pelo <Text style={styles.aboutTextSpam}>SENAI</Text>.
                    O objetivo da atividade, prototipar e programar uma interface mobile temática usando <Text style={styles.aboutTextSpam}>React-Native</Text> que fosse capaz de consumir a <Text style={styles.aboutTextSpam}>API Openweather</Text>e disponibilizar dados sobre diferentes locais através de interações com o usuário.
                    Na época, escolhemos como tema a relação da atual situação climática com a crise ambiental, deste contexto e de uma brincadeira entre os membros do grupo surgiu o <Text style={styles.aboutTextSpam}>Nilsinho</Text>, que para além de buscar desenvolver essa relação, propõe uma identidade visual para o projeto fortemente inspirada outros aplicativos como o <Text style={styles.aboutTextSpam}>Duolingo</Text>.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        
        gap: 20,

        backgroundColor: '#171717',
    },
    topContent: {
        width: '100%',
        gap: 60,
        padding: 30,
    },
    header: {
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIcon: {
        width: 75,
        height: 75,
    },
    nilsinhoImage: {
        width: 330,
        height: 345,

        position: 'absolute',
        left: 165,
        top: -25
    },
    nilsinhoContainer: {
        gap: 5,

        width: '100%',

        alignItems: 'left',
        justifyContent: 'flex-start'
    },
    subTitleText: {
        color: '#5ECA75',
        fontWeight: 700,
        fontSize: 32,
    },
    nodeText: {
        color: '#989898',
        fontWeight: 400,
        fontSize: 14
    },
    aboutTextContainer: {
        flex: 2,

        padding: 15,
        gap: 10,
        
        borderTopWidth: 3,
        borderColor: '#989898',

        backgroundColor: '#212121'
    },
    titleText: {
        color: '#5ECA75',

        fontSize: 38,
        fontWeight: 700
    },
    aboutText: {
        fontWeight: 400,
        fontSize: 18,
    
        color: '#FFF'
    },
    aboutTextSpam: {
        fontWeight: 400,
        fontSize: 18,
    
        color: '#5ECA75'
    }
})