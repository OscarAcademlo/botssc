const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')









const flowPrincipal = addKeyword(EVENTS.WELCOME)
    
    .addAnswer(
        

        [
            
            '👉 Para pedir un turno sin operadora humana ir a https://sancarlosturnos.com/#!Turn/IndicatePatient',
            '👉 Para pedir un turno con operadora ir a este link http://turnosssc.oscarsoft.me/ ',
            '👉 Para cancelar un turno hacer click aqui https://wa.me/5492944651381',
            '👉 Gracias por contactar con el sanatorio',
            
        ],

        {capture: true,},
        async (ctx,ctxfn)=>{
            ctxfn.flowDinamic("Hola flowDinamic")
        }
        
       
    )


    

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
