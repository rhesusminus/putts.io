const Model = require('objection').Model

export default class User extends Model {
  static get tableName() {
    return 'User'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 30 },
        displayName: { type: 'string', minLength: 1, maxLength: 25 },
        email: { type: 'string' },
        image: { type: 'string' }
      }
    }
  }
}
