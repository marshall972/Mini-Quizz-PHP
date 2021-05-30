const app = Vue.createApp({
	data() {
		return {
			index: 0,
			selectedAnswer: '',
			correctAnswer: 0,
			wrongAnswer: 0,
			count: 8,
			questions: [
				{
					question: "Qu'est-ce que PHP ?",
					answers: {
						a: 'Un truc qui sert à rien',
						b: 'Une application web',
						c: 'Un language obscur et ancien',
						d: 'Un langage de script exécuté côté serveur, ainsi que son interpréteur',
					},
					correctAnswer: 'd',
				},
				{
					question: 'Qu\'elle est l\'objectif "premier" de PHP ?',
					answers: {
						a: 'Faire le café',
						b: 'Executer un script',
						c: 'Renvoyer une page web',
						d: 'Ecrire un programme',
					},
					correctAnswer: 'c',
				},
				{
					question: 'Que faut-il pour exécuter PHP ?',
					answers: {
						a: 'Un serveur, son interpréteur ainsi que des modules si besoin',
						b: 'Un pc gamer',
						c: 'Visual Studio Code',
						d: "Un peloton d'exécution",
					},
					correctAnswer: 'a',
				},
				{
					question: 'Choississez les bonnes balises PHP',
					answers: {
						a: '<php> codephp </php>',
						b: '<?php codephp /?php>',
						c: '<?php> codephp <?>',
						d: '<?php codephp ?>',
					},
					correctAnswer: 'd',
				},
				{
					question:
						"Qu'elle instruction permet importer et d'exécuter un fichier ?",
					answers: {
						a: 'array',
						b: 'include',
						c: 'count',
						d: 'summon',
					},
					correctAnswer: 'b',
				},
				{
					question: "Qu'est-ce qu'une variable superglobale ?",
					answers: {
						a: 'Une variable mondialiste',
						b: 'Une variable qui est vraiment sympa',
						c: 'Un variable utilisable partout',
						d: 'Une variable originaire de Krypton',
					},
					correctAnswer: 'c',
				},
				{
					question: 'Que renvoi une variable superglobale ?',
					answers: {
						a: 'Un tableau associatif',
						b: 'La balle..',
						c: 'Une page web',
						d: 'Une erreur critique',
					},
					correctAnswer: 'a',
				},
				{
					question:
						"Quelle superglobale contient les données d'un formulaire?",
					answers: {
						a: '$_POST',
						b: '$_SESSION',
						c: '$_ENV',
						d: '$_SERVER',
					},
					correctAnswer: 'a',
				},
			],
		};
	},
	methods: {
		answered(e) {
			this.selectedAnswer = e.target.value;
			console.log(e.target.value);
			if (
				this.selectedAnswer ==
				this.questions[this.index]['correctAnswer']
			)
				this.correctAnswer++;
			else this.wrongAnswer++;
		},
		nextQuestion() {
			this.index++;
			this.selectedAnswer = '';
		},
		showResults() {
			this.index++;
		},
		resetQuiz() {
			this.index = 0;
			this.selectedAnswer = '';
			this.correctAnswer = 0;
			this.wrongAnswer = 0;
		},
	},
});
app.mount('#app');
