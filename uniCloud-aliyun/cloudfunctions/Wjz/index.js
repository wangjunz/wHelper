/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict'
const db = uniCloud.database()

exports.main = async (event, context) => {
  // 获取 `wjz` 集合的引用,wjz为数据库名称
  const collection = await db.collection('Wjz').where({ studentId: 123 }).get()
  return collection
}
