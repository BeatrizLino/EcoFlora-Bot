const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)


bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo(a), ${ctx.update.message.from.first_name}`)
    await ctx.replyWithHTML(`Olá sou o EcoFlora..
Sou um RoboBot que de forma interativa, te responde perguntas sobre as caracteristicas da flora da caatinga.
Vamos lá....`)

await ctx.replyWithHTML(`No total a caatinga apresenta 25 tipos de floras, cada uma com suas diversas características.
> Para gerar a lista com os tipos de flora digite a palavra "lista"
> Ex: lista
> Logo em seguida digite "instruções" e as siga
> Ex: instruções`)

})

bot.hears(/lista/i, ctx => ctx.reply(`Lista dos tipos de flora
01. Angico
02. Aroeira-Vermelha
03. Barriguda
04. Bromélia
05. Cacto
06. Carnaúba
07. Caroá
08. Catingueira
09. Coroa-de-frade
10. Cumaru
11. Facheiro
12. Faveleira
13. Flor de Jitirana
14. Ipê roxo
15. Jericó
16. Juazeiro
17. Jurema branca
18. Malícia
19. Malva branca
20. Mandacaru
21. Palma
22. Quixaba
23. Sabiá
24. Umbuzeiro
25. Xique-Xique`))

bot.hears(/instruções/i, ctx => ctx.reply(`Para conhecer sobre cada uma dessas espécies é só seguir as instruções abaixo
> Digite o número que esteja correspondendo a flora desejada
> Ex: quero saber sobre o Xique-Xique
> Deve ser digitado o número: 25
> Se desejar ver uma foto, digite em seguida o nome da espécie que você deseja conhecer.
> Ex: xique-xique.`))


bot.hears(/01/i, ctx => ctx.reply(`Nome popular: Angico;
Nome Cientifico: Anadenanthera colubrina;
Tipo de Árvore: caducifólia;
Tipo de Folha: bipinadas;
Tipo de Tronco: tronco robusto que produz uma alta quantidade tanino;
Flores: Brancas;
Grupo Pertencente: arbóreo;
Informações Extras: a casca de seu tronco apresenta propriedades medicinais (redução de sangramento, diarreia e ajuda na cicatrização de ferimentos.)`))
bot.hears(/angico/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/angico.jpg` }))


bot.hears(/02/i, ctx => ctx.reply(`Nome popular: Aroeira-vermelha/pimenta-rosa;
Nome Cientifico: chinus terebinthifolius Raddi;
Tipo de Folha:  imparipinas;
Tipo de Tronco: tronco castanho-escuro que origina uma madeira resistente à deterioração;
Flores: miudas com frutos vermelhos;
Grupo Pertencente: arbóreo;
Informações Extras: muito usada para cura de doenças infecciosas e por ser muito utilizada esta na lista das ameaçadas em extinção.`))
bot.hears(/aroeira/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/aroeira.jpg` }))

bot.hears(/03/i, ctx => ctx.reply(`Nome popular: Barriguda/paineira;
Nome Cientifico: Ceiba glaziovii;
Tipo de Folha:  compostas palmadas;
Tipo de Tronco: possui espinhos e sua madeira é mole;
Flores: brancas;
Grupo Pertencente: arbóreo;
Informações Extras: muito conhecida na caatinga por ser muito resistente a seca, tendo o poder de absorve bastante água para seu interior.`))
bot.hears(/barriguda/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/barriguda.jpg` }))

bot.hears(/04/i, ctx => ctx.reply(`Nome popular: Bromélia;
Nome Cientifico: Bromeliaceae;
Tipo de Folha: longas, estreitas e curvas;
Tipo de Tronco: reduzido;
Flores: apresenta corres vistosas;
Grupo Pertencente: herbáceo;
Informações Extras: possui uma infinidade de espécies, onde a mais popular é o abacaxi que é formado por uma reunião de flores, devido suas folhas possui uma grande capaciadde de armazenar água.`))
bot.hears(/bromelia/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/bromelia.jpg` }))

bot.hears(/05/i, ctx => ctx.reply(`Nome popular: Cacto;
Nome Cientifico: Cactaceae;
Tipo de Folha: espinhos que sofre mudanças para se adaptarem ao ambiente;
Tipo de Tronco: suculento, com formato cilíndrico e muitos espinhoso;
Grupo Pertencente: arbóreo;
Informações Extras: muito comuns em ambientes secos, por ter uma alta capacidade de absorver água.`))
bot.hears(/cacto/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/cacto.jpg` }))

bot.hears(/06/i, ctx => ctx.reply(`Nome popular: Carnaúba;
Nome Cientifico: Copernicia prunifera;
Tipo de Folha: são verdes e por conta da cera que produzem, podem apresentar tons azulados;
Tipo de Tronco: é reto e cilíndrico;
Grupo Pertencente: arbóreo;
Informações Extras: sua cera evita a perda da água e também é muito utillizada na produção industrial de cosmeticos, chips de computador e etc.`))
bot.hears(/carnauba/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/carnauba.jpg` }))

bot.hears(/07/i, ctx => ctx.reply(`Nome popular: Caroá/gravatá/caruá/coroatá;
Nome Cientifico: Neoglasiovia variegata;
Tipo de Folha: poucas folhas, sempre em tons avermelhados ou rosados;
Grupo Pertencente: arbustivo;
Informações Extras: produz fibras utilizadas na confecção de peças artesanais e decorativas, além de tecidos, barbantes e linha de pesca, também podem auxiliar no combate a inflamações, dores e úlceras gástricas.`))
bot.hears(/caroa/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/caroa.jpg` }))

bot.hears(/08/i, ctx => ctx.reply(`Nome popular: Catingueira;
Nome Cientifico: Caesalpinia pyramidalis;
Tipo de Folha: bipinadas;
Tipo de Tronco: robusto e de cor cinza-claro;
Flores: amarela;
Grupo Pertencente: arbustivo;
Informações Extras: possui capacidade de rebrotar mesmo depois de ser cortada. É considerada um indicador de proximidade do período chuvoso, pois suas gemas brotam ao sentir a umidade.`))
bot.hears(/catingueira/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/catingueira.jpg` }))

bot.hears(/09/i, ctx => ctx.reply(`Nome popular: Coroa-de-frade;
Nome Cientifico: Melocactus bahiensis;
Tipo de Folha: espinhos;
Tipo de Tronco: espinhoso;
Flores: rosa e vermelho;
Grupo Pertencente: herbáceo;
Informações Extras: recebe este nome pois na fase adulta apresenta o cefálio, que é muito semelhante, visualmente, a uma coroa e uma cabeça calva, fazendo referência assim a um frade franciscano.`))
bot.hears(/coroa-de-frade/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/coroa-de-frade.jpg` }))

bot.hears(/10/i, ctx => ctx.reply(`Nome popular: Cumaru;
Nome Cientifico: Amburana cearensis;
Tipo de Tronco: tronco com casca em tons avermelhados que se soltam em finas camadas;
Grupo Pertencente: arbóreo;
Informações Extras:suas cascas e sementes são conhecidas por apresentar uso medicinal, podendo auxiliar no tratamento de problemas respiratórios.`))
bot.hears(/cumaru/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/cumaru.jpg` }))

bot.hears(/11/i, ctx => ctx.reply(`Nome popular: Facheiro;
Nome Cientifico: Pilosocereus pachycladus;
Tipo de Tronco: com ramificações que variam de tons marrom ao verde-escuro e seus espinhos tornam-se agudos e amarelados;
Tipo de Folhas: espinhos;
Grupo Pertencente: arbóreo;
Informações Extras:É uma planta muito rica nutricionalmente, apresentando proteína, fibras, tanino e amido, assim, quando jovem serve de alimentação para animais pois ainda não possui espinhos.`))
bot.hears(/facheiro/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/facheiro.jpg` }))

bot.hears(/12/i, ctx => ctx.reply(`Nome popular: Faveleira;
Nome Cientifico: Cnidoscolus phyllacanthus;
Tipo de Folhas: espinhosas;
flores: brancas;
Grupo Pertencente: arbustivo;
Informações Extras:sua semente tem sido utilizada na extração de óleo para produção de biocombustíveis, extratos medicinais e recuperação de áreas degradadas.`))
bot.hears(/faveleira/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/faveleira.jpg` }))

bot.hears(/13/i, ctx => ctx.reply(`Nome popular: Flor de jitirana/corda-de-viola;
Nome Cientifico: Ipomoea cairica;
Tipo de Planta: trepadeira;
Flores: roxas, rosa e azuis;
Informações Extras/; apresenta um odor agradável, sendo muito aceita por animais. Também é consumida pelo homem ao usar suas folhas para chás, que acredita-se auxiliar contra dermatites e reumatismo.`))
bot.hears(/flor de jitirana/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/flor de jitirana.jpg` }))

bot.hears(/14/i, ctx => ctx.reply(`Nome popular: Ipê roxo;
Nome Cientifico: Tabebuia impetiginosa Mart;
Tipo de Tronco: reto e fissurado;
Flores: se dispõem em um só ramo, formando um buquê;
Grupo Pertencente: arbóreo;
Informações Extras:sua madeira é pesada, dura e resistente, porém flexível, sendo muito utilizada na construção de móveis e instrumentos musicais. Na medicina popular, as partes do ipê são utilizadas para auxiliar no combate à febre, disenteria, úlceras, reumatismo e doenças venéreas. Além disso, sua casca apresenta poder anti-inflamatório, antialérgico e cicatrizante.`))
bot.hears(/ipe roxo/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/ipe roxo.jpg` }))

bot.hears(/15/i, ctx => ctx.reply(`Nome popular: Jericó;
Nome Cientifico: Selaginella convoluta Sprig;
Flores: pequenas e brancas;
Grupo Pertencente: herbáceo;
Informações Extras: também conhecida popularmente pelo seu poder medicinal, sendo utilizada em forma de chá no combate à gripe e dores abdominais.`))
bot.hears(/jerico/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/jerico.jpg` }))

bot.hears(/16/i, ctx => ctx.reply(`Nome popular: Juazeiro;
Nome Cientifico: Ziziphus joazeiro;
Tipo de Tronco: espinhento;
Frutos: do tamanho de uma cereja;
Grupo Pertencente: arbóreo;
Informações Extras:Uma de suas principais características é a capacidade de sobrevivência ao clima da Caatinga, especialmente por sua preferência por solos aluviais do tipo argiloso, ou seja, que apresentam deposição de sedimentos que são transportados pelos rios.`))
bot.hears(/juazeiro/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/juazeiro.jpg` }))

bot.hears(/17/i, ctx => ctx.reply(`Nome popular: Jurema brancacarcará/jurema/rasga-beiço/saia-velha;
Nome Cientifico: Piptadenia stipulacea;
Tipos de Folhas: são alternas;
Flores: branca;
Grupo Pertencente: arbóreo;
Informações Extras: sua madeira é utilizada em pequenas construções, para a confecção de estacas e também para utilização como lenha e carvão.`))
bot.hears(/jurema branca/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/jurema branca.jpg` }))

bot.hears(/18/i, ctx => ctx.reply(`Nome popular: Malícia;
Nome Cientifico: Mimosa quadrivalvis L.;
Tipo de Tronco: fino e espinhoso;
Flores: pequenas;
Grupo Pertencente: herbáceo;
Informações Extras: facilmente encontrada em áreas abertas.`))
bot.hears(/malicia/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/malicia.jpg` }))

bot.hears(/19/i, ctx => ctx.reply(`Nome popular: Malva branca;
Nome Cientifico: Sida cordifolia L;
Flores: amarelas e alaranjada;
Grupo Pertencente: herbáceo;
Informações Extras: pólen e néctar são um atrativo para abelhas e para a produção de mel, sendo muito utilizada em jardins de flora melífera.`))
bot.hears(/malva branca/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/malva branca.jpg` }))

bot.hears(/20/i, ctx => ctx.reply(`Nome popular: Mandacaru;
Nome Cientifico: Cereus jamacaru;
Tipos de Tronco: colunar;
Tipos de Folhas: espinhos;
Flores: branca;
Grupo Pertencente: arbóreo;
Informações Extras: É uma planta repleta de espinhos, com grande capacidade de retenção de água e muito utilizada como cerca natural.`))
bot.hears(/mandacaru/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/mandacaru.jpg` }))

bot.hears(/21/i, ctx => ctx.reply(`Nome popular: Palma;
Nome Cientifico: Opuntia cochenillifera;
Tipos de Tronco: colunar;
Tipos de Folhas: pequenas e decícuas precoses;
Flores: amarelas ou brancas;
Grupo Pertencente: arbustivo;
Informações Extras: Seu uso é muito amplo, podendo ser consumido na alimentação de humanos e de gado, como elemento paisagístico e produção de corante natural.`))
bot.hears(/palma/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/palma.jpg` }))

bot.hears(/22/i, ctx => ctx.reply(`Nome popular: Quixaba;
Nome Cientifico: Sideroxylon Obtusifolium;
Tipos de Tronco: forte;
Tipos de Folhas: alongadas;
Flores: aromatizadas e frutos roxo;
Grupo Pertencente: arbóreo;
Informações Extras: conhecida por seu poder medicinal, especialmente para o tratamento de doenças relacionadas ao rim e diabetes.`))
bot.hears(/quixaba/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/quixaba.jpg` }))

bot.hears(/22/i, ctx => ctx.reply(`Nome popular: Sabiá;
Nome Cientifico: Mimosa caesalpiniaefolia;
Tipos de Tronco: adotado de acúleos;
Tipos de Folhas: compostas e bipinadas;
Flores: brancas e pequenas;
Grupo Pertencente: arbóreo;
Informações Extras: sua madeira é muito utilizada na produção de estacas para cercas e para energia, caracterizando seu potencial para uso como lenha e carvão.`))
bot.hears(/sabia/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/sabia.jpg` }))

bot.hears(/24/i, ctx => ctx.reply(`Nome popular: Umbuzeiro;
Nome Cientifico: Pilocereus gounellei;
Tipos de Tronco: ereto com galhos laterais;
Tipo de Folhas: espinhos;
Grupo Pertencente: arbóreo;
Informações Extras: seus espinhos são fortes e seu fruto é apreciado por ser rico em sais minerais e sabores.`))
bot.hears(/umbuzeiro/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/umbuzeiro.jpg` }))

bot.hears(/25/i, ctx => ctx.reply(`Nome popular: Xique-Xique;
Nome Cientifico: Spondias tuberosa;
Tipos de Tronco: curto e a copa ampla;
Flores: brancas;
Grupo Pertencente: arbóreo;
Informações Extras: sua raiz também é consumida como alimento, que acreditam ter poder medicinal que previne diarreia.`))
bot.hears(/xique-xique/i, ctx => ctx.replyWithPhoto({ source: `${__dirname}/xique-xique.jpg` }))


bot.startPolling()