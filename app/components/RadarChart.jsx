import React from 'react'
import Radar from 'react-d3-radar'

const RadarChart = (props) => {
  const { self, peer } = props

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
              communication: 4,
              cooperation: 5,
              openness: 3.5,
              organized: 2,
              independent: 4,
            },
          },
          {
            key: 'peer',
            label: 'Peer Evaluation',
            values: {
              communication: 1,
              cooperation: 5,
              openness: 3,
              organized: 2.5,
              independent: 4,
            },
          },
        ],
      }}
    />
  )
}

export default RadarChart
