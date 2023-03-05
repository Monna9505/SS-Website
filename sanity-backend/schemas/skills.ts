export default {
    name: 'skills',
    type: 'document',
    title: 'Skills',
    fields: [
      {
        name: 'name',
        type: 'array',
        title: 'Skills',
        of: [{
            name: 'skill',
            type: 'string',
            title: 'Skill'
        }]
      }
    ]
}