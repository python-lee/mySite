<template>
  <div class="articleAdminBox">
    <el-table :data="tableData" border>
      <el-table-column v-for="(item, index) in tableHeadList"  
                       :key="index" 
                       :prop="item.prop" 
                       :align="item.align"
                       :label="item.title">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeadList: [
        {
          title: '标题',
          align: 'center'
        },
        {
          title: '简介',
          align: 'center'
        },
        {
          title: '标签',
          align: 'center'
        },
        {
          title: '创建时间',
          align: 'center'
        },
        {
          title: '更新时间',
          align: 'center'
        },
        {
          title: '状态',
          align: 'center'
        },
        {
          title: '操作',
          align: 'center'
        }
      ]
    };
  }
};
</script>

<style scoped>
.articleAdminBox {
  box-sizing: border-box;
  margin: 50px;
  border: 1px solid #ebebeb;
}
</style>