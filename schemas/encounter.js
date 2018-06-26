import React from 'react'

export default {
  title: 'Encounter',
  name: 'encounter',
  type: 'object',
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        media: (
          <img
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/1055303-200.png"
            style={{backgroundColor: 'white'}}
            alt={`Encounter: ${title}`}
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
      title: 'Description',
      name: 'description',
      type: 'blockContent'
    },
    {
      title: 'Duration',
      name: 'duration',
      type: 'duration'
    }
  ]
}
