# 100-Days-Of-Javascript-Protesq
 100 days of JavaScript programming challenge


# JavaScript Basics: Variables, Data Types, and Conversions

You can declare a variable in two ways:

With keyword var. For example var x=42. This syntax can be used to declare both local and global variables. 

With the keyword const or let For example let y=13. This syntax can be used to declare a block-scope local variable.

“const {bar} = foo” This will create a variable named “var” and assign to it the value corresponding to the key of the same name from out object foo.

Declaration and Initialization
In a statement like let x = 42, the let x part is called a declaration, and the “=42” part is called an initializer.

Let x;
Console.log(x) // “Undefined”

In essence let x = 42 is equivalent to let x; x=42.
Const declarations always need an initializer.
Const x ; //syntax error: missing

Data Types
Let age = 23; // number (int)
Let firstName = “Protesq” ; //string
Let fullAge = true //bool
Let child; // undefined

JavaScript has dynamic typing. We don’t have to define the data type. 
If we write type of function. We can see variables’ data type.
For example:

Let name = “protesq”;
Console.log(typeof name); //string

Data Type Conversion
We can create an undefined variable and we can change its data type. 
For example:
Let year;
Console.log(typeof year); //Undefined
Year = 2001;
Console.log(typeof year); //Number

Const
We can not change.
Const birthYear = 2001;
birthYear = 1998; //Uncaught Type Error

Converting strings to numbers
In the case that a value representing a number is in memory as a string, there are methods for conversion.
- ParseInt()
- ParseFloat()

ParseInt()
The “parseInt” function converts its first argument to a string.
For example:
Console.log(parseInt(“123”));
Syntax -> parseInt(string,radix);
String: The string expression you want to convert. 
Radix: The conversion during will be used numeric base. (2-36) This determines the base in which the operation will be performed.

ParseFloat()
The parseFloat function converts its first argument to a floating-point number:
console.log(parseFloat("123.45")); // 123.45

 100 Günde JavaScript - Protesq

🎯 **JavaScript Programlama Yolculuğu**  

Bu repo, JavaScript öğrenme sürecimi belgelemek ve paylaşmak için oluşturulmuştur. Hedefim, her gün JavaScript ile ilgili yeni bir konu öğrenmek ve öğrendiklerimi burada paylaşmaktır. 👨‍💻
---

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
