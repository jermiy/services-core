import m from 'mithril';

const dashboardOpenQuestion = {
    view(ctrl, args){
        const {question} = args;
        return m('.card.u-marginbottom-30.u-radius.w-form', [
            m('div', [
                m('.w-row', [
                    m('.w-col.w-col-4',
                        m('label.fontsize-smaller[for="name-3"]',
                            'Pergunta'
                        )
                    ),
                    m('.w-col.w-col-8',
                        m('input.positive.text-field.w-input[name="question"][type="text"]', {
                            onchange: m.withAttr('value', (newValue) => question.question = newValue)
                        })
                    )
                ]),
                m('.w-row', [
                    m('.w-col.w-col-4',
                        m('label.fontsize-smaller[for="name-3"]',
                            'Descrição'
                        )
                    ),
                    m('.w-col.w-col-8',
                        m('input.positive.text-field.w-input[type="text"]', {
                            onchange: m.withAttr('value', (newValue) => question.description = newValue)
                        })
                    )
                ])
            ])
        ]);
    }
};

export default dashboardOpenQuestion;