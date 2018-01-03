export const personSchema = {
  'title': 'simpleColumn',
  'type': 'object',
  'properties': {
    'firstName': {
      'type': 'string'
    },
    'lastName': {
      'type': 'string'
    },
    'age': {
      'description': 'Age in years',
      'type': 'number',
      'minimum': 0
    }
  },
  'required': [
    'firstName',
    'lastName'
  ]
};
