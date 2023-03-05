export default {
    name: 'Header-Menu',
    type: 'document',
    title: 'Header Menu',
    fields: [{
        name: 'items',
        type: 'array',
        title: 'Menu Items',
            of: [{ 
                name: 'link',
                type: 'object',
                fields: [
                    { 
                        name: 'label', 
                        type: 'string', 
                        title: 'Label' 
                    },
                    { 
                        name: 'url', 
                        type: 'url', 
                        title: 'URL' 
                    }
                ],
                title: 'Link'
            }]
        }
    ]
}