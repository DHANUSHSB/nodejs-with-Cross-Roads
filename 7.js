function emp(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    this.display=function my(){
        console.log(" name : " + this.name + "  age : " + this.age + "  place : " + this.place);
    }
}
var dhanush = new emp("dhanush",19,"calicut");
var sachin = new emp("sachin",42,"mumbai");
dhanush.display();
sachin.display();

