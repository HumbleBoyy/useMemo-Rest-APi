import React, { useEffect, useState } from "react"

export const useFetch = (api) => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch(api).then(res => res.json()).then(data => {
          setData(data)
       }) 
      },[])

      return data
}