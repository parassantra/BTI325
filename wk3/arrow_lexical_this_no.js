 var test1obj = {
    a: "a",
    b: () => console.log(this.a)
}

test1obj.b(); // undefined

var test2obj = {
    a: "a",
    b: function() { console.log(this.a); }
}

test2obj.b(); // "a"


