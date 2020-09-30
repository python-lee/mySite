<template>
    <div class="articlePublish">
        <el-form ref="form" :model="form">
            <el-form-item label="标题" :label-width="labelWidth">
                <div class="inputDiv">
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="简介" :label-width="labelWidth">
                <div class="inputDiv">
                    <el-input v-model="form.briefIntroduction" placeholder="请输入简介"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="标签" :label-width="labelWidth">
                <div class="inputDiv">
                    <el-input v-model="form.label" placeholder="请输入标签"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="文章地址" :label-width="labelWidth">
                <div class="inputDiv">
                    <el-input v-model="form.articleHref" placeholder="请输入文章地址"></el-input>
                </div>
            </el-form-item>
            <el-form-item :label-width="labelWidth">
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data () {
        return  {
            labelWidth: '80px',
            form: {
                title: '',
                briefIntroduction: '',
                label: '',
                articleHref: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.form)
        }
    }
}
</script>

<style lang="stylus" scoped>
.inputDiv {
    width: 300px;
}
</style>