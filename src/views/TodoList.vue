<template>
  <div class="about pa-6 h1">
    <todo id="todolist"></todo>
  </div>
</template>

<script>
import Todo from "../components/Todo.vue";
import "../css/todo.css";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
};
</script>