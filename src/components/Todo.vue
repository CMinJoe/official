<template>
  <div>
    <h1>代辦事項 <span>練習架構</span></h1>
    <template v-if="todo.length">
      <transition-group name="todolist" tag="ul">
        <li
          v-for="item in todoBystatus"
          :class="item.done ? 'done' : ''"
          :key="item.id"
        >
          <span class="label">{{ item.label }}</span>
          <div class="actions">
            <button class="btn-picto" @click="markAsDoneOrUndone(item)">
              <i aria-hidden="true" class="material-icons">{{
                item.done ? "check_box" : "check_box_outline_blank"
              }}</i>
            </button>
            <button class="btn-picto" @click="deleteItemFromList(item)">
              <i aria-hidden="true" class="material-icons">delete</i>
            </button>
          </div>
        </li>
      </transition-group>
      <togglebutton
        label="是否排序"
        name="todosort"
        @clicked="clickToogle"
      ></togglebutton>
      <toggle2 label="全選" name="selecAll" @select="clickSelectAll" />
    </template>
    <p v-else class="emptylist">沒有代辦事項</p>

    <form name="newform" @submit.prevent="Additem">
      <label for="newitem">新增代辦事項</label>
      <input type="text" name="newitem" id="newitem" v-model="newitem" />
      <button type="submit">加入</button>
    </form>
  </div>
</template>

<script>
import togglebutton from "./togglebutton.vue";
import toggle2 from "./toggle2.vue";

export default {
  name: "Todo",
  components: {
    togglebutton,
    toggle2,
  },
  data(){
      return{
    newitem: "",
    sortBystatus: false,
    todo: [
      { id: 1, label: "TEST", done: false },
      { id: 2, label: "TEST2", done: true },
      { id: 3, label: "TEST3", done: false },
    ],
    }
  },
  methods: {
    Additem: function() {
      if (this.newitem == "") {
        swal("請輸入文字", "輸入值不得為空", "error", { button: "OK!" });
      } else {
        this.todo.push({
          id: Math.floor(Math.random() * 9999) + 10,
          label: this.newitem,
          done: false,
        });
        this.newitem = "";
      }
    },
    markAsDoneOrUndone: function(item) {
      item.done = !item.done;
    },
    deleteItemFromList: function(item) {
      let index = this.todo.indexOf(item);
      this.todo.splice(index, 1);
    },
    clickToogle: function(active) {
      this.sortBystatus = active;
    },
    clickSelectAll: function(abc) {
      this.todo.forEach((element) => {
        element.done = abc;
      });
    },
  },
  computed: {
    todoBystatus: function() {
      if (!this.sortBystatus) {
        return this.todo;
      }

      var sortedArray = [];
      var notDoneArray = this.todo.filter(function(item) {
        return !item.done;
      });
      var doneArray = this.todo.filter(function(item) {
        return item.done;
      });

      sortedArray = [...notDoneArray, ...doneArray];
      return sortedArray;
    },
  },
};
</script>

<style scoped>
span{
    font-size: 20px;
}

button{
    font-size: 20px;
    height: 2em;
    box-shadow: none;
    padding: 0 1em;
}
</style>