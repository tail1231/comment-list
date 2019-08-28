<template>
    <div class="form-group">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item,i) in list" :key="item.id+i" @click="del(i)">
                <span class="badge">评论人：{{item.user}}</span>
                {{item.content}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:this.$store.getters.read
        };
    },
    methods: {
        del(i) {
            this.list.splice(i, 1);
        }
    }
};
</script>

<style>
</style>