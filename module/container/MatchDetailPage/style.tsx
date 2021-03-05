import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    infoMatch : {
        flexDirection : 'row',
        paddingVertical : 16,
        backgroundColor : 'white',
        borderBottomWidth : 1,
        borderTopWidth : 1,
        borderColor : 'rgba(124,141,163,0.3)'
    },
    infoTeam : {
        flexDirection : 'column',
        flex : 2,
        alignItems : 'center'
    },
    result : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    titleResult : {
        fontSize : 24,
        fontWeight : 'bold'
    },
    titleNameClub : {
        marginTop : 8,
        fontWeight : "500",
        fontSize : 16,
        textAlign : 'center'
    }
  
});
