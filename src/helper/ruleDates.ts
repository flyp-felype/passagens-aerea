export default class rulesDates {
    private dateIda: String[] | undefined
    private dateVolta: String[] | undefined
    constructor(dateIda: String[] | undefined, dateVolta: String[] | undefined) {
        this.dateIda = dateIda ? dateIda : []
        this.dateVolta = dateVolta ? dateVolta : []
    }

    dateVoltaMenorDateIda() {
        
        return { sucess: true, mensagem: 'Datas de volta não pode ser menor do que as de ida' }
    }
    datasVazias() {
        if (this.dateIda && this.dateIda.length === 0 || this.dateVolta && this.dateVolta.length === 0)
            return { sucess: false, mensagem: 'Favor Preencher as duas datas' }
        else
            return { sucess: true, mensagem: '' }
    }

}



