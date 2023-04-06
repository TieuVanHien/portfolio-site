export default {
    name: 'logo',
    title: 'Logo',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          hotspot: true,
        },
      },
      
    ],
  }