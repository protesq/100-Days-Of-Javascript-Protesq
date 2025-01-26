# Use Strict
The `use strict` directive is a feature in JavaScript that enforces stricter parsing and error handling in your code. If we write `'use strict';`, it activates strict mode for the script or a specific function. Strict mode helps to identify and fix silent errors in your code by throwing exceptions, making debugging easier and code execution safer.

Example:

```javascript
'use strict';
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');
```

In strict mode, certain actions that would otherwise be ignored or fail silently will throw errors. For example:

```javascript
// 'use strict';
const if = 23; // SyntaxError: Unexpected token 'if'
```

This makes strict mode essential for writing robust and error-free JavaScript code.

---

## Functions
A function definition in JavaScript consists of the `function` keyword followed by the name of the function, a list of parameters in parentheses, and a block of code in curly braces `{}`.

Example:

```javascript
function square(number) {
    return number * number;
}
```

Another example:

```javascript
function fruitProcessor(apples, oranges) {
    const juice = 'Juice with ' + apples + ' apples and ' + oranges + ' oranges.';
    return juice;
}

const appleOrangeJuice = fruitProcessor(5, 0);
console.log(appleOrangeJuice); // Output: Juice with 5 apples and 0 oranges.
```

In this example, the `fruitProcessor` function takes two arguments, `apples` and `oranges`, processes them, and returns a string. The returned value is then stored in the `appleOrangeJuice` variable and logged to the console.

---

# Türkçe Çevirisi

## Use Strict
`use strict` direktifi, JavaScript'te daha katı bir analiz ve hata denetimi sağlayan bir özelliktir. `'use strict';` yazdığımızda, kodumuz için sıkı modu etkinleştiririz. Sıkı mod, kodunuzdaki sessiz hataları belirleyerek ve bunları hata olarak fırlatarak hata ayıklamayı kolaylaştırır ve kodun güvenli bir şekilde çalışmasını sağlar.

Örnek:

```javascript
'use strict';
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('Araba kullanabilirim');
```

Sıkı modda, normalde göz ardı edilen veya sessizce başarısız olan bazı işlemler hata olarak fırlatılır. Örneğin:

```javascript
// 'use strict';
const if = 23; // SyntaxError: Unexpected token 'if'
```

Bu nedenle sıkı mod, güvenilir ve hatasız JavaScript kodu yazmak için önemlidir.

---

## Fonksiyonlar
JavaScript'te bir fonksiyon tanımı, `function` anahtar kelimesi ile başlar, ardından fonksiyonun adı, parantez içinde parametreler ve süslü parantezler `{}` içinde bir kod bloğu gelir.

Örnek:

```javascript
function square(number) {
    return number * number;
}
```

Bir başka örnek:

```javascript
function fruitProcessor(apples, oranges) {
    const juice = 'Juice with ' + apples + ' apples and ' + oranges + ' oranges.';
    return juice;
}

const appleOrangeJuice = fruitProcessor(5, 0);
console.log(appleOrangeJuice); // Çıktı: Juice with 5 apples and 0 oranges.
```

Bu örnekte, `fruitProcessor` fonksiyonu iki argüman alır, `apples` ve `oranges`, bunları işler ve bir metin döndürür. Döndürülen değer, `appleOrangeJuice` değişkenine atanır ve konsola yazdırılır.
