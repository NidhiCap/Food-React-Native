import {View, Text, StyleSheet} from 'react-native';

function Subtitle({children}){
    return (
        <View style={styles.subtitleContaiber}>
            <Text style={styles.subtitle}>{children}</Text>
        </View> 
    );
}

export default Subtitle;

const styles=StyleSheet.create({
    subtitleContaiber:{
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});