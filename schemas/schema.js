import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import duration from './duration'
import exploration from './exploration'
import sleep from './sleep'
import journey from './journey'
import trip from './trip'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    duration,
    exploration,
    sleep,
    journey,
    trip
  ])
})
