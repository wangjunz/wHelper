'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
  // 获取 `wjz` 集合的引用,wjz为数据库名称
  const collection =await db.collection('Credentials').get();
  return collection;
};
