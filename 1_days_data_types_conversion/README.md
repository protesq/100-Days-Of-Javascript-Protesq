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
