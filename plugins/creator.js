const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: ZxyuuRomm
item.ORG: ytta!
item1.TEL;waid=6281322667077:6281322667077@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:Eitss
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩Bandung Barat;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.URL:https://github.com/romlisuhanda
item4.X-ABLabel:Website
END:VCARD`

const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: XzyuuNaii
item.ORG: ytta!
item1.TEL;waid=6281215710461:6281215710461@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:Eitsss
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩Indonesia;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.URL:https://github.com/romlisuhanda
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER GW', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "itu Nomor Owner", sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
