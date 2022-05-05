module.exports =  class RandomMessage{

    randomNumber = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;

    getMessages = ()=> {
        return [
            "Não sou fofoqueiro, apenas relato as coisas que acontecem! Por falar nisso, saiu vídeo novo do canal do MinhaStack", 
            "Eu ia guardar isso pra mim, mas eu não me contenho. Vou ter que falar! Gente, o MinhaStack Lançou um vídeo, que eu adorei, inclusive. Mas oh, não falem que fui eu quem contou beleza? Adoro fofocar com vocês!", 
            "Vocês sabem que eu não gosto de falar da vida dos outros, né?! Mas vocês ficaram sabendo que esse tal de Neto está postando vídeo de novo?! Olhem pra isso:", 
            "Deus que me perdoe, mas a verdade precisa ser dita, Esse Neto está perdendo o controle! Outro vídeo postado... Olhem isso:"
        ]; 
    }

    getRandomMessage = () => {
        let result;
        
        const AllMessages = this.getMessages();
        const max = AllMessages.length;
        
        let index = this.randomNumber(max);
        let message = AllMessages[index];
        
        message == undefined ? result = message[AllMessages.length] : result = message;
        return result;
    }
}
