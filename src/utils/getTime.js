module.exports = class Time {

    getTime = () => {

        let time = new Date();

        let getHour = time.getHours();
        let getMinute = time.getMinutes();
        let getSeconds = time.getSeconds();
        
        let dayInNumber = time.getDay();
        
        let day = this.convertNumberInWeekDay(dayInNumber);

        return `Youtube Watcher Trabalhou em: ${getHour}:${getMinute}:${getSeconds} - Dia da semana: ${day}`;
    }

    convertNumberInWeekDay = number_day => {
        const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
        return days[number_day - 1]
    }
}