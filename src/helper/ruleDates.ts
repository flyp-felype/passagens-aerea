import dayjs from "dayjs"

export default class rulesDates {
    private dateIda: String[] | undefined
    private dateVolta: String[] | undefined
    constructor(dateIda: String[] | undefined, dateVolta: String[] | undefined) {
        this.dateIda = dateIda ? dateIda : []
        this.dateVolta = dateVolta ? dateVolta : []
    }

    dateVoltaMenorDateIda() {
        //ordeno por data
        if (this.dateIda && this.dateVolta) {
            this.dateIda = this.dateIda?.sort((a, b) => dayjs(a.toString(), 'DD MMM').diff() - dayjs(b.toString(), 'DD MMM').diff())
            this.dateVolta = this.dateVolta?.sort((a, b) => dayjs(a.toString(), 'DD MMM').diff() - dayjs(b.toString(), 'DD MMM').diff())
            //vou checar se a maior data de volta e maior do que a maior data de ida
            const lastPositionIda = this.dateIda.length - 1;
            const lastPositionVolta = this.dateVolta.length - 1;

            if (this.dateIda[lastPositionIda] > this.dateVolta[lastPositionVolta])
                return { success: false, mensagem: 'Datas de volta não pode ser menor do que as de ida' }
            else
                return { success: true }
        } else {
            return { success: true }
        }

    }
    datasVazias() {
        if (this.dateIda && this.dateIda.length === 0 || this.dateVolta && this.dateVolta.length === 0)
            return { success: false, mensagem: 'Favor Preencher as duas datas' }
        else
            return { success: true }
    }

}



