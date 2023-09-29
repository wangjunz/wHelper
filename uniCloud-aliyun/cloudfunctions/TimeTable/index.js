/* eslint-disable no-undef */
'use strict'
// eslint-disable-next-line no-undef
const db = uniCloud.database()

// eslint-disable-next-line no-unused-vars
exports.main = async (event, context) => {
  // 获取 `wjz` 集合的引用,wjz为数据库名称
  let { week } = event
  const collection = await db.collection('TimeTable').where({ week: week }).get()
  return collection
}
