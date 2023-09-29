import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const usetimeTableStore = defineStore(
  'user',
  () => {
    // 课表信息
    const timeTableData = ref({})

    const setTable = (val) => {
      timeTableData.value = val
    }

    // 记得 return
    return {
      timeTableData,
      setTable,
    }
  },
  // TODO: 持久化
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          return uni.setStorageSync(key, value)
        },
      },
    },
  },
)
