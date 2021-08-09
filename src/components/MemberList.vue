<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h1>Vue demo</h1>

      <table class="table table-hover ">
        <br />
        <thead>
          <tr>
            <th>序號</th>
            <th>書名</th>
            <th>作者</th>
            <th>價格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filterBooks" :key="book.id">
            <td>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.price }}</td>

            

            <template v-if="book.id % 2 == 0">
              <td class="text-left">
                <button
                  type="button"
                  class="btn btn-success"
                  @click="delBook(book)"
                >
                  刪除
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  @click="updateBook(book)"
                >
                  修改
                </button>
              </td>
            </template>
            <template v-else>
              <td class="text-left">
                <!-- // 建立點選事件 -->
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="delBook(book)"
                >
                  刪除
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="updateBook(book)"
                >
                  修改
                </button>
              </td>
            </template>
          </tr>
        </tbody>
      </table>

      <!--  新增書籍   -->
      <div id="add-book">
        <!--查詢輸入框-->
        <div class="row" style="margin-bottom: 30px;">
          <div
            class="col-md-4"
            style="text-align: left;font-size: 16px;line-height: 30px;"
          >
            請輸入查詢書名：
          </div>
          <div class="col-md-5" style="text-align: left;">
            <!-- // v-model
            ：在表單控制元件元素上建立雙向資料繫結 -->
            <input type="text" class="form-control" v-model="search" />
          </div>
        </div>

        <h3>新增書籍</h3>
        <hr />
        <div class="form-group">
          <label for="group">書名</label>
          <input
            type="text"
            class="form-control"
            id="group"
            v-model="book.name"
          />
        </div>
        <div class="form-group">
          <label for="author">作者</label>
          <input
            type="text"
            class="form-control"
            id="author"
            v-model="book.author"
          />
        </div>
        <div class="form-group">
          <label for="price">價格</label>
          <input
            type="text"
            class="form-control"
            id="price"
            v-model="book.price"
          />
        </div>
        <button class="btn btn-primary btn-block" v-on:click="addBook()">
          新增
        </button>
      </div>

      <!--  修改書籍   -->
      <div id="update-book">
        <h3>修改書籍</h3>
        <hr />
        <div class="form-group">
          <label for="group1">書名</label>
          <input
            type="text"
            class="form-control"
            id="group1"
            v-model="book.name"
          />
        </div>
        <div class="form-group">
          <label for="author1">作者</label>
          <input
            type="text"
            class="form-control"
            id="author1"
            v-model="book.author"
          />
        </div>
        <div class="form-group">
          <label for="price1">價格</label>
          <input
            type="text"
            class="form-control"
            id="price1"
            v-model="book.price"
          />
        </div>
        <button class="btn btn-primary btn-block" v-on:click="updatedBook()">
          完成
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

var id = 0;
export default {
  name: "MemberList",
  data() {
    return {
      book: [
        {
          id: 0,
          author: "",
          name: "",
          price: "",
        },
      ],

      books: [
        {
          id: 1,
          author: "曹雪芹",
          name: "紅樓夢",
          price: 36.0,
        },
        {
          id: 2,
          author: "曹雪芹",
          name: "三國演義",
          price: 37.0,
        },
        {
          id: 3,
          author: "曹雪芹",
          name: "Good boy",
          price: 85.0,
        },
        {
          id: 4,
          author: "曹雪芹",
          name: "紅樓夢",
          price: 39.0,
        },
      ],

      search: "", // 查詢功能使用，【注意】""中不能加空格，否則直接預設查詢空格
    };
  },
  methods: {


    addBook: function() {
      this.book.id = this.books.length + 1;
      this.books.push(this.book);
      this.book = {};
    },

    delBook: function(book) {
      var blength = this.books.length;
      this.books.splice(book.id - 1, 1);

      for (var i = 0; i < blength; i++) {
        if (book.id < this.books[i].id) {
          this.books[i].id -= 1;
        }
      }
    },

    // 修改按鈕
    updateBook: function(book) {
      $("#add-book").css("display", "none");
      $("#update-book").css("display", "block");
      id = book.id;
    },

    // 修改完成後的 確認按鈕點選事件
    updatedBook: function() {
      this.book.id = id;
      this.books.splice(id - 1, 1, this.book);
      $("#add-book").css("display", "block");
      $("#update-book").css("display", "none");
      this.book = {};
    },
    getdatabase:function() {
      this.$axios.get("/api/Stu/showStu").then((res) => {
        console.log("res", res);
      });
    },
  },

  computed: {
    filterBooks: function() {
      var books = this.books;
      var search = this.search;
      return books.filter(function(book) {
        return (
          book.name.toLowerCase().indexOf(search.toLocaleLowerCase()) != -1
        );
      });
    },
  },
  mounted(){
    this.getdatabase();
  }
};

</script>

<style scoped>

#update-book {
  display: none;
}

</style>