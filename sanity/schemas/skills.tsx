export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'skillimage',
        title: 'SkillImage',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
    ],
  }