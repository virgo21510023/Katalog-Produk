import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardUtama: {
        shadowOffset : {width:0, height:2},
        shadowOpacity : 0.5,
        height : 220,
        margin : 10
    },
    containerTitle: {
        height:'15%',
        padding:7
    },
    title: {
        fontSize:18,
        fontWeight:'bold',
        color:'gray'
    },
    containerImage: {
        width:'100%',
        height:'80%',
        overflow:'hidden'
    },
    image: {
        width:'100%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    price: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        margin: 10
    }
});

export default styles;