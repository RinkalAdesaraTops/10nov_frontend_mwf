
        //object = key-value pair
        let arr = {
            "id":101,
            "name":"test",
            "age":25,
            "salary":25000,
            "dispData":function(){
                    return this.name+"---"+this.age
            },
            //getter & setter method
            get getSalary(){
                return this.salary
            },
            set setSalary(n){
                this.salary = n
            }
        }
        arr.lastname="xyz"
        // document.write('<br>Id is '+arr.id)
        // document.write('<br>Name is '+arr['name'])
        // for(var x in arr){
        //     document.write(x+' is '+arr[x]+"<br>")
        // }
        document.write('<br>Name & age is '+arr.dispData())
        document.write('<br>Current Salary is '+arr.getSalary)
        arr.setSalary = 55004
        document.write('<br>Updated Salary is '+arr.getSalary)
        document.write('<br>Updated Salary is '+arr.salary)
        document.write('<br>Last name is '+arr.lastname)
        delete arr.salary
        document.write('<br>Updated Salary is '+arr.salary)
        
        
