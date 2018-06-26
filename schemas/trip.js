import React from 'react'
const modes = {
  plane: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051900-200.png',
  train: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051908-200.png',
  bus: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051901-200.png',
  car: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051905-200.png',
  bicycle: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051899-200.png',
  foot: 'https://d30y9cdsu7xlg0.cloudfront.net/png/35091-200.png',
  boat: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051902-200.png',
  motorcycle: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1051910-200.png'
}

export default {
  title: 'Trip',
  name: 'trip',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      mode: 'mode',
      subtitle: 'subtitle'
    },
    prepare(selection) {
      const {title, subtitle, mode} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: (
          <img
            src={modes[mode]}
            style={{backgroundColor: 'white'}}
            alt={`Trip to ${title} by ${mode}`}
            title={`Trip to ${title} by ${mode}`}
          />
        )
      }
    }
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Name the destination of this trip'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Mode',
      name: 'mode',
      type: 'string',
      options: {
        list: Object.keys(modes)
      }
    },
    {
      title: 'Duration',
      name: 'duration',
      type: 'duration'
    },
    {
      title: 'Start Location',
      name: 'startLocation',
      type: 'geopoint'
    },
    {
      title: 'End Location',
      name: 'endLocation',
      type: 'geopoint'
    }
  ]
}
