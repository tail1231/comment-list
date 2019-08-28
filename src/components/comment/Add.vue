<template>
    <div class="form-group box">
        <div class="form-gourp">
            <!-- 评论人区域 -->
            <label for="user">评论人：</label>
            <input type="text" class="form-control" id="user" v-model="user" />
            <!-- 评论内容区域 -->
            <label for="content">评论内容：</label>
            <textarea id="content" class="form-control" v-model="content"></textarea>
            <!-- 提交评论按钮 -->
            <input type="button" class="btn btn-primary" value="发表评论" @click="update" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: "",
            content: ""
        };
    },
    methods: {
        update() {
            let obj = {
                id: Date.now(),
                user: this.user === "" ? "匿名用户" : this.user,
                content:
                    this.content === ""
                        ? "此用户很懒，什么都不愿意留下"
                        : this.content
            };
            this.$store.commit("postComment", {
                a: obj,
                b: this.user,
                c: this.content
            });
            this.user = "";
            this.content = "";
        }
    },
    props: ["parentmsg"]
};
</script>

<style lang="scss" scoped>
.box {
    .btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
        margin-top: 20px;
    }
    label {
        margin-top: 20px;
    }
}
</style>