# Function Declaration, Expression, and Arrow Functions

## Function Declaration
- Declared using the `function` keyword.
- Can be called before declaration due to hoisting.

```javascript
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
```

## Function Expression
- Assigned to a variable.
- Not hoisted, must be declared before use.

```javascript
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(2001);
console.log(age1, age2);
```

## Arrow Functions
Arrow functions are a special form of function expression that are shorter.

```javascript
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2019);
console.log(age3);
```

### Another Example

```javascript
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; // Don't forget return
};

console.log(yearsUntilRetirement(1991));
```

### Using Two Parameters
If we need two parameters, we enclose them in parentheses:

```javascript
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};
```

---

# Fonksiyon Tanımlama, Fonksiyon İfadeleri ve Ok Fonksiyonları

## Fonksiyon Tanımlama (Function Declaration)
- `function` anahtar kelimesi ile tanımlanır.
- Hoisting nedeniyle, tanımlanmadan önce çağrılabilir.

```javascript
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
```

## Fonksiyon İfadesi (Function Expression)
- Bir değişkene atanır.
- Hoisting yapılmaz, önce tanımlanması gerekir.

```javascript
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(2001);
console.log(age1, age2);
```

## Ok Fonksiyonları (Arrow Functions)
Ok fonksiyonları, daha kısa yazım sunan özel bir fonksiyon ifadesi türüdür.

```javascript
// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2019);
console.log(age3);
```

### Başka Bir Örnek

```javascript
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; // Return kullanmayı unutmayın.
};

console.log(yearsUntilRetirement(1991));
```

### İki Parametre Kullanımı
Eğer iki parametre kullanmamız gerekiyorsa, bunları parantez içine alırız:

```javascript
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} ${retirement} yıl içinde emekli olacak.`;
};
```

