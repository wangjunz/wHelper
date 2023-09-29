'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {

  const collection =await db.collection('TimeTable').get();
  return collection;
};