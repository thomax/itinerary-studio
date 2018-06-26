import React from 'react'

export default {
  title: 'Exploration',
  name: 'exploration',
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
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/769083-200.png"
            style={{backgroundColor: 'white'}}
            alt={`Explore: ${title}`}
            title={`Explore ${title}`}
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
      title: 'Location',
      name: 'location',
      type: 'geopoint'
    },
    {
      title: 'Duration',
      name: 'duration',
      type: 'duration'
    }
  ]
}
