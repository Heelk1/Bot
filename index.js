/*============≠≠==========≠≠=============\\

NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO.. 

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 

//=======================================*/

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, proto, MediaType, Browser, prepareWAMessageMedia, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat } = require('@whiskeysockets/baileys');

//const createSticker = require('./armor/sticker/createSticker');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { fs, axios, crypto, util, P, linkfy, request, psycatgames, sendPoll, cheerio, ms, ffmpeg, webp_mp4, isFiltered, addFilter, qrterminal, exec, spawn, execSync, saveJSON, isJsonIncludes, moment, color, time, hora, date, getBuffer, convertSticker, alerandom, recognize, fetchJson, fetchText, getBase64, createExif, response, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner3, temporizador, chyt, kyun, simih, botoff, colors, comand, rgp, rg_aluguel } = require('./consts-func.js');

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { anotacao, menustalks, infosorteio, menujogos, rpgmenu, menudono, adms, menulogos, menudonwload, menucompleto, menunsfw, efeitos, menuprem, brincadeiras, infocontador, infoduelo, infobemvindo, idiomagtts, infolistanegra, infotransmitir, destrava, destrava2, infopalavrao, infobancarac, configbot, cmd_termux, alteradores, tabela, conselhob, palavrasc, ban, muted, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, infoSystem, vdddsf, sotoy, sabrpg, autorpg, bcbet, minerar, rg_pescaria, pescaria, cavalosrpg, elitepasse, coderpg, galosrpg, roubosrpg, daily, comandos, limitefll, patentes, antispam, rggold, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ } = require('./consts-func.js');

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { antipv3, TOKEN_GPT, isRecolherLink, cmdpremium, msgantipv2, archivussite, visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6} = require("./settings/nescessario.json");

const Links_P = require("./DADOS/links.json");

const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail, imgsigma, imgbeta, imgbaiano, imgbaiana, imgcarioca, imglouco, imglouca, imgsafada, imgsafado, imgmacaco, imgmacaca, imgputa, rnksigma, rnkbeta, rnkbaiano, rnkbaiana, rnkcarioca, rnklouco, rnklouca, rnksafada, rnksafado, rnkmacaco, rnkmacaca, rnkputa } = require("./settings/links_img.json");

var { NomeDoBot, NickDono, prefix } = require("./settings/settings.json");

try {
var recolherLNK = JSON.parse(fs.readFileSync("./armor/funcoes/recolherLNK.json"));
} catch (e) {
fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify([]));
}

const ANT_FL = JSON.parse(fs.readFileSync("./armor/json/ANTI_SPAM.json"));

try {
var SIMI_OFC = JSON.parse(fs.readFileSync("./armor/json/simi.json"));
} catch (e){
fs.writeFileSync("./armor/json/simi.json", JSON.stringify([]));
}

//====================≠≠===============\\
 
var RND_TOKEN_GPT = TOKEN_GPT[Math.floor(Math.random() * TOKEN_GPT.length)];
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

const SNET = "@s.whatsapp.net";

const API_KEY_ALEATORY = "2b479cad";

const APIKEY_DAKIGATEWAY_APIS = 'Momo_ayase'

const API_KEY_JEFF = "Doom77"

function VR_EMJ_LMD(text) {
const regex =/[\u0300-\u036F\u0483-\u0489\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/g;
return regex.test(text);
}


process.on('uncaughtException', function (err) {
console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
console.error(err.stack);
});

// ABAIXO: INÍCIO DE CONEXÃO

async function startAle(upsert, archivus, qrcode, sessionStartTim) {

if(sessionStartTim) {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"),
"") + SNET;

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

const VR_JSON_GLOBAL = fs.existsSync(`./DADOS/grupos/${from}.json`) ? true : false;

const JOGO_D_V = fs?.existsSync(`./armor/tictactoe/db/${from}.json`) ?
JSON?.parse(fs?.readFileSync(`./armor/tictactoe/db/${from}.json`)) : false

if(VR_JSON_GLOBAL) {
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS/grupos/${from}.json`));
}

if(VR_JSON_GLOBAL && jsonGp[0].x9 && info.messageStubType){
try {var groupMetadataa = isGroup ?  await archivus.groupMetadata(from): ""} catch {return}
const groupMemberss = isGroup ? groupMetadataa.participants : '';
const groupAdminss = isGroup ? getGroupAdmins(groupMemberss) : '';
    switch(info.messageStubType){
    case 29:
await delay(100);
paymentDetails = {//nunu
    requestPaymentMessage: {
        currencyCodeIso4217: "",
        amount1000: "1000",
        noteMessage: {
            extendedTextMessage: {
                text: `⚠️ AVISO IMPORTANTE PARA ADMINISTRADORES ⚠️\n\n*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de administrador(a) por *@${info.participant.split("@")[0]}*.`,
                contextInfo: {
                    metionedJid: [info.messageStubParameters, info.participant, groupAdminss], metions: [groupAdminss]
                }
            }
        },
        expiryTimestamp: "KKGR",
        amount: {
            value: "KKGR",
            offset: 1000,
            currencyCode: "KKGR"
        }
    }
};

relayMessage = {
    key: {
        fromMe: false,
        remoteJid: from
    },
    message: paymentDetails
};
archivus.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
    break
    
    case 30:
        await delay(100);
paymentDetails = {
    requestPaymentMessage: {
        currencyCodeIso4217: "",
        amount1000: "1000",
        noteMessage: {
            extendedTextMessage: {
                text: `⚠️ AVISO IMPORTANTE PARA ADMINISTRADORES ⚠️\n\nO(a) administrador(a) *@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) a membro comum por *@${info.participant.split("@")[0]}*.`,
                contextInfo: {
                    metionedJid: [info.messageStubParameters, info.participant, groupAdminss], metions: [groupAdminss]
                }
            }
        },
        expiryTimestamp: "KKGR",
        amount: {
            value: "KKGR",
            offset: 1000,
            currencyCode: "KKGR"
        }
    }
};

relayMessage = {
    key: {
        fromMe: false,
        remoteJid: from
    },
    message: paymentDetails
};
archivus.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
    break
  }
}

if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';

if(visualizarmsg) {
await archivus.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const enquete = (jid, name = '', values = [], selectableCount = 1) => { return archivus.sendMessage(jid, { poll: { name, values, selectableCount }}) }   
      
archivus.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return archivus.sendMessage(jid, { poll: { name, values, selectableCount }}) }
//==============(BODY)================\\

const extractMessageContent = (info = {}) => {
if(info?.message) {
const {
conversation = "", 
viewOnceMessageV2 = {}, 
imageMessage = {}, 
videoMessage = {}, 
extendedTextMessage = {}, 
viewOnceMessage = {}, 
documentWithCaptionMessage = {}, 
buttonsMessage = {}, 
buttonsResponseMessage = {}, 
listResponseMessage = {}, 
templateButtonReplyMessage = {}, 
interactiveResponseMessage = {},
requestPaymentMessage = {},
eventMessage,
pollCreationMessageV3 = {}
} = info?.message || {};

const captions = [viewOnceMessageV2?.message?.imageMessage?.caption, viewOnceMessageV2?.message?.videoMessage?.caption, imageMessage?.caption, videoMessage?.caption, extendedTextMessage?.text, viewOnceMessage?.message?.videoMessage?.caption, viewOnceMessage?.message?.imageMessage?.caption, documentWithCaptionMessage?.message?.documentMessage?.caption, buttonsMessage?.imageMessage?.caption, pollCreationMessageV3?.name, eventMessage?.name, eventMessage?.location?.name, requestPaymentMessage?.noteMessage?.extendedTextMessgae?.text ];

const body = [info?.text, conversation, ...captions, eventMessage?.name, eventMessage?.location?.name, requestPaymentMessage?.noteMessage?.extendedTextMessage?.text, buttonsResponseMessage?.selectedButtonId, listResponseMessage?.singleSelectReply?.selectedRowId, templateButtonReplyMessage?.selectedId, interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ? JSON.parse(interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : ""].filter(Boolean).join("");

const Procurar_String = [conversation, ...captions, ...body].filter(Boolean).join("");
return { body, Procurar_String };
}
return { body: "", Procurar_String: "" };
};

const { body, Procurar_String } = extractMessageContent(info);

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if (isGroup && VR_JSON_GLOBAL) {
if (jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos.find(p => String(body)?.trim()?.startsWith(p)) || jsonGp[0].prefixos[0];
} else {
var prefix = setting.prefix;
}
} else if (!isGroup || (isGroup && !VR_JSON_GLOBAL)) {
var prefix = setting.prefix;
}

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = info?.message?.conversation || info?.message?.extendedTextMessage?.text || '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\
try {var groupMetadata = isGroup ?  await archivus.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +SNET: info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await archivus.user.id.split(':')[0]+SNET;
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : '';

const groupMembers = isGroup ? groupMetadata.participants : '';

const isnit = nit.includes(sender);

const issupre = supre.includes(sender);

const ischyt = chyt.includes(sender);

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';

const somembros = isGroup ? getMembros(groupMembers) : '';

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") +
SNET || isnit;

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`];

//===========(Res_Aguarde)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

// ==========[ CASAMENTO ]==========\\
const casamento1 = JSON.parse(fs.readFileSync("./armor/casamento/casamento1.json"))

const casamento2 = JSON.parse(fs.readFileSync("./armor/casamento/casamento2.json"))

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)];
//========================================\\
async function updateGroupSettingWithRetry(groupId, setting, retries = 3) {
for (let attempt = 0; attempt < retries; attempt++) {
try {
await archivus.groupSettingUpdate(groupId, setting);
return; 
} catch (error) {
if (String(error).includes("not-authorized")) {
throw new Error("not-authorized");
}
if (attempt === retries - 1) {
throw error;
}
await sleep(1000);
}
}
}
//================= Funções de Grupo 🥋 =============//

const dirGroup = `./DADOS/grupos/${from}.json`;

const nescj = "./settings/nescessario.json";

const data_IDGP = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false,
sistemGold: false, visuUnica: false, 
registrarFIGUS: false, soadm: false,
rg_aluguel: false,
listanegra: [], advertir: [], prefixos: ["!"],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
minerar_gold: [], ausentes: [], forca_inc: false, 
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a)",
legendasaiu: 0
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false
}];

if(isGroup && !fs.existsSync(dirGroup)){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}

try {
var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}

//=======(ADMS/DONO/ETC..CONST)========\\

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';

const quoted = info.quoted ? info.quoted : info;

const isBot = info.key.fromMe ? true : false;

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre ||
ischyt;

dfndofc = setting.numerodono+SNET;

const DonoOficial = dfndofc.includes(sender) ;

const isButtons = nescessario.botoes

const isPremium = premium.includes(sender) || SoDono;

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;

const isGroupAdmins = groupAdmins.includes(sender) || SoDono

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg

const isVerificado = nescessario.verificado

const isAudioMenu = nescessario.menu_audio

const isAntiPv2 = nescessario.antipv2

const isAntiPv3 = nescessario.antipv3

const isConsole = nescessario.consoleoff

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const isAntiPv = nescessario.antipv

const isAnticall = nescessario.anticall

//============(FUNÇÕES)============\\


const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm: undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAntigolpes = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isBotao = true

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isSabCityOFF = !JSON.stringify(autorpg).includes(from) || autorpg[autorpg.map(i => i.id).indexOf(from)].rpg
//=======================================\\

var Res_Aguarde = enviarmen

var Res_SoGrupo = "Este comando está disponível apenas para uso em grupos. Por favor, utilize-o em um grupo para que funcione corretamente.";

var Res_SoAdm = "Apenas Administradores do grupo têm permissão para utilizar este comando. Verifique suas permissões ou entre em contato com um administrador.";

var Res_SoDono = "Este comando é exclusivo para o meu dono. Se você não é o dono, não poderá utilizá-lo.";

var Res_VipP = "Acesso Restrito\n" +
"Este comando é exclusivo para usuários VIP!\n\n" +
"Para saber mais sobre como obter acesso VIP e desbloquear todos os recursos,\n" +
"entre em contato diretamente com o dono do bot usando o comando /criador.";

var Res_BotADM = "Para utilizar este comando, o Bot precisa ser Administrador do grupo.\n" +
"Por favor, verifique as permissões do Bot e, se necessário, conceda-lhe privilégios de administrador.";

var Res_SoModoBN = `Este comando só pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado.\n` +
"Para desativar, basta utilizar o comando ${prefix}modobrincadeira 0.";

var Res_SoModONSFW = "É necessário que o comando seja ativado por um adm\nExemplo: /modonsfw 1";

//==========(VERIFICADO)===============\\

if(isVerificado) {
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`}}}
} else {
var selo = info
}

var seloMetaTokyo = { key: { fromMe: false, participant: `13135550002@s.whatsapp.net`, ...(from ? { remoteJid: "13135550002" } : {}) }, message: { 
contactMessage: { 
displayName: `${pushname}`,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;nadaAqui;;;\nFN:nadaAqui\nX-WA-BIZ-NAME:nadaAqui\nX-WA-BIZ-DESCRIPTION:nada aqui\nX-WA-BIZ-AUTOMATED-TYPE:3p_full\nORG:nada aqui;\nTEL;type=CELL;type=VOICE;waid=13135550002:+1 (313) 555-0002\nEND:VCARD`
}, 
} }

var seloctt = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}

//selo ARCHIVUS
var selomomoayase = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": `👑 MOMO AYASE BETA 👑`, "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:XL;👑 MOMO AYASE BETA 👑,;;;\nFN:👑 MOMO AYASE BETA 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
var selomomoayase = info

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + SNET

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt

////////////////////////////////////////////

var isUrl = (url) => {
return linkfy.find(url)[0]?.isLink
}

if(!isCmd && info.key.fromMe) return

const reply = (texto) => {
archivus.sendMessage(from, { text: texto, contextInfo: {
forwardingScore: 100000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363362355300503@newsletter"}
}, 
mentions: [menc_os2],
mentions: [sender]
});
}

const replyMod = async (tetoo, titee, linko, paond) => {
 archivus.sendMessage(from, {text: tetoo, contextInfo: {externalAdReply: {title: titee, thumbnail: await getBuffer(linko), mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: paond}}}, {quoted: seloMetaTokyo})
 }

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
let tempo;
if (time2 > "00:00:00" && time2 < "05:00:00") {
tempo = 'Boa madrugada';
} else if (time2 >= "05:00:00" && time2 < "12:00:00") {
tempo = 'Bom dia';
} else if (time2 >= "12:00:00" && time2 < "18:00:00") {
tempo = 'Boa tarde';
} else {
tempo = 'Boa noite';
}

const sendSticker = (from, filename, info) => {
archivus.sendMessage(from, {sticker: {url: fileName}}, {quoted: seloMetaTokyo})
}

const sendImage = (ytb) => {
archivus.sendMessage(from, {image: {url: ytb}}, {quoted:seloMetaTokyo})
}


const sendMess = (hehe, ytb) => {
archivus.sendMessage(hehe, {text: ytb})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? archivus.sendMessage(from, {text: teks.trim(), mentions: memberr}) : archivus.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+SNET)
}}
archivus.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+SNET)
}}
archivus.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
archivus.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await archivus.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
archivus.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
archivus.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
archivus.sendMessage(from, {text: "Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador..."})
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
archivus.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
archivus.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack =`⚝ ⇝ Grupo:\n${groupName}`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(archivus, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack =`⚝ ⇝ Grupo:\n${groupName}`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(archivus, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./armor/json/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./armor/json/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

archivus.sendMessage(from, {text: txt}, {quoted: seloMetaTokyo})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}
mention(`
╭─────────────
┊ Registro de ausência.
┊ 
┊ ADM: @${blak.id.split("@")[0]}
┊   
╰────◉  ◊

↺➤ Mensagem: ${blak.msg}

 ─────────────`)
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-ale") || info.key.fromMe && budy.includes("reiniciar-ale")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./iniciar.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
archivus.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info}).catch(e => {
return reply("Erro..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

const gerarPessoa = require('./armor/json/json_random/geradorPessoa');
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////
if(isConsole) {
if(isGroup && info.message?.reactionMessage?.text) {
console.log(colors.brightGreen(`
╭───────────MOMO AYASE BETA────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${isGroup ? colors.brightMagenta("GRUPO"): colors.brightMagenta("PRIVADO")} 〕${isGroup ? `〔 ${colors.cyan(groupName)} 〕`: ""}
│
│ 〔 REAÇÃO 〕: 〔 ${info.message.reactionMessage.text} 〕
│
╰───────────MOMO AYASE BETA───────────`))  
} else if(isGroup && !isCmd) {
console.log(colors.brightGreen(`
╭───────────MOMO AYASE BETA────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
│
╰───────────MOMO AYASE BETA───────────`))
} else if(isCmd && !isGroup) {
archivus.sendPresenceUpdate('composing', from)
console.log(colors.brightGreen(`
╭───────────MOMO AYASE BETA────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.red("PRIVADO")} 〕 
│
│ 〔 COMANDO 〕 :「 ${command} 」
│
╰───────────MOMO AYASE BETA───────────  `)) 
} else if(isCmd && isGroup) {
archivus.sendPresenceUpdate('composing', from)
console.log(colors.brightGreen(`
╭───────────MOMO AYASE BETA────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕: ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
│
│ 〔 COMANDO 〕:「 ${command} 」
│
╰───────────MOMO AYASE BETA───────────`))
} else {
console.log(colors.brightGreen(`
╭───────────MOMO AYASE BETA────────────
│
│ 〔 ${colors.brightYellow("USUÁRIO")} 〕 : ${pushname}
│
│ 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
│
│ 〔 ${colors.red("PRIVADO")} 〕
│
╰───────────MOMO AYASE BETA───────────`))  
}
}
const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}
const toUpdateDay = JSON.parse(fs.readFileSync("./database/SystemRPG/attday.json"));
const datinhadodia = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

if(body != undefined && isGroup && isSabCityOFF && VerificarJSON(sabrpg, sender)) {
var i8 = sabrpg.map(i => i.id).indexOf(sender)
if(!VerificarJSON(toUpdateDay, sender)) {
toUpdateDay.push({id: sender, data: datinhadodia})
fs.writeFileSync(`./database/SystemRPG/attday.json`, JSON.stringify(toUpdateDay))
sabrpg[i8].money += 25
fs.writeFileSync(`./database/SystemRPG/sabrpg.json`, JSON.stringify(sabrpg))
mention(`‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
Olá *@${sender.split("@")[0]}*, você recebeu *R$ 25.00* pela sua primeira mensagem do dia. Além disso, diversos jogos para se entreter no grupo! 🤑💱\n——\n• Use o comando *${prefix}Menucity*, lhe desejo boa sorte e divirta-se!`)
} else {
var AB = toUpdateDay.map(i => i.id).indexOf(sender)
if(toUpdateDay[AB].data != datinhadodia) {
toUpdateDay[AB].data = datinhadodia
fs.writeFileSync(`./database/SystemRPG/attday.json`, JSON.stringify(toUpdateDay))
sabrpg[i8].money += 25
fs.writeFileSync(`./database/SystemRPG/sabrpg.json`, JSON.stringify(sabrpg))
mention(`‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
Olá *@${sender.split("@")[0]}*, você recebeu *R$ 25.00* pela sua primeira mensagem do dia. Além disso, diversos jogos para se entreter no grupo! 🤑💱\n——\n• Use o comando *${prefix}Menucity*, lhe desejo boa sorte e divirta-se!`)
} 
}
}


//======(JOGO-DA-VELHA)=======(Função)===\\

async function joguinhodavelha() {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(JOGO_D_V != false) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "S" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace(SNET, "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "N" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace(SNET, "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace(SNET, "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;

mention(chatWon)
setTimeout( () => {
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado'));
}
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou 20 Golds por ter ganhado o jogo da velha🎉...*_`)   
if(JSON.stringify(rggold).includes(from)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
if(JSON.stringify(rggold[i2].usus).includes(sender)) {
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += 20
Goldrgs(rggold)
}}
DLT_FL(`./armor/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatMove);
}
} 
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if (Procurar_String.includes("chat.whatsapp.com/")) {
if (isBot) return;
let link_dgp;
try {
link_dgp = await archivus?.groupInviteCode(from);
} catch {
link_dgp = "000000";
}
if (IS_DELETE) {
await archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await archivus.groupParticipantsUpdate(from, [sender], 'remove');
const isPayment = type == 'requestPaymentMessage'
if (isPayment) {
const clear = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`
const clear2 = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
reply(`*GRUPO FECHADO PARA LIMPEZA* 🗑️`)
archivus.groupSettingUpdate(from, 'announcement')
const interval = 1000 
for (let i = 0; i < 20; i++) {
setTimeout(() => {
if (i === 19) {
archivus.sendMessage(from, { text: clear2 })
} else {
archivus.sendMessage(from, { text: clear })
}
}, i * interval)
}
setTimeout(() => {
const mentionedJidList = groupMembers.map(member => member.id);
archivus.sendMessage(from, { text: `*LIMPEZA CONCLUÍDA* ✅`, contextInfo: {mentionedJid: mentionedJidList}})
archivus.groupSettingUpdate(from, 'not_announcement')
}, 20 * interval)
}
const logGroupId = '120363315501315360@g.us';
const logMessage = `🚨 Alerta de Link Detectado! 🚨

Usuário: @${sender.split('@')[0]}
Link Enviado: ${Procurar_String}
Grupo: ${groupName}
Data: ${date}
Hora: ${hora}`;
await archivus.sendMessage(logGroupId, { text: logMessage, mentions: [sender] });
}
}

const groupIdscount = [];
for (let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

if (isCmd && isFiltered(sender) && !isGroup && !info.key.fromMe) {
return reply(`*_「 ❗ 」Flood detectado, espere 5 segundos_*`);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}
///======= ANTI-SPAM GP ======///
if (isCmd && isFiltered(sender) && isGroup && !info.key.fromMe) {
return reply(`*_「 ❗ 」Flood detectado, espere 5 segundos_*`);
}

if (isCmd) {
addFilter(sender)
}


//========(CONTADOR-DE-MENSAGENS)========\\ LMR
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
    var ind = groupIdscount.indexOf(from)
    for(let obj of countMessage[ind].numbers) { numbersIds.push(obj.id) }
    if(numbersIds.indexOf(sender) >=0) {
        var indnum = numbersIds.indexOf(sender)
        var RSM_CN = countMessage[ind].numbers[indnum]

        // Contagem de mensagens normais e comandos
        type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
        type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
        type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
        
        // Contagem de tipos específicos de mídia
        RSM_CN.figus += type == "stickerMessage" ? 1 : 0
        RSM_CN.videos += type == "videoMessage" ? 1 : 0
        RSM_CN.audios += type == "audioMessage" ? 1 : 0
        RSM_CN.imagens += type == "imageMessage" ? 1 : 0
        RSM_CN.imagens_viewonce += type == "viewOnceMessage" ? 1 : 0
        RSM_CN.documentos += type == "documentMessage" ? 1 : 0

        fs.writeFileSync('./DADOS/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
    } else {
        // Inicializa contagem para um novo usuário no grupo
        const messages = isCmd ? 0 : 1
        const cmd_messages = isCmd ? 1 : 0
        const figus = type == "stickerMessage" ? 1 : 0
        const videos = type == "videoMessage" ? 1 : 0
        const audios = type == "audioMessage" ? 1 : 0
        const imagens = type == "imageMessage" ? 1 : 0
        const imagens_viewonce = type == "viewOnceMessage" ? 1 : 0
        const documentos = type == "documentMessage" ? 1 : 0

        countMessage[ind].numbers.push({
            id: sender,
            messages: messages,
            cmd_messages: cmd_messages, 
            aparelho: adivinha, 
            figus: figus,
            videos: videos,
            audios: audios,
            imagens: imagens,
            imagens_viewonce: imagens_viewonce,
            documentos: documentos
        })

        fs.writeFileSync('./DADOS/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
    }
} else if(isGroup) {
    // Inicializa contagem para um novo grupo
    countMessage.push({
        groupId: from,
        numbers: [{
            id: sender,
            messages: 1,
            figus: type == "stickerMessage" ? 1 : 0,
            cmd_messages: isCmd ? 1 : 0, 
            aparelho: adivinha,
            videos: type == "videoMessage" ? 1 : 0,
            audios: type == "audioMessage" ? 1 : 0,
            imagens: type == "imageMessage" ? 1 : 0,
            imagens_viewonce: type == "viewOnceMessage" ? 1 : 0,
            documentos: type == "documentMessage" ? 1 : 0
        }]
    })

    fs.writeFileSync('./DADOS/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return archivus.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return archivus.sendMessage(from, {text: bang}, {quoted: seloMetaTokyo})
}

archivus.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}
//======(ANTI-IMAGEM)========\\
if(isAntiImg && !isGroupAdmins && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(dataGp[0].legenda_imagem != "0") {
archivus.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: seloMetaTokyo})  
}
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && !isGroupAdmins && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
archivus.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloMetaTokyo})
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && !isGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(dataGp[0].legenda_documento != "0") {
archivus.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: seloMetaTokyo}) 
}
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
await archivus.sendMessage(from, {
    text: `[❗] *Ação de Banimento* Executada!*\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) foi banido do grupo *${groupMetadata.subject}* por enviar um documento não autorizado. ❌\n\nLembramos que a violação das regras do grupo resulta em punições imediatas.`
});
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok','facebook','instagram','twitter','ytmp3','ytmp4','play', 'play_audio', 'play_video', 'play').some(item => item === command)

if (isUrl(Procurar_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if (Procurar_String.includes("chat.whatsapp.com")) {
        var link_dgp = await archivus?.groupInviteCode(from);

        // Remove a exceção para link do próprio grupo
        archivus.groupParticipantsUpdate(from, [sender], 'remove');
    }

    if (isCmd && isTrueFalse) return;

    var OSINF_K = [];
    await OSINF_K.push(info.key.id);
    archivus.groupSettingUpdate(from, 'announcement');

    setTimeout(() => {
        archivus.groupSettingUpdate(from, 'not_announcement');
    }, 1500);

    setTimeout(async () => {
        for (var i of OSINF_K) {
            archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: i, participant: sender } });
            OSINF_K = [];
        }
    }, 500);
     await archivus.sendMessage(from, {
    text: `[❗] *Ação de Banimento* Executada!*\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) foi banido do grupo *${groupMetadata.subject}* por enviar um link não autorizado. ❌\n\nLembramos que a violação das regras do grupo resulta em punições imediatas.`
});
    var groupMemberIds = new Set(groupMembers.map(i => i.id));
    if (!groupMemberIds.has(sender)) return;
    archivus.groupParticipantsUpdate(from, [sender], 'remove');
}

// ANTI GOLPES ======================>

if(isAntigolpes && budy2.toString().match(/(⚠️|⏳|🤝🏻|🥇|🚨|💠|📲|🏦|✅|⚡|🔒|📥|📤)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(⚠️|⏳|🤝🏻|🥇|🚨|💠|📲|🏦|✅|⚡|🔒|📥|📤)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
await archivus.sendMessage(from, {
    text: `[❗] *Ação de Banimento* Executada!*\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) foi banido do grupo *${groupMetadata.subject}* por enviar uma mensagem suspeitamente seja golpe não autorizado. ❌\n\nLembramos que a violação das regras do grupo resulta em punições imediatas.`
});
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
await archivus.sendMessage(from, {
    text: `[❗] *Ação de Banimento* Executada!*\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) foi banido do grupo *${groupMetadata.subject}* por enviar uma mensagem que seja venda notas falsa não autorizado. ❌\n\nLembramos que a violação das regras do grupo resulta em punições imediatas.`
});
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ==============================>

archivus.sendInteractiveIMG = async(imageDir, ChatID, definedText = '', footer = '', contextMessageInfo = {}, buttonsParams = {}) => {
    try {
        create = await prepareWAMessageMedia({image: fs.readFileSync(imageDir)}, {upload: archivus.waUploadToServer});
        imageCreate = create.imageMessage;
        await archivus.relayMessage(ChatID, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: imageCreate}, headerType: 'IMAGE', body: {text: definedText}, footer: {text: footer}, contextInfo: contextMessageInfo, nativeFlowMessage: buttonsParams}}, {});
     } catch(errorMessage) {
         return reply(String(errorMessage));
    }
 }
 
//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && !isGroupAdmins && type == 'videoMessage') {
if(dataGp[0].legenda_video == "0") {
archivus.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloMetaTokyo})
} else {
archivus.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: seloMetaTokyo})  
}
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
await archivus.sendMessage(from, {
    text: `[❗] *Ação de Banimento* Executada!*\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) foi banido do grupo *${groupMetadata.subject}* por enviar um vídeo não autorizado. ❌\n\nLembramos que a violação das regras do grupo resulta em punições imediatas.`
});
if(!JSON.stringify(groupMembers).includes(sender)) return
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && !isGroupAdmins && type == 'audioMessage') {
archivus.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloMetaTokyo})
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
await archivus.sendMessage(from, {
    text: `[❗] *Ação de Banimento* Executada!*\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) foi banido do grupo *${groupMetadata.subject}* por enviar um áudio não autorizado. ❌\n\nLembramos que a violação das regras do grupo resulta em punições imediatas.`
});
if(!JSON.stringify(groupMembers).includes(sender)) return
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}


//========(ANTI-PV-QUE-BLOQUEIA)======\\
var BLC_CL = []
if(isAntiPv && !BLC_CL.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
reply("🔔 Aviso Importante:\nO acesso ao privado está temporariamente desativado. Se você deseja alugar o bot para uso em grupos, entre em contato com o suporte.\n\nO aluguel do bot custa R$ 20 por mês. No entanto, você pode se juntar à aliança KKGR e ter acesso ao bot de forma gratuita, desde que seu grupo tenha pelo menos 120 membros e atenda a outros critérios.\n\n🤖 Este bot atua como um assistente automatizado para grupos. Para mais informações sobre como alugar ou utilizar o bot, entre em contato com o suporte.\n\nSuporte: https://wa.me/5519982607241\nCriador: https://wa.me/5519982607241\nAliança KKGR: https://linktr.ee/aliancekkgr\nGostaria de fazer parte da KKGR: http://bit.ly/3Yoy2RS")
setTimeout(async () => {
archivus.updateBlockStatus(sender, 'block')
}, 2000)
return
}
BLC_CL.push(sender)
}
//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
archivus.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))}}}}

//=========(ANTIPV-QUE-SÓ-FALA)==========\\
var MSG_ANTPV2 = []
if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt &&
!info.key.fromMe && isAntiPv2 && !MSG_ANTPV2.includes(sender)) {
reply(msgantipv2)
MSG_ANTPV2.push(sender)
}

//======================================\\

// ANTI PV QUE IGNORA
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {
return
}

// ANTI_LIGAR \\
var BLC_ANTCL = []
if(!isGroup && isAnticall && !BLC_ANTCL.includes(sender)) {
archivus.ws.on('CB:call', async (B) => {
if(B.content[0].tag == 'offer') {
archivus.sendMessage(B.content[0].attrs['call-creator'], { text: "🔔 Aviso Importante:\nO acesso ao privado está temporariamente desativado. Se você deseja alugar o bot para uso em grupos, entre em contato com o suporte.\n\nO aluguel do bot custa R$ 20 por mês. No entanto, você pode se juntar à aliança KKGR e ter acesso ao bot de forma gratuita, desde que seu grupo tenha pelo menos 120 membros e atenda a outros critérios.\n\n🤖 Este bot atua como um assistente automatizado para grupos. Para mais informações sobre como alugar ou utilizar o bot, entre em contato com o suporte.\n\nSuporte: https://wa.me/5519982607241\nCriador: https://wa.me/5519982607241\nAliança KKGR: https://linktr.ee/aliancekkgr\nGostaria de fazer parte da KKGR: http://bit.ly/3Yoy2RS" }).then(() => { 
archivus.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
})
}
})
BLC_ANTCL.push(sender)
}

//======================================\\ LMR


var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(isGroup && JSON.stringify(countMessage).includes(from) && JSON.stringify(countMessage[i9]).includes(sender)) {

try {
var qnt_msg = countMessage[idgrupo].numbers[idusu].messages
} catch {
var qnt_msg = 0  
}

var patente = "Aspirante"
 
var level_up = 0

if(qnt_msg >= 0 && qnt_msg < 20){var patente = "Aspirante"; var level_up = 0};if(qnt_msg >= 20 && qnt_msg < 50){var patente = "Recruta"; var level_up = 1}; if(qnt_msg >= 50 && qnt_msg < 100){var patente = "Soldado"; var level_up = 2}; if(qnt_msg >= 100 && qnt_msg < 200){var patente = "Cabo"; var level_up = 3}; if(qnt_msg >= 200 && qnt_msg < 300){var patente = "Sargento"; var level_up = 4}; if(qnt_msg >= 300 && qnt_msg < 400){var patente = "Sargento I"; var level_up = 5}; if(qnt_msg >= 400 && qnt_msg < 500){var patente = "Sargento II"; var level_up = 6}; if(qnt_msg >= 500 && qnt_msg < 600){var patente = "Sargento III"; var level_up = 7}; if(qnt_msg >= 600 && qnt_msg < 700){var patente = "Sargento IV"; var level_up = 8}; if(qnt_msg >= 700 && qnt_msg < 800){var patente = "Sargento V"; var level_up = 9}; if(qnt_msg >= 800 && qnt_msg < 900){var patente = "Sargento VI"; var level_up = 10}; if(qnt_msg >= 900 && qnt_msg < 1000){var patente = "Sargento VII"; var level_up = 11}; if(qnt_msg >= 1000 && qnt_msg < 1100){var patente = "Sargento VII"; var level_up = 12}; if(qnt_msg >= 1100 && qnt_msg < 1200){var patente = "Sargento VIII"; var level_up = 13}; if(qnt_msg >= 1200 && qnt_msg < 1500){var patente = "Sargento IX"; var level_up = 14}; if(qnt_msg >= 1500 && qnt_msg < 2000){var patente = "Sargento X"; var level_up = 15}; if(qnt_msg >= 2000 && qnt_msg < 2500){var patente = "Tenente I"; var level_up = 16}; if(qnt_msg >= 2500 && qnt_msg < 2600){var patente = "Tenente II"; var level_up = 17}; if(qnt_msg >= 2600 && qnt_msg < 2700){var patente = "Tenente III"; var level_up = 18}; if(qnt_msg >= 2700 && qnt_msg < 2800){var patente = "Tenente III"; var level_up = 19}; if(qnt_msg >= 2800 && qnt_msg < 2900){var patente = "Tenente IV"; var level_up = 20}; if(qnt_msg >= 2900 && qnt_msg < 3000){var patente = "Tenente V"; var level_up = 21}; if(qnt_msg >= 3000 && qnt_msg < 3200){var patente = "Capitão I"; var level_up = 22}; if(qnt_msg >= 3200 && qnt_msg < 3400){var patente = "Capitão II"; var level_up = 23}; if(qnt_msg >= 3400 && qnt_msg < 3800){var patente = "Capitão III"; var level_up = 24};if(qnt_msg >= 3800 && qnt_msg < 4000){var patente = "Capitão IV"; var level_up = 25}; if(qnt_msg >= 4000 && qnt_msg < 5000){var patente = "Capitão V"; var level_up = 26}; if(qnt_msg >= 5000 && qnt_msg < 5500){var patente = "Major I"; var level_up = 27}; if(qnt_msg >= 5500 && qnt_msg < 6000){var patente = "Major II"; var level_up = 28}; if(qnt_msg >= 6000 && qnt_msg < 6500){var patente = "Major III"; var level_up = 29}; if(qnt_msg >= 6500 && qnt_msg < 8000){var patente = "Major IV"; var level_up = 30}; if(qnt_msg >= 8000 && qnt_msg < 9000){var patente = "Major V"; var level_up = 31};if(qnt_msg >= 9000 && qnt_msg < 10000){var patente = "Tenente C I"; var level_up = 32};if(qnt_msg >= 10000 && qnt_msg < 11000){var patente = "Tenente C II"; var level_up = 33};if(qnt_msg >= 11000 && qnt_msg < 12000){var patente = "Tenente C II"; var level_up = 34};if(qnt_msg >= 12000 && qnt_msg < 13000){var patente = "Tenente C III"; var level_up = 35};if(qnt_msg >= 13000 && qnt_msg < 15000){var patente = "Tenente C IV"; var level_up = 36};if(qnt_msg >= 15000 && qnt_msg < 11000){var patente = "Tenente C V"; var level_up = 37};if(qnt_msg >= 17000 && qnt_msg < 20000){var patente = "Coronel I"; var level_up = 38}; if(qnt_msg >= 20000 && qnt_msg < 23000){var patente = "Coronel II"; var level_up = 39}; if(qnt_msg >= 25000 && qnt_msg < 28000){var patente = "Coronel III"; var level_up = 40}; if(qnt_msg >= 28000 && qnt_msg < 30000){var patente = "Coronel IV"; var level_up = 41}; if(qnt_msg >= 30000 && qnt_msg < 35000){var patente = "Coronel V"; var level_up = 42}

if(isLevelingOn && !type == "stickerMessage") {
switch(qnt_msg) {
case 20: case 50: case 100: case 200:case 300: case 400:
case 500: case 600: case 700: case 800: case 900: case 1000:
case 1100: case 1200: case 1500: case 2000: case 2500: case 2600:
case 2700: case 2800: case 2900: case 3000: case 3200: case 3400:
case 3600: case 3800: case 4000: case 5000: case 5500: case 6000:
case 6500: case 8000: case 9000: case 10000: case 11000: case 12000: 
case 13000: case 15000: case 17000: case 20000: case 23000: 
case 25000: case 28000: case 30000:
archivus.sendMessage(from, {text: `
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
✥ Parabéns: @${sender.split("@")[0]}

Você upou de level e também de patente por completar ${qnt_msg} mensagens e recebeu 25 Golds, veja as informações abaixo..\n
✧ Patente: ${patente}

✧ Level: ${level_up}

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
, mentions: [sender]}) 
if(JSON.stringify(rggold).includes(from)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
if(JSON.stringify(rggold[i2].usus).includes(sender)) {
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += 25
Goldrgs(rggold)
}}
break
}
}
}


if(isGroup) {
if(!JSON.stringify(patentes).includes(from)) {
patentes.push({
grupoID: from, 
usus: [{
id: sender, 
level_usu: level_up,
patente_usu: patente}]})
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
var i8 = patentes.map(i => i.grupoID).indexOf(from)
if(!JSON.stringify(patentes[i8].usus).includes(sender)) {
patentes[i8].usus.push({
id: sender, 
level_usu: level_up,
patente_usu: patente})
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
var i9 = patentes[i8].usus.map(i => i.id).indexOf(sender)
if(patentes[i8]?.usus[i9]?.patente_usu != patente) {
patentes[i8].usus[i9].patente_usu = patente
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
if(patentes[i8].usus[i9].level_usu != level_up) {
patentes[i8].usus[i9].level_usu = level_up
fs.writeFileSync("./DADOS/patentes.json", JSON.stringify(patentes))
}
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
archivus.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
archivus.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
function Goldrgs(index){
fs.writeFileSync("./armor/funcoes/golds.json", JSON.stringify(index, null, 2) + '\n')
}

if(!JSON.stringify(rggold).includes(from)) {
rggold.push({grupo: from, usus: []})
Goldrgs(rggold)
}

if(isGroup && IS_sistemGold) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
var blt = []; 
for (i of rggold[i2].usus){blt.push(i.id)}

if(blt.indexOf(sender) < 0) {
rggold[i2].usus.push({id: sender, Golds: 0, data: 0, desligar: false})
Goldrgs(rggold)
}; await sleep(100)

if(JSON.stringify(rggold).includes(from) && JSON.stringify(rggold[i2].usus).includes(sender)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)

var AddGold = async(qnt, usu) => {
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds += qnt
Goldrgs(rggold)
archivus.sendMessage(from, {text: `Parabéns: > @${usu.split("@")[0]} você ganhou ${qnt} Golds.. `, mentions: [usu]})
}

var ConsultarGold = async(usu) => {
archivus.sendMessage(from, {text: `Olá @${usu.split("@")[0]} você contém ${rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds} Golds, breve você será bem mais rico que Elon Musk, só confia..`, mentions: [usu]})
}

var TirarGold = async(qnt, usu) => {
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
Goldrgs(rggold)
archivus.sendMessage(from, {text: `Que pena... @${usu.split("@")[0]} você perdeu ${qnt} Golds.. `, mentions: [usu]})
}

var ConsumirGold = async(qnt, usu) => {
if(rggold[i2].usus[i3].Golds < qnt) return reply("Você não tem Golds suficiente para utilizar este comando..")
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
Goldrgs(rggold)
mention(`${tempo} @${sender.split("@")[0]}  após o uso do comando ${command} foi consumido ${qnt} Golds dos seus > ${rggold[i2].usus[i3].Golds+qnt} Golds`)
}

var QNTD_GOLDS = rggold[i2].usus[i3].Golds

var dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(rggold[i2].usus[i3].desligar == false) {
async function PR_Gold() {
mention(`✫ Parabéns @${sender.split("@")[0]} - 
Você recebeu 10 Golds pela primeira mensagem do dia e também 0/2 para mineração de área, utilize o comando ${prefix}minerar_gold 2 vez, ${tempo} ✫`)
rggold[i2].usus[i3].data = dattofc
rggold[i2].usus[i3].desligar = true
rggold[i2].usus[i3].Golds += 10
Goldrgs(rggold)
if(!JSON.stringify(dataGp[0].minerar_gold).includes(sender)) {
dataGp[0].minerar_gold.push({id: sender, ChanceG: 0})
setGp(dataGp)}
await sleep(200)
var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
dataGp[0].minerar_gold[i4].ChanceG = null
setGp(dataGp)
}
return PR_Gold() 
}
}

if(dattofc != rggold[i2].usus[i3].data) {
rggold[i2].usus[i3].data = dattofc
rggold[i2].usus[i3].desligar = false
Goldrgs(rggold)
}
  
}
/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            
if(isBanned) return BannedExpired(ban)

var palavrasfr = JSON.parse(fs.readFileSync("./datab/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc?.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function sendUrlDoc(id, txt, tipo, titulo, tamanho, nome, desc, thumb, link, hehe) {
archivus.sendMessage(id, {document: Buffer.from('oi curioso'), caption: txt, mimetype: tipo, fileName: titulo, fileLength: 1000000 * Number(tamanho), contextInfo: {externalAdReply: {title: nome, body: desc, mediaType: 1, thumbnail: await getBuffer(thumb), showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: link}}}, {quoted: hehe})
}

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

if(isRecolherLink && budy.includes("https://chat.whatsapp.com")){
  
var L_WTS = "https://chat.whatsapp.com/"

for (var i = 1; i < body.split(L_WTS).length; i++) {
if(!recolherLNK.map(i => i?.Link).includes(L_WTS+body.split(L_WTS)[i].slice(0, 22))) recolherLNK.push({Link: L_WTS+body.split(L_WTS)[i].slice(0, 22)})
}

fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify(recolherLNK, null, 2))
if(isBotGroupAdmins && !isGroupAdmins) {
setTimeout(async function() {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1100);
}
}

if(!isPremium && nescessario.cmdpremium.includes(command)) return reply(`Este comando é apenas para
usuário premium, se deseja adquirir, fale com meu dono:
https://wa.me/${numerodono_ofc}`)


// PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
async function LIMPARDOCNT_QUEMJASAIU() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage, null, 2))
}
RPT_M = []
if(!RPT_M.includes(from) && (nescessario?.rg_aluguelGB || isGroup && dataGp[0]?.rg_aluguel || false) && !SoDono && !rg_aluguel.some(i => i.id_gp == from)) {
RPT_M.push(from)
setTimeout(() => {
RPT_M.splice(RPT_M.indexOf(from), 1)
}, 30000)
return reply(`O aluguel do ( Grupo / Usuario ) não está registrado, fale com o dono para registrar o aluguel ou renovar: https://wa.me/${numerodono_ofc}`)
}

if((nescessario?.rg_aluguelGB || isGroup && dataGp[0]?.rg_aluguel || false) && rg_aluguel.some((ab) => {
var tempo_A = Math.floor(Date.now() / 1000);
var VNCM = Math.floor(ab?.vencimento)
return tempo_A > VNCM
})) {

var RS_P = []

for (var abc of rg_aluguel) {
var tempo_A = Math.floor(Date.now() / 1000);
var VNCM = Math.floor(abc?.vencimento)
if(tempo_A > VNCM) {
console.log(colors.blue(`Grupo / Usuario: ${abc.nome_}\nID: ${abc.id_gp}\n\nExpirou o aluguel..`));
RS_P.push(`Grupo: ${abc.nome_}\nID: ${abc.id_gp}\n\nExpirou o aluguel..`);
rg_aluguel.splice(rg_aluguel.findIndex(a => a.id_gp === abc.id_gp), 1);
}
}

archivus.sendMessage(numerodono_ofc+"@s.whatsapp.net", {text: RS_P.join('\n')});
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
}

if (!isGroup) {
isCargo = `Usuário 🥋`
} else if(isGroup && !isGroupAdmins && !SoDono && !isPremium) {
isCargo = `Membro comum 🗑️`
} else if (isGroup && isGroupAdmins && !SoDono && !isPremium) {
isCargo = `Administrador 🛡️`
} else if(SoDono) {
isCargo = `Desenvolvedor ☕`
} else if(isPremium) {
isCargo = `Premium 👑`
} else {
isCargo = `Desconhecido ❗`
}

//INICIO DE COMANDO DE PREFIXO
const targetGroupId = q;
switch(command){
  
//_-1 AQUI SERÁ A ÁREA DE COMANDOS DE INFORMAÇÕES OU COMANDOS DE INFORMAR SOBRE ALGO, PRATICAMENTE FALANDO: CLÁSSICO

case 'roll':
var [d1, d2] = q.toLowerCase().trim().split("d")
var [d3] = q.toLowerCase().trim().split("+") || 0
if(parseInt(d1) > 200) return reply("Quantidade de dados muito exagerado.")
if(!q.toLowerCase().includes("d")) return reply(`Exemplo: ${prefix}roll 2d20`);
if(!Number(parseInt(d2))) return reply(`Exemplo: ${prefix}roll 2d20`);
RS_D = "Resultado dos Dados:\n\n"
for ( i = 0; i < d1; i++) {
RS_D += `[ ${i +1} ] ${Math.floor(Math.random() * parseInt(d2)+parseInt(d3))}\n\n`
}
reply(RS_D)
break;

case 'infoanotacao':
archivus.sendMessage(from, {text: anotacao(prefix)})
break

case 'tabela':
archivus.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
archivus.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

case 'idiomas':
case 'idioma':
archivus.sendMessage(from, {text: idiomagtts(prefix, NomeDoBot)}, {quoted: selo})
break

case 'infoforca':
reply(`como adicionar palavras no comando forca.
Exemplo: ${prefix}addpalavras_forca gato|Animal|Ele mia

Exemplo para tirar a palavra do comando forca, é só usar:

${prefix}rmpalavra_forca gato

boa sorte.
`)
break;

case 'infopremium':
reply(`Informação sobre o novo recurso de escolher qual comando vai ser,
premium.

- Comando: ${prefix}cmdpremium 
este comando vai mostrar quais comandos está premium.

- Comando: ${prefix}addcmdpremium
este comando coce vai usar pra adicionar o comando de premium, por exemplo:
${prefix}addcmdpremium play_audio ae o comando play_audio, so vai poder ser
utilizado por premium KKK

- Comando: ${prefix}tirarcmdpremium
já este comando, ele vai tirar o comando da lista premium, que você adiciono,
exemplo: ${prefix}tirarcmdpremium play_audio

Boa sorte.`)
break;

case 'infoduelo':
mention(infoduelo(prefix, sender))
break

case 'inforoleta':
setTimeout(() => {reagir(from, "💀")}, 300)
reply(`Há duas roletas russas funcionando...

[ ${prefix}roleta ]
A bot irá escolher aleatoriamente uma pessoa do grupo, e banir imediatamente...

[ ${prefix}roleta2 ]
A roleta 2 irá fazer a mesma coisa que a de cima... Porém nesta, os ADMs estarão salvos do banimento.`)
break

case 'infomultiprefixo': case 'infomultiprefix': 
mention(`${tempo} @${sender.split("@")[0]}, Irei informar como funciona a função de multiplos prefixo.

Essa função é por grupo, feito em um, não será feito em todos.

Primeiramente, ativar ele com 

${prefix}multiprefixo usando primeira vez ele ativa, depois ele desativa... E assim vai em diante..

Contém os seguintes comandos:

${prefix}add_prefixo\n\n${prefix}tirar_prefixo\n\n${prefix}prefixos

Exemplo do primeiro comando >

${prefix}add_prefixo &

O & que usei como exemplo, vai passar a ser um prefixo oficial do grupo, então se usar ${prefix} ou & funcionará, pode adicionar quantos quiser.. 

E pra tirar vai fazer o seguinte\n${prefix}tirar_prefixo &

E pra verificar os prefixos que foi adicionado 

${prefix}prefixos

É isso, boa sorte...`)
break

case 'infosorteio':
case 'helpsorteio':  
archivus.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'infocontador':
case 'infobanghost':  
archivus.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'infolistanegra':
archivus.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infotransmitir':
archivus.sendMessage(from, {text: infotransmitir(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
archivus.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
archivus.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/
case 'temporizador-gp': 
case 'fgp': 
case 'fechar-gp': 
case 'tempogp': 
case 'tmpgp': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q.includes("/") && !q.length <= 17) return reply(`*_🧙🏻‍♂️Olá, você tem que determinar os 2 tempo para o bot fechar o grupo e abrir, por exemplo..._*\n*❕${prefix}fechar-gp* 1m/2m\n\n_Ele fechará o grupo depois de um minuto, e depois abre após 2 minutos..._`)
qtxt = args.join(" ").replace(" /", "/").replace("/ ", "/").replace("1m", "60000").replace("2m", "120000").replace("3m", "180000").replace("4m", "240000").replace("5m", "300000").replace("6m", "360000").replace("7m", "420000").replace("8m", "480000").replace("9m", "540000").replace("10m", "600000").replace("11m", "660000").replace("12m", "720000").replace("13m", "780000").replace("14m", "840000").replace("15m", "900000").replace("16m", "960000").replace("17m", "1020000").replace("18m", "1080000").replace("19m", "1140000").replace("20m", "1200000").replace("21m", "1260000").replace("22m", "1320000").replace("23m", "1380000").replace("24m", "1440000").replace("25m", "1500000").replace("26m", "1560000").replace("27m", "1620000").replace("28m", "1680000").replace("29m", "1740000").replace("30m", "1800000").replace("31m", "1860000").replace("32m", "1920000").replace("33m", "1980000").replace("34m", "2040000").replace("35m", "2100000").replace("36m", "2160000").replace("37m", "2220000").replace("38m", "2280000").replace("39m", "2340000").replace("40m", "2400000").replace("41m", "2460000").replace("42m", "2520000").replace("43m", "2580000").replace("44m", "2640000").replace("45m", "2700000").replace("46m", "2760000").replace("47m", "2820000").replace("48m", "2880000").replace("49m", "2940000").replace("50m", "3000000").replace("1h", "3600000").replace("2h", "7200000").replace("3h", "10800000").replace("4h", "14400000").replace("5h", "18000000").replace("6h", "21600000").replace("7h", "25200000").replace("8h", "28800000").replace("9h", "32400000").replace("10h", "36000000").replace("11h", "39600000").replace("12h", "43200000").replace("13h", "46800000").replace("14h", "50400000").replace("15h", "54000000").replace("16h", "57600000").replace("17h", "61200000").replace("18h", "64800000").replace("19h", "68400000").replace("20h", "72000000").replace("21h", "75600000").replace("22h", "79200000").replace("23h", "82800000").replace("24h", "86400000")
txt3 = qtxt.split("/")[0]
txt4 = qtxt.split("/")[1]
var fcgp = {tempo1: txt3, tempo2: txt4, grupo: from}
if(!fs.existsSync(`./database/func/fechar-abrir-gp-${from}.json`)) {
fs.writeFileSync(`./database/func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
} else {
if (fs.existsSync("./database/func/fechar-abrir-gp-" + from + ".json")) {
fs.unlinkSync("./database/func/fechar-abrir-gp-" + from + ".json");
fs.writeFileSync(`./database/func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
}
}
reply(`*_🧙🏻‍♂️ Tempo de fechar o grupo e abrir em tal horário foi programado com sucesso..._*`)
await sleep(1500)
reagir(from, "⌛")
const tempodttl = JSON.parse(fs.readFileSync(`./database/func/fechar-abrir-gp-${from}.json`)); 
setTimeout(async () => {
reagir(from, "🔴")
await sleep(1500)
reply("*_🧙🏻‍♂️ Grupo fechado com sucesso no horário programado..._*")
await archivus.groupSettingUpdate(from, 'announcement')  
}, `${tempodttl.tempo1}`)
setTimeout(async () => {
reagir(from, "🟢")
await sleep(1500)
reply("*_🧙🏻‍♂️ Grupo aberto com sucesso no horário programado..._*")
await archivus.groupSettingUpdate(from, 'not_announcement')  
}, `${tempodttl.tempo2}`)
break

case 'abrirgp':
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins && !isnit) return reply(Res_BotADM);

  if (args.length < 2) {
    return reply(`Errado exemplo:\n${prefix}abrirgp 29 s \n\n𝗦 pra segundos\n𝗠 pra minutos\n𝗛 pra horas\n𝗗 pra dias.`);
  }

  const tempocu = parseInt(args[0]);
  const unidadeTempocu = args[1].toLowerCase();

  let timer;

  if (unidadeTempocu === 's') {
    timer = tempocu * 1000;
  } else if (unidadeTempocu === 'm') {
    timer = tempocu * 60000;
  } else if (unidadeTempocu === 'h') {
    timer = tempocu * 3600000;
  } else if (unidadeTempocu === 'd') {
    timer = tempocu * 86400000;
  } else {
    return reply(`Unidade de tempo não suportada. Use exemplo:\n${prefix}abrirgp 29 𝗦 \n\n𝗦 pra segundos\n𝗠 pra minutos\n𝗛 pra horas\n𝗗 pra dias.`);
  }

  reply(`O grupo será aberto em ${tempocu} ${unidadeTempocu}`);

  setTimeout(() => {
    const open = `*Agora o grupo foi reaberto pelo administrador @${sender.split("@")[0]}*\nAgora, os membros podem enviar mensagens.`;
    archivus.groupSettingUpdate(from, 'not_announcement');
    reply(open);
  }, timer);

  break;

case 'fechargp':
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);

  if (args.length < 2) {
    return reply(`Errado exemplo:\n${prefix}fechar 29 s \n\n𝗦 pra segundos\n𝗠 pra minutos\n𝗛 pra horas\n𝗗 pra dias.`);
  }

  const tempott = parseInt(args[0]);
  const unidadeTempott = args[1].toLowerCase();

  let timertt;

  if (unidadeTempott === 's') {
    timertt = tempott * 1000;
  } else if (unidadeTempott === 'm') {
    timertt = tempott * 60000;
  } else if (unidadeTempott === 'h') {
    timertt = tempott * 3600000;
  } else if (unidadeTempott === 'd') {
    timertt = tempott * 86400000;
  } else {
    return reply(`Unidade de tempo não suportada. Use exemplo:\n${prefix}fechargp 29 𝗦 \n\n𝗦 pra segundos\n𝗠 pra minutos\n𝗛 pra horas\n𝗗 pra dias.`);
  }

  reply(`O grupo será fechado em ${tempott} ${unidadeTempott}`);

  setTimeout(() => {
    const close = `*O grupo foi fechado pelo administrador @${sender.split("@")[0]}*\nAgora, os membros não podem enviar mensagens.`;
    archivus.groupSettingUpdate(from, 'announcement');
    reply(close);
  }, timertt);

  break;

case 'fakechat': 
case 'fakemsg':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
var [repplace, tarrget, bott] = q.split("|")
var m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null
if (m_ && tarrget && bott) {
archivus.sendMessage(from, {text: bott}, {quoted: {key: {fromMe: false, participant: m_}, message: {conversation: tarrget}}});
} else {
reply(`Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria enviar e que você responderia a seguinte mensagem, todos usando a *|* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix+command} @vitima|msg1|msg2`);
}
break;
//_-2 ÁREA DE COMANDOS SÓ PRA ADMINISTRADORESnk
case 'listnegra':
if (!SoDono) return reply(Res_SoDono); 
if (listanegraG.length === 0) return reply("A lista negra está vazia.");
let numerosNaListaNegra = listanegraG.map(numero => numero.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '').trim()).join('\n');
let mensagemListaNegra = `*📜 Lista Negra de Números:* \n${numerosNaListaNegra}`;
  reply(mensagemListaNegra);
break;

case 'listanegrag':
if (!SoDono) return reply(Res_SoDono);
if (!mrc_ou_numero) return reply("Por favor, insira os números que deseja adicionar à lista negra, separados por linha.");
(() => {
let numerosAdicionar = mrc_ou_numero.split('\n')
.map(num => num.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '').trim())
.filter(num => num);
let adicionados = [];
let jaExistem = [];
numerosAdicionar.forEach(numero => {
let index = listanegraG.findIndex(n => n.includes(numero));
if (index === -1) {
listanegraG.push(numero);
adicionados.push(numero);
} else {
jaExistem.push(numero);
}
});
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2));
let mensagemAdicionar = '';
if (adicionados.length > 0) {
mensagemAdicionar += `*✅ Números adicionados à lista negra:* \n${adicionados.join('\n')}\n`;
}
if (jaExistem.length > 0) {
mensagemAdicionar += `*⚠️ Números já estavam na lista negra:* \n${jaExistem.join('\n')}\n`;
}
reply(mensagemAdicionar.trim());
})();
break;


  
case 'addautorm':
case 'addautoban':
case 'listanegra':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm');
if (!mrc_ou_numero) return reply("Insira os números que deseja adicionar à lista negra, separados por linha.");
numerosAdicionar = mrc_ou_numero.split('\n').map(num => num.replace('@s.whatsapp.net', '').trim()).filter(num => num);
adicionados = [];
jaInclusos = [];
numerosAdicionar.forEach(numero => {
if (dataGp[0].listanegra.includes(numero)) {
jaInclusos.push(numero);
} else {
dataGp[0].listanegra.push(numero);
adicionados.push(numero);
}
});
setGp(dataGp);
mensagem = '';
if (adicionados.length > 0) {
mensagem += `*✅Números adicionados à lista de autoban:* \n${adicionados.join('\n')}\n`;
}
if (jaInclusos.length > 0) {
mensagem += `*⚠️Números já estavam na lista:* \n${jaInclusos.join('\n')}\n`;
}
reply(mensagem.trim());
break;

case 'delremover':
case 'delautorm':  
case 'delautoban':
case 'tirardalista':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins && !SoDono) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!mrc_ou_numero) return reply("Insira os números que deseja remover da lista negra, separados por linha.");
let numerosRemover = mrc_ou_numero.split('\n')
.map(num => num.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '').trim())
.filter(num => num);
let removidos = [];
let naoEncontrados = [];
numerosRemover.forEach(numero => {
let index = dataGp[0].listanegra.findIndex(n => n.includes(numero));
if (index > -1) {
dataGp[0].listanegra.splice(index, 1);
removidos.push(numero);
} else {
naoEncontrados.push(numero);
}
});
setGp(dataGp);
let mensagemRemover = '';
if (removidos.length > 0) {
mensagemRemover += `*✅ Números removidos da lista de autoban:*\n${removidos.join('\n')}\n`;
}
if (naoEncontrados.length > 0) {
mensagemRemover += `*⚠️ Números não estavam na lista:*\n${naoEncontrados.join('\n')}\n`;
}
reply(mensagemRemover.trim());
break;

case 'tirardalistag':
if (!SoDono) return reply(Res_SoDono);
if (!mrc_ou_numero) return reply("Insira os números que deseja remover da lista negra, separados por linha.");
(() => {
let numerosRemover = mrc_ou_numero.split('\n')
.map(num => num.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '').trim())
.filter(num => num);
let removidos = [];
let naoEncontrados = [];
numerosRemover.forEach(numero => {
let index = listanegraG.findIndex(n => n.includes(numero));
if (index > -1) {
listanegraG.splice(index, 1);
removidos.push(numero);
} else {
naoEncontrados.push(numero);
}
});
fs.writeFileSync('./settings/nescessario.json', JSON.stringify(nescessario, null, 2));
let mensagemRemover = '';
if (removidos.length > 0) {
mensagemRemover += `*✅ Números removidos da lista de autoban:* \n${removidos.join('\n')}\n`;
}
if (naoEncontrados.length > 0) {
mensagemRemover += `*⚠️ Números não estavam na lista:* \n${naoEncontrados.join('\n')}\n`;
}
reply(mensagemRemover.trim());
})();
break;

case 'edit-aleatorios':
case 'edit-bleach':
case 'edit-chain':
case 'edit-slayer':
case 'edit-dragon':
case 'edit-hunters':
case 'edit-kaisen':
case 'edit-naruto':
reagir(from, "📽")
archivus.sendMessage(from, { imagem: { url:`https://amy-api.online/api/editsvideo?categoria=${command}&apikey=crician-js`} }, { quoted: info });
break;

case 'listban':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break

case 'mute':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja mutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./armor/funcoes/muted.json', JSON.stringify(muted, null, 2))
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./armor/funcoes/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
}
break

case 'desmute':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja desmutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./armor/funcoes/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário *@${_.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./armor/funcoes/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário @${_.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
}
break

case 'band':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
archivus.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
archivus.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'ultplv':
case 'ultimas-palavras':{
try {
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if(!menc_os2 || menc_jid2[1]) return reply("❌ Por favor, marque a mensagem ou use @ para mencionar um único usuário.")
reply("Elx tem 30s para falar suas últimas palavras!")
await delay(30000)
archivus.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi Removido (a)`, mentions: [menc_os2]})
archivus.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
}
break

case 'ban': 
case 'banir': 
case 'kick': 
case 'avadakedavra': 
case 'b':
reagir(from, "✅");
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
try {
if (!menc_os2 || menc_jid2[1]) return reply("❌ Por favor, marque a mensagem ou use @ para mencionar um único usuário.");
if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("⚠️ Este usuário já não está mais no grupo.");
if (botNumber.includes(menc_os2)) return reply('❌ Eu não posso me remover 😅');
const usuarioTentouBanir = sender;
if (numerodono.includes(menc_os2)) {
archivus.sendMessage(from, { 
text: `👑 Você acha que pode banir meu dono assim na minha frente? Vamos ver quem é banido agora! 😎`, 
mentions: [usuarioTentouBanir] 
});
await sleep(500);
await archivus.groupParticipantsUpdate(from, [usuarioTentouBanir], "remove");
return;
}
archivus.sendMessage(from, { 
text: `🔨 @${menc_os2.split("@")[0]} foi removido(a) com sucesso e adicionado(a) à lista negra.`, 
mentions: [menc_os2] 
});
await archivus.groupParticipantsUpdate(from, [menc_os2], "remove");
if (!dataGp[0].listanegra.includes(menc_os2)) {
dataGp[0].listanegra.push(menc_os2);
setGp(dataGp);
} else {
return reply("⚠️ Este número já está na lista negra.");
}
const messageId = info.message.extendedTextMessage.contextInfo.stanzaId;
await archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: messageId, participant: menc_os2 }});
} catch (e) {
console.error("⚠️ Erro ao processar o comando:", e);
reply("❌ Ocorreu um erro ao tentar banir o usuário. Tente novamente.");
}
break;

case 'promover':
case 'prmv':
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!menc_os2 || menc_jid2[1]) {
return reply("⚠️ Por favor, marque a mensagem do usuário ou use o @ dele. Lembre-se de selecionar apenas um usuário.");
}
const isUserInGroup = groupMembers.some(member => member.id.includes(menc_os2));
if (!isUserInGroup) {
return reply("❌ Este usuário não está mais no grupo, portanto não é possível promovê-lo.");
}
try {
await archivus.groupParticipantsUpdate(from, [menc_os2], "promote");
archivus.sendMessage(from, { 
text: `✅ @${menc_os2.split("@")[0]} agora é administrador(a)!`, 
mentions: [menc_os2] 
});
} catch (error) {
reply("❌ Ocorreu um erro ao tentar promover o usuário. Tente novamente.");
console.error("Erro ao promover usuário:", error);
}
break;

case 'rebaixar': case 'rbx': 
if (!isGroupAdmins && !isnit) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!menc_os2 || menc_jid2[1]) {
return reply("⚠️ Por favor, marque a mensagem do usuário ou use o @ dele. Lembre-se de selecionar apenas um usuário.");
}
if (!JSON.stringify(groupMembers).includes(menc_os2)) {
return reply("❌ Este usuário não está mais no grupo, portanto não é possível rebaixá-lo.");
}
if (JSON.stringify(numerodono || numerodono_ofc).includes(menc_os2)) {
const quemTentouRebaixar = sender;
await archivus.groupParticipantsUpdate(from, [quemTentouRebaixar], "demote");
archivus.sendMessage(from, { 
text: `⚠️ @${quemTentouRebaixar.split("@")[0]} tentou rebaixar o dono do grupo e foi rebaixado(a) para membro comum!`, 
mentions: [quemTentouRebaixar] 
});
return;
}
try {
await archivus.groupParticipantsUpdate(from, [menc_os2], "demote");
archivus.sendMessage(from, { 
text: `✅ @${menc_os2.split("@")[0]} agora é membro comum novamente.`, 
mentions: [menc_os2] 
});
} catch (error) {
reply("❌ Ocorreu um erro ao tentar rebaixar o usuário. Tente novamente.");
console.error("Erro ao rebaixar usuário:", error);
}
break;

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(Res_SoAdm)
try{
if(!isGroup) return reply(Res_SoGrupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteio':
if(!isGroupAdmins) return reply(Res_SoAdm)
try{
if(!isGroup) return reply(Res_SoGrupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankinativo':
case 'rankinativos':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins) return reply(Res_SoAdm)
await LIMPARDOCNT_QUEMJASAIU()
bule = [];
bule2 = []
mentioned_jid = []
for (cag of countMessage[ind].numbers) {
bule2.push(cag.id)
// Condição para considerar o usuário como "inativo"
if (cag.messages + cag.cmd_messages + cag.figus + cag.videos + cag.audios + cag.imagens + cag.imagens_viewonce + cag.documentos <= 1) {
bule.push(cag)
}
}
bule.sort((a, b) => ((a.messages + a.cmd_messages + a.figus + a.videos + a.audios + a.imagens + a.imagens_viewonce + a.documentos) < (b.messages + b.cmd_messages + b.figus + b.videos + b.audios + b.imagens + b.imagens_viewonce + b.documentos)) ? 0 : -1)
boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
if (bule.length == 0) boardi += 'Sem Ghosts'
for (i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
    if (i != null) {
        boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\n`
        boardi += `Mensagens: ${bule[i].messages}\n`
        boardi += `Comandos dados: ${bule[i].cmd_messages}\n`
        boardi += `Figurinhas: ${bule[i].figus}\n`
        boardi += `Vídeos: ${bule[i].videos}\n`
        boardi += `Áudios: ${bule[i].audios}\n`
        boardi += `Imagens: ${bule[i].imagens}\n`
        boardi += `Imagens de visualização única: ${bule[i].imagens_viewonce}\n`
        boardi += `Documentos: ${bule[i].documentos}\n`
        boardi += `Aparelho: ${bule[i].aparelho}\n\n`
        mentioned_jid.push(bule[i].id)
    }
}
mentions(boardi, mentioned_jid, true)
break

case 'rankativos': 
case 'rankativo':   
if (!isGroup) return reply(Res_SoGrupo)
await LIMPARDOCNT_QUEMJASAIU()
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
// Função auxiliar para garantir que o valor seja um número válido, caso contrário retorna 0
function validNumber(value) {
    return isNaN(value) || value === undefined ? 0 : value;
}
// Ordena com base na soma de todas as atividades (mensagens, comandos, figurinhas, vídeos, etc.)
blue.sort((a, b) => (validNumber(a.messages) + validNumber(a.cmd_messages) + validNumber(a.figus) + validNumber(a.audios) + validNumber(a.imagens)) <
                    (validNumber(b.messages) + validNumber(b.cmd_messages) + validNumber(b.figus) + validNumber(b.audios) + validNumber(b.imagens)) ? 0 : -1)
menc = [] 
blad = `
╔━━━✮━━━•𖧹卍🇯🇵卍𖧹•━━━✮━━━╗
║  *𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 𝐌𝐀𝐈𝐒 𝐀𝐓𝐈𝐕𝐎𝐒*  ║
╚━━━✮━━━•𖧹卍🇯🇵卍𖧹•━━━✮━━━╝\n`

// Mostra os top 5 (ou menos se houver menos de 5 usuários)
for (i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
    var i5 = patentes.map(i => i.grupoID).indexOf(from)
    var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)

if (i != null) {
isGroupAdminss = groupAdmins.includes(blue[i].id)
SoDonoo = numerodono.includes(blue[i].id) || isBot || isnit || issupre ||
ischyt;
isPremiumm = premium.includes(blue[i].id) || SoDonoo;
if(isGroup && !isGroupAdminss && !SoDonoo && !isPremiumm) {
luuh = `Membro comum 🗑️`
} else if (isGroup && isGroupAdminss && !SoDonoo && !isPremiumm) {
luuh = `Administrador 🛡️`
} else if(isGroup && SoDonoo) {
luuh = `Desenvolvedor ☕`
} else if(isGroup && SoDonoo && !isPremiumm) {
luuh = `Premium 👑`
} else {
luuh = `Desconhecido ❗`
}
blad += `
╔━❀⃘࣭࣭࣭࣭ٜ━━✮━🇯🇵━✮━━❀⃘࣭࣭࣭࣭ٜ━╗
║ ${i + 1}º : @${blue[i].id.split('@')[0]}
╚━❀⃘࣭࣭࣭࣭ٜ━━✮━🇯🇵━✮━━❀⃘࣭࣭࣭࣭ٜ━╝
   ༶ Mensagens: ${validNumber(blue[i].messages)}
   ༶ Comandos dados: ${validNumber(blue[i].cmd_messages)}
   ༶ Figurinhas: ${validNumber(blue[i].figus)}
   ༶ Vídeos: ${validNumber(blue[i].videos)}
   ༶ Áudios: ${validNumber(blue[i].audios)}
   ༶ Imagens: ${validNumber(blue[i].imagens)}
   ༶ Imagens de visualização única: ${validNumber(blue[i].imagens_viewonce)}
   ༶ Documentos: ${validNumber(blue[i].documentos)}
   ༶ Usuário: ${luuh}
   ༶ Conectado em: ${blue[i].aparelho ? blue[i].aparelho : 'Desconhecido'}${i6 < 0 ? "" : `\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}`}\n╚━━━━━━━━━━━━━━╝\n`
        
        menc.push(blue[i].id)
    }
}

mentions(blad, menc, true)
break


case 'adv':
case 'advertir':
case 'adverter': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot...");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot");
if(groupAdmins.includes(menc_os2)) return reply("Não pode advertir ADMS..");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo..")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = `Opa: @${menc_os2.split("@")[0]} você foi advertido ${dfqn}/3, tome cuidado, com 3 advertências, você será removido...`
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {archivus.sendMessage(from, {text: `Adeus usuário @${menc_os2.split("@")[0]}, você completou 3 advertências 😪, fale com quem a baniu para ter noção de o que ocorreu..`, mentions: [menc_os2]})
await sleep(1500)
archivus.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'grupo': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
archivus.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
archivus.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins)return reply(Res_SoAdm)
try {
var ppUrl = await archivus.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
archivus.sendMessage(from, {image: {url: ppUrl}, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`, thumbnail: null}, {quoted: seloMetaTokyo})
break 

case 'perfil':
try {
    var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
   const sorteDoDia = [
        "Hoje é um ótimo dia para brilhar!",
        "Cuidado com as decisões impulsivas!",
        "A vida é curta, aproveite cada momento!",
        "Seja a razão pela qual alguém sorri hoje.",
        "Tenha fé, tudo vai dar certo!"];
    const mensagemSorte = sorteDoDia[Math.floor(Math.random() * sorteDoDia.length)];
    const nivelgado = ['1','2','3','4','5','6','7','8','9']
    const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
    const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
    const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
    const puta = ['1','2','3','4','5','6','7','8','9']
    const puta2 = ['1','2','3','4','5','6','7','8','9'] 
    const putar = puta[Math.floor(Math.random() * (puta.length))]
    const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
    const chanceMorrer = Math.floor(Math.random() * 200);
    const fraseHumor = chanceMorrer > 50 ? "A vida é uma aventura, mas não se esqueça do cinto de segurança!" : "Se você morrer, pelo menos vai sair da fila do pão!";
    const gostosura = ['1','2','3','4','5','6','7','8','9']
    const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
    const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
    const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
    gadop = `${Math.floor(Math.random() * 100)}`
    const programa = Math.ceil(Math.random() * 69000)

    const dptr = `╭━─━─━─≪ ⚡ ≫─━─━─━╮
┃
┃ 🔥 ~_*PERFIL*_~ 🌈
┃
┃ 🗒 *Nome*: *${pushname}*
┃ 🪀 *Número*: @${sender.split("@")[0]}
┃
┃         *INFO-USER*
┃ ⟮👑⟯ ⸸   *Vɪᴘ*: ${isPremium ? "✅ Sim" : "❌ Não"}
┃ ⟮🤴⟯ ⸸   *CARGO*: ${isCargo}
┃ ⟮🧑‍💼⟯ ⸸   *ADM*: ${isGroupAdmins ? "✅ Sim" : "❌ Não"}
┃ ⟮👑⟯ ⸸   *DONO*: ${SoDono ? "✅ Sim" : "❌ Não"}
┃
┃         *ATIVIDADE*
┃ ⟮📬⟯ ⸸   *Mensagens Enviadas*: ${RSM_CN.messages}
┃ ⟮🎭⟯ ⸸   *Figurinhas Enviadas*: ${RSM_CN.figus}
┃ ⟮⚙️⟯ ⸸   *Comandos Usados*: ${RSM_CN.cmd_messages}
┃ ⟮🎥⟯ ⸸   *Vídeos Enviados*: ${RSM_CN.videos}
┃ ⟮🎧⟯ ⸸   *Áudios Enviados*: ${RSM_CN.audios}
┃ ⟮🖼️⟯ ⸸   *Imagens Enviadas*: ${RSM_CN.imagens}
┃ ⟮👁️‍🗨️⟯ ⸸   *Imagens de Visualização Única*: ${RSM_CN.imagens_viewonce}
┃ ⟮📂⟯ ⸸   *Documentos Enviados*: ${RSM_CN.documentos}
┃ ⟮📱⟯ ⸸   *Aparelho*: ${RSM_CN.aparelho}
┃
┃         *INFORMAÇÕES GERAIS*
┃ 🐂 *Nível gado*: *${nivelgador}0%*
┃ 😈 *Nível puta*: *${putar}0%*
┃ 😋 *Nível de gostosura*: *${gostosurar}0%*
┃ 🍼 *Valor do programa*: *R$${programa}*
┃ ⟮⚰️⟯ ⸸   *Chance de Morrer Hoje*: *${chanceMorrer}%* 
┃   *Dica*: ${fraseHumor}
┃
┃ ⟮🤴⟯ ⸸   *Admins no grupo*: ${groupAdmins.length}
┃ ⟮🤵⟯ ⸸   *Participantes*: ${groupMembers.length}
┃ ⟮📅⟯ ⸸   *Data*: ${date}
┃ ⟮🕑⟯ ⸸   *Hora*: ${hora}
┃ ⟮📱⟯ ⸸   *Celular*: ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Web😂😂☝🏼😅'}
┃
┃ ➻ *~_CONSELHO_~* :
┃ ${conselho}
┃
┃ ➻ *~_SORTE DO DIA_~* :
┃ ${mensagemSorte}
┃
╰━─━─━─≪ ⚡ ≫─━─━─━╯`
replyMod("teste", "Aliança kkg", "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg", "https://linktr.ee/aliancekkgr") 
} catch (e) {
    console.log(e)
}
break

case 'codigomorse2': {
if (!q) {
return reply('Por favor, forneça um código Morse para traduzir para texto.');
}
const morseCode = {
'.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
'-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
'..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
'-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
'.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '.--.-': '@', '/': ' '
};
let morse = q.trim().split(' ');
let text = morse.map(code => morseCode[code] || code).join('');
return reply(`Texto:\n${text}`);
}
break;

case 'codigomorse': {
if (!q) {
return reply('Por favor, forneça um texto para traduzir para código Morse.');
}
const morseCode = {
A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
'0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
'.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '@': '.--.-', ' ': '/'
};
let text = q.toUpperCase();
let morse = text.split('').map(char => morseCode[char] || char).join(' ');
return reply(`Texto em Código Morse:\n${morse}`);
}
break;

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação Do Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
archivus.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar2': {
  try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
const groupMembers = isGroup ? groupMetadata.participants : [];
let mess = "┝⋆⃟ۣۜ᭪➣➪𝐌𝐀𝐑𝐂𝐀𝐍𝐃𝐎 𝐓𝐎𝐃𝐎𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n";
for (i of groupMembers) {
mess += `⏤͟͟͞͞ ͟͟͞͞꒰➳ @${i.id.split("@")[0]}\n`;
}
await archivus.sendMessage(from, {text: mess, mentions: groupMembers.map(i => i.id)});
} catch (e) {
console.error(e);
reply("*Comando apresentou falhas ao tentar ser executado.*");
}
break;}

case 'marcar': {
try {
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
const groupMembers = isGroup ? groupMetadata.participants : [];
let brazilianCount = 0;
let foreignCount = 0;
let mess = "𝐌𝐀𝐑𝐂𝐀𝐍𝐃𝐎 𝐓𝐎𝐃𝐎𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n";
for (let i of groupMembers) {
let memberId = i.id.split("@")[0];
let phoneNumber = memberId.replace(/\D/g, '');
let isBrazilian = phoneNumber.startsWith("55");
if (isBrazilian) {
brazilianCount++;
} else {
foreignCount++;
}
mess += `⏤͟͟͞͞ ͟͟͞͞꒰➳ @${memberId}\n`;
}
let totalMembers = groupMembers.length;
let stats = `📊 Estatísticas do Grupo 📊

🇧🇷 Brasileiros: ${brazilianCount} membros
🌍 Gringos: ${foreignCount} membros
👥 Total de Membros: ${totalMembers} membros
🔹 Comando executado por: ${pushname} 🔹
`;
await archivus.sendMessage(from, { text: stats + mess, mentions: groupMembers.map(i => i.id) });
} catch (e) {
console.error(e);
reply("*Comando apresentou falhas ao tentar ser executado.*");
}
break;
}

case 'marcar2':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
archivus.sendMessage(from, {text: teks}, {quoted: seloMetaTokyo})
} catch {
reply('ERROR!!')
}
break


case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await archivus.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await archivus.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
reply(`A foto do grupo foi removida com sucesso.`)
await archivus.removeProfilePicture(from)
}
break

case 'ephemeral': case 'msgtemp': { 
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!q) return reply(`Insira os valores de 1/0`)
if (args[0] === '1') {
reply(`✅️ As mensagens temporárias ativada com sucesso.`)
await archivus.sendMessage(from, { disappearingMessagesInChat: true })
} else if (args[0] === '0') {
reply(`❌️ As mensagens temporárias desativada com sucesso.`)
await archivus.sendMessage(from, { disappearingMessagesInChat: false })
}
}
break

case 'nomegp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
blat = args.join(" ")
archivus.groupUpdateSubject(from, `${blat}`)
archivus.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: seloMetaTokyo})
break

case 'descriçãogp': case 'descgp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_SoAdm)
blabla = args.join(" ")
archivus.groupUpdateDescription(from, `${blabla}`)
archivus.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: seloMetaTokyo})
break

case 'fotogp': case 'setfotogp':
if(!SoDono && !isBot) return reply(Res_SoDono);
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
archivus.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case "linkgp": case "linkdogp":
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
const link = await archivus.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${link} `)
break

case 'nlink': case 'redefinir':
case "resetlinkgp": case 'novolink': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {
await archivus.groupRevokeInvite(from)
reply("Link do grupo resetado com sucesso  ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "sair": case "sairgp":
if(!SoDono) return reply(Res_SoDono);
reply("Meu dono zerophoenix mandou eu sair kkkk")
await delay(1000)
try {
await archivus.groupLeave(from)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "idgp":
if(!SoDono) return reply(Res_SoDono);
reply(`Id : ${from}`)
break

case 'mytag': case 'vertag': 
inff = `${pushname}`
archivus.sendMessage(from, {text: inff}, {quoted: selo})
break



case 'infomute':
reply(`${tempo} ${pushname}, os comandos disponíveis são:
• ${prefix}mute
• ${prefix}desmute
• ${prefix}mutelist

-> ${prefix}mute
Marque o usuário com @ ou a mensagem dele, para mutar o mesmo...

-> ${prefix}desmute
Marque o usuário com @ ou a mensagem dele, para desmutar o mesmo... O ban não anula o mute.

-> ${prefix}mutelist
Irá mostrar a lista de todos os usuários mutados... Bem, se houver algum.`)
break

case 'recrutar':
if(!isGroupAdmins) return reply("Só ADM")
if(!isBotGroupAdmins) return reply(Res_BotADM)
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
linkgc = await archivus.groupInviteCode(from)
archivus.sendMessage(rcrt, {image:{url: logoslink.logo}, caption: "Clique no símbolo a cima da imagem para entrar no grupo...", contextInfo: {
externalAdReply: {
title:"- Clique aqui para participar do grupo",
body: "",
reviewType: "PHOTO", 
thumbnailUrl: logoslink.logo, 
sourceUrl: `https://chat.whatsapp.com/`+linkgc, 
mediaType: 2
}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(Res_SoGrupo)  
if(!isGroupAdmins) return reply(Res_SoAdm)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.trim().includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(Res_SoGrupo)  
if(!isGroupAdmins) return reply(Res_SoAdm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(`Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`)
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Avisos referente a esse grupo, foi tirado de todos os horários registrados..")
break

case 'rg_aviso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(`Exemplo: ${prefix+command} 12:00|Boa tarde a todos, prestem atenção nas regras do grupo\n\neste exemplo.. Ele vai enviar todos os dias as 12:00 da tarde a mensagem que você registrou, já se você quer trocar o horário.. Só refazer o comando\nSe você quer apagar o aviso do grupo, apenas coloque ${prefix}rm_aviso`)
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(`O Registro anterior foi apagado e recriou um novo, se deseja continuar\n - Lembre-se que há avisos programados em outros horários, se quiser limpar todos, digite: ${prefix}rm_avisos`)
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Aviso Criado com sucesso..")
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Aviso Criado com sucesso..")
}
break

case 'rv-forca':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isGroup) return reply(Res_SoGrupo)
if(dataGp[0].forca_inc == false) return reply(`O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`)
rv_forca()
reply("Forca resetada com sucesso...")
break

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/

case 'infoaluguel':
reply(`Comandos:

1: ${prefix}aluguel

2: ${prefix}aluguel_global

3: ${prefix}rg_aluguel

4: ${prefix}rm_aluguel

5: ${prefix}renovar_aluguel

6: ${prefix}listaaluguel

_1: O primeiro comando: ( ${prefix}aluguel ) serve para ativar que aquele grupo/usuario só funcionará quando for renovado o aluguel ou determinado o tempo que vai expirar o uso naquele grupo/usuario | Para desativar, só usar o comando novamente.

_2: O segundo comando: ( ${prefix}aluguel_global ) serve para ativar que todos grupo/usuario só funcionará quando for renovado o aluguel ou determinado o tempo que vai expirar o uso naquele grupo/usuario | Para desativar, só usar o comando novamente.

_3: O terceiro comando: ( ${prefix}rg_aluguel ) serve para registrar quando o aluguel vai expirar, Exemplos:

${prefix}rg_aluguel /30d

${prefix}rg_aluguel /24h

d é dias e h é horas, pode por o tempo que quiser.

_4: O quarto comando: ( ${prefix}rm_aluguel ) serve para tirar o grupo da lista de aluguel, e não funcionarei mais nele.

_5: O quinto comando: ( ${prefix}renovar_aluguel ) serve para você renovar o novo tempo do grupo, para o funcionamento do bot 100%.

_6: O sexto comando: ( ${prefix}listaaluguel ) serve para ver todos os usuarios/grupos que estão cok tempo de vencimento, e etc..

Boa sorte.`)
break;

case 'aluguel':
if(!SoDono) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo)
dataGp[0]['rg_aluguel'] = !dataGp[0]['rg_aluguel'];
setGp(dataGp)
reply(dataGp[0]['rg_aluguel'] ? `Ativado com sucesso, agora use o comando: ${prefix}rg_aluguel\nOu então o comando ${prefix}infoaluguel pra saber como usar o resto.`: "Desativado com sucesso.")
break;

case 'aluguel_global':
if(!SoDono) return reply(Res_SoDono);
nescessario.rg_aluguelGB = !nescessario.rg_aluguelGB
setNes(nescessario)
reply(nescessario?.rg_aluguelGB ? `Ativado com sucesso, agora use o comando: ${prefix}rg_aluguel\nOu então o comando ${prefix}infoaluguel pra saber como usar o resto.`: "Desativado com sucesso..")
break;

case 'renovar_aluguel':
if(!SoDono) return reply(Res_SoDono);
var ID_G = rg_aluguel.findIndex(i => i.id_gp == from)
if(rg_aluguel.some(i => i.id_gp != from)) return reply(`Este grupo não está na lista de aluguel, use: ${prefix}listaaluguel pra ver os grupos que estão registrado.`)
if(q.trim().length > 1 && (q.trim().includes("d") || q.trim().includes("h")) && q.trim().includes("/")) {
var TMP_A = Math.floor(Date.now() / 1000) 
var TEMPO = (q.trim().includes("h") ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60 : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24);
rg_aluguel[ID_G].vencimento = TMP_A+TEMPO
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
reply(`Este grupo foi renovado, e vai vencer em: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento - TMP_A))}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}`)
} else {
reply(`Exemplo: ${prefix+command} /24h ou Exemplo: ${prefix+command} /30d\n\nCom d é dias, e h é horas, então boa sorte..`)
}
break;

case 'rg_aluguel':
case 'rgaluguel':
if (!SoDono) return reply(Res_SoDono);
if(!nescessario?.rg_aluguelGB && !dataGp[0]["rg_aluguel"]) return reply(`Você não ativou o sistema de aluguel para esse grupo, nem global.. Leia como utilizar em ${prefix}infoaluguel\n\nBoa sorte.`)
if (q.trim().length > 1 && (q.trim().includes("d") || q.trim().includes("h")) && q.trim().includes("/")) {
var TMP_A = Math.floor(Date.now() / 1000) 
var TEMPO = (q.trim().includes("h") ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60 : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24);
var ID_G = rg_aluguel.findIndex(i => i.id_gp == from);
if (ID_G === -1) {
rg_aluguel.push({ id_gp: from, nome_: groupName || pushname, vencimento: TMP_A+TEMPO });
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
await new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda 1 segundo
ID_G = rg_aluguel.findIndex(i => i.id_gp == from); // Atualiza o valor de ID_G
reply(`Este grupo/usuario foi registrado com sucesso, e vai vencer em: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A)}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}\n\nSe deseja ver a lista de Usuarios/Grupos, use: ${prefix}listaaluguel`);
} else {
reply(`Este grupo já está registrado, e vai vencer em: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A)}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}`);
}
} else {
reply(`Exemplo: ${prefix + command} /24h ou Exemplo: ${prefix + command} /30d\n\nCom d é dias, e h é horas, então boa sorte..`);
}
break;


case 'rm_aluguel': case 'rmaluguel':
if(!SoDono) return reply(Res_SoDono);
if(q.trim().length < 4) return reply(`Use o comando ${prefix+command} ${from}\nAssim removerá este grupo da listaaluguel`)
var ID_R = rg_aluguel.findIndex(i => i.id_gp == q.trim())
if(!rg_aluguel.map(i => i.id_gp).includes(q.trim())) return reply(`Este grupo não está na lista de aluguel, use: ${prefix}listaaluguel pra ver os grupos que estão registrado.`)
rg_aluguel.splice(ID_R, 1)
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
reply(`Grupo/Usuario tirado com sucesso da lista de aluguel, não irei mais funcionar aqui.`)
break;

case 'listaaluguel': case 'lista_aluguel':
if(!SoDono) return reply(Res_SoDono);
if(rg_aluguel?.length === 0) return reply("Não contém nenhum usuario/grupo na lista de aluguel...")
var TMP = Math.floor(Date.now() / 1000)
ABC = "Lista de Usuarios/Grupos:\n\n"
for (var i of rg_aluguel) {
ABC += `ID: ${i?.id_gp}\nNome: ${i.nome_}\nVencimento: ${kyun(Math.floor(i.vencimento) - TMP)}\n-----------------------------------------\n`
}
reply(ABC)
break;

case 'listlinks': case 'links':
try {
if(!SoDono) return reply(Res_SoDono);
async function RM_L(A) {
var response = await axios.get(A);
const html = response.data;
if(html.includes("https://static.whatsapp.net/rsrc.php/v3/yB/r/_0dVljceIA5.png")) {
recolherLNK.splice(i, 1)
await fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify(recolherLNK, null, 2))
}
}
LNK = "_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n"
for ( i = 0; i < recolherLNK.length; i++) {
LNK += `Link - ${i +1} _- ${recolherLNK[i].Link}\n\n`
RM_L(recolherLNK[i]?.Link)
}
reply(LNK)
} catch (e) {
return reply("Erro")
}
break;

case 'recolherlink':
if(!SoDono) return reply(Res_SoDono);
if(isRecolherLink) {
nescessario.isRecolherLink = false
isRecolherLink = nescessario.isRecolherLink
setNes(nescessario)
reply("Sistema desativado.")
} else {
nescessario.isRecolherLink = true
isRecolherLink = nescessario.isRecolherLink
setNes(nescessario)
reply(`Sistema de recolher links e armazenar em ${prefix}listlinks foi ativado..`)
}
break;

case 'iddogrupo': case 'idgrupo':
if(!SoDono) return reply(Res_SoDono)
reply(from)
break

case 'minerar_gold':
case 'minerar_golds':  
if(!isGroup) return reply(Res_SoGrupo)
if(!IS_sistemGold) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`)
blit = [] 
for ( i of dataGp[0].minerar_gold){blit.push(i.id)}
if(blit.indexOf(sender) < 0) {
dataGp[0].minerar_gold.push({id: sender, ChanceG: null})
setGp(dataGp)}
await sleep(200)
var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
if(dataGp[0].minerar_gold[i4].ChanceG == 2) return reply("Você não tem mais chances de minerar Gold, volte amanhã...")
dataGp[0].minerar_gold[i4].ChanceG += 1
setGp(dataGp)
rnd = Math.floor(Math.random() * 2)
rndg = Math.floor(Math.random() * 15)
if(rnd == 0) {
mention(`Parabéns @${sender.split("@")[0]} você recebeu ${rndg} Golds, você só pode minerar 2 vez por dia... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.." : "Ainda resta 1/2 para obter Golds, sua chance é 0/2"}`)
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += rndg
Goldrgs(rggold)
} else if(rnd != 0) {
reply(`A, você não teve sorte dessa vez, sinto muito... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.." : "Ainda resta 1/2 para obter Golds, sua chance é 0/2"}`)
}
break
  
case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return reply(Res_SoDono)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(`Faltanda a primeira |\nExemplo: ${prefix+command} titulo|tema|dica`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} titulo|tema|dica`)
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply("Este título já foi adicionado/existente...")
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./datab/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Palavra adicionada ao jogo da forca com sucesso...")
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(Res_SoDono) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./datab/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply("Palavra tirada do jogo da forca com sucesso...")
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
if(!isGroup) return reply(Res_SoGrupo)
try {
if(dataGp[0].forca_inc) return reply(`Jogo já está em andamento, caso queira resetar, fale com um adm para executar ${prefix}rv-forca, ou tente acertar o jogo da forca que deve está logo a cima.`)
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
rsp_fr = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
|________
       _¦_\n\n\n\n\n\n\n
${linha_fr}\n
_____________________
\n_- JOGO INICIADO -_
\nUse ${prefix}r-f letra que talvez exista por sua observação.\n\nOu ${prefix}r-f nome todo\n
_____________________
`
reply(rsp_fr) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply(Res_SoGrupo)  
if(!dataGp[0].forca_inc) return reply(`O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`)
if(!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
var RST_T = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
__________-_
         _|_\n
        ${ERROS+ERRQ >= 1 ? "🤡":""}\n      ${ERROS+ERRQ >= 2 ? "👈":""} ${ERROS+ERRQ >= 3 ? "👉":""}  \n         ${ERROS+ERRQ >= 4 ? "👖":""}\n         ${ERROS+ERRQ >= 5 ? "👞":""} ${ERROS+ERRQ >= 6 ? "👞":""}
\n${linha_fr}\n
___-________-_____\n
Letras ja utilizadas: ${letra_ut}
___-________-_____
`
if(q.length > 2) {reply("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou${IS_sistemGold ? " 10 Golds," :" "}bom menino(a), irei resetar o jogo...`: DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} >${IS_sistemGold ? ` você recebeu 5 Golds, por ser o último..,` : " "}irei resetar o jogo..`:`Você acertou uma letra e ganhou${IS_sistemGold ?" 2 Golds ":" "}continue assim..`}`)
if(IS_sistemGold) {
rggold[i2].usus[i3].Golds += q.length > 2 ? 10:DM_FR.acertos == DM_FR.palavra_ofc.length ? 5:2
Goldrgs(rggold)
}
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(RST_T)
} else {
reply(`${q2.length > 2 ? `Infelizmente você perdeu${IS_sistemGold ? " 3 Golds": ""}, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu ${IS_sistemGold ? "2 Golds infelizmente,":", "}irei resetar o jogo..`:`Você Errou, e perdeu ${IS_sistemGold ? "2 Golds":""} 😥..`}`)
if(IS_sistemGold) {
rggold[i2].usus[i3].Golds += 2
Goldrgs(rggold)
}
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break

case 'figu_flork':
case 'figu_emoji':
case 'figu_aleatoria':
case 'figu_memes':
case 'figu_anime':
case 'figu_coreana':
case 'figu_bebe':
case 'figu_desenho':
case 'figu_animais':
case 'figu_engracada':
case 'figu_raiva':
case 'figu_roblox':
if (!q) return reply("Por favor, informe a quantidade de figurinhas que deseja que eu envie!");
if (!Number(q.trim()) || Number(q.trim()) > 3) return reply("Digite a quantidade de figurinhas desejada, sendo no máximo 3.");
async function enviarFigurinha() {
archivus.sendMessage(from, { sticker: { url: `https://jeff-apis.shop/sticker/${command}?apikey=${API_KEY_JEFF}` }
});
}
for (let i = 0; i < q; i++) {
await sleep(680);
enviarFigurinha();
}
break;

case 'figurinhas':
if (!q) return reply("Insira a qnd de figu que deja que eu envie")
if (!Number(args[0]) || Number(q.trim()) > 3) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 3..")
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
archivus.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
await sleep(680)
figuss()
}
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply(Res_SoDono)
if(!isGroup) return reply(Res_SoDono)
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage, null, 2))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(Res_SoDono)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+SNET)  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./DADOS/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(Res_SoGrupo)
if(command == "anotacao" || command == "nota") {
if(!q.trim()) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q.trim())  
mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(i2 < 0) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2]?.puxar 
txtin = "──────────────────\n\n"
for ( i = 0; i < antr?.length; i++) {
txtin += `↝ Anotação: ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`
}
txtin += "──────────────────\n\n"
mention(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
archivus.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: seloMetaTokyo}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
archivus.sendMessage(from, {image: {url: q}}, {quoted: seloMetaTokyo}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_ALEATORY)
archivus.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'esportenoticias': case 'esportenoticia': case 'espnoticia': case 'espnoticias':
case 'noticiasesporte': case 'noticiaesporte': case 'noticiaesp': case 'noticiasesp':
case 'esporte_noticias': case 'esporte_noticia': case 'esporte-noticias': case 'esporte-noticia':
reply("Aguarde, realizando ação..")
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/esporte_noticias?apikey=${API_KEY_ALEATORY}`)
AB =""
for ( i = 1; i < ABC.length; i++) {
AB += `${ABC[i].titulo}\n\n`
}
archivus.sendMessage(from, {image: {url: ABC[0].img}, caption: AB}, {quoted: seloMetaTokyo})
} catch {
return reply("Erro, tente novamente ou aguarde até voltar ao normal.")
}
break;

case "playstore":
try {
if(!q.length > 2) return reply("Cade o título do apk que deseja pesquisar?")
abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/playstore?nome=${q}&apikey=`+API_KEY_ALEATORY)
ABC = "Play Store pesquisa:\n\n"
for(let a of abc.resultados) {
ABC += `\n\n${a.title}\n\n----------------------------------------------\nID:
${a.appId}\n\n----------------------------------------------\n\nURL:
${a.url}\n\n----------------------------------------------`
}
reply(ABC)
} catch {
return msg.reply("Erro...")
}
break;

case 'linkdogp_revelar':
if(!q.trim()) return
try {
bla2 = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/rev_grp-whats?URL=${q.trim()}&apikey=`+API_KEY_ALEATORY)
reply(bla2.URL)
} catch {
reply("Titulo não encontrado, pesquise por outro")
}
break

case 'grupos':
if(!q.trim()) return reply(`Digite o título, para pegar resultados de grupos de WhatsApp, referente a seu título..\nExemplo: ${prefix+command} zoeira`)
try {
var Lrows = []

bla = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesq_grp-whats?ttl=${q}&apikey=`+API_KEY_ALEATORY)

for(let a of bla) {
Lrows.push({title: a.LINK, description: a.TITULO, rowId: `${prefix}linkdogp_revelar ${a.LINK}`})
}

listMessage = {
text: "Pesquisa realizada: Sobre grupos de WhatsApp",
footer: "Canal do Bot : youtube.com/aleatoryconteudos",
title: `${isGroup ? "Grupo" : "Usuário"} : ${isGroup ? groupName: pushname}`,
buttonText: "Lista da pesquisa - Clique aqui!",
sections: [{
title: "Resultado da pesquisa :", 
rows: Lrows
}]
}
archivus.sendMessage(from, listMessage).catch(e => {
reply("Titulo não encontrado, pesquise por outro")
})
} catch {
reply("Titulo não encontrado, pesquise por outro")
}
break

case 'logos1':
if(!q) return reply(`Exemplo: ${prefix+command} Aleatory`);
var LOGOS = ['shadow','metalgold','cup','txtborboleta','cemiterio','efeitoneon','harryp','lobometal','neon2','madeira','lovemsg3','coffecup','coffecup2','florwooden','narutologo','fire','romantic','smoke','papel','lovemsg','lovemsg2','fiction','3dstone','areia','style','blood','pink','cattxt','neondevil','carbon','metalfire','thunder','vidro','jokerlogo','transformer','demonfire','jeans','metalblue','natal','ossos','asfalto','break','glitch2','colaq','neon3','nuvem','horror','matrix','berry','luxury','lava','thunderv2','neongreen','neve','neon','neon1','neon3d','gelo','neon3','3dgold','lapis','toxic','demongreen','rainbow','halloween','angelwing','hackneon','fpsmascote','equipemascote','txtquadrinhos','ffavatar','mascotegame','angelglx','gizquadro','wingeffect','blackpink','metalgold','girlmascote','logogame'];
var ENV = [];
for(var a = 0; a < LOGOS.length; a++) {
ENV.push({title: LOGOS[a], description: `Logo personalizada: ${a+1}`, rowId: prefix+LOGOS[a]+` ${q}`})}
LGS = "LOGOS DE 1 TEXTO:\n\n"
for ( i of ENV) {
LGS += `${i.description}\n\nLogo: ${i.title}\n\nExemplo: ${i.rowId}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n`
}
reply(LGS)
break

case 'amazon': case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
try {
reply(Res_Aguarde)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/Amazon_Pesquisa?pesquisa=${q.trim()}&apikey=${API_KEY_ALEATORY}`)
RST = "Pesquisa Amazon:\n\n"
for ( i  = 0; i < (ABC.length > 40 ? 40: ABC.length); i++) {
RST +=  `( ${i+1} ) - Titulo: ${ABC[i].titulo}\n- Preço: ${ABC[i].preco}\n- Url: ${ABC[i].url}\n${"_".repeat(27)}\n\n`
}
reply(RST);
} catch {
return reply(`Erro, não foi possivel encontrar.`)
}
break;

case 'pesquisa': case 'pesquisar':
try {
bla = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_agora?pesq=${q}&apikey=`+API_KEY_ALEATORY)
archivus.sendMessage(from, {text: bla.msg}, {quoted: seloMetaTokyo})
} catch {
return reply("Erro..")
}
break

case 'ativarfuncoesdono':
case 'ativacoes_dono':  
if(!SoDono) return reply(Res_SoDono)
reply(`
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

- Comando de Ativar / Desativar o bloqueador de quando ligarem pro bot, so
digitar o comando ligar, e denovo pra desligar: 
${prefix}antiligar 

- Comando para ativar ou desativar o visualizador de mensagem, visualizar
mensagem de tudo, so digitar o comando pra ligar, e o comando novamente pra
desligar: 
${prefix}visualizarmsg

- Comando de desativar o que mostra comandos dados no console, so digitar o
comando 1 vez ora ativar, e digitar o comando novamente pra desativar:
${prefix}console

- Comando para ativar o bloqueador de quando algum usuário mande mensagem
privado do bot, seja bloqueado, o comando usado 1 vez, ele ativa, usado
novamente ele desativar:
${prefix}antipv

- Comando de falar que não pode mandar mensagem privado, para alterar a
mensagem, so usar o comando ${prefix}msgantipv e coloque o que quer, para ativar
o comando é digitar ele uma vez, e digitar novamente para desativar: 
${prefix}antipv2

- Comando de ativar e desativar o audio do menu:
${prefix}audio-menu

- Comando de ativar e desativar o verificado de marcação: 
${prefix}verificado-global

- Comando de desativar o bot completamente para ninguém usar:
${prefix}botoff

- Comando de funcionar só comandos pra administrador:
${prefix}So_Adm

- Comando para recolher link de grupos que o bot estiver:
${prefix}recolherlink

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
`)
break

case 'verificado-global': 
if(!SoDono) return reply(Res_SoDono)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply(`- O Verificado foi Ativado de todos os comandos que tem, para tirar novamente só digitar o comando novamente..`)
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`- O Verificado de todos os menu / comando, foi Desativado, para ativar novamente só digitar o comando novamente..`) 
}
break

case 'audio-menu': 
if(!SoDono) return reply(Res_SoDono)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break;

case 'console':   
if(!SoDono) return reply(Res_SoDono)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- O comando de tirar o console foi ativado _- COM SUCESSO - _ Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi Desativado  _- COM SUCESSO - _ Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break;

case 'menu':
case 'helpp':
case 'menup':
case 'comandosp':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menucompleto(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menudonwloads':
case 'menudonwload':
case 'menudonws':
case 'menudonw':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menudonwload(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break 

case 'logos':
case 'menulogo':
case 'menulogos':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menulogos(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break 

case 'menunsfws':
case 'menunsfw':
case 'menu+18':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menunsfw(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menuadm':
case 'menuadms':
case 'adm':
reagir(from, "🔰");
if(!isGroupAdmins) return reply(Res_SoAdm)
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: adms(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menudonos':
case 'menudono':
case 'donomenu':
case 'menudn':
if(!SoDono) return reply(Res_SoDono);
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menudono(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menujogos':
case 'menujogo':
case 'menugames':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menujogos(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menucitys':
case 'menucity':
case 'menurpg': 
if(!isGroup) return (enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgc* para se registrar na City.`)
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: rpgmenu(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menustalks':
case 'menustalk':
case 'stalks':
case 'stalk':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menustalks(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menuefeitos':
case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: efeitos(prefix, sender), mentions: [sender]}, {quoted: seloMetaTokyo})
break;

case 'menualteradores':
case 'menualteradore':
case 'alteradores':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: alteradores(prefix, sender), mentions: [sender]}, {quoted: selo})
break;

case 'menubrincadeiras':
case 'menubrincadeira':
case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(Res_SoModoBN)
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: brincadeiras(prefix, sender), mentions: [sender]}, {quoted: selo})
break;

case 'vip':
case 'vips':
case 'menuvips':
case 'menuvip':
case 'menupremium':
case 'menuprem':
archivus.sendMessage(from, {image: {url: `https://zero-two.info/uploads/images/file-1732330630310-649509174.jpeg`}, caption: menuprem(prefix, sender), mentions: [sender]}, {quoted: selo})
break;

case 'grupo_ofc':
reply(`*Faça parte do grupo oficial ❤️*

https://chat.whatsapp.com/KLcnArydmKgHQRdQyKKjMI`)
break


case 'configurar-bot':
archivus.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break;

case 'comandos-termux':
archivus.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break;

case 'destrava':
if(!isGroup) return reply(Res_SoGrupo)
if(!isPremium) return reply(Res_VipP)
if(!isGroupAdmins) return reply(Res_SoAdm)
archivus.sendMessage(from, {text: destrava(prefix)}, {quoted: seloctt})
break

case 'destrava2':
if(!isGroup) return reply(Res_SoGrupo)
if(!isPremium) return reply(Res_VipP)
if(!isGroupAdmins) return reply(Res_SoAdm)
archivus.sendMessage(from, {text: destrava2 (prefix)}, {quoted: seloctt})
break 


case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
archivus.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'criador':
ttgp = isGroup ? groupMembers.length * groupAdmins.length + somembros.length : 6
horar = moment.tz('America/Sao_Paulo').format('HH:mm')
datar = moment.tz('America/Sao_Paulo').format('DD/MM')
criador = `
INFORMAÇÕES DO CRIADOR  

 *MOMO AYASE BETA*

『📞』➪NUMERO DO CRIADOR  

『🔗』➪wa.me/5519982607241
  
『📱』 TELEGRAM ➪ @zerophoenix_kkgr [+5535999996899]  

『📸』 INSTAGRAM ➪ @zerophoenix_kkgr  

『⚙️』➪PREFIXO DO BOT ⩺ ${prefix}

『🤖』➪NOME DO BOT ⩺ ${NomeDoBot}

『🛠️』➪VERSÃO DO BOT ⩺ BETA


> Atenção: Caso o número do criador não esteja disponível ou esteja fora de operação, por favor, entre em contato pelo Instagram ou Telegram. Estarei respondendo por essas plataformas, já que o número foi recentemente banido e não posso atender por ele no momento. Agradeço pela compreensão e aguardo seu contato!
> By: Momo atase beta`
sendUrlDoc(from, criador, 'application/vnd.android.package-archive', 'Momo ayase beta', 50000000, NomeDoBot, '', 'https://zero-two.info/uploads/images/file-1732123240414-367112691.jpeg', 'https://wa.me/5519982607241', seloctt);
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/mediafire?url=${q}&apikey=`+API_KEY_ALEATORY)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
archivus.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(Res_Aguarde)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
DLT_FL(media)
})
.catch(err => {
reply(err.message)
DLT_FL(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${NomeDoBot}* 」*────`
mention(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'ler':
case 'ocr':
case 'lerfoto':
if(!isPremium) return reply(Res_VipP)
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
DLT_FL(media)
})
.catch(err => {
reply(err.message)
DLT_FL(media)
})
} else {
reply('Somente fotos!')
}
break

case 'getbio':
if (!menc_os2) return reply('Marque o usuário que você quer puxar a bio/status, a mensagem ou o @');
try {
let bio = await archivus.fetchStatus(`${menc_os2.split('@')[0]}@c.us`);
if (bio && bio.status) {
reply(`${bio.status}`);
} else {
reply(`O usuário não possui biografia comfigurado.`);
}
} catch (error) {
console.error(error);
reply(`Não foi possível pegar a biografia do usuário`);
}
break;

case 'disney':
if(!isPremium) return reply(Res_VipP)
disney = JSON.parse(fs.readFileSync("./database/disney.json"))
moon = disney[Math.floor(Math.random() * disney.length)]
archivus.sendMessage(from, {image: {url: 'https://telegra.ph/file/9cb91bf0953c17ca4268a.jpg'}, caption: `
> Lembre-se: teste a conta para ver se tem acesso ou não, algumas contas não tem mais acesso válido, boa sorte.

> Login: ${moon.login}

> Senha: ${moon.senha}`}, {quoted: seloMetaTokyo})
break

case 'gerarcid': // Gerar código CID fictício
const gerarCID = () => {
const cidPrefixo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cid = cidPrefixo[Math.floor(Math.random() * cidPrefixo.length)];
const cidNumero = Math.floor(Math.random() * 999);
return `${cid}${cidNumero.toString().padStart(3, '0')}`;
};
let cidGerado = gerarCID();
reply(`🔐 Seu código CID gerado: ${cidGerado}`);
break;

case 'gerarnca':
const gerarNCA = () => {
let nca = '';
for (let i = 0; i < 12; i++) {
nca += Math.floor(Math.random() * 10);
}
return nca;
};
let ncaGerado = gerarNCA();
reply(`🔐 Seu NCA gerado: ${ncaGerado}`);

break;

case 'gerarccpf':
  const gerarCCPF = () => {
      let ccpf = '';
      for (let i = 0; i < 11; i++) {
          ccpf += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return ccpf;
  };
  
  let ccpfGerado = gerarCCPF();
  reply(`🔐 Seu CCPF gerado: ${ccpfGerado}`);
  break;

case 'gerarprotocolo': // Gerar número de protocolo fictício
  const gerarProtocolo = () => {
      let protocolo = '';
      for (let i = 0; i < 10; i++) {
          protocolo += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return protocolo;
  };

  let protocoloGerado = gerarProtocolo();
  reply(`🔐 Seu número de Protocolo gerado: ${protocoloGerado}`);
  break;

case 'gerarmarca': // Gerar registro de marca fictício
  const gerarMarca = () => {
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let marca = '';

      // 4 letras + 5 números
      for (let i = 0; i < 4; i++) {
          marca += letras.charAt(Math.floor(Math.random() * letras.length));
      }
      for (let i = 0; i < 5; i++) {
          marca += Math.floor(Math.random() * 10);
      }
      
      return marca;
  };

  let marcaGerada = gerarMarca();
  reply(`🔐 Seu Registro de Marca gerado: ${marcaGerada}`);
  break;

case 'gerarcartao': // Gerar número de cartão de crédito fictício
  const gerarCartao = () => {
      const prefixos = ['4', '5', '6']; // Visa, MasterCard, Discover
      let cartao = prefixos[Math.floor(Math.random() * prefixos.length)];
      for (let i = 0; i < 15; i++) {
          cartao += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      // Calcular dígito verificador usando o algoritmo de Luhn
      const calcularDigitoVerificador = (numero) => {
          let soma = 0;
          let multiplicador = 1;

          for (let i = numero.length - 1; i >= 0; i--) {
              let n = parseInt(numero[i]) * multiplicador;
              if (n > 9) n -= 9;
              soma += n;
              multiplicador = (multiplicador === 1) ? 2 : 1;
          }
          return (soma * 9) % 10;
      };

      const digitoVerificador = calcularDigitoVerificador(cartao);
      return `${cartao}${digitoVerificador}`;
  };

  let cartaoGerado = gerarCartao();
  reply(`🔐 Seu número de Cartão de Crédito gerado: ${cartaoGerado}`);
  break;

case 'gerarcodigoibge': // Gerar código do IBGE fictício
  const gerarCodigoIBGE = () => {
      let codigoIBGE = '';
      for (let i = 0; i < 7; i++) {
          codigoIBGE += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return codigoIBGE;
  };

  let codigoIBGEGerado = gerarCodigoIBGE();
  reply(`🔐 Seu Código do IBGE gerado: ${codigoIBGEGerado}`);
  break;

case 'gerarnit': // Gerar NIT fictício
  const gerarNIT = () => {
      let nit = '';
      for (let i = 0; i < 11; i++) {
          nit += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return nit;
  };

  let nitGerado = gerarNIT();
  reply(`🔐 Seu NIT gerado: ${nitGerado}`);
  break;

case 'gerarcns': // Gerar CNS fictício
  const gerarCNS = () => {
      let cns = '';
      for (let i = 0; i < 15; i++) {
          cns += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return cns;
  };
  
  let cnsGerado = gerarCNS();
  reply(`🔐 Seu CNS gerado: ${cnsGerado}`);
  break;

case 'gerarrie': // Gerar RIE fictício
  const gerarRIE = () => {
      let rie = '';
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      // 3 letras + 7 números
      for (let i = 0; i < 3; i++) {
          rie += letras.charAt(Math.floor(Math.random() * letras.length));
      }
      for (let i = 0; i < 7; i++) {
          rie += Math.floor(Math.random() * 10);
      }
      
      return rie;
  };

  let rieGerado = gerarRIE();
  reply(`🔐 Seu RIE gerado: ${rieGerado}`);
  break;

case 'gerarrne': // Gerar RNE fictício
  const gerarRNE = () => {
      let rne = '';
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
      // 2 letras + 6 números + 2 letras
      for (let i = 0; i < 2; i++) {
          rne += letras.charAt(Math.floor(Math.random() * letras.length));
      }
      for (let i = 0; i < 6; i++) {
          rne += Math.floor(Math.random() * 10);
      }
      for (let i = 0; i < 2; i++) {
          rne += letras.charAt(Math.floor(Math.random() * letras.length));
      }
      
      return rne;
  };

  let rneGerado = gerarRNE();
  reply(`🔐 Seu RNE gerado: ${rneGerado}`);
  break;

case 'gerarcodigobarras': // Gerar código de barras EAN-13 fictício
  const gerarCodigoBarras = () => {
      let codigo = '';
      for (let i = 0; i < 12; i++) {
          codigo += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      // Calcular dígito verificador EAN-13
      let soma = 0;
      for (let i = 0; i < 12; i++) {
          soma += parseInt(codigo[i]) * (i % 2 === 0 ? 1 : 3);
      }
      const digitoVerificador = (10 - (soma % 10)) % 10;
      return `${codigo}${digitoVerificador}`;
  };

  let codigoBarrasGerado = gerarCodigoBarras();
  reply(`🔐 Seu Código de Barras gerado: ${codigoBarrasGerado}`);
  break;

case 'gerarchn': // Gerar CHN fictício
  const gerarCHN = () => {
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let chn = '';

      // 3 letras + 9 números
      for (let i = 0; i < 3; i++) {
          chn += letras.charAt(Math.floor(Math.random() * letras.length));
      }
      for (let i = 0; i < 9; i++) {
          chn += Math.floor(Math.random() * 10);
      }
      
      return chn;
  };

  let chnGerado = gerarCHN();
  reply(`🔐 Sua CHN gerada: ${chnGerado}`);
  break;

case 'gerarpis': // Gerar PIS fictício
  const gerarPIS = () => {
      let pis = '';
      for (let i = 0; i < 11; i++) {
          pis += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return pis;
  };
  
  let pisGerado = gerarPIS();
  reply(`🔐 Seu PIS gerado: ${pisGerado}`);
  break;

case 'gerarnis': // Gerar NIS fictício
  const gerarNIS = () => {
      let nis = '';
      for (let i = 0; i < 11; i++) {
          nis += Math.floor(Math.random() * 10); // Números de 0 a 9
      }
      return nis;
  };
  
  let nisGerado = gerarNIS();
  reply(`🔐 Seu NIS gerado: ${nisGerado}`);
  break;

case 'gerarpassaporte':  //By zerophoenix
if(!isPremium) return reply(Res_VipP)
const gerarPassaporte = () => {
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let passaporte = '';
passaporte += letras.charAt(Math.floor(Math.random() * letras.length));
passaporte += letras.charAt(Math.floor(Math.random() * letras.length));
for (let i = 0; i < 6; i++) {
passaporte += Math.floor(Math.random() * 10);
}
passaporte += letras.charAt(Math.floor(Math.random() * letras.length));
passaporte += letras.charAt(Math.floor(Math.random() * letras.length));
return passaporte;
};
let passaporteGerado = gerarPassaporte();
reply(`🔐 Seu Passaporte gerado: ${passaporteGerado}`);
break;

case 'gerartitulo': //By zerophoenix
if(!isPremium) return reply(Res_VipP)
const gerarTitulo = () => {
let titulo = '';
for (let i = 0; i < 12; i++) {
titulo += Math.floor(Math.random() * 10);
}
const digitoVerificador = Math.floor(Math.random() * 10);
return `${titulo}-${digitoVerificador}`;
};
let tituloGerado = gerarTitulo();
reply(`🔐 Seu Título de Eleitor gerado: ${tituloGerado}`);
break;

case 'gerarcertidao': //By zerophoenix
if(!isPremium) return reply(Res_VipP)
const gerarCertidao = () => {
let certidao = '';
for (let i = 0; i < 15; i++) {
certidao += Math.floor(Math.random() * 10);
}
return certidao;
};
let certidaoGerada = gerarCertidao();
reply(`🔐 Sua Certidão de Nascimento gerada: ${certidaoGerada}`);
break;

case 'gerarrg': //By zerophoenix
if(!isPremium) return reply(Res_VipP)
const gerarRG = () => {
let rg = '';
for (let i = 0; i < 9; i++) {
rg += Math.floor(Math.random() * 10);
}
const digitoVerificador = Math.floor(Math.random() * 10);
return `${rg}-${digitoVerificador}`;
};
let rgGerado = gerarRG();
reply(`🔐 Seu RG gerado: ${rgGerado}`);
break;

case 'gerarsenha': //By zerophoenix
if(!isPremium) return reply(Res_VipP)
let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let senha = Array.from({ length: parseInt(q) || 8 }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('')
reply(`🔐 Sua senha gerada: ${senha}`)
break

case 'docfake':
if(!isPremium) return reply(Res_VipP)
setTimeout(() => {reagir(from, "📝")}, 300)
sp = `/`
docfake = [
  {formato: `pdf`, link: `application/pdf`},
  {formato: `xml`, link: `application/xml`},
  {formato: `zip`, link: `application/zip`},
  {formato: `js`, link: `application/javascript`},
  {formato: `json`, link: `application/json`},
  {formato: `jpg`, link: `image/jpeg`},
  {formato: `ppt`, link: `application/vnd.ms-powerpoint`},
  {formato: `pptx`, link: `application/vnd.openxmlformats-officedocument.presentationml.presentation`},
  {formato: `apk`, link: `application/vnd.android.package-archive`},
  {formato: `txt`, link: `text/plain`},
  {formato: `aac`, link: `audio/aac`},
  {formato: `m4a`, link: `audio/mp4`},
  {formato: `mp4`, link: `video/mp4`},
  {formato: `mp3`, link: `audio/mpeg`},
  {formato: `gif`, link: `image/gif`},
  {formato: `svg`, link: `image/svg+xml`},
  {formato: `png`, link: `image/png`}
]
if(contar(q, sp) != 2) return reply(`*Ops, vejo que você está usando o comando de forma errada... Você deve usar neste formato e exemplo ↴*
*Formato:* ${prefix+command} nome${sp}tamanho${sp}formato

*Exemplo:* ${prefix+command} pack do pé${sp}250${sp}zip

${`-`.repeat(40)}

${docfake.map(d => `• ${d.formato}`).join(`\n`)}`)
barra = q.replace(sp+` `, sp).replace(` `+sp, sp).replace(` ${sp} `, sp)
var [nome, tamanho, tipo] = barra.split(sp)
AB = docfake.map(i => i.formato).indexOf(tipo.toLowerCase())
if(AB < 0) return reply(`O formato "${tipo}" não existe no banco de dados...`)
if(Number(tamanho) < 0) return reply(`O tamanho precisa ser um número maior que zero..`)
//======================\\
archivus.sendMessage(from, {document: fs.readFileSync('./database/docf.txt'), mimetype: docfake[AB].link, fileName: nome+`.`+docfake[AB].formato, fileLength: Number(tamanho) * 1000000, headerType: 4, contextInfo: {forwardingScore: 999, isForwarded:true}}, {quoted: selomomoayase})
break

case 'gerarnmr': case 'gerarnumero':
if(!isPremium) return reply(Res_VipP)
if(args.length < 1) return reply(`*Digite o DDD para gerar...*\n*Exemplo:* ${prefix + command} 91`)
nmrale1 = `${Math.floor(Math.random() * 3) + 6}`
nmrale2 = `${Math.floor(Math.random() * 3) + 6}`
nmrale3 = `${Math.floor(Math.random() * 3) + 6}`
nmrale4 = `${Math.floor(Math.random() * 3) + 6}`
nmrale5 = `${Math.floor(Math.random() * 3) + 6}`
nmrale6 = `${Math.floor(Math.random() * 3) + 6}`
nmrale7 = `${Math.floor(Math.random() * 3) + 6}`
nmrale8 = `${Math.floor(Math.random() * 3) + 6}`
nmrale = `${nmrale1+nmrale2+nmrale3+nmrale4+nmrale5+nmrale6+nmrale7+nmrale8}`
archivus.sendMessage(from, {text: `*Gerando número de tell com o DDD* ${q}⧽

⇒ ${q}9${nmrale}
wa.me/55${q+nmrale}`}, {quoted: seloctt})
break

case 'revelarvisu': case 'rvisu': case 'open':
if(!isPremium) return reply(Res_VipP)
if(!isQuotedVisuU || !isQuotedVisuU2) return reply(`marque uma foto/video em visualização unica`)
try{
reagir(from, "👁️")
if(JSON.stringify(info).includes("videoMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewVideo.viewOnce = false
viewVideo.video = {url: viewVideo.url}
viewVideo.caption += "\n\n👁️ *REVELANDO ONE VISION* 👁️"
archivus.sendMessage(from, viewVideo)
} else {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewImage.viewOnce = false
viewImage.image = {url: viewImage.url}
viewImage.caption += "\n\n👁️ *REVELANDO ONE VISION* 👁️"
archivus.sendMessage(from, viewImage)
}
} catch(e){
	reply(`Erro`)
	}
break

case 'gerarpessoa':
if(!isPremium) return reply(Res_VipP)
const gerarpessoa = gerarPessoa();
const infoPessoa = `
🤠 ㅤ${pushname}, aqui estão os detalhes da pessoa gerada:
👥 ㅤNome: ${gerarpessoa.Nome}
🛜 ㅤCPF: ${gerarpessoa.CPF}
🌐 ㅤRG: ${gerarpessoa.RG}
👁️‍🗨️ ㅤData de Nascimento: ${gerarpessoa["Data de Nascimento"]}
🔥 ㅤSexo: ${gerarpessoa.Sexo}
♈ ㅤSigno: ${gerarpessoa.Signo}
➖ ㅤFiliação: ${gerarpessoa.Filiação}
👾 ㅤMãe: ${gerarpessoa.Mãe}
🐂 ㅤPai: ${gerarpessoa.Pai}
🔆 ㅤOnline: ${gerarpessoa.Online}
🔰 ㅤE-mail: ${gerarpessoa["E-Mail"]}
⚜️ ㅤSenha: ${gerarpessoa.Senha}
🏠 ㅤEndereço:
➰ ㅤCEP: ${gerarpessoa.Endereço.CEP}
🆖 ㅤBairro: ${gerarpessoa.Endereço.Bairro}
〰️ ㅤCidade: ${gerarpessoa.Endereço.Cidade}
♾️ ㅤEstado: ${gerarpessoa.Endereço.Estado}
📞 ㅤTelefones: ${gerarpessoa.Telefones}
💪 ㅤCaracterísticas Físicas:
🗿 ㅤAltura: ${gerarpessoa["Características Físicas"].Altura}
😱 ㅤPeso: ${gerarpessoa["Características Físicas"].Peso}
⭕ ㅤTipo Sanguíneo: ${gerarpessoa["Características Físicas"]["Tipo Sanguíneo"]}
🟥 ㅤCor Favorita: ${gerarpessoa["Cor Favorita"]}
`;
reply(infoPessoa);
break;

case 'luffy':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}luffy e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/IMG-20231207-WA0021.jpg?text.0.text=${q}&text.0.position.x=-72%25&text.0.position.y=-42%25&text.0.size=17&text.0.color=000000&text.0.opacity=83&text.0.font.family=Ruda&text.0.font.style=italic&text.0.background.opacity=100&text.0.outline.blur=100`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
await archivus.sendMessage(from, { react: { text: `🕗`, key: info.key }})
}
break

case 'plabe':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}Plabe e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/images%20(2).jpeg?text.0.text=${q}&text.0.position.x=-50%25&text.0.position.y=-56%25&text.0.size=29&text.0.color=000000&text.0.opacity=62&text.0.font.family=Varela&text.0.font.style=italic`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
await archivus.sendMessage(from, { react: { text: `🕗`, key: info.key }})
}
break


case 'anonimo':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}anomimo e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/IMG-20240703-WA0208.jpg?text.0.text=${q}&text.0.position.x=-56%25&text.0.position.y=-24%25&text.0.size=30&text.0.color=000000&text.0.opacity=91&text.0.font.style=italic`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
await archivus.sendMessage(from, { react: { text: `🕗`, key: info.key }})
}
break

case 'ata':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}ata e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/WhatsApp%20Image%202023-12-06%20at%2012.04.15.jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-75%25&text.0.size=21&text.0.color=ffffff&text.0.font.family=Monda&text.0.font.style=italic`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
await archivus.sendMessage(from, { react: { text: `🌋`, key: info.key }})
}
break

case 'aplaca':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}aplaca e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 20) return reply('O texto é longo, até 20 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/IMG-20231205-WA0153.jpg?text.0.text=${q}%24%7Bq%7D&text.0.position.x=-34%25&text.0.position.y=-4%25&text.0.size=37&text.0.color=f00000`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
await archivus.sendMessage(from, { react: { text: `🤩`, key: info.key }})
}
break

case 'lousa':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}aplaca e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 20) return reply('O texto é longo, até 20 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/download.jpeg?text.0.text=${teks}&text.0.position.x=-55%25&text.0.position.y=-60%25&text.0.size=34&text.0.color=00fffa&text.0.font.family=Playball&text.0.background.opacity=100&text.0.outline.opacity=98`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
await archivus.sendMessage(from, { react: { text: `🤩`, key: info.key }})
}
break

case 'aviso':{
if(!isPremium) return reply(`so vip`)
if (args.length < 1) return reply(`${prefix}aviso e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 18) return reply('O texto é longo, até 18 caracteres') //maximo de caracteres
buffer =(`https://553555.sirv.com/Images/download.png?text.0.text=${q}&text.0.position.x=-65%25&text.0.position.y=-38%25&text.0.size=24&text.0.color=000000&text.0.font.family=Open%20Sans%20Condensed&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=83`)
archivus.sendMessage(from, {image: {url: buffer }, caption: ' *Plaquinha feita COM SUCESSO*'})
await archivus.sendMessage(from, { react: { text: `🌋`, key: info.key }})
}
break

case 'nome':
case 'nome2':
if (!q) return reply("\n☑ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗡𝗢𝗠𝗘\n\n━━━━━━━━━━━━━━━━━━━━━\n\nConsulta ++Completa de nome, retorna o número do CPF, data de nascimento e sexo.\n\nVeja abaixo um exemplo de como realizar a consulta:\n\n/nome CARINA ALVES MAIESKY\n\n━━━━━━━━━━━━━━━━━━━━━")
const blaaaaavvxx = `*CONSULTANDO O NOME AGUARDE ${pushname} 🔍...*`;
  reply(blaaaaavvxx)
try {
consulta = encodeURI(q)
ABC = await fetchJson(`https://diplomatasconsultasv1.squareweb.app/nome.php?nome=${q}`)
txt = `*‎☞ Resultado da sua consulta:*
${ABC.resultado}`
reply(txt)
} catch (e) {
console.log(e)
reply("NOME NÃO ENCONTRADO!")
}
break

case 'gerarcpf':
if(!isPremium) return reply(Res_VipP)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
archivus.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: seloMetaTokyo})
break

case 'cep':
if(!isPremium) return reply(Res_VipP)
try {
if(!q) return reply("digite o CEP que deseja buscar informações..");
ABC = await
fetchJson(`https://api.bronxyshost.com.br/api-bronxys/consultacep?cep=${q.trim()}&apikey=`+API_KEY_ALEATORY)
reply(`Cep: ${ABC.cep}\nRua: ${ABC.rua}\nComplemento:
${ABC.complemento}\nBairro: ${ABC.vizinhança}\nCidade: ${ABC.cidade}\nEstado:
${ABC.estado}\nGia: ${ABC.gia}\nIbge: ${ABC.ibge}\nddd: ${ABC.ddd}\nSiafi:
${ABC.siafi}`)
} catch (e) {
return reply("Erro..")
}
break

case 'lojinha':
case 'loja':
case 'comprar':
case 'alugar': {
reagir(from, "🛒");
moneybot = `Tabela de Preços para Aluguel do Bot

🔹 R$ 20,00 - 15 dias
🔹 R$ 25,00 - 30 dias
🔹 R$ 65,00 - 60 dias

💼 Adquira o Arquivo do Bot por apenas R$ 120,00!
Ao comprar, você recebe:

Direito a Atualizações Futuras: Mantenha seu bot sempre atualizado com as últimas melhorias.

Suporte Técnico Dedicado: Estamos aqui para ajudar você a qualquer momento!

Acesso a Recursos Exclusivos: Desfrute de funcionalidades que só os nossos archivus.s têm.


❄️ Para mais informações e detalhes sobre nossos serviços, digite ${prefix}criador e descubra tudo que temos a oferecer!
> Bot: ${NomeDoBot}`;
archivus.sendMessage(from, {
text: moneybot,
contextInfo: {
externalAdReply: {
title: `⟩ ${NickDono} ⟨`,
body: `⟩ ${NomeDoBot} ⟨`,
thumbnail: await getBuffer(`https://telegra.ph/file/ba61f92415fb96164.jpg`),
mediaType: 1,
showAdAttribution: true,
sourceUrl: `https://wa.me/5519982607241`
}
}
}, { quoted: selo });
}
break;

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
archivus.sendMessage(from, {text: dddlist}, {quoted: seloMetaTokyo})	
break

case 'encurtalink':
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://linktr.ee/aliancekkgr`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'listatm':
if(!SoDono) return reply(Res_SoDono)
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "_-_-_-_-_-_-_-_-_-_-_-_-\n\n";
for ( i = 0; i < rgp.length; i++) {
bl += `${i+1} - ID: ${rgp[i].id}\n\n- NOME DO USUÁRIO OU GRUPO: ${rgp[i].infonome}\n\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(Res_SoDono)
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo ja está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./armor/json/TMGP.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(Res_SoDono)
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./armor/json/TMGP.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm_totag':
if(!SoDono) return reply(Res_SoDono)
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão Do Bot: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão Do Bot: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
var MRC_TDs = groupMembers.map(i => i.id)
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão Do Bot: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
pink.image = {url: pink.url}
pink.mentions = MRC_TDs
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão Do Bot: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
blue.video = {url: blue.url}
blue.mentions = MRC_TDs
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
black.mentions = MRC_TDs
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
brown.mentions = MRC_TDs
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
purple.mentions = MRC_TDs
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão Do Bot: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
yellow.document = {url: yellow.url}  
yellow.mentions = MRC_TDs
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TDs
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TDs
}
global.yuii = DFC;
for (i = 0; i < rgp.length; i++) {
 kj = `${pushname}\n👥 Grupo: ${groupName}`
 seloblkk = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": kj, "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:XL;👑 ARCHIVUS 👑,;;;\nFN:👑 ARCHIVUS 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
arqv = `./DADOS/ban_tm.json`;
bantm = JSON.parse(fs.readFileSync(arqv));
let gruposBanidos = [];
let gruposNaoBanidos = [];
function separarGrupos(rgp) {
rgp.forEach(grupo => {
if (bantm.includes(grupo.id)) {
gruposBanidos.push(grupo.id);
} else {
gruposNaoBanidos.push(grupo.id);
}
});
} 
separarGrupos(rgp);
reply(`📊 *Relatório de Grupos:*
- 📌 *Total de grupos encontrados:* ${rgp.length}
- 🚫 *Grupos bloqueados:* ${gruposBanidos.length}
- ✉️ *Grupos enviados com sucesso:* ${gruposNaoBanidos.length}`);
gruposNaoBanidos.forEach(id => {
archivus.sendMessage(id, DFC, { quoted: seloblkk });
});
/*archivus.sendMessage(rgp[i].id, DFC, { quoted: seloblkk }).catch(e => {
console.log(e)
})*/
}
break

case 'fazertmadm':
if(!SoDono) return reply(Res_SoDono)
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão Do Bot: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão Do Bot: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
var MRC_TDs = groupAdmins
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão Do Bot: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
pink.image = {url: pink.url}
pink.mentions = MRC_TDs
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão Do Bot: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
blue.video = {url: blue.url}
blue.mentions = MRC_TDs
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
black.mentions = MRC_TDs
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
brown.mentions = MRC_TDs
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
purple.mentions = MRC_TDs
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão Do Bot: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
yellow.document = {url: yellow.url}  
yellow.mentions = MRC_TDs
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TDs
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TDs
}
global.yuii = DFC;
for (i = 0; i < rgp.length; i++) {
 kj = `${pushname}\n👥 Grupo: ${groupName}`
 seloblkk = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": kj, "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:XL;👑 ARCHIVUS 👑,;;;\nFN:👑 ARCHIVUS 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
arqv = `./DADOS/ban_tm.json`;
bantm = JSON.parse(fs.readFileSync(arqv));
let gruposBanidos = [];
let gruposNaoBanidos = [];
function separarGrupos(rgp) {
rgp.forEach(grupo => {
if (bantm.includes(grupo.id)) {
gruposBanidos.push(grupo.id);
} else {
gruposNaoBanidos.push(grupo.id);
}
});
} 
separarGrupos(rgp);
reply(`📊 *Relatório de Grupos:*
- 📌 *Total de grupos encontrados:* ${rgp.length}
- 🚫 *Grupos bloqueados:* ${gruposBanidos.length}
- ✉️ *Grupos enviados com sucesso:* ${gruposNaoBanidos.length}`);
gruposNaoBanidos.forEach(id => {
archivus.sendMessage(id, DFC, { quoted: seloblkk });
});
/*archivus.sendMessage(rgp[i].id, DFC, { quoted: seloblkk }).catch(e => {
console.log(e)
})*/
}
break

case 'fazertm':
if(!SoDono) return reply(Res_SoDono)
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão Do Bot: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão Do Bot: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão Do Bot: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão Do Bot: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão Do Bot: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `TRANSMISSÃO DO BOT`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
global.yuii = DFC;
for (i = 0; i < rgp.length; i++) {
 kj = `${pushname}\n👥 Grupo: ${groupName}`
 seloblkk = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": kj, "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:XL;👑 ARCHIVUS 👑,;;;\nFN:👑 ARCHIVUS 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
arqv = `./DADOS/ban_tm.json`;
bantm = JSON.parse(fs.readFileSync(arqv));
let gruposBanidos = [];
let gruposNaoBanidos = [];
function separarGrupos(rgp) {
rgp.forEach(grupo => {
if (bantm.includes(grupo.id)) {
gruposBanidos.push(grupo.id);
} else {
gruposNaoBanidos.push(grupo.id);
}
});
} 
separarGrupos(rgp);
reply(`📊 *Relatório de Grupos:*
- 📌 *Total de grupos encontrados:* ${rgp.length}
- 🚫 *Grupos bloqueados:* ${gruposBanidos.length}
- ✉️ *Grupos enviados com sucesso:* ${gruposNaoBanidos.length}
> Bot: ${NomeDoBot}`);
gruposNaoBanidos.forEach(id => {
archivus.sendMessage(id, DFC, { quoted: seloblkk });
});
/*archivus.sendMessage(rgp[i].id, DFC, { quoted: seloblkk }).catch(e => {
console.log(e)
})*/
}
break

case 'btm': case 'bantm': {
// developed by: elön muskiih
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
arqv = `./DADOS/ban_tm.json`
bantm = JSON.parse(fs.readFileSync(arqv));
bla = bantm.includes(from)
if(bla) return reply("*Este grupo já está incluso..*")  
bantm.push(from)
fs.writeFileSync(arqv, JSON.stringify(bantm))
archivus.sendMessage(from, {text: `*O grupo foi adicionado à lista de grupos bloqueados da transmissão com sucesso.*`, mentions: groupAdmins}, {quoted: seloMetaTokyo})
}
break;

case 'dbtm': case 'desbantm': {
// developed by: elön muskiih
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
arqv = `./DADOS/ban_tm.json`
bantm = JSON.parse(fs.readFileSync(arqv));
bla = bantm.includes(from)
if(!bla) return reply("*Este grupo já está incluso..*")
processo = bantm.indexOf(from)
while(processo >= 0){
bantm.splice(processo, 1)
processo = bantm.indexOf(from)
}
fs.writeFileSync(arqv, JSON.stringify(bantm))
archivus.sendMessage(from, {text: `*O grupo foi removido da lista de grupos bloqueados da transmissão com sucesso.*`, mentions: groupAdmins}, {quoted: seloMetaTokyo})
}
break;

case 'reviverqr':
if(!SoDono && !isnit) return 
exec("cd DADOS/ALEATORY-QR && rm -rf pre-key* sender* session*")
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'addgp':
if(!SoDono) return reply(Res_SoDono)
if(!q) return reply(`Hmmm`)
if(!Number(q)) return reply("Apenas números")
reagir(from, "🙂")
var getGroups = await archivus.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
archivus.groupParticipantsUpdate(ingfoo[q].id, [nmrdn], "add" )
setTimeout(() => {
archivus.groupParticipantsUpdate(ingfoo[q].id, [nmrdn], "promote")
archivus.sendMessage(ingfoo[q].id, {text: "*Bem vindo meu senhor* 🙇🏻‍♂️"})
}, 5000)
} catch(erro) {
reply(String(erro))
}
break

case 'reviver':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(`Tá afim de banir o número do bot é ?`)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await archivus.groupParticipantsUpdate(from, [menc_prt], "add" )
reply(`Usuário revivido com sucesso... 😰`)
break

case 'add': case 'adicionar':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(`Tá afim de banir o número do bot é ?`)
if(!q) return reply("KD o número do indivíduo ?")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
usu = q + "@s.whatsapp.net"
archivus.groupParticipantsUpdate(from, [usu], "add" )
reply("✅ Usuário adicionado ao grupo com sucesso...")
} catch {
reply("Erro 404")
}
break

case 'sairgp':
case 'sair':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
archivus.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
archivus.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
archivus.groupParticipantsUpdate(from, [sender], "demote")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*
> Bot: ${NomeDoBot}`
archivus.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply(Res_SoAdm)
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰
> Bot: ${NomeDoBot}`
archivus.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂
> Bot: ${NomeDoBot}`
archivus.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'sairdogp':
if(!SoDono)return reply(Res_SoDono)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await archivus.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
archivus.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
archivus.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await archivus.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await archivus.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await archivus.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link"
}
teks1 += `• *Grupo* : ${i}\n• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• Link do grupo: https://chat.whatsapp.com/${linkdogp}\n• *Dono_Ofc*: ${metadt.subjectOwner}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(Res_SoAdm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `*• Membro:* @${uscnt.id.split('@')[0]}\n*• Comandos:* ${uscnt.cmd_messages}*\n*• Mensagens:* ${uscnt.messages}*\n*• Aparelho:* ${uscnt.aparelho}*\n\n----------------------------------\n\n`
}
mention(teks)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

//MENU ADM NOVOS
case 'ativarcmds':
case 'ativacoes':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
var statuszada =
`
Anti Link Hard: ${isAntiLinkHard ? '✓' : '✕'} 
Comando: ${prefix}antilink 1 / 0

Anti Notas: ${isAntiNotas ? '✓' : '✕'} 
Comando: ${prefix}antinotas 1 / 0

Anti Golpes: ${isAntigolpes ? '✓' : '✕'} 
Comando: ${prefix}antigolpe 1 / 0

Limite Caracteres: ${isAntiFlood ? '✓' : '✕'} 
Comando: ${prefix}limitecaracteres 1 / 0

Anti Fake: ${isAntifake ? '✓' : '✕'} 
Comando: ${prefix}antifake 1 / 0

Anti Catalogo: ${isAnticatalogo ? '✓' : '✕'} 
Comando: ${prefix}anticatalogo 1 / 0

Anti Localização: ${Antiloc ? '✓' : '✕'} 
Comando: ${prefix}antiloc 1 / 0

X9 De Cargo de ADM: ${isx9 ? '✓' : '✕'}  
Comando: ${prefix}x9 1 / 0

Revelar visualização única: ${isX9VisuUnica ? '✓' : '✕'} 
Comando: ${prefix}x9visuunica 1 / 0

Modo Brincadeira: ${isModobn ? '✓' : '✕'} 
Comando: ${prefix}modobrincadeira 1 / 0

Anti Link Grupo: ${isAntilinkgp ? '✓' : '✕'} 
Comando: ${prefix}antilinkgp 1 / 0

Bem Vindo 1: ${isWelkom ? '✓' : '✕'} 
Comando: ${prefix}bemvindo 1 / 0

Bem Vindo 2: ${isWelkom2 ? '✓' : '✕'} 
Comando: ${prefix}bemvindo2 1 / 0

Level ${isLevelingOn ? '✓' : '✕'} 
Comando: ${prefix}leveling 1 / 0

Anti Vídeo: ${isAntiVid ? '✓' : '✕'} 
Comando: ${prefix}antivideo 1 / 0

Anti Imagem: ${isAntiImg ? '✓' : '✕'} 
Comando: ${prefix}antiimg 1 / 0

Anti Áudio: ${isAntiAudio? '✓' : '✕'} 
Comando: ${prefix}antiaudio 1 / 0

Anti Documento: ${Antidoc ? '✓' : '✕'} 
Comando: ${prefix}antidoc 1 / 0

Anti Contato ${isAntiCtt ? '✓' : '✕'}
Comando: ${prefix}antictt 1 / 0

Anti Sticker: ${isAntiSticker ? '✓' : '✕'} 
Comando: ${prefix}antisticker 1 / 0

Auto Sticker: ${isAutofigu ? '✓' : '✕'} 
Comando: ${prefix}autofigu 1 / 0

Simi 1: ${isSimi ? '✓' : '✕'} 
Comando: ${prefix}simih 1 / 0

Simi 2: ${isSimi2 ? '✓' : '✕'} 
Comando: ${prefix}simih2 1 / 0

Auto Resposta: ${isAutorepo ? '✓' : '✕'} 
Comando: ${prefix}autorepo 1 / 0

Anti Palavrão: ${isPalavrao ? '✓' : '✕'} 
Comando: ${prefix}antipalavrao 1 / 0

Nsfw: ${isNsfw ? '✓' : '✕'} 
Comando: ${prefix}nsfw 1 / 0

Recolher Link: ${isRecolherLink ? '✓' : '✕'} 
Comando: ${prefix}recolherlink
> Bot: ${NomeDoBot}`
archivus.sendMessage(from, {image: {url: logoslink.logo}, caption: statuszada}, {quoted: seloMetaTokyo})
break 

case 'listafake': case 'listafakes':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
reagir(from, "🇺🇸")
txt = `🇺🇸 *Lista de números fake presentes neste grupo:*\n`
let totalfake = 0
for(i = 0; i < groupMembers.length; i++) {
if(groupMembers[i].id.split(groupMembers[i].id.slice(2))[0] === ("55")) {} else {
txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].id.split("@")[0]}\n`
totalfake += 1
}
}
txt += `\n🇺🇸 Total: ${totalfake}`
if(totalfake > 0) {
var resp = isGroupAdmins ? mention : reply
resp(txt)
} else {
reply("Não há números fake neste grupo...")
}
break

case 'brlist': case 'listabr':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
reagir(from, "🇧🇷")
txt = `🇧🇷 *Lista de números brasileiros presentes neste grupo:*\n`
let totalbr = 0
for(i = 0; i < groupMembers.length; i++) {
if(groupMembers[i].id.split(groupMembers[i].id.slice(2))[0] === ("55")) {
if(groupMembers[i].id.includes(botNumber)) {} else {
txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].id.split("@")[0]}\n`
totalbr += 1
}
}
}
txt += `\n🇧🇷 Total: ${totalbr}`
if(totalbr > 0) {
var resp = isGroupAdmins ? mention : reply
resp(txt)
} else {
reply("Não há números brasileiros neste grupo...")
}
break

case 'dddlist':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins && !SoDono) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
reagir(from, "🇧🇷");
dddGroups = {};
totalddd = 0;
for (i = 0; i < groupMembers.length; i++) {
memberId = groupMembers[i].id;
memberNumber = memberId.split("@")[0];
for (let ddd = 11; ddd <= 99; ddd++) {
dddStr = ddd.toString();
if (memberNumber.startsWith(`55${dddStr}`)) {
if (!memberId.includes(botNumber)) {
if (!dddGroups[dddStr]) {
dddGroups[dddStr] = []; 
}
dddGroups[dddStr].push(memberId);
totalddd++;
}
}
}
}
txt = `🇧🇷 *Lista de números brasileiros presentes neste grupo por DDD:*\n`;
dddFound = false; 
for (let ddd in dddGroups) {
if (dddGroups[ddd].length > 0) {
txt += `\n*DDD +${ddd}:*\n`;
for (let member of dddGroups[ddd]) {
txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${member.split("@")[0]}\n`;
}
dddFound = true;
}
}
if (dddFound) {
txt += `\n🇧🇷 Total de membros encontrados: ${totalddd}`;
var resp = isGroupAdmins ? mention : reply;
resp(txt);
} else {
reply(`Não há números brasileiros com DDDs válidos (11 a 99) neste grupo...`);
}
break;

case 'listaddd':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!q) return reply(`Use ${prefix+command} DDD`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 10 || Number(args[0]) > 99) return reply("Retorne um DDD válido")
reagir(from, "🇧🇷")
txt = `🇧🇷 *Lista de números brasileiros com DDD +${args[0]} presentes neste grupo:*\n`
let totalddd = 0
for(i = 0; i < groupMembers.length; i++) {
if(groupMembers[i].id.split(groupMembers[i].id.slice(4))[0] === (`55${args[0]}`)) {
if(groupMembers[i].id.includes(botNumber)) {} else {
txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].id.split("@")[0]}\n`
totalddd += 1
}
}
}
txt += `\n🇧🇷 Total: ${totalddd}`
if(totalddd > 0) {
var resp = isGroupAdmins ? mention : reply
resp(txt)
} else {
reply(`Não há números com o DDD +${args[0]} neste grupo...`)
}
break

case 'listaddi': case 'ddilist':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(q.length < 1) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
if(isNaN(q)) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
men = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
}
}
if(teks.indexOf('⇒') < 0) return reply(`Nenhum número com o DDI *+${args[0]}* foi encontrado.`)
await archivus.sendMessage(from, {text: teks, mentions: men}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
break

case 'banfake': {//nunu
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
const participants = groupMetadata.participants;
const participantsToBan = participants.filter(participant => {
const phoneNumber = participant.id.split('@')[0];
return !phoneNumber.startsWith('55');
}).map(participant => participant.id);
if (participantsToBan.length === 0) {
return reply('⚠️ Todos os participantes têm números começando com 55. Nenhum participante foi banido.');
}
await archivus.groupParticipantsUpdate(from, participantsToBan, 'remove');
reply(`✅ Todos os participantes, exceto aqueles com números começando com 55, foram removidos com sucesso.`);
break;}//nunu q fez

case 'banddi': { // zerophoenix q fez
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!q) return reply('⚠️ Por favor, forneça o DDI que deseja remover.');
const ddi = q.trim();
const ddiNumber = parseInt(ddi, 10);
if (ddiNumber < 1 || ddiNumber > 999) {
return reply('😠 DDI inválido! Por favor, forneça um DDI válido entre 1 e 999.');
}
const participants = groupMetadata.participants;
const participantesParaRemover = participants.filter(participant => {
const phoneNumber = participant.id.split('@')[0];
return phoneNumber.startsWith(ddi);
}).map(participant => participant.id);
if (participantesParaRemover.length === 0) {
return reply('⚠️ Nenhum participante encontrado com o DDI fornecido.');
}
await archivus.groupParticipantsUpdate(from, participantesParaRemover, 'remove');
reply(`✅ Todos os participantes com o DDI ${ddi} foram removidos com sucesso.`);
break;} //By archivus 

case 'banddd': {//nunu
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!q) return reply('⚠️ Por favor, forneça o DDD que deseja remover.');
const ddd = q.trim();
const dddNumber = parseInt(ddd, 10);
if (dddNumber < 11 || dddNumber > 99) {
return reply('😠 Você acha que sou besta? Kkkkkk, seu otário! Só aceito DDDs de 11 a 99.');
}
const participants = groupMetadata.participants;
const participantequevaidevasco = participants.filter(participant => {
const phoneNumber = participant.id.split('@')[0];
return phoneNumber.startsWith(`55${ddd}`);
}).map(participant => participant.id);
if (participantequevaidevasco.length === 0) {
return reply('⚠️ Nenhum participante encontrado com o DDD fornecido.');
}
await archivus.groupParticipantsUpdate(from, participantequevaidevasco, 'remove');
reply(`✅ Todos os participantes com o DDD ${ddd} foram removidos com sucesso.`);
break;}//nunu q fez

case 'ping': {
reagir(from, "🏃🏻");
const os = require('os');
const speed = require('performance-now');
const startTime = speed(), pingTimestamp = (Date.now() / 1000) - info.messageTimestamp;
const latency = speed() - startTime;
const uptime = process.uptime();
const memoryUsage = process.memoryUsage().heapUsed, totalMemory = os.totalmem();
const formatMemory = (bytes) => bytes >= 1024 ** 3 ? `${(bytes / 1024 ** 3).toFixed(2)} GB` : `${(bytes / 1024 ** 2).toFixed(2)} MB`;
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const r = latency;
respon = `🔄 *Latência:* ${latency.toFixed(2)} ms \n⏱️ *Tempo de Resposta:* ${pingTimestamp.toFixed(3)} s \n⚡ *Velocidade de Mensagens:* ${(1 / latency).toFixed(2)} msg/s \n💪 *Ativo por:* ${kyun(uptime)} \n📈 *Memória Usada:* ${formatMemory(memoryUsage)} \n📦 *Memória Total:* ${formatMemory(totalMemory)} \n📊 *Porcentagem de Uso:* ${((memoryUsage / totalMemory) * 100).toFixed(2)}% \n👥 *Grupos Ativos:* ${Object.values(await archivus.groupFetchAllParticipating()).length} \n🛠️ *Versão do Node.js:* ${process.version} \n🌐 *Plataforma:* ${process.platform} \n🏗️ *Arquitetura:* ${process.arch}\n> Bot: ${NomeDoBot}`.trim();
await archivus.sendMessage(from, { 
image: { 
url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` 
}, 
caption: respon, 
mentions: [sender]
}, {quoted: seloMetaTokyo});
}
break;

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
await LIMPARDOCNT_QUEMJASAIU()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(a => a.id == i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q}  mensagens..`)
bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `${ac +1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`
}
mention(bli)
break

case 'security':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (dataGp[0].antidoc === false) {
dataGp[0].antidoc = true;
dataGp[0].antictt = true;
dataGp[0].antiloc = true;
dataGp[0].antilinkhard = true;
dataGp[0].antilinkgp = true;
dataGp[0].x9 = true;
dataGp[0].antifake = true;
dataGp[0].anticatalogo = true;
dataGp[0].limitec.active = true;
dataGp[0].limitec.quantidade = "10000";
dataGp[0].antinotas = true;
setGp(dataGp);
reply(`Modo segurança ativado.`);
} else {
dataGp[0].antidoc = false;
dataGp[0].antictt = false;
dataGp[0].antiloc = false;
dataGp[0].antilinkhard = false;
dataGp[0].antilinkgp = false;
dataGp[0].x9 = false;
dataGp[0].antifake = false;
dataGp[0].anticatalogo = false;
dataGp[0].limitec.active = false;
dataGp[0].limitec.quantidade = "0";
dataGp[0].antinotas = false;
setGp(dataGp);
reply(`Modo segurança desativado.`);
}
break;

case 'banghost':
if(!isGroup) return reply(Res_SoGrupo)  
if(!SoDono) return reply(Res_SoDono)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1500)
archivus.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
if(!isPremium) return reply(Res_VipP)
if(!q.trim().includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Oi Amor, sdds`)
var [ tx1, tx2 ] = q.trim().split("/")
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${tx2}
┞┧
╰┄━┄━┄━┄━┄━╮`
archivus.sendMessage(`${tx1}@s.whatsapp.net`, {text: bla})
reply(`Mensagem enviada com sucesso para o usuário: ${tx1}`)
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do seu bot foi alterado com sucesso para : ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O Nick Do Dono foi configurado para : ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para : ${q}`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono[0] = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
break

case 'wprivacyph':
if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`);
if (args[0] === '--help') return await mention(mess.helpPhotoPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`A minha foto do perfil agora está visível à todos.`);
await archivus.updateProfilePicturePrivacy('all')
} else if (args[0] === '-cntt') {
reply(`A minha foto do perfil agora está visível somente aos meus contatos.`);
await archivus.updateProfilePicturePrivacy('contacts')
} else if (args[0] === '-noall') {
reply(`A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`);
await archivus.updateProfilePicturePrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`);
}
break

case 'wprivacyls':
if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyls *--help*_`);
if (args[0] === '--help') return await mention(mess.helpLastSeenPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`O meu "visto por último" agora está visível à todos.`);
await archivus.updateLastSeenPrivacy('all')
} else if (args[0] === '-cntt') {
reply(`O meu "visto por último" agora está visível somente aos meus contatos.`);
await archivus.updateLastSeenPrivacy('contacts')
} else if (args[0] === '-noall') {
reply(`O meu "visto por último" está privado para todos.`);
await archivus.updateLastSeenPrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyls *--help*_`);
}
break;

case 'wprivacyst':
if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyst *--help*_`);
if (args[0] === '--help') return await mention(mess.helpStatusPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`O meu status agora está visível à todos.`);
await archivus.updateStatusPrivacy('all')
} else if (args[0] === '-cntt') {
reply(`O meu status agora está visível somente aos meus contatos.`);
await archivus.updateStatusPrivacy('contacts')
} else if (args[0] === '-noall') {
reply(`O meu status está privado para todos.`);
await archivus.updateStatusPrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyst *--help*_`);
}
break;

case 'privacybio':
if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}privacybio *--help*_`);
if (args[0] === '--help') return await mention(mess.helpPrivacyBio(prefix, sender));
if (args[0] === '-all') {
reply(`A bio agora está visível para todos.`);
await archivus.updateBioPrivacy('all');
} else if (args[0] === '-cntt') {
reply(`A bio agora está visível apenas para contatos.`);
await archivus.updateBioPrivacy('contacts');
} else if (args[0] === '-noall') {
reply(`A bio agora está oculta para todos.`);
await archivus.updateBioPrivacy('none');
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}privacybio *--help*_`);
}
break;

case 'wprivacygp':
if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`);
if (args[0] === '--help') return await mention(mess.helpGroupPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`Pronto, agora todos pode me adicionar em grupo normalmente.`)
await archivus.updateGroupsAddPrivacy(`all`)
} else if (args[0] === '-cntt') {
reply(`Agora somente meus contatos, pode me adicionar em grupo.`)
await archivus.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === '-noall') {
reply(`Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await archivus.updateGroupsAddPrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`);
}
break

//NOVOS COMANDOS DONOS//ZEROPHOENIX
case 'abrirall': // ?ZerØPhoenix¿ ᵏᵏᵍʳ
if(!SoDono && !info.key.fromMe) return reply(Res_SoDono);
try {// ?ZerØPhoenix¿ ᵏᵏᵍʳ
const allGroups = await archivus.groupFetchAllParticipating();
const unauthorizedGroups = [];
for (let groupId in allGroups) {
try {
await updateGroupSettingWithRetry(allGroups[groupId].id, "not_announcement");
await sleep(2000);
} catch (error) {
if (String(error).includes("not-authorized")) {
unauthorizedGroups.push({
id: allGroups[groupId].id,
nome: allGroups[groupId].subject,
criadoEm: allGroups[groupId].creation,
totalMembros: allGroups[groupId].participants.length
});// ?ZerØPhoenix¿ ᵏᵏᵍʳ
} else {
throw error;
}
}
}
if (unauthorizedGroups.length > 0) {
const detalhesGruposarchivus = unauthorizedGroups.map(grupo => 
`• Nome do Grupo: ${grupo.nome}\n• Criado: ${moment(grupo.criadoEm).format('DD/MM/YYYY')}\n• Total de Membros: ${grupo.totalMembros}\n`
).join('\n');
reply(`Não foi possível liberar os seguintes grupos (sem permissão):\n\n${detalhesGruposarchivus}`);
} else {
reply("Todos os grupos foram liberados com sucesso.");
}
} catch (erro) {
reply(`Erro ao tentar liberar todos os grupos: ${String(erro)}`);
}// ?ZerØPhoenix¿ ᵏᵏᵍʳ
break;

case 'autofegp':
if (!q) return reply(`Por favor, forneça o horário no formato HH:MM.`);
if (!isGroup) return reply(`Este comando só pode ser usado em grupos.`);
if (!isGroupAdmins) return reply(`Somente administradores podem usar este comando.`);
const time = q.trim();
if (!/^\d{2}:\d{2}$/.test(time)) return reply(`Formato de horário inválido. Use HH:MM.`);
autoCloseGroup[from] = time;
saveAutoCloseGroup(autoCloseGroup);
reply(`🔒 O grupo será fechado automaticamente todos os dias às ${time}.`);
break;	
    
case 'removeautofegp':
if (!isGroupAdmins) return reply(`Somente administradores podem usar este comando.`);
if (autoCloseGroup[from]) {
delete autoCloseGroup[from];
saveAutoCloseGroup(autoCloseGroup);
reply(`❌ A configuração de fechamento automático do grupo foi removida.`);
} else {
reply(`Não há configuração de fechamento automático para este grupo.`);
}
break;

case 'fecharall':
if (!SoDono && !info.key.fromMe) return reply(Res_SoDono);
try {
const grupos = await archivus.groupFetchAllParticipating();
const unauthorizedGroups = [];
for (let idGrupo in grupos) {
try {
await updateGroupSettingWithRetry(grupos[idGrupo].id, 'announcement');
await sleep(2000);
} catch (error) {
if (String(error).includes("not-authorized")) {
unauthorizedGroups.push({
id: grupos[idGrupo].id,
nome: grupos[idGrupo].subject,
criadoEm: grupos[idGrupo].creation,
totalMembros: grupos[idGrupo].participants.length
});
const groupMetadata = await archivus.groupMetadata(grupos[idGrupo].id);
const groupAdmins = groupMetadata.participants
.filter(member => member.admin !== null)
.map(admin => admin.id);
await archivus.sendMessage(grupos[idGrupo].id, {
text: `⚠️ Olá, administradores! Para que eu possa gerenciar o grupo automaticamente e realizar ações como silenciar, preciso que um de vocês me conceda permissões de administrador. Por favor, verifiquem as configurações e atribuam as permissões necessárias.`,
mentions: groupAdmins
});
} else {
throw error;
}
}
}
if (unauthorizedGroups.length > 0) {
const detalhesGrupos = unauthorizedGroups.map(grupo => 
`• Nome do Grupo: ${grupo.nome}\n• Criado: ${moment(grupo.criadoEm).format('DD/MM/YYYY')}\n• Total de Membros: ${grupo.totalMembros}\n`
).join('\n');
reply(`Não foi possível silenciar os seguintes grupos (sem permissão):\n\n${detalhesGrupos}`);
} else {
reply("Todos os grupos foram silenciados com sucesso. Apenas administradores podem enviar mensagens.");
}
} catch (erro) {
reply(`Erro ao tentar silenciar todos os grupos: ${String(erro)}`);
}
break;

case 'listar_admins':
if(!SoDono) return reply(Res_SoDono);
const grupoIdAdmins = args[0];
if (!grupoIdAdmins) return reply("Por favor, informe o ID do grupo.");
try {
const participantes = await archivus.groupParticipants(grupoIdAdmins);
const admins = participantes.filter(participante => participante.isAdmin).map(admin => `- ${admin.id.split('@')[0]}`);
reply(`Administradores do grupo:\n${admins.join("\n")}`);
} catch (erro) {
reply("Erro ao tentar listar os administradores: " + String(erro));
}
break;

case 'banx': case 'bantotal':
if(!SoDono) return reply(Res_SoDono);
const participante = args[0];
if (!participante) return reply("Por favor, informe o número do participante a ser removido, (ex: '5519982607241').");
try {
const grupos = await archivus.groupFetchAllParticipating();
const unauthorizedGroups = [];
const retryLimit = 3;
const delayBetweenAttempts = 2000;
for (let idGrupo in grupos) {
for (let attempt = 0; attempt < retryLimit; attempt++) {
try {
await archivus.groupParticipantsUpdate(grupos[idGrupo].id, [participante + '@s.whatsapp.net'], 'remove');
await sleep(2000);
break;
} catch (error) {
if (String(error).includes("not-authorized")) {
unauthorizedGroups.push(grupos[idGrupo].id);
break;
} else if (String(error).includes("rate-overlimit") && attempt < retryLimit - 1) {
await sleep(delayBetweenAttempts);
} else {
throw error;
}
}
}
l}
if (unauthorizedGroups.length > 0) {
reply(`Não foi possível remover o participante dos seguintes grupos (sem permissão): ${unauthorizedGroups.join(', ')}`);
} else {
lreply(`O participante ${participante} foi removido de todos os grupos com sucesso.`);
l}
} catch (erro) {
lreply("Erro ao tentar remover o participante dos grupos: " + String(erro));
}
break;

case 'sair_chat'://NKZIN
if(isGroup && !SoDono && !info.key.fromMe) return reply(Res_SoDono);
if(args.length < 2) {
return reply("Por favor, informe o ID do grupo que deseja sair.");
 }
const groupId = args[1];
try {
await archivus.groupLeave(groupId);
reply(`Saí do grupo: ${groupId}`);
} catch (erro) {
reply(`Erro ao tentar sair do grupo ${groupId}: ${String(erro)}`);
}
break

case 'sair_all'://Nkzin Xvideos 🇦🇱
if(!SoDono) return reply(Res_SoDono);
try {
const grupos = await archivus.groupFetchAllParticipating();
for (let idGrupo in grupos) {
await archivus.groupLeave(grupos[idGrupo].id);
}
reply("O bot saiu de todos os grupos com sucesso.");
} catch (erro) {
reply("Erro ao tentar sair dos grupos: " + String(erro));
}
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
setting.prefix = q
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image", API_KEY_ALEATORY)
logoslink.logo.splice([])
fs.writeFileSync('./DADOS/logos.json', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./DADOS/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
}, 1200)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'agendar':
if(!SoDono) return reply(Res_SoDono)
if (!q) return reply(`❌ Use o comando no formato:\n${prefix}agendar <data de vencimento> | <descrição>\nExemplo: ${prefix}agendar 25/12/2024 | Pagar contas`)
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
//Canal: https://whatsapp.com/channel/0029Va6riekH5JLwLUFI7P2B
const path = './armor/json/agendamentos.json'
if (!fs.existsSync(path)) {
fs.writeFileSync(path, JSON.stringify([], null, 2))
}
const [dataVencimento, descricao] = q.split('|').map(item => item.trim())
if (!dataVencimento || !descricao) {
return reply('❌ Formato inválido! Use: data de vencimento | descrição.')
}
const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/
if (!regexData.test(dataVencimento)) {
return reply('❌ Data de vencimento inválida! Use o formato: DD/MM/AAAA.')
}
const [dia, mes, ano] = dataVencimento.match(/\d+/g).map(Number)
const vencimento = moment.tz(`${ano}-${mes}-${dia}`, 'YYYY-MM-DD', 'America/Sao_Paulo')
if (!vencimento.isValid() || vencimento.isBefore(moment.tz('America/Sao_Paulo'))) {
return reply('❌ A data de vencimento deve ser no futuro.')
}
const agora = moment.tz('America/Sao_Paulo')
const agendamento = {
descricao,
criado_em: {
data: agora.format('DD/MM/YYYY'),
hora: agora.format('HH:mm:ss'),
},
vencimento: {
data: vencimento.format('DD/MM/YYYY'),
hora: vencimento.format('HH:mm:ss'),
}
}
const agendamentos = JSON.parse(fs.readFileSync(path))
agendamentos.push(agendamento)
fs.writeFileSync(path, JSON.stringify(agendamentos, null, 2))
reply(
`✅ *Agendamento criado com sucesso!*\n\n` +
`📅 *Data de Vencimento:* ${agendamento.vencimento.data}\n` +
`🕒 *Hora:* ${agendamento.vencimento.hora}\n` +
`📝 *Descrição:* ${agendamento.descricao}\n` +
`📌 *Criado em:* ${agendamento.criado_em.data} às ${agendamento.criado_em.hora}`
)
setInterval(() => {
let agendamentosAtualizados = JSON.parse(fs.readFileSync(path))
const agora = moment.tz('America/Sao_Paulo')
agendamentosAtualizados.forEach((evento, index) => {
const vencimento = moment.tz(`${evento.vencimento.data} ${evento.vencimento.hora}`, 'DD/MM/YYYY HH:mm:ss', 'America/Sao_Paulo')
if (vencimento.isSameOrBefore(agora)) {
archivus.sendMessage(nmrdn, {text: 
`🎉 *AVISO DE VENCIMENTO*\n\n` +
`📅 *Data do Vencimento:* ${evento.vencimento.data}\n` +
`🕒 *Hora:* ${evento.vencimento.hora}\n` +
`📝 *Descrição:* ${evento.descricao}\n\n` +
`📌 *Criado em:* ${evento.criado_em.data} às ${evento.criado_em.hora}`}, {quoted: selomomoayase})
agendamentosAtualizados.splice(index, 1)
}
})
fs.writeFileSync(path, JSON.stringify(agendamentosAtualizados, null, 2))
}, 60000)
} catch (e) {
console.error(e)
reply('❌ Ocorreu um erro ao criar o agendamento.')
}
break

case 'verificar':
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
//Canal: https://whatsapp.com/channel/0029Va6riekH5JLwLUFI7P2B
const path = './armor/json/agendamentos.json'
if (!fs.existsSync(path)) {
return reply('📋 *Nenhum agendamento encontrado.*')
}
const agendamentos = JSON.parse(fs.readFileSync(path))
if (agendamentos.length === 0) {
return reply('📋 *Nenhum agendamento encontrado.*')
}
let texto = '📋 *Lista de Agendamentos*\n\n'
agendamentos.forEach((evento, index) => {
const vencimento = moment.tz(
`${evento.vencimento.data} ${evento.vencimento.hora}`,
'DD/MM/YYYY HH:mm:ss',
'America/Sao_Paulo'
)
const restante = vencimento.fromNow()
texto += 
`🔖 *Agendamento ${index + 1}*\n` +
`📝 *Descrição:* ${evento.descricao}\n` +
`📅 *Vencimento:* ${evento.vencimento.data} às ${evento.vencimento.hora}\n` +
`⏳ *Tempo Restante:* ${restante}\n` +
`📌 *Criado em:* ${evento.criado_em.data} às ${evento.criado_em.hora}\n\n`
})
reply(texto.trim())
} catch (e) {
console.error(e)
reply('❌ Ocorreu um erro ao verificar os agendamentos.')
}
break

///By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄

case 'setprefixs':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./settings/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
archivus.groupUpdateSubject(from, `${body.slice(9)}`)
archivus.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: seloMetaTokyo})
break

case 'fotobot':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
archivus.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if(!menc_jid2[0] || menc_jid2[1]) return reply("Marque o @ do usuário para roubar a foto do perfil dele, para a do bot..")
let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
try {
pp = await archivus.profilePictureUrl(id)
buffer = await getBuffer(pp)
archivus.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
archivus.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
archivus.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${sender.split('@')[0]}\nMensagem : ${body.slice(6)}`})
}
reply('Transmissão enviada..')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${sender.split('@')[0]}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono1 = q.trim().replaceAll("@", "")
dono1 = nescessario.dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono2 = q.trim().replaceAll("@", "")
dono2 = nescessario.dono2
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono3 = q.trim().replaceAll("@", "")
dono3 = nescessario.dono3
setNes(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono4 = q.trim().replaceAll("@", "")
dono4 = nescessario.dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono5 = q.trim().replaceAll("@", "")
dono5 = nescessario.dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono6 = q.trim().replaceAll("@", "")
dono6 = nescessario.dono6
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `👑 𝙼𝙴𝚂𝚃𝚁𝙴 𝚂𝚄𝙿𝚁𝙴𝙼𝙾 ↴
wa.me/${numerodono_ofc}

DΞFᏟϴΝ 1⇒ ${dono1}
DΞFᏟϴΝ 2⇒ ${dono2}
DΞFᏟϴΝ 3⇒ ${dono3}
DΞFᏟϴΝ 4⇒ ${dono4}
DΞFᏟϴΝ 5⇒ ${dono5}
LÍDΞR SUPΞRIϴR ↴
wa.me/${dono6}`
reply(p)
break

case 'adms':
case 'admins':
case 'chamaradms':
setTimeout(() => {reagir(from, react2)}, 300)
archivus.sendMessage(from, {text: `⚠️ *CHAMANDO TODOS OS ADMINS...*
${pushname} *solicita a vossa presença* 👀${q ? `\n\n*-> Recado:* _"${q}"_` : ``}`, mentions: groupAdmins}, {quoted: seloMetaTokyo})
break

case 'totalfunc': case 'totalfunctions':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const functionNames = fileContent.match(/function\s+(\w+)/g);
const funcCount = functionNames ? functionNames.length : 0;
reply(`📂 O bot possui atualmente ${funcCount} funções definidas 💻`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de funções ❌");
}
break;

case 'totalvar': case 'totalvariables':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const variableNames = fileContent.match(/var\s+(\w+)|const\s+(\w+)|let\s+(\w+)/g);
const varCount = variableNames ? variableNames.length : 0;
reply(`📦 O bot possui atualmente ${varCount} variáveis globais 🎉`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de variáveis globais ❌");
}
break;

case 'totalimport': case 'totalimports':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const imports = fileContent.match(/import\s+.+?\s+from\s+['"].+?['"]/g);
const importCount = imports ? imports.length : 0;
reply(`📥 O bot possui atualmente ${importCount} imports de módulos 📚`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de imports ❌");
}
break;

case 'totalclass': case 'totalclasses':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const classes = fileContent.match(/class\s+(\w+)/g);
const classCount = classes ? classes.length : 0;
reply(`🏛️ O bot possui atualmente ${classCount} classes definidas 👩‍💻`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de classes ❌");
}
break;

case 'totalasync': case 'totalasyncfunctions':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const asyncFunctions = fileContent.match(/\basync\s+function\b/g);
const asyncCount = asyncFunctions ? asyncFunctions.length : 0;
reply(`⏳ O arquivo possui atualmente ${asyncCount} funções assíncronas 🌐`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de funções assíncronas ❌");
}
break;

case 'totalreturns': case 'totalreturn':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const returns = fileContent.match(/\breturn\b/g);
const returnCount = returns ? returns.length : 0;
reply(`↩️ O arquivo possui atualmente ${returnCount} declarações return 🎯`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de declarações return ❌");
}
break;

case 'totalloops': case 'totalloop':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const loops = fileContent.match(/\b(for|while)\b/g);
const loopCount = loops ? loops.length : 0;
reply(`🔄 O arquivo possui atualmente ${loopCount} loops (for/while) 🔁`);
} catch (error) {
    reply("[ ❗ ] Erro ao obter o total de loops ❌");
}
break;

case 'totalifs': case 'totalif':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const ifStatements = fileContent.match(/\bif\b/g);
const ifCount = ifStatements ? ifStatements.length : 0;
reply(`🔎 O arquivo possui atualmente ${ifCount} estruturas condicionais (if) 🧐`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de estruturas if ❌");
}
break;

case 'totallines': case 'totalines':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const lineCount = fileContent.split('\n').length;
reply(`📏 O arquivo index.js possui atualmente ${lineCount} linhas de código 📜`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de linhas de código ❌");
}
break;

case 'totaldocs': case 'totaljsdoc':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const jsDocs = fileContent.match(/\/\*\*\s*[^*]*\*+(?:[^/*][^*]*\*+)*\//g);
const docCount = jsDocs ? jsDocs.length : 0;
reply(`📖 O arquivo possui atualmente ${docCount} funções documentadas com JSDoc 📚`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de documentações JSDoc ❌");
}
break;

case 'totalrequires': case 'totalmodules':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const requires = fileContent.match(/\brequire['"].+?['"]/g);
const requireCount = requires ? requires.length : 0;
reply(`📦 O arquivo possui atualmente ${requireCount} chamadas de módulos externos com require 🔌`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de chamadas require ❌");
}
break;

case 'totalpromises': case 'totalpromise':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const promises = fileContent.match(/\bPromise\b/g);
const promiseCount = promises ? promises.length : 0;
reply(`⏳ O arquivo possui atualmente ${promiseCount} usos de Promises 🔮`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de Promises ❌");
}
break;

case 'totaltodos': case 'totaltodo':
if(!SoDono) return reply(Res_SoDono);
try {
const fileContent = fs.readFileSync("index.js").toString();
const todos = fileContent.match(/TODO/g);
const todoCount = todos ? todos.length : 0;
reply(`📝 O arquivo possui atualmente ${todoCount} itens TODO para desenvolvimento futuro 🚧`);
} catch (error) {
reply("[ ❗ ] Erro ao obter o total de TODOs ❌");
}
break;

case 'addcmd': 
case 'addcase':
if(!SoDono) return reply(Res_SoDono);
const pula = [fs.readFileSync('index.js', 'utf8').slice(0, fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('index.js', 'utf8').slice(fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5)].join('\n\n');
fs.writeFileSync('index.js', pula);
reagir('⚙️')
reply('Nova case adicionada com sucesso meu querido dono😻🫶')
break

case 'substituir':
if(!SoDono) return reply(Res_SoDono);
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
await archivus.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'}, {quoted: selo})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'admlist':
if(!SoDono) return reply(Res_SoDono);
if (!groupAdmins || groupAdmins.length === 0) return reply("Não foi possível encontrar administradores neste grupo.");
let adminList = "*Lista de Administradores do Grupo:*\n\n";
groupAdmins.forEach((admin, index) => {
const adminNumber = admin.split("@")[0];
 adminList += `+${adminNumber} `;
});
archivus.sendMessage(nmrdn, { text: adminList, mentions: groupAdmins });
break;

case 'totalcmd': case 'totalcases':
try {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
const cont = caseNames.length;
reply(`O bot possui atualmente ${cont} comandos ヅ`);
} catch (error) {
reply("Erro ao obter o total de comandos");
}
break;

case 'index-bot':
if(!SoDono) return reply(Res_SoDono);
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
await archivus.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."}, {quoted: selo})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if(!SoDono) return reply(Res_SoDono);
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
reply(`${getCase(q)}`)
} catch(error) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break

case 'getfunction':
case 'puxarfuncao':
try {
if (!SoDono) return reply(Res_SoDono);
reply('Procurando a função... Aguarde um pouco! <3');
const getFunction = (functionName) => {
const regex = new RegExp(`function\\s+${functionName}\\s*\.*?\\\s*\\{[^]*?\\}`, 'g');
const matches = fileContent.match(regex);
return matches ? matches[0] : null;
}
await sleep(500);
const functionCode = getFunction(q);
if (functionCode) {
reply(`Aqui está a função:\n\`\`\`javascript\n${functionCode}\n\`\`\``);
} else {
reply('Função não encontrada, você deve ter escrito errado...');
}
} catch (error) {
reply('Ocorreu um erro ao buscar a função.');
}
break;

case 'getlinha': case 'puxarlinha':
if(!SoDono) return reply(Res_SoDono);
const arquivo = fs.readFileSync("index.js", "utf-8")
const localCase = arquivo.indexOf(`case '${q}'`)
if(localCase === -1) return reply('Comando não encontrado.')
reply(`O comando '${q}' está na linha: ` + arquivo.substr(0, localCase).split("\n").length)
break

case 'cases':
if(!SoDono) return reply(Res_SoDono);
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if(caseNames) {
return caseNames.map((caseName, index) => `• ${index + 1} -> ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
archivus.sendMessage(from, { text: listCases() }, { quoted: seloctt });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./armor/json/TABELA/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./armor/json/TABELA/tabela-${from}.json`)) {
return reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./armor/json/TABELA/tabela-${from}.json`)); 
blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`
mention(blity)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Comando apenas para administradores ou dono..")
if(DonoOficial) {
if(fs.existsSync("./armor/json/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./armor/json/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'gethtml':
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
if (q.length < 5) return reply(`Exemplo: ${prefix+command} http://exemplo.com`)
let url = q.trim()
if (!url.startsWith('http://') && !url.startsWith('https://')) {
url = 'http://' + url
}
reply(`🔍 Acessando o site...`)
let response = await fetch(url)
if (!response.ok) {
return reply(`Erro ao acessar o site. Código de status: ${response.status}`)
}
let html = await response.text()
console.log(`HTML completo do site ${url}:`)
console.log(html)
let maxLength = 2000
let truncatedHtml = html.length > maxLength ? html.substring(0, maxLength) + '...' : html
reply(`❪ 𝗛𝗧𝗠𝗟 𝗱𝗼 𝘀𝗶𝘁𝗲 𝘁𝗲𝗻𝗵𝗼 𝗽𝗲𝗿𝗶𝗼𝗱𝗼 𝗽𝗮𝗿𝗮 𝘁𝗲𝘀𝘁𝗮❪: \n\n${truncatedHtml}`)
} catch (e) {
console.log(e)
return reply("Erro ao acessar o site.")
}
break

case 'imagine': 
  if (!q) return reply(`Por favor, forneça uma descrição para gerar a imagem`)
  async function iaOrbitalGerarImg(prompt) {
    try {
      const url = `https://api-ia.orbital.host/orbital/img-ai?prompt=${encodeURIComponent(prompt)}&model=v3`
      const response = await axios.get(url)
      const resultadoOrbital = response.data.url
      console.log(resultadoOrbital)
      return resultadoOrbital
    } catch (error) {
      console.error('Erro ao extrair dados:', error)
      throw error
    }
  }
  try {
    const imagemUrl = await iaOrbitalGerarImg(q)
    await archivus.sendMessage(from, { image: { url: imagemUrl }, caption: `${q}` }, { quoted: info })
  } catch (erro) {
    console.error('Erro ao gerar imagem:', erro)
    reply('erro.')
  }
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Comando apenas para administradores ou dono..")  
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./armor/json/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'serpremium':
case 'serprem':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
premium.push(nmrdn)
fs.writeFileSync('./DADOS/premium.json', JSON.stringify(premium))
mention(`Pronto @${numerodono_ofc} você foi adicionado na lista premium.`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = archivus.sendMessage(from, reactionMessage)
break

case 'iniciar_o_jogo':
if(jogo_iniciado) return reply("o jogo já foi iniciado, aguarde terminar..")
mentions(`- ${tempo} Atenção a todos do grupo, o Usuário @${sender.split("@")[0]} iniciou o jogo `, sender)
break

case 'addcmdpremium':
if(!SoDono) return reply(Res_SoDono);
if(nescessario.cmdpremium.includes(q.replace(prefix,
"").trim())) return reply("Este comando já se encontra na lista premium.")
nescessario.cmdpremium.push(q.replace(prefix, "").trim())
cmdpremium = nescessario.cmdpremium
setNes(nescessario)
reply(`Comando ${q.trim()} adicionado para apenas usuarios premium tirar`);
break;

case 'tirarcmdpremium':
if(!SoDono) return reply(Res_SoDono);
if(!nescessario.cmdpremium.includes(q.replace(prefix,
"").trim())) return reply("Este comando não é premium, não esta na lista para ser tirado.")
nescessario.cmdpremium.splice(nescessario.cmdpremium.indexOf(q.replace(prefix,
"").trim()), 1)
cmdpremium = nescessario.cmdpremium
setNes(nescessario)
reply(`Comando ${q.trim()} tirado da lista premium.`);
break;

case 'cmdpremium':
if(nescessario.cmdpremium.length == 0) return reply("Não contém nenhum comando na lista Premium")
ABC = "Comandos Premium:\n\n"
for ( i of nescessario.cmdpremium) {
ABC += `_- ${i}\n\n`
}
reply(ABC)
break;

case 'addpremium':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
bla = premium.includes(marc_tds)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(marc_tds)
fs.writeFileSync('./DADOS/premium.json', JSON.stringify(premium))
archivus.sendMessage(from, {text: `👑@${marc_tds.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [marc_tds]}, {quoted: seloMetaTokyo})  
break 

case 'delpremium':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
if(!premium.includes(marc_tds)) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = marc_tds
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./DADOS/premium.json', JSON.stringify(premium))
archivus.sendMessage(from, {text: ` @${marc_tds.split("@")[0]} foi tirado da lista premium com sucesso..`, mentions: [marc_tds]}, {quoted: seloMetaTokyo})
break

case 'limpar2':
setTimeout(() => {reagir(from, "🗑️")}, 300)
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
clearcmd = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
archivus.sendMessage(from, {text: clearcmd}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'limpar':
    setTimeout(() => {reagir(from, "🗑️")}, 300)
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)

    const clear = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`
    const clear2 = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`

    reply(`*GRUPO FECHADO PARA LIMPEZA* 🗑️`)
    archivus.groupSettingUpdate(from, 'announcement')

    // Intervalo de 1 segundo entre as mensagens
    const interval = 1000 // 1 segundo

    // Enviar a mensagem de limpeza 20 vezes
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            if (i === 19) {
                archivus.sendMessage(from, { text: clear2 }) // Na última vez, envia a mensagem finalizada
            } else {
                archivus.sendMessage(from, { text: clear })
            }
        }, i * interval)
    }

    // Finalizar a limpeza e reabrir o grupo após 20 mensagens
    setTimeout(() => {
        archivus.sendMessage(from, { text: `*LIMPEZA CONCLUÍDA* ✅` })
        archivus.groupSettingUpdate(from, 'not_announcement')
    }, 20 * interval) // Reabrir o grupo após 20 segundos (20 mensagens)

break


case 'd_':
if(!isPremium) return reply(Res_VipP)
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image", API_KEY_ALEATORY)
fundo1 = res
Links_P.fundo1 = res
fs.writeFileSync("./DADOS/links.json", JSON.stringify(Links_P, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image", API_KEY_ALEATORY)
fundo2 = res
Links_P.fundo2 = res
fs.writeFileSync("./DADOS/links.json", JSON.stringify(Links_P, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(Res_SoDono)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`Ativando anti ligação para o bot...\ncaso liguem para o bot serão bloqueado..`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('Desativando anti ligação para o bot...')
}
break

case 'antipv':  
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Ativando anti privado para o bot...\ncaso mandem mensagem para o bot serão bloqueado..`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('Desativando anti privado para o bot...')
}
break

case 'antipv2':
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("*Sucesso alterado para modo antipv, pv não poderá ser utilizado, mas não bloquearei, só flodarei mensagem a cada mensagem dele..")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply("*Sucesso modo antipv desligado, pv liberado.")
}
break

case 'antipv3':
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("*Anti Pv3 Ativado comn sucesso, irei ignorar todas mensagem recebida no privado, exceto: Dono, premium")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("*Sucesso modo Anti PV3 desligado, pv liberado.")
}
break

case 'destravapv':
if(!SoDono) return reply(Res_SoDono);
 if (args.length < 1) {
return reply('Por favor, forneça o número e a quantidade. Exemplo: !destrava 555499669644/quantidade');
}
const [numero, qtd] = args[0].split('/');
if (!numero || !qtd || isNaN(qtd)) {
return reply('Número ou quantidade inválidos. Exemplo: !destrava 555499669644/quantidade');
}
const mensagemDestrava = `
.
.
.
.
.
.
.
.
.
.
.
.
 
 
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
 
 
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
 
 
.
.
.
.
.
.
.
.
.
.
`;
for (let i = 0; i < parseInt(qtd); i++) {
await archivus.sendMessage(`${numero}@s.whatsapp.net`, { text: mensagemDestrava });
}
reply(`Mensagem destrava enviada para o número ${numero} ${qtd} vezes.`);
break;

case 'msgantipv':
if(!SoDono) return reply(Res_SoDono);
if(!q.trim()) return reply("KD a mensagem para eu por no antipv2")
msgantipv2 = q.trim()
nescessario.msgantipv2 = q.trim()
setNes(nescessario)
reply("Mensagem do antipv2 foi alterada.");
break;

case 'fixar':
if (!q) return reply("❌ Por favor, digite o número do chat que deseja fixar. fixar +55 19 98260-7241");// zyx 07Hz
numeroCompleto = q;
numeroFormatado = numeroCompleto.replace(/[^\d]/g, '') + '@s.whatsapp.net';
try { // zyx :)
await archivus.chatModify({
pin: true
}, numeroFormatado);
reply("📌 Chat fixado com sucesso!");
} catch (error) {
console.error("Erro ao fixar o chat:", error);
reply("❌ Não foi possível fixar o chat. Verifique o número e tente novamente.");
}
break;

case 'bloquear': //By ?ZerØPhoenix¿ ᵏᵏᵍʳ
if(!SoDono) return reply(Res_SoDono)
if(!q) return reply(`Você deve especificar o número do usuário a ser bloqueado.\nExemplo: ${prefix}bloquear 5519982607241`)
try {
await archivus.updateBlockStatus(`${q}@s.whatsapp.net`, "block")
reply("Usuário bloqueado com sucesso.")
} catch (erro) {
reply(`Erro ao bloquear usuário: ${erro}`)
}
break

case 'desbloquear'://By ?ZerØPhoenix¿ ᵏᵏᵍʳ
if(!SoDono) return reply(Res_SoDono)
if(!q) return reply(`Você deve especificar o número do usuário a ser desbloqueado.\nExemplo: ${prefix}desbloquear 5519982607241`)
try {
await archivus.updateBlockStatus(`${q}@s.whatsapp.net`, "unblock")
reply("Usuário desbloqueado com sucesso.")
} catch (erro) {
reply(`Erro ao desbloquear usuário: ${erro}`)
}
break

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = menc_jid2 || q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+SNET || menc_prt
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse Número ja esta incluso*')
ban.push(blcp)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
archivus.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = menc_jid2 || q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+SNET || menc_prt
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
archivus.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
archivus.sendMessage(from, {text: jrc.trim(), mentions: ban})
break

case 'moedas': case 'moeda':
try {
if(q.trim().length > 7) {
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/Moedas_Converter?q=${q}&apikey=${API_KEY_ALEATORY}`)
reply(AB?.RST)
} else {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/Moedas_Agora?apikey=${API_KEY_ALEATORY}`)
reply(`${ABC?.dolar}\n\n${ABC?.euro}\n\n${ABC?.libra}\n\n${ABC?.bitcoin}\n\n${ABC?.ethereum}\n\n${ABC?.bovespa}\n\n${ABC?.ouro}`);
}
} catch {
return reply("Erro, breve volta.")
}
break;

case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return archivus.sendMessage(from, {text: `root@ALEATORY-BOT:~ ${err}`}, {quoted: seloMetaTokyo})
if(stdout) {
archivus.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
archivus.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'gtts':
try {
if (args.length < 1) return archivus.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: seloMetaTokyo})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return archivus.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: seloMetaTokyo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
archivus.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply("Erro..")
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.trim().toLowerCase().includes("blockcmd blockcmd") || (q.trim().toLowerCase().includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(q.trim().toLowerCase()))return reply('Este comando já está blockeado')
addComandos(from, q.trim().toLowerCase())
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.trim().toLowerCase().includes("blockcmd unblockcmd") || (q.trim().toLowerCase().includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(q.trim().toLowerCase()))return reply('Este comando já está  desbloqueado')
deleteComandos(from, q.trim().toLowerCase())
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
archivus.sendMessage(from, {text: tkks.trim()}, {quoted: seloMetaTokyo})
break

case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return archivus.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: seloMetaTokyo})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split(SNET)[0]}\n: ${avalie}`
archivus.sendMessage(nmrdn, {text: tdptls}, {quoted: seloMetaTokyo})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return archivus.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: seloMetaTokyo})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split(SNET)[0]}\nErro ou bug: ${bug}`
archivus.sendMessage(nmrdn, {text: teks1}, {quoted: seloMetaTokyo})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return archivus.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: seloMetaTokyo})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split(SNET)[0]}\n: ${sugestao}`
archivus.sendMessage(nmrdn, {text: sug}, {quoted: seloMetaTokyo})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break
//==========(pesquisa/scraper)==========\\
case 'pinterest2':
if (!q) return reply(`𝙳𝚒𝚐𝚒𝚝𝚎 𝚘 𝚗𝚘𝚖𝚎 𝚍𝚊 𝚒𝚖𝚊𝚐𝚎𝚖 𝚚𝚞𝚎 𝚟𝚘𝚌ê 𝚚𝚞𝚎𝚛 𝚋𝚞𝚜𝚌𝚊𝚛\n𝙴𝚡𝚎𝚖𝚙𝚕𝚘: ${prefix + command} Frieren`);
reply('🤓 𝙰𝚐𝚞𝚊𝚛𝚍𝚘 𝙴𝚜𝚝𝚘𝚞 𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝙰 𝙸𝚖𝚊𝚐𝚎𝚖 𝚂𝚊𝚒𝚋𝚊 𝚀𝚞𝚎 𝙽𝚎𝚖 𝚂𝚎𝚖𝚙𝚛𝚎 𝙰 𝙸𝚖𝚊𝚐𝚎𝚖 𝙿𝚎𝚍𝚒𝚍𝚊 𝚅𝚒𝚛𝚊 𝙲𝚎𝚛𝚝𝚘');
//hiromods 🤓
//=========Scraper do Pinterest==========\\
axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + q, {
headers: {
"cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
}
}).then(({ data }) => {
const $ = cheerio.load(data);
const validResults = [];

//=====Pega os links das imagens do Pinterest ne pae=====\\
$('div > a').get().forEach(b => {
const link = $(b).find('img').attr('src');
if (link && link.startsWith('http')) {
//====Ajusta os links das imagens e elimina links inválidos ne pae====\\
const adjustedLink = link.includes('pinimg.com') ? link.replace(/236/g, '736') : null;
if (adjustedLink) {
validResults.push(adjustedLink);
} //hiromods 🤓
}
});
if (validResults.length === 0) {
return reply('Nenhuma imagem encontrada. Tente novamente com outro termo.');
} //hiromods 🤓
//====={Seleciona até 5 imagens aleatórias=====\\
const numberOfImages = Math.min(1, validResults.length);
const selectedImages = [];
const usedIndexes = new Set();
while (selectedImages.length < numberOfImages) {
const randomIndex = Math.floor(Math.random() * validResults.length);
if (!usedIndexes.has(randomIndex)) {
selectedImages.push(validResults[randomIndex]);
usedIndexes.add(randomIndex);
}
} //hiromods 🤓
//======Envia as imagens uma por uma======\\
const sendImages = async () => {
for (const imageUrl of selectedImages) {
const message = {
image: { url: imageUrl },
caption: "𓀂𝙰𝚀𝚄𝙸 𝙴𝚂𝚃Á 𝙰 𝙸𝙼𝙰𝙶𝙴𝙼 𝚂𝙴 𝙴𝚂𝚃𝙸𝚅𝙴𝚁 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝚃𝙰 𝙸𝙶𝙽𝙾𝚁𝙰 ",
};
await archivus.sendMessage(from, message, { quoted: selo }).catch(err => {
console.error('Erro ao enviar imagem:', err);
});
} //hiromods 🤓
};
sendImages();
}).catch(err => {
console.log("Erro na API: ", err);
reply('Ocorreu um erro ao buscar a imagem: ' + err.message);
});
break

case 'hentai2':
reply(`𝙴𝚜𝚝𝚘𝚞 𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝙾 𝙷𝚎𝚗𝚝𝚊𝚒 𝙴 𝙸𝚛𝚎𝚒 𝙴𝚗𝚟𝚒𝚊𝚛 𝙽𝚘 𝚂𝚎𝚞 𝙿𝚅 😏`);
try { //by hiro Darling md feita por min👍🏻
const page = Math.floor(Math.random() * 1153);
const { data } = await axios.get('https://sfmcompile.club/page/' + page);
const $ = cheerio.load(data);
const hasil = [];
$('#primary > div > div > ul > li > article').each(function (a, b) {
const title = $(b).find('header > h2').text();
const link = $(b).find('header > h2 > a').attr('href');
const category = $(b).find('header > div.entry-before-title > span > span').text().replace('in ', '');
const share_count = $(b).find('header > div.entry-after-title > p > span.entry-shares').text();
const views_count = $(b).find('header > div.entry-after-title > p > span.entry-views').text();
const video_1 = $(b).find('source').attr('src') || $(b).find('img').attr('data-src');
const video_2 = $(b).find('video > a').attr('href') || '';
//==Coleta os gêneros do artigo==\\
const genres = [];
$(b).find('.entry-categories a').each(function (index, element) {
genres.push($(element).text());
});
hasil.push({
title,
category,
share_count,
views_count,
video_1,
video_2,
genres //==Adiciona os gêneros ao objeto
}); //by hiro Darling md feita por min👍🏻
});
if (!hasil.length) {
return reply(`⚠️ Nenhum conteúdo encontrado.`);
}
//==Escolher até 10 itens aleatórios da lista de resultados==\\
const selectedHentais = [];
const numVideos = Math.min(10, hasil.length); 
for (let i = 0; i < numVideos; i++) {
const randomIndex = Math.floor(Math.random() * hasil.length);
selectedHentais.push(hasil[randomIndex]);
hasil.splice(randomIndex, 1); //==Remove o item selecionado para não repetir==\\
} //by hiro Darling md feita por min👍🏻
//===Mensagens a serem enviadas===\\
const sendMessages = async () => {
for (const selectedHentai of selectedHentais) {
const responseMessage = `
👅 *𝚃í𝚝𝚞𝚕𝚘:* ${selectedHentai.title}
😏 *𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚒𝚊:* ${selectedHentai.category}
📊 *𝙲𝚘𝚖𝚙𝚊𝚛𝚝𝚒𝚕𝚑𝚊𝚖𝚎𝚗𝚝𝚘𝚜:* ${selectedHentai.share_count}
👀 *𝚅𝚒𝚜𝚞𝚊𝚕𝚒𝚣𝚊çõ𝚎𝚜:* ${selectedHentai.views_count}
🧬 *𝙶ê𝚗𝚎𝚛𝚘𝚜:* ${selectedHentai.genres.join(', ') || 'Nenhum gênero disponível\nBy: Archivus'}
                `;
if (selectedHentai.video_1) {
await archivus.sendMessage(sender, {
video: { url: selectedHentai.video_1 },
caption: responseMessage,
}, { quoted: selo });
} else {
await archivus.sendMessage(sender, {
text: responseMessage,
}, { quoted: selo });
} //by hiro Darling md feita por min👍🏻
}
};
await sendMessages(); 
} catch (error) {
console.error('Erro ao buscar hentai:', error);
reply('❌ Ocorreu um erro ao buscar hentai: ' + error.message);
} //by hiro Darling md feita por min👍🏻
break

//==========(BAIXAR/PESQUISAS)==========\\
case 'gimage':
try {
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/google-img?nome=${q}&apikey=`+API_KEY_ALEATORY);
archivus.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)].url}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'pinterest':
try {
if (!q) return reply(`Exemplo: ${prefix + command} nome da imagem ou link do video`);
if (q.includes("br.pinterest.com")) {
archivus.sendMessage(from, { react: { text: `⏳`, key: info.key } });
if (q.includes("br.pinterest.com")) {
const data = await fetchJson(`https://jeff-apis.shop/api/pinterest_mp4?url=${q.trim()}&apikey=${API_KEY_JEFF}`);
const videoUrl = data.pesquisa.download_vid;
archivus.sendMessage(from, { react: { text: `✅`, key: info.key } });
archivus.sendMessage(from, { video: { url: videoUrl }, mimetype: "video/mp4" }, { quoted: info });
}
} else {
const imageUrl = `https://jeff-apis.shop/api/pinterest?text=${encodeURIComponent(q)}&apikey=${API_KEY_JEFF}`;
archivus.sendMessage(from, { image: { url: imageUrl } });
archivus.sendMessage(from, { react: { text: `✅`, key: info.key } });
}
} catch (error) {
console.error(error);
archivus.sendMessage(from, { react: { text: `❌`, key: info.key } });
archivus.sendMessage(from, { body: "Erro.. avise ao meu criador 🥺", quoted: info });
}
break;

case 'triggered':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage || !isQuotedVideo) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image", API_KEY_ALEATORY)
bld = await getBuffer(`https://api.bronxyshost.com.br/api-bronxys/trigger?url=${res}&apikey=`+API_KEY_ALEATORY)
rst = await upload(bld, "video", API_KEY_ALEATORY)
enviarfiguUrl(archivus, from, rst, info)
} else {
reply("Marque uma imagem no WhatsApp...")
}
} catch {
reply("Erro")
}
break

case 'circulo':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage || !isQuotedVideo) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image", API_KEY_ALEATORY)
bld = await getBuffer(`https://api.bronxyshost.com.br/api-bronxys/circle?url=${res}&apikey=`+API_KEY_ALEATORY)
rst = await upload(bld, "image", API_KEY_ALEATORY)
sendStickerFromUrl(archivus, from, rst, info)
} else {
reply("Marque uma imagem no WhatsApp...")
}
} catch (e) {
reply("Erro")
}
break

case 'imagine':
if (!q) return reply(`O que você deseja criar?\nExemplo: ${prefix+command} Macaco voando`);
reply(`*Criando imagem sobre _~${q.toUpperCase()}~_*\n*Aguarde...*`);
try {
const response = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${encodeURIComponent(q)}`);
const imageUrl = response.url;
const imageBuffer = await getBuffer(imageUrl);
byte.sendMessage(from, { image: imageBuffer, caption: `*Resultado para: _~${q.toUpperCase()}~_*` });
} catch (error) {
console.log(error);
reply(`erro`);
}
break;

case "ytsearch":
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_ALEATORY)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\nTempo: ${i.tempo}\nPostado: ${i.postado}\n\nDescrição: ${i.desc}\n\n`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`Erro....`)
}
break

case 'votar_duelo': case 'votar_combate':
if(isGroup) return reply(`Este comando só deve ser utilizado em privado após a votação ser iniciada em algum grupo, lá terá o exemplo..`)  
var [nmr_v, id_g] = q.trim().split("/")
if(!id_g) return msg.reply(`Digite o comando ${prefix}votar no grupo que iniciou a votação para ver como votar no formato correto.`)
if(!fs.existsSync(`./armor/json/DUELO/duelo_${id_g}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
var dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${id_g}.json`))
if(dl_JsOn.voto_usu1.includes(sender)) return reply("Você já votou em alguem, então não pode votar novamente.")
if(dl_JsOn.voto_usu2.includes(sender)) return reply("Você já votou em alguem, então não pode votar novamente.")
if(dl_JsOn.usu1 == nmr_v+"@s.whatsapp.net") {
dl_JsOn.voto_usu1.push(sender)
} else {
dl_JsOn.voto_usu2.push(sender)
}
fs.writeFileSync(`./armor/json/DUELO/duelo_${id_g}.json`, JSON.stringify(dl_JsOn, null, 2))
reply("Votou com sucesso, agora só aguardar terminar, para ver os resultados 🙂.")
break;

case 'votar': case 'como_votar':
if(!isGroup) return reply(Res_SoGrupo)  
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
reply("Como votar foi enviado no seu privado a explicação dos 2.")
var dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
archivus.sendMessage(sender, {text: `Para votar no primeiro usario: 
Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu1}/${from} 

Para votar no segundo usuario:

Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu2}/${from} 
`})
break;

case 'zerar_duelo': case 'zerar_combate':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
DLT_FL(`./armor/json/DUELO/duelo_${from}.json`)
reply("Duelo resetado / cancelado..")
break

case 'terminar_votacao':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
if(dl_JsOn.voto_usu1.length == dl_JsOn.voto_usu2.length) return reply(`[ OBS ] - OS 2 USUARIOS TERMINARAM EMPATE, COM MESMA PONTUAÇÃO:

1: ${dl_JsOn.voto_usu1.length} Votos

2: ${dl_JsOn.voto_usu2.length} Votos

Então a decisão está na mão dos administradores, se vai refazer o duelo, ou decidir o ganhador de alguma fórma..`)
var blak = `[ Ganhador: @${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]} ]\n\nUsuário _- 1 - @${dl_JsOn.usu1.split("@")[0]}\n\nQuantidade de votos: ${dl_JsOn.voto_usu1.length}\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\nUsuário _- 2 - @${dl_JsOn.usu2.split("@")[0]}\n\nQuantidade de votos: ${dl_JsOn.voto_usu2.length}\n`
try {pfimg = await archivus.profilePictureUrl(`${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}@c.us`, 'image')} catch {pfimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'};
bl1 = await getBuffer(pfimg); bl_up = await upload(bl1, "image", API_KEY_ALEATORY)
blar = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/ganhador.jpg?text.0.text=${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}&text.0.position.gravity=center&text.0.position.y=22%25&text.0.size=62&text.0.color=000000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic`)
bli = await upload(blar, "image", API_KEY_ALEATORY)
archivus.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/duelo_win/?url=${bl_up}&fundo=${bli}&nmr2=122&nmr2_2=175&nmr2_3=205&nmr2_4=205&largura=450&altura=672&apikey=`+API_KEY_ALEATORY}, caption: blak, mentions: [dl_JsOn.usu1, dl_JsOn.usu2]})
} catch {
reply("Erro, tente novamente..")
}
U_S_US = `Usuarios que votou em: ${dl_JsOn.usu1.split("@")[0]}\n\n`
for (var i of dl_JsOn.voto_usu1) {
U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n\n`  
}

U_S_US += `Usuarios que votou em: ${dl_JsOn.usu2.split("@")[0]}\n\n`
for (var i of dl_JsOn.voto_usu2) {
U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n`  
}
archivus.sendMessage(sender, {text: U_S_US})
await setTimeout(() => {
DLT_FL(`./armor/json/DUELO/duelo_${from}.json`)
}, 30000)
break

case 'iniciar_votacao':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
mention(`[ ATENÇÃO ] - Votação iniciada, prestem atenção.

@${dl_JsOn.usu1.split("@")[0]}
Para votar no primeiro usuario do duelo: 
https://wa.me/${botNumber.split("@")[0]}?text=${setting.prefix}votar_duelo%20${dl_JsOn.usu1.split("@")[0]}/${from}

@${dl_JsOn.usu2.split("@")[0]}
Para votar no segundo usuario do duelo:
https://wa.me/${botNumber.split("@")[0]}?text=${prefix}votar_duelo%20${dl_JsOn.usu2.split("@")[0]}/${from}`)
break;

case 'duelo': case 'combate':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Apenas administrador..")
try {
TXTEX = `Olá, para iniciar o duelo, você precisa marcar 2 pessoas.\nExemplo: ${prefix+command} @fulano1 @fulano2.`
if(!menc_jid2 || menc_jid2?.length > 2) return reply(TXTEX)
try {pfimg = await archivus.profilePictureUrl(`${menc_jid2[0].split('@')[0]}@c.us`, 'image')} catch {pfimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'};
bl1 = await getBuffer(pfimg); bl_up = await upload(bl1, "image", API_KEY_ALEATORY)
try {pfimg2 = await archivus.profilePictureUrl(`${menc_jid2[1].split('@')[0]}@c.us`, 'image')} catch {pfimg2 = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'}; 
bl2 = await getBuffer(pfimg2); bl_up2 = await upload(bl2, "image", API_KEY_ALEATORY)
gtb = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/vs.jpg?text.0.text=${menc_jid2[0].split("@")[0]}&text.0.position.gravity=southwest&text.0.position.x=6%25&text.0.position.y=-2%25&text.0.size=32&text.0.color=ff0000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=100&text.1.text=${menc_jid2[1].split("@")[0]}&text.1.position.x=-7%25&text.1.position.y=-2%25&text.1.size=32&text.1.color=0022ff&text.1.font.family=Source%20Serif%20Pro&text.1.font.weight=700&text.1.font.style=italic`); txtimg = await upload(gtb, "image", API_KEY_ALEATORY);
archivus.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/duelo?url=${bl_up}&url2=${bl_up2}&fundo=${txtimg}&nmr1=595&nmr1_2=102&nmr1_3=157&nmr1_4=157&nmr2=117&nmr2_2=100&nmr2_3=150&nmr2_4=150&largura=870&altura=360&apikey=`+API_KEY_ALEATORY}, caption: `[ ATENÇÃO ]:\n\n@${menc_jid2[0].split("@")[0]}\n\t\t\t\t\t~ VS ~\n@${menc_jid2[1].split("@")[0]}\n\n[ Combate iniciado ] - Respeitem os Combatentes. Os dois participantes irão combater no momento. Posteriormente um ADM vai iniciar a votação. Digitando: !iniciar_votação. Atenção a votação, avalie com responsabilidade. Não atrapalhem o momento do combate para não serem removidos.`, mentions: menc_jid2}).catch(e => {reply("Erro")})
await sleep(1500)
fs.writeFileSync(`./armor/json/DUELO/duelo_${from}.json`, JSON.stringify({usu1: menc_jid2[0], usu2: menc_jid2[1], iniciou: false, voto_usu1: [], voto_usu2: []}, null, 2))
} catch (e){
reply("Erro, tente novamente..")
}
break;

case 'play333': {
if (!q) return reply(`Exemplo: ${prefix}play nome da música`)
let response = await fetchJson(`https://jeff-apis.shop/api/ytsrc/videos?q=${q}&apikey=${API_KEY_JEFF}`);
if (!response || !response.resultado || !response.resultado.length) return reply('Música não encontrada. Verifique o nome e tente novamente.');
let data = response.resultado[0]; // Pega o primeiro resultado da busca
if (!data || !data.title || !data.url) return reply('Música não encontrada ou dados inválidos. Tente novamente.');
// Criar o objeto result com os dados do vídeo
let result = {
    title: data.title,
    url: data.url,
    thumbnail: data.thumbnail,
    timestamp: data.timestamp
};
archivus.sendMessage(from, { image: { url: result.thumbnail }, caption: `*Música:* ${result.title}` }, { quoted: selo });
}
break;

case 'p':
case 'play':
case 'playaudio':
case 'ytmp33':
    if (!q) {
        return reply(`- Exemplo: ${prefix}play nome da música\nA música será baixada; se não baixar, o YouTube pode ter restringido o acesso.`);
    }

    reply(`Realizando download, aguarde...`);
    archivus.sendPresenceUpdate('recording', from)

    try {
        // Buscar e verificar dados do vídeo
        let response = await fetchJson(`https://jeff-apis.shop/api/ytsrc/videos?q=${q}&apikey=${API_KEY_JEFF}`);
        if (!response || !response.resultado || !response.resultado.length) {
            return reply('Música não encontrada. Verifique o nome e tente novamente.');
        }

        let data = response.resultado[0]; // Pega o primeiro resultado da busca
        if (!data || !data.title || !data.url) {
            return reply('Música não encontrada ou dados inválidos. Tente novamente.');
        }

        // Criar o objeto result com os dados do vídeo
        let result = {
            title: data.title,
            url: data.url,
            thumbnail: data.thumbnail,
            timestamp: data.timestamp
        };

        // Baixar o áudio
        let fetchResponse = await fetch(`https://jeff-apis.shop/api/dl/ytaudio2?url=${data.url}&apikey=${API_KEY_JEFF}`);
        let arrayBuffer = await fetchResponse.arrayBuffer(); // Converter para ArrayBuffer
        let buffer = Buffer.from(arrayBuffer); // Converter ArrayBuffer para Buffer

        // Enviar áudio com informações adicionais
        await archivus.sendMessage(from, {
            audio: buffer,
            mimetype: 'audio/aac',
            fileName: result.title + '.mp3',
            contextInfo: {
                externalAdReply: {
                    title: result.title,
                    body: `⏳ ${result.timestamp}`,
                    mediaUrl: result.url,
                    mediaType: 2,
                    thumbnailUrl: result.thumbnail,
                    showAdAttribution: true,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: info });

    } catch (err) {
        console.error(err);
        reply(`Erro ao baixar a música: ${err.message}`);
    }
    break;

case 'twitter':
if(!q.includes("twitter")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
reply(`Para realizar o download de vídeo:\n\nutilize: ${prefix}insta_video ${q.trim()}\n\njá se quiser realizar o download de áudio:\n\nutilizar: ${prefix}insta_audio ${q.trim()}`);
break 

case 'facebook':
if(!q) return reply(`Ops, insira o link`)
reply(`Para realizar o download de vídeo:\n\nutilize: ${prefix}face_video ${q.trim()}\n\njá se quiser realizar o download de áudio:\n\nutilizar: ${prefix}face_audio ${q.trim()}`);
break 

case 'tiktok':
try {
if(!q.includes("tiktok")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
reply(`Para realizar o download de vídeo:\n\nutilize: ${prefix}tiktok_video ${q.trim()}\n\njá se quiser realizar o download de áudio:\n\nutilizar: ${prefix}tiktok_audio ${q.trim()}`);
} catch (e) {
reply("Erro")
}
break

case 'gerarlink':
case 'uplink':
reagir(from, "💾")
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
let media, type, mimetype
if (isQuotedSticker || (info.message.stickerMessage && info.message.stickerMessage.mimetype === 'image/webp')) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
mimetype = 'image/webp'
type = 'sticker'
} else if (isQuotedImage || isImage) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
mimetype = media.mimetype
type = 'image'
} else if (isQuotedVideo || isVideo) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
mimetype = media.mimetype
type = 'video'
} else if (isQuotedAudio || isAudio) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
mimetype = media.mimetype
type = 'audio'
} else if (isQuotedDocument || isDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
mimetype = media.mimetype
type = mimetype.split('/')[0]
} else {
return reply('❌ Marque uma Imagem, Vídeo, Áudio, Sticker ou Documento.')
}
const ext = mimetype.split('/').pop()
const validExtensions = { mpeg: 'mp3', m4a: 'mp3' }
const finalExt = validExtensions[ext] || ext
const tempFile = `temp_${Date.now()}.${finalExt}`
const fileBuffer = await getFileBuffer(media, type)
fs.writeFileSync(tempFile, fileBuffer)
console.log(`🟢 Enviando arquivo para a API: ${tempFile}`)
const FormData = require('form-data')
const form = new FormData()
form.append('file', fs.createReadStream(tempFile))
const response = await axios.post('https://zero-two.info/upload', form, {
headers: { ...form.getHeaders() }
})
if (!response || !response.data || !response.data.fileUrl) {
throw new Error('❌ Sem resposta válida da API de upload.')
}
const fileUrl = response.data.fileUrl
const fileExtension = fileUrl.split('.').pop()
if (fileExtension === 'webp' && type === 'sticker') {
reply(`📄 Sticker identificado, gerando link.\n\n🔗 *LINK:* ${fileUrl}`)
archivus.sendMessage(from, { sticker: fileBuffer }, { quoted: info })
} else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
reply('🖼️ Imagem identificado, gerando link.')
archivus.sendMessage(from, { image: fileBuffer, caption: `🔗 *LINK:* ${fileUrl}` }, { quoted: info })
} else if (['mp4'].includes(fileExtension)) {
reply('🎥 Video identificado, gerando link.')
archivus.sendMessage(from, { video: fileBuffer, caption: `🔗 *LINK:* ${fileUrl}` }, { quoted: info })
} else if (['mp3', 'wav'].includes(fileExtension)) {
reply(`🎵 Audio identificado, gerando link.\n\n🔗 *LINK:* ${fileUrl}`)
archivus.sendMessage(from, { audio: { url: fileUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: info })
} else {
reply('🗂 Arquivo/Documento identificado, gerando link.')
archivus.sendMessage(from, { document: fileBuffer, caption: `🔗 *LINK:* ${fileUrl}`, mimetype, fileName: `arquivo.${fileExtension}` }, { quoted: info })
}
console.log(`🟢 Arquivo enviado com sucesso: ${fileUrl}`)
fs.unlinkSync(tempFile)
} catch (error) {
console.error('❌ Erro no upload:', error)
reply('❌ Ocorreu um erro durante o upload.')
}
break

case 'gerarlink2':
case 'imgur': {
try {
if (isQuotedImage || isQuotedVideo || isQuotedSticker) {
const boij = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage
: isQuotedVideo
? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.videoMessage
: isQuotedSticker
? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.stickerMessage
: info;
const fetch = require('node-fetch');
const FormData = require('form-data');
//// By tzn And rafax
async function uploadMediaToImgur(mediaBuffer) {
const form = new FormData();
form.append('image', mediaBuffer, { filename: 'media' });
const response = await fetch('https://api.imgur.com/3/image', {
method: 'POST',
body: form,
headers: {
'Authorization': 'Client-ID 400116076ba4b73'
}/// By tzn And Rafaxx
});
console.log('Response status:', response.status);
console.log('Response headers:', response.headers.raw());/// by Tzn And Rafax
const data = await response.json();
console.log('Response data:', data); 
//// By Tzn And Rafa
if (response.ok && data.data && data.data.link) {
return data.data.link;
} else {/// By Rafax and Tzn
throw new Error('Falha ao recuperar o URL do Imgur.');
}
}
const mediaBuffer = await getFileBuffer(boij, isQuotedImage ? "image" : "video");
const mediaUrl = await uploadMediaToImgur(mediaBuffer);
reply(mediaUrl);
} else {
reply('Marque uma imagem, vídeo ou sticker.');
}
} catch (e) {
console.log('Error details:', e);
reply('Erro ao tentar converter a mídia para link.');
}
break;
}


case 'ver-key':
case 'chekkey':
case 'check-key':
reply('*VERIFICANDO*')
data = await fetchJson(`https://daki-apis.tech/api/limite-apikey?apikey=Momo_ayase`)
reply(`*Apikey:* KEY CENSURADA\n*limite:* ${data.resultado.limite}\n*vezes usadas:* ${data.resultado.total_search_apikey}`)
break


case 'stalk-canal-zap':
if(!q) return reply(`*Coloque o link do canal ao lado do comando,siga o exemplo a baixo⬇️*\n${prefix + command} https://whatsapp.com/channel/0029VaYz83R6mYPV4dV55h3H`)
if(!q.startsWith("https://whatsapp.com/channel/")) return reply(`*ESSA NÃO É UMA URL VALIDA`)
reply(`*Processando sua solicitação*`)
try {
data = await fetchJson(`https://daki-apis.tech/api/stalk/whatsapp-channel?url=${q}&apikey=` + APIKEY_DAKIGATEWAY_APIS)

let { imagem, titulo, seguidores, descricao } = data.resultado
txt = `*WHATSAPP CANAL STALK*\n
*Canal:* ${titulo}\n\n
*Seguidores:* ${seguidores}\n\n
*Descrição:* ${descricao}`
await archivus.sendMessage(from, {image: {url: imagem}, caption: txt}, {quoted: seloMetaTokyo})
} catch(error) {
reply("*Ocorreu Um Erro Ao Stalkear O Canal!*")
console.log(error)
}
break

case 'stalk-user-telegram':
case 'stalk-user-tele':
case 'stalktelegram':
if(!q) return reply(`*Coloque o nome do usuário ao lado do comando,siga o exemplo a baixo⬇️*\n${prefix + command} SOUZA7ZXPN`)
reply(`*Processando sua solicitação*`)
try {
data = await fetchJson(`https://daki-apis.tech/api/stalk/telegram-user?user=${q.replaceAll("@", "")}&apikey=` + APIKEY_DAKIGATEWAY_APIS)
let { nome, user, descricao, imagem } = data.resultado
txt = `*TELEGRAM USER STALK*\n
*Nome:* ${nome}\n\n
*User:* ${user}\n\n
*Descrição:* ${descricao}`
await archivus.sendMessage(from, {image: {url: imagem}, caption: txt}, {quoted: seloMetaTokyo})
} catch(error) {
reply("*Ocorreu Um Erro Ao Stalkear O usuário!*")
console.log(error)
}
break

case 'stalk-user-instagram':
case 'stalk-user-insta':
case 'stalkinsta':
if(!q) return reply(`*Coloque o nome do usuário ao lado do comando,siga o exemplo a baixo⬇️*\n${prefix + command} netflixbrasil`)
reply(`*Processando sua solicitação*`)
try {
const data = await fetchJson(`https://daki-apis.tech/api/stalk/instagram?user=${q.replaceAll("@", "")}&apikey=` + APIKEY_DAKIGATEWAY_APIS)
if (!data || !data.resultado) {
reply("*Perfil não encontrado ou API não retornou dados válidos.*")
return
}
const txt = `*STALK USER INSTAGRAM*
*User:* ${data.resultado.username || "não encontrado"}\n
*Nome:* ${data.resultado.nome_completo || "não encontrado"}
*Seguidores:* ${data.resultado.seguidores || "0"}
*Seguindo:* ${data.resultado.seguindo || "0"}
*Posts:* ${data.resultado.posts || "0"}
*Bio:* ${data.resultado.descricao || "não encontrado"}`
await archivus.sendMessage(from, {image: {url: data.resultado.imagemkk}, caption: txt}, {quoted: seloMetaTokyo})
} catch(error) {
reply("*Ocorreu Um Erro Ao Stalkear O usuário!*")
console.log(error)
}
break

case 'stalk-user-tiktok':
case 'stalk-user-ttk':
case 'stalk--tiktok':
if(!q) return reply(`*Coloque o nome do usuário ao lado do comando,siga o exemplo a baixo⬇️*\n${prefix + command} netflixbrasil`)
reply(`*Processando sua solicitação*`)
try {
const data = await fetchJson(`https://daki-apis.tech/api/stalk/tiktok?user=${q.replaceAll("@", "")}&apikey=` + APIKEY_DAKIGATEWAY_APIS)
if (!data || !data.resultado) {
reply("*Perfil não encontrado ou API não retornou dados válidos.*")
return
}
let { nome_usuario, apelido, url_perfil, descricao, comfirmado, conta_privada, regiao, usuario_comercial,avatar_grande } = data.resultado.usuario
let { seguidores, seguindo, curtidas, videos, amigos } = data.resultado.estatisticas
const txt = `*STALK USER TIKTOK*\n
*Usuário:* ${nome_usuario}\n
*Nome:*  ${apelido}\n
*Verificado:* ${comfirmado ? "Sim" : "Não"}\n
*Conta Privada:* ${conta_privada ? "Sim" : "Não"}\n
*Região:* ${regiao}\n
*Conta Comercial:* ${usuario_comercial ? "Sim" : "Não"}\n
*Bio:* ${descricao ? descricao : "N/A"}\n
*Seguidores:* ${seguidores}\n
*Seguindo:* ${seguindo}\n
*Curtidas:* ${curtidas}\n
*Vídeos:* ${videos}\n
*Amigos:* ${amigos}\n
*Url:* ${url_perfil}`


await archivus.sendMessage(from, {image: {url: avatar_grande}, caption: txt}, {quoted: seloMetaTokyo})
} catch(error) {
reply("*Ocorreu Um Erro Ao Stalkear O usuário!*")
console.log(error)
}
break

case 'horoscopo':
case 'horóscopo':
case 'signo':
try {
if(!q) return reply(`*Coloque o nome do signo ao lado do comando,siga o exemplo a baixo⬇️*
${prefix + command} touro`)
signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes", "aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]
if(!signos.includes(q_2)) return reply(`*Signo não encontrado*\nultilize o comando ${prefix}signos para ver todos os signos disponíveis`)
ABC = await fetchJson(`https://daki-apis.tech/api/horoscopo?query=${q}&apikey=` + APIKEY_DAKIGATEWAY_APIS)
reply('*Enviando!*')
let message = ""
message += `*Título:* ${ABC.resultado[0].titulo}\n\n`
message += `*Data:* ${ABC.resultado[0].data}\n\n`
message += `*Horóscopo Diário:* ${ABC.resultado[0].daily_HoroscopeText}\n\n`
message += `*Horóscopo Semanal:* ${ABC.resultado[0].weeklyHoroscopeText}\n\n`
message += `*Horóscopo Mensal:* ${ABC.resultado[0].monthly_HoroscopeText}\n\n`
message += `*Horóscopo Anual:* ${ABC.resultado[0].annual_HoroscopeText}\n\n`
archivus.sendMessage(from, { 
image: { url: ABC.resultado[0].imageUrl }, 
caption: message 
}, {quoted: seloMetaTokyo}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break

case 'movie':
case 'filme':
if(!q) return reply("• Informe O Filme Que Deseja Buscar")
try {
data = await fetchJson(`https://daki-apis.tech/api/filme?query=${q}&apikey=` + APIKEY_DAKIGATEWAY_APIS)
reply('*Enviando!*')
txt = `*FILME SEARCH*\n\n
*Nome:* ${data.resultado[0].nome}\n\n
*Lançamento:* ${data.resultado[0].lançamento}\n\n
*Diretor:* ${data.resultado[0].diretor}\n\n
*Sinopse:* ${data.resultado[0].sinopse}`
await archivus.sendMessage(from, {image: {url: data.resultado[0].imagem}, caption: txt}, {quoted: seloMetaTokyo})
} catch(e) {
reply("• Erro Ao Procurar O Filme")
console.error(e)
}
break

case 'instagram':
case 'instadw':
if(!q.includes("instagram")) return reply(`Ops, insira o link, só baixo vídeos / audios do ${command} com link`)
reply(`Para realizar o download de vídeo:\n\nutilize: ${prefix}insta_video ${q.trim()}\n\njá se quiser realizar o download de áudio:\n\nutilizar: ${prefix}insta_audio ${q.trim()}`);
break 

// DOWNLOADS
case 'play_video':
case 'ytmp4':
case 'play_mp4':
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply(Res_Aguarde);
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_ALEATORY)
archivus.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4", fileName: data[0]?.titulo}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'play_audio':
case 'ytmp3':
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply(Res_Aguarde);
archivus.sendPresenceUpdate('recording', from)
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=`+API_KEY_ALEATORY)
archivus.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mpeg", fileName: data[0]?.titulo}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'playdoc':
try {
if (!q.trim()) return reply(`- Exemplo: ${prefix}play nome da música\na música será baixada, só basta escolher áudio ou vídeo, se não baixar, o YouTube privou de não baixarem, ou algo do tipo..`);
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_ALEATORY}`);
if (data[0]?.tempo?.length >= 7) {
return reply("Desculpe, este video ou audio é muito grande, não poderei realizar este pedido, peça outra música abaixo de uma hora.");
}
archivus.sendMessage(from, {
document: {
url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_KEY_ALEATORY}`
},
mimetype: "audio/mpeg",
fileName: "play.mp3"
}, { quoted: info }).catch(e => {
return reply("Erro..");
});
} catch (e) {
console.log(e);
return reply("Seja mais específico, não deu pra encontrar com apenas isto... / Erro");
}
break;

case 'tiktok_video':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply(Res_Aguarde);
archivus.sendMessage(from, {video: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'tiktok_audio':
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
reply(Res_Aguarde);
archivus.sendPresenceUpdate('recording', from)
archivus.sendMessage(from, {audio: {url:`https://api.bronxyshost.com.br/api-bronxys/tiktok?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mpeg"}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply(Res_Aguarde)
archivus.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply(Res_Aguarde)
archivus.sendPresenceUpdate('recording', from)
archivus.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(Res_Aguarde)
archivus.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "video/mp4"}).catch(e => {
return reply(String(e))
})
} catch (e) {
return reply("Erro..")
}
break;

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(Res_Aguarde)
archivus.sendPresenceUpdate('recording', from)
archivus.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=`+API_KEY_ALEATORY}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'insta_video':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}=&apikey=${API_KEY_ALEATORY}`)
reply(Res_Aguarde)
if(ABC?.msg[0]?.url == undefined) {return reply(ABC?.msg)}
for ( i of ABC?.msg || []) {
if(i?.type == "mp4") {
archivus.sendMessage(from, {video: {url: i.url}, mimetype: "video/mp4"}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} else if(i?.type == "jpg") {
archivus.sendMessage(from, {image: {url: i.url}}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..");
})
}}
} catch (e) {
return reply("Erro..")
}
break;

case 'insta_audio':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link`);
archivus.sendPresenceUpdate('recording', from)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/instagram?url=${q.trim()}=&apikey=${API_KEY_ALEATORY}`)
reply(Res_Aguarde)
if(ABC?.msg[0]?.url == undefined) {return reply(ABC?.msg)}
for ( i of ABC?.msg || []) {
if(i?.type == "mp4") {
archivus.sendMessage(from, {audio: {url: i.url}, mimetype: "audio/mpeg"}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro...")
})
} else if(i?.type == "jpg") {
archivus.sendMessage(from, {image: {url: i.url}}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..");
})
}}
} catch (e) {
return reply("Erro..")
}
break;

case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/mediafire?url=${q}&apikey=`+API_KEY_ALEATORY)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
archivus.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_ALEATORY)
archivus.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) {
return reply(Res_SoDono);
}
if (!q) {
return reply(`⚠️ Texto onde?\n\nExemplo: ${prefix + command} ARCHIVUS" KKGR`);
}
const getGroups = await archivus.groupFetchAllParticipating();
const groups = Object.values(getGroups);
const groupIds = groups.map(group => group.id);
const sendMessageToGroups = async (message, groupIds) => {
for (const groupId of groupIds) {
await sleep(1500);
const txt = `「 TRANSMISSÃO DO BOT 」\n\n ${message}`;
await archivus.sendMessage(groupId, { text: txt });
}
};
await sendMessageToGroups(q, groupIds);
reply(`✅ Mensagem enviada com sucesso para ${groupIds.length} grupos!`);
}
break;

case 'celular':
try {
if(!q) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply(Res_Aguarde);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info_celular?celular=${q}&apikey=`+API_KEY_ALEATORY);
reply(`📱 Celular: ${ABC?.celular || "Não encontrado"}\n\nInformações:\n${ABC?.resumo || ABC?.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply("Erro...");
}
break;

case 'join': case 'entrar':
if (!SoDono) return reply(Res_SoDono);
const linkInput = args.join(' ').trim();
if (!linkInput) return reply('⚠️ Por favor, insira um link de convite ao lado do comando.');
const inviteLinkPattern = /^(https?:\/\/)?(chat\.whatsapp\.com\/[A-Za-z0-9]+)$/;
if (!inviteLinkPattern.test(linkInput)) {
return reply('⚠️ O link inserido não é válido. Certifique-se de usar um link de convite do WhatsApp.');
}
const linkCode = linkInput.split('chat.whatsapp.com/')[1];
if (!linkCode) return reply('⚠️ Ocorreu um erro ao extrair o código do link.');
const acceptGroupInvite = async (code) => {
try {
await archivus.groupAcceptInvite(code);
return reply('✅ *Estou entrando no grupo... aguarde um momento!* 🫡');
} catch (error) {
return handleInviteError(error);
}
};
const handleInviteError = (error) => {
const errorMessageMap = {
'resource-limit': '❌ O grupo já atingiu o limite máximo de 257 membros.',
'not-authorized': '❌ Não foi possível entrar no grupo.\nMotivo: Você foi banido de participar.',
'invalid-invite': '❌ O link de convite é inválido ou expirou.',};
const errorKey = Object.keys(errorMessageMap).find(key => String(error).includes(key));
return reply(errorKey ? errorMessageMap[errorKey] : '⚠️ Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
};
acceptGroupInvite(linkCode);
break;

case 'antiimg': case 'antiimagem':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins && !isnit) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (isAntiImg) {
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
}
break

case 'antivideo':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins && !isnit) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (isAntiVid) {
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti vídeo neste grupo✔️')
} else {
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti vídeo neste grupo✔️')
}
break

case 'antiaudio':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins && !isnit) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (isAntiAudio) {
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (Antidoc) {
dataGp[0].antidoc = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo ✔️');
} else {
dataGp[0].antidoc = true;
setGp(dataGp);
reply('Ativou com sucesso o recurso de anti documento neste grupo ✔️');
}
break;

case 'antictt':
case 'anticontato':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAntiCtt) {
dataGp[0].antictt = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo ✔️');
} else {
dataGp[0].antictt = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝');
}
break;

case 'antiloc':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (Antiloc) {
dataGp[0].antiloc = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de anti loc neste grupo ✔️');
} else {
dataGp[0].antiloc = true;
setGp(dataGp);
reply('Ativou com sucesso o recurso de anti loc neste grupo ✔️');
}
break;

case 'antilinkgp':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAntilinkgp) {
dataGp[0].antilinkgp = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de antilinkgp neste grupo ✔️');
} else {
dataGp[0].antilinkgp = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝');
}
break;

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAntiLinkHard) {
dataGp[0].antilinkhard = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de antilink hardcore neste grupo ✔️');
} else {
dataGp[0].antilinkhard = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝');
}
break;

case 'x9':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isx9) {
dataGp[0].x9 = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de x9 neste grupo ✔️');
} else {
dataGp[0].x9 = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado ou promovido a adm 😏..');
}
break;

case 'visualizarmsg':
if (!SoDono) return reply(Res_SoDono)
if (isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('‼️ Desativou com sucesso o recurso de visualizar todas as mensagens enviadas em grupos e privado✔️')
} else {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('🌀 Ativou com sucesso o recurso de visualizar todas as mensagens enviadas em grupos e privado 📝')
}
break

case 'gold': case 'golds': case 'consultargold':
if(!IS_sistemGold) return reply(`Só é possível utilizar este comando ativando o sistema de Golds\nExemplo: ${prefix}sistemgold 1`)
if(!isGroup) return reply(Res_SoGrupo)
if(command == "consultargold") {
ConsultarGold(menc_os2)
} else {
ConsultarGold(sender)
}
break

case 'rankgold':
if(!isGroup) return reply(Res_SoGrupo)
galo = rggold[rggold.map(i => i.grupo).indexOf(from)].usus.map(i => i)
rank = galo.sort((a, b) => (a.Golds < b.Golds) ? 0 : -1)
ment = []

ble = `💰 *Rank de Golds* 💰\n`

for ( i = 0; i < 5; i++) {
  if(i != null) {
ble += `
┌───────────────
│ ${i + 1}º : @${rank[i].id.split('@')[0]}
│
│  Saldo: ${rank[i].Golds}
└────────────\n`
ment.push(rank[i].id)
}
}
mentions(ble, ment, true)

break

case 'addgold': case 'tirargold':
if(!SoDono) return reply(Res_SoDono)
if(!isGroup) return reply(Res_SoGrupo)
if(!menc_os2 && !Number(q) || menc_jid2[1]) return reply(`Marque a mensagem ou @ do usuário que deseja adicionar Golds Ou tirar..\n\nExemplo: Se for apenas tirar ou add marcando a mensagem\nUse: ${prefix}addgold 5\n\nSe for Tirar ou add usando @\nUse: ${prefix}addgold @marque 5`) 
var qp = q.replace(menc_jid2, "")
if(command == "addgold") {
AddGold(Number(qp), menc_os2)
} else if(command == "tirargold") {
TirarGold(Number(qp), menc_os2)
}
break

case 'sistemgold':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
hora130 = moment.tz('America/Sao_Paulo').format('HH:mm');
if (IS_sistemGold) {
dataGp[0].sistemGold = false
setGp(dataGp)
reply(`Para a infelicidade dos usuários o sistema de Golds foi desativado nesse grupo, às: ${hora130}`)
} else {
dataGp[0].sistemGold = true
setGp(dataGp)
reply(`Sistema de Golds foi ativado com sucesso nesse grupo, às: ${hora130}`)
}
break

// RPG //
case 'modorpg': 
case 'modocity': 
case 'modoc': 
case 'cityrpg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply(`Você está usando o comando de forma errada, verifique:\n• Ex: *${prefix+command} 1/0* _(1 para ativar, 0 para desativar)_`)
if(Number(args[0]) === 1) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true) return reply("Sistema *City* - O sistema já está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: true})
fs.writeFileSync("./database/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = true
fs.writeFileSync("./database/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *City* - Foi efetuado a ativação no grupo com sucesso...")
} else if(Number(args[0]) === 0) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == false) return reply("Sistema *City* - O sistema não está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: false})
fs.writeFileSync("./database/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = false
fs.writeFileSync("./database/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *City* - Foi desabilitado com sucesso no grupo.")
}
break

case 'rgc':
case 'rgcity':
if(!isGroup) return (enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(JSON.stringify(sabrpg).includes(sender)) return reply(`Seu registro foi encontrado em meu banco de dados! Use *${prefix}meusc* e consulte seu registro/dados`)
if(!q) return reply(`Digite seu nome após o comando, para seu registro ser feito com êxito.`)
if(q.includes('@')) return reply(`O registro foi cancelado na City! Foi detectado um *@* no campo, retire-o e realize o registro novamente.`)
bancos = ["Inter", "NuBank", "PagBank️", "Bradesco", "Next", "Caixa", "Santander️", "Banco do Brasil", "PicPay", "PayPal", "Itaú"]
bank = bancos[Math.floor(Math.random() * bancos.length)]
horarg = moment.tz('America/Sao_Paulo').format('HH:mm');
hora10 = moment.tz('America/Sao_Paulo').format('HH');
datarg = moment.tz('America/Sao_Paulo').format('DD/MM');
dia10 = moment.tz('America/Sao_Paulo').format('DD');
m10 = moment.tz('America/Sao_Paulo').format('MM');
sabrpg.push({id: sender, gpid: from, hrg: horarg, drg: datarg, nome: q, namebank: bank, money: 0, pixD: 5, pixL: 100, limiteC: 15, horaC: hora10, diaC: dia10, mC: m10, limiteTh: 3, hrT: hora10, limiteTd: 24, diaT: dia10, mT: m10, bcbet: true})
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Registro efetuado e concluído com êxito! Seja bem vindo(a) à City, ${q}`)
setTimeout(() => {
archivus.sendMessage(from, {text: `Agora você pode trabalhar e ganhar muito dinheiro jogando e apostando em nossos jogos. Para consultar seu saldo atual, use: *${prefix}minhacarteira*`})
}, 1100)
break


case 'dados_sc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`ID do usuário não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`• ID do usuário: ${sabrpg[AB].id}\n• ID do grupo: ${sabrpg[AB].gpid}\n• Hora de registro: ${sabrpg[AB].hrg}\n• Data de registro: ${sabrpg[AB].drg}\n• Nome de usuário: ${sabrpg[AB].nome}\n• Nome do banco: ${sabrpg[AB].namebank}\n• Dinheiro: ${sabrpg[AB].money}\n• Quantidade de pix diário: ${sabrpg[AB].pixD}\n• Limite de pix: ${sabrpg[AB].pixL}\n• Limite do cassino: ${sabrpg[AB].limiteC}\n• Hora do cassino: ${sabrpg[AB].horaC}\n• Dia do cassino: ${sabrpg[AB].diaC}\n• Mês do cassino: ${sabrpg[AB].mC}\n• Limite de trabalho por hora: ${sabrpg[AB].limiteTh}\n• Hora do trabalho: ${sabrpg[AB].hrT}\n• Limite de trabalho diário: ${sabrpg[AB].limiteTd}\n• Dia de trabalho: ${sabrpg[AB].diaT}\n• Mês de trabalho: ${sabrpg[AB].mT}`)
break

case 'sairdacity':
case 'sairc':
case 'saircity':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`ID do usuário não encontrado ou inexistente...`)
if(Number(args[0]) === 1) {
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(i => i.id).indexOf(sender)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
}
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(i => i.id).indexOf(sender)
galosrpg.splice(AC, 1)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
if(JSON.stringify(roubosrpg).includes(sender)) {
AE = roubosrpg.map(i => i.id).indexOf(sender)
roubosrpg.splice(AE, 1)
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
AB = sabrpg.map(i => i.id).indexOf(sender)
sabrpg.splice(AB, 1)
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(sabrpg))
reply(`Seu registro na City foi deletado com sucesso... Volte sempre!`)
} else {
reply(`Ao sair da City, você concorda em apagar o seu registro completamente, isto é, todo o seu histórico de jogo.\n• Caso você esteja de acordo com isso, use: *${prefix+command} 1*`)
}
break

case 'delcity':
case 'delc':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Digite o número do usuário que deseja remover da City.`)
qp = q + `@s.whatsapp.net`
AB = sabrpg.map(i => i.id).indexOf(qp)
if(AB < 0) return reply(`O ID do usuário não foi localizado, *certifique-se se ele já tem registro.*`)
if(JSON.stringify(cavalosrpg).includes(qp)) {
AC = cavalosrpg.map(i => i.id).indexOf(qp)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
}
if(JSON.stringify(galosrpg).includes(qp)) {
AD = galosrpg.map(i => i.id).indexOf(qp)
galosrpg.splice(AC, 1)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
sabrpg.splice(AB, 1)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`O usuário acaba de ser removido da *City*, por mandato da soberania.`)
break

case 'rpglistgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
membros = `Lista de participantes do *grupo* que estão registrados na *City*:\n–\n`
rpglistgp = 0
for(i = 0; i < groupMembers.length; i++) {
if(JSON.stringify(sabrpg).includes(groupMembers[i].id)) {
membros += `Membro ID ${i+1}. ❪▧⃯⃟ฺ࣭࣪͘ꕸ▸ @${groupMembers[i].id.split('@')[0]}\n`
rpglistgp += 1
}
}
membros += `–\n• Quantidade: *${rpglistgp} participante(s).*`
mention(membros)
break

case 'meuc':
case 'meucity':
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
if(JSON.stringify(cavalosrpg).includes(sender)){
AC = cavalosrpg.map(a => a.id).indexOf(sender)
percentualcavalo = Number(cavalosrpg[AC].countVc)/Number(Number(cavalosrpg[AC].countVc)+Number(cavalosrpg[AC].countDc))*100
if(Number(percentualcavalo) > 0) {
porcemnmr = percentualcavalo
} else {
porcemnmr = 0
}
runcav = `• Quantidade de Cavalos que você possuí atualmente: *${cavalosrpg[AC].cavalos.length}*\n• Quantidade de Vitórias: *${cavalosrpg[AC].countVc}*\n• Porcentagem de Ganhos: *${Number(porcemnmr).toFixed(1)}%*\n• Dinheiro investido: *R$ ${Number(Number(cavalosrpg[AC].capitalVc)+Number(cavalosrpg[AC].capitalDc)).toFixed(2)}*\n• Dinheiro lucrado: (R$): *R$ ${Number(cavalosrpg[AC].capitalVc).toFixed(2)}*`
} else {
runcav = `️Você atualmente não está registrado na *corrida de cavalos*.`
}
if(JSON.stringify(galosrpg).includes(sender)){
AE = galosrpg.map(b => b.id).indexOf(sender)
percentualgalos = Number(galosrpg[AE].countVg)/Number(Number(galosrpg[AE].countVg)+Number(galosrpg[AE].countDg))*100
if(Number(percentualgalos) > 0) {
porcegalos = percentualgalos
} else {
porcegalos = 0
}
brigadegalo = `• Quantidade de Galos que você possuí atualmente: *${galosrpg[AE].galos.length}*\n• Quantidade de Vitórias: *${galosrpg[AE].countVg}*\n• Porcentagem de Ganhos: ${Number(porcegalos).toFixed(1)}%\n• Dinheiro investido: *R$ ${Number(galosrpg[AE].dinVg).toFixed(2)}*\n• Dinheiro lucrado: (R$): ${Number(galosrpg[AE].luckVg). toFixed(2)}`
} else {
brigadegalo = `Você atualmente não está registrado na *briga de galos*...`
}
if(JSON.stringify(roubosrpg).includes(sender)) {
SC = roubosrpg.map(b => b.id).indexOf(sender)
if(roubosrpg[SC].segurança > 20) {
tlvz = roubosrpg[SC].segurança
tlvz -= 20
tlvz /= 20
segurança = `Lv. ${tlvz}`
} else {
segurança = `*Você não possui nenhum level de segurança.*`
}
} else {
segurança = `*Você não possui nenhum level de segurança.*`
}
txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n–\n• User ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Saldo disponível: *R$ ${bctxt}*\n•️ Proteção: ${segurança}\n–\n• [🐴] *Corrida de Cavalo(s):*\n${runcav}\n–\n• [🐓] *Briga de Galo(s):*\n${brigadegalo}`
reply(txt)
break

case 'minhacarteira':
case 'carteira':
case 'meubanco':
case 'saldo':
if(!isSabCityOFF) return reply(`Olá, o modo RPG não esta a`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
caixa = []
for(i = 0; i < sabrpg.length; i++){
caixa.push({idnmr: sabrpg[i].id, nmr: i+1})
}
enc = caixa.map(b => b.idnmr).indexOf(sender)
if(Number(caixa[enc].nmr) < 100) {
if(Number(caixa[enc].nmr) < 10) {
page = `00` + caixa[enc].nmr
} else {
page = `0` + caixa[enc].nmr
}
} else {
page = caixa[enc].nmr
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n—\n• [💵] *Informações Bancárias*\n• Seu banco atual: *${sabrpg[AB].namebank}*\n• Você está atualmente com *R$ ${bctxt}* em sua carteira para uso.\n–\n• [🧾] *Informações de Registro*\n• Seu ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Você realizou o registro na _City_ às *${sabrpg[AB].hrg} hora(s)* no dia *${sabrpg[AB].drg}*.\n–\n• [📖] *Livro de Registro*\n_Com base em meu livro de registros_, você foi registrado na página: *${page}*`
reply(txt)
break

case 'rankcity':
case 'rankc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
setTimeout(() => {reagir(from, "🤑")}, 300)
matheuzinho = sabrpg.map(i => i)
rank = matheuzinho.sort((a, b) => (a.money < b.money) ? 0 : -1)
if(sabrpg.length > 5) {
var totalR = 5
} else {
var totalR = sabrpg.length
}
txt = `🌟🧾 *Rank City:*\n–\n`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
txt += `${i + 1}º Lugar - Usuário: *${rank[i].nome}*
• Saldo do Usuário: R$ ${Number(rank[i].money).toFixed(2)}\n–\n`
}
}
reply(txt)
break

case 'buscarc':
case 'buscarcity':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`ID não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
bcid = sabrpg[AB].id.split('@')[0]
cort = bcid.slice(5)
reply(`© *City:* | Carteira e informações do Usuário:\n–\n• Nome do Usuário: *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• Saldo disponível: *R$ ${bctxt}*\n—–\n• [🧾] *Informações de Registro:*\n• ID do Usuário: *R${bcid.split(cort)[0]}GP${cort}BC*\n• Registrou-se às *${sabrpg[AB].hrg}* hora(s) do dia *${sabrpg[AB].drg}*.`)
break

case 'addpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
MD = sabrpg[AB].money
addpix = Number(MD) + Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`R$ ${Number(pix).toFixed(2)} foram adicionados a conta ${sabrpg[AB].nome}`)
break

case 'setpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
sabrpg[AB].money = pix
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`O saldo da conta ${sabrpg[AB].nome} foi setado em R$ ${Number(pix).toFixed(2)}`)
break

case 'delpix':
if(!SoDono) return reply(enviar.msg.donosmt)
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Falta a chave pix`)
if(!pix) return reply(`Falta o PIX`)
AB = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(pix)) return reply(`${pix} não é um número...`)
MD = sabrpg[AB].money
addpix = Number(MD) - Number(pix)
sabrpg[AB].money = addpix
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`R$ ${Number(pix).toFixed(2)} foram retirados da conta ${sabrpg[AB].nome}`)
break

case 'zerarcity':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Falta a chave pix`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
if(!Number(q)) return reply(`${q} não é um número...`)
sabrpg[AB].money = 0
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`A conta ${sabrpg[AB].nome} foi zerada... Seu saldo agora é R$ 00.00`)
break

case 'gerargf':
if(!SoDono) return reply(enviar.msg.donosmt)
var [value, quant] = q.split('/')
if(!value) return reply(`Defina o valor que você desejar adicionar ao giftCard.`)
if(!quant) return reply(`Defina a quantidade de usuários que poderam usar o *código-resgate*.`)
if(!Number(value)) return reply(`${value} não é número!`)
if(!Number(quant)) return reply(`${quant} não é número!`)
dategf = moment.tz('America/Sao_Paulo').format('DDMMYY')
horagf = moment.tz('America/Sao_Paulo').format('HHmmss')
codegf = `P${value}M${quant}BC${dategf+horagf}QC${Number(Number(Number(dategf)+Number(horagf))/Number(quant)).toFixed(0)}RPG`
coderpg.push({codeid: codegf, valor: value,quantmax: Number(quant).toFixed(0), usus: []})
fs.writeFileSync("./database/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`Código de *R$ ${Number(value).toFixed(2)}* gerado, válido para ${Number(quant) <= 1 ? `um usuário apenas...` : `os ${quant} primeiros...`}\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf*`)
setTimeout(() => {
archivus.sendMessage(from, {text: codegf})
}, 1000)
break

case 'delgf':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply(`Digite o código que deseja remover do RPG`)
AB = coderpg.map(i => i.codeid).indexOf(q)
if(AB < 0) return reply(`Código não encontrado ou inexistente...`)
coderpg.splice(AB, 1)
fs.writeFileSync("./database/SystemRPG/coderpg.json", JSON.stringify(coderpg))
reply(`O código *${q}* foi desabilitado com sucesso, ou seja, o código a partir de agora está inválido.`)
break

case 'resgatargf':
case 'resgatar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = coderpg.map(i => i.codeid).indexOf(q)
BD = sabrpg.map(b => b.id).indexOf(sender)
if(!q) return reply(`Você esqueceu de digitar o código junto ao comando! _Ex: ${prefix+command} ABCD1234_`)
if(!JSON.stringify(coderpg).includes(q)) return reply(`Error *500*: Código Inexistente! ✋🏼`)
if(JSON.stringify(coderpg[AB].usus).includes(sender)) return reply(`Você já usou, ou seja, _o código só pode ser resgatado 1 vez por usuário._`)
if(Number(coderpg[AB].usus.length) < Number(coderpg[AB].quantmax)) {
coderpg[AB].usus.push({id: sender})
fs.writeFileSync("./database/SystemRPG/coderpg.json", JSON.stringify(coderpg))
MD = sabrpg[BD].money
sabrpg[BD].money = Number(MD) + Number(coderpg[AB].valor)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Estou verificando se o código é real, para atribuir o benefício a você!`)
setTimeout(() => {
mention(`✅️💰 *O código informado é válido!* Parabéns *@${sender.split("@")[0]}*, você acaba de resgatar o seu benefício.\n• Foi adicionado à sua carteira, um valor de: *R$ ${Number(coderpg[AB].valor).toFixed(2)}*`)
}, 3000)
} else {
reply(`Sinto muito!😿 O código informado está inválido.\n• Por favor, entre em contato com meu dono, caso seja um engano!`)
}
break

case 'codelist':
case 'listacodigo':
case 'listacodigos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(coderpg.length < 0) return reply(`Sinto muito!😿 Não existe nenhum código disponível no momento.`)
txt = `[Total: *${coderpg.length}*] - Códigos de resgate disponíveis.\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf <code>*`
for(i =0; i < coderpg.length; i++) {
txt += `\n—\n*[${i+1}]* » • Código: *${coderpg[i].codeid}*\n• Valor do Gift Card: *R$ ${Number(coderpg[i].valor).toFixed(2)}*\n• Número de usuário(s) que podem resgatar o mesmo: *${Number(coderpg[i].quantmax) - Number(coderpg[i].usus.length)}*`
}
reply(txt)
break

case 'fazerpix': case 'transferir':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
datepix = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
dateid = moment.tz('America/Sao_Paulo').format('DDMMYY')
horaid = moment.tz('America/Sao_Paulo').format('HHmmss')
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Coloque a chave PIX (número do indivíduo) para fazer a transferência bancária...`)
if(sender.includes(nmr)) return reply(`Não é possível enviar um pix para você mesmo...`)
if(!pix) return reply(`Coloque uma barra ( / ) após a chave, e defina o valor a ser enviado, ex:
${prefix+command} 553172595934/100`)
if(Number(pix) < 0.01) return reply(`Não é possível transferir menos que 1 centavo...`)
if(!Number(pix)) return reply(`${pix} não é número... 😿`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
BC = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(Number(pix) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa transferência...`)
if(sabrpg[AB].namebank == "Inter"){tpb = 0.1}
if(sabrpg[AB].namebank == "NuBank"){tpb = 0.2}
if(sabrpg[AB].namebank == "PagBank"){tpb = 0.3}
if(sabrpg[AB].namebank == "Bradesco"){tpb = 0.4}
if(sabrpg[AB].namebank == "Itaú"){tpb = 0.5}
if(sabrpg[AB].namebank == "Next"){tpb = 0.6}
if(sabrpg[AB].namebank == "Caixa"){tpb = 0.7}
if(sabrpg[AB].namebank == "Santander️"){tpb = 0.8}
if(sabrpg[AB].namebank == "Banco do Brasil"){tpb = 0.9}
if(sabrpg[AB].namebank == "PicPay"){tpb = 1}
if(sabrpg[AB].namebank == "PayPal"){tpb = 1.1}
if(sabrpg[AB].namebank == sabrpg[BC].namebank) {
taxabanco = 0
} else {
taxabanco = tpb
}
taxageral = Number(pix)*Number(taxabanco)/100
addpix = Number(sabrpg[BC].money) + Number(Number(pix) - Number(taxageral))
delpix = Number(sabrpg[AB].money) - Number(pix)
sabrpg[BC].money = addpix
sabrpg[AB].money = delpix
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
myid = sabrpg[AB].id.split('@')[0].slice(5)
suid = sabrpg[BC].id.split('@')[0].slice(5)
imn = sabrpg[AB].nome.slice(1)
isn = sabrpg[BC].nome.slice(1)
mimn = sabrpg[AB].nome.split(imn)[0]
misn = sabrpg[BC].nome.split(isn)[0]
comprovante = `🧾 *Comprovante:*\n—\n• Pix: *R$ ${Number(Number(pix) - Number(taxageral)).toFixed(2)}*\n• Código ID: *${mimn.toUpperCase()+myid+misn.toUpperCase()+suid}P${dateid}X${horaid}RPG*\n•️ Taxa do Banco: *${taxabanco}%*\n—–\n• A transferência foi realizada às *${hora120}* do dia: *${datepix}*\n——\n• *Envio:* *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n——\n• Recebimento: *${sabrpg[BC].nome}*\n• Banco: *${sabrpg[BC].namebank}*\n• ID: *R${sabrpg[BC].id.split(suid)[0]}GP${suid}BC*`
if(JSON.stringify(sabrpg).includes(nmrdn)) {
setTimeout(() => {
BD = sabrpg.map(d => d.id).indexOf(nmrdn)
pixdono = sabrpg[BD].money
sabrpg[BD].money = Number(pixdono) + Number(taxageral)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}, 1000)
}
reply(comprovante)
break

case 'chavepix':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return archivus.sendMessage(from, {text: `Usuário (a) @${menc_os2.split('@')[0]} não consta em nosso banco...`, mentions: [menc_os2]}, {quoted: selo})
AB = sabrpg.map(i => i.id).indexOf(sender_ou_n)
reply(`Chave encontrada/localizada! 🌟🧾\n• Nome: *${sabrpg[AB].nome}*\n• Chave: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'meupix':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
reply(`Aqui está sua numeração da chave pix: *${sabrpg[AB].id.split('@')[0]}*`)
break

case 'trocarbanco':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply(`Escolha um número correspondente ao banco...\nEx: ${prefix+command} 2 _(Serão necessários R$ 2500.00 para realizar essa ação)_\n––\nBancos disponíveis:\n• Opção - Número: [1] => Inter\n• Opção - Número: [2] => NuBank\n• Opção - Número: [3] => PagBank\n• Opção - Número: [4] => Bradesco\n• Opção - Número: [5] => Itaú\n• Opção - Número: [6] => Next\n• Opção - Número: [7] =>Caixa\n• Opção - Número: [8] => Santander\n• Opção - Número: [9] => Banco do Brasil\n• Opção - Número: [10] => PicPay\n• Opção - Número: [11] => PayPal️`)
if(Number(args[0]) === 1){ var bankDD = `Inter`}; if(Number(args[0]) === 2){ var bankDD = `NuBank`}; if(Number(args[0]) === 3){ var bankDD = `PagBank`}; if(Number(args[0]) === 4){ var bankDD = `Bradesco`}; if(Number(args[0]) === 5){ var bankDD = `Itaú`}; if(Number(args[0]) === 6){ var bankDD = `Next`}; if(Number(args[0]) === 7){ var bankDD = `Caixa`}; if(Number(args[0]) === 8){ var bankDD = `Santander️`}; if(Number(args[0]) === 9){ var bankDD = `Banco do Brasil`}; if(Number(args[0]) === 10){ var bankDD = `PicPay`}; if(Number(args[0]) === 11){ var bankDD = `PayPal️`}
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 2500) return reply(` Você não tem saldo suficiente pra realizar esta ação... São necessários R$ 2500.00 para alterar seu banco`)
MD = Number(sabrpg[AB].money) - Number(2500)
sabrpg[AB].money = MD
sabrpg[AB].namebank = bankDD
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
archivus.sendMessage(from, {text: `Troca efetuada com sucesso *@${sender.split('@')[0]}*, seu banco agora é o(a) ${bankDD}.`, mentions: [sender]})
break

case 'trocarnome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply(`Digite o novo nome junto ao comando... Lembre-se que essa ação custará R$ 1200.00\nEx: ${prefix+command} Yurizinn`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 1200) return reply(` Você não tem saldo suficiente pra realizar esta ação... São necessários R$ 1200.00 para alterar seu nome`)
MD = Number(sabrpg[AB].money) - Number(1200)
sabrpg[AB].money = MD
sabrpg[AB].nome = q
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
archivus.sendMessage(from, {text: `Troca efetuada com sucesso @${sender.split('@')[0]}, seu nome foi alterado para ${q}.`, mentions: [sender]})
break

case 'trabalhar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
horaT = moment.tz('America/Sao_Paulo').format('HH')
dataT = moment.tz('America/Sao_Paulo').format('DD')
data2T = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].limiteTh) === 0 && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].hrT) === Number(horaT)) return reply(`Você já trabalhou agora... Volte na próxima hora.`)
//trabalho normal...
if(Number(sabrpg[AB].limiteTh) > 0 && Number(sabrpg[AB].hrT) === Number(horaT) && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) === Number(data2T)) {
TBALE = Math.floor(Math.random() * 50) + 40
TBLH = Number(sabrpg[AB].money) + Number(TBALE)
HT = sabrpg[AB].limiteTh - 1
TD = sabrpg[AB].limiteTd - 1
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].money = TBLH
sabrpg[AB].limiteTh = HT
sabrpg[AB].limiteTd = TD
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns ${sabrpg[AB].nome}, você trabalhou e ganhou *R$ ${Number(TBALE).toFixed(2)}* até depois!🫡`)
}
HTR = sabrpg[AB].hrT + 1
//passar para a próxima hora...
if(Number(horaT) > Number(sabrpg[AB].hrT) && Number(sabrpg[AB].limiteTd) > 0 && Number(sabrpg[AB].diaT) === Number(dataT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].hrT = horaT
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Já tá pronto pra trabalhar dnv? Digite o comando novamente enquanto eu preparo suas coisas...`)
}
if(Number(sabrpg[AB].limiteTd) < 1 && Number(sabrpg[AB].diaT) === Number(dataT)) return reply(`Você já trabalhou muito por hoje... Volte amanhã!`)
//passar para o outro dia...
if(Number(dataT) > Number(sabrpg[AB].diaT) && Number(sabrpg[AB].mT) == Number(data2T)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} usuário (a), está pronto para trabalhar?`)
}
//passar para o próximo mês...
if(Number(data2T) > Number(sabrpg[AB].mT)) {
sabrpg[AB].limiteTh = 3
sabrpg[AB].limiteTd = 24
sabrpg[AB].hrT = horaT
sabrpg[AB].diaT = dataT
sabrpg[AB].mT = data2T
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} usuário (a), está pronto para iniciar o mês?`)
}
break

case 'minado': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if (isPlayMines) return reply('Uma partida já foi iniciada, espere acabar para iniciar uma nova...')
if (args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
teks = args[0].toLowerCase()
if (teks == 'easy') q_mines = 5
else if (teks == 'normal') q_mines = 8 
else if (teks == 'hard') q_mines = 12 
else return reply('Dificuldade inválida...')
p_mines = await getMinesPositions(minecor, q_mines)
atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
ctw = minecor.filter(function(el) {
return !p_mines.includes(el)
})
var minframes = JSON.parse(fs.readFileSync('./database/grupos/games/minesframe.json'))
mines.push({id: from, jogador: sender, pos_mines: p_mines, qnt_mines: q_mines, selected_cord: [], cord_to_win: ctw, attempts: atp, tips_d: 0, hits: 0, minesp: minframes})
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
archivus.sendMessage(from, {image: {url: minado_bomb}, caption: `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna B:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna C:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna D:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna E:* 🟦 🟦 🟦 🟦 🟦\n—\n• Mina(s): *${q_mines}*\n• Dificuldade: *${teks}*\n• Tentativa(s): *${atp}*`})
break

case 'mina': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if (!isPlayMines) return reply('Nehuma partida foi iniciada no grupo atualmente!');
if (args.length < 1) return reply('Diga a dificuldade: easy, normal, hard')
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
teks = args[0].toLowerCase()
play_i = minesId.indexOf(from)
const RAN_VALOR = Math.floor(Math.random() * 10000)
for(let obj of args) {
teks = obj.toLowerCase()
if (!minecor.includes(teks)) return reply('Escolha uma coordenada')
if (mines[play_i].selected_cord.includes(teks)) return reply('Coordenada já selecionada!')
if (mines[play_i].pos_mines.includes(teks)) {
mines[play_i].minesp[teks] = '💣'; mines[play_i].attempts -= 1; mines[play_i].tips_d = 0
} else {
mines[play_i].minesp[teks] = '⭐'; mines[play_i].hits += 1; mines[play_i].tips_d += 1
} mines[play_i].selected_cord.push(teks)
}
e = mines[play_i].minesp
res_teks = `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n—\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}\n—\n• Mina(s): *${mines[play_i].qnt_mines}*\n• Tentativa(s): *${mines[play_i].attempts}*\n• Acerto(s): *${mines[play_i].hits}*`
if (mines[play_i].attempts <= 0) {
res_teks += `\n——\n😿💔 Nossa que pena, suas chances esgotaram! Você acaba de perder e a chance de receber *R$ ${Number(RAN_VALOR).toFixed(2)}* em sua carteira.`
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
archivus.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
if (mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {
containAll = mines[play_i].cord_to_win.every(e => {
return mines[play_i].selected_cord.includes(e)
})
if (containAll) {
res_teks += `\n——\n🥳🌟 Meus parabéns e como recompensa da vitória, você acaba de ganhar *R$ ${Number(RAN_VALOR).toFixed(2)}* em sua carteira.`
USER = sabrpg.map(i => i.id).indexOf(sender)
MONEYATUAL = sabrpg[AB].money
sabrpg[USER].money = Number(MONEYATUAL) + Number(RAN_VALOR);
await mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
archivus.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
} else {
if (mines[play_i].tips_d >= 3) {
res_teks += `\n—\nVocê tem direito a *${parseInt(mines[play_i].tips_d/3)}* Dica(s).`
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
archivus.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
archivus.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
}
}
} else return reply("Já existe uma partida ocorrendo no grupo, não é possível iniciar outra! Aguarde acabar a atual, para iniciar a sua partida senhor(a) :(")
break

case 'minareset': 
if(!isGroup) return reply(enviar.msg.grupo);
if(!JSON.stringify(mines).includes(from) && !SoDono) return reply("Não existe nenhuma partida ainda em andamento no grupo.");
nosei = SoDono ? 0 : mines.map(i => i.id).indexOf(from)
if(mines[nosei].jogador == sender || isGroupAdmins || SoDono) {
mines.splice(nosei, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`O campo minado foi resetado com sucesso, a partida foi deletada.`)
} else {
reply("Somente o(s) adm(s) ou a pessoa que iniciou o jogo podem resetar.")
}
break

case 'mineshelp': 
reply(MinesHelp(prefix))
break

case 'minatips': 
if (!isPlayMines) return reply('- Nenhuma partida foi iniciada no grupo atualmente!');
if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {
play_i = minesId.indexOf(from)
if (mines[play_i].tips_d >= 3) {
is_columns = Math.random() < 0.5
if (!is_columns) {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
row = mines[play_i].pos_mines[m_sorted].charAt(0)
mines_row = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.startsWith(row)) mines_row += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`💡 Há *${mines_row}* bomba(s) na fileira *${row}*`)
} else {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
column = mines[play_i].pos_mines[m_sorted].charAt(1)
mines_column = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.endsWith(column)) mines_column += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
reply(`💡 Há *${mines_column}* bomba(s) na coluna *${column}*`)
}
} else return reply('*Acerte 3 ou mais vezes para ter direito a uma dica...*')
} else return reply("Você não pode usar este comando agora, por motivo que está ocorrendo uma partida e você não é o jogador atuante das respostas. :(")
break

case 'itenspesca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(JSON.stringify(pescaria).includes(sender)) return mentions(`Olá @${sender.split("@")[0]}, você já tem uma vara de pesca e um barco! Não é possível comprar novamente, pois você já possui o conjunto de pescaria.`)
if(Number(sabrpg[AB].money) < Number(150)) return reply(`😿 Você não possuí Golds suficiente para realizar a compra de uma vara de pescar e um barco...`)
sabrpg[AB].money -= Number(150) // Diminuir o saldo quando executar a compra!
pescaria.push(sender) // Adicionar ao json o user do id que realizou a compra do mesmo.
fs.writeFileSync("./database/SystemRPG/pescaria.json", JSON.stringify(pescaria))
reply(`⛵️🎣 Você acaba de adquirir uma vara de pescar e um barco para se usar na pescaria, acabei de descontar 300 Golds em sua conta por motivo da compra de seus utensílios, agora você está hábito para usar o comando: *${prefix}pescar*\n—\n• Lembrando, você deve ter pelo menos 300 reais para pescar, pois quando não há sucesso você perde um valor de até 200 Golds em sua Império  Account.`)
break

case 'pescaria':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(pescaria).includes(sender)) return mention(`Olá @${sender.split("@")[0]}, você não tem os itens nescessários para usar este comando! Compre uma vara de pescar e um barco por *150 Golds*, use o comando: *${prefix}itenspesca*`)
if(Number(sabrpg[AB].money) < Number(300)) return reply(`Você não possuí Golds suficiente para realizar o uso deste comando, no mínimo você deve ter mais de 300 Golds em sua carteira para usar...\n• Use meus joguinhos e jaja você consegue esse valor, não fique mal!️`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(rg_pescaria).includes(sender)) {
rg_pescaria.push({id: sender, minuto: minu})
fs.writeFileSync("./database/SystemRPG/pescaria-t.json", JSON.stringify(rg_pescaria))
}
AC = rg_pescaria.map(i => i.id).indexOf(sender)
if(Number(rg_pescaria[AC].minuto) !== Number(minu)) {
rg_pescaria[AC].minuto = minu
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
CHANCE_G = Math.floor(Math.random() * 100);
reply(`- Iniciando pescaria! Aguarde *5s* para obter o resultado...`)
if(Number(CHANCE_G) > 50) {
ValorPerdido = Math.floor(Math.random() * 150); 
AB = sabrpg.map(i => i.id).indexOf(sender);
sabrpg[AB].money = Number(sabrpg[AB].money) - Number(ValorPerdido);
perdeuMessage = [
`🌊😿 Você estava desbravando os 7 mares quando apareceu o tubarão martelo e derrubou o barco. Todos morreram, e você perdeu *R$ ${Number(ValorPerdido).toFixed(2)}* com gastos no funeral...`,
`Depois de horas de pesca, você não conseguiu o pacu nem o pirarucu! O único que aconteceu foi que você tomou no c*, acaba de perder *R$ ${Number(ValorPerdido).toFixed(2)}*! 😿🌟`,
`Você queria dar um mergulho na água e achar peixes novos, mas infelizmente você acabou caindo no sono e o único que conseguiu foi areia na bunda, ainda perdeu *R$ ${Number(ValorPerdido).toFixed(2)}*! 🤣`
]
txt = perdeuMessage[Math.floor(Math.random() * perdeuMessage.length)]
} else {
ValorGanho = Math.floor(Math.random() * 500)
AB = sabrpg.map(i => i.id).indexOf(sender)
TotalMoedas = sabrpg[AB].money
sabrpg[AB].money = Number(TotalMoedas) + Number(ValorGanho);
pescarMessage = [
`😲🗺 Em sua navegação pelo manguezais, você conseguiu pescar os seguintes frutos do mar *caranguejo-uçá, o camarão-rosa e a tainha* e você conseguiu vender ${Math.floor(Math.random() * 250)} de cada um deles, como recompensa você acaba de ganhar *R$ ${Number(ValorGanho).toFixed(2)}*.`,
`Depois de horas de pesca, finalmente você acaba de fisgar um pirarucu, o peixe era tão grande que foi preciso usar um guincho para tirá-lo da água. Como recompensa de sua pescada, você acaba de ganhar: *R$ ${Number(ValorGanho).toFixed(2)}*. 😌`,
`Você e seu pai foram convidados para um incrível passeio de barco, lá vocês conseguiram encontrar e pescar *${Math.floor(Math.random() * 50)}* peixe(s) e marisco(s)... Como recompensa, você acaba de ganhar em sua carteira: *R$ ${Number(ValorGanho).toFixed(2)}*. ⛵️🤍`,
`O seu esforço foi recompensado! Você ganhou *R$ ${Number(ValorGanho).toFixed(2)}* por ter feito a maior pescaria do dia! 😍`,
`🛒💰 Parabéns! Você vendeu vários peixes no mercado da produção localizado em *Maceió, Alagoas*, como recompensa por suas vendas o seu patrão lhe recompensou com *R$ ${Number(ValorGanho).toFixed(2)}*.`,
`😼 Você foi convidado à um torneio de pesca e ganhou em ${Math.floor(Math.random() * 5)}°, como recompensa você acaba de ganhar: R$ ${Number(ValorGanho).toFixed(2)}*.`,
`Você foi convidado à um torneio de pesca e saiu como campeão! 🎉 Parabéns, como recompensa você acaba de ganhar: R$ ${Number(ValorGanho).toFixed(2)}*.`,
`🌟 Você foi o pescador mais sortudo do dia! Ganhou R$ ${Number(ValorGanho).toFixed(2)} no sorteio desconhecido entre os pescadores.`,
`Você é um verdadeiro profissional! Faturou em toda sua pescada R$ ${Number(ValorGanho).toFixed(2)}, Parabéns amigo(a)! 😍🎉`,
`Você vendeu o seu sururu para um restaurante bem renomado na cidade de São Paulo! Ganhou R$ ${Number(ValorGanho).toFixed(2)}  pelas suas vendas do dia! 😲🌟🎉`,
`Você estava em um cruzeiro e acabou conhecendo muitos peixes de perto! Este cruzeiro era o Titanic, mas pelo menos você conseguiu *R$ ${Number(ValorGanho).toFixed(2)}* com os peixes... 🤣🎉`
]
txt = pescarMessage[Math.floor(Math.random() * pescarMessage.length)]
}
setTimeout(() => {archivus.sendMessage(from, {text: txt}, {quoted: seloMetaTokyo})}, 5000)
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova pescagem...`)
}
break;

case 'minerar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(minerar).includes(sender)) {
minerar.push({id: sender, minuto: minu})
fs.writeFileSync("./database/SystemRPG/minerar.json", JSON.stringify(minerar))
}
AC = minerar.map(i => i.id).indexOf(sender)
if(Number(minerar[AC].minuto) !== Number(minu)) {
minerar[AC].minuto = minu
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MINERAR_G = Math.floor(Math.random() * 100)
reply(`- Iniciando mineração! Aguarde *5s* para obter o resultado...`)
if(Number(MINERAR_G) > 50) {
PD = ["nenhum mineral valioso", "nenhuma joia valiosa em sua busca", "nenhum diamante em sua caçada", "nenhum minério validoso", "nenhum cobre em sua caçada", "nada de redstone em sua caçada"]
txt = `😭 Em sua tentativa de mineração, não foi possível evidenciar ${PD[Math.floor(Math.random()*PD.length)]}...`
} else {
MT = Math.floor(Math.random() * 2000)
AB = sabrpg.map(i => i.id).indexOf(sender)
MA = sabrpg[AB].money
sabrpg[AB].money = Number(MA) + Number(MT);
mineMessage = [
`Você estava minerando nas ilhas savitas e encontrou em seu caminho *R$ ${Number(MT).toFixed(2)}* em minerais preciosos! 💰`, 
`🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou *R$ ${Number(MT).toFixed(2)}* em troca de ouro!`, 
`💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à *R$ ${Number(MT).toFixed(2)}*.`, 
`⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou *R$ ${Number(MT).toFixed(2)}*!`, 
`🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em *R$ ${Number(MT).toFixed(2)}*.`, 
`😱🌟 Você invadiu a casa do vizinho e encontrou *R$ ${Number(MT).toFixed(2)}* escavando o quintal dele.`, 
`⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou *R$ ${Number(MT).toFixed(2)}*`, 
`🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à *R$ ${Number(MT).toFixed(2)}*.`, 
`🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*. 😸`, 
`Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*.`
]
txt = mineMessage[Math.floor(Math.random() * mineMessage.length)]
}
setTimeout(() => {archivus.sendMessage(from, {text: txt}, {quoted: seloMetaTokyo})}, 5000)
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova mineração...`)
}
break;

case 'comprarseguranca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply("Escolha na loja um segurança de 1-3 para proteger o seu dinheiro e evitar assaltos")
if(!JSON.stringify(roubosrpg).includes(sender)) {
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(Number(args[0]) > 0 && Number(args[0]) <= 3) {
value = Number(args[0]) * 20 + 20
BC = sabrpg.map(i => i.id).indexOf(sender)
AB = roubosrpg.map(i => i.id).indexOf(sender)
if(Number(Number(args[0]) * 600) > sabrpg[BC].money) return reply(`Você não tem dinheiro suficiente para comprar esse segurança...`)
if(roubosrpg[AB].segurança == value) return reply(`Você já possui esse segurança...`)
comp = value > roubosrpg[AB].segurança ? `diminuída em ${value - roubosrpg[AB].segurança}%` : `aumentada em ${value - roubosrpg[AB].segurança}%`
roubosrpg[AB].segurança = value
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
RemoverGold(sender, Number(args[0]) * 600)
reply(`Segurança Lv. ${args[0]} comprado com sucesso 👨🏻‍✈️\nTaxa de drop: ${comp}`)
} else {
reply(`Escolha um número correspondente a um dos seguranças presentes na loja...`)
}
break

case 'treinar': case 'treino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
treinamento = ["Cê já treinou lek", "Hmm", "Tá bão", "Chega lek, cê já treinou", "Te acalma desgrama"]
if(JSON.stringify(roubosrpg).includes(sender)) return reply(`${treinamento[Math.floor(Math.random()*treinamento.length)]}`)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply("Treinamento efetuado com sucesso... Pronto para assaltar outros usuários")
break

case 'assaltar': case 'furtar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você precisa treinar primeiro... Use ${prefix}treinar`)
if(!menc_os2) return reply("Marque a pessoa quem você quer assaltar...")
if(sender.includes(menc_os2)) return reply(`Não é possível assaltar você mesmo...`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return reply(`ID do usuário não encontrado ou inexistente...`)
matheuzinho = Math.floor(Math.random()*100)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(roubosrpg[AD].preso == true) return reply("Você está preso, portanto, não é possível roubar...")
if(Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) < 10) return reply("Esse ser não tem nem onde cair morto, pobre desgramado... Vai assaltar alguém mais rico 🤡")
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].hora) === Number(hora3) && Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Hmm... Agora não ${sabrpg[AB].nome}, aguarde ${Number(Number(Number(hora3) + 1) * 60) - Number(Number(roubosrpg[AD].hora) * 60 + Number(minuto3))} minutos para fazer o próximo assalto 🥷🏻`)
if(roubosrpg[AD].limite <= 0 && Number(hora3) > Number(roubosrpg[AD].hora) && Number(roubosrpg[AD].dia) === Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].dia) !== Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  roubosrpg[AD].dia = data3
  fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite > 0 && roubosrpg[AD].preso == false) {
  roubosrpg[AD].limite -= 1
  fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
  if(matheuzinho > 5) {
    matheuzinho2 = Math.floor(Math.random()*100)
    lvx = Number(Math.floor(Math.random()*39)+1)
    totalM = lvx * 100
    totalU = sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money - 1
    ganho = totalM > Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) ? Math.floor(Math.random()*totalU) + 1 : Math.floor(Math.random()*100) * lvx
    algo = JSON.stringify(roubosrpg).includes(menc_os2) ? roubosrpg[roubosrpg.map(b => b.id).indexOf(menc_os2)].segurança : 20
    if(matheuzinho2 > algo) {
      sabrpg[AB].money += ganho
      fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money -= ganho
      fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Assalto efetuado com sucesso ${sabrpg[AB].nome}, você roubou R$ ${Number(ganho).toFixed(2)} da conta ${sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].nome}`)
    } else {
      perda1 = Number(ganho) / 2
      perda2 = perda1 >= sabrpg[AB].money ? sabrpg[AB].money : perda1
      sabrpg[AB].money -= perda2
      fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`🚓 Ops, você foi pego pela polícia e pagou ${perda1 >= sabrpg[AB].money ? `todo o seu dinheiro` : `R$ ${Number(perda2).toFixed(2)}`} para sair da cadeia... Kkkk sinto muito 😔🤙🏽`)
    }
  } else {
    matheuzinho3 = Math.floor(Math.random()*100)
    if(matheuzinho3 > 10) {
      roubosrpg[AD].dinheiro += sabrpg[AB].money
      roubosrpg[AD].preso = true
      fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Putz, cê deu muito azar... Seu caso foi passado para o governo federal, e toda a sua grana foi apreendida 😮‍💨\nFelizmente, cê pode pegar o dinheiro de volta amanhã usando ${prefix}retirar`)
    } else {
      if(JSON.stringify(cavalosrpg).includes(sender)) {
        R1 = cavalosrpg.map(i => i.id).indexOf(sender)
        cavalosrpg.splice(R1, 1)
        fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
      }
      if(JSON.stringify(galosrpg).includes(sender)) {
        R2 = galosrpg.map(i => i.id).indexOf(sender)
        galosrpg.splice(R2, 1)
        fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
      }
      roubosrpg[AD].preso = false
      fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Vix mlk, deu ruim demais... Seu assalto virou caso da INTERPOL, e ela confiscou todos os seu bens junto com seu dinheiro 👨🏻‍✈️`)
    }
  }
}
break

case 'soltar':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!q && !menc_os2) return
usu = menc_os2 ? menc_os2 : q + `@s.whatsapp.net`
if(!JSON.stringify(roubosrpg).includes(usu)) return reply(`❌ ID não encontrado ou inexistente!`)
AD = roubosrpg.map(i => i.id).indexOf(menc_os2)
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply(`Usuário solto.`)
break

case 'revogar': case 'reivindicar': case 'retirar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você não foi preso lek, aquieta o facho 😂`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
data3 = moment.tz('America/Sao_Paulo').format('DD')
if(roubosrpg[AD].dinheiro <= 0) return reply(`Não há dinheiro apreendido...`)
if(Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Você só pode retirar o dinheiro apreendido amanhã...`)
reply(`Pronto, aqui estão os R$ ${Number(roubosrpg[AD].dinheiro).toFixed(2)} que foram apreendidos pela polícia... Vê se anda na linha mlk 👨🏻‍✈️`)
sabrpg[AB].money += roubosrpg[AD].dinheiro
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
break

case 'comprarestabulo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você já tem um estábulo em seu nome ${sabrpg[AB].nome}... 🐎`)
if(Number(sabrpg[AB].money) < 500) return reply(`Você não saldo suficiente para efetuar essa compra...`)
cavH = moment.tz('America/Sao_Paulo').format('HH')
cavD = moment.tz('America/Sao_Paulo').format('DD')
cavM = moment.tz('America/Sao_Paulo').format('MM')
cavalosrpg.push({id: sender,
level: 1,
quant_cavalos: 0,
setcav: `nenhum`,
countVc: 0,
capitalVc: 0,
countDc: 0,
capitalDc: 0,
corridaL: 10,
corridaH: cavH,
corridaD: cavD,
corridaM: cavM,
cavalos: []
})
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 500
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do estábulo... Agora você pode comprar cavalos para correr com eles 🐴`)
break

case 'venderestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(TT4)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu estábulo ficou avaliado em R$ ${Number(TT4).toFixed(2)}
📈 Parabéns pela venda...`)
break

case 'avaliarestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
txt = `ㅤㅤㅤ〘 *AVALIANDO* 〙
🐴 *Preço Por Cavalos:* R$ ${Number(TT1).toFixed(2)}
📈 *Preço Por Upgrade:* R$ ${Number(TT2).toFixed(2)}
🏆 *Preço Por Vitórias:* R$ ${Number(TT3).toFixed(2)}

🤑 *Total:* R$ ${Number(TT4).toFixed(2)}

-> Use ${prefix}venderestabulo caso queira se desfazer do mesmo.`
reply(txt)
break

case 'estabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) {
countcav = `\n『 Você não possui cavalos... 』\n`
} else {
countcav = `\n🐎 *Cavalos ↴*`
for(c = 0; c < cavalosrpg[AC].cavalos.length; c++) {
if(cavalosrpg[AC].cavalos[c].sela == true){
selasasah = `✅`
} else { selasasah = `❌` }
if(cavalosrpg[AC].cavalos[c].dor == true){
dorsasah = `✅`
} else { dorsasah = `❌` }
if(cavalosrpg[AC].cavalos[c].fratura == true){
fratsasah = `✅`
} else { fratsasah = `❌` }
TTCV = Number(cavalosrpg[AC].cavalos[c].viccav)/Number(Number(cavalosrpg[AC].cavalos[c].viccav)+Number(cavalosrpg[AC].cavalos[c].dercav))*100
if(Number(TTCV) > 0) {
PVCV = TTCV
} else {
PVCV = 0
}
countcav += `\n» ${Number(c)+1} « Nome Do Cavalo: *${cavalosrpg[AC].cavalos[c].nomedocavalo}*\n• Velocidade: *${Number(cavalosrpg[AC].cavalos[c].tipo)+1}x*\n• Sela: *${selasasah}*\n• Doente *${dorsasah}*\n• Fraturado: *${fratsasah}*\n• Vitórias: *${cavalosrpg[AC].cavalos[c].viccav}*\n• Percentual de Ganhos: *${Number(PVCV).toFixed(1)}%*\n• Apostas: *R$ ${Number(cavalosrpg[AC].cavalos[c].contdin).toFixed(2)}*\n• Ganhos: *R$ ${Number(cavalosrpg[AC].cavalos[c].lucdin).toFixed(2)}*\n`
}
}
txt = `👤 Nome: *${sabrpg[AB].nome}*\n💯 Level do Estábulo: *${cavalosrpg[AC].level}*\n📐 Tamanho Do Estábulo: ${Number(cavalosrpg[AC].level)*5} m²*\n🧮 Quantidade De Cavalos: *${cavalosrpg[AC].cavalos.length}*\n🔔 Cavalo Selecionado: *${cavalosrpg[AC].setcav}*\n${countcav}`
archivus.sendMessage(from, {image: {url: `https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`}, caption: txt}, {quoted: selo})
break

case 'setcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(!q) return reply(`Diga o nome de um dos cavalos presentes no seu estábulo...
Ex: ${prefix+command} Patolino`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(q.toLowerCase())) return reply(`Este cavalo não consta eu seus registros... Use o comando ${prefix}estabulo, e verifique quais cavalos você tem 🐴`)
cavalosrpg[AC].setcav = q.toLowerCase()
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Cavalo definido com sucesso...`)
break

case 'upcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
AT = Number(cavalosrpg[AC].level) * 200
if(Number(sabrpg[AB].money) < Number(AT)) return reply(`Você não saldo suficiente para upar seu estábulo...`)
LC = cavalosrpg[AC].level
cavalosrpg[AC].level = Number(LC) + 1
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(AT)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(` Agrademos a confiança na *Black Construction...* R$ ${Number(AT).toFixed(2)} foram investidos, e seu estábulo está no level ${cavalosrpg[AC].level} 🐴`)
} else { reply(`Seu estábulo já alcançou o tamanho máximo...`) }
break

case 'comprarcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
var [cavnmr, cavnome] = q.split(`/`)
if(!cavnmr) return reply(`Escolha um cavalo...`)
if(!cavnome) return reply(`Agora dê um nome para seu cavalo... Ex: ${prefix+command} ${q}/Michael`)
if(Number(cavnome.length) > 20) return reply(`Este nome é muito grande...`)
if(Number(cavnmr) === 1 || Number(cavnmr) === 2 || Number(cavnmr) === 3 || Number(cavnmr) === 4) {
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
MCV1 = Number(cavnmr) - 1
MCV2 = Number(MCV1) * 500
MCV3 = Number(MCV2) + 500
if(Number(sabrpg[AB].money) < Number(MCV3)) return reply(`Você não saldo suficiente para comprar este cavalo...`)
if(JSON.stringify(cavalosrpg[AC].cavalos).includes(cavnome)) return reply(`Você já tem um cavalo com esse nome... Pfvr, escolha outro nome 🐴`)
if(Number(cavalosrpg[AC].cavalos.length) == Number(cavalosrpg[AC].level)) return reply(`Você atingiu o número máximo de cavalos no estábulo... Caso queira aumentar o tamanho do estábulo, use ${prefix}upcavalo`)
cavalosrpg[AC].cavalos.push({nomedocavalo: cavnome.toLowerCase(),
tipo: Number(cavnmr)-1,
sela: false,
dor: false,
fratura: false,
viccav: 0,
dercav: 0,
contdin: 0,
lucdin: 0
})
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
sabrpg[AB].money -= Number(MCV3)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do cavalo... Espero que faça bom proveito com ele 🐴`)
} else {
reply(`Esse cavalo não está disponível para compra...`)
}
break

case 'vendercavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá vender... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) {
HCS = 100
} else {
HCS = 0
}
if(cavalosrpg[AC].cavalos[AD].dor == true) {
HCD = 50
} else {
HCD = 0
}
if(cavalosrpg[AC].cavalos[AD].fratura == true) {
HCF = 125
} else {
HCF = 0
}
HCV = Number(Number(Number(cavalosrpg[AC].cavalos[AD].tipo)+1)*250) + Number(HCS) - Number(HCD) - Number(HCF) + Number(cavalosrpg[AC].cavalos[AD].viccav)
MB = sabrpg[AB].money
sabrpg[AB].money = Number(MB) + Number(HCV)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
cavalosrpg[AC].cavalos.splice(AD, 1)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo ficou avaliado em R$ ${Number(HCV).toFixed(2)} 🐴📈 - Parabéns pela venda...`)
break

case 'comprarsela':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um cavalo!🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) return reply(`Você já possui uma sela neste cavalo...`)
if(Number(sabrpg[AB].money) < 200) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].sela = true
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 200
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Uma sela foi comprada para o seu alazão com sucesso... 🐴`)
break

case 'atadura':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].fratura == false) return reply(`Seu cavalo não está fraturado...`)
if(Number(sabrpg[AB].money) < 250) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].fratura = false
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 250
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Atadura colocada com sucesso... Agora deixe seu bichinho descansar 🐴`)
break

case 'cavalo':
case 'cavalos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
horacav = moment.tz('America/Sao_Paulo').format('HH')
diacav = moment.tz('America/Sao_Paulo').format('DD')
mmcav = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == false) return reply(`Você precisa comprar uma sela para seu alazão...`)
if(cavalosrpg[AC].cavalos[AD].dor == true) return reply(`Seu cavalo está doente... Compre uma _"cdcv3"_ na loja de CAVALOS para ele voltar a correr 💉`)
if(cavalosrpg[AC].cavalos[AD].fratura == true) return reply(`Seu cavalo está com a pata torcida... Vá comprar uma atadura para tratar isso 🐴`)
//passar eo limite por hora...
if(Number(cavalosrpg[AC].corridaL) === 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) return reply(`Seu cavalo parece cansado... Pfvr, volte mais tarde 🐴`)
//passar de uma hora pra outra...
if(Number(horacav) > Number(cavalosrpg[AC].corridaH) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo parece ótimo... Você já pode correr dnv 🐴`)
}
//passar de um dia pro outro...
if(Number(diacav) > Number(cavalosrpg[AC].corridaD) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu cavalo está pronto para correr ?`)
}
//passar de um mês pro outro...
if(Number(mmcav) > Number(cavalosrpg[AC].corridaM)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Um novo mês de vitórias se inicia...`)
}
//aposta liberada...
if(Number(cavalosrpg[AC].corridaL) > 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav)) {
if(!q) return reply(`A corrida já vai começar... Faça logo a sua aposta`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 100) return reply(`Nossas apostas são de alto nível aqui... Você não pode apostar menos de R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossas apostas são de alto nível aqui... Mas você não pode apostar mais do que R$ 10000.00`)
MT = Math.floor(Math.random()*40)
if(Number(MT) === 0) {
GB = cavalosrpg.map(m => m.id).indexOf(sender)
GF = cavalosrpg[GB].cavalos.map(n => n.nomedocavalo).indexOf(cavalosrpg[GB].setcav)
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
cavalosrpg[GB].cavalos.splice(GF, 1)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
acidente = [`Seu cavalo se acidentou na pista e morreu... Meus sentimentos ao alazão 🖤`, `Seu cavalo adoeceu gravemente antes da corrida, e morreu... Meus pêsames pelo seu amigo 🖤`]
reply(acidente[Math.floor(Math.random()*acidente.length)])
}
if(Number(MT) === 1) {
cavalosrpg[AC].cavalos[AD].dor = true
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo adoeceu, mas felizmente, essa doença não é para a morte... Vá comprar a _"cdcv3",_ uma vacina poderosa que vai levantar o seu alazão na hora 💉`)
}
if(Number(MT) === 2) {
cavalosrpg[AC].cavalos[AD].fratura = true
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🥹 Seu alazão fraturou a patinha enquanto corria... Vá comprar uma atadura na ${prefix}lojadecavalos`)
}
if(Number(MT) > 2) {
cavt1 = SoDono ? 1 : Math.floor(Math.random()*19)+1
cavt2 = Number(cavt1) - Number(cavalosrpg[AC].cavalos[AD].tipo)
if(Number(cavt2) < 1){
var cav = 1
} else {
var cav = cavt2
}
//primeiro lugar...
if(Number(cav) === 1){
cav2 = Number(args[0]) + Number(args[0]) / 2
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L1 = 1
} else {
L1 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC1 = 1
} else {
LC1 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L1)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC1)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//segundo lugar...
if(Number(cav) === 2){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = args[0]
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L2 = 1
} else {
L2 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC2 = 1
} else {
LC2 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L2)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC2)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//terceiro lugar...
if(Number(cav) === 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = Number(args[0]) / 2
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L3 = 1
} else {
L3 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC3 = 1
} else {
LC3 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L3)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC3)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//outros lugares...
if(Number(cav) > 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(args[0])
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
LM = cavalosrpg[AC].corridaL
CCD = cavalosrpg[AC].countDc
CDC = cavalosrpg[AC].capitalDc
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countDc = Number(CCD) + 1
cavalosrpg[AC].capitalDc = Number(CDC) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS)+1
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você perdeu R$ ${Number(args[0]).toFixed(2)}`)
}
}
}
break

case '1xbcbet':
case '1xbcbets':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Imperiorpg*.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply(`🛒 *Império  City Bets* é o novo sistema de apostas... Invista uma quantia entre R$ 100.00 e R$ 10000.00, e veja seu dinheiro rodar.`)
if(!Number(args[0])) return reply(`${args[0]} não é número... 😿`)
AB = sabrpg.map(i => i.id).indexOf(sender)
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui dinheiro suficiente para investir`)
if(Number(args[0]) < 100) return reply(`Você deve investir no mínimo R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossa plataforma não paga mais que R$ 10000.00`)
if(!JSON.stringify(bcbet).includes(sender)) {
bcbet.push({id: sender, minuto: minuto3})
fs.writeFileSync("./database/SystemRPG/1xbcbet.json", JSON.stringify(bcbet))
}
AC = bcbet.map(i => i.id).indexOf(sender)
if(Number(bcbet[AC].minuto) !== Number(minuto3)) {
bcbet[AC].minuto = minuto3
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MN = Math.floor(Math.random()*100)
reply(`📊 Analisando os gráficos...`)
if(Number(MN) > 15) {
PG = ["na construção de um estádio de futebol, mas a construção desabou...", "na bolsa de valores, mas a Bovespa caiu drasticamente...", "num leilão de carros, mas os carros não foram leiloados...", "num leilão de carros, mas você sofreu um golpe...", "no seu time de futebol, mas o seu time perdeu o jogo...", "numa corrida, mas o carro bateu...", "em uma luta de UFC, e seu lutador sofreu um nocaute..."]
txt = `${II}Sab Black's Bet${II} > A sua casa de apostas online!\n—\n[🔴] - As estatísticas não são muito favoráveis! Você investiu ${PG[Math.floor(Math.random()*PG.length)]}\n• Você perdeu, então sofreu uma perda de *R$ ${Number(args[0]).toFixed(2)}* em dinheiro.`
img = `https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
GG = ["na construção de um estádio de futebol, e a construção foi bem sucedida...", "na bolsa de valores, e a Bovespa subiu exponencialmente...", "num leilão de carros, e obteve grande lucro na venda dos mesmos...", "no seu time de futebol, e o seu time venceu o jogo...", "numa corrida, e o seu carro chegou em primeiro lugar...", "em uma luta de UFC, e seu lutador derrubou o oponente facilmente..."]
VL1 = Math.floor(Math.random()*9)+1
VL2 = Number(args[0]) * Number(VL1)
txt = `${II}Sab Black's Bet${II} > A sua casa de apostas online!\n—\n[🟢] - As estatísticas são positivas e muito boas por sinal! Você investiu ${GG[Math.floor(Math.random()*GG.length)]}\n• Você ganhou e recebeu como saldo: *R$ ${Number(VL2).toFixed(2)}*`
img = `https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(VL2)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
setTimeout(() => {
archivus.sendMessage(from, {image: {url: img}, caption: txt}, {quoted: selo})
}, 2000)
} else {
reply(`Aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))} seg.* para fazer novas apostas novamente.`)
}
break

case 'resetscbet':
if(!SoDono) return reply(enviar.msg.donosmt)
for(i = 0; i < sabrpg.length; i++) {
sabrpg[i].bcbet = true
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
reply(`Gráficos restaurados para todos os ${sabrpg.length} usuários do RPG`)
break

case 'comprargalinheiro':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(JSON.stringify(galosrpg).includes(sender)) return reply(`Você já possui um galinheiro... Consulte a ${prefix}lojadegalos para comprar galos e brigar com eles 🐔`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 500) return reply(`Vc não possui dinheiro suficiente para efetuar essa compra...`)
gaH = moment.tz('America/Sao_Paulo').format('HH')
gaD = moment.tz('America/Sao_Paulo').format('DD')
gaM = moment.tz('America/Sao_Paulo').format('MM')
galosrpg.push({id: sender,level: 1,galinhas: 0,durabilidade: 5,ovos: 0,countVg: 0,countDg: 0,dinVg: 0,luckVg: 0,brigaL: 15,brigaH: gaH,brigaD: gaD,brigaM: gaM,galos: []})
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 500
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`🐔 Galinheiro comprado com sucesso... Consulte ${prefix}galinheiro`)
break

case 'comprargalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja comprar...`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) === 1 || Number(args[0]) === 6 || Number(args[0]) === 12) {
if(Number(Number(galosrpg[AD].galos.length) + Number(args[0])) > Number(Number(galosrpg[AD].level)*5)) return reply(`Não é possível comprar +${args[0]} ${Number(args[0]) < 2 ? 'galo' : 'galos'}, pois excede o limite de ${Number(galosrpg[AD].level)*5} galos...\n• Caso queira aumentar o tamanho do galinheiro, use ${prefix}upgalo`)
if(Number(args[0]) === 1) {
if(Number(sabrpg[AB].money) < 100) return reply(`Vc não possui saldo suficiente para efetuar essa compra!`)
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 100
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`1 galo comprado com sucesso!`)
}
if(Number(args[0]) === 6) {
if(Number(sabrpg[AB].money) < 550) return reply(`Vc não possui saldo suficiente para efetuar essa compra...`)
for(i = 0; i < 6; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 550
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`6 galos comprado com sucesso.`)
}
if(Number(args[0]) === 12) {
if(Number(sabrpg[AB].money) < 1000) return reply("Vc não possui saldo suficiente para efetuar essa compra...")
for(i = 0; i < 12; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`12 galos comprado com sucesso`)
}
} else {
reply(`Não é possível comprar essa quantidade de galos...`)
}
break

case 'vendergalo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que um galo...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galos.length)) return reply(`Não é possível vender um número maior do que a quantidade de galos em seu galinheiro...`)
if(Number(galosrpg[AD].galos.length) === 0) return reply(`Você precisa comprar um galo antes...`)
for(i = 0; i < Number(args[0]); i++) {
galosrpg[AD].galos.splice(i, 1)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galo${Number(args[0]) > 1 ? 's' : ''} vendido${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliado${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'comprargalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(!q) return reply("Coloque a quantidade de galinhas que deseja comprar...")
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível comprar menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
if(Number(args[0]) > Number(Number(galosrpg[AD].level) * 2)) return reply(`Não é possível comprar +${args[0]} galinhas, pois excede o limite de ${Number(galosrpg[AD].level) * 2} galinhas em seu galinheiro...\nCaso queira aumentar o tamanho do seu galinheiro, use o comando ${prefix}upgalo`)
if(Number(sabrpg[AB].money) < Number(Number(args[0]) * 100)) return reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} ${Number(args[0]) > 1 ? "irão" : "irá"} custar R$ ${Number(Number(args[0]) * 100).toFixed(2)}, e este valor excede o saldo monetário em sua conta...`)
GG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(GG) + Number(args[0])
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(Number(args[0]) * 100)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} comprada${Number(args[0]) > 1 ? 's' : ''} com sucesso...`)
break

case 'vendergalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar uma galinha antes...`)
if(!q) return reply(`Defina a quantidade de galinhas que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galinhas)) return reply(`Não é possível vender um número maior do que a quantidade de galinhas em seu galinheiro...`)
if(Number(galosrpg[AD].galinhas) === 0) return reply(`Você precisa comprar uma galinha antes...`)
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - Number(args[0])
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} vendida${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliada${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'cruzargg':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].galos.length) === 0) return reply("Você não possui galos...🐓 É necessário ao menos 1 galo para cruzar.")
if(Number(galosrpg[AD].galinhas) === 0) return reply("Você não possui galinhas...🐔 É necessário ao menos 1 galinha para cruzar.")
if(Number(galosrpg[AD].ovos) < Number(Number(galosrpg[AD].level * 2))) {
alecruz = Math.floor(Math.random() * 100)
if(alecruz > 50) {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
galosrpg[AD].durabilidade = Number(QD) - 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = "Não houve sucesso no cruzamento das aves"
} else {
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sua galinha não estava pronta para o cruzamento, e acabou morrendo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} galinha${Number(galosrpg[AD].galinhas) > 1 ? `s` : ``} 🐔` : ``}`
}
} else {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
QO = galosrpg[AD].ovos
galosrpg[AD].durabilidade = Number(QD) - 1
galosrpg[AD].ovos = Number(QO) + 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo...
Use ${prefix}chocarovo para tentar a sorte`
} else {
QG = galosrpg[AD].galinhas
QO = galosrpg[AD].ovos
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].ovos = Number(QO) + 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo, mas a sua galinha morreu no processo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} ${Number(galosrpg[AD].galinhas) > 1 ? `${galosrpg[AD].galinhas} galinhas` : `1 galinha`}` : ``}`
}
}
reply(`${resp}`)
} else {
reply(`Você atingiu a quantidade máxima de ovos em seu galinheiro... Use ${prefix}chocarovo para choca-los`)
}
break

case 'chocarovo': 
case 'chocar': 
case 'ovo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].ovos) <= 0) return reply("Você não possui ovos para chocar...")
if(Number(galosrpg[AD].galos.length) >= Number(Number(galosrpg[AD].level) * 5)) return reply("Todos os seus slots já estão na quantidade máxima..")
aleovo = Math.floor(Math.random() * 100)
if(aleovo > 40) {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sem sucesso ao tentar chocar o ovo!😿")
} else {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sucesso, ovo chocado deu origem a +1 galo para o seu galinheiro 😸☝🏽")
}
break

case 'galinheiro':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
setTimeout(() => {reagir(from, "🐔")}, 300)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
totalG = galosrpg[AD].galos
let medvida = 0
let medvic = 0
let medder = 0
for(i = 0; i < totalG.length; i++) {medvida += totalG[i].vida
if(Number(totalG[i].vigalo) > 0) {medvic += totalG[i].vigalo}
if(Number(totalG[i].degalo) > 0) {medder += totalG[i].degalo}
}
if(Number(galosrpg[AD].galos.length) > 0) {
TT1 = `${Number(Number(`${medvida}`) / Number(galosrpg[AD].galos.length)).toFixed(0)}`
TT2 = `${Number(Number(`${medvic}`) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}/${Number(Number(Number(`${medvic}`) + Number(`${medder}`)) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}`
TT3 = `${Number(Number(`${medvic}`) / Number(Number(`${medvic}`) + Number(`${medder}`)) * 100).toFixed(1)}%`
} else {
TT1 = `0`
TT2 = `0/0`
TT3 = `0.0%`
}
txt = `Olá *${sender.split("@")[0]}*, aqui está as informações sobre seu galinheiro!\n• Seu galinheiro está atualmente no level: *${galosrpg[AD].level}*\n——\n• [🚧] Área total do Galinheiro: *${Number(galosrpg[AD].level) * Number(galosrpg[AD].level)}m²*\n——\n• [🏡] *Habitantes do seu Galinheiro:*\n• Quantidade de Galo(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galos.length}/${Number(galosrpg[AD].level) * 5}*\n• Quantidade de Galinha(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galinhas}/${Number(galosrpg[AD].level) * 2}*\n• Quantidade de Ovo(s) que as suas galinhas colocaram: *${galosrpg[AD].ovos}/${Number(galosrpg[AD].level) * 2}*\n• Expectativa média de vida de seus bichinhos: *${TT1}*\n——\n• [🏆] *Médias e Porcentagens:*\n• Sua média de vitórias conquistadas por seu(s) bichinho(s): *${TT2}*\n• Sua média percentual atualmente em seu galinheiro: *${TT3}*`
mention(txt);
break

case 'upgalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(Number(galosrpg[AD].level) * 100)) return reply(`Você não possui saldo suficiente para efetuar essa compra...`)
if(Number(galosrpg[AD].level) < 6) {
quant = galosrpg[AD].level
galosrpg[AD].level = Number(quant) + 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu galinheiro foi upado para o level ${galosrpg[AD].level} com sucesso...`)
} else {
reply(`Seu galinheiro está no level máximo!😿 Não é possível aumentar!`)
}
break

case 'galo':
case 'galos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes!`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
galosH = moment.tz('America/Sao_Paulo').format('HH')
galosD = moment.tz('America/Sao_Paulo').format('DD')
galosM = moment.tz('America/Sao_Paulo').format('MM')
if(Number(galosrpg[AD].galos.length) > 0) {
if(!q) return reply(`Vix lek, cê caiu em uma briga ilegal de galos...🐔 Faça logo a sua aposta, e venha dançar!`)
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa aposta...`)
if(Number(args[0]) > 100) return reply("Não é possível apostar mais que R$ 100.00 em uma briga ilegal e clandestina...")
if(Number(args[0]) < 1) return reply("Deixa de ser pobre lek")
if(Number(galosrpg[AD].brigaL) <= 0) return reply("Chega de brigas por agora... Volte mais tarde")
if(Number(galosH) > Number(galosrpg[AD].brigaH) && Number(galosrpg[AD].brigaD) === Number(galosD) && Number(galosrpg[AD].brigaM) === Number(galosM) && Number(galosrpg[AD].brigaL) <= 0) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Bem vindo (a) de volta, hora de brigar...")
}
if(Number(galosD) > Number(galosrpg[AD].brigaD) && Number(galosrpg[AD].brigaM) === Number(galosM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar ?`)
}
if(Number(galosM) > Number(galosrpg[AD].brigaM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
galosrpg[AD].brigaM = galosM
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar?`)
}
if(Number(galosrpg[AD].brigaD) == Number(galosD) && Number(galosrpg[AD].brigaM) == Number(galosM) && Number(galosrpg[AD].brigaL) > 0) {
galosgeral = galosrpg[AD].galos
alegalo = galosgeral[Math.floor(Math.random()*galosgeral.length)]
matheuzinho = Math.floor(Math.random()*100)
if(Number(matheuzinho) > 30) {
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CD = alegalo.degalo
alegalo.vida = Number(VD) - 1
alegalo.degalo = Number(CD) + 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `Seu galo perdeu a briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)}`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `O galo inimigo matou o seu galo na briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)} ${Number(galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length) > 1 ? `\nFelizmente, você ainda possui ${galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length}` : ``}`
}
JH = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg
JH2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
JH3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg = Number(JH) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(JH2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(JH3) - 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigatxt)
//ganhar
} else {
//vida > 0
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CV = alegalo.vigalo
alegalo.vida = Number(VD) - 1
alegalo.vigalo = Number(CV) + 1
if(Number(alegalo.degalo) > 0) {
NN = alegalo.degalo
alegalo.degalo = Number(NN) + 1
}
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = `Seu galo venceu a briga!🐓 Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = ` Seu galo venceu a briga!🐓 Mas foi sequestrado e morto no caminho... Felizmente, você levou o dinheiro.\n• Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
}
KL = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg
KL2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
KL3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg
KL4 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg = Number(KL) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(KL2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg = Number(KL3) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(KL4) - 1
fs.writeFileSync("./database/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(args[0])
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigawin)
}
}
} else {
reply(`Você não possui galos! 🐓😿`)
}
break

case 'cassino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
horacass = moment.tz('America/Sao_Paulo').format('HH')
diacass = moment.tz('America/Sao_Paulo').format('DD')
mmcass = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(sabrpg[AB].limiteC) === 0 && Number(sabrpg[AB].horaC) === Number(horacass)) return reply(`*Você já apostou muito hoje...* Suas chances estão esgotadas! Por favor, volte mais tarde! 😔😭`)
HC = Number(sabrpg[AB].horaC) + 1
//acabou o limite...
if(Number(horacass) > Number(sabrpg[AB].horaC) && Number(sabrpg[AB].diaC) === Number(diacass) && Number(sabrpg[AB].mC) === Number(mmcass)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`😝🤪 Mas já mlk? Bora apostar então, eu ainda vou sugar muito teu dinheiro!`)
}
//passar do dia pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(diacass) > Number(sabrpg[AB].diaC)) {
sabrpg[AB].limiteC = 20
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`💰🌟 ${tempo} caro jogador, como está a sua sorte hj?`)
}
//passar do mês pro outro...
if(Number(sabrpg[AB].limiteC) === 0 && Number(mmcass) > Number(sabrpg[AB].mC)) {
sabrpg[AB].limiteC = 30
sabrpg[AB].horaC = horacass
sabrpg[AB].diaC = diacass
sabrpg[AB].mC = mmcass
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`📆🗣 Primeira aposta do mês? Eu ainda vou sugar muito teu dinheiro todo...`)
}
if(Number(sabrpg[AB].limiteC) > 0) {
if(!q) {
return reply(`Você deve escolher uma quantia para apostar... Ex: ${prefix+command} 100 _(você estará apostando R$ 100.00)_`)
}
if(Number(args[0]) < 10) return reply(`Não é possível apostar menos que R$ 10.00`)
if(Number(args[0]) > 20000) return reply(`Não é possível apostar mais que R$ 20000.00! 😿`)
if(!Number(args[0])) return reply(`*${args[0]}* não é número! 😿`)
frutasC = JSON.parse(fs.readFileSync("./arquivos/json/slots.json"));
resulC = `${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]}`
if(resulC == `🦴 : 🦴 : 🦴`) {
CC = Number(sabrpg[AB].limiteC) - 1
sabrpg[AB].money = 50
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`• *[${resulC}]* - Óia a bruxa passando... Todo o dinheiro da sua conta agora é dela!`)
}
if(resulC == `🍫 : 🍫 : 🍫`){cmrpg = 1000};
if(resulC == `🍔 : 🍔 : 🍔`){cmrpg = 600};
if(resulC == `🥩 : 🥩 : 🥩`){cmrpg = 400};
if(resulC == `🍕 : 🍕 : 🍕`){cmrpg = 250};
if(resulC == `🌶️ : 🌶️ : 🌶️`){cmrpg = 200};
if(resulC == `🍪 : 🍪 : 🍪`){cmrpg = 100};
if(resulC == `🍗 : 🍗 : 🍗`){cmrpg = 80};
if(resulC == `🌭 : 🌭 : 🌭`){cmrpg = 70};
if(resulC == `🥞 : 🥞 : 🥞`){cmrpg = 60};
if(resulC == `🥓 : 🥓 : 🥓`){cmrpg = 50};
if((resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`)){cmrpg = 40};
if((resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)){cmrpg = 30}
if((resulC == `🍫 : 🍫 : 🍫`) || (resulC == `🍔 : 🍔 : 🍔`) || (resulC == `🥩 : 🥩 : 🥩`) || (resulC == `🍕 : 🍕 : 🍕`) || (resulC == `🌶️ : 🌶️ : 🌶️`) || (resulC == `🍪 : 🍪 : 🍪`) || (resulC == `🍗 : 🍗 : 🍗`) || (resulC == `🌭 : 🌭 : 🌭`) || (resulC == `🥞 : 🥞 : 🥞`) || (resulC == `🥓 : 🥓 : 🥓`) || (resulC == `🧇 : 🧇 : 🧇`) || (resulC == `🍞 : 🍞 : 🍞`) || (resulC == `🥐 : 🥐 : 🥐`) || (resulC == `🥥 : 🥥 : 🥥`) || (resulC == `🍎 : 🍎 : 🍎`) || (resulC == `🍌 : 🍌 : 🍌`) || (resulC == `🍓 : 🍓 : 🍓`) || (resulC == `🍐 : 🍐 : 🍐`) || (resulC == `🍊 : 🍊 : 🍊`) || (resulC == `🍋 : 🍋 : 🍋`) || (resulC == `🍉 : 🍉 : 🍉`) || (resulC == `🍇 : 🍇 : 🍇`) || (resulC == `🍒 : 🍒 : 🍒`) || (resulC == `🍑 : 🍑 : 🍑`) || (resulC == `🥭 : 🥭 : 🥭`) || (resulC == `🍍 : 🍍 : 🍍`) || (resulC == `🥝 : 🥝 : 🥝`) || (resulC == `🍅 : 🍅 : 🍅`) || (resulC == `🥑 : 🥑 : 🥑`) || (resulC == `🌽 : 🌽 : 🌽`) || (resulC == `🥕 : 🥕 : 🥕`)) {
var Vitória = "Você acaba de ganhar"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var TT = Number(args[0]) * Number(cmrpg)
var TC = Number(TT) + Number(args[0])
var VT = Number(MR) + Number(TC) * 5
var Ctxt = `R$ ${Number(TC).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
} else {
var Vitória = "Você perdeu! Como punição, você perderá"
var CC = Number(sabrpg[AB].limiteC) - 1
var MR = sabrpg[AB].money
var VT = Number(MR) - Number(args[0])
var Ctxt = `R$ ${Number(args[0]).toFixed(2)}`
sabrpg[AB].money = VT
sabrpg[AB].limiteC = CC
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}
const cassino = `• *[${resulC}]* - ${Vitória} ${Ctxt}` 
reply(cassino)
}
break

case 'dadoapostado':
setTimeout(() => {reagir(from, "🎲")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
var [d1, d2] = q.split('/')
if(!d1) return reply(`Digite o valor do dado que você acha que irá cair... Após isso, coloque uma (/) ao lado e coloque uma quantia a ser apostada.\n–\nEx: ${prefix+command} 5/25 _(você estará apostando R$ 25.00 no dado 5)_`)
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d1)) return reply(`${d1} não é número!`)
if(!Number(d2)) return reply(`${d2} não é número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
if(Number(d1) < 1 || Number(d1) > 6) return reply(`Este número no dado não existe...`)
reply(`Sorteando dado(s)!`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/data/media/sticker/dados/${dadoale}.webp`)
if(Number(dadoale) === Number(d1)) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a previsão do dado.`)
}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a previsão do dado.`)
}, 5000)
}
break

case 'caracoroa': //BY : Lucas🌩 
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) return reply(mess.warningMB(prefix))
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
var [d1, d2] = q.split('/')
if(Number(d2) > 1000) return reply("Tbm não pode passar de 1000 né meu camarada kkk")
if(d1.length == 0) return reply(`Digite o lado que a moeda que você acha que irá cair, ou seja, cara ou coroa... Após isso, coloque uma (/) ao lado e coloque a quantia que você deseja apostar, por exemplo: 1.\n–\n• Ex: ${prefix+command} cara/25 _(você estará apostando R$25.00 na posição do lado da cara da moeda)_`);
if(d1.toLowerCase() != "cara" && d1.toLowerCase() != "coroa") return reply("Só pode cara ou coroa.")
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d2)) return reply(`${d2} não é um número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
reply(`Sorteando... Aguarde, daqui a pouco o resultado sai!`)
ladosDaMoeda = ["coroa", "cara"];
pegarInfo = ladosDaMoeda[Math.floor(Math.random() * ladosDaMoeda.length)];
enviarfigu(`./database/data/media/sticker/caracoroa/${pegarInfo}.webp`)
if(pegarInfo === d1) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BC = sabrpg.map(i => i.id).indexOf(sender)
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
setTimeout(() => {
BD = sabrpg.map(i => i.id).indexOf(sender)
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)}, 5000)
}
break

case 'lojas_sc':
case 'lojas':
mention(`${tempo} *@${sender.split("@")[0]}*, bem vindo a minha loja de RPG!\n—–\n❱❱ Lojas de Cavalos: *${prefix}lojadecavalos*\n❱❱ Lojas de Galos: *${prefix}lojadegalos*\n—–\n🛍️ *Produtos:*\n*1.* Comprar Segurança *[R$ 600.00]*\n❑→ ${prefix}comprarsegurança 1 | Você consegue *40% de proteção*!\n*2.* Comprar Segurança *[R$ 1200.00]*\n❑→ ${prefix}comprarsegurança 2 | Você consegue *60% de proteção*!\n*3.* Comprar Segurança *[R$ 1800.00]*\n❑→ ${prefix}comprarsegurança 3 | Você consegue *80% de proteção*!`)
break

case 'lojadecavalos':
setTimeout(() => {reagir(from, "🐎")}, 300)
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
uparcavalo = `R$ ${Number(Number(cavalosrpg[AC].level)*200).toFixed(2)}`
} else {
uparcavalo = `Lv. Máx`
}
} else {
uparcavalo = `R$ 200.00`
}
txt = `${tempo} *@${sender.split("@")[0]}*, Seja bem vindo(a) à loja de cavalos:\n—\n❱❱ ${prefix}comprarestabulo *[R$ 500.00]* - De início é necessário você comprar.\n❱❱ ${prefix}upcavalo - Faça um upload em seu(s) cavalo(s). *[${uparcavalo}]*\n—\n🐎 *Comprar Cavalos:*\n❱❱ ${prefix}comprarcavalo 1 *[R$ 500.00]*\n❱❱ ${prefix}comprarcavalo 2 *[R$ 1000.00]*\n❱❱ ${prefix}comprarcavalo 3 *[R$ 1500.00]*\n❱❱ ${prefix}comprarcavalo 4 *[R$ 2000.00]*\n—\n🌾 *Equipamentos:*\n❱❱ ${prefix}comprarsela *[R$ 200.00]* - Compre uma sela para o seu cavalo.\n❱❱ ${prefix}cdcv3 *[R$ 200.00]* - Verifique o status atual de seu alazão.\n❱❱ ${prefix}atadura *[R$ 250.00]* - Caso tenha alguma fratura em alazão.\n—\n🏪 *Vendas:*\n❱❱ Para vender seu alazão, use o comando ao lado: *${prefix}vendercavalo*\n❱❱ Para vender seu estábulo, use o comando ao lado: *${prefix}venderestabulo*`
mention(txt)
break

case 'lojadegalos':
setTimeout(() => {reagir(from, "🐔")}, 300)
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].level) < 6) {
LV = `R$ ${Number(galosrpg[AD].level) * 100}.00`
} else {
LV = `Lv. Máx`
}
PC = LV
} else {
PC = `R$ 100.00`
}
txt = `*${tempo}* @${sender.split('@')[0]}, Seja bem vindo(a) à loja de galos:\n🐓🏷 *Loja de Galos:*\n❱❱ ${prefix}comprargalinheiro *[R$ 500.00]*\n❱❱ ${prefix}comprargalo 1 *[R$ 100.00]*\n❱❱ ${prefix}comprargalo 6 *[R$ 550.00]*\n❱❱ ${prefix}comprargalo 12 *R$ 1000.00]*\n❱❱ ${prefix}comprargalinha *[R$ 100.00]*\n❱❱ ${prefix}upgalo *[${PC}]*\n––\n🐓🏷 *Vendas:*\n❱❱ Venda de Galos: *${prefix}vendergalo (quantidade)*\n❱❱ Venda de Galinhas: *${prefix}vendergalinha (quantidade)*`
mention(txt)
break

case 'cdcv3':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].dor == false) return reply(`Seu cavalo não está doente...`)
if(Number(sabrpg[AB].money) < 100) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].dor = false
fs.writeFileSync("./database/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 100
fs.writeFileSync("./database/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu cavalo recebeu uma injeção poderosa, e está pronto para correr dnv... 🐴`)
break


case 'x9visuunica':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (isX9VisuUnica) {
dataGp[0].visuUnica = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de revelar visu única neste grupo✔️')
} else {
dataGp[0].visuUnica = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de revelar visu única neste grupo 📝')
}
break

case 'so_adm':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (So_Adm) {
dataGp[0].soadm = false
setGp(dataGp)
reply('‼️ Desativou o recurso de Só ADM utilizar comandos neste grupo ✔️')
} else {
dataGp[0].soadm = true
setGp(dataGp)
reply(' - Ativou com sucesso o recurso de só adm utilizar comandos neste grupo 📝')
}
break

case 'odelete':
if (!isGroup) return reply(Res_SoGrupo)
if (!SoDono) return reply(Res_SoDono)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (IS_DELETE) {
nescessario.Odelete = false
setNes(nescessario)
reply('‼️ Desativou com sucesso o recurso de delete nos grupos ✔️')
} else {
nescessario.Odelete = true
setNes(nescessario)
reply('🌀 Ativou com sucesso o recurso de delete nos grupos 📝')
}
break

case 'antifake':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins) return reply(Res_SoAdm)
if (!isBotGroupAdmins) return reply(Res_BotADM)
if (isAntifake) {
dataGp[0].antifake = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
dataGp[0].antifake = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
}
break

case 'prefixos':
if(!isGroup) return reply(Res_SoGrupo)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName}\n\n`
for ( i of dataGp[0].prefixos) {
bla += `Prefixo: ${i}\n\n`
}
reply(bla)
break

case 'add_prefixo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} Adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de multi prefixos neste grupo 📝')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de multi prefixos neste grupo✔️')
}
break

case 'antigolpe': case 'antigolpes':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAntigolpes) {
dataGp[0].antinotas = false;
setGp(dataGp);
reply('Desativou com sucesso o recurso de anti golpe neste grupo ✔️');
} else {
dataGp[0].antinotas = true;
setGp(dataGp);
reply('Ativou com sucesso o recurso de anti golpe neste grupo ✔️');
}
break;

case 'antinotas': case 'antinota':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAntiNotas) {
dataGp[0].antinotas = false;
setGp(dataGp);
reply('Desativou com sucesso o recurso de anti notas neste grupo ✔️');
} else {
dataGp[0].antinotas = true;
setGp(dataGp);
reply('Ativou com sucesso o recurso de anti notas neste grupo ✔️');
}
break;

case 'anticatalogo':
case 'anticatalg':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAnticatalogo) {
dataGp[0].anticatalogo = false;
setGp(dataGp);
lreply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo ✔️');
} else {
dataGp[0].anticatalogo = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝');
}
break;

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!SoDono) return reply(Res_SoDono);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isWelkom) {
dataGp[0].wellcome[0].bemvindo1 = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de bem-vindo neste grupo ✔️');
} else {
dataGp[0].wellcome[0].bemvindo1 = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de bem-vindo neste grupo 📝');
}
break;

case 'bemvindo2':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!SoDono) return reply(Res_SoDono);
if (isWelkom2) {
dataGp[0].wellcome[1].bemvindo2 = false;
setGp(dataGp);
reply('❌ O recurso foi desativado ❌');
} else {
dataGp[0].wellcome[1].bemvindo2 = true;
setGp(dataGp);
reply('✅ O recurso foi ativado ✅');
}
break;

case 'legendabv':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo`
)
}
break

case 'legendabv2':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de Documento definida com sucesso!*')
break

case 'token_gpt':
if(!SoDono) return reply(Res_SoDono);
if(TOKEN_GPT.includes(q.trim())) return reply("Este token ja está armazenado..")
nescessario.TOKEN_GPT.push(q.trim())
TOKEN_GPT = nescessario.TOKEN_GPT
RND_TOKEN_GPT = q.trim()
setNes(nescessario)
reply("Token registrado com sucesso para o Chat Gpt, bom uso amigo(a)..")
break;

case "crimg": case "superimg": case "imgcr": 
if(TOKEN_GPT?.length == 0 || TOKEN_GPT[0]?.length <= 4) return mention(`Olá @${numerodono_ofc} tá faltando o
token do gpt, vai no site: https://platform.openai.com/account/api-keys gera a
key, ou manda mais pessoas criar.. e usa o comando ${prefix}token_gpt e o token
aqui, boa sorte..`)
try {
reply("Realizando pedido..");
archivus.sendMessage(from, {image: {url:`https://api.bronxyshost.com.br/api-bronxys/CRIAR_IMG_DA_SUA_IDEIA?q=${q.trim()}&TOKEN_GPT=${RND_TOKEN_GPT.replace(" ", "")}&apikey=${API_KEY_ALEATORY}`}}, {quoted: seloMetaTokyo}).catch(() => {return reply("Erro..")});
} catch {
return reply("Erro..");
}
break;

case 'pergunta': case 'openai': case 'gpt': case 'chatgpt':
if(TOKEN_GPT?.length == 0 || TOKEN_GPT[0]?.length <= 4) return mention(`Olá @${numerodono_ofc} tá faltando o
token do gpt, vai no site: https://platform.openai.com/account/api-keys gera a
key, ou manda mais pessoas criar.. e usa o comando ${prefix}token_gpt e o token
aqui, boa sorte..`)
try {
reply("Aguarde, criando / pesquisando sobre o que esta perguntando ou pedindo.");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/PERGUNTE_E_EU_RESPONDO?q=${q.trim()}&TOKEN_GPT=${RND_TOKEN_GPT.replace(" ", "")}&apikey=${API_KEY_ALEATORY}`)
reply(`( ${ABC.msg} )`)
} catch { 
reply("Erro..")
}
break;

case 'simi':
if(!isGroup) return reply(Res_SoGrupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if (!isGroupAdmins) return reply(Res_SoAdm);
if (isSimi) {
dataGp[0].simi1 = false;
setGp(dataGp);
reply('Desativado o modo simi com sucesso neste grupo 😡️');
} else {
dataGp[0].simi1 = true;
setGp(dataGp);
reply('Ativado com sucesso o modo simi neste grupo 😗..');
}
break;

case 'simih2':
if (!isGroupAdmins) return reply(Res_SoAdm);
if (isSimi2) {
dataGp[0].simi2 = false;
setGp(dataGp);
reply('Desativado o modo simi 2 com sucesso neste grupo 😡️');
} else {
dataGp[0].simi2 = true;
setGp(dataGp);
reply('Ativado com sucesso o modo simi 2 neste grupo 😗..');
}
break;

case 'autofigu':
case 'autosticker':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAutofigu) {
dataGp[0].autosticker = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo ✔️');
} else {
dataGp[0].autosticker = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝');
}
break;

case 'autorepo':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isAutorepo) {
dataGp[0].autoresposta = false;
setGp(dataGp);
reply('‼️ Desativou com sucesso o recurso de auto resposta neste grupo ✔️');
} else {
dataGp[0].autoresposta = true;
setGp(dataGp);
reply('🌀 Ativou com sucesso o recurso de auto resposta neste grupo 📝');
}
break;

case 'modobrincadeira':
case 'modobrincadeiras':  
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (isModobn) {
dataGp[0].jogos = false;
setGp(dataGp);
reply('🎯 Desativou com sucesso o recurso de Modo brincadeira neste grupo 🪀');
} else {
dataGp[0].jogos = true;
setGp(dataGp);
reply('🎯 Ativou com sucesso o recurso de Modo brincadeira neste grupo 🪀');
}
break;

case 'patente':
case 'level':
if(!isGroup) return reply(Res_SoGrupo)
resul = `     
Olá Usuário -> @${sender.split("@")[0]}\n\n★彡[ ${tempo} ]彡★ Aqui está suas informações: 

- Patente : ${patente} 

- Level* : ${level_up}

- Grupo: ${groupName}`
archivus.sendMessage(from, {text: resul, mentions: [sender]}, {quoted: seloMetaTokyo})
break

case 'leveling':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (isLevelingOn) {
dataGp[0].level = false;
setGp(dataGp);
reply('O recurso de nível foi desativado com sucesso.');
} else {
dataGp[0].level = true;
setGp(dataGp);
reply('O recurso de nível foi ativado com sucesso.');
}
break;

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(Res_SoDono)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo ja está banido`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break


//NOVOS COMANDOS +18
case 'amador':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 41) + 1
 wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/AmadorVideo/${numb}.mp4`}
 mag = '🔞AmadorVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'onlyfans':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 47) + 1
 wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/OnlyfansVideo/%20${numb}.mp4`}
 mag = '🔞OnlyfansVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'porno':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 15) + 1
 wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/PornoVideo/${numb}.mp4`}
 mag = '🔞PornoVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'egrilvideo':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 14) + 1
 wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/EgrilVideo/%20${numb}.mp4`}
 mag = '🔞EgrilVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'aline':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 65) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/%20${numb}.jpg`}
mag = '🔞AlineFaria🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'alifox':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 59) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFox/%20${numb}.jpg`}
 mag = '🔞AlineFox🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'alycai':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 28) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlyciaRibeiro/%20${numb}.jpg`}
 mag = '🔞AlyciaRibeiro🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'amichan':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 29) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Amiichan/%20${numb}.jpg`}
 mag = '🔞Amiichan🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'aninha':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 30) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AninhaLopes/%20${numb}.jpg`}
 mag = '🔞AninhaLopes🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'baby':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 36) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BabyMatoso/%20${numb}.jpg`}
 mag = '🔞BabyMatoso🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'belle':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 31) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BelleDelphine/%20${numb}.jpg`}
 mag = '🔞BelleDelphine🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'brenda':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 25) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BrendaTrindade/%20${numb}.jpg`}
 mag = '🔞BrendaTrindade🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'cami':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 30) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/CamiBrito/%20${numb}.jpg`}
 mag = '🔞CamiBrito🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'clowniac':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 29) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Cclowniac/%20${numb}.jpg`}
 mag = '🔞Cclowniac🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'galvao':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 32) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/FehGalvao/%20${numb}.jpg`}
 mag = '🔞FehGalvao🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'giovanna':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 34) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/GiovannaCampomar/%20${numb}.jpg`}
 mag = '🔞GiovannaCampomar🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'isadora':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 30) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${numb}.jpg`}
 mag = '🔞ISADORA MARTINEZ🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'isa':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 21) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${numb}.jpg`}
 mag = '🔞IsaWaifu🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'lay':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 25) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${numb}.jpg`}
 mag = '🔞LayNuniz🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'leticia':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 28) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LeticiaShirayuki/%20${numb}.jpeg`}
 mag = '🔞LeticiaShirayuki🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'maru':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 40) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg`}
 mag = '🔞MaruKarv🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'princesa':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 32) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${numb}.jpg`}
 mag = '🔞McPrincesa🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'meadinha':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 33) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Me1adinha/%20${numb}.jpg`}
 mag = '🔞Me1adinha🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'nath':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 23) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NathBister%C3%A7o/%20${numb}.jpg`}
 mag = '🔞NathBister🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'nega':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 21) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/pacgaBarbie/%20${numb}.jpg`}
 mag = '🔞gaBarbie🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'polonesa':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 28) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PolonesaDoHype/%20${numb}.jpg`}
 mag = '🔞PolonesaDoHype🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'pornofot':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 44) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoFoto/%20${numb}.jpg`}
 mag = '🔞PornoFoto🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'rute':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 30) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/RuteRocha/%20${numb}.jpg`}
 mag = '🔞RuteRocha🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'vita':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
numb = Math.floor(Math.random() * 30) + 1
wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg`}
mag = '🔞VitaCelestine🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'carnie':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
 await iniciandoDown();
reagir(from, "😈")
reply(`Enviando`)
numb = Math.floor(Math.random() * 29) + 1
wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg`}
mag = '🔞carniello🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'egril':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
numb = Math.floor(Math.random() * 36) + 1
wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${numb}.jpg`}
mag = '🔞egril🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

case 'neter':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
numb = Math.floor(Math.random() * 30) + 1
wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg`}
mag = '🔞netersg🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break

// hentai 
case 'loli':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { loli } = require('./database/nsfw/animes.js')
var totalnsfw = loli[Math.floor(Math.random() * archivus.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'trap':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { trap } = require('./database/nsfw/animes.js')
var totalnsfw = trap[Math.floor(Math.random() * trap.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'ass':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ass } = require("./database/nsfw/nsfw.js")
var totalnsfw = ass[Math.floor(Math.random()*ass.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'ahegao':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ahegao } = require("./database/nsfw/nsfw.js")
var totalnsfw = ahegao[Math.floor(Math.random()*ahegao.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'bdsm':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { bdsm } = require("./database/nsfw/nsfw.js")
var totalnsfw = bdsm[Math.floor(Math.random()*bdsm.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'blowjob':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { blowjob } = require("./database/nsfw/nsfw.js")
var totalnsfw = blowjob[Math.floor(Math.random()*blowjob.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'cuckold':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { cuckold } = require("./database/nsfw/nsfw.js")
var totalnsfw = cuckold[Math.floor(Math.random()*cuckold.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'cum':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { cum } = require("./database/nsfw/nsfw.js")
var totalnsfw = cum[Math.floor(Math.random()*cum.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'ero':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ero } = require("./database/nsfw/nsfw.js")
var totalnsfw = ero[Math.floor(Math.random()*ero.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'femdom':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { femdom } = require("./database/nsfw/nsfw.js")
var totalnsfw = femdom[Math.floor(Math.random()*femdom.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'foot':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { foot } = require("./database/nsfw/nsfw.js")
var totalnsfw = foot[Math.floor(Math.random()*foot.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'gangbang':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { gangbang } = require("./database/nsfw/nsfw.js")
var totalnsfw = gangbang[Math.floor(Math.random()*gangbang.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'ganbganb':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { ganbganb } = require('./database/nsfw/animes.js')
var totalnsfw = ganbganb[Math.floor(Math.random() * ganbganb.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'glasses':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { glasses } = require("./database/nsfw/nsfw.js")
var totalnsfw = glasses[Math.floor(Math.random()*glasses.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'hentai':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { hentai } = require("./database/nsfw/nsfw.js")
var totalnsfw = hentai[Math.floor(Math.random()*hentai.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'hentai2':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { hentai2 } = require('./database/nsfw/animes.js')
var totalnsfw = hentai2[Math.floor(Math.random() * hentai2.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'nekos': {
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { neko2 } = require('./database/nsfw/animes.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
}
break

case 'neko2': {
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { neko2 } = require('./database/nsfw/hentai.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
}
break

case 'jahy':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { jahy } = require("./database/nsfw/nsfw.js")
var totalnsfw = jahy[Math.floor(Math.random()*jahy.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'masturbation':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { masturbation } = require("./database/nsfw/nsfw.js")
var totalnsfw = masturbation[Math.floor(Math.random()*masturbation.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'orgy':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { orgy } = require("./database/nsfw/nsfw.js")
var totalnsfw = orgy[Math.floor(Math.random()*orgy.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'panties':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { panties } = require("./database/nsfw/nsfw.js")
var totalnsfw = panties[Math.floor(Math.random()*panties.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'pussy':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { pussy } = require("./database/nsfw/nsfw.js")
var totalnsfw = pussy[Math.floor(Math.random()*pussy.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'boobs':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { boobs } = require("./database/nsfw/nsfw.js")
var totalnsfw = boobs[Math.floor(Math.random()*boobs.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'tentacles':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { tentacles } = require("./database/nsfw/nsfw.js")
var totalnsfw = tentacles[Math.floor(Math.random()*tentacles.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'thighs':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { thighs } = require("./database/nsfw/nsfw.js")
var totalnsfw = thighs[Math.floor(Math.random()*thighs.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'yuri':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { yuri } = require("./database/nsfw/nsfw.js")
var totalnsfw = yuri[Math.floor(Math.random()*yuri.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'zettai':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { zettai } = require("./database/nsfw/nsfw.js")
var totalnsfw = zettai[Math.floor(Math.random()*zettai.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

case 'kasedaiki':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`)
const { kasedaiki } = require("./database/nsfw/nsfw.js")
var totalnsfw = kasedaiki[Math.floor(Math.random()*kasedaiki.length)]
archivus.sendMessage(from, {image: {url: totalnsfw}, caption: `Aqui está ${pushname}`}, {quoted: selo})
break

// fim dos hentai 
        
// plaquinhas 

case 'plaq': 
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq1':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq2':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq3':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq4':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq5':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${q}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${q}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq6':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${q}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq7':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${q}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq8':
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${q}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

case 'plaq9': 
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`)
sendMsg = archivus.sendMessage(from, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora no chat... 😈🔥`)
break

// fim

case 'marina':{
if(!SoDono) return reply(`⚠️ Este comando está temporariamente desativado para atualização. Agradecemos pela sua compreensão e em breve estará disponível novamente.`)
reagir(from, "😈")
reply(`Enviando`)
 numb = Math.floor(Math.random() * 27) + 1
 wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${numb}.jpg`}
 mag = '🔞MarinaMui🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await archivus.sendMessage(from, buttonMessage, {quoted: selo})
}
break


case 'boton':
case 'botoff':
if (!SoDono) return reply(Res_SoDono);
if (command === 'botoff') {
if (isBotoff) {
return reply('⚠️ O bot já está desativado! As funções e comandos para membros estão suspensos.');
} else {
nescessario.botoff = true;
setNes(nescessario);
reply('⚠️ Bot desativado! As funções e comandos para membros foram suspensas com sucesso.');
}
} else if (command === 'boton') {
if (!isBotoff) {
return reply('✅ O bot já está ativado! Todas as funcionalidades estão habilitadas.');
} else {
nescessario.botoff = false;
setNes(nescessario);
reply('✅ Bot reativado! Todas as funcionalidades estão habilitadas novamente.');
}
}
break;

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(isNsfw) {
dataGp[0].nsfw = false
setGp(dataGp)
reply(`\`\`\`✓ Modo NSFW +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
dataGp[0].nsfw = true
setGp(dataGp)
reply(`\`\`\`✓ Modo NSFW +18 ativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(isPalavrao) {
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('‼️ O recurso de Anti Palavras hardcore foi desativado com sucesso neste grupo ✔️')
} else {
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('🌀 O recurso de Anti Palavras hardcore foi ativado com sucesso neste grupo 📝')
}
break

case 'addpalavra':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal : ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(isAntiFlood) {
dataGp[0].limitec.active = false
setGp(dataGp)
reply('✔️ O recurso limite de caracteres foi desativado nesse grupo 📝')
} else {
dataGp[0].limitec.active = true
setGp(dataGp)
reply('✔️ O recurso limite de caracteres foi ativado nesse grupo 📝')
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(Res_SoDono)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(Res_SoGrupo())
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoAdm()) // │➱ Anti Spam: ${isAntiSpam ?  '✓ - Função ativa.' : '✕ - Não ativada.'}
reply(`🌟 *Status das Funcionalidades do Bot* 🌟

🔒 *Proteções Ativadas*:
- *Anti Ligação*: ${isAnticall ? '✅ Ativada' : '❌ Não ativada'}
- *Anti PV Block*: ${isAntiPv ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Imagem*: ${isAntiImg ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Vídeo*: ${isAntiVid ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Áudio*: ${isAntiAudio ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Sticker*: ${isAntiSticker ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Documento*: ${Antidoc ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Contato*: ${isAntiCtt ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Localização*: ${Antiloc ? '✅ Ativada' : '❌ Não ativada'}

- *Anti Caracteres*: ${isAntiFlood ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Golpe*: ${isAntigolpes ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Notas*: ${isAntiNotas ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Catálogo*: ${isAnticatalogo ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Link Grupo*: ${isAntilinkgp ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Fake*: ${isAntifake ? '✅ Ativada' : '❌ Não ativada'}
- *Anti Palavrão*: ${isPalavrao ? '✅ Ativada' : '❌ Não ativada'}
- *Limite de Caracteres*: ${isAntiFlood ? '✅ Ativada' : '❌ Não ativada'}

🎉 *Boas-Vindas e Diversão*:
- *Bem Vindo 1*: ${isWelkom ? '✅ Ativada' : '❌ Não ativada'}
- *Simi 1*: ${isSimi ? '✅ Ativada' : '❌ Não ativada'}
- *Auto Resposta*: ${isAutorepo ? '✅ Ativada' : '❌ Não ativada'}
- *Modo Brincadeira*: ${isModobn ? '✅ Ativada' : '❌ Não ativada'}
- *Níveis de Participação*: ${isLevelingOn ? '✅ Ativada' : '❌ Não ativada'}

> 🤖 *Bot*: *${NomeDoBot}*`)
break

case 'reiniciar': case 'rr': case 'r': {//adapted by math
if(!SoDono) return
var carregar = [
`[ ❗ ] Reiniciando meus sistemas em 5️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 4️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 3️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 2️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 1️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 0️⃣`,
`~_*©Bot: ${NomeDoBot}*_~`
]
let { key } = await archivus.sendMessage(from, {text: tempo+" "+pushname}, {quoted: seloMetaTokyo})//primeira mensagem
await sleep (1000)
for(let i = 0; i < carregar.length; i++) {
await sleep (1000)
await archivus.sendMessage(from, {text: carregar[i], edit: key }, {quoted: seloMetaTokyo})
}
await sleep(1000)
process.exit()
}
break

case 'jogo1':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *DragonBall Z - Dokkan:* https://www.mediafire.com/file/015ibjiljfkv7uo/Dokkan_v4_12_1_MOD.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo2':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SanAndreas:* https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file
> Bot: ${NomeDoBot}`)
break
case 'jogo3':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SA - Legendado em Português:* http://www.mediafire.com/file/7op13aup1ll7m9y/GTA_SA_COM_TRADU%25C3%2587%25C3%2583O_PT-BR.zip/file
> Bot: ${NomeDoBot}`)
break
case 'jogo4':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SA com Mod Cleo:* http://www.mediafire.com/file/d8cfwzctx95x0dx/GTA_SA_v2.00_Mod_Cleo.zip/file
> Bot: ${NomeDoBot}`)
break
case 'jogo5':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SA Online:* https://www.mediafire.com/file/0xccd5m0zwqstag/GTA_SA_ONLINE_SAMP_ByHT.zip/file
> Bot: ${NomeDoBot}`)

break
case 'jogo6':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *GTA SuperLite + Mod Cleo:* http://www.mediafire.com/file/wdkg8pmndtihil3/GTA_SA_super_lite_mod_cleo_ByHT.zip/file
> Bot: ${NomeDoBot}`)
break
case 'jogo7':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *LastDay on Eart Survival:* https://www.mediafire.com/file/k4pr6awvr5eb1ak/Last%20Day%20on%20Earth%201.17.7-mod.apk/file 
> Bot: ${NomeDoBot}`)
break
case 'jogo8':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Bomber Friends MOD:* https://www.mediafire.com/file/dir8pwrb1mpm57w/Bomber_Friends_v4.10_MOD.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo9':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Arcade Hunter:* https://www.mediafire.com/file/ugcdaclnpodtxxs/Arcade_Hunter-Sword%252CGun%252C_and_Magic_1.11.0-mod.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo10':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Defesa de Zombie Ocioso:* https://www.mediafire.com/file/8422sjofw1cdnka/Zombie+Idle+Defense+1.5.79.229MOD-t.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo11':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Pac-Man:* https://www.mediafire.com/file/gxwy01ni99pcur2/PAC-MAN+9.2.7.10150MOD-t.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Car Driving School Simulator - APK:* https://www.mediafire.com/file/r6aps8mn6wqoabj/Car+Driving+School+Simulator+3.1.0.283MOD-t.apk/file
🎳 _Obrigatório instalar o OBB:_
 https://www.mediafire.com/file/hcsb5tpr7byh8fg/com.boombitgames.DrivingSchoolParking.zip/file
> Bot: ${NomeDoBot}`)
break
case 'jogo12':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Cyber Fighters Premium:* https://www.mediafire.com/file/4tmv2cdahvqamlx/Cyber+Fighters+Premium+1.11.35.68MOD-t.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo13':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳️ *Drag Racing:* https://www.mediafire.com/file/g88v399ks1fpnfq/drag-racing-mod_2.0.37.rar/file
> Bot: ${NomeDoBot}`)
break
case 'jogo14':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Mr. Brow:* https://www.mediafire.com/file/i0ii099sejk9fnk/Mr+Bow+4.15.75MOD-t.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo15':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Airport City:* https://www.mediafire.com/file/vuupmpp3r03lso0/Airport+City+8.7.18.101418MOD-t.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo16':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Crash Bandicoot:* https://www.mediafire.com/file/nyx8rjqn5m51o3r/Crash+Bandicoot+Mobile+v0.7.6242+Mod.apk/file 
> Bot: ${NomeDoBot}`)
break
case 'jogo17':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Real Steel World Robot Boxing (APK+OBB):* https://www.mediafire.com/file/zcnsxb55mldn51e/Real+Steel+World+Robot+Boxing+v54.54.126+Mod.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo18':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Anger of Sticker:* https://www.mediafire.com/file/zfmqmszkhbgoem2/anger-of-stick-5-mod_1.1.39.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo19':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Angry Birds 2 (APK+OBB)*
https://www.mediafire.com/file/uwnurszwrdbv5ge/angrybirds2-2481.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo20':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳️ *Especial Force Group 2 (CS):* https://www.mediafire.com/file/uwf5cq9u8tjg44x/specialforcesgroup2-421.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo21':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳️ *Roblox:* https://apkadmin.com/k05ck2q6ioo1/ROBLOX_v2.459.415955_MOD_MENU.apk.html
> Bot: ${NomeDoBot}`)
break
case 'jogo22':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Critical Striker:* https://www.mediafire.com/file/7yqmk1gn4wrieri/CRITICAL_STRIKE.zip/file
> Bot: ${NomeDoBot}`)
break
case 'jogo23':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Dream League Soccer:* http://www.mediafire.com/file/yuw9n5d4phzz5wg/Dream_League_Soccer_2019_v6.13-mod.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo24':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Clash of Clans:* http://www.mediafire.com/file/aoaem76tyg0hvfv/Clash_Of_Clans_v13.675.6_MOD.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogo25':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Criminal Case Paris:* http://www.mediafire.com/fil...e/i5pbv8d7yjbbtly/Criminal%20Case%20Paris%20v2.36.1-mod.apk/file
> Bot: ${NomeDoBot}`)
break

case 'jogo26':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Drift Max World:* https://www.mediafire.com/file/hqui6asekutsocq/DRIFT+MAX+WORLD+DINHEIRO+INFINITO.zip/file`)
break

case 'jogo27':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Downhill Masters:* https://www.mediafire.com/file/9cdgreyc8amkto9/Downhill_Masters_v1.0.59_MOD.apk/file
> Bot: ${NomeDoBot}`)
break
case 'jogosamp':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

☕ IP DO SERVIDOR PRA JOGAR: 23.88.73.88:11627

🎳 *SA-MP:* https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launche
> Bot: ${NomeDoBot}r`)
break

case 'jogo28':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

🎳 *Monopoly:* https://www.mediafire.com/file/q5jfi61xwbqiu2x/Monopoly-v1-7-11-mod.zip/file
> Bot: ${NomeDoBot}`)
break       
//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
var [emoji, nm] = q.split("/")
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/emoji?q=${emoji}/${nm?.toLowerCase()|| "whatsapp"}&apikey=`+API_KEY_ALEATORY)
sendStickerFromUrl(from, ABC.rst)
} catch {
return reply("Erro..")
}
break

case 'emoji-mix':
case 'emojimix':
var [emj1, emj2] = q.trim().split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reply(Res_Aguarde)
sendStickerFromUrl(from, `https://api.bronxyshost.com.br/api-bronxys/emojimix?emoj=${encodeURI(emj1)}&emoj2=${encodeURI(emj2)}&apikey=${API_KEY_ALEATORY}`)
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
} else {
reply('*Ops não foi possivel fazer esse mix de emoji / Ou ocorreu algum problema no sistema..*')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(Res_Aguarde)
if(IS_sistemGold) {
setTimeout(async() => {
await ConsumirGold(2, sender)
}, 1000)
}
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
archivus.sendMessage(from, {sticker: sti}, {quoted: seloMetaTokyo})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'rbale':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(Res_Aguarde)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `Conteúdos`, `Aleatory`)
var sti = new Buffer.from(mantap, 'base64');
archivus.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `Aleatory Conteúdos`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: seloMetaTokyo})
.catch((err) => {
reply(`❎ Erro, tenta mais tarde`); 
})
break

case 'rename': case 'roubarfigu': case 'roubar': {
try {
if (!isQuotedSticker) return reply('Marque uma figurinha...')
let stickerBuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
let [pack, author2] = q.split('/');
if (!pack || !author2) {
return reply(`*Por favor escreva o formato correto: ${prefix + command} nome/doAutor*`)
}
let modifiedBuffer = await createSticker({input: stickerBuffer, pack: pack, author: author2});
if (!modifiedBuffer || modifiedBuffer.length === 0) {
return reply('Erro ao renomear a figurinha.')}
await archivus.sendMessage(from, { sticker: modifiedBuffer, contextInfo: { externalAdReply:{title: `${pack} | ${author2}`,body:"", previewType:"PHOTO",thumbnail: modifiedBuffer}} }, { quoted: info })
} catch (error) {
console.error('Erro ao renomear a figurinha:', error);
reply('Ocorreu um erro ao tentar renomear a figurinha. Verifique os detalhes.')}}
break;



case 'take': {
    try {
    if (!isQuotedSticker) return reply('Marque uma figurinha...');
        
        let stickerBuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
        let userName = info.pushName || "Sticker";
        let pack = userName;
        let author2 = `〖${date}〗`;
        let modifiedBuffer = await createSticker({ input: stickerBuffer, pack: pack, author: author2 });
    if (!modifiedBuffer || modifiedBuffer.length === 0) {
            return reply('Erro ao renomear a figurinha.');
        }

        await archivus.sendMessage(from, { 
            sticker: modifiedBuffer, 
            contextInfo: { 
                externalAdReply: {
                    title: `${pack} | ${date}`,
                    body: "",
                    previewType: "PHOTO",
                    thumbnail: modifiedBuffer
                } 
            } 
        }, { quoted: info });
    } catch (error) {
        console.error('Erro ao renomear a figurinha:', error);
        reply('Ocorreu um erro ao tentar renomear a figurinha. Verifique os detalhes.');
    }
}
break;

case 'fstiker':
case 'fsticker':
case 'f':
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
 var pack = `${pushname}`
 var author2 = `${NomeDoBot} 〖${date}〗`
reply(Res_Aguarde)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(archivus, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
 var pack = `${pushname}`
 var author2 = `${NomeDoBot} 〖${date}〗`
reply(Res_Aguarde)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(archivus, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'figu':
if(fs.existsSync(DF_TJ)) return reply("Aguarde um momento, e realize o pedido novamente, não seja tão rápido...")
var DF_TJ = "./datab/data/CVF.json"
fs.writeFileSync(DF_TJ, JSON.stringify([isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage || isQuotedVideo ?  info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage]))
var PUXJ = JSON.parse(fs.readFileSync(DF_TJ))
var DFN = PUXJ[0]
DFN.sticker = {url: DFN.url}
await delay(1200)
DLT_FL(DF_TJ)
archivus.sendMessage(from, DFN)
break

case 'st':
case 'stk':
case 'sticker':
case 's':
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 100)
}
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
 var pack = `${pushname}`
 var author2 = `${NomeDoBot} 〖${date}〗`
reply(Res_Aguarde)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(archivus, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
 var pack = `${pushname}`
 var author2 = `${NomeDoBot} 〖${date}〗`
reply(Res_Aguarde)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(archivus, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
try {
reply(Res_Aguarde)
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1500)
}
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
archivus.sendMessage(from, {image: buff}, {quoted: seloMetaTokyo}).catch(e => {
console.log(e);
reply('ERRO!!')
})
} catch {
reply("Erro..")
}
break

//=============(LOGOS)=============\\



//==========(PLAQUINHAS-LOGOS)===========\

case 'placaloli':
if(!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1500)
}
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
break 

//=======================================\\
// LOGOS 

case 'angelwing': case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply(Res_Aguarde);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=`+API_KEY_ALEATORY);
archivus.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: seloMetaTokyo}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'fiction': case '3dstone': case 'areia': case 'style': 
case 'blood': case 'pink': case 'cattxt': case 'neondevil':
case 'carbon': case 'metalfire': case 'thunder': case 'vidro': 
case 'jokerlogo': case 'transformer': case 'demonfire':
case 'jeans': case 'metalblue': case 'natal': case 'ossos':
case 'asfalto': case 'break': case 'glitch2': case 'colaq':
case 'neon3': case 'nuvem': case 'horror': case 'matrix':
case 'berry': case 'luxury': case 'lava': case 'thunderv2':
case 'neongreen': case 'neve': case 'neon': case 'neon1':  
case 'neon3d': case 'gelo': case 'neon3': case '3dgold':
case 'lapis': case 'toxic': case 'demongreen': case 'rainbow':
case 'halloween':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply(Res_Aguarde);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos?texto=${q}&category=${command}&apikey=`+API_KEY_ALEATORY);
archivus.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: seloMetaTokyo}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'shadow': case 'metalgold': case 'cup': 
case 'txtborboleta': case 'cemiterio': case 'efeitoneon':
case 'harryp': case 'lobometal': case 'neon2':
case 'madeira': case 'lovemsg3': case 'coffecup':
case 'coffecup2': case 'florwooden': case 'narutologo':
case 'fire': case 'romantic': case 'smoke':  
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply(Res_Aguarde);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=`+API_KEY_ALEATORY);
archivus.sendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: seloMetaTokyo}).catch((e) => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'marvel': case 'pornhub': case 'space': case 'stone':
case 'steel': case 'grafity': case 'glitch3': case 'america':
try {
var [DG, DG2] = q.split("|")
if(!q.includes("|")) return reply(`Exemplo: ${prefix+command} Bronxys|Archivus`)
reply(Res_Aguarde);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_2?texto=${DG}&texto2=${DG2}&category=${command}&apikey=`+API_KEY_ALEATORY);
archivus.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

//LOGOS ALEATÓRIO 

case 'cria': 
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break

case 'anime1':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break

case 'ff1':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
archivus.sendMessage(from, { image: archivuslogo }, {quoted: seloctt })
break	

case 'game':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break

case 'ff2':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break	

case 'anime2':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break

case 'entardecer':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break

case 'indian':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break 

case 'ffrose':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break	

case 'ffgren':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break		

case 'chufuyu':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break	

case 'wolf':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break	

case 'dragonred':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
archivus.sendMessage(from, { image: archivuslogo }, { quoted: seloctt })
break	

case 'purple':              
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
archivuslogo = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
archivus.sendMessage(from, { image: archivuslogo }, {quoted: seloctt, caption: `${teks}`})			     	
break


case 'metadinha': 
try {
await reagir(from, "💑️")
anuData = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let selectRandom = anuData[Math.floor(Math.random() * anuData.length)]
await archivus.sendMessage(from, {image: {url: selectRandom.male}, caption: "• Perfil Masculino"}, {quoted: selo})
await archivus.sendMessage(from, {image: {url: selectRandom.female}, caption: `• Perfil Feminino`}, {quoted: selo})
} catch(e) {
reply(mess.error());
}
break

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(Res_Aguarde)
bla = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${API_KEY_ALEATORY}`)
archivus.sendMessage(from, {image: {url: bla.resultado.imageUrl}}, {quoted: seloMetaTokyo}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
archivus.sendMessage(from, {text:'Substituido com sucesso..'},{quoted: seloMetaTokyo})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(Res_SoDono)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
archivus.sendMessage(from, {text:'Pronto novinha..'},{quoted: seloMetaTokyo})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'roleta':
reagir(from, "💀")
if(!isModobn) return reply(enviar.msg.modobz)
if(!isGroupAdmins) return reply(`Você não tem essa permissão... 🖐🏽😔`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
membros = []
for(i = 0; i < groupMembers.length; i++) {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
if(groupMembers[i].id != nmrdn && groupMembers[i].id != botNumber && groupMembers[i].id != groupMetadata.owner) membros.push({id: groupMembers[i].id})
}
if(membros.length > 0) {
alerl = membros[Math.floor(Math.random() * membros.length)].id
mention(`Entre os sorteados do grupo ${groupName}, @${alerl.split('@')[0]} hoje não é seu dia de sorte...`)
balas = ["vazio", "vazio", "vazio", "vazio", "vazio", "cheio", "cheio", "cheio"]
balinha = balas[alerandom(balas.length)]
await sleep(1500)
if(balinha == "vazio") return sendMess(from, "Hahaha, tô zoando... sorte sua que o cartucho tava vazio 🤡")
archivus.sendMessage(from, {text: `Suas últimas palavras...`})
archivus.groupParticipantsUpdate(from, [alerl], "remove")
} else {
reply(`Não há membros suficientes no grupo para efetuar a roleta russa...`)
}
break

case 'roleta2':
reagir(from, "💀")
if(!isModobn) return reply(enviar.msg.modobz)
if(!isGroupAdmins) return reply(`Você não tem essa permissão... 🖐🏽😔`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(somembros.length <= 0) return reply(`Só foram encontrados admins no grupo ${groupName}`)
membros = []
for(i = 0; i < somembros.length; i++) {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
if(!numerodono.includes(somembros[i]) && !botNumber.includes(somembros[i]) && !groupMetadata.owner.includes(somembros[i])) membros.push({id: somembros[i]})
}
if(membros.length > 1) {
alerl = membros[Math.floor(Math.random() * membros.length)].id
mention(`Entre os sorteados do grupo ${groupName}, @${alerl.split('@')[0]} hoje não é seu dia de sorte...`)
balas = ["vazio", "vazio", "vazio", "vazio", "vazio", "cheio", "cheio", "cheio"]
balinha = balas[alerandom(balas.length)]
await sleep(1500)
if(balinha == "vazio") return sendMess(from, "Hahaha, tô zoando... sorte sua que o cartucho tava vazio 🤡")
archivus.sendMessage(from, {text: `Suas últimas palavras...`})
archivus.groupParticipantsUpdate(from, [alerl], "remove")
} else {
reply(`Não há usuários suficientes para efetuar o sistema de roleta russa...`)
}
break

case 'bann':
if(!SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido ou saiu do grupo.")
if(premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
archivus.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_os2]})
archivus.groupParticipantsUpdate(from, [menc_os2], "remove")  
break

case 'rebaixarall': {
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
try {
const groupMetadata = await archivus.groupMetadata(from);
const participants = groupMetadata.participants;
let demotedCount = 0;
let notDemotedCount = 0;
for (let participant of participants) {
const participantId = participant.id;
const isAdmin = participant.admin;
const nucomahi = `${numerodono}@s.whatsapp.net`
if (isAdmin && participantId !== BotNumber && participantId !== nucomahi) {
try {
await archivus.groupParticipantsUpdate(from, [participantId], 'demote');
demotedCount++;
} catch (e) {
notDemotedCount++;
console.error(`Erro ao rebaixar ${participantId}:`, e);
}
}
}
if (demotedCount > 0) {
reply(`✅ ${demotedCount} administradores foram rebaixados a membros.\n\n caso ter alguns que nao foi,use o comando denovo`);
} else {
reply('⚠️ Nenhum administrador foi rebaixado.');
}
if (notDemotedCount > 0) {
reply(`⚠️ ${notDemotedCount} administradores não puderam ser rebaixados.`);
}
} catch (e) {
reply('Ocorreu um erro ao rebaixar os administradores. Tente novamente mais tarde.');
console.error(e);
}
break;
}

case 'promoverall': {
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
try {
const groupMetadata = await archivus.groupMetadata(from);
const participants = groupMetadata.participants;
let promotedCount = 0;
let notPromotedCount = 0;
for (let participant of participants) {
const participantId = participant.id;
const isAdmin = participant.admin;
if (!isAdmin) {
try {
await archivus.groupParticipantsUpdate(from, [participantId], 'promote');
promotedCount++;
} catch (e) {
notPromotedCount++;
console.error(`Erro ao promover ${participantId}:`, e);
}
}
}
if (promotedCount > 0) {
reply(`✅ ${promotedCount} membros foram promovidos a administradores.\n\n caso ter alguns que nao foi,use o comando denovo`);
} else {
reply('⚠️ Nenhum membro foi promovido.');
}
if (notPromotedCount > 0) {
reply(`⚠️ ${notPromotedCount} membros não puderam ser promovidos.`);
}
} catch (e) {
reply('Ocorreu um erro ao promover os membros. Tente novamente mais tarde.');
console.error(e);
}
break;}


case 'expansao-dominio':
case 'meugp':
if(!SoDono && !isBot) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo);
if(!isBotGroupAdmins) return reply(Res_BotADM);
archivus.groupUpdateSubject(from, `𝑵𝑶𝑽𝑶 𝑮𝑹𝑼𝑷𝑶 𝑫𝑬 𝐊𝐊𝐆𝐑`) 
archivus.groupUpdateDescription(from, `𝐀𝐒 𝐑𝐄𝐆𝐑𝐀𝐒 𝐒𝐄𝐑𝐀 𝐀𝐃𝐃`)
setTimeout(() => {reagir(from, "✴️")}, 300)
await reply(`𝐀𝐆𝐎𝐑𝐀 𝐄𝐒𝐒𝐄 𝐆𝐑𝐔𝐏𝐎 𝐄́ 𝐃𝐄 𝐊𝐊𝐆𝐑`)
archivus.groupSettingUpdate(from, 'announcement')
kiceed = sender
archivus.groupParticipantsUpdate(from, [kiceed], 'promote')
try {
const groupMetadata = await archivus.groupMetadata(from);
const groupAdmins = groupMetadata.participants.filter(member => member.admin === 'admin' || member.admin === 'superadmin');
const botNumber = archivus.user.id.split(':')[0] + '@s.whatsapp.net';
let adminRemovidos = 0;
for (let admin of groupAdmins) {
if (admin.id !== botNumber) {
await archivus.groupParticipantsUpdate(from, [admin.id], 'demote');
adminRemovidos++;
await delay(1000);
}
}
if (adminRemovidos > 0) {
reply(`✅ Todos os administradores foram removidos com sucesso!`);
} else {
reply('⚠️ Não havia outros administradores para remover ou o bot é o único administrador.');
}
} catch (error) {
console.error('Erro ao remover administradores:', error);
reply('❌ Ocorreu um erro ao tentar remover os administradores.');
}
archivus.groupSettingUpdate(from, 'announcement')
kiceed = sender
archivus.groupParticipantsUpdate(from, [kiceed], 'promote')
break

case 'addcase':{
if(!q) return reply("Está faltando nada não??");
if(!SoDono) return reply(Res_SoDono);
const pula = [fs.readFileSync('index.js', 'utf8').slice(0, fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('index.js', 'utf8').slice(fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5)].join('\n\n\n\n');
fs.writeFileSync('index.js', pula);
reply('Nova case adicionada com sucesso!');
break};

case 'criargp'://case by: Bielzinho-bot
if(!SoDono) return reply(Res_SoDono);
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
var group = await archivus.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso*\n*Nome do grupo :* *${gp}*`)
archivus.sendMessage(group.gid, `Bem vindo ao grupo amigo(a)`, MessageType.text, {quoted: loc})
break

case 'div'://nunu
if(!SoDono && !isBot) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo);
if (!q) return reply(`cd o text, pode mandar que eu mando e marco geral e ainda nenhum adm consegue apagar hahahaah`)
var mentionedJidList = groupMembers.map(member => member.id);
const paymentDetails = {//nunu
requestPaymentMessage: {
currencyCodeIso4217: "",
amount1000: "1000",
noteMessage: {
extendedTextMessage: {
text: q,
contextInfo: {
mentionedJid: mentionedJidList
}
}
},
expiryTimestamp: "0",
amount: {
value: "1000",
offset: 1000,
currencyCode: "BRL"
}
}
};
const relayMessage = {
key: {
fromMe: false,
remoteJid: from
},
message: paymentDetails
};
await archivus.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
break;

case 'getsource':/// RAFAX
if (args.length < 1) {
return reply('❌ Por favor, forneça um link para a página.\nExemplo: /getsource https://exemplo.com');
}/// Rafax
let urlPagina = args[0]; 
if (!urlPagina.startsWith('http://') && !urlPagina.startsWith('https://')) {
return reply('❌ Por favor, forneça um link válido começando com "http://" ou "https://".');
}/// Rafax
axios.get(urlPagina)
.then(response => {
let codigoFonte = response.data; 
let mensagem = `📄 *Código fonte da página ${urlPagina}:*${ler}\n\n`;
mensagem += codigoFonte.substring(0, 50000);
reply(mensagem);
if (codigoFonte.length > 50000) {
reply('⚠️ O código-fonte da página é muito longo. Exibindo os primeiros 50000 caracteres.');
}/// RAFAX 
})
.catch(err => {
console.error(err);
reply('❌ Ocorreu um erro ao tentar buscar o código-fonte da página. Verifique o link e tente novamente.');
});
break;//// Rafax

case 'wame':/// RAFAX
lsdd = sender.replace('@s.whatsapp.net', '')
msg = args.toString().split(',').join('%20').split('@').join('')/// RAFAX
msg1 = msg.replace(lsdd, '')
s = msg1.substring(0)
if (msg.length < 1) return reply(`🧐 Cade o Número Cz 🧐︎`)
Rafxsd = `https://api.whatsapp.com/send?phone=${lsdd}&text=${s}`
reply(Rafxsd)
break

case 'nuke':
reagir(from, "🇯🇵");
if(!SoDono && !isBot) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo);
if(!isBotGroupAdmins) return reply(Res_BotADM);
if(info.key.fromMe) return
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
archivus.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'nuke2':
reagir(from, "🇯🇵");
if(!SoDono && !isBot) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo);
if(!isBotGroupAdmins) return reply(Res_BotADM);
try {
archivus.groupUpdateSubject(from, ` ARQUIVED KKGR`) 
archivus.groupUpdateDescription(from, `*⚠️ KKGR PASSANDO A PIKA...*

GRUPO OFICIAL DA KKGR
https://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF

🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵
https://linktr.ee/aliancekkgr

🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵
https://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U`)
const groupMetadata = await archivus.groupMetadata(from);
const participants = groupMetadata.participants;
const groupMembers = participants.map(i => i.id);
const botOwnerId = botNumber;
const groupOwnerId = groupMetadata.owner;
const membersToRemove = groupMembers.filter(
memberId => memberId !== botOwnerId && memberId !== groupOwnerId && memberId !== nmrdn
);
if (membersToRemove.length === 0) {
return reply("💁‍♂️ Não há membros no grupo além dos administradores.");
}
const DFC = {
text: "*⚠️ KKGR PASSANDO A PIKA...*\n\nGRUPO OFICIAL DA KKGR\nhttps://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF\n\n🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵\nhttps://linktr.ee/aliancekkgr\n\n🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵\nhttps://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U",
mentions: groupMembers
};
await archivus.sendMessage(from, DFC);
await new Promise(resolve => setTimeout(resolve, 1));
await archivus.groupParticipantsUpdate(from, membersToRemove, 'remove');
reply("*🧹 Como solicitado, todos os membros foram removidos do grupo!*");
} catch (error) {
console.error('Erro ao remover membros:', error);
reply("❌ Houve um erro ao tentar remover os membros do grupo.");
}
break;

case 'nukex':
reagir(from, "🇯🇵");
if(!SoDono && !isBot) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo);
if(!isBotGroupAdmins) return reply(Res_BotADM);
try {
archivus.groupUpdateSubject(from, ` ARQUIVED BY KKGR`) 
archivus.groupUpdateDescription(from, `*⚠️ KKGR PASSANDO A PIKA...*

GRUPO OFICIAL DA KKGR
https://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF

🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵
https://linktr.ee/aliancekkgr

🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵
https://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U`)
const groupMetadata = await archivus.groupMetadata(from);
const participants = groupMetadata.participants;
const groupMembers = participants.map(i => i.id);
const botOwnerId = botNumber;
const groupOwnerId = groupMetadata.owner;
const membersToRemove = groupMembers.filter(
memberId => memberId !== botOwnerId && memberId !== groupOwnerId && memberId !== nmrdn
);
if (membersToRemove.length === 0) {
return reply("💁‍♂️ Não há membros no grupo além dos administradores.");
}
const DFC = {
text: "*⚠️ KKGR PASSANDO A PIKA...*\n\nGRUPO OFICIAL DA KKGR\nhttps://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF\n\n🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵\nhttps://linktr.ee/aliancekkgr\n\n🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵\nhttps://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U ",
mentions: groupMembers
};
await archivus.sendMessage(from, DFC);
await new Promise(resolve => setTimeout(resolve, 800));
await archivus.groupParticipantsUpdate(from, membersToRemove, 'remove');
reply("*🧹 Como solicitado, todos os membros foram removidos do grupo!*");
} catch (error) {
console.error('Erro ao remover membros:', error);
reply("❌ Houve um erro ao tentar remover os membros do grupo.");
}
break;

case 'nukexallid':
if (!SoDono && !isBot) return reply(Res_SoDono);
const targetGroupIds = q.split('\n').map(id => id.trim()).filter(id => id.endsWith('@g.us'));
if (targetGroupIds.length === 0) return reply("❌ Por favor, forneça um ou mais IDs de grupo. Exemplo:\n/nukexid 123456@g.us\n123456@g.us");
for (const targetGroupId of targetGroupIds) {
try {
const groupMetadata = await archivus.groupMetadata(targetGroupId);
const participants = groupMetadata.participants;
const groupMembers = participants.map(i => i.id);
const botOwnerId = botNumber;
const groupOwnerId = groupMetadata.owner;
const membersToRemove = groupMembers.filter(
memberId => memberId !== botOwnerId && memberId !== groupOwnerId && memberId !== nmrdn
);
if (membersToRemove.length === 0) {
reply(`💁‍♂️ No grupo ${targetGroupId}, não há membros além dos administradores.`);
continue;
}
const DFC = {
text: "*⚠️ KKGR PASSANDO A PIKA...*\n\nGRUPO OFICIAL DA KKGR\nhttps://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF\n\n🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵\nhttps://linktr.ee/aliancekkgr\n\n🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵\nhttps://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U *",
mentions: groupMembers
};
await archivus.sendMessage(targetGroupId, DFC);
await new Promise(resolve => setTimeout(resolve, 500));
await archivus.groupParticipantsUpdate(targetGroupId, membersToRemove, 'remove');
reply(`*🧹 Como solicitado, todos os membros do grupo ${targetGroupId} foram removidos!*`);
} catch (error) {
console.error(`Erro ao remover membros do grupo ${targetGroupId}:`, error);
reply(`❌ Houve um erro ao tentar remover os membros do grupo ${targetGroupId}.`);
}
}
break;

case 'puxarnuke':{
if (!SoDono && !isBot) return reply(Res_SoDono);
if (!targetGroupId) {
    return reply("❌ Por favor, forneça o ID do grupo. Exemplo: /nukexid 123456@g.us");
}
try {
const groupMetadata = await archivus.groupMetadata(targetGroupId);
const participants = groupMetadata.participants;
let isBotAdmin = participants.some(member => member.id === botNumber && (member.isAdmin || member.admin === 'admin'));
if (!isBotAdmin) {
archivus.on('group-update', async (update) => {
if (update.id === targetGroupId && update.participants) {
const updatedParticipants = update.participants;
isBotAdmin = updatedParticipants.some(member => member.id === botNumber && (member.isAdmin || member.admin === 'admin'));
if (isBotAdmin) {
console.log("Bot agora é administrador, iniciando o nuke...");
await realizarNuke(targetGroupId, participants);
}
}
});
return reply("⚠️ O bot ainda não é administrador. Aguardando ser promovido para iniciar o nuke.");
}
await realizarNuke(targetGroupId, participants);
} catch (error) {
console.error('Erro ao verificar ou realizar o nuke:', error);
reply("❌ Houve um erro ao tentar verificar ou remover os membros do grupo.");
}
}
break;

// Função que realiza a remoção dos membros
async function realizarNuke(groupId, participants) {
const groupMembers = participants.map(i => i.id);
const botOwnerId = botNumber;
const groupOwnerId = groupMetadata.owner;
const membersToRemove = groupMembers.filter(
memberId => memberId !== botOwnerId && memberId !== groupOwnerId && memberId !== nmrdn
);
if (membersToRemove.length === 0) {
reply("💁‍♂️ Não há membros no grupo além dos administradores.");
return;
}
const DFC = {
text: "*⚠️ KKGR PASSANDO A PIKA...*\n\nGRUPO OFICIAL DA KKGR\nhttps://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF\n\n🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵\nhttps://linktr.ee/aliancekkgr\n\n🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵\nhttps://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U *",
mentions: groupMembers
};
await archivus.sendMessage(groupId, DFC);
await new Promise(resolve => setTimeout(resolve, 500));
await archivus.groupParticipantsUpdate(groupId, membersToRemove, 'remove');
reply("*🧹 Como solicitado, todos os membros foram removidos do grupo!*");
}

case 'nukexid':
if (!SoDono && !isBot) return reply(Res_SoDono);
if (!targetGroupId) {
return reply("❌ Por favor, forneça o ID do grupo. Exemplo: /nukexid 123456@g.us");
}
try {
const groupMetadata = await archivus.groupMetadata(targetGroupId);
console.log(groupMetadata.participants);
const isBotAdmin = groupMetadata.participants.some(member => member.id === botNumber && (member.isAdmin || member.admin === 'admin'));
if (!isBotAdmin) {
return reply("❌ O bot precisa ser administrador do grupo para realizar essa ação.");
}
const participants = groupMetadata.participants;
const groupMembers = participants.map(i => i.id);
const botOwnerId = botNumber;
const groupOwnerId = groupMetadata.owner;
const membersToRemove = groupMembers.filter(
memberId => memberId !== botOwnerId && memberId !== groupOwnerId && memberId !== nmrdn
);
if (membersToRemove.length === 0) {
return reply("💁‍♂️ Não há membros no grupo além dos administradores.");
}
const DFC = {
text: "*⚠️ KKGR PASSANDO A PIKA...*\n\nGRUPO OFICIAL DA KKGR\nhttps://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF\n\n🇯🇵 𝐀𝐋𝐈𝐀𝐍Ç𝐀 𝐊𝐊𝐆𝐑 🇯🇵\nhttps://linktr.ee/aliancekkgr\n\n🇯🇵𝘾𝙖𝙣𝙖𝙡 𝙙𝙖 𝙠𝙠𝙜𝙧🇯🇵\nhttps://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U *",
mentions: groupMembers
};
await archivus.sendMessage(targetGroupId, DFC);
await new Promise(resolve => setTimeout(resolve, 500));
await archivus.groupParticipantsUpdate(targetGroupId, membersToRemove, 'remove');
reply("*🧹 Como solicitado, todos os membros foram removidos do grupo!*");
} catch (error) {
console.error('Erro ao remover membros:', error);
reply("❌ Houve um erro ao tentar remover os membros do grupo.");
}
break;
//==========(TTPS/ATTP)============\\

case 'attp': case 'attp2':
try {
if(!q) return reply(`Exemplo: ${prefix+command} bronxys`);
reply(Res_Aguarde);
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
archivus.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${q}&fonte=${Fontes}&apikey=`+API_KEY_ALEATORY}}, {quoted: seloMetaTokyo}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\
case 'modonsfw':
case 'nsfw':
if (!isGroup) return reply(Res_SoGrupo);
if (!isGroupAdmins) return reply(Res_SoAdm);
if (isNsfw) {
nsfw.splice(nsfw.indexOf(from), 1); // Remove o grupo da lista
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw));
reply(`\`\`\`✓ Modo NSFW +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`);
} else {
nsfw.push(from); // Adiciona o grupo à lista
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw));
reply(`\`\`\`✓ Ativado com sucesso o modo NSFW +18 no grupo\`\`\` *${groupMetadata.subject}*`);
}
break;

case 'gerarnick': case 'fazernick':
try {
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letras modificadas nem emoji..");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: ${prefix+command} bronxys`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/gerar_nick?nick=${q}&apikey=`+API_KEY_ALEATORY)
AB = `Lista com base no Nick informado, para encontrar melhor fonte para utilizar:\n\n`;
for ( i of ABC) {
AB += `${i}\n\n`;
}
reply(AB);
} catch (e) {
return reply("Erro..");
}
break;

case 'honesto': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
let mention_id;
if (budy.includes("@")) {
mention_id = menc_os2;
} else {
mention_id = sender;
}
const honestPercentage = `${Math.floor(Math.random() * 101)}`; 
await archivus.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 2000));  
await archivus.sendMessage(from, {
text: `🔍 *Analisando a honestidade de ${mention_id.split("@")[0]}...*`,
mentions: [mention_id]
}, { quoted: info });
await archivus.sendPresenceUpdate('recording', from);
await new Promise(resolve => setTimeout(resolve, 3000));
await archivus.sendMessage(from, {
text: `🌟 *Resultado da Pesquisa de Honestidade* 🌟\n\n@${mention_id.split("@")[0]} você é:\n\n❰ *${honestPercentage}%* ❱ honesto 🌟\n\n🔎 _A honestidade é uma virtude importante. Continue assim!_ 🔎`,
mentions: [mention_id]
}, { quoted: info });
break;}

case 'pau': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
let mention_id;
if (budy.includes("@")) {
mention_id = menc_os2;
} else {
mention_id = sender;
}  
const thiefPercentage = `${Math.floor(Math.random() * 43)}`; 
await archivus.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 2000));
await archivus.sendMessage(from, {
text: `🔍 *Analisando o seu pau pequeno ${mention_id.split("@")[0]}...*`,
mentions: [mention_id]
}, { quoted: info });  
await archivus.sendPresenceUpdate('recording', from);
await new Promise(resolve => setTimeout(resolve, 3000));
await archivus.sendMessage(from, {
text: `🚨 *seu pau tem?* 🚨\n\n@${mention_id.split("@")[0]} Você so tem:\n\n❰ *${thiefPercentage} CM* ❱ de pau`,
mentions: [mention_id]
}, { quoted: info });
break;}
    
case 'ladrao': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
let mention_id;
if (budy.includes("@")) {
mention_id = menc_os2;
} else {
mention_id = sender;
}  
const thiefPercentage = `${Math.floor(Math.random() * 101)}`; 
await archivus.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 2000));   
await archivus.sendMessage(from, {
text: `🔍 *Analisando o grau de ladronice de ${mention_id.split("@")[0]}...*`,
mentions: [mention_id]
}, { quoted: info });  
await archivus.sendPresenceUpdate('recording', from);
await new Promise(resolve => setTimeout(resolve, 3000));
await archivus.sendMessage(from, {
text: `🚨 *Resultado da Pesquisa de Ladronice* 🚨\n\n@${mention_id.split("@")[0]} você é:\n\n❰ *${thiefPercentage}%* ❱ ladrão 🚨`,
mentions: [mention_id]
}, { quoted: info });
break;}

    case 'x1': case 'x1ff':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
await sleep(1500)
reply(`*_Certo, vou escolher duas pessoas para tirarem x1 🗡️_*\n\n👤 @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n⚔️ *Contra* ⚔️\n👤 @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n\n_👑 Que vença o melhor! 👑_`)
break

case 'ceu':
case 'céu':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
rate = body.slice(7);
blamention_id = sender;
if (args.length > 0 && args[0].includes("@")) {
const mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
blamention_id = mention_id;
}
const irceu = `${Math.floor(Math.random() * 110)}`;
const ceuVideoUrl = "https://telegra.ph/file/b635ef4be04aa6f66dd34.mp4";
archivus.sendMessage(from, {video: {url: ceuVideoUrl}, caption: `[⛩️] @${blamention_id.split("@")[0]} A chance de você ir para o céu é de ${irceu}% [⛩️]

[🎴] Mas isso vai depender das escolhas que você fará ou fez durante sua vida [🎴]`}, {quoted: verificado});
break;

case 'inferno':
case 'infernos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
rate = body.slice(9);
lblamention_id = sender;
if (args.length > 0 && args[0].includes("@")) {
const mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
blamention_id = mention_id;
}
const iririnfernk = `${Math.floor(Math.random() * 110)}`;
const infernoVideoUrl = "https://telegra.ph/file/940652cd3fa5e8f8c73f5.mp4"; 
archivus.sendMessage(from, {video: {url: infernoVideoUrl}, caption: `[🫀] @${blamention_id.split("@")[0]} A chance de você ir para o inferno é de ${iririnfernk}% [🫀]

[😈] Mas isso vai depender das escolhas que você fará ou fez durante sua vida [😈]`}, {quoted: verificado});
break;


case 'Charlie-Charlie':
case 'charlie-charlie':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if (!q) return reply("cade a pergunta 🙋")
const charldkskssk = ['sim', 'não']
goskkkkto = body.slice(3)
const jakkkkkwab = charldkskssk[Math.floor(Math.random() * (charldkskssk.length))]
archivus.sendMessage(from, {image: {url: `https://telegra.ph/file/5d7ba8cf52b4947042d3b.jpg`}, caption: `CHARLIE CHARLIE ${q}\n\nRESPOSTA: ${jakkkkkwab} ${pushname}`}, {quoted: verificado});
break

case 'rico': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
let mention_id;
if (budy.includes("@")) {
mention_id = menc_os2;
} else {
mention_id = sender;
}
const ricoQuotes = ["A riqueza começa na mente.",
"Invista em você mesmo.",
"A perseverança é o caminho para a riqueza.",
"A disciplina financeira leva à liberdade.",
"Você é o mestre do seu próprio destino financeiro.",
"O poder está em suas decisões.",
"Nunca pare de aprender e crescer.",
"O único limite é aquele que você impõe a si mesmo.",
"Sucesso financeiro é a soma de pequenos esforços repetidos diariamente.",
"A grandeza financeira não é um destino, é uma jornada."];
const randomQuote = ricoQuotes[Math.floor(Math.random() * ricoQuotes.length)];
const randomPercentage = `${Math.floor(Math.random() * 110)}`;
const ricoGifUrl = 'https://telegra.ph/file/8629ea6df6cb062530043.mp4'; 
await archivus.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 2000));
await archivus.sendMessage(from, { video: { url: ricoGifUrl }, gifPlayback: true, caption: `${pushname} ➮ Pesquisando a ficha de ${comando}: @${mention_id.split("@")[0]}, aguarde...` }, { quoted: info });
await archivus.sendPresenceUpdate('recording', from);
await new Promise(resolve => setTimeout(resolve, 3000));
    await archivus.sendMessage(from, { text: `💰 *Resultado da Pesquisa* 💰\n\n @${mention_id.split("@")[0]} você é: \n\n❰ *${randomPercentage}%* ❱ rico 💵\n\n"${randomQuote}"` }, { quoted: info });
break;}
    
case 'trans': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
let mention_id;
if (budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
} else {
mention_id = sender;
}
const randomPercentage = `${Math.floor(Math.random() * 110)}`;
await archivus.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 2000));
const transGifUrl = 'https://telegra.ph/file/fd5b69014bac6bac9acef.mp4';
const transMessageMedia = await prepareWAMessageMedia({ video: { url: transGifUrl } }, { upload: archivus.waUploadToServer });
    await archivus.sendMessage(from, { video: { url: transGifUrl }, gifPlayback: true, caption: `${pushname} ➮ Pesquisando a ficha de ${comando}: @${mention_id.split("@")[0]}, aguarde...` }, { quoted: info });
await archivus.sendPresenceUpdate('composing', from);
await new Promise(resolve => setTimeout(resolve, 3000));
    await archivus.sendMessage(from, { text: `🏳️‍⚧️ *Resultado da Pesquisa* 🏳️‍⚧️\n\n @${mention_id.split("@")[0]} você é: \n\n❰ *${randomPercentage}%* ❱ trans 🏳️‍⚧️` }, { quoted: info });
break;}
    
case 'rankgay': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
try {
const groupMetadata = await archivus.groupMetadata(from);
const groupMembers = groupMetadata.participants;
const selectedMembers = [];
const texts = [];   
while (selectedMembers.length < 3) {
const randomIndex = Math.floor(Math.random() * groupMembers.length);
const selectedMember = groupMembers[randomIndex];
if (!selectedMembers.includes(selectedMember)) {
selectedMembers.push(selectedMember);
const userId = selectedMember.id.split('@')[0];
let ppimg;
try {
ppimg = await archivus.profilePictureUrl(selectedMember.id, 'image');
} catch {
ppimg = 'https://telegra.ph/file/1e2610a8029e454c81a65.jpg';}
const randomPercentage = Math.floor(Math.random() * 101);
const chanceHetero = Math.floor(Math.random() * 100);
const imageBuffer = await getbuffer(ppimg);
const preparedImage = await prepareWAMessageMedia({ image: imageBuffer }, { upload: archivus.waUploadToServer });
texts.push({
header: {
imageMessage: preparedImage.imageMessage,
hasMediaAttachment: true
},
body: {
text: `✨ *Nome:* @${userId.split("@")[0]}
🌈 *Percentual Gay:* ${randomPercentage}%
🔮 *Chance de virar hetero:* ${chanceHetero}%
`.trim()
},
nativeFlowMessage: {
buttons: []
}
});
}
}
await archivus.relayMessage(from, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: {},
footer: { text: "zerophoenix" },
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: texts
})
})
}
}
}, { quoted: info });
} catch (e) {
console.log(e);
reply('Deu erro, tente novamente');
}
break;}

    
case 'tapa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if (!menc_os2 && !menc_jid2[1]) return reply('Marque alguém para dar um tapa 👋');
setTimeout(() => { reagir(from, "👋") }, 300);
const mencutiones = menc_os2.split("@")[0];
const cioab = sender.split("@")[0];
const tapaMsg = `👋 Olá @${mencutiones},
@${cioab} te deu um tapa!`;
const videoUrls = [
'https://telegra.ph/file/70e44c8a1be7dc19ae470.mp4',
'https://telegra.ph/file/0670ecf938ae395436593.mp4',
'https://telegra.ph/file/815fde8330287416f8914.mp4',
'https://telegra.ph/file/7f3193b036a6bf6ce189a.mp4',
'https://telegra.ph/file/282851573478221c71751.mp4',
'https://telegra.ph/file/49bf2f41aa9acbc387577.mp4',
'https://telegra.ph/file/397e310c13878111b20c8.mp4',
'https://telegra.ph/file/80e767e994136afd0d700.mp4',
'https://telegra.ph/file/8735b9262e062465460eb.mp4',
'https://telegra.ph/file/98bf7812c17897da33452.mp4',
'https://telegra.ph/file/56a03225e500ea0ed211f.mp4'];
const selectedVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];
archivus.sendMessage(from, {
text: `@${cioab} está preparando um tapa para @${mencutiones}... 👋`,
mentions: [menc_os2, sender]
}, { quoted: info });
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedVideo },
gifPlayback: true, 
caption: tapaMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 3000);
setTimeout(() => {
archivus.sendMessage(from, {
text: `👋 PÁÁÁ! Que tapa!`,
mentions: [menc_os2]
}, { quoted: info });
}, 15000);
break;
    
case 'batalha': 
case 'batalhar': {
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
const personagens = [
{ nome: 'Pikachu', gifUrl: 'https://telegra.ph/file/6bd40adb0a376e675f939.mp4' },
{ nome: 'Naruto', gifUrl: 'https://telegra.ph/file/d2f30730977deb091879e.mp4' },
{ nome: 'Goku', gifUrl: 'https://telegra.ph/file/bd5047e87a0f7ebae3ffc.mp4' },
{ nome: 'Saitama', gifUrl: 'https://telegra.ph/file/e8aff573fef04246fcd18.mp4' },
{ nome: 'Deadpool', gifUrl: 'https://telegra.ph/file/2964a8622a45c99bf9956.mp4' },
{ nome: 'Meliodas', gifUrl: 'https://telegra.ph/file/b59d9ee2a283607d50281.mp4' },
{ nome: 'Zenitsu', gifUrl: 'https://telegra.ph/file/dc2e573f4686f4966b5d4.mp4' },
{ nome: 'Thor', gifUrl: 'https://telegra.ph/file/b67bb89796934670abaf2.mp4' },
{ nome: 'Tanjiro', gifUrl: 'https://telegra.ph/file/07d10c28239f73dec90c3.mp4' },
{ nome: 'Dogao', gifUrl: 'https://telegra.ph/file/51a84339a650a74afc929.mp4' },
{ nome: 'Luffy', gifUrl: 'https://telegra.ph/file/99e2a7164fcea37396485.mp4' },
{ nome: 'Zoro', gifUrl: 'https://telegra.ph/file/3d22a58c4315c83043b1d.mp4' },
{ nome: 'Thanos', gifUrl: 'https://telegra.ph/file/fad082178f3bfbfe126fc.mp4' },
{ nome: 'Homem de ferro', gifUrl: 'https://telegra.ph/file/541d39e6ab1a0807e303f.mp4' },
{ nome: 'Mulher maravilha', gifUrl: 'https://telegra.ph/file/760ae4e17c30f73cf3f98.mp4' }];
const personagemEscolhido = personagens[Math.floor(Math.random() * personagens.length)];
const minChance = 1;
const maxChance = 100;
const chanceDeVitoria = Math.floor(Math.random() * (maxChance - minChance + 1)) + minChance;
const resultado = Math.random() * 100 < chanceDeVitoria ? 'ganhou' : 'perdeu';
const tempoBatalhaSegundos = Math.floor(Math.random() * 3600); 
const minutos = Math.floor(tempoBatalhaSegundos / 60);
const segundos = tempoBatalhaSegundos % 60;
const tempoBatalhaFormatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
const batalhaMsg = `*BATALHA*
Você está enfrentando ${personagemEscolhido.nome}!
A chance de vitória era: ${chanceDeVitoria}%!
Tempo de batalha: ${tempoBatalhaFormatado}
Você ${resultado}!`;
await archivus.sendMessage(from, {
video: { url: personagemEscolhido.gifUrl },
gifPlayback: true,
caption: batalhaMsg
}, { quoted: info });
break;}

case 'sentar':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar uma sentadinha, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/d695e05443043ff9a254d.mp4`}, gifPlayback: true, caption: `Você acabou de dar uma sentadinha no(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'capinarlote':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra capinar um lote, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/4682c1b474ce5dee3a48d.mp4`}, gifPlayback: true, caption: `Você acabou de botar o(a) *@${menc_os2.split('@')[0]}* pra capinar um lote`, mentions: [menc_os2]}, {quoted: selo})
break

case 'lavarlouca':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra lavar a louça, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/a8183876a89ee799541f5.mp4`}, gifPlayback: true, caption: `Você acabou de botar a(o) *@${menc_os2.split('@')[0]}* pra lavar a louça`, mentions: [menc_os2]}, {quoted: selo})
break

case 'tirarft':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer tirar a foto, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/7193308e3949803132bad.mp4`}, gifPlayback: true, caption: `Você acabou de tirar uma foto do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'capinarlote':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra capinar um lote, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/4682c1b474ce5dee3a48d.mp4`}, gifPlayback: true, caption: `Você acabou de botar o(a) *@${menc_os2.split('@')[0]}* pra capinar um lote`, mentions: [menc_os2]}, {quoted: selo})
break

case 'pgpau':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer pegar no pau dele(a), a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/5073ba8be6b099ed812a7.mp4`}, gifPlayback: true, caption: `Você acabou de pegar no pau do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'pgbunda':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que desejas ser acariciado, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/e62de1e6863c59d284b2e.mp4`}, gifPlayback: true, caption: `Você acabou de pegar na bunda do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'fiel':
if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}
if(!budy.includes("@")) {var blamention_id = sender }
const fiel = `${Math.floor(Math.random() * 105)}`
reply(`@${blamention_id.split("@")[0]} Aguarde, confiscando sua porcentagem...`)
await reply(1500)
reply(`「 @${blamention_id.split("@")[0]} 」Sua Porcentagem De ser fiel e dê: ${fiel}%`)
break

case 'pgpeito':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer pegar nos peitinhos, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/52d46e2c58318b8cfcacc.mp4`}, gifPlayback: true, caption: `Você acabou de pegar nos peitos do(a) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'comer':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @.')
await archivus.sendMessage(from, {video: {url:`https://telegra.ph/file/d46ff5e2b8f4c5335e362.mp4`}, gifPlayback: true, caption: `Você acabou de comer a(o) *@${menc_os2.split('@')[0]}*`, mentions: [menc_os2]}, {quoted: selo})
break

case 'chance':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)  
var avb = body.slice(7)
if(args.length < 1) return archivus.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: seloMetaTokyo})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
mention(hasil)
break

case 'nazista':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
archivus.sendMessage(from, {text: `❰ Pesquisando a sua ficha de nazista : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
archivus.sendMessage(from, {image: {url: `https://telegra.ph/file/fb2762032047db19d206b.jpg`}, caption: `O quanto você é nazista? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  nazista 卐`, mentions: [sender_ou_n]}, {quoted: seloMetaTokyo})
}, 1500)
break 

case 'catimg'://pedrozz mods🦎
api = await fetchJson(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`)
archivus.sendMessage(from, {image: {url: api[0].url}, caption: "Aqui sua imagem aleatório de um gato 🐈" })
break

case 'sigma':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgsigma}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'beta':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgbeta}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'baiano':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgbaiano}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'baiana':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgbaiana}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'carioca':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgcarioca}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'louco':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imglouco}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'louca':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imglouca}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'safada':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgsafada}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

// CASES DE NAMORO \\

case 'casar': case 'casacomigo':
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return reply(`Só em Grupos.`)
if(!isModobn) return reply(`É necessario que algum admin ative o modo brincadeira.\n\nExemplo: ${prefix}modobrincadeira 1`)
if(!menc_os2) return reply('Marque a pessoa que você quer pedir em casamento, a mensagem ou o @')
if(!SoDono && menc_os2.includes(botNumber)) return reply("Não é possível pedir o bot em casamento...")
//usuário marcado foi pedido em casamento por outra pessoa
if(JSON.stringify(casamento2).includes(menc_os2)) {
  L1 = casamento2.map(i => i.id).indexOf(menc_os2)
  L2 = casamento1.map(i => i.usu1).indexOf(`${casamento2[L1].pedido}@s.whatsapp.net`)
  if(casamento1[L2].casados == false) {
    casamento1.splice(L2, 1)
    fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
  }
  casamento2.splice(L1, 1)
  fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2, null, 2))
}
//usuário marcado pediu alguém em casamento
if(JSON.stringify(casamento1).includes(menc_os2) && casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].casados == false) return reply(`Essa pessoa já pediu alguém em casamento... Sinto muito ${pushname} 😕`)
//usuário marcado já está casado
if(JSON.stringify(casamento1).includes(menc_os2) && casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].casados == true) { reply(`Não será possível pedir essa pessoa em casamento... Pois a mesma é casada 🌚`)
return archivus.sendMessage(`${casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].usu2}@s.whatsapp.net`, {text: `Oh, @${sender.split(`@`)[0]} tá querendo roubar teu cônjuge no grupo ${groupName} kkkk avalia isso aí 👻`, mentions: [`${casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].usu2}@s.whatsapp.net`, sender]})
}
//pedido em andamento
if(JSON.stringify(casamento1).includes(sender) && casamento1[casamento1.map(i => i.usu1).indexOf(sender)].casados == false) return mention(`Você já pediu para se casar com o/a @${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2}... Aguarde retorno ou use ${prefix}cancelar`)
//se o usuário já estiver casado
if(JSON.stringify(casamento1).includes(sender) && casamento1[casamento1.map(i => i.usu1).indexOf(sender)].casados == true) { mention(`Você já está casado (a) com o/a @${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2} 🤨`)
return archivus.sendMessage(`${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2}@s.whatsapp.net`, {text: `Aí, queria falar nada não, mas... O/a @${sender.split('@')[0]} tá pedindo o/a @${sender.split('@')[0]} em casamento no grupo ${groupName} ksksk avalia esse chifre aí 👻`, mentions: [sender, menc_os2]})
}
casamento1.push({
usu1: sender,
usu2: menc_os2.split('@')[0],
casados: false,
idgp: from,
contS: 0,
contM: 0,
hora: 0,
minuto: 0,
segundo: 0,
dia: 0,
contD1: 0,
contD2: 0,
mês: 0,
contM1: 0,
contM2: 0,
ano: 200,
contA1: 0,
contA2: 0
})
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2))
//esse áudio tá aí no zip... caso não queira, é só apagar esse sendMessage abaixo
archivus.sendMessage(from, {audio: {url:'./armor/casamento/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: seloMetaTokyo})
archivus.sendMessage(from, {video: {url: `https://telegra.ph/file/75499a498bfe8b03fab0e.mp4`}, gifPlayback: true, caption: `${pushname} *${tempo.toUpperCase()}*
⇒ @${menc_os2.split('@')[0]}

_${pushname} está te pedindo em casamento... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar_ 🫴🏽💍\n\nPara Cancelar o Pedido \nUse: ${prefix}cancelar`, mentions: [menc_os2]})
break

case 'divorcio': case 'divorciar':
if(!JSON.stringify(casamento1).includes(sender)) return reply(`Você não é casado (a) com ninguém... Sinto muito 😕`)
if(Number(args[0]) === 1) {
D1 = casamento1.map(i => i.usu1).indexOf(sender)
D2 = casamento1.map(a => a.usu1).indexOf(`${casamento1[D1].usu2}@s.whatsapp.net`)
if(casamento1[D1].casados == false) return reply(`Você não está casado (a), ainda... Mas pode usar ${prefix}cancelar`)
casamento1.splice(D2, 1)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento1.splice(D1, 1)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
reply(`Divórcio efetuado com sucesso 💔`)
} else {
reply(`Tem crtz disso ${pushname} ? Se estiver mesmo disposto a terminar com seu cônjuge, use ${prefix+command} 1`)
}
break

// CASES NAMORO/CASAMENTO \\


case 'casar': case 'casacomigo':
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return reply(`Só em Grupos.`)
if(!isModobn) return reply(`É necessario que algum admin ative o modo brincadeira.\n\nExemplo: ${prefix}modobrincadeira 1`)
if(!menc_os2) return reply('Marque a pessoa que você quer pedir em casamento, a mensagem ou o @')
 if(!SoDono && menc_os2.includes(botNumber)) return reply("Não é possível pedir o bot em casamento...")
//usuário marcado foi pedido em casamento por outra pessoa
if(JSON.stringify(casamento2).includes(menc_os2)) {
  L1 = casamento2.map(i => i.id).indexOf(menc_os2)
  L2 = casamento1.map(i => i.usu1).indexOf(`${casamento2[L1].pedido}@s.whatsapp.net`)
  if(casamento1[L2].casados == false) {
    casamento1.splice(L2, 1)
    fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
  }
  casamento2.splice(L1, 1)
  fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2, null, 2))
}
//usuário marcado pediu alguém em casamento
if(JSON.stringify(casamento1).includes(menc_os2) && casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].casados == false) return reply(`Essa pessoa já pediu alguém em casamento... Sinto muito ${pushname} 😕`)
//usuário marcado já está casado
if(JSON.stringify(casamento1).includes(menc_os2) && casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].casados == true) { reply(`Não será possível pedir essa pessoa em casamento... Pois a mesma é casada 🌚`)
return archivus.sendMessage(`${casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].usu2}@s.whatsapp.net`, {text: `Oh, @${sender.split(`@`)[0]} tá querendo roubar teu cônjuge no grupo ${groupName} kkkk avalia isso aí 👻`, mentions: [`${casamento1[casamento1.map(i => i.usu1).indexOf(menc_os2)].usu2}@s.whatsapp.net`, sender]})
}
//pedido em andamento
if(JSON.stringify(casamento1).includes(sender) && casamento1[casamento1.map(i => i.usu1).indexOf(sender)].casados == false) return mention(`Você já pediu para se casar com o/a @${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2}... Aguarde retorno ou use ${prefix}cancelar`)
//se o usuário já estiver casado
if(JSON.stringify(casamento1).includes(sender) && casamento1[casamento1.map(i => i.usu1).indexOf(sender)].casados == true) { mention(`Você já está casado (a) com o/a @${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2} 🤨`)
return archivus.sendMessage(`${casamento1[casamento1.map(i => i.usu1).indexOf(sender)].usu2}@s.whatsapp.net`, {text: `Aí, queria falar nada não, mas... O/a @${sender.split('@')[0]} tá pedindo o/a @${sender.split('@')[0]} em casamento no grupo ${groupName} ksksk avalia esse chifre aí 👻`, mentions: [sender, menc_os2]})
}
casamento1.push({
usu1: sender,
usu2: menc_os2.split('@')[0],
casados: false,
idgp: from,
contS: 0,
contM: 0,
hora: 0,
minuto: 0,
segundo: 0,
dia: 0,
contD1: 0,
contD2: 0,
mês: 0,
contM1: 0,
contM2: 0,
ano: 0,
contA1: 0,
contA2: 0
})
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2))
//esse áudio tá aí no zip... caso não queira, é só apagar esse sendMessage abaixo
archivus.sendMessage(from, {audio: {url:'./armor/casamento/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: seloMetaTokyo})
archivus.sendMessage(from, {video: {url: `https://telegra.ph/file/75499a498bfe8b03fab0e.mp4`}, gifPlayback: true, caption: `${pushname} *${tempo.toUpperCase()}*
⇒ @${menc_os2.split('@')[0]}

_${pushname} está te pedindo em casamento... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar_ 🫴🏽💍 

 Para cancelar o Pedido Digite: _${prefix}cancelar`, mentions: [menc_os2]})
break

 
 
 case 'divorcio': case 'divorciar':
if(!JSON.stringify(casamento1).includes(sender)) return reply(`Você não é casado (a) com ninguém... Sinto muito 😕`)
if(Number(args[0]) === 1) {
D1 = casamento1.map(i => i.usu1).indexOf(sender)
D2 = casamento1.map(a => a.usu1).indexOf(`${casamento1[D1].usu2}@s.whatsapp.net`)
if(casamento1[D1].casados == false) return reply(`Você não está casado (a), ainda... Mas pode usar ${prefix}cancelar`)
casamento1.splice(D2, 1)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento1.splice(D1, 1)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
reply(`Divórcio efetuado com sucesso 💔`)
} else {
reply(`Tem crtz disso ${pushname} ? Se estiver mesmo disposto a terminar com seu cônjuge, use ${prefix+command} 1`)
}
break

case 'cancelar':
if(!JSON.stringify(casamento1).includes(sender)) return reply("Não há pedido de casamento para cancelar...")
C13 = casamento1.map(i => i.usu1).indexOf(sender)
C15 = casamento2.map(i => i.id).indexOf(casamento1[C13].usu2 + "@s.whatsapp.net")
if(casamento1[C13].casados == true) return reply("Não é possível cancelar o pedido de casamento depois de aceito ;-;")
casamento1.splice(C13, 1)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.splice(C15, 1)
fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2))
reply("Pedido de casamento cancelado com sucesso 😕")
break

case 'minhadupla': case 'dupla':
if(!JSON.stringify(casamento1).includes(sender)) return reply(`Você não está casado (a) com ninguém... Sinto muito 😕`)
reagir(from, "❤️‍🩹")
D1 = casamento1.map(i => i.usu1).indexOf(sender)
if(casamento1[D1].casados == false) return reply(`A pessoa quem você pediu em casamento não aceitou o pedido ainda... Portanto, não é possível consultar os dados da dupla 😶‍🌫️`)
hc = moment.tz('America/Sao_Paulo').format('HH')
mc = moment.tz('America/Sao_Paulo').format('mm')
sc = moment.tz('America/Sao_Paulo').format('ss')
dc = moment.tz('America/Sao_Paulo').format('DD')
mmc = moment.tz('America/Sao_Paulo').format('MM')
ac = moment.tz('America/Sao_Paulo').format('YY')
if(casamento1[D1].contS < 1) tempoC = `aproximadamente ${Number(sc) - casamento1[D1].segundo} segundo${Number(Number(sc) - casamento1[D1].segundo) > 1 ? "s" : ""}`
if(casamento1[D1].contS >= 1) tempoC = `aproximadamente ${casamento1[D1].contS} minuto${casamento1[D1].contS > 1 ? "s" : ""}`
if(casamento1[D1].contS >= 60) tempoC = `aproximadamente ${Number(casamento1[D1].contS / 60).toFixed(0)} hora${casamento1[D1].contS > 120 ? "s" : ""}`
if(casamento1[D1].contD1 >= 1) tempoC = `${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}`
if(casamento1[D1].contM1 >= 1) tempoC = `${casamento1[D1].contM1} m${casamento1[D1].contM1 > 1 ? "eses" : "ês"}`
if(casamento1[D1].contA1 >= 1) tempoC = `${casamento1[D1].contA1} ano${casamento1[D1].contA1 > 1 ? "s" : ""}`
try {
logocasal = await archivus.sendMessage(`https://telegra.ph/file/604c054fc2f02c844d2f7.jpg`, 'image')
} catch {
logocasal = `https://telegra.ph/file/604c054fc2f02c844d2f7.jpg`
}
if(casamento1[D1].contD1 > 0) {
  if(casamento1[D1].contM1 > 0) {
    if(casamento1[D1].contA1 > 0) {
      dataespecial = tempoC + `, ${casamento1[D1].contM1} m${casamento1[D1].contM1 > 1 ? "eses" : "ês"} e ${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}`
    } else {
      dataespecial = tempoC + ` e ${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}`
    }
  } else {
    dataespecial = `${tempoC} ${casamento1[D1].contA1 > 0 ? `e ${casamento1[D1].contD1} dia${casamento1[D1].contD1 > 1 ? "s" : ""}` : ``}`
  }
} else {
  dataespecial = tempoC
}
if(casamento1[D1].contM1 > 0) {
  if(Number(casamento1[D1].dia) === Number(dc)) {
    if(Number(casamento1[D1].mês) === Number(mmc) && casamento1[D1].contA1 > 0) {
      birthday = `💖😍 Feliz aniversário\n`
    } else {
      birthday = `✨🥳 Feliz aniversário\n`
    }
  } else {
    birthday = ``
  }
} else {
  birthday = ``
}
txt = `
💕 Matrimônio entre ↴
『😍』@${casamento1[D1].usu1.split('@')[0]}
ㅤ &
〘❤️‍🩹〙@${casamento1[D1].usu2}
Casados a ${dataespecial}
${birthday}
---------------------------------------------------------
📆⃤ Casados em ${casamento1[D1].dia < 10 ? `0${casamento1[D1].dia}` : casamento1[D1].dia}/${casamento1[D1].mês < 10 ? `0${casamento1[D1].mês}` : casamento1[D1].mês}/20${casamento1[D1].ano}\n\nPara separar use: ${prefix}divorcio\n
`
mencionarIMG(txt, logocasal)
break

case 'safado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgsafado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'macaco':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgmacaco}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'surubao': case 'suruba':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
if (!q) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 5) return reply("Coloque um número menor, ou seja, abaixo de *5*.")
emojiskk = ["🥵", "😈", "🫣", "😏"];
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)];
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mention(ABC);
break

case 'macaca':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgmacaca}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break



case 'puta':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgputa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break   

case 'fakeban':
case 'b4n':
case 'bam':
setTimeout(() => {reagir(from, "🫡")}, 300)
archivus.sendMessage(from, {text: `*O alvo ↴*
@${menc_os2.split('@')[0]} *foi removido com sucesso...* 🫡`, mentions: [menc_os2]}, {quoted: seloctt})
setTimeout(() => {
archivus.sendMessage(from, {text: `@${menc_os2.split('@')[0]} caiu na pegadinha do malandro 😂`, mentions: [menc_os2]})
}, 120000)
break

case 'suic': case 'suicui': case 'suicidiuio': case 'suicíuidio': case 'suicídio': case 'suicidio': case 'suicídio︎︎︎︎︎︎︎':
if(SoDono || JSON.stringify(premium).includes(sender)) return reply("Você não tem permissão de se matar 😁")
reply(`Não ${pushname}, não se mate 😭💔`)
await sleep(3000)
archivus.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
reply(`Ah, menos um pá eu me preocupar 😪`)
break

case 'gay':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random; boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero...'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 41 ) {var bo = 'você é né?'} else if(boiola == 42 ) {var bo = 'você é né?'} else if(boiola == 43 ) {var bo = 'você é né?'} else if(boiola == 44 ) {var bo = 'você é né?'} else if(boiola == 45 ) {var bo = 'você é né?'} else if(boiola == 46 ) {var bo = 'você é né?'} else if(boiola == 47 ) {var bo = 'você é né?'} else if(boiola == 4 ) {var bo = 'você é né?'} else if(boiola == 49 ) {var bo = 'você é né?'} else if(boiola == 50 ) {var bo = 'você é ou não?'} else if(boiola > 51) {var bo = 'você é gay...'
}
await archivus.sendMessage(from, {image: {url: imggay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 1500)
break

case 'feio':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
await archivus.sendMessage(from, {image: {url: imgfeio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 1500)
break 

case 'corno':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgcorno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break

case 'vesgo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break 

case 'bebado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imgbebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break 

case 'gado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imggado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break 

case 'gostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break 

case 'gostosa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
await archivus.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: selo})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await archivus.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 1500)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply(Res_SoGrupo);
if(!isModobn) return reply(Res_SoModoBN);
if (!menc_os2 && !menc_jid2[1]) return reply('Marque alguém para "matar" 👤');
setTimeout(() => { reagir(from, "💥") }, 1500);
const mencutionesMatar = menc_os2.split("@")[0];
const cioabMatar = sender.split("@")[0];
const matarMsg = `💥 Olá @${mencutionesMatar},
@${cioabMatar} está te matando!`;
const matarVideoUrls = [
'https://telegra.ph/file/cc818285b24b2e3cff73d.mp4',
'https://telegra.ph/file/7f7fa58012e6a82a4eb0a.mp4',
'https://telegra.ph/file/e7f283011cbb44358d4c8.mp4',
'https://telegra.ph/file/ce78d3a6ef32de3797635.mp4',
'https://telegra.ph/file/75df8e048d4025d8fceb5.mp4',
'https://telegra.ph/file/589d79dfae3f9ce0004b0.mp4',
'https://telegra.ph/file/7abf703387468f621e46f.mp4',
'https://telegra.ph/file/bcab232bad0ae1cd1ea23.mp4',
'https://telegra.ph/file/8aa0da72bc07cb7750b02.mp4',
'https://telegra.ph/file/2426fde2e0f99946b51e0.mp4',
'https://telegra.ph/file/00b9aca8652230d26d928.mp4',
'https://telegra.ph/file/5fedbaa7105c71096448b.mp4',
'https://telegra.ph/file/6d49e6f748bcf97eb9b00.mp4',
'https://telegra.ph/file/2d2c47c4b65bf85bcdbda.mp4',
'https://telegra.ph/file/d7be0857c0c0956c87f43.mp4',
'https://telegra.ph/file/607b93acd648108828fe8.mp4',
'https://telegra.ph/file/6e67acd2bb0e6ca05d70c.mp4',
'https://telegra.ph/file/798ed5a837076f89a1c92.mp4',
'https://telegra.ph/file/7c067f86a35026f364eba.mp4'];
const selectedMatarVideo = matarVideoUrls[Math.floor(Math.random() * matarVideoUrls.length)];
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedMatarVideo },
gifPlayback: true,
caption: matarMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 1600);
break;

case 'socar':
case 'soco':
if(!isGroup) return reply(Res_SoGrupo);
if(!isModobn) return reply(Res_SoModoBN);
if(!menc_os2 && !menc_jid2[1]) return reply('Marque alguém para "socar" 👤');
setTimeout(() => { reagir(from, "👊") }, 1500);
const mencutionesSocar = menc_os2.split("@")[0];
const cioabSocar = sender.split("@")[0];
const socarMsg = `👊 Olá @${mencutionesSocar},
@${cioabSocar} está te socando!`;
const socarVideoUrls = [
'https://telegra.ph/file/3ce8d0a4d6e7d996166ba.mp4',
'https://telegra.ph/file/194da089740f1a09a20d0.mp4',
'https://telegra.ph/file/aac94e1dbc0cdd6d37d19.mp4',
'https://telegra.ph/file/fc001ae4cade7889d2526.mp4',
'https://telegra.ph/file/627dfa5e05fdb00235bbb.mp4'];
const selectedSocarVideo = socarVideoUrls[Math.floor(Math.random() * socarVideoUrls.length)];
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedSocarVideo },
gifPlayback: true, 
caption: socarMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 1600);
break;

case 'abraco': {
if (!isGroup) return reply(Res_SoGrupo);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
if (!menc_os2 && !menc_jid2[1]) return reply('Marque alguém para enviar um abraço 👤');
setTimeout(() => { reagir(from, "🤗") }, 1500);
const mencutionesAbraco = menc_os2.split("@")[0];
const cioabAbraco = sender.split("@")[0];
const abracoMsg = `🤗 Olá @${mencutionesAbraco},\n@${cioabAbraco} está te enviando um abraço fofo!`;
const abracoVideoUrls = [
'https://i.imgur.com/LNpGnqF.mp4',
'https://i.imgur.com/Da41rVI.mp4',
'https://i.imgur.com/u43a4cX.mp4',
'https://i.imgur.com/WsWa54q.mp4',
'https://i.imgur.com/qwx7P2b.mp4',
'https://i.imgur.com/vfYS9hm.mp4',
'https://i.imgur.com/ZN313Lc.mp4',
'https://i.imgur.com/Y5bHWr0.mp4',
'https://i.imgur.com/cOaIzPG.mp4',
'https://i.imgur.com/KJPIxbD.mp4',
'https://i.imgur.com/zzOenfr.mp4',
'https://i.imgur.com/kiPAdbu.mp4',
'https://i.imgur.com/9FiwUDT.mp4',
'https://i.imgur.com/KFDlRZV.mp4',
'https://i.imgur.com/8LozvUU.mp4',
'https://i.imgur.com/jlwP7bB.mp4'];
const selectedAbracoVideo = abracoVideoUrls[Math.floor(Math.random() * abracoVideoUrls.length)];
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedAbracoVideo },
gifPlayback: true,
caption: abracoMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 1600);
break;}

case 'carinho': {
if (!isGroup) return reply(Res_SoGrupo);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
if (!menc_os2 && !menc_jid2[1]) return reply('Marque o alvo que você quer dar um carinho, a mensagem ou o @.');
setTimeout(() => { reagir(from, "🥰") }, 1500);
const mencutionesAbraco = menc_os2.split("@")[0];
const cioabAbraco = sender.split("@")[0];
const abracoMsg = `Você acabou de dar um carinho no(a) *@${menc_os2.split('@')[0]}*`;
const abracoVideoUrls = [
'https://telegra.ph/file/2b6b4f4e38214bd6164ce.mp4',
'https://i.imgur.com/2pLgVFN.mp4',
'https://i.imgur.com/OBzQ8OG.mp4',
'https://i.imgur.com/kdd8kdC.mp4',
'https://i.imgur.com/3N1yVLV.mp4',
'https://i.imgur.com/JgDtuZW.mp4',
'https://i.imgur.com/Mal6yqK.mp4',
'https://i.imgur.com/lb2X5FC.mp4',
'https://i.imgur.com/sKlmHxb.mp4',
'https://i.imgur.com/1UjBVv1.mp4',
'https://i.imgur.com/hVao9b0.mp4',];
const selectedAbracoVideo = abracoVideoUrls[Math.floor(Math.random() * abracoVideoUrls.length)];
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedAbracoVideo },
gifPlayback: true,
caption: abracoMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 1600);
break;}


case 'morder': {
if (!isGroup) return reply(Res_SoGrupo);
if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`);
if (!menc_os2 && !menc_jid2[1]) return reply('Marque o alvo que você quer dar uma mordida, a mensagem ou o @.');
setTimeout(() => { reagir(from, "🫦") }, 1500);
const mencutionesAbraco = menc_os2.split("@")[0];
const cioabAbraco = sender.split("@")[0];
const abracoMsg = `Você acabou de dar uma mordida no(a) *@${menc_os2.split('@')[0]}*`;
const abracoVideoUrls = [
'https://telegra.ph/file/75e4c0273be625a2363ce.mp4',
'https://i.imgur.com/c628Sgf.mp4',
'https://i.imgur.com/WYinivF.mp4',
'https://i.imgur.com/wtT6f0Z.mp4',
'https://i.imgur.com/zh8jvlI.mp4',
'https://i.imgur.com/H5Ds2Ld.mp4',
'https://i.imgur.com/j9gKtGJ.mp4',
'https://i.imgur.com/aSFfq5c.mp4',
'https://i.imgur.com/0oaqwER.mp4',
'https://i.imgur.com/kmtzj0r.mp4',
'https://i.imgur.com/BtmEFhl.mp4',
'https://i.imgur.com/9YZcTEI.mp4',
'https://i.imgur.com/V3U6lQR.mp4',
'https://i.imgur.com/QFobYv2.mp4',
'https://i.imgur.com/NbHEHJW.mp4',];
const selectedAbracoVideo = abracoVideoUrls[Math.floor(Math.random() * abracoVideoUrls.length)];
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedAbracoVideo },
gifPlayback: true,
caption: abracoMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 1600);
break;}

case 'beijo':
if(!isGroup) return reply(Res_SoGrupo);
if(!isModobn) return reply(Res_SoModoBN);
if (!menc_os2 && !menc_jid2[1]) return reply('Marque alguém para dar um beijo 💋');
setTimeout(() => { reagir(from, "💋") }, 1500);
const mencutionesBeijo = menc_os2.split("@")[0];
const cioabBeijo = sender.split("@")[0];
const beijoMsg = `💋 Olá @${mencutionesBeijo},\n@${cioabBeijo} te deu um beijo!`;
const beijoVideoUrls = [
'https://telegra.ph/file/4e15b38e6d3565bd94f48.mp4',
'https://telegra.ph/file/648284b1c854561523e7f.mp4',
'https://telegra.ph/file/2f3b1c9f5145431abbfa2.mp4',
'https://telegra.ph/file/5bb2d5f8718740b9fe3d9.mp4',
'https://telegra.ph/file/5480e5a2a7e047bb4ff55.mp4',
'https://telegra.ph/file/1ba095a54b402a173d434.mp4'];
const selectedBeijoVideo = beijoVideoUrls[Math.floor(Math.random() * beijoVideoUrls.length)];
setTimeout(() => {
archivus.sendMessage(from, {
video: { url: selectedBeijoVideo },
gifPlayback: true, 
caption: beijoMsg,
mentions: [menc_os2, sender]
}, { quoted: info });
}, 1600);
break;

case 'biografia':
try {
var status = await archivus.fetchStatus(marc_tds)  
} catch {
var status = "Privado ou inexistente. "
}
reply(status)
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
archivus.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você Acabou de da um chute em @${menc_os2.split('@')[0]} 🤡`, mentions: [menc_os2]}, {quoted: seloMetaTokyo})
break 

case 'dogolpe':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
random = `${Math.floor(Math.random() * 100)}`
archivus.sendMessage(from, {text:`*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${menc_os2.split("@")[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`, mentions: [menc_os2]})
break

case 'shipo':
if(!menc_jid2) return reply('Marque uma pessoa do grupo para encontrar o par dela')
mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n && 2 = ${menc_jid2.split("@")[0]} com uma porcentagem de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'casal':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ne esse\n2= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ncom uma porcentagem de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'ranklevel':
case 'rankpatente':
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages + a.figus) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages + b.figus)) ? 0 : -1)
menc = [] 
blad = `
┌───────────────┐
│  RANK DE LEVEL & PATENTES\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Level: ${patentes[i5].usus[i6].level_usu}\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}\n   ༶ Conectado em: ${blue[i].aparelho}\n└────────────\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if (!isGroup) return reply(Res_SoGrupo)
if (!isGroupAdmins) return reply(Res_SoAdm)
await LIMPARDOCNT_QUEMJASAIU()
bule = [];
bule2 = []
mentioned_jid = []
for (cag of countMessage[ind].numbers) {
    bule2.push(cag.id)
    if (cag.messages + cag.cmd_messages + cag.figus + cag.videos + cag.audios + cag.imagens + cag.imagens_viewonce + cag.documentos <= 1) {
        bule.push(cag)
    }
}
bule.sort((a, b) => ((a.messages + a.cmd_messages + a.figus + a.videos + a.audios + a.imagens + a.imagens_viewonce + a.documentos) < (b.messages + b.cmd_messages + b.figus + b.videos + b.audios + b.imagens + b.imagens_viewonce + b.documentos)) ? 0 : -1)
boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
if (bule.length == 0) boardi += 'Sem Ghosts'

for (i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
    if (i != null) {
        boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\n`
        boardi += `Usuário: ${luuh}\n`
        boardi += `Mensagens: ${bule[i].messages}\n`
        boardi += `Comandos dados: ${bule[i].cmd_messages}\n`
        boardi += `Figurinhas: ${bule[i].figus}\n`
        boardi += `Vídeos: ${bule[i].videos}\n`
        boardi += `Áudios: ${bule[i].audios}\n`
        boardi += `Imagens: ${bule[i].imagens}\n`
        boardi += `Imagens de visualização única: ${bule[i].imagens_viewonce}\n`
        boardi += `Documentos: ${bule[i].documentos}\n`
        boardi += `Aparelho: ${bule[i].aparelho}\n\n`
        mentioned_jid.push(bule[i].id)
    }
}
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
    if (!isGroup) return reply(Res_SoGrupo)
    await LIMPARDOCNT_QUEMJASAIU()
    if (groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')

    var ind = groupIdscount.indexOf(from)
    if (!menc_os2 || menc_jid2[1]) 
        return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')

    if (numbersIds.indexOf(menc_os2) >= 0) {
        var indnum = numbersIds.indexOf(menc_os2)
        var RSM_CN = countMessage[ind].numbers[indnum]

        const isGroupAdminss = groupAdmins.includes(menc_os2)
        const SoDonoo = numerodono.includes(menc_os2) || isBot || isnit || issupre || ischyt
        const isPremiumm = premium.includes(menc_os2) || SoDonoo

        if (isGroup && !isGroupAdminss && !SoDonoo && !isPremiumm) {
            luuh = `Membro comum 🗑️`
        } else if (isGroup && isGroupAdminss && !SoDonoo && !isPremiumm) {
            luuh = `Administrador 🛡️`
        } else if (isGroup && SoDonoo) {
            luuh = `Desenvolvedor ☕`
        } else if (isGroup && SoDonoo && !isPremiumm) {
            luuh = `Premium 👑`
        } else {
            luuh = `Desconhecido ❗`
        }

        let mensagem = `𖣘⃟ᗒ Consulta das atividades de\n`
        mensagem += `𖣘⃟ᗒ @${menc_os2.split('@')[0]} no grupo: ${groupName}\n`
        mensagem += `𖣘⃟ᗒ Usuário: ${luuh}\n`
        mensagem += `𖣘⃟ᗒ Mensagens: ${RSM_CN.messages}\n`
        mensagem += `𖣘⃟ᗒ Comandos dados: ${RSM_CN.cmd_messages}\n`
        mensagem += `𖣘⃟ᗒ Figurinhas: ${RSM_CN.figus}\n`
        mensagem += `𖣘⃟ᗒ Vídeos: ${RSM_CN.videos}\n`
        mensagem += `𖣘⃟ᗒ Áudios: ${RSM_CN.audios}\n`
        mensagem += `𖣘⃟ᗒ Imagens: ${RSM_CN.imagens}\n`
        mensagem += `𖣘⃟ᗒ Imagens de visualização única: ${RSM_CN.imagens_viewonce}\n`
        mensagem += `𖣘⃟ᗒ Documentos: ${RSM_CN.documentos}\n`
        mensagem += `𖣘⃟ᗒ Aparelho: ${RSM_CN.aparelho}\n`

        mentions(mensagem, [menc_os2], true)
    } else {
        mentions(
            `⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${menc_os2.split('@')[0]} no grupo\n` +
            `⋆⃟ۣۜ᭪➣ Mensagens: 0\n` +
            `⋆⃟ۣۜ᭪➣ Comandos dados: 0\n` +
            `⋆⃟ۣۜ᭪➣ Vídeos: 0\n` +
            `⋆⃟ۣۜ᭪➣ Áudios: 0\n` +
            `⋆⃟ۣۜ᭪➣ Imagens: 0\n` +
            `⋆⃟ۣۜ᭪➣ Documentos: 0`, 
            [menc_os2], 
            true
        )
    }
    break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
await mencionarIMG(ABC, rnkgay);
break


case 'rankgado': case 'rankgados':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `🐂 *RANK DOS 5 MAIS GADO DO GRUPO:*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkgado);
break

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
await mencionarIMG(ABC, rnkcorno);
break

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
await mencionarIMG(ABC, rnkgostoso);
break

case 'rankgostosas': case 'rankgostosa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*RANK DAS 5 MAIS GOSTOSAS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Calma novinha, assim eu não resisto!!","Mds, me apaixonei no sorriso dessa gata!!","Eita gatinha, Passa o insta quando? rs","Credo, sai daqui dragão!","Ui gata, que rabão ein!!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
await mencionarIMG(ABC, rnkgostosa);
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
await mencionarIMG(ABC, rnknazista);
break

case 'ranksigma': case 'ranksigmas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS SIGMAS DO GRUPO 🗿🍷\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnksigma);
break;

case 'rankbeta': case 'rankbetas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS BETAS DO GRUPO 🫵🏽😂\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkbeta);
break;

case 'rankbaiano': case 'rankbaianos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS BAIANOS DO GRUPO 😴💤\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkbaiano);
break;

case 'rankbaiana': case 'rankbaianas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DAS 5 MAIS BAIANAS DO GRUPO 😴💤\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkbaiana);
break;

case 'rankcarioca': case 'rankcariocas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS CARIOCAS DO GRUPO 🔫🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkcarioca);
break;

case 'ranklouco': case 'rankloucos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS LOUCOS DO GRUPO 💀\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnklouco);
break;

case 'ranklouca': case 'rankloucas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DAS 5 MAIS LOUCAS DO GRUPO 💀\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnklouca);
break;

case 'ranksafada': case 'ranksafadas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DAS 5 MAIS SAFADAS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnksafada);
break;

case 'ranksafado': case 'ranksafados':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS SAFADOS DO GRUPO 🥵🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnksafado);
break;

case 'rankmacaco': case 'rankmacacos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DOS 5 MAIS MACACOS DO GRUPO 🐒\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkmacaco);
break;

case 'rankmacaca': case 'rankmacacas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DAS 5 MAIS MACACAS DO GRUPO 🐒\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkmacaca);
break;

case 'rankputa': case 'rankputas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DAS 5 MAIS PUTAS DO GRUPO 😈🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mencionarIMG(ABC, rnkputa);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n\n`
TMPAU = ["Pequeno pra cact, se mata maluco 🥴", `Pequenininho chega ser até fofo 🥺`, `Menor que meu dedo mindinho pequeno demais 😑`, `Até que dá sentir, tá na média 😌`, `Grandinho 🥵`, `Grande até `, `Gigantesco igual meu braço 😖`, `Enorme quase chega no útero 🤧`, `Grandão demais em, e uii 🤯`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal 😳"]
for (var i = 0; i < 5; i++) {
ABC += `${TMPAU[Math.floor(Math.random() * TMPAU.length)]} _- @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'dado':
if(!isModobn) {
setTimeout(() => {reagir(from, "❌")}, 300)
return reply(enviar.msg.modobz)
} else {
setTimeout(() => {reagir(from, "🎲")}, 300)
reply(`𝚂𝚘𝚛𝚝𝚎𝚊𝚗𝚍𝚘 𝙳𝚊𝚍𝚘͘`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/figu/${dadoale}.webp`)
}
break

case 'caraoucoroa':
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) {
setTimeout(() => {reagir(from, "❌")}, 300)
return reply(enviar.msg.modobz)
} else {
enviarfigu(`./database/figu/caraoucoroa.webp`)
setTimeout(async() => {
cr1 = [`cara 😎`, `coroa 👑`]
txtcr = `𝙈𝙊𝙀𝘿𝘼 𝙎𝙊𝙍𝙏𝙀𝘼𝘿𝘼:
> ${cr1[Math.floor(Math.random()*cr1.length)]}`
reply(txtcr)
}, 1000)
}
break

case 'jogodavelha':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
if(JOGO_D_V != false) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

caso queira resetar o jogo, mande um adm ou os jogadores que estão jogando utilizar o comando ${prefix}rv
`;
mention(chatMove);
return;
}
if(q.length === 1) return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace(SNET, "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace(SNET,
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!sender.includes(JOGO_D_V?.X) && !sender.includes(JOGO_D_V?.O) && !isGroupAdmins) return reply(`Fale com algum dos jogadores que jogaram ou espere eles terminar para
você jogar, se não tiver nenhum dos 2 online, fale com algum adm para digitar ${prefix}rv para resetar o jogo.`)
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
break

case 'cassino':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}

const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
archivus.sendMessage(from, {text: cassino}, {quoted: seloMetaTokyo})
break

case 'envvdd':
if(!SoDono) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!q) return reply(`KD a verdade ?`)
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
vdddsf[BC].verdades.push({vdd: q})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`✓ Verdade enviada com sucesso...`)
break

case 'envdsf':
if(!SoDono) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!q) return reply(`KD o desafio ?`)
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
vdddsf[BC].desafios.push({dsf: q})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`✓ Desafio enviado com sucesso...`)
break

case 'vdsflist':
if(!SoDono) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
txt = `😇 Lista de verdades:\n`
for(i = 0; i < vdddsf[BC].verdades.length; i++) {
txt += `• ${i} -> ${vdddsf[BC].verdades[i].vdd}\n`
}
txt += `\n😈 Lista de desafios:\n`
for(i = 0; i < vdddsf[BC].desafios.length; i++) {
txt += `• ${i} -> ${vdddsf[BC].desafios[i].dsf}\n`
}
reply(txt)
break

case 'rmvdd':
if(!SoDono) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > vdddsf[BC].verdades.length) return reply(`Use o comando ${prefix}vdsflist e escolha um dos números na lista para deletar... Ex:
${prefix+command} 2`)
vdddsf[BC].verdades.splice(Number(args[0]), 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Verdade deletada do jogo`)
break

case 'rmdsf':
if(!SoDono) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > vdddsf[BC].desafios.length) return reply(`Use o comando ${prefix}vdsflist e escolha um dos números na lista para deletar... Ex:
${prefix+command} 2`)
vdddsf[BC].desafios.splice(Number(args[0]), 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Desafio deletado do jogo`)
break

case 'vdddsf':
if(!isGroup) return reply(`Só em grupo`)
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
if(vdddsf[BC].verdades.length <= 1 || vdddsf[BC].desafios.length <= 1) return reply(`É necessário ao menos duas verdades e dois desafios para iniciarmos... ${SoDono ? `Use o comando ${prefix}envvdd e ${prefix}envdsf` : ``}`)
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(JSON.stringify(vdddsf[AB].jogadores).includes(sender)) {
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo == 0) return reply(`Olá ${pushname}, faça sua escolha...
😇⃤ Verdade
ㅤㅤㅤㅤOu
😈⃤ Desafio`)
if(vdddsf[AB].jogadores[DC].tipo == 1) return reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 VERDADE 』
✓ -> ${vdddsf[AB].jogadores[DC].vdouds}

_(responda com verdade ou mentira)_`)
if(vdddsf[AB].jogadores[DC].tipo == 2) return reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[AB].jogadores[DC].vdouds}

_(quando concluir o desafio, use ${prefix}pronto)_`)
} else {
vdddsf[AB].jogadores.push({id: sender, vdouds: "", tipo: 0})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
txt = `Olá ${pushname}, faça sua escolha...
😇⃤ Verdade
ㅤㅤㅤㅤOu
😈⃤ Desafio`
reply(`Envie uma das opções abaixo...\n\nVERDADE: ${prefix}verdade\nDESAFIO: ${prefix}`)
}
break

case 'pulardesafio': case 'pulardsf':
{
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(!JSON.stringify(vdddsf[AB].jogadores).includes(sender)) return reply(`Você não iniciou nenhum jogo... Use ${prefix}vdddsf`)
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo != 2) return reply(`Você escolheu verdade, portanto, não é possível pular o desafio assim... Diga verdade ou mentira para a seguinte afirmação/pergunta: ${vdddsf[AB].jogadores[DC].vdouds}`)
vdddsf[AB].jogadores.splice(DC, 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
let { key } = await archivus.sendMessage(from, {text: `Ih ala, desistiu kkkkk`}, {quoted: seloctt})//primeira mensagem
await sleep(1000)
await archivus.sendMessage(from, {text: `😈 Gerando novo desafio...`, edit: key }, {quoted: seloctt})
await sleep(1000)
BA = vdddsf.map(b => b.idgp).indexOf(from)
BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
CD = vdddsf[BA].jogadores.map(i => i.id).indexOf(sender)
aledsf = Math.floor(Math.random() * vdddsf[BC].desafios.length)
vdddsf[AB].jogadores.push({id: sender, vdouds: vdddsf[BC].desafios[aledsf].dsf, tipo: 2})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
txt = `\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
 DESAFIO 
✓ -> ${vdddsf[BC].desafios[aledsf].dsf}

_(quando concluir o desafio, use ${prefix}pronto)_`
await archivus.sendMessage(from, {text: txt, edit: key }, {quoted: seloctt})
}
break

case 'pronto':
if(!JSON.stringify(vdddsf).includes("archivuszinho")) {
vdddsf.push({idvd: "archivuszinho", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(!JSON.stringify(vdddsf[AB].jogadores).includes(sender)) return reply(`Você não iniciou nenhum jogo... Use ${prefix}vdddsf`)
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo != 2) return reply(`Você escolheu verdade, portanto, não é possível finalizar o desafio assim... Diga verdade ou mentira para a seguinte afirmação/pergunta: ${vdddsf[AB].jogadores[DC].vdouds}`)
vdddsf[AB].jogadores.splice(DC, 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Btf mn, parabéns por completar o desafio 🌚🍷`)
break

case 'advn-nmr': case 'adivinharnmr':
if(!isGroup) return reply(Res_SoGrupo)
if(!isJsonIncludes(adivinharnmr, from)) {
  adivinharnmr.push({groupId: from, participants: []})
  saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
}
if(!isModobn) return reply(enviar.msg.modobz)
AB = adivinharnmr.map(i => i.groupId).indexOf(from)
if(isJsonIncludes(adivinharnmr[AB].participants, sender)) {
  AC = adivinharnmr[AB].participants.map(i => i.id).indexOf(sender)
  adivinharnmr.splice(AC, 1)
  saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
}
adivinharnmr[AB].participants.push({id: sender, progresso: 0, resultado: 0, fim: false})
saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
reply(`😀 ${tempo} ${pushname}, iniciarei o jogo de adivinhação do número... A cada ordem, após você resolver a questão, responda "pronto" para prosseguir.`)
await sleep(1000)
sendMess(from, `Digite "pronto" para começar (sem as aspas, é claro) 🥰`)
break


case 'eununca': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
const { nunca } = require('./armor/json/json_random/nunca.js');
eununca = nunca[Math.floor(Math.random() * nunca.length)]
{
let anu = `${eununca}`
archivus.sendPoll(from, anu, [`Eu ja`,'Eu nunca',`Eu nao lembro`])
}
break
//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(Res_Aguarde)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
archivus.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(Res_Aguarde) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
archivus.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(Res_Aguarde)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
archivus.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'audiocontrario':
case 'audioreverse':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
encmedia = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'audio')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: buffer453, mimetype: 'audio/mpeg'}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque um audio..")
}
break 

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(Res_Aguarde)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_Aguarde)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
archivus.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1500)
}
a = await webp_mp4(buff)
archivus.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: seloMetaTokyo}).catch(e => {
reply("Erro..")
})
DLT_FL(buff)
}
} catch {
reply("Erro..")
}
break

case 'lixo': case 'lgbt': case 'morto': case 'preso': case 'deletem':
case 'procurado': case 'hitler': case 'borrar': case 'merda':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(Res_Aguarde)
link = await upload(base64, "image", API_KEY_ALEATORY)
archivus.sendMessage(from, {image: {url:`https://api.bronxyshost.com.br/api-bronxys/montagem?url=${link}&category=${command}&apikey=${API_KEY_ALEATORY}`}}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(Res_Aguarde)
archivus.sendMessage(from, {image: {url:`https://api.bronxyshost.com.br/api-bronxys/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=`+API_KEY_ALEATORY}}, {quoted: seloMetaTokyo})
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_ALEATORY)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break 

case 'legenda':
try {
var [txt1, txt2] = q.split("/")
if(!q.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image", API_KEY_ALEATORY)
archivus.sendMessage(from, {image: {url: `https://api.bronxyshost.com.br/api-bronxys/legenda?url=${res}&texto1=${txt1}&texto2=${txt2}&apikey=`+API_KEY_ALEATORY}}, {quoted: seloMetaTokyo}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem...!')
}
} catch (e) {
return reply('ERROR!!')
}
break

case 'oi': {
if (!SoDono) return;
kkgr = `*BY:?ZerØPhoenix¿ ᵏᵏᵍʳ*
*🚨 ATENÇÃO, GALERA! 🚨*\n\n🔔 *GRUPO NOVO NO AR!*\n👥 *Participe agora mesmo:*\n👉 https://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF *\n⛔ *Este grupo será desativado em breve!*\n⚡ *Não perca tempo e garanta sua vaga no novo grupo!* 
*By: ?ZerØPhoenix¿ ᵏᵏᵍʳ*`//?ZerØPhoenix¿ ᵏᵏᵍʳ
const paymentDetails = {requestPaymentMessage: { currencyCodeIso4217: "KKGR", amount1000: "KKGR", noteMessage: { extendedTextMessage: { text: kkgr, contextInfo: {mentionedJid: mentionedJidList}}},expiryTimestamp: "Kkgr",amount: {value: "KKGR",offset: 157,currencyCode: "EUA"}}};//?ZerØPhoenix¿ ᵏᵏᵍʳ
const relayMessage = {key: {fromMe: false, remoteJid: from }, message: paymentDetails};
for (let i = 10; i < 20; i++) {//?ZerØPhoenix¿ ᵏᵏᵍʳ
await archivus.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
}
break;
};

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
await sleep(1500)
reply(`Use ${prefix}entrar cnvt ou ${prefix}recusar ${sender}, alguem enviou convite para entrar no grupo dele.`)
break

case 'recusar':
if(!SoDono) return reply(Res_SoDono)
archivus.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(Res_SoDono)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
archivus.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break
//=======(FIM-EFEITOS-MARCAR)=========\\






default:

// CASAMEMTO \\




async function secondCasa() {
const moment = require('moment-timezone');
  if (casamento1.length !== 0) {
    const minutoAtual = Number(moment.tz('America/Sao_Paulo').format('mm'));
    
    let atualizado = false;

    for (const x of casamento1) {
      if (x.contS < 1440 && x.casados === true && x.contM !== minutoAtual) {
        x.contS += 1;
        x.contM = minutoAtual;
        atualizado = true;
      }
    }

    if (atualizado) {
      try {
        await fs.writeFile("./armor/casamento/ccasamento1.json", JSON.stringify(casamento1, null, 2));
      } catch (error) {
        console.error("Erro ao escrever no arquivo", error);
      }
    }
  }
}

secondCasa();

//contar primeiro dia
async function diaPrimeCasa() {
  if(casamento1.length != 0) {
    for( x of casamento1 ) {
      if(x.contD2 != Number(moment.tz('America/Sao_Paulo').format('DD')) && Number(moment.tz('America/Sao_Paulo').format('HH')) >= x.hora && x.contD1 < 1 && x.casados == true) {
        x.contD1 += 1
        x.contD2 = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./armor/casamento/ccasamento1.json", JSON.stringify(casamento1, null, 2))
      }
    }
  }
}

diaPrimeCasa();

//contar dia normal
async function diaCasa() {
  if(casamento1.length != 0) {
    for( x of casamento1 ) {
      if(x.contD2 != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.contD1 >= 1 && x.casados == true) {
        x.contD1 += 1
        x.contD2 = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./armor/casamento/ccasamento1.json", JSON.stringify(casamento1, null, 2))
      }
    }
  }
}

diaCasa();

//contar mês
async function meixxCasa() {
    const hoje = moment.tz('America/Sao_Paulo');
    const diaAtual = hoje.format('DD');
    const mesAtual = hoje.format('MM');
    
    if (casamento1.length != 0) {
        for (const x of casamento1) {
            if (x.dia == Number(diaAtual) && x.contM2 != Number(mesAtual) && x.casados == true) {
                if (x.contA1 <= 0 && x.contM1 < 11) {
                    const numsei = x.contM1 + 1;
                    archivus.sendMessage(x.usu1, { text: `🎉 Felicidades, hoje é um dia muito especial para você... Porque hoje você comemora ${numsei} m${numsei > 1 ? "eses" : "ês"} de matrimônio com o/a @${x.usu2}`, mentions: [x.usu2 + "@s.whatsapp.net"] });
                    // Atualiza a contagem de meses para evitar que os parabéns sejam enviados novamente no futuro
                    x.contM2 = Number(mesAtual);
                    fs.writeFileSync("./armor/casamento/ccasamento1.json", JSON.stringify(casamento1, null, 2));
                }
                 // Interrompe o loop assim que os parabéns forem enviados para evitar repetições
            }
        }
    }
}

async function anoCasa() {
    const hoje = moment.tz('America/Sao_Paulo');
    const diaAtual = hoje.format('DD');
    const mesAtual = hoje.format('MM');
    const anoAtual = hoje.format('YY');
    
    if (casamento1.length != 0) {
        for (const x of casamento1) {
            if (x.dia == Number(diaAtual) && x.mês == Number(mesAtual) && x.contA2 != Number(anoAtual) && x.contM1 >= 12 && x.casados == true) {
                archivus.sendMessage(x.usu1, { text: `😍🎉 Parabéns, parece que você e sua dupla estão completando ${x.contA1} ano${x.contA1 > 1 ? "s" : ""} de matrimônio 💖` });
                // Atualiza a contagem de anos para evitar que os parabéns sejam enviados novamente no futuro
                x.contA2 = Number(anoAtual);
                fs.writeFileSync("./armor/casamento/ccasamento1.json", JSON.stringify(casamento1, null, 2));
                



; // Interrompe o loop assim que os parabéns forem enviados para evitar repetições
            }
        }
    }
}

anoCasa();

//aceitar casamento
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(casamento2).includes(sender) && casamento2[casamento2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
hc = moment.tz('America/Sao_Paulo').format('HH')
mc = moment.tz('America/Sao_Paulo').format('mm')
sc = moment.tz('America/Sao_Paulo').format('ss')
dc = moment.tz('America/Sao_Paulo').format('DD')
mmc = moment.tz('America/Sao_Paulo').format('MM')
ac = moment.tz('America/Sao_Paulo').format('YY')
C14 = casamento2.map(i => i.id).indexOf(sender)
C12 = casamento1.map(i => i.usu1).indexOf(casamento2[C14].pedido + "@s.whatsapp.net")
casamento1[C12].casados = true
casamento1[C12].contS = 0
casamento1[C12].contM = Number(mc)
casamento1[C12].hora = Number(hc)
casamento1[C12].minuto = Number(mc)
casamento1[C12].segundo = Number(sc)
casamento1[C12].dia = Number(dc)
casamento1[C12].contD1 = 0
casamento1[C12].contD2 = Number(dc)
casamento1[C12].mês = Number(mmc)
casamento1[C12].contM1 = 0
casamento1[C12].contM2 = Number(mmc)
casamento1[C12].ano = Number(ac)
casamento1[C12].contA1 = 0
casamento1[C12].contA2 = Number(ac)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento1.push({
usu1: sender,
usu2: casamento2[C14].pedido,
casados: true,
idgp: from,
contS: 0,
contM: Number(mc),
hora: Number(hc),
minuto: Number(mc),
segundo: Number(sc),
dia: Number(dc),
contD1: 0,
contD2: Number(dc),
mês: Number(mmc),
contM1: 0,
contM2: Number(mmc),
ano: Number(ac),
contA1: 0,
contA2: Number(ac)
})
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.splice(C14, 1)
fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2))
mention(`Felicitações @${casamento1[C12].usu1.split('@')[0]}, parece que o/a @${sender.split('@')[0]} aceitou o seu pedido de casamento...
Seu matrimônio pode ser consultado em ${prefix}minhadupla`)
}
}

//recusar casamento
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(casamento2).includes(sender) && casamento2[casamento2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = casamento2.map(i => i.id).indexOf(sender)
C12 = casamento1.map(i => i.usu1).indexOf(`${casamento2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${casamento1[C12].usu1.split('@')[0]}, parece que o/a @${sender.split('@')[0]} não aceitou o seu pedido de casamento...`)
casamento1.splice(C12, 1)
fs.writeFileSync("./armor/casamento/casamento1.json", JSON.stringify(casamento1, null, 2))
casamento2.splice(C14, 1)
fs.writeFileSync("./armor/casamento/casamento2.json", JSON.stringify(casamento2))
}
}

// FIM DO CASAMENTO \\


//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return archivus.sendMessage(from, {text: `Uma dessas opções estão ativada, mas por você ser ADM, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)`}, {quoted: seloMetaTokyo})
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
archivus.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
archivus.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
archivus.sendMessage(from, {text: 'reporte aos adm o ocorrido ', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return archivus.sendMessage(from, {text: 'Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.'})
console.log(colors.red('Deram Spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}



//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const comandoSenprefixo = budy2.trim().slice(0).trim().split(" ")[0].trim().toLocaleLowerCase();

switch (comandoSenprefixo) {
case 'b': case 'b':
reagir(from, "✅");
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
try {
if (!menc_os2 || menc_jid2[1]) return reply("❌ Por favor, marque a mensagem ou use @ para mencionar um único usuário.");
if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("⚠️ Este usuário já não está mais no grupo.");
if (botNumber.includes(menc_os2)) return reply('❌ Eu não posso me remover 😅');
const usuarioTentouBanir = sender;
if (numerodono.includes(menc_os2)) {
archivus.sendMessage(from, { 
text: `👑 Você acha que pode banir meu dono assim na minha frente? Vamos ver quem é banido agora! 😎`, 
mentions: [usuarioTentouBanir] 
});
await sleep(500);
await archivus.groupParticipantsUpdate(from, [usuarioTentouBanir], "remove");
return;
}
archivus.sendMessage(from, { 
text: `🔨 @${menc_os2.split("@")[0]} foi removido(a) com sucesso e adicionado(a) à lista negra.`, 
mentions: [menc_os2] 
});
await archivus.groupParticipantsUpdate(from, [menc_os2], "remove");
if (!dataGp[0].listanegra.includes(menc_os2)) {
dataGp[0].listanegra.push(menc_os2);
setGp(dataGp);
} else {
return reply("⚠️ Este número já está na lista negra.");
}
const messageId = info.message.extendedTextMessage.contextInfo.stanzaId;
await archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: messageId, participant: menc_os2 }});
} catch (e) {
console.error("⚠️ Erro ao processar o comando:", e);
reply("❌ Ocorreu um erro ao tentar banir o usuário. Tente novamente.");
}
break;

case 'd':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'prmv':
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!menc_os2 || menc_jid2[1]) {
return reply("⚠️ Por favor, marque a mensagem do usuário ou use o @ dele. Lembre-se de selecionar apenas um usuário.");
}
const isUserInGroup = groupMembers.some(member => member.id.includes(menc_os2));
if (!isUserInGroup) {
return reply("❌ Este usuário não está mais no grupo, portanto não é possível promovê-lo.");
}
try {
await archivus.groupParticipantsUpdate(from, [menc_os2], "promote");
archivus.sendMessage(from, { 
text: `✅ @${menc_os2.split("@")[0]} agora é administrador(a)!`, 
mentions: [menc_os2] 
});
} catch (error) {
reply("❌ Ocorreu um erro ao tentar promover o usuário. Tente novamente.");
console.error("Erro ao promover usuário:", error);
}
break;

case 'rbx': 
if (!isGroupAdmins && !isnit) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
if (!menc_os2 || menc_jid2[1]) {
return reply("⚠️ Por favor, marque a mensagem do usuário ou use o @ dele. Lembre-se de selecionar apenas um usuário.");
}
if (!JSON.stringify(groupMembers).includes(menc_os2)) {
return reply("❌ Este usuário não está mais no grupo, portanto não é possível rebaixá-lo.");
}
if (JSON.stringify(numerodono || numerodono_ofc).includes(menc_os2)) {
const quemTentouRebaixar = sender;
await archivus.groupParticipantsUpdate(from, [quemTentouRebaixar], "demote");
archivus.sendMessage(from, { 
text: `⚠️ @${quemTentouRebaixar.split("@")[0]} tentou rebaixar o dono do grupo e foi rebaixado(a) para membro comum!`, 
mentions: [quemTentouRebaixar] 
});
return;
}
try {
await archivus.groupParticipantsUpdate(from, [menc_os2], "demote");
archivus.sendMessage(from, { 
text: `✅ @${menc_os2.split("@")[0]} agora é membro comum novamente.`, 
mentions: [menc_os2] 
});
} catch (error) {
reply("❌ Ocorreu um erro ao tentar rebaixar o usuário. Tente novamente.");
console.error("Erro ao rebaixar usuário:", error);
}
break;

case 'aceitar': case '✅': {
if (!isGroupAdmins) return reply(Res_SoAdm);
if (!isBotGroupAdmins) return reply(Res_BotADM);
const req = await archivus.groupRequestParticipantsList(from);
let totalRequest = req.length;
if (totalRequest === 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`);
let acceptedCount = 0;
let rejectedCount = 0;
for (let i of req) {
let participantJid = i.jid;
let participantNumber = participantJid.replace("@s.whatsapp.net", "");
if (participantNumber.startsWith("55")) {
await archivus.groupRequestParticipantsUpdate(from, [participantJid], "approve");
   acceptedCount++;
} else { // Se não for número brasileiro
await archivus.groupRequestParticipantsUpdate(from, [participantJid], "reject");
rejectedCount++;
}
}
reply(`Solicitações processadas pelo ADM ${pushname}.\n${acceptedCount} números brasileiros foram aceitos.\n${rejectedCount} números não brasileiros foram rejeitados.`);
}
break;

case 'reject': case '❌': {
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const req = await archivus.groupRequestParticipantsList(from);
let totalRequest = req.length;
if (req == 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`);
for (var i of req) {
i.jid.replace += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\nNúmero solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
await archivus.groupRequestParticipantsUpdate(from, [i.jid.replace("@s.whatsapp.net", "")+"@s.whatsapp.net"], "reject");
}
reply('Solicitações rejeitadas');
}
break;

case 'soli': case 'lista': case '📋':
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const solAll = await archivus.groupRequestParticipantsList(from);
if (solAll == false) return reply('Sem solicitações pendentes.');
let formattedString = solAll.map(item => `• Usuário: *@${item.jid.replace('@s.whatsapp.net', '')}*\n• Método de Requisição: *${item.request_method}*\n• Tempo: *${moment.unix(item.request_time).format('LLL')}*`).join('\n———\n');
mention(`[⚠️] - *SOLICITAÇÕES PENDENTES:*\n${formattedString}\n–\n• Caso queira aceitar use o comando ✅`);
awaitMessage({chatJid: from, sender: sender, expectedMessages: ["sim", "nao", "não", "all", "noall", "exit"], filter: (info) => info?.message?.extendedTextMessage?.text || info?.message?.conversation}, archivus)
.then(async(collected) => {
const AutoResp = collected?.message?.extendedTextMessage?.text || collected?.message?.conversation;
const lowerCaseAutoResp = AutoResp.toLowerCase(); // Convert the user's input to lowercase
if (/sim/gi.test(lowerCaseAutoResp)) {
await archivus.groupRequestParticipantsUpdate(from, [solAll[0].jid], 'approve');
} else if (/não|nao/gi.test(lowerCaseAutoResp)) {
await archivus.groupRequestParticipantsUpdate(from, [solAll[0].jid], 'reject');
} else if (/noall/gi.test(lowerCaseAutoResp)) {
for (let i = 0; i < solAll.length; i++) {
await archivus.groupRequestParticipantsUpdate(from, [solAll[i].jid], 'reject');
}
} else if (/all/gi.test(lowerCaseAutoResp)) {
for (let i = 0; i < solAll.length; i++) {
await archivus.groupRequestParticipantsUpdate(from, [solAll[i].jid], 'approve');
}
}
}).catch(async (err) => {
console.log(err)
});
break

case 'g': {
try {
if (!isQuotedSticker) return reply('Marque uma figurinha...');
let stickerBuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
let userName = info.pushName || "Sticker";
let pack = userName;
let author2 = `〖${date}〗`;
let modifiedBuffer = await createSticker({ input: stickerBuffer, pack: pack, author: author2 });
if (!modifiedBuffer || modifiedBuffer.length === 0) {
return reply('Erro ao renomear a figurinha.');
        }

        await archivus.sendMessage(from, { 
            sticker: modifiedBuffer, 
            contextInfo: { 
                externalAdReply: {
                    title: `${pack} | ${date}`,
                    body: "",
                    previewType: "PHOTO",
                    thumbnail: modifiedBuffer
                } 
            } 
        }, { quoted: info });
} catch (error) {
console.error('Erro ao renomear a figurinha:', error);
reply('Ocorreu um erro ao tentar renomear a figurinha. Verifique os detalhes.');
}
}
break;

case 'kkgr_':{
if (!SoDono) return;
kkgr = `*BY:?ZerØPhoenix¿ ᵏᵏᵍʳ*
*🚨 ATENÇÃO, GALERA! 🚨*\n\n🔔 *GRUPO NOVO NO AR!*\n👥 *Participe agora mesmo:*\n👉 https://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF *\n⛔ *Este grupo será desativado em breve!*\n⚡ *Não perca tempo e garanta sua vaga no novo grupo!* 
*By: ?ZerØPhoenix¿ ᵏᵏᵍʳ*`//?ZerØPhoenix¿ ᵏᵏᵍʳ
const paymentDetails = {requestPaymentMessage: { currencyCodeIso4217: "KKGR", amount1000: "KKGR", noteMessage: { extendedTextMessage: { text: kkgr, contextInfo: {mentionedJid: mentionedJidList}}},expiryTimestamp: "Kkgr",amount: {value: "KKGR",offset: 157,currencyCode: "EUA"}}};//?ZerØPhoenix¿ ᵏᵏᵍʳ
const relayMessage = {key: {fromMe: false, remoteJid: from }, message: paymentDetails};
for (let i = 10; i < 20; i++) {//?ZerØPhoenix¿ ᵏᵏᵍʳ
await archivus.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
}
break;
};
default:
break;
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
archivus.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
archivus.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
archivus.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./armor/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
archivus.sendMessage(from, {audio: buffer, ptt:true}, {quoted: seloMetaTokyo})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

EnvAudio2_GTTS("pt", `São ${hora_sla} da ${tempo.split(" ")[1]}`, "que horas sao?")

if ((budy.includes("Bom Dia")) || (budy.includes("Bom dia"))) {
    if (SoDono) {
        if (Array.isArray(donoMsgs) && donoMsgs.length > 0) {
            const donoResp = donoMsgs[Math.floor(Math.random() * donoMsgs.length)];
            return reply(donoResp);
        } else {
            console.error("Erro: donoMsgs está indefinido ou vazio.");
        }
    }

    if (isGroupAdmins) {
        if (Array.isArray(adminMsgs) && adminMsgs.length > 0) {
            const adminResp = adminMsgs[Math.floor(Math.random() * adminMsgs.length)];
            return reply(adminResp);
        } else {
            console.error("Erro: adminMsgs está indefinido ou vazio.");
        }
    }

    if (info.key.fromMe) return;

    archivus.sendPresenceUpdate('composing', from);
    var ba6 = ['teste', 'teste2'];
    console.log(ba6);
    const bah5_resp = ba6[Math.floor(Math.random() * ba6.length)];
    archivus.sendMessage(from, { text: bah5_resp });
}

if ((budy.includes("Boa Noite")) || (budy.includes("Boa noite"))) {
if (SoDono) {
var donoMsgs = [
"Boa noite, chefe!",
"Descansa bem, patrão!",
"Tenha uma noite tranquila, chefe!",
"Boa noite, Sr.! Tudo estará preparado para amanhã.",
"Repouse bem, dono(a)! Amanhã continuamos com tudo.",
"Que sua noite seja ótima, chefe!",
"Durma bem, estamos prontos para amanhã, patrão.",
"Boa noite, que tenha um descanso merecido, chefe.",
"Até amanhã, Sr.! Descanse e recarregue as energias.",
"Tenha bons sonhos, chefe! Amanhã será ainda melhor.",
"Boa noite, Sr.! Pode descansar tranquilo."];
const donoResp = donoMsgs[Math.floor(Math.random() * donoMsgs.length)];
return reply(donoResp);
}
if (isGroupAdmins) {
var adminMsgs = [
"Boa noite, administrador!",
"Durma bem e até amanhã, admin!",
"Tenha uma noite tranquila, administrador.",
"Boa noite, Sr. Admin! Que tenha um ótimo descanso.",
"Repouse bem, administrador! Amanhã tem mais.",
"Boa noite! Agradeço pela parceria, admin!",
"Tenha uma noite de paz, admin!",
"Descanso merecido, admin. Até amanhã!",
"Que a noite seja tranquila, Sr. Admin.",
"Durma bem e recarregue as energias, administrador!"
];
const adminResp = adminMsgs[Math.floor(Math.random() * adminMsgs.length)];
return reply(adminResp);
}
if (info.key.fromMe) return;
archivus.sendPresenceUpdate('composing', from)
var ba5 = [
`Boa Sr.(a) ${pushname}`,
`Igualmente Sr.(a) ${pushname}`,
`Boa noite ${pushname}...`,
`GoodNight ${pushname}!`,
`Pra você também ${pushname}`,
`Tenha uma ótima noite, Sr.(a) ${pushname}`,
`Boa noite, espero que tenha um ótimo descanso, Sr.(a) ${pushname}`,
`Que sua noite seja produtiva, Sr.(a) ${pushname}`,
`Durma bem, Sr.(a) ${pushname}`,
`Tenha uma noite tranquila, Sr.(a) ${pushname}`,
`Que a sua noite seja iluminada, ${pushname}`,
`Repouse bem e recarregue as energias, ${pushname}`,
`Que amanhã seja um dia melhor, boa noite ${pushname}`,
`Sr.(a) ${pushname}, que a sua noite seja plena de paz`,
`Descanse bem e até amanhã, ${pushname}`,
`Boa noite, Sr.(a) ${pushname}, que o seu dia seja ainda melhor amanhã`];
const bah5_resp = ba5[Math.floor(Math.random() * ba5.length)];
archivus.sendMessage(from, { text: bah5_resp });
}

if ((budy.includes("Boa Tarde")) || (budy.includes("Boa tarde"))) {
if (SoDono) {
var donoMsgs = [
"Boa tarde, chefe!",
"Espero que sua tarde seja excelente, patrão!",
"Tudo sob controle por aqui, boa tarde!",
"Boa tarde, Sr.! Precisa de algo?",
"Ótima tarde, chefe! Estamos todos prontos para o que precisar.",
"Que sua tarde seja produtiva, dono(a)!",
"Boa tarde, aproveite bem seu tempo, patrão!",
"Descanso merecido nesta tarde, chefe!",
"Tenha uma tarde tranquila e cheia de bons momentos, Sr.",
"Boa tarde, Sr.! Qualquer coisa, estou por aqui.",
"Ótima tarde e bom trabalho, chefe!",
"Boa tarde! A equipe está à disposição, patrão.",
"Que sua tarde seja leve e cheia de sucesso, dono(a)!",
"Espero que esta tarde traga muito progresso, chefe.",
"Excelente tarde, patrão. Conte comigo para o que precisar!",
"Desfrute bem a tarde, Sr.!",
"Tenha uma tarde tranquila e bem proveitosa, chefe.",
"Boa tarde, dono(a)! A operação está a todo vapor.",
"Que sua tarde seja tão grandiosa quanto você, Sr.!",
"Boa tarde, que o resto do seu dia seja ainda melhor, chefe!"
];
const donoResp = donoMsgs[Math.floor(Math.random() * donoMsgs.length)];
return reply(donoResp);
}
if (isGroupAdmins) {
var adminMsgs = [
"Boa tarde, administrador!",
"Ótima tarde para você, admin!",
"Que sua tarde seja excelente, administrador!",
"Boa tarde, admin! Qualquer coisa, estou à disposição.",
"Tenha uma tarde produtiva, Sr. Admin.",
"Aproveite bem a tarde, administrador!",
"Boa tarde! Estamos prontos para qualquer necessidade, admin.",
"Que sua tarde seja cheia de sucesso, administrador!",
"Estou aqui caso precise de algo, admin. Boa tarde!",
"Tenha uma tarde iluminada, administrador!"];
const adminResp = adminMsgs[Math.floor(Math.random() * adminMsgs.length)];
return reply(adminResp);
}
if (info.key.fromMe) return;
archivus.sendPresenceUpdate('composing', from)
var ba4 = [
`Boa Sr.(a) ${pushname}`,
`Buenas 🙏 ${pushname}`,
`Igualmente Sr.(a) ${pushname}`,
`Ótima tarde Sr.(a) ${pushname}...`,
`Boa tarde ${pushname}`,
`Tenha uma tarde produtiva, Sr.(a) ${pushname}`,
`Que sua tarde seja maravilhosa, Sr.(a) ${pushname}`,
`Aproveite bem esta tarde, Sr.(a) ${pushname}`,
`Boa tarde! Qualquer coisa, estou aqui, Sr.(a) ${pushname}`,
`Que esta tarde traga muitos sucessos, Sr.(a) ${pushname}`,
`Que a tarde seja iluminada, ${pushname}!`,
`Grande tarde, ${pushname}!`,
`Espero que esta tarde seja incrível, Sr.(a) ${pushname}!`,
`${pushname} Ótima tarde para você!`,
`Boa tarde, ${pushname}!`,
`Sr.(a) ${pushname}, que a tarde seja repleta de emoção!`];
const bah4_resp = ba4[Math.floor(Math.random() * ba4.length)];
archivus.sendMessage(from, { text: bah4_resp });
}

if(budy2.toLowerCase() === "oi") {
resp = [`$${pushname}, posso ajudar em algo?`, `${pushname}, como você está?`, `${pushname}, tudo bem por aqui?`]
reply(resp[alerandom(resp.length)])
}

if(budy2 === `a` && isGroup && isGroupAdmins && isBotGroupAdmins && groupMetadata.announce == true) {
setTimeout(() => {reagir(from, "✅")}, 300)
archivus.groupSettingUpdate(from, 'not_announcement')
reply(`*${tempo} à todos... O grupo foi aberto novamente*`)
}

if(budy2 === `f` && isGroup && isGroupAdmins && isBotGroupAdmins && groupMetadata.announce == false) {
setTimeout(() => {reagir(from, "🚫")}, 300)
archivus.groupSettingUpdate(from, 'announcement')
reply(`*Grupo fechado... As suas ordens vossa senhoria*`)
}

if (
/\bcp\b/i.test(budy) || 
/\bconteúdo pornográfico infantil\b/i.test(budy) || 
/\bpornografia infantil\b/i.test(budy) || 
/\bexploração sexual\b/i.test(budy)
) {
if (IS_DELETE) {
await archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}
const groupAdmins = groupMetadata.participants.filter(participant => participant.isAdmin);
const isUserAdmin = groupAdmins.some(admin => admin.id === sender);
if (!isUserAdmin) {
await archivus.sendMessage(from, { 
text: `[❗] *Ação de Banimento* em andamento!\n\nO usuário @${sender.split('@')[0]} (*${pushname}*) está sendo banido do grupo *${groupMetadata.subject}* por suspeita de envolvimento em conteúdos relacionados a pornografia infantil. ❌\n\nA violação das regras do grupo resulta em punições imediatas.`, 
mentions: [sender] 
});
setTimeout(async () => {
await archivus.groupParticipantsUpdate(from, [sender], "remove"); 
}, 5000);
}
}

if (budy.includes("kkgr")) {
reagir(from, "🇯🇵");
archivus.sendMessage(from, {
text: `「🇯🇵」 *Bem-vindo à KKGR!* 「🇯🇵」

A KKGR é uma aliança criada com o objetivo de fortalecer e unir diversos grupos, promovendo um ambiente de colaboração e crescimento. Este bot foi desenvolvido para oferecer suporte eficiente e facilitar a comunicação entre todos os membros da aliança. 

🔒 *Totalmente confiável e funcional!*

Deseja incluir seu grupo na aliança KKGR? É simples! Basta ingressar no grupo de recrutamento pelo link abaixo, e um de nossos recrutadores irá orientá-lo no processo de adesão.

🌐 *Links Importantes:*
- *Canal Oficial:* https://whatsapp.com/channel/0029Vara867LdQeZ6NUBXx0U
- *Grupo Oficial da KKGR:* https://chat.whatsapp.com/BFfM0ykWeUZGVqf6841VQF
- *Linktree da KKGR (Parcerias):* https://linktr.ee/aliancekkgr
- *Recrutamento KKGR:* https://chat.whatsapp.com/KvEl464up1bCEMCFgybsNO

✨*Momo Ayase, Exclusividade da KKGR 👑*

Junte-se a nós e faça parte dessa comunidade unida e colaborativa!`
});
}

if(budy2 === "como faz figurinhas?") {
archivus.sendMessage(from, {text: `so enviar uma imagem / gif ou video ate 9 segundos`})
}

if(budy2.toLowerCase() === "kkkk") {
reagir(from, "😂")
}

if (budy2 === 'bot') {
reagir(from, "❤️")
speed = require('performance-now');
ping = (Date.now() / 1000) - info.messageTimestamp;
start = speed();
end = speed();
latency = end - start;
uptime = process.uptime();
memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
var getGroups = await archivus.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
if (SoDono) {
var donoMsgs = [
"Oi, chefe! Estou aqui para ajudar.",
"Estou à disposição, chefe! Como posso ajudar?",
"Olá, Mestre.! Sempre pronto para ajudar.",
"Chefe, estou aqui. Qual é a missão?",
`Oi, meu tempo de resposta é de aproximadamente ${ping.toFixed(3)}s. Em que posso ser útil hoje?`,
`Oii, dono, No que posso te ajudar? Estou monitorando ${ingfoo.length} grupos`,
"Sim, estou online! O que você precisa, chefe?",
`Óia só, tô na ativa há ${kyun(uptime)} dias, bora resolver o que você precisar, Chefe!`,
`Ó, Meste, meu ping tá a ${latency.toFixed(4).slice([2])}ms, rapidinho pra te ajudar!`,
"Fala, patrão! Pronto para ajudar.",
"Estou aqui, chefe! O que posso fazer por você?"];
const donoResp = donoMsgs[Math.floor(Math.random() * donoMsgs.length)];
return reply(donoResp);
}
if (isGroupAdmins) {
var adminMsgs = [
"Oi, administrador! Como posso ajudar?",
"Sim, admin! O que você precisa?",
"Estou à disposição, admin! Diga como posso ajudar.",
"Olá, Sr. Admin! Sempre pronto para ajudar.",
"Oi, administrador! Qual é a missão hoje?",
"Oi, admin! Como posso ser útil para você?",
"Sim, estou online! O que posso fazer por você, admin?",
"Fala, admin! Pronto para ajudar no que precisar.",
`Oi, admin, meu ping tá a ${latency.toFixed(4).slice([2])}ms, então posso te atender rapidão!`,
`Ó, já são ${kyun(uptime)}! Pronto pra te ajudar!`,
"Oi, Sr. Admin! Diga o que precisa.",
"Estou aqui, admin! O que posso fazer por você?"
];
const adminResp = adminMsgs[Math.floor(Math.random() * adminMsgs.length)];
return reply(adminResp);
}
if (info.key.fromMe) return;
archivus.sendPresenceUpdate('composing', from)
var ba5 = [
`Oi, ${pushname}! Como posso ajudar?`,
`Olá, ${pushname}! Estou aqui para o que precisar.`,
`Oi, ${pushname}! Diga como posso ser útil.`,
`Oi, ${pushname}! O que você precisa hoje?`,
`E aí, firmeza? Meu ping tá a ${latency.toFixed(4).slice([2])}ms, rapidinho!`,
`Óia só, tô por aqui faz tempo, já são ${kyun(uptime)} dias de atividade!`,
`Fala comigo! Tô pronto pra resolver o que você precisar.`,
`Óia, princesa! Como posso te ajudar hoje?`,
`Oi, estou operando ${ingfoo.length} grupos no momento. Como posso te ajudar?`,
`Oi, meu tempo de resposta médio é de ${ping.toFixed(3)}s. Precisa de algo específico?`,
`Olá, estou disponível para auxiliar você em qualquer dúvida! É só perguntar.`,
`Oi! Estou operando em ${ingfoo.length} grupos simultaneamente, mas vou te responder o mais rápido possível.`,
`Fala, ${pushname}! Estou à disposição.`,
`Oi, ${pushname}! Como posso ajudar você?`,
`Sim, ${pushname}! Estou aqui, o que você precisa?`,
`Oi, ${pushname}! Pronto para ajudar no que precisar.`,
`Oi, ${pushname}! Diga o que você precisa.`,
`Estou aqui, ${pushname}! Como posso te ajudar?`];
const bah5_resp = ba5[Math.floor(Math.random() * ba5.length)];
archivus.sendMessage(from, { text: bah5_resp });
}

if(budy2 === 'prefixo') {
reagir(from, "🥰")
reply(`*Prefixo〘 ${prefix} 〙*`)
}

if(isAutorepo) {


if(budy2 === ":)") {
archivus.sendMessage(from, {text: `hihi ^-^`})
}

if(budy2.toLowerCase() === "f") {
archivus.sendMessage(from, {text: '```Press F no chat```'})
}

if(budy2.toLowerCase() === "kkkk") {
reagir(from, "😂")
}

if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
archivus.sendMessage(from, {text: adivinha}, {quoted: seloMetaTokyo})
}

EnvAudio2_SMP("./datab/audios/corno.mp3", "corno")

}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}


//==============(FUNC - VDDSF)===============\\
//BY: BLACK V4
//CRÉDITO DO MATHEU - VERDADE - DESAFIO 
if(JSON.stringify(vdddsf).includes(from) && isGroup) {
  AB = vdddsf.map(b => b.idgp).indexOf(from)
  if(JSON.stringify(vdddsf[AB].jogadores).includes(sender)) {
    BC = vdddsf.map(a => a.idvd).indexOf("archivuszinho")
    CD = vdddsf[AB].jogadores.map(i => i.id).indexOf(sender)
    if(budy2.toLowerCase() === "verdade") {
      if(vdddsf[AB].jogadores[CD].tipo == 1) {
vdddsf[AB].jogadores.splice(CD, 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
sendStickerFromUrl(from, `https://telegra.ph/file/4b43ac115d66362540612.jpg`)
      } else if(vdddsf[AB].jogadores[CD].tipo <= 0) {
alevdd = Math.floor(Math.random() * vdddsf[BC].verdades.length)
vdddsf[AB].jogadores[CD].vdouds = vdddsf[BC].verdades[alevdd].vdd
vdddsf[AB].jogadores[CD].tipo = 1
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 VERDADE 』
✓ -> ${vdddsf[BC].verdades[alevdd].vdd}

_(responda com verdade ou mentira)_`)
      }
    }
    if(budy2.toLowerCase() === "mentira") {
      vdddsf[AB].jogadores.splice(CD, 1)
      fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
      sendStickerFromUrl(from, `https://telegra.ph/file/22e467ada05df439e3401.jpg`)
    }
    if(budy2.toLowerCase() === "desafio") {
      aledsf = Math.floor(Math.random() * vdddsf[BC].desafios.length)
      vdddsf[AB].jogadores[CD].vdouds = vdddsf[BC].desafios[aledsf].dsf
      vdddsf[AB].jogadores[CD].tipo = 2
      fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
      reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[BC].desafios[aledsf].dsf}

_(quando concluir o desafio, use ${prefix}pronto)_`)
    }
  }
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
archivus.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
archivus.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
archivus.sendMessage(from, {text: `*「 - REMOVIDO POR UTILIZAR UMA PALAVRA PROIBIDA - 」*\nVocê será banido do gp, Na proxima veja as regras ao digitar qualquer palavra..!!`})
}
}
 //===============(SIMIH-1)===============\\
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
if(!muehe) return
console.log(muehe)
reply(muehe)
}
//==================( SIMIH2 )===============\\
msg_q = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation?.toLowerCase() || "";
msg_m = info?.message?.extendedTextMessage?.text || "";
sm_j = SIMI_OFC?.map(i => i?.MSG)
sm_r = SIMI_OFC[SIMI_OFC?.map(i => i?.MSG)?.indexOf(msg_q)]?.RSP

var RN_ = SIMI_OFC[SIMI_OFC?.map(i => i?.MSG)?.indexOf(budy.toLowerCase())]?.RSP

var RND_ = RN_ ? RN_[Math.floor(Math.random() * RN_?.length)] : false

let VR_NMEX;
try {
VR_NMEX = await archivus?.onWhatsApp(msg_m || msg_q)
} catch (e){
VR_NMEX = false
}

let VR_NMEX2;
try {
VR_NMEX2 = await archivus?.onWhatsApp(RND_)
} catch (e){
VR_NMEX2 = false
}

if(!isCmd && !VR_NMEX && isGroup && budy.length < 1000 && !isUrl(budy.toLowerCase() || msg_m || msg_q) && menc_jid2?.length == 0 && msg_q != "" && msg_m != "" && !groupMembers.some(i => msg_m.includes(i.id.split("@")[0])) && !groupMembers.some(i => msg_q.includes(i.id.split("@")[0]))){
msg_m && !sm_j?.includes(msg_q) && !sm_r?.includes(msg_m) ? SIMI_OFC.push({MSG: msg_q, RSP: [msg_m]}) : msg_m && sm_j?.includes(msg_q) && !sm_r?.includes(msg_m) ? sm_r.push(msg_m) : "©"
fs.writeFileSync("./armor/json/simi.json", JSON.stringify(SIMI_OFC, null, 2))
}

if(isSimi2 && !isCmd && !isUrl(budy) && !VR_NMEX2 && RND_ != false && RND_[0] != prefix && isGroup && SIMI_OFC?.map(i => i?.MSG).includes(budy.toLowerCase()) && RN_.length >= 1) {
reply(`​${RND_}`)
}

//========================================\\
hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
if (isCmd) {
uptime = process.uptime();
archivus.sendMessage(from, {
text: `╭══•✧･ﾟ: *✧･ﾟ:* 🐺  *:･ﾟ✧*:･ﾟ✧･ﾟ✧ •
┇➫ CARGO: ${isCargo}
┇➫ Vɪᴘ?: ${isPremium ? "✅" : "❌"}
┇➫ ${tempo} @${sender.split("@")[0]}
┇➫ *COMANDO* : ${budy} 𝐍𝐚̃𝐨 ┇𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨
┇➫ *DIGITE:* ${prefix}menu
┇ 𝐏𝐚𝐫𝐚 𝐕𝐞𝐫 𝐎 𝐌𝐞𝐧𝐮
┇ 𝐃𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬
╰══•✧･ﾟ: *✧･ﾟ:* 🐺 *:*:･ﾟ ･ﾟ ･ﾟ✧*:･ﾟ`,
mentions: [sender]
}, { quoted: selo });
}
//========================================\\
}
}
}

}

module.exports = startAle;