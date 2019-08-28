<template>
    <div id="app">
        <add></add>
        <list></list>
    </div>
</template>

<script>
//引入Add组件
import Add from "./components/comment/Add.vue";
import list from "./components/comment/list.vue";

export default {
    data() {
        return {}
    },
    methods: {
    },
    components: {
        add: Add,
        list
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.list-group {
    .list-group-item:hover {
        background-color: skyblue;
    }
}
</style>
