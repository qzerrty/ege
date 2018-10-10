let words = ['аэропОрты','бАнты','бОроду','бухгАлтеров','вероисповЕдание','граждАнство','дефИс','дешевИзна','диспансЕр','договорЁнность','докумЕнт','досУг','еретИк','жалюзИ','знАчимость','Иксы','каталОг','исповЕдать','знАчимый','диалОг','монолОг','некролОг','квартАл','киломЕтр','сантимЕтр','децимЕтр','миллимЕтр','кОнусы','кОнусов','корЫсть','крАны','кремЕнь','кремнЯ','огОнь','лЕкторы','лЕкторов','лыжнЯ','мЕстностей','пОчестей','чЕлюстей','новостЕй','мусоропровОд','газопровОд','нефтепровОд','водопровОд','намЕрение','нарОст','нЕдруг','недУг','некролОг','каталОг','нЕнависть','нОвости','новостЕй','мЕстностей','нОготь','нОгтя','Отрочество','партЕр','портфЕль','пОручни','придАное','призЫв','позЫв','отзЫв(посла)','созЫв','Отзыв(на публикацию)','свЁкла','сирОты','срЕдства','созЫв','призЫв','стАтуя','столЯр','малЯр','доЯр','школЯр','тамОжня','тОрты','тОртов','цемЕнт','цЕнтнер','цепОчка','шАрфы','бАнты','шофЁр','киоскЁр','контролЁр','экспЕрт','вернА','знАчимый','красИвее','красИвейший','кУхонный','ловкА','мозаИчный','оптОвый','прозорлИва','смазлИва','суетлИва','болтлИва','прожОрлива','слИвовый','слИва','бралА','брАться','бралАсь','взялА','взЯться','взялАсь','влИться','влилАсь','ворвАться','ворвалАсь','воспринЯть','воспринялА','воссоздалА','вручИть','вручИт','гналА','гнАться','гналАсь','добрАть','добралА','добрАться','добралАсь','дождАться','дождалАсь','дозвонИться','дозвонИтся','дозвонЯтся','дозИровать','ждалА','жИться','жилОсь','закУпорить','занЯть','зАнял','занялА','зАняло','зАняли','заперЕть','заперлА','заперЕться','заперлАсь','звалА','звонИть','звонИшь','звонИт','звонИм','исчЕрпать','клАсть','клАла','клЕить','крАсться','крАлась','лгалА','лилА','лИться','лилАсь','наврАть','навралА','наделИть','наделИт','надорвАться','надорвалАсь','назвАться','назвалАсь','накренИться','накренИтся','налИть','налилА','нарвАть','нарвалА','насорИть','насорИт','начАть','нАчал','началА','нАчали','обзвонИть','обзвонИт','облегчИть','облегчИт','облИться','облилАсь','обнЯться', 'обнялАсь', 'обогнАть', 'обогналА', 'ободрАть', 'ободралА', 'ободрИть', 'ободрИться', 'ободрИшься', 'обострИть', 'одолжИть', 'одолжИт', 'озлОбить', 'оклЕить', 'окружИть', 'окружИт', 'опломбировАть', 'формировАть', 'нормировАть', 'сортировАть', 'премировАть', 'опОшлить', 'освЕдомиться', 'освЕдомишься', 'отбЫть', 'отбылА', 'отдАть', 'отдалА', 'откУпорить', 'откУпорил', 'отозвАть', 'отозвалА', 'отозвАться', 'отозвалАсь', 'перезвонИть', 'перезвонИт', 'перелИть', 'перелилА', 'плодоносИть', 'повторИть', 'повторИт', 'позвАть', 'позвалА', 'позвонИть', 'позвонИшь', 'позвонИт', 'полИть', 'полилА', 'положИть', 'положИл', 'понЯть',' понялА',' послАть',' послАла',' прибЫть',' прИбыл',' прибылА',' прИбыло','принЯть',' прИнял',' прИняли',' принялА','принУдить',' рвать',' рвалА',' сверлИть',' сверлИшь',' сверлИт',' снЯть',' снялА',' создАть',' создалА',' сорвАть',' сорвалА',' сорИть',' сорИт',' убрАть',' убралА',' убыстрИть',' углубИть',' укрепИть',' укрепИт',' чЕрпать',' щемИть',' щемИт',' защемИт',' щЁлкать',' балОванный',' включЁнный',' включЁн',' низведЁнный',' довезЁнный',' зАгнутый',' зАнятый',' занятА',' зАпертый',' запертА',' заселЁнный',' заселенА',' избалОванный',' балОванный',' кормЯщий',' кровоточАщий',' молЯщий',' нажИвший',' нАжитый',' нажитА',' налИвший',' налитА',' нанЯвшийся',' начАвший',' нАчатый',' начатА',' низведЁнный',' низведЁн',' включЁнный',' ободрЁнный',' ободрЁн',' ободренА',' обострЁнный',' определЁнный',' определЁн',' отключЁнный',' повторЁнный',' поделЁнный',' понЯвший',' прИнятый',' приручЁнный',' прожИвший',' снЯтый',' снятА',' сОгнутый',' балУясь',' закУпорив',' начАв',' начАвшись',' отдАв',' поднЯв',' понЯв',' прибЫв','создАв','вОвремя','добелА','дОверху','донЕльзя','дОнизу','дОсуха','завИдно','зАгодя','зАсветло',' зАтемно',' красИвее',' навЕрх',' надОлго',' ненадОлго']
let j = 1
let t = document.querySelector('.true')
let m = document.querySelector('.msg')
let q = document.querySelector('.quest')
let a = document.querySelector('.answer-block')
function check(is = false) {
	a.style['display'] = 'block'
	q.style['display'] = 'none'
	if (is) {
		m.innerHTML = 'Правильно!'
		t.style.color = '#2EE036'
	}
	else {
		m.innerHTML = 'Ошибка!'
		t.style.color = '#D91414'
	}
}
function generate() {
	let i = Math.floor(Math.random() * words.length)
	while (i == j)
		i = Math.floor(Math.random() * words.length)
	q.innerHTML = convert(words[i])
	t.innerHTML = words[i]
	a.style['display'] = 'none'
	q.style['display'] = 'block'
	j = i
}
function convert(s) {
	let smallVowels = ['у','е','ы','а','о','э','я','и','ю','ё']
	let bigVowels = ['У','Е','Ы','А','О','Э','Я','И','Ю','Ё']
	let st = ''
	for (let i=0;i<s.length;i++){
		if (smallVowels.indexOf(s[i])!=-1) st +=`<span class="vowel" onclick="check()">${s[i]}</span>`
		else if (bigVowels.indexOf(s[i])!=-1) st += `<span class="vowel" onclick="check(true)">${s[i].toLowerCase()}</span>`
		else if (s[i] == '('){
			st += s.slice(i,s.length)
			break
		} else st += s[i]
	}
	return st
}
generate()