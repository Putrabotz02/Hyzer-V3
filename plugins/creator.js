const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Owner Putra Botz
item.ORG: ytta!
item1.TEL;waid=6283840600765:6283840600765@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:Eitss
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩Indonesia;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.URL:https://github.com/Putrabotz02
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
await conn.send2But(m.chat, "Ini Nomor Owner Saya, Jngn Spam yaa", 'Putraa Gans', 'Group Bot', '.gcbot', 'Menunya', '.menu', sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
