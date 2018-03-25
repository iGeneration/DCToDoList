<template>
  <div id="app">
  <h1 v-text="title" class="title"></h1>

  <input v-model="newIterm" v-on:keyup.enter="addNew" class="TTin" placeholder="add a new to do thing">
  <span v-text="donum"></span>

  <ul>
  <li v-for="iterm in iterms" v-bind:class="{finished:iterm.isFinished,finishedli:iterm.isFinished}" v-on:click="toggleFinish(iterm)">
  <input type="checkbox"  v-model="iterm.isFinished"/>
  {{iterm.label}}
  <div class="deleteIcon" v-on:click="DeleteOne(iterm)">-</div> 
  </li>
  </ul>
   <em v-text="emInfo"></em>
  </div>
</template>

<script>
import Store from "./store.js";
import store from './store.js';

export default {
  data: function() {
    return {
      title: "今日事今日毕",
      iterms: Store.fetch(),
      newIterm: '',
      donum: Store.GetItermsNo(),
      emInfo:'@IT  Crystal'
    }
   },
  watch: {
    iterms: {
      handler: function(iterms) {
        //console.log(val,oldVal)
        Store.save(iterms);
        this.donum = Store.GetItermsNo();
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function(iterm) {
      iterm.isFinished = !iterm.isFinished;
      //console.log(iterm.isFinished)
    },
    addNew: function() {
      //console.log(this.newIterm)
      this.iterms.push({
        label : this.newIterm,
        isFinished: false
      });
      this.newIterm = "";
    },
    DeleteOne:function(iterm){
      this.iterms=Store.Deleteli(iterm);
    }
  }
};
</script>

<style>
#app{
  text-align: center;
}
.finished {
  text-decoration: line-through;
}
ul li {
  line-height: 32px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
  padding: 0 45px;
  border-radius: 3px;
  border-left: 8px solid #629a9c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}
ul {
  padding: 0;
  list-style: none;
}
li input {
  position: absolute;
  top: 2px;
  left: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
.TTin {
  width: 60%;
  height: 34px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
    0 1px 6px rgba(0, 0, 0, 0.45) inset;
  border: none;
  padding-left: 20px;
}
.title {
  line-height: 50px;
  color: #023805;
}
.deleteIcon {
  position: absolute;
  top: 2px;
  right: 5px;
  /* display: inline-block; */
  width: 14px;
  height: 12px;
  /* border-radius: 14px; */
  border: 6px double #fff;
  background: #ccc;
  line-height: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}
span {
  position: absolute;
  right: 4%;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #eca2a2;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.finishedli{
  border-left: 5px solid #999;
    opacity: 0.5;
}
em{
    color: #666;
    font-size: 14px;
    text-align: center;
}
</style>
