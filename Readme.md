
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


=Those are Dom Selector used to select html element from dom based on  ID,Class,Tag,Css Selector.


2. How do you **create and insert a new element into the DOM**?


= To create and insert a new Element into dom frist we have to create the element using document.createElement('div') .Then append the element into the parent using document.getElementById().appendChild().

3. What is **Event Bubbling** and how does it work?


=Event Bubbling is a mechanism where i click on a button inside a div and it bubbling up to it's parent until the root.The div is inside the body. Their order is body>div>button.Now i click on the button and event tigger but now it bubbling up to it's parent and if any event listner exist the event tigger and  go on until the root.




4. What is **Event Delegation** in JavaScript? Why is it useful?

=Event Delegation is a technique where you can attast a event listner on Parent element and Then target the child element through the parent event listner .so  you don't need to add multiple event listner on child to target them.



5. What is the difference between **preventDefault() and stopPropagation()** methods?


=preventDefault() used to stop the default browser behavior for an event.



=stopPropagation() used to stop the event from bubbling up  the DOM tree.









