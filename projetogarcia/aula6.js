function ola(){
    alert("oi");	
}

function teste(){
	
	var div = document.querySelector(".div");
	div.setAttribute("id", "container");
	div.setAttribute("class", "div");
	
	var div = document.createElement("header");
	div.setAttribute("class", "header");
	var x = document.querySelector(".div");
	x.appendChild(div);
	
	var div = document.createElement("main");
	div.setAttribute("class", "main");
	var x = document.querySelector(".div");
	x.appendChild(div);
	
	var div = document.createElement("aside");
	div.setAttribute("class", "aside");
	var x = document.querySelector(".div");
	x.appendChild(div);
	
	var div = document.createElement("nav");
	div.setAttribute("class", "nav");
	var x = document.querySelector(".div");
	x.appendChild(div);
		
	
	var div = document.createElement("footer");
	div.setAttribute("class", "footer");
	var x = document.querySelector(".div");
	x.appendChild(div);
	
	
	var remove = document.querySelector(".btn1");
	remove.parentNode.removeChild(remove);
	
	
	
	var botao = document.createElement("Button");               
	botao.setAttribute("class", "btn2");
	botao.setAttribute("onclick", "carregaheader()");
	botao.innerText = "Banner";               
	var x = document.querySelector(".header");
	x.appendChild(botao);
	
	var botao = document.createElement("Button"); 
	botao.setAttribute("class", "btn3");	
	botao.innerText = "Carrega";
	botao.setAttribute("onclick", "carregamain()");
	var x = document.querySelector(".main");
	x.appendChild(botao);
	
	var botao = document.createElement("Button");  
	botao.setAttribute("class", "btn4");
    botao.setAttribute("onclick", "carreganav()");	
	botao.innerText = "Lista de Personagens";               
	var x = document.querySelector(".nav");
	x.appendChild(botao);
	
	var botao = document.createElement("Button");  
	botao.setAttribute("class", "btn5");	
	botao.innerText = "Carregue sua Bandeira";       
	botao.setAttribute("onclick", "carregaaside()");	
	var x = document.querySelector(".aside");
	x.appendChild(botao);
	
	var botao = document.createElement("Button");   
	botao.setAttribute("class", "btn6");	
	botao.innerText = "Trailer";  
botao.setAttribute("onclick", "carregafooter()");	
	var x = document.querySelector(".footer");
	x.appendChild(botao);
	
	
	
}


function carreganav() {
	
	
	var h2 = document.createElement("H2");
	
	h2.innerHTML = "Lista de Personagens";
	h2.setAttribute("class", "h2");
	var x = document.querySelector(".nav");
	x.appendChild(h2);
	
	
	var botao = document.createElement("Button");   
	botao.classList.add("joao", "botaopersonagem");	
	botao.setAttribute("onclick","joao()")
	 
	var x = document.querySelector(".nav");
	x.appendChild(botao);
	
	
	var botao = document.createElement("Button");   
    botao.classList.add("danadis", "botaopersonagem");
	botao.setAttribute("onclick","danadis()")
	
	var x = document.querySelector(".nav");
	x.appendChild(botao);
	
	
	var botao = document.createElement("Button");   
	botao.classList.add("anao", "botaopersonagem");
	botao.setAttribute("onclick","anao()")
	
	var x = document.querySelector(".nav");
	x.appendChild(botao);
	
	
	var botao = document.createElement("Button");   
	botao.classList.add("corvineo", "botaopersonagem");
	botao.setAttribute("onclick","corvineo()")
	
	var x = document.querySelector(".nav");
	x.appendChild(botao);
	
	
	var botao = document.createElement("Button");   
	botao.classList.add("arya", "botaopersonagem");
	botao.setAttribute("onclick","arya()")
	
	var x = document.querySelector(".nav");
	x.appendChild(botao);
	
	var remove = document.querySelector(".btn4");
	remove.parentNode.removeChild(remove);
	
	
	
	
	
	
}

function joao(){
	var y = document.querySelector(".main").innerHTML = "";
	var titulo = document.createElement("H3");
	titulo.setAttribute("class", "titulochar");
	titulo.innerHTML = "JOAO DAS NEVES";
	var x = document.querySelector(".main");
	x.appendChild(titulo);
	
	
	var foto = document.createElement("img");
	foto.src = "botaosnow.jpg";
	foto.setAttribute("class", "mainchar");
	var x = document.querySelector(".main");
	x.appendChild(foto);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Jon Snow é um personagem fictício da série de livros de fantasia As Crônicas de Gelo e Fogo, escrita pelo autor norte-americano George R. R. Martin, e também de sua adaptação televisiva, o seriado Game of Thrones'. Ele é considerado uma melhores criações do autor, e é o atual personagem principal da série.";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Ele é introduzido no primeiro livro da série, A Game of Thrones (1996), como o filho ilegítimo de Ned Stark, o honorável Lorde de Winterfell, uma fortaleza ancestral no Norte do reino fictício de Westeros. Sabendo que suas pretensões de vida são limitadas pela sua condição de filho bastardo, Jon se junta à Patrulha da Noite, que guarda as fronteiras norte do reino dos Selvagens, um povo que vive além da Muralha. Quando a família Stark encontra uma grande adversidade, Jon permanece na Patrulha em nome de seu juramento e sua honra. Em A Clash of Kings (1998), Jon se junta a uma patrulha de batedores que investigam uma ameaça sobrenatural chamada 'Os Outros', além da Muralha, e consegue se infiltrar entre os Selvagens. Em A Storm of Swords (2000), ele descobre o plano dos Selvagens de invadirem Westeros e começa a se apaixonar por uma dura guerreira deste povo, Ygritte. Jon os trai – e a Ygritte – antes que eles possam atacar, mas a vitória da Patrulha da Noite vem a um alto preço. Em A Dance with Dragons (2011), feito Lorde Comandante da Patrulha da Noite por seus companheiros, ele trabalha por uma aliança entre os patrulheiros e os Selvagens, para enfrentar a ameaça maior, mas a crescente animosidade que criou entre seus próprios homens finalmente chega a um limite, e ele é forçado a enfrentar essas consequências.";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	
}

function danadis(){
	var y = document.querySelector(".main").innerHTML = "";
	var titulo = document.createElement("H3");
	titulo.setAttribute("class", "titulochar");
	titulo.innerHTML = "DANADIS NAO QUEIMADA";
	var x = document.querySelector(".main");
	x.appendChild(titulo);
	
	
	var foto = document.createElement("img");
	foto.src = "danadis.jpg";
	foto.setAttribute("class", "mainchar");
	var x = document.querySelector(".main");
	x.appendChild(foto);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Daenerys Targaryen é uma personagem fictícia da série de fantasia épica As Crônicas de Gelo e Fogo, do escritor norte-americano George R. R. Martin, e da série de televisão Game of Thrones. Ela é uma princesa exilada da antiga Casa Targaryen, uma família nobre da cidade de Valíria que, até quinze anos antes dos eventos do primeiro livro, governou os Sete Reinos de Westeros a partir do Trono de Ferro por quase trezentos anos. Por se considerar a última sobrevivente da Casa Targaryen, é autoproclamada a legítima rainha e herdeira do trono. Introduzida no primeiro livro, A Game of Thrones (1996), Daenerys, junto com seu irmão Viserys, é uma das últimas sobreviventes da Casa Targaryen. Ela também aparece nos livros subsequentes A Clash of Kings (1998) e A Storm of Swords (2000); ausente de A Feast for Crows (2000), por questões geográficas, retornou no último livro publicado, A Dance with Dragons (2011).";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Considerada pelo The New York Times como uma melhores criações do autor e um dos personagens mais populares na adaptação televisiva produzida pela HBO,[1] ela é interpretada pela atriz britânica Emilia Clarke. Bem recebida por crítica e público, Clarke foi indicada três vezes por seu trabalho para o Prêmio Emmy de melhor atriz coadjuvante em série dramática.[2]";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	
}

function anao(){
	var y = document.querySelector(".main").innerHTML = "";
	var titulo = document.createElement("H3");
	titulo.setAttribute("class", "titulochar");
	titulo.innerHTML = "ANAO VIDA LOCA";
	var x = document.querySelector(".main");
	x.appendChild(titulo);
	
	
	var foto = document.createElement("img");
	foto.src = "anao.jpg";
	foto.setAttribute("class", "mainchar");
	var x = document.querySelector(".main");
	x.appendChild(foto);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Tyrion Lannister (também chamado de Meio-Homem ou Duende) é uma personagem fictícia da série de livros As Crônicas de Gelo e Fogo, escrita pelo autor norte-americano George R. R. Martin, e também de sua adaptação televisiva, o seriado Game of Thrones. Ele foi baseado em uma ideia que Martin teve ao escrever seu romance Windhaven,[1] sendo considerado uma das 'melhores criações' do autor e um dos personagens mais populares da série.[2] Martin também nomeou Tyrion como seu personagem favorito.";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Tyrion apareceu pela primeira vez no romance A Game of Thrones (1996), um anão membro da Casa Lannister, uma das famílias mais ricas e poderosas do reino de Westeros, filho mais novo de Lorde Tywin Lannister e irmão dos gêmeos Cersei e Jaime. Foi duas vezes casado, sua primeira esposa chamou-se Tysha e a segunda Sansa Stark. Ele apareceu nos livros seguintes A Clash of Kings (1998) e A Storm of Swords (2000). Tyrion esteve dentre alguns personagens principais da série que não apareceu em A Feast for Crows (2005), porém voltou no título seguinte A Dance with Dragons (2011). O personagem também aparecerá no futuro The Winds of Winter. Sua popularidade levou Martin e a editora Bantam Books a publicarem em 2013 o livro The Wit & Wisdom of Tyrion Lannister, uma coleção ilustrada das melhores frases ditas por Tyrion nos livros da série.";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	
}

function arya(){
	var y = document.querySelector(".main").innerHTML = "";
	var titulo = document.createElement("H3");
	titulo.setAttribute("class", "titulochar");
	titulo.innerHTML = "ARYA RAINHA!!!";
	var x = document.querySelector(".main");
	x.appendChild(titulo);
	
	
	var foto = document.createElement("img");
	foto.src = "arya.jpg";
	foto.setAttribute("class", "mainchar");
	var x = document.querySelector(".main");
	x.appendChild(foto);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Arya Stark é uma personagem fictícia da série de livros de fantasia A Song of Ice and Fire, do autor norte-americano George R. R. Martin, e da série de televisão Game of Thrones. Introduzida no primeiro livro da série, A Game of Thrones (1996), Arya é a segunda filha e o terceiro dos filhos de Lorde Eddard 'Ned' Stark e Lady Catelyn Stark. Ela é uma tomboy, obstinada, independente, despreza as atividades femininas tradicionais e muitas vezes é confundida com um garoto. Ela usa um pequeno espadim chamado 'Needle', um presente de seu meio-irmão, Jon Snow, e é treinada no estilo Braavosi de esgrima. Uma das mais populares personagens tanto dos livros quanto da série de televisão,[1] ela é interpretada nas telas pela atriz britânica Maisie Williams, em seu primeiro trabalho como atriz,[2] que começou a vivê-la aos 13 anos de idade e vendo sendo aclamada pela crítica especializada";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = " ARYA RAINHA SANSA NADINHA!!!!";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	
}

function corvineo(){
	var y = document.querySelector(".main").innerHTML = "";
	var titulo = document.createElement("H3");
	titulo.setAttribute("class", "titulochar");
	titulo.innerHTML = "CORVINEO FURAOLHO";
	var x = document.querySelector(".main");
	x.appendChild(titulo);
	
	
	var foto = document.createElement("img");
	foto.src = "corvineo.jpg";
	foto.setAttribute("class", "mainchar");
	var x = document.querySelector(".main");
	x.appendChild(foto);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "Brandon 'Bran' Stark é uma personagem fictícia da série de livros de fantasia A Song of Ice and Fire, do escritor norte-americano George R. R. Martin, e da série de televisão Game of Thrones. Introduzida no primeiro livro da série, A Game of Thrones (1996), ele é o segundo filho homem das cinco crianças de Catelyn e Eddard 'Ned' Stark, o honorável Lorde de Winterfell, uma ancestral fortaleza no Norte do reino fictício de Westeros. Ele também aparece em mais três livros da saga, A Clash of Kings (1998) e A Storm of Swords (2000) e A Dance with Dragons (2011). Na série de televisão, ele é interpretado pelo ator britânico Isaac Hempstead Wright.";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	var p = document.createElement("p");
	p.setAttribute("class", "pchar");
	p.innerHTML = "No início de A Game of Thrones, Bran Stark tem sete anos de idade e é o segundo de três filhos homens de Ned e Catelyn Stark. Ele tem quatro irmãos, Robb, Sansa, Arya e Rickon e o meio-irmão Jon Snow. Ele está sempre acompanhado por seu lobo gigante, 'Summer'. Um menino pensativo e de temperamento doce, gostado por todos em Winterfell, ele parece facialmente com a mãe, tendo o mesmo cabelo castanho grosso e os olhos azuis profundos da Casa Tully, a Casa de origem de sua mãe.[1] Ele gosta de escalar e explorar as muralhas, torres e parapeitos do castelo e também é obediente e determinado.[2] Com seus sonhos de se tornar um cavaleiro destruídos pela tentativa contra sua vida que o deixou fisicamente incapacitado, a necessidade e o dever o forçam a superar suas atuais limitações e desenvolver suas novas habilidades. Sua aceitação gradual de seus sonhos que parecem proféticos e sua habilidade para se incorporar em seu lobo 'Summer', mostram sua crescente maturidade e seu valor depois da perda do movimento de suas pernas";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	
}






function carregaaside(){
	var stark = document.createElement("img");
	stark.src = "stark.png";
	var x = document.querySelector(".aside");
	x.appendChild(stark);
	
	var remove = document.querySelector(".btn5");
	remove.parentNode.removeChild(remove);
	
	
	
	
}

function carregamain() {
	
	var remove = document.querySelector(".btn3");
	remove.parentNode.removeChild(remove);
	
	var h1 = document.createElement("H1");
	h1.innerHTML = "Game of Thrones";
	h1.setAttribute("class", "h1");
	var x = document.querySelector(".main");
	x.appendChild(h1);
	
	var p = document.createElement("p");
	p.setAttribute("class", "p1");
	p.innerHTML = "Game of Thrones é uma série de televisão norte-americana criada por David Benioff e D. B. Weiss, e baseada na série de livros A Song of Ice and Fire, de George R. R. Martin.[1] Game of Thrones é filmada no Canadá, na Croácia, na Islândia, em Malta, em Marrocos, na Espanha, na Irlanda do Norte, na Escócia e nos Estados Unidos. A primeira temporada da série estreou em 17 de abril de 2011, na HBO, nos Estados Unidos. Até agora, sete temporadas já foram exibidas e a oitava e última temporada estreia em 14 de abril de 2019.";
	var x = document.querySelector(".main");
	x.appendChild(p);
	
	
	var botao = document.createElement("Button");   
	botao.setAttribute("class", "btn9");
	botao.setAttribute("onclick", "winter()");
	botao.innerText = "Mais informações";               
	var x = document.querySelector(".main");
	x.appendChild(botao);
	
}






function winter() {
	
	var winter = document.createElement("img");
	winter.src = "winteriscoming.png";
	winter.setAttribute("width", "300px");
	var elementoantes = document.querySelector(".h1");
	var elementopai = elementoantes.parentNode;
	elementopai.insertBefore(winter, elementoantes);
	
	var remove = document.querySelector(".p1");
	remove.parentNode.removeChild(remove);
	
	var remove = document.querySelector(".btn9");
	remove.parentNode.removeChild(remove);
	
	
	
	var botao = document.createElement("Button");   
	botao.setAttribute("class", "btn10");
	botao.setAttribute("onclick", "dracarys()");
	botao.innerText = "Como fas ganhar a guerra?";               
	var x = document.querySelector(".main");
	x.appendChild(botao);
	
	
}

function dracarys() {
	
	var changeh1 = document.querySelector(".h1");
	changeh1.innerHTML = "DRACARYS!";
	changeh1.setAttribute("id", "dracarys");
	
	var remove = document.querySelector(".btn10");
	remove.parentNode.removeChild(remove);
}






function carregaheader() {
	
	var remove = document.querySelector(".btn2");
	remove.parentNode.removeChild(remove);
	
	var foto = document.createElement("img");
	foto.src = "banner.jpg";
	foto.setAttribute("class", "banner");
	var x = document.querySelector(".header");
	x.appendChild(foto);
}


function carregafooter(){
	var y = document.querySelector(".main").innerHTML = "";
	var iframe = document.createElement("iframe");
	iframe.setAttribute("src",  "https://www.youtube.com/embed/rlR4PJn8b8I?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com)");
	var x = document.querySelector(".main");
	x.appendChild(iframe);
}
























/*




function montarTabela(resp){
	var table = document.createElement("table");
	var tHead = document.createElement("thead");
	var trowh = document.createElement("tr");
	var thid = document.createElement("th");
	var thnome = document.createElement("th");
	var thp1 = document.createElement("th");
	var thp2 = document.createElement("th");
	var thmed = document.createElement("th");
	thid.innerHTML = "ID";
	thnome.innerHTML = "NOME";
	thp1.innerHTML = "P1";
	thp2.innerHTML = "P2";
	thmed.innerHTML = "MEDIA";
	var vetObj = resp.dados;
	var tBody = document.createElement("tbody");
	for (var i=0; i < vetObj.length; i++) {
		var tr = document.createElement("tr");
		var tdId = document.createElement("td");
		var tdNome = document.createElement("td");
		var tdP1 = document.createElement("td");
		var tdP2 = document.createElement("td");
		var tdMed = document.createElement("td");
		tdId.innerHTML = vetObj[i].id;
		tdNome.innerHTML = vetObj[i].nome;
		tdP1.innerHTML = vetObj[i].p1;
		tdP2.innerHTML = vetObj[i].p2;
		tdMed.innerHTML = 0.5*(vetObj[i].p1+vetObj[i].p2);
		tr.appendChild(tdId);
		tr.appendChild(tdNome);
		tr.appendChild(tdP1);
		tr.appendChild(tdP2);
		tr.appendChild(tdMed);
		tBody.appendChild(tr);
	}
	tHead.appendChild(thid);
	tHead.appendChild(thnome);
	tHead.appendChild(thp1);
	tHead.appendChild(thp2);
	tHead.appendChild(thmed);
	table.appendChild(tHead);
	table.appendChild(tBody);
	var div = document.querySelector(".tabela");
	div.appendChild(table);
}

function iniciarTabela(){
	montarTabela({dados: [{id:1,nome:"Mayra",p1:6,p2:5}
						 ,{id:2,nome:"Pedro",p1:8,p2:8}
						 ,{id:3,nome:"Wesley",p1:10,p2:10}
						 ,{id:5,nome:"Roxelly",p1:10,p2:10}]});
}

*/