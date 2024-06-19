import React, {useState} from 'react'
import DisplayVehicle from './DisplayVehicle'

export default function Vehicle() {
    const [vehicles, setVehicles] = useState([
        {
            name:"bike",
            price:"80000",
            model:"pulsar",
            image:"https://bd.gaadicdn.com/processedimages/indian/scout-bobber/source/scout-bobber62eb4a0d92990.jpg?tr=w-375"
        },
        {
            name:"car",
            price:"1000000",
            model:"suzuki",
            image:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx"
        },
        {
            name:"scooty",
            price:"50000",
            model:"vespa",
            image:"https://vespaindia.com/images/Vespa_GTS_hero_900x675_1.webp"
        }
    ])
  return (
    <div>
      <DisplayVehicle myVechicle={vehicles} />
    </div>
  )
}
