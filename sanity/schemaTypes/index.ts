import { type SchemaTypeDefinition } from 'sanity'

import {eventType} from './eventType'
import {programType} from './programType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType, eventType],
}
