import React from 'react'

export default {
  title: 'Sleep',
  name: 'sleep',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: (
          <img
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/1291109-200.png"
            style={{backgroundColor: 'white'}}
            alt={`Sleep: ${title}`}
            title={`Sleep at ${title}`}
          />
        )
      }
    }
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent'
    },
    {
      title: 'Duration',
      name: 'duration',
      type: 'duration'
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint'
    }
  ]
}
