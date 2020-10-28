var emp = { name:"manu",
age:24,
place:"kochi",
fullDetails:function full(){
    console.log("may name is" +" "+ this.name + " "+"iam" +" "+this.age+" "+"year old"+" "+"iam coming from "+" "+this.place);

}
}
console.log(emp.fullDetails());