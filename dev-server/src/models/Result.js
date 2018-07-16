const Model = require('objection').Model

export default class Result extends Model {
  static get tableName() {
    return 'Result'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['result'],
      properties: {
        id: { type: 'integer' },
        result: { type: 'number' },
        user: { type: 'integer' }
      }
    }
  }
}
