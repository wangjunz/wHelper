/* eslint-disable no-unused-vars */
'use strict'
// eslint-disable-next-line no-undef
const db = uniCloud.database()
// eslint-disable-next-line no-undef
exports.main = async (event, context) => {
  const collection = await db.collection('Consume').get()
  const randomIndex = Math.floor(Math.random() * collection.data.length)
  return collection.data[randomIndex]
}
