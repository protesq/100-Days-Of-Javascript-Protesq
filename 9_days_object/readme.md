# JavaScript Objects 

JavaScript is designed with an object-based paradigm. An object is a collection of key-value pairs, where the keys can contain functions, known as methods. In JavaScript, everything is either an object or behaves like an object, except for primitive types (such as strings, numbers, and booleans).

## Creating New Objects 

There are multiple ways to create objects in JavaScript:

### Object Initializer 

Object initializers (also known as object literals) are the most common way to create objects. They provide a concise and readable way to define objects.

```js
const obj = {
  property1: "value1", // A string value
  2: "value2", // A numeric key
  "property n": "value3" // A string key with spaces
};
```

Each object created with an object initializer is unique and independent. This method is particularly useful for defining large and complex objects.

Example:

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 }
};
```

Here, the `engine` property is itself an object containing `cylinders` and `size` properties. This demonstrates how nested objects can be used.

### Constructor Function

Alternatively, objects can be created using the `new` operator with constructor functions. Constructor functions are ideal for creating multiple objects of the same type.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
```

This approach allows for reusable code and is beneficial in larger projects.

Objects can also contain other objects:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
```

Here, the `Car` object contains an `owner` property that holds a `Person` object.

### `Object.create()` Method (`Object.create()` Metodu)

The `Object.create()` method allows you to create a new object using an existing object as its prototype. This method is useful for inheritance.

```js
const Animal = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  }
};

const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
```

This method is particularly useful when creating objects that share a common prototype.

## Object Properties

Objects are defined by their properties, which can be accessed using dot notation or bracket notation.

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969
};

console.log(myCar.make); // Ford
console.log(myCar["model"]); // Mustang
```

### Dynamic Properties

JavaScript objects allow properties to be dynamically added or modified at runtime.

```js
myCar.color = "blue";
delete myCar.year;
console.log(myCar); // { make: "Ford", model: "Mustang", color: "blue" }
```

## Iterating Over Properties 

There are multiple ways to iterate over an object’s properties:

```js
for (const key in myCar) {
  if (Object.hasOwn(myCar, key)) {
    console.log(`${key}: ${myCar[key]}`);
  }
}

console.log(Object.keys(myCar));
console.log(Object.getOwnPropertyNames(myCar));
```

## Object Inheritance 

All JavaScript objects inherit from at least one other object. New properties can be added using `prototype`.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

This ensures that all `Car` objects share the same `color` property by default.

## Defining Methods 

Methods are functions assigned to objects. They provide functionality and access to object properties.

```js
Car.prototype.displayCar = function () {
  console.log(`A Beautiful ${this.year} ${this.make} ${this.model}`);
};

car1.displayCar();
```

## Using `this` 

The `this` keyword refers to the object on which a method is called. Its value depends on the context.

```js
const Manager = { name: "Karina" };
const Intern = { name: "Tyrone" };

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // "Hello, my name is Karina"
Intern.sayHi(); // "Hello, my name is Tyrone"
```

## Getters and Setters 

Getters and setters allow controlled access to object properties.

```js
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

myObj.c = 50;
console.log(myObj.a); // 25
```

Alternatively, you can use `Object.defineProperties()`:

```js
Object.defineProperties(myObj, {
  b: { get() { return this.a + 1; } },
  c: { set(x) { this.a = x / 2; } }
});
```

## Object Comparison 

JavaScript objects are reference types, meaning two distinct objects are never equal, even if they have identical properties.

```js
const obj1 = { name: "apple" };
const obj2 = { name: "apple" };

console.log(obj1 === obj2); // false
```

This is because objects are compared by reference, not by value.

---

This document provides an in-depth explanation of JavaScript objects, properties, methods, inheritance, and object operations. Understanding objects is crucial for effective JavaScript programming.

---

# JavaScript Nesneleri (Objects)

JavaScript, nesne tabanlı bir paradigmayla tasarlanmıştır. Bir nesne, anahtar-değer çiftlerinden oluşur ve bu anahtarlar bir fonksiyon içerebilir, bu durumda metod olarak adlandırılır. JavaScript'te her şey bir nesnedir veya bir nesne gibi davranır. Basit türler (string, number, boolean gibi) dışında tüm değerler nesnedir.

## Yeni Nesneler Oluşturma

JavaScript'te nesne oluşturmanın birkaç yolu vardır:

### Nesne Başlatıcı (Object Initializer)

Nesne başlatıcılar (object literals), en yaygın nesne oluşturma yöntemlerinden biridir. Nesne başlatıcıları, kısa ve okunaklı bir şekilde nesne oluşturmayı sağlar.

```js
const obj = {
  property1: "value1", // Bir string değer
  2: "value2", // Bir sayısal anahtar
  "property n": "value3" // Bir boşluk içeren string anahtar
};
```

Bu yöntemle oluşturulan nesneler birbirinden bağımsızdır ve her biri yeni bir nesnedir. Özellikle büyük ve karmaşık nesneler için nesne başlatıcıları oldukça pratiktir. JavaScript'te bir nesne, anahtar-değer çiftleriyle tanımlanır. Anahtarlar genellikle string veya symbol olabilirken, değerler her türde olabilir.

Örnek:

```js
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 }
};
```

Burada `engine` özelliği bir nesnedir ve kendi içinde `cylinders` ve `size` gibi özelliklere sahiptir. Bu, iç içe geçmiş (nested) nesnelerin nasıl kullanılacağını gösterir.

### Yapıcı Fonksiyon (Constructor Function)

Alternatif olarak, `new` operatörünü kullanarak nesne oluşturabilirsiniz. Yapıcı fonksiyonlar, aynı türde birçok nesne oluşturmak için idealdir.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
```

Bu yöntem, nesneleri bir şablona göre oluşturmayı sağlar. Yapıcı fonksiyonlar büyük projelerde tekrar kullanılabilir kod yazmayı kolaylaştırır. 

Ayrıca nesneler içinde başka nesneler de olabilir:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
```

Burada `Car` nesnesine `owner` (sahip) özelliği ekleyerek iç içe nesneler oluşturulmuştur.

### `Object.create()` Metodu

`Object.create()`, bir nesnenin prototipini belirleyerek yeni nesneler oluşturmanıza olanak tanır. Bu yöntem, mevcut bir nesneyi temel alarak yeni nesneler türetmek için kullanışlıdır.

```js
const Animal = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  }
};

const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
```

Bu yöntem, özellikle kalıtım yoluyla nesneler türetirken kullanışlıdır.

## Nesne Özellikleri (Properties)

Nesneler, özelliklerle tanımlanır. Özelliklere nokta veya köşeli parantez notasyonu ile erişilebilir. JavaScript nesneleri, kendi özelliklerine ve prototiplerinden miras alınan özelliklere sahiptir.

```js
const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969
};

console.log(myCar.make); // Ford
console.log(myCar["model"]); // Mustang
```

### Dinamik Özellik Kullanımı

JavaScript nesneleri, çalışma zamanında yeni özellikler eklemeye izin verir. Bir nesneye sonradan özellik eklemek veya var olan bir özelliği değiştirmek mümkündür.

```js
myCar.color = "blue";
delete myCar.year;
console.log(myCar); // { make: "Ford", model: "Mustang", color: "blue" }
```

## Özellikleri Döngü ile Gezinme

Nesnelerin özelliklerini listelemek için birkaç yöntem vardır:

```js
for (const key in myCar) {
  if (Object.hasOwn(myCar, key)) {
    console.log(`${key}: ${myCar[key]}`);
  }
}

console.log(Object.keys(myCar));
console.log(Object.getOwnPropertyNames(myCar));
```

## Nesne Kalıtımı (Inheritance)

JavaScript'te nesneler en az bir başka nesneden miras alır. Yeni özellikler eklemek için `prototype` kullanılabilir.

```js
Car.prototype.color = "red";
console.log(car1.color); // "red"
```

Bu, tüm `Car` nesnelerinin varsayılan olarak `color` özelliğine sahip olmasını sağlar.

## Metot Tanımlama

Metotlar, nesnelere atanmış fonksiyonlardır. Metotlar, nesne içindeki özelliklere erişim sağlamak için kullanılır.

```js
Car.prototype.displayCar = function () {
  console.log(`A Beautiful ${this.year} ${this.make} ${this.model}`);
};

car1.displayCar();
```

## `this` Kullanımı

`this`, çağrıldığı nesneyi referans eder. Bağlamına bağlı olarak değişebilir.

```js
const Manager = { name: "Karina" };
const Intern = { name: "Tyrone" };

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // "Hello, my name is Karina"
Intern.sayHi(); // "Hello, my name is Tyrone"
```

## Getter ve Setter Tanımlama

Getter ve setter metodları, nesne özelliklerine erişimi kontrol etmek için kullanılır.

```js
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

myObj.c = 50;
console.log(myObj.a); // 25
```

Alternatif olarak `Object.defineProperties()` kullanılabilir:

```js
Object.defineProperties(myObj, {
  b: { get() { return this.a + 1; } },
  c: { set(x) { this.a = x / 2; } }
});
```

## Nesne Karşılaştırma

JavaScript'te nesneler referans tipidir, bu nedenle iki farklı nesne eşit kabul edilmez.

```js
const obj1 = { name: "apple" };
const obj2 = { name: "apple" };

console.log(obj1 === obj2); // false
```

Bu, nesnelerin bellekte farklı referanslara sahip olmasından kaynaklanır.

---

Bu dokümanda JavaScript nesneleri, özellikleri, metotları, kalıtım ve nesne işlemleri detaylı olarak açıklanmıştır. JavaScript'te nesneler programlamanın temel yapı taşlarından biridir ve iyi anlaşılması büyük önem taşır.

