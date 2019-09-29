var api = {};

var frases = [
	{_id: 0, texto:'Faça. Ou não faça. Não existe a tentativa.', tempo: 9 },
	{_id: 1, texto:'Verdadeiramente maravilhosa, a mente de uma criança é.',tempo: 8 },
	{_id: 2, texto:'A morte é uma parte natural da vida. Feliz fique por aqueles que na Força se transformam. Apego leva ao ciúmes, a sombra da ganância isso é.', tempo: 28 },
	{_id: 3, texto:'Luke: Mas eu não acredito! Yoda: É por isso que você fracassa.', tempo: 15 },
	{_id: 4, texto:'O medo é o caminho para o lado negro. O medo leva a raiva, a raiva leva ao ódio, o ódio leva ao sofrimento.', tempo: 27 },
	{_id: 5, texto:'Guerras não faz grande ninguém', tempo: 5 },
	{_id: 6, texto:'Sempre passar o que você aprendeu.', tempo: 7 },
	{_id: 7, texto:'Treine a si mesmo a deixar partir tudo que teme perder.', tempo: 12 },
	{_id: 8, texto:'Melhor professor, o fracasso é', tempo: 7},
	{_id: 9, texto:'Que a Força esteja com você.', tempo: 6},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
