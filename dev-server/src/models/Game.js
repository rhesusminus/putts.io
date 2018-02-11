import { Model } from 'objection';

export default class Game extends Model {
  static tableName = 'Game';

  static jsonSchema = {
    type: 'object',
    required: ['title'],

    properties: {
      id: { type: 'integer' },
      title: { type: 'string', minLength: 1, maxLength: 60 },
      description: { type: 'string', minLength: 1, maxLength: 255 }
    }
  }
};
