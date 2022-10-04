import React from 'react'
import './description.css'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import { BiHappy } from 'react-icons/bi'
function Description({ weather, units }) {
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h'
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: ' min',
      data: weather.temp.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: ' max',
      data: weather.temp.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: ' feels like',
      data: weather.temp.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: ' pressure',
      data: weather.temp.toFixed(),
      unit: 'hPa',
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: ' humidity',
      data: weather.temp.toFixed(),
      unit: '%',
    },
    {
      id: 6,
      icon: <FaWind />,
      title: ' wind speed',
      data: weather.temp.toFixed(),
      unit: windUnit,
    }
  ]

  return (
    <div className='section section__description'>
      {
        cards.map(({ id, icon, title, data, unit }) => {
          return (
            <div className='card' key={id}>
              <div className='description__card-icon'>
                 {icon}
                <small>{title}</small>
              </div>
              <h2>{`${data}, ${unit}`}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default Description















