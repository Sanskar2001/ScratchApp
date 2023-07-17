import { View,Text,StyleSheet } from "react-native"

export default  InfoCard=(props)=>{

        return(
            <View style={styles.container}>
            
            <View style={styles.infoBox}>
            <Text>Sprit</Text>
            <Text style={styles.statsBox}>Cat</Text>
            </View>

            <View style={styles.infoBox}>
            <Text>X</Text>
            <Text style={styles.statsBox}>{props.x}</Text>
            </View>

            <View style={styles.infoBox}>
            <Text>Y</Text>
            <Text style={styles.statsBox}>{props.y}</Text>
            </View>

            </View>
        )
}
const styles=StyleSheet.create({
    
    container:{

        justifyContent:"space-around",
        flexDirection:"row",
         backgroundColor:"blue",
         width:"100%",
         height:"10%",
        
         
    },

    infoBox:{
        flexDirection:"row",
         justifyContent:"space-around",
         alignItems:"center"
     
    },
    statsBox:{

        marginStart:5,
        borderRadius:10,
        backgroundColor:"red",
        width:40,
        height:30,
        flexDirection:"row",
        padding:5
       
    }

})