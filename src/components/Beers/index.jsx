import { useState, useEffect } from "react"

export default function Beers() {
  const [beerList, setBeerList] = useState()
  const [beerType, setBeerType] = useState("ale")
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${beerType}`) //ale, stouts, red-ale
      .then(response => response.json())
      .then(beers => setBeerList(beers))
      .catch(alert)
  }, [beerType])
  if (!beerList) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <button onClick={() => setBeerType("ale")}>Ale</button>
      <button onClick={() => setBeerType("stouts")}>Stouts</button>
      <ul>
        {beerList.map(beer => {
          <li key={beer.id}>{beer.name}</li>
        })}
      </ul>
    </>
  )
}
