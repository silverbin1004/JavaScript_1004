// 문제1 - JavaScript에서 클래스를 정의하고, 해당 클래스를 사용하여 객체를 생성하는 방법을 설명하세요. 코드 예시를 포함해 주세요.

class Person{
  constructor(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  info(){
    console.log(`name: ${this.name}, age: ${this.age}, city: ${this.city} `);
  }
}

const koreaPerson = new Person("홍길동", 30, "seoul");

koreaPerson.info();

// 문제2 - JavaScript에서 상속을 사용하여 클래스를 확장하는 방법을 설명하세요. 부모 클래스와 자식 클래스를 정의하고, 상속을 통해 재사용하는 예시 코드를 작성하세요.
class Animal1{
  speak(){
    console.log('animal is making a sound');
  }
}
class Dog1 extends Animal1{
  speak(){
    console.log("멍멍");
  }
}

const puppy = new Dog1();
puppy.speak();

// 문제 3 - 다형성이란 무엇인가요? JavaScript에서 메서드 오버라이딩을 사용하여 다형성을 구현하는 방법을 설명하고, 관련 예시를 작성하세요.
// -> 같은 이름의 메서드나 연산자가 다른 클래스에 대해 다른 동작을 하도록 하는 것.
class Animal2{
  speak(){
    console.log("animal is making a sound");
  }
}

class Dog2 extends Animal2{
  speak(){
    console.log("왈왈왈");
  }
}

class Cat extends Animal2{
  speak(){
    console.log("야옹");
  }
}

const dog = new Dog2();
const cat = new Cat();

dog.speak();
cat.speak();

// 문제 4 - 추상화의 개념과 JavaScript에서 추상화를 구현하는 방법을 설명하세요. 추상 클래스를 만들고 이를 상속받는 클래스의 예시 코드를 작성하세요.
// -> 객체의 공통적인 속성과 기능을 추출하여 정의하는 것.
class Animal3{
  constructor(name){
    this.name = name;
  }

  move(){
    console.log('동물이 움직입니다.');
  }
}

class Dog3 extends Animal3{
  constructor(name){
    super(name);
  }
  move(){
    console.log(`${this.name}가 움직입니다.`);
  }
}

const dog2 = new Dog3("누렁이");

dog2.move();

// 문제 5 - JavaScript에서 생성자 함수의 역할은 무엇인가요? 생성자를 사용하여 객체를 초기화하는 예시를 작성하세요.
// -> 객체의 초기화를 담당한다.

class Car{
  constructor(name, brand){
    this.name = name;
    this.brand = brand;
  }

  carInfo(){
    console.log(`name: ${this.name}, brand: ${this.brand}`);
  }
}

const car = new Car("santafe","hyundai");
car.carInfo();

// 문제 6 - JavaScript에서 Getter와 Setter 메서드를 사용하여 객체의 속성에 접근하고 수정하는 방법을 설명하세요. 관련 예시를 작성하세요.
class Employee{
  #salary;

  constructor(){
    this.#salary = 0;
  }

  getSalary(){
    return this.#salary;
  }

  setSalary(amount){
    if(amount >= 0){
      this.#salary = amount;
    }
  }
}

const employee = new Employee();

employee.setSalary(10000);

console.log(employee.getSalary());

// 문제 7 - 함수형 프로그래밍의 주요 특징과 장점을 설명하세요. 순수 함수, 불변성, 고차 함수의 개념을 포함하여 답변하세요.
// -> 함수형 프로그래밍은 순수 함수, 불변성, 고차함수와 같은 여러 특징을 가진다.
//    순수 함수는 동일한 입력에 대해 항상 동일한 출력을 반환하는 것이며, 불변성은 데이터가 데이터가 한 번 생성되면 변경되지 않는 성질을 말하고, 고차함수는 함수 자체를 인자로 전달하거나 함수에서 또 다른 함수를 리턴하는 것이다.
//    함수형 프로그래밍은 코드의 가독성과 재사용성을 높여주고 버그 발생 가능성을 줄이는 장점을 가지고 있다.

// 문제 8 - 순수 함수와 부수 효과의 차이를 설명하세요. 순수 함수의 예시와 부수 효과가 있는 함수의 예시를 작성하세요.
// -> 순수 함수는 어떤 외부 상태에 의존하지 않고 변경하지도 않는, 부수 효과가 없는 함수를 말하고
//    부수효과는 함수가 만들어진 목적과는 다른 효과 또는 부작용이 발생하는 것을 말한다.

// 순수 함수 예시
function add(a,b){
  return a+b;
}

// 부수 효과가 있는 함수 예시
let counter = 0;

function increment() {
  counter++;
}

increment();
console.log(counter);

// 문제 9 -  JavaScript에서 고차 함수란 무엇인가요? map, filter, reduce 함수의 사용 예시를 각각 작성하세요.
// -> 고차 함수란 함수를 인자로 전달 받거나 연산의 결과로 반환해주는 메서드를 말한다.

const array = [1,2,3,4];

// map() 예시
const doubled = array.map(num => num*2);

console.log(doubled);

//filter() 예시
const even = array.filter(num => num % 2 === 0);

console.log(even);

//reduce() 예시
const sum = array.reduce((acc,curr) => acc + curr, 0);

console.log(sum);

// 문제 10 - 불변성을 유지하는 방법을 설명하고, JavaScript에서 Spread 연산자를 사용하여 객체나 배열의 불변성을 유지하는 예시 코드를 작성하세요.
// -> spread 연산자나 Object.assign을 사용하여 얕은 복사를 하거나, Immutable.js와 같은 라이브러리를 사용하여 불변성을 유지한다.
const originalObj = {a:1, b:2};
const newObj = {...originalObj, b:3};

console.log(originalObj);
console.log(newObj);

// 문제 11 - 커링의 개념을 설명하고, 커링을 적용한 함수의 예시를 작성하세요.
// -> 커링은 다중 인자를 받는 함수를 단일 인자 함수들의 체인으로 변환하는 과정이다.
function add(a){
  return function(b){
    return a+b;
  };
}

const sum2 = add(5);

console.log(sum2(3));

// 문제 12 - 함수 합성의 개념을 설명하고, 두 개 이상의 함수를 결합하여 새로운 함수를 만드는 예시를 작성하세요.
// -> 합성 함수는 두 개 이상의 함수를 결합하여 새로운 함수를 만드는 과정이다.
const compose = (f,g) => x => f(g(x));

const square = x => x * x;
const addOne = x => x + 1;

const squareAfterAddOne = compose(square, addOne);

console.log(squareAfterAddOne(2));

// 문제 13 - 모나드의 저주란 무엇인가요? 모나드를 이해하고 설명하기 어려운 이유를 설명하고, 모나드의 개념을 비유적으로 설명해 보세요.
// -> 모나드의 저주는 모나드를 충분히 이해하면 설명할 수 없게 된다 는 역설적 상황을 의미한다.

// 문제 14 - 재귀 함수의 개념을 설명하고, 팩토리얼을 계산하는 재귀 함수의 예시를 작성하세요.
// ->  재귀 함수는 자기 자신을 호출하여 반복적인 작업을 수행하는 함수이다.
function factorial(n){
  if (n === 0){
    return 1;
  } 
  return n * factorial(n-1);
}

console.log(factorial(5));

// 문제 15 - 객체 지향 프로그래밍(OOP)과 함수형 프로그래밍(FP)의 차이점을 설명하세요. 두 패러다임의 장단점을 비교하세요.
// -> 객체 지향 프로그래밍과 함수형 프로그래밍은 데이터를 다루는 개념과 간결한 코드 작성에 대한 관점의 차이가 있다.
//    객체 지향 프로그래밍은 실제 세계의 객체를 모델링하는 것에 강점을 가지며 대규모 시스템을 관리하는데 유리하다.
//    함수형 프로그래밍은 코드의 예측 가능성과 재사용성을 높이며 병렬 처리와 동시성 관리에 유리하다.

// 문제 16 - 오버라이딩(Overriding)과 오버로딩(Overloading)의 차이점을 설명하고, JavaScript에서 오버라이딩을 구현한 예시를 작성하세요.
// -> 오버라이딩은 상속 관계에서 부모 클래스의 메서드를 재정의하여 사용하는 것이고, 오버로딩은 동일한 이름의 메서드를 여러 개 만들어 매개변수의 종류나 개수만 다르게 설정하는 것이다.
// 오버라이딩 예시
class Animal4{
  sleep(){
    console.log('Animal sleep');
  }
}

class Dog4 extends Animal4{
  sleep(){
    console.log('Dog sleep');
  }
}

const dog3 = new Dog4();

dog3.sleep();

// 문제 17 - 함수형 프로그래밍에서 상태 관리는 어떻게 이루어지나요? 상태 변화를 최소화하고 불변성을 유지하는 방법을 설명하세요.
// -> 함수형 프로그래밍은 불변 데이터를 사용하여 상태 변화로 인한 오류를 방지한다. spread 연산자나 Object.assign을 사용하여 얕은 복사를 하거나, Immutable.js와 같은 라이브러리를 사용하여 불변성을 유지한다.

// 문제 18 - JavaScript에서 프로토타입 상속이란 무엇인가요? 프로토타입을 사용하여 객체 간 상속을 구현하는 방법을 설명하고, 예시 코드를 작성하세요.
// -> 
function Animal(name){
  this.name = name;
}

Animal.prototype.eat = function(){
  console.log(tihs.name + "eating");
}

function Dog(name){
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
  console.log(this.name + "barking");
};

const dog5 = new Dog("백구");
dog5.eat();
dog5.bark();

// 문제 19 - 함수형 프로그래밍의 개념을 활용하여 간단한 Todo 리스트 애플리케이션을 구현하세요. 항목 추가, 삭제, 완료 처리를 순수 함수로 구현하는 코드를 작성하세요.
const todo = [
  {id: 1, text: "공부", completed: false},
  {id: 2, text: "잠자기", completed: true}
];

const addList = (todo, newTodo) => [
  ...todo, newTodo
];

const removeList = (todo, id) => todo.filter(todo => todo.id !== id);

const toggleList = (todo, id) => {
  todo.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo
  );
}

let updateList = addList(todo, {id: 3, text: "밥먹기",completed: false});

updateList = toggleList(updateList,1);
updateList = removeList(updateList,2);

console.log(updateList);