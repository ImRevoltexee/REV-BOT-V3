import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` _📚 𝚂𝚑𝚊𝚕𝚘𝚖 𝚜𝚊𝚞𝚍𝚊𝚛𝚊/𝚜𝚊𝚞𝚍𝚊𝚛𝚒𝚔𝚞 , 𝚓𝚊𝚗𝚐𝚊𝚗 𝚕𝚞𝚙𝚊 𝚜𝚎𝚕𝚊𝚕𝚞 𝚋𝚎𝚛𝚜𝚢𝚞𝚔𝚞𝚛 𝚢𝚊😇_\n
*"𝚈𝚘𝚑𝚊𝚗𝚎𝚜 16:33 : 𝚂𝚎𝚖𝚞𝚊𝚗𝚢𝚊 𝚒𝚝𝚞 𝙺𝚞𝚔𝚊𝚝𝚊𝚔𝚊𝚗 𝚔𝚎𝚙𝚊𝚍𝚊𝚖𝚞, 𝚜𝚞𝚙𝚊𝚢𝚊 𝚔𝚊𝚖𝚞 𝚋𝚎𝚛𝚘𝚕𝚎𝚑 𝚍𝚊𝚖𝚊𝚒 𝚜𝚎𝚓𝚊𝚑𝚝𝚎𝚛𝚊 𝚍𝚊𝚕𝚊𝚖 𝙰𝚔𝚞. 𝙳𝚊𝚕𝚊𝚖 𝚍𝚞𝚗𝚒𝚊 𝚔𝚊𝚖𝚞 𝚖𝚎𝚗𝚍𝚎𝚛𝚒𝚝𝚊 𝚙𝚎𝚗𝚐𝚊𝚗𝚒𝚊𝚢𝚊𝚊𝚗, 𝚝𝚎𝚝𝚊𝚙𝚒 𝚔𝚞𝚊𝚝𝚔𝚊𝚗𝚕𝚊𝚑 𝚑𝚊𝚝𝚒𝚖𝚞, 𝙰𝚔𝚞 𝚝𝚎𝚕𝚊𝚑 𝚖𝚎𝚗𝚐𝚊𝚕𝚊𝚑𝚔𝚊𝚗 𝚍𝚞𝚗𝚒𝚊."* `
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: '𝚂𝚑𝚊𝚕𝚘𝚖 𝚜𝚊𝚞𝚍𝚊𝚛𝚊/𝚜𝚊𝚞𝚍𝚊𝚛𝚒𝚔𝚞 , 𝚓𝚊𝚗𝚐𝚊𝚗 𝚕𝚞𝚙𝚊 𝚜𝚎𝚕𝚊𝚕𝚞 𝚋𝚎𝚛𝚜𝚢𝚞𝚔𝚞𝚛 𝚢𝚊😇', sourceUrl: owner, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(syalom|shalom)$/i
handler.command = new RegExp

export default handler