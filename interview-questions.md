# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:
Object-oriented programming is when everything we interact with is an object. They are based off classes. functional programming is making a machine that takes an input and changes it according to the code in the function and outputs something made out of the input given. 

Researched answer: 
Object-oriented programming or OOP is programming that focuses on the use of classes and objects. Both the data and logic/functionality are grouped together. OOP consists of objects, classes, methods, and attributes. Functional programming is coding with inputs and outputs with a function to pass the input to. This way of programming relies on arguments. A neat thing I found is that this process of coding is called "eliminating side effects in your code."

2. What is the difference between a Float and an Integer in Ruby?

Your answer: 
An interger is a digit, a number. A whole number like 1, 2, 3, 4... A float looks like a decimal (ex: 1.2) but it is its own element. It has less to do with being a numeric value and more to do with a space or a point. Like float points. 

Researched answer: 
Looking deeper, an interger is in fact a number that can be represented as a whole number, negative number, or a 0. A floats definition concerning Ruby is a number written with decimals (ex: 3.14). When you need to be more precise you would use a float. 

3. Ruby has an implicit return. What does that mean?

Your answer: 
In my own words an impicit return is that a return is impied thus you do not need to declare or write return to get the return functionality. My car has auto headlights, I don't need to tell it to turn them on when its dark. 

Researched answer:
An implicit return is in a method and it is the final statement. We do not need the return keyword. The result will be the same. Returns the last excecuted instruction.

4. What is a block in Ruby?

Your answer: Blocks are like functions, and they start with do and end with end. You can pass in arguements and it will output what you asked it to. 

Researched answer: A block is an anonymous function. It is encapsulated in do and end. These anonymous functions can be passed into methods. You can also save it into a variable and use it later on. 

5. How do you extract a value in a Ruby hash?

Your answer:
First we need to know what a hash is. It is Ruby's version of an object. These objects have key:value pairs inside them. We would extract the value by calling on the hash and the key that holds the value. If the hash is coffee_types and the coffee you want is a pumpkin spice latte, the key would be something like specialty so you would call upon specialty 

coffee_types = {:specialty => 'pumkin spice latte'}
p coffee_types[:specialty]
output: pumkin spice latte

Researched answer:
A hash is like a dictionary. It can hold keys and their values. to extract a value out from a Ruby hash we will need to call upon the hash itself then the key that holds the value. The output will then be the value. 

## Looking Ahead: Terms for Next Week

1. Class Inheritance: 
Classes sharing behaviors with each other making code efficient. We can extract the attributes so they can be accessed. If we put common behaviors into one class and sharing them, we are creating a superclass. A superclass can pass the info over to another class, a subclass.

2. RSpec: 
Request specification. RSPec is a testing framework to see how objects behave in Ruby. It is a domaine specific language meaning that its used for one thing, one task, not general purpose. 

3. CRUD:
Create, Read, Update, Delete. It is used as a checklist for us developers. It is the list of data manipulation. First we start for example creating the hash. We would do that with a variable then key:value pairs inside. Updating would be adding more key:value pairs. Reading would be logging the code. Seeing outputs come out. Delete will remove code depending on what we target. 

4. Test-driven development: 
By writing tests for our codes then the code we are looking at our code in a logical perspective. Its the philosophy of making a test, seeing fails then writing correct code to pass it.  

5. HTTP:
Hypertext transfer protocol. Application protocol that allows users to put data on the world wide web. Uses a server-client model. defines commands for transmitting webpage data. 
