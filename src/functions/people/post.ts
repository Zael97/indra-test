import 'source-map-support/register'

import { v4 as uuid } from 'uuid'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import dynamodb from '@libs/dynamodb'

import schema from './schema'

const create: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async event => {
  console.log('Bodyyyyyy ==========================>',event);
  let response = null

  let isBadRequest = (event.body ? Object.values(event.body) : []).length === 0
  console.log('==========================>',isBadRequest);
  try {
    if (isBadRequest) {
      throw new Error('Campos incorrectos')
    }

    const now = new Date().toISOString()

    const id: string = uuid()
    const requestBody: any = JSON.stringify(event.body);
    await dynamodb
      .put({
        TableName: process.env.PEOPLE_TABLE,
        Item: {
          id,
          ...requestBody,
          fecha_creacion: now,
          fecha_edicion: now,
        },
      })
      .promise()

    response = { id }
  } catch (error) {
    response = {
      error: error.message,
    }
  } finally {
    return formatJSONResponse(response, isBadRequest ? 400 : void 0)
  }
}

export const handler = middyfy(create)
