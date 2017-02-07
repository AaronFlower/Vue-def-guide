Vue 1.0 --> 迁移到 --> Vue 2.0
1. Do not use built-in or reserved HTML elements as component id: Text.
	引入组件不要使用 dialog, text, button 等内置或被保留的 html 元素。
2. Prop mutation, Prop being mutated
	Mutating a prop locally is now considered an anti-pattern, e.g. declaring a prop and then setting this.myProp = 'someOtherValue' in the component.
	因为Vue 2.0 的渲染机制是，当父组件重新渲染时，子组件中的局部变化会被覆盖。

3. 自定义组件影响事件，需要在组件内部中 emit 出来。




JS ,call ,apply retrieve
var Person = function(name,age) {
	this.name = name;this.age = age;
}
Person.prototype.sayHello= function() {
	console.log(this.name)
}
p1 = new Person('eason', 20)
p1.sayHello()			// eason
a = {}
a.name = 'May'
a.sayHello() //VM731:1 Uncaught TypeError: a.sayHello is not a function
// 如果 a 也想应用到 Person 的 sayHello 方法
// 利用 call
p1.sayHello.call(a)
VM600:1 May
// 利用 apply
p1.sayHello.apply(a)
VM600:1 May
