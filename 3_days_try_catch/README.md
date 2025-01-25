# Exception Handling Statements

You can throw exceptions using the `throw` statement and handle them using the `try … catch` statements.

## Throw Statement
You can throw exceptions of any type. For example:

```javascript
throw {
    toString() {
        return "I'm an object";
    },
};
```

## Try-Catch Statement
The `try … catch` statement marks a block of statements to try and specifies one or more responses should an exception be thrown. If an exception is thrown, the `try … catch` statement catches it.

### Components:
1. **try**: Contains the code you want to test for errors. If an error occurs, the code inside the `try` block stops executing, and the control moves to the `catch` block.
2. **catch**: Contains the code to handle the error. It takes an error object as a parameter, allowing you to access details about the error, such as its message and stack trace.
3. **Optional finally (Not required)**: Contains code that will execute regardless of whether an error occurred or not.

### Example:

```javascript
try { 
    // Code that may throw an error.
    let result = 10 / 0;
    console.log(result);
    throw new Error("Error"); // Custom error
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Execution completed");
}
```

---

## Türkçe Anlamı

İstisnalar `throw` ifadesiyle atılabilir ve `try … catch` ifadeleriyle yakalanabilir.

### Throw İfadesi
Herhangi bir türde istisna atabilirsiniz. Örnek:

```javascript
throw {
    toString() {
        return "Ben bir nesneyim";
    },
};
```

### Try-Catch İfadesi
`try … catch` ifadesi, denenecek bir kod bloğunu işaretler ve bir istisna atıldığında verilecek bir veya birden fazla yanıtı belirtir. Bir istisna atılırsa, `try … catch` ifadesi bunu yakalar.

#### Bileşenler:
1. **try**: Hataları test etmek istediğiniz kodu içerir. Bir hata oluşursa, `try` bloğundaki kodun yürütülmesi durur ve kontrol `catch` bloğuna geçer.
2. **catch**: Hataları ele almak için kod içerir. Bir hata nesnesini parametre olarak alır ve hatanın mesajı ve yığın izleme gibi ayrıntılarına erişmenizi sağlar.
3. **İsteğe Bağlı finally**: Hata oluşup oluşmadığına bakılmaksızın çalıştırılacak kodu içerir.

#### Örnek:

```javascript
try { 
    // Hata atabilecek kod.
    let result = 10 / 0;
    console.log(result);
    throw new Error("Hata"); // Özel hata
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Yürütme tamamlandı");
}
