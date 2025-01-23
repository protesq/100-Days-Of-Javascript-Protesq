# 100-Days-Of-Javascript-Protesq

# JavaScript Variables and Data Types

## Declaring Variables

### Using `var`
- Example: `var x = 42;`
- This syntax can be used to declare both local and global variables.

### Using `const` or `let`
- Example: `let y = 13;`
- This syntax is used to declare a block-scope local variable.
- Example of destructuring assignment: `const {bar} = foo;`
  - This creates a variable named `bar` and assigns to it the value corresponding to the key of the same name from the object `foo`.

## Declaration and Initialization
- In a statement like `let x = 42`, the `let x` part is called a **declaration**, and the `= 42` part is called an **initializer**.
- Example:
  ```javascript
  let x;
  console.log(x); // "Undefined"
  ```
  In essence, `let x = 42` is equivalent to:
  ```javascript
  let x;
  x = 42;
  ```
- Note: `const` declarations always require an initializer.
  ```javascript
  const x; // SyntaxError: Missing initializer in const declaration
  ```

## Data Types
- Example declarations:
  ```javascript
  let age = 23;          // Number (int)
  let firstName = "Protesq"; // String
  let fullAge = true;    // Boolean
  let child;             // Undefined
  ```
- JavaScript has **dynamic typing**, meaning we don’t need to define the data type explicitly.
- You can check a variable’s data type using the `typeof` function:
  ```javascript
  let name = "Protesq";
  console.log(typeof name); // "string"
  ```

## Data Type Conversion
- Variables in JavaScript can change their data type dynamically:
  ```javascript
  let year;
  console.log(typeof year); // "undefined"
  year = 2001;
  console.log(typeof year); // "number"
  ```

### Using `const`
- Variables declared with `const` cannot be reassigned:
  ```javascript
  const birthYear = 2001;
  birthYear = 1998; // Uncaught TypeError
  ```

## Converting Strings to Numbers
- If a value representing a number is stored as a string, it can be converted using methods like `parseInt()` and `parseFloat()`.

### `parseInt()`
- Converts its first argument to an integer.
  ```javascript
  console.log(parseInt("123")); // 123
  ```
- Syntax: `parseInt(string, radix)`
  - **string**: The string expression to convert.
  - **radix**: The base for conversion (2-36). Determines the numeric base of the operation.

### `parseFloat()`
- Converts its first argument to a floating-point number:
  ```javascript
  console.log(parseFloat("123.45")); // 123.45
  ```

 100 Günde JavaScript - Protesq
---
Bu repo, JavaScript öğrenme sürecimi belgelemek ve paylaşmak için oluşturulmuştur. Hedefim, her gün JavaScript ile ilgili yeni bir konu öğrenmek ve öğrendiklerimi burada paylaşmaktır. 👨‍💻

## JavaScript Temelleri: Değişkenler, Veri Türleri ve Dönüştürmeler

### Değişken Tanımlama
JavaScript’te değişkenler iki şekilde tanımlanabilir:

1. **`var` anahtar kelimesiyle**:  
   Örneğin:
   ```javascript
   var x = 42;
   ```  
   Bu sözdizimi hem yerel hem de global değişkenleri tanımlamak için kullanılabilir.

2. **`let` veya `const` anahtar kelimesiyle**:  
   Örneğin:
   ```javascript
   let y = 13;
   ```  
   Bu sözdizimi blok kapsamlı yerel değişkenler tanımlar.

#### Obje Yapılandırması ile Değişken Tanımlama
Bir örnek:
```javascript
const { bar } = foo;
```
Bu, `foo` nesnesindeki `bar` anahtarına karşılık gelen değeri alır ve bir `bar` değişkenine atar.

---

### Tanımlama ve Başlatma

Bir ifade şu şekilde olabilir:
```javascript
let x = 42;
```
- `let x` kısmı değişken tanımlamadır.
- `= 42` kısmı ise başlatmadır.

#### Örnek:
```javascript
let x;
console.log(x); // "undefined"
```
Aslında `let x = 42` ifadesi şu şekilde çalışır:
```javascript
let x;
x = 42;
```

#### `const` Tanımlamaları
`const` ile tanımlanan değişkenler her zaman bir başlangıç değeri almalıdır:
```javascript
const x; // Söz dizimi hatası: Başlangıç değeri eksik
```

---

### Veri Türleri

JavaScript’te temel veri türleri şunlardır:
```javascript
let age = 23; // Sayı (int)
let firstName = "Protesq"; // String
yet fullAge = true; // Boolean
let child; // Undefined
```

#### Dinamik Tip Atama
JavaScript, dinamik tip atamayı destekler. Yani değişkenlerin türünü önceden belirtmenize gerek yoktur. Bir değişkenin türünü kontrol etmek için `typeof` işlevini kullanabilirsiniz:
```javascript
let name = "Protesq";
console.log(typeof name); // "string"
```

#### Örnek - Tip Değişimi
```javascript
let year;
console.log(typeof year); // "undefined"
year = 2001;
console.log(typeof year); // "number"
```

#### `const`
`const` ile tanımlanan değişkenlerin değeri değiştirilemez:
```javascript
const birthYear = 2001;
birthYear = 1998; // Hata! (Uncaught TypeError)
```

---

### Veri Türü Dönüşümleri

#### String’leri Sayıya Dönüştürme
Bir sayı değeri bir string olarak saklanıyorsa, şu yöntemlerle dönüştürülebilir:
- `parseInt()`
- `parseFloat()`

##### `parseInt()` Kullanımı
`parseInt` işlevi, ilk parametresini bir tam sayıya dönüştürür:
```javascript
console.log(parseInt("123")); // 123
```

**Sözdizimi:**
```javascript
parseInt(string, radix);
```
- `string`: Dönüştürülmek istenen string ifade.
- `radix`: Dönüşümde kullanılacak sayı tabanı (2-36). İşlemin hangi tabanda yapılacağını belirtir.

##### `parseFloat()` Kullanımı
`parseFloat` işlevi, ilk parametresini bir ondalık sayıya dönüştürür:
```javascript
console.log(parseFloat("123.45")); // 123.45
```

---

## Katıl ve Öğren 🚀
Bu projede her gün yeni bir konu öğrenip GitHub’a yükleyeceğim.
