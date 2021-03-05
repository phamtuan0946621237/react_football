import { useNavigation } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { newsAction } from '../../../redux/action/news';
import { ListNewsItem } from '../../component';

interface WorldNewsType {
    _source : SourceWorldNewsType
}
interface SourceWorldNewsType {
    imageUrl : string,
    title : string,
    dateUpdated : string,
    source : string,
    shareUri : string,
}
const NewsPage = (props: any) => {
    //variable
    const { newsResponse } = props
    const dispatch = useDispatch()
    const navigation = useNavigation();
    
    // life cycle
    useEffect(() => {
        dispatch(newsAction({
            term : "newstype_world",
            lang : "en",
            startIndex : 0
        }))
    },[])

    //action
    function onClickDetail(url ?: string) {
        if (url) {
            Linking.openURL("https://www.theguardian.com/football/live/2021/mar/03/crystal-palace-v-manchester-united-premier-league-live")
        }
    }

    //layout
    return (
        <ScrollView style={{backgroundColor : 'rgba(124,141,163,0.2)'}}>
            {newsResponse && newsResponse.hits && newsResponse.hits.hits.map((item : WorldNewsType,index : number) => {
                return (
                    <ListNewsItem onClick={() => onClickDetail(item._source.shareUri)} iconSource={"https://images.fotmob.com/image_resources/news/fotmob.png"} icon={item._source.imageUrl} key={index} describle={item._source.title} source={`${item._source.source} - ${item._source.dateUpdated}`} />
                )
            })}
        </ScrollView>
    )
}
const mapStateToProps = (state: any) => {
    return {
        newsResponse : state.news.newsResponse
    };
};

export default connect(mapStateToProps)(memo(NewsPage));