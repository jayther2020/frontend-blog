# JSX基础

JSX 的基本语法规则：

> 遇到 HTML 标签（以 `< `开头），就用 HTML 规则解析；
>
> 遇到代码块（以 `{` 开头），就用 JavaScript 规则解析

## 普通元素

```jsx
const el = <h1>Read Me!</h1>
```

## 渲染多个元素

必须有一个包围，可以用`<></>`来包围（`<></>`不用于直接渲染）

```jsx
<>
  <p>I'm a robot.</p>
  <p>I'm not a robot.</p>
  <p>I'm a cookie robot.</p>
</>
```

## 表达式

```jsx
let content = "Hello React!"
const el1 = <h1>{content}</h1>
const el2 = <p>{3+4}</p>
const el3 = <h1>{content} This is my first journey!</h1>
```

其中`el3`等价于：

```jsx
<h1>{`${content} This is my first journey!`}</h1>
```

## 属性

> 分为固定属性和可变属性
>
> 固定属性中类名`className`已取代`class`

```jsx
const user = { url: 'url', name: 'name'};
const element = <div className="container">{user.name}</div>;
const element1 = <img src={user.url} />;
```

## 事件处理

> 事件名采取驼峰写法。
>
> 采用 JSX 语法书写，那么我们需要传入一个函数作为事件处理的函数

```jsx
<button onClick={()=>{console.log('React!')}}></button>
<button onClick={this.click}>event handling</button>
```

> JSX 回调函数中的 this 也比较特殊，实例的方法默认是不会绑定 this，直接使用该方法指向 undefined：
>
> 如果我们使用该方法操作 props 和 state，还会报出错误
>
> 绑定this有下面的三种方法：

```jsx
class EventHandling extends React.Component {
  constructor() {
    super();
    this.method1 = this.method1.bind(this); //方式一，在构造函数内绑定
  }
  method1() {
    console.log('method1 ' + this);
  }
  //方式二，使用箭头函数绑定，该写法是 ES7 的写法，ES6 并不支持，
  method2 = () => {
    console.log('method2 ' + this);
  };
  method3() {
    console.log('method3 ' + this);
  }
  //方式三，在 render 内绑定
  render() {
    return (
      <div>
        <button onClick={this.method1}>method1</button>
        <button onClick={this.method2}>method2</button>
        <button onClick={this.method3.bind(this)}>method3</button>
      </div>
    );
  }
}
```

> 1. 方法三处在 render 内部，这意味着每次我们更新页面，方法三都要重新绑定一遍，性能消耗极大
> 2. 从空间上来说，方式一更具优势，因为实例共享一个方法体定义，而方式二则会对每一个实例化的组件都定义一个方法体；
> 3. 从调用速度来说，在调用过程中，方式二的调用速度大于方式一，因为在原型链上的查找会比较慢。

## 样式处理

> 样式是个对象

```jsx
<div style={{ color: '#AAAAAA', width: '100px', fontSize: '15px' }}>Hello</div>;
```

或者

```jsx
const style = {
  color: '#AAAAAA',
  width: '100px',
  fontSize: '15px',
};
const element = <div style={style}>Hello</div>;
```

## 条件渲染

### if判断

```jsx
function LogIn() {
    return <h1>Welcome!</h1>;
}
function LogOut() {
    return <h1>Please log in.</h1>;
}
class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogging: false,
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(prevState) {
        this.setState((prevState) => ({ isLogging: !prevState.isLogging }));
    }
    render() {
        const isLogging = this.state.isLogging;
        let greeting = null;
        if (isLogging) {
            greeting = <LogIn />;
        } else {
            greeting = <LogOut />;
        }
        return (
            <div>
                {greeting}
                <button onClick={this.changeState}>change state</button>
            </div>
        );
    }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
```

### &&运算符

> `true && expression` 会返回 `expression`，`false && expression` 会返回 `false`

```jsx
<div>
    <textarea
        content={this.content}
        onChange={this.readContent}
        />
    {boolean1 && (<h2>you have input :{this.state.content}</h2>)}
</div>
```

### 三目条件判断

```jsx
<div>
    <textarea
        content={this.content}
        onChange={this.readContent}
        />
    {this.props.result ? <h1>result = true</h1> : <h1>result = false</h1>;}
</div>
```

### 组件隐藏

> 将组件隐藏起来，即使该组件已经被渲染了。我们只需要返回 null 就可以让组件隐藏起来。

```jsx
function HideComponent(props) {
    if (props.hide) {
        return null;
    }
    return <div>this.props.hide = {props.hide.toString()}</div>;
}
class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            hide: true,
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState((prevState) => ({ hide: !prevState.hide }));
    }
    render() {
        return (
            <div>
                <HideComponent hide={this.state.hide} />
                <button onClick={this.changeState}>
                    {this.state.hide ? 'show' : 'hide'}
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Welcome result={false} />,
    document.getElementById('root')
);
```

## 列表渲染

> 一般对于列表，使用循环列表的map方法
>
> 形成虚拟节点列表后，可直接放进元素内渲染

```jsx
const list = ['a', 'b', 'c', 'd', 'e']; //待遍历列表

function DataList(props) {
    const list = props.list;
    const listItems = list.map((item) => <li>{item}</li>);
    return <ul>{listItems}</ul>;
}
```

> 对于key值，你可以像下面那样加
>
> key 值要和具体的元素一一对应，并且尽量不要使用 index 作为 key 值。

```jsx
function DataList(props) {
    const list = props.list;
    const listItems = list.map((item, index) => <li key={index}>{item}</li> );
    return <ul>{listItems}</ul>;
}
```

## 表单双向绑定

### input

> 我们通过原生 js 获取到输入框的值，并使用 setState 更新 state。这里其实出现了双向数据绑定，首先，表单的数据来源于组件的 state，通过 props 传入，这是单向数据绑定，接着，我们通过 onChange 事件处理器把新的数据写回到 state，完成了双向数据绑定。

```jsx
class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) { //监听输入框的改变，并实时改变 state 的值，
        this.setState({
            value: e.target.value,
        });
    }
    handleSubmit(e) {  //负责表单的提交功能
        e.preventDefault(); //阻止表单默认提交
        alert('submit: ' + this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    value:
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<InputForm />, document.getElementById('root'));
```

### textarea

> 与input表单同理

```jsx
class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    handleSubmit(e) {
        alert('submit: ' + this.state.value);
        e.preventDefault(); //阻止表单默认提交
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    value:
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<InputForm />, document.getElementById('root'));
```

### select

> 在 React 中，我们不使用 selected 属性，我们在根 select 标签上使用 value 属性来操作

```jsx
class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'pear',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    handleSubmit(e) {
        alert('submit: ' + this.state.value);
        e.preventDefault(); //阻止表单默认提交
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite fruit:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="pear">Pear</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(<InputForm />, document.getElementById('root'));
```
