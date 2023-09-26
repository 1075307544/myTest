function Mvvm(options = {}) {
  this.$options = options;
  let data = (this._data = options.data);
  // 数据劫持
  observe(data);
  // 数据代理
  for (let key in data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      get() {
        
        return this._data[key];
      },
      set(newVal) {
        this._data[key] = newVal;
      },
    });
  }
  new Compile(options.el, this);
}
function Observe(data) {
  for (let key in data) {
    let val = data[key];
    let dep = new Dep();
    observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      get() {
        Dep.target && dep.addSubs(Dep.target);
        return val;
      },
      set(newVal) {
        val = newVal;
        observe(newVal);
        dep.notify();
      },
    });
  }
}
function observe(data) {
  if (typeof data !== "object") {
    return;
  }
  return new Observe(data);
}
// 编译
function Compile(el, vm) {
  vm.$el = document.querySelector(el);
  let fragment = document.createDocumentFragment();
  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child);
  }
  replace(fragment);
  function replace(fragment) {
    Array.from(fragment.childNodes).forEach((node) => {
      let text = node.textContent;
      let reg = /\{\{(.*)\}\}/;
      if (node.nodeType === 3 && reg.test(text)) {
        console.log(RegExp.$1);
        let arr = RegExp.$1.split(".");
        let val = vm;
        arr.forEach((key) => {
          val = val[key];
        });
        new Watcher(vm, RegExp.$1, (newVal) => {
          node.textContent = text.replace(reg, newVal);
        });
        node.textContent = text.replace(reg, val);
      }
      if (node.childNodes) {
        replace(node);
      }
    });
  }
  vm.$el.appendChild(fragment);
}
// 发布订阅
function Dep() {
  this.subs = [];
}
Dep.prototype.addSubs = function (watcher) {
  this.subs.push(watcher);
};
Dep.prototype.notify = function () {
  this.subs.forEach((item) => item.update());
};

function Watcher(vm, exp, fn) {
  this.fn = fn;
  this.vm = vm;
  this.exp = exp;
  Dep.target = this;
  let arr = exp.split(".");
  let val = vm;
  arr.forEach((key) => {
    val = val[key];
  });
  Dep.target = null;
}
Watcher.prototype.update = function () {
  let arr = this.exp.split(".");
  let val = this.vm;
  arr.forEach((key) => {
    val = val[key];
  });
  this.fn(val);
};
