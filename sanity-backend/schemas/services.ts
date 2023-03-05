export default {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [
            {
                type: 'block'
            }
        ]
      }
    ]
}