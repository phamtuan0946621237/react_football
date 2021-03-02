// import  React ,{useEffect, useState} from 'react';


// method : GET no Token
export const fetchGet = (url : String, params : any) => {
  // let headers = {
  //   Authentication: `Bearer ${token}`,
  // }
  const parseUrl = (obj : any) => {
      let queryString = Object.keys(obj).map(item => (
        item + '=' + obj[item]
      )).join('&')
      return queryString;
    }
  const data = ''

    return new Promise((resolve, reject) => {
      fetch(!params || params === undefined ? `${url}` : `${url}?${parseUrl(params)}`)
          .then(response => response.json())
          .then(res=>{
            resolve(res)
          })
    })      
}

export async function POST(url : string,parram : any) {
  let result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(parram)
  })
  return result.json()
}