export interface NewsType {
    imageUrl: string,
    lead: string,
    page: { url: string },
    sourceIconUrl: string,
    sourceStr: string,
    title: string
}

export interface TableClubComponentType {
    tableHeader : Array<string>,
    tableData : Array<ListTableItemType>,
    otherLeague ?: Array<OtherLeagueType>,
    mainLeagueName ?: string,
    otherLeagueName ?: string,
    onClickClub : (id : string,name : string) => void
    type?: string
  }
  export interface RouteClubType {
    idTeam: string,
    nameClub: string
}
 export interface OtherLeagueType {
    leagueId: number,
    leagueName: string,
    table: Array<ListTableItemType>
  }

  export interface ListTableItemType {
    isShowIcon ?: boolean,
    name : string,
    played : number | string,
    wins : number | string,
    draws : number | string,
    losses : number | string,
    goalConDiff : number | string,
    pts : number | string,
    id ?: number,
    stt ?: number | string,
    key : any,
    pageUrl ?: string,
    onClick ?: () => void
  }

  export interface TransferType {
    contractExtension: boolean,
    fee?: { feeText: string, value: string } | any ,
    fromClub: string,
    fromClubId: number,
    fromDate: string,
    marketValue: string,
    name: string,
    onLoan: string,
    playerId: number,
    position: string,
    toClub: string,
    toClubId: number,
    toDate: string,
    transferDate: string,
    transferText: Array<any>,
    transferType: string
  }

  export interface StatusListMatchesItem {
    cancelled : boolean,
    finished : boolean,
    startDateStr : string,
    startTimeStr : string,
    started : boolean,
    whoLostOnAggregated : string,
    scoreStr : string,
    reason : {long : string,short : string}
  }

  export interface MatchesItemType {
      away : {name : string,shortName : string,id : string},
      home : {name : string,shortName : string,id : string},
      id ?: string,
      monthKey ?: string,
      pageUrl ?: string,
      round ?: number,
      roundName ?: number,
      status ?: StatusListMatchesItem
  }
  
