import "./beercard.css"

export default function BeerCard({ beer }) {
  return (
    <div className="beerCard">
      <img src={beer.image} alt="" />

      <h2>{beer.name}</h2>
      <p>{beer.price}</p>
    </div>
  )
}
