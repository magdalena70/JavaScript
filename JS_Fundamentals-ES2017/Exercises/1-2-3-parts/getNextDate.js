function solve(year, month, day){
    let dateStr;
    if(month < 10){
        month = '0' + month;
    }

    if(day < 10){
        day = '0' + day;
    }
    
    dateStr = year + '-' + month +'-'+ day;
    let date = new Date(dateStr);

    Date.prototype.addDay = function(day) {
        this.setDate(this.getDate() + parseInt(day));
        return this;
    };

    Date.prototype.printDate = function(){
        let currYear = this.getFullYear();
        let currMonth = this.getMonth()+1;
        let currDay = this.getDate();
        let result = `${currYear}-${currMonth}-${currDay}`;
        console.log(result);
    }
    
    let nextDate = date.addDay(1);
    nextDate.printDate();
}

solve(1, 1, 1);