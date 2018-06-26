export default {
  title: 'Journey',
  name: 'journey',
  type: 'document',
  fields: [
    {
      title: 'Parts',
      name: 'parts',
      type: 'array',
      of: [{type: 'trip'}, {type: 'sleep'}, {type: 'exploration'}]
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        auto: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage'
    }
  }
}
