# Conditional Statements in Programming

## If-Else
Use the `if` statement to execute a block of code if a logical condition is true. Use the optional `else` clause to execute a block of code if the condition is false.

### Syntax
``` 
if (condition) {
    Statement1;
} else {
    Statement2;
}
```

You can also compound the statements using `else if` to test multiple conditions in sequence:

```
if (condition) {
    Statement1;
} else if (condition2) {
    Statement2;
} else if (conditionN) {
    StatementN;
} else {
    StatementLAST;
}
```

---

## Switch
A `switch` statement evaluates an expression and matches its value to a `case` label.

### Syntax
```
switch (expression) {
    case label1:
        Statement1;
        break;
    case label2:
        Statement2;
        break;
    // ...
    default:
        StatementDefault;
}
```

---

## Koşullu İfadeler (Türkçe Çeviri)

### If-Else
`if` ifadesini, bir mantıksal koşul doğru olduğunda bir kod bloğunu çalıştırmak için kullanabilirsiniz. Koşul yanlış olduğunda bir kod bloğunu çalıştırmak için isteğe bağlı olarak `else` bloğu kullanılabilir.

#### Söz Dizimi
```
if (koşul) {
    İfade1;
} else {
    İfade2;
}
```

Birden fazla koşulu sırayla test etmek için `else if` ifadeleri ile birleşik bir yapı oluşturabilirsiniz:

```
if (koşul) {
    İfade1;
} else if (koşul2) {
    İfade2;
} else if (koşulN) {
    İfadeN;
} else {
    Sonİfade;
}
```

---

### Switch
`switch` ifadesi, bir ifadeyi değerlendirir ve değerini bir `case` etiketi ile eşleştirir.

#### Söz Dizimi
```
switch (ifade) {
    case etiket1:
        İfade1;
        break;
    case etiket2:
        İfade2;
        break;
    // ...
    default:
        Varsayılanİfade;
}
