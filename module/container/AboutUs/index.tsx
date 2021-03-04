import { useNavigation } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import { Image,ScrollView, Text, TouchableOpacity, View, Dimensions ,TextInput} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { LeagueNavigator } from '../../../navigation';
import { leagueAction } from '../../../redux/action/league';
import style from './style';

interface InfoFounderType {
    name: string,
    position: string,
    mail: string
}
const AboutUsPage = (props: any) => {
    //variable
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const info: Array<InfoFounderType> = [
        { name: "Christer Nordvik", position: "CEO", mail: "christer@fotmob.com" },
        { name: "Tommy Nordvik", position: "CTO", mail: "tommy@fotmob.com" },
        { name: "Linda Nordvik", position: "Administrative Manager", mail: "linda@fotmob.com" },
        { name: "Roy Solberg", position: "Tech Lead Android", mail: "roy@fotmob.com" },
        { name: "Tommy Nilsen", position: "Android Developer", mail: "tni@fotmob.com" },
        { name: "Curt Baker", position: "Brand & Partnerships", mail: "curt@fotmob.com" },
        { name: "Konstantin Loginov", position: "Tech Lead iOS", mail: "konstantin@fotmob.com" },
        { name: "Kristian Rykkje", position: "Junior Web Developer", mail: "kristian@fotmob.com" },
        { name: "Mathias Breistein", position: "iOS Developer", mail: "mathias@fotmob.com" },
        { name: "Manuel Navarro", position: "UI/UX Design Lead", mail: "manuel@fotmob.com" },
        { name: "Bill Biss", position: "Social Media & Support", mail: "bill@fotmob.com" },
        { name: "Joachim Morken", position: "Web Developer", mail: "joachim@fotmob.com" },
        { name: "Ask Berstad", position: "Web Developer", mail: "ask@fotmob.com" },
        { name: "Daniel Lundekvam", position: "Tech Lead Web", mail: "daniel@fotmob.com" },
        { name: "Øystein Bjerland", position: "Full Stack Developer", mail: "oystein@fotmob.com" },
    ]
    //layout
    return (
        <ScrollView >
            <View style={{paddingHorizontal  :16,backgroundColor : 'rgba(255,145,173,1)'}}>
            <Image style={{ backgroundColor : 'rgba(255,145,173,1)',width: Dimensions.get("window").width - 32, height: 200,resizeMode : 'contain' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png' }} />
            </View>
            <ScrollView>
                <View style={style.container}>
                    <Text style={style.title}>THE PULSE OF FOOTBALL </Text>
                    <Text style={style.note}>FotMob is the essential app for your matchday experience.</Text>
                    <Text style={style.describle}>Get live scores, notifications for every goal, official highlights, detailed stats, and personalised news for hundreds of leagues and cups around the world.</Text>
                    <Text style={style.title}> A SMALL, BUT MIGHTY TEAM  </Text>
                    <Text style={style.describle}>FotMob is built by a nimble, independent team in the fjords of Bergen, Norway.</Text>
                    <Text style={style.describle}>We created FotMob 15 years ago as a way to follow our local club from anywhere. That mission still drives us today, as FotMob has grown into a platform that helps over five million people follow their team each week.</Text>
                    <Text style={style.describle}>FotMob has been recognised by Apple, Google, and the New York Times as a leading sports app, and we continue to work every day to create a beautiful, easy-to-use tool for keeping up with the world of football.</Text>

                    {info.map((item: InfoFounderType, index: number) => {
                        return (
                            <View key={index} style={style.info}>
                                <Text style={{ fontSize: 15 }}>{item.name}</Text>
                                <Text style={{ fontSize: 12, color: '#00985f', marginTop: 6 }}>{item.position}</Text>
                                <Text style={{ fontSize: 11, color: '#989898', marginTop: 30 }}>{item.mail}</Text>
                            </View>
                        )
                    })}
                    {/* office */}
                    <View>
                        <Text style={[style.title, { marginTop: 30 }]}>Contact us </Text>
                        <Text style={[style.note, { marginTop: 30 }]}>Office</Text>
                        <Text style={[style.describle, { marginTop: 16 }]}>Kokstadvegen 23</Text>
                        <Text style={[style.describle, { marginTop: 3 }]}>5257 Kokstad</Text>
                        <Text style={[style.describle, { marginTop: 3 }]}>Norway</Text>
                    </View>

                    {/*send mail*/}

                    <TextInput placeholder = "Name" style={{height : 50,borderWidth : 1,paddingHorizontal : 16,borderColor : 'rgba(255,145,173,0.5)',borderRadius : 12,marginTop : 16}}/>
                    <TextInput placeholder = "Email" style={{height : 50,borderWidth : 1,paddingHorizontal : 16,borderColor : 'rgba(255,145,173,0.5)',borderRadius : 12,marginTop : 16}}/>
                    <TextInput placeholder = "Message" style={{height : 50,borderWidth : 1,paddingHorizontal : 16,borderColor : 'rgba(255,145,173,0.5)',borderRadius : 12,marginTop : 16}}/>
                    <TouchableOpacity style={{flexDirection : 'row',borderRadius : 6,backgroundColor : '#00985f',paddingVertical : 16,justifyContent : 'center',marginVertical : 16}}>
                        <Text style={{color : 'white',fontWeight : 'bold'}}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        // leagueResponse: state.league.leagueResponse
        // macthResponse: state.match.matchResponse
    };
};

export default connect(mapStateToProps)(memo(AboutUsPage));