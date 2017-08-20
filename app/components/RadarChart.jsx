import React from 'react'
import Radar from 'react-d3-radar'

const RadarChart = (props) => {
  const peerRatings = props.theWeek.ratings[0].values
  const selfRatings = props.theWeek.ratings[1].values

  return (
    <Radar
      width={500}
      height={500}
      padding={70}
      domainMax={5}
      highlighted={null}
      onHover={(point) => {
        if (point) {
          console.log('hovered over a data point')
        } else {
          console.log('not over anything')
        }
      }}
      data={{
        variables: [
          { key: 'communication', label: 'Communication' },
          { key: 'cooperation', label: 'Cooperation' },
          { key: 'openness', label: 'Open to Ideas' },
          { key: 'organized', label: 'Organization' },
          { key: 'independent', label: 'Independence' },
        ],
        sets: [
          {
            key: 'self',
            label: 'Self Evaluation',
            values: {
              communication: selfRatings[0].y,
              cooperation: selfRatings[1].y,
              openness: selfRatings[2].y,
              organized: selfRatings[3].y,
              independent: selfRatings[4].y,
            },
          },
          {
            key: 'peer',
            label: 'Peer Evaluation',
            values: {
              communication: peerRatings[0].y,
              cooperation: peerRatings[1].y,
              openness: peerRatings[2].y,
              organized: peerRatings[3].y,
              independent: peerRatings[4].y,
            },
          },
        ],
      }}
    />
  )
}

export default RadarChart
