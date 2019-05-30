var str = `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddd
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                            fffffffffffffffffffffffff
                                gggggggggggggggg
                                    hhhhhhhhh  
                                        ii
                                         j`


//Person
class Person {
    constructor(name){
        this.name = name;
    }
    greeting(){
        var later = String.raw `Hello my name is ${this.name}!`;
        console.log(later);
    }
}

var Jack = new Person('Jack');
var Piroska = new Person('Piroska');

Jack.greeting();
Piroska.greeting();
//console.log(str);