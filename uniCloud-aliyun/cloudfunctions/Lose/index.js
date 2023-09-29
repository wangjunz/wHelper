/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict'
// eslint-disable-next-line no-undef
const db = uniCloud.database()

exports.main = async (event, context) => {
  // 获取 `EncourWord` 集合的引用,EncourWord为数据库名称
  const collection = await db.collection('Lose').get()
  const randomIndex = Math.floor(Math.random() * collection.data.length)
  return collection.data[randomIndex]
  // return collection
}