const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./consts-func.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, rggold, anotar, getRandom, NodeCache } = require('./consts-func.js');

var { prefix, NickDono } = require('./settings/settings.json');

var LINKS_T = require("./DADOS/links.json");

let sessionStartTime;

const readline = require('readline');
const clc = require('cli-color');
const chalk = require('chalk');

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {")){
return kontol_info1(...arguments);
}};

var qrcode = "./DADOS/QR-CODE";
const msgRetryCounterCache = new NodeCache();


const useStore = !process.argv.includes('--no-store');
const doReplies = !process.argv.includes('--no-reply');
const useMobile = process.argv.includes('--mobile');
const usePairingCode = process.argv.includes('--use-pairing-code');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

async function INC() {
    const { state, saveCreds } = await useMultiFileAuthState(qrcode);
const { version } = await fetchLatestBaileysVersion();
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) });
    
    const archivus = makeWASocket({
        version,
        logger: P({ level: "silent" }),
        usePairingCode,
        mobile: false,
        browser: ["FireFox (linux)"],
        auth: state,
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
        patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message.buttonsMessage || message.listMessage);
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            }, ...message
                        }
                    }
                }
            }
            return message;
        }
});
    
function limparNumero(entrada) {
const numeros = entrada.replace(/\D/g, '');
const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
console.log('numero limpo:', numeroLimpo);
    return numeroLimpo;
}

if (!archivus.authState.creds.registered) {
const phoneNumber = await question(color(`\nDigite seu número do WhatsApp:\nEx: ${clc.bold("+55 27 98178-1902")}\n\n > `, 'yellow'));

const numeroLimpo = limparNumero(phoneNumber);
const code = await archivus.requestPairingCode(numeroLimpo);

console.log(`\nSeu código de conexão é: \n\n ${clc.bold(code)}\n~>\n`);
console.log(`Abra seu WhatsApp, vá em ${clc.bold("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.\n")}`)
}

archivus.ev.process(
async(events) => {
  
if(events["group-participants.update"]){
try {
var ale2 = events["group-participants.update"];
if(!fs.existsSync(`./DADOS/grupos/${ale2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS/grupos/${ale2.id}.json`));

if(ale2.participants[0].startsWith(archivus.user.id.split(':')[0])) return;

try {
var grpmdt = await archivus.groupMetadata(ale2.id);
} catch (e) {
return;
}
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await archivus.groupMetadata(ale2.id): "";
} catch (e) {
return;
}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';

const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(ale2.action == 'add'){
num = ale2.participants[0];
if(nescessario.listanegraG.includes(num)){
await archivus.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban*'});
archivus.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
return;
}}
if(ale2.action == 'remove'){
num = ale2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage));
}
}
if(ale2.action == 'add' && jsonGp[0].listanegra.includes(ale2.participants[0])){
await archivus.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'});
archivus.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && ale2.action === 'add' && !ale2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await archivus.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
archivus.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await archivus.groupMetadata(ale2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !ale2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
ppimg = await archivus.profilePictureUrl(ale2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await archivus.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(ale2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', archivus.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(ale2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
archivus.sendMessage(mdata_2.id, {image: {url:`https://api.bronxyshost.com.br/welcome?titulo=BEM%20VINDO(A)&nome=${ale2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${LINKS_T.fundo1}&grupo=BEM VINDO AO GRUPO ${encodeURI(mdata_2.subject)}`},
mentions: ale2.participants, caption: teks});
DLT_FL(ran);
} else if(ale2.action === 'remove') {
mem = ale2.participants[0];

try {
ppimg = await archivus.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale2.participants[0].split('@')[0])
.replace('#numerobot#', archivus.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(ale2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
fs.writeFileSync(ran, buff);
archivus.sendMessage(mdata_2.id, {image: {url:`https://api.bronxyshost.com.br/welcome?titulo=Adeus&nome=${ale2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${LINKS_T.fundo2}&grupo=SAIU DE ${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: ale2.participants});
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(ale2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', archivus.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(ale2.participants[0].split('@')[0], mdata_2.subject)
}
delay(5000); // 5 segundos de delay
archivus.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
} else if(ale2.action === 'remove') {
var mem = ale2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', archivus.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
//teks = bye2(mem.split('@')[0])
teks = `👋 Até logo, @${mem.split('@')[0]}! Espero vê-lo novamente em breve.`
}
archivus.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
}
}

} catch (e) {
console.log(e)
}
}


if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
//LMR
switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"))
exec(`rm -rf ${qrcode}`);
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
INC()
}
break;

case 'connecting':
console.log(colors.green(`�? System 〕Reconectando / Iniciando - ${date} ${time}`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(
`〔MOMO AYASE BETA _ - CONECTADO COM SUCESSO�?
Desenvolvido por: @Zerophoenix_kkgr
Agradecemos por comprar a MOMO AYASE BETA!
Siga-nos no Instagram: @Zerophoenix_kkgr
Criador: +55 19 98260-7241`))
sessionStartTime = Math.floor(new Date().getTime() / 1000);
break;

default:
break;
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
const startAle = require('./index.js');
sessionStartTim = upsert.messages.some(i => i.messageTimestamp > sessionStartTime)
startAle(upsert, archivus, qrcode, sessionStartTim).then(() => {}).catch((error) => {
console.log('Erro na archivus:', String(error));
});
}


if(events["creds.update"]) {
await saveCreds();
}

})
}
INC().catch(async(e) => {
console.log(colors.red("ERROR EM INICIAR2.JS: "+e))
})

function reiniciarBot(intervaloEmHoras) {
  const intervaloEmMilisegundos = intervaloEmHoras * 3600000;

  setInterval(() => {
    console.log('\n\nReiniciando...\n\n');
    exec("cd DADOS/QR-CODE && rm -rf pre-key* sender* session*", (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao limpar sessões: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Erro ao limpar sessões: ${stderr}`);
        return;
      }
      console.log('Sessões limpas com sucesso.');
    });
  }, intervaloEmMilisegundos);
}

reiniciarBot(3); // 3 em 3 horas