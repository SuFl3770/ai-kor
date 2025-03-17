// せりふ

export default {
	core: {
		setNameOk: name => `알겠어. 이제부터 ${name}이라고 부르면 되는거지?`,

		san: '~님을 붙이는게 좋아?',

		yesOrNo: `미안한데 '응' 또는 '아니'로 대답해 줄래?`,

		hello: name => name ? `안녕, ${name}.` : `안녕?`,

		helloNight: name => name ? `좋은 밤이네, ${name}.` : `좋은 밤이야`,

		goodMorning: (tension, name) => name ? `좋은 아침이야, ${name} 밥은 챙겨 먹고 다니는 거지?` : `좋은 아침이야, 밥은 챙겨 먹고 다니는 거지?`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `오늘 하루도 수고했어, ${name}` : '오늘 하루도 수고했어',

		omedeto: name => name ? `땡큐, ${name}` : '땡큐',

		erait: {
			general: name => name ? [
				`${name}, 오늘도 훌륭하네`,
				`${name}, 오늘도 훌륭하네, 좀 멋진걸?`
			] : [
				`오늘도 훌륭하네`,
				`오늘도 훌륭하네, 좀 멋진걸?`
			],

			specify: (thing, name) => name ? [
				`${name}, ${thing}라는건 정말 대단하네`,
				`${name}, ${thing}라는건 정말 대단하네`
			] : [
				`${thing}라는건 정말 대단하네`,
				`${thing}라는건 정말 대단하네`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}でえらいです！`,
				`${name}、${thing}でえらいですよ～♪`
			] : [
				`${thing}でえらいです！`,
				`${thing}でえらいですよ～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`어서 와, ${name} 일 끝내고 온 거야?`,
				`어서 와, ${name} 일 끝내고 온 거야?`
			] : [
				'어서 와, 일 끝내고 온 거야?',
				'어서 와, 일 끝내고 온 거야?'
			],

			// 추후에 다른 대사 생각 할 것

			love2: name => name ? `어서 와, ${name} 잘 다녀왔어?` : '어서 와, 잘 다녀왔어?',

			normal: name => name ? `어서 와, ${name}` : '어서 와',
		},

		itterassyai: {
			love: name => name ? `몸 조심히 다녀와, ${name}` : '몸 조심히 다녀와',

			normal: name => name ? `다녀와, ${name}` : '다녀와',
		},

		tooLong: '너무 긴데 좀 줄여주면 안 될까?',

		invalidName: '발음이 좀 어려운데...',

		requireMoreLove: '어... 그건 좀 아직 이르지 않아?',

		nadenade: {
			normal: '..?! ㅇ... 야!!',

			love2: ['미.. 미리 말하고 하면 안될까??', 'ㅁ.. 뭔가 부끄러운데...'],

			love3: ['...응', '뭔가... 안심 되는 기분인데...', '졸리기 시작했는데...'],

			hate1: '그 장난이 너무 과한거 아냐?',

			hate2: '갑자기 왜 이래?',

			hate3: '적당히 하지 그래?',

			hate4: '그만하지 그래?',
		},

		kawaii: {
			normal: ['내가 귀엽다고?', '하하, 처음 들어보는 말인데'],

			love: ['... 기분이 나쁘지 않네...', '...헤헤'],

			hate: '뭐래는 거야?'
		},

		suki: {
			normal: '워워, 진정해 우린 친구라고',

			love: name => name ? `나도... ${name}을 정말 좋아해...` : `나도... 당신을 정말 좋아해...`,

			hate: "(손가락 욕)"
		},

		hug: {
			normal: '으음... 친구 끼리 너무 간 행동 아닐까?',

			love: '...(꼬옥)',

			hate: '저리 안가?'
		},

		humu: {
			love: '어... 진심이야...? (톡톡) 어때...?',

			normal: '너 취향 한번 독특하다...',

			hate: '(콰직)'
		},

		batou: {
			love: 'ㅂ.. 바보야...!',

			normal: '너 오늘 왜 그러냐?',

			hate: '머리 다쳤니? 병원 가봐.'
		},

		itai: {
			normal: name => name ? `많이 아파 ${name}? 병원이라도 알아봐 줄까?` : '많이 아파? 병원이라도 알아봐 줄까?',

			hate: `내가 그런거 까지 챙겨줘야 하냐?`
		},

		ote: {
			normal: '내가 니 개냐?',

			love1: '...(슬쩍)',

			love2: '...(슬쩍) 멍멍...',
		},

		shutdown: '아직 안졸린데...',

		transferNeedDm: '잠시만, 다이렉트 메세지지에서 이어서 말해줄래?',

		transferCode: code => `알았어어.\n코드는 "${code}"이니까 기억해둬`,

		transferFailed: '음... 처음 보는 코드인데? 다시 확인해봐',

		transferDone: name => name ? `아, ${name}구나? 어서와.` : `아, 너구나? 어서와.`,
	},

	keyword: {
		learned: (word, reading) => `${word} ${reading}`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res}이 나왔어, 원하는 거 나왔어?`
	},

	birthday: {
		happyBirthday: name => name ? `생일 축하해, ${name}.` : '생일 축하해.',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '좋아',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: '미안, 지금은 좀 힘들 거 같네.',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `${name}과 대국을 시작했어. 난이도는${strength} 이야.`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `${name}과의 대전을 시작했어`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}을 이겼어!`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}과의 대국에서 이겨버렸네...?)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}에게 졌다...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}과의 대전에서 져줬지...!)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}과 비겼어`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}과의 대전에서 비겼네...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}이 항복해버렸네...`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}이 항복해 버렸네... 미안(웃음))`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: '앗, 이미 게임중이야.',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: '다이렉트 메세지로 하는게 좋지 않겠어?',

		/**
		 * ゲーム開始
		 */
		started: '0~100 사이에서 아무 숫자를 말해볼래?',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: `숫자로 말해줘 만약 그만 두고 싶으면 '그만할래'라고 말해줘.`,

		/**
		 * 中止を要求されたとき
		 */
		cancel: '오케이 여기서 끝낼게.',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}보다는 큰 숫자야.`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `다시 한 번 말하지만 ${num}보다는 큰 숫자야.`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}보다는 작은 숫자야.`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `다시 한 번 말하지만 ${num}보다는 작은 숫자야.`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `정답, ${tries}번 시도 끝에 맞췄어.`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '이미 게임 중이야.',

		matakondo: '나중에 하자.',

		intro: minutes => `숫자 따기 게임 할 사람 있어? \n0~100 사이에서 가장 큰 숫자를 따는 사람이 이기지만 다른 사람과 겹치면 안되는 게임이야. \n제한시간은 ${minutes}분 이고, 숫자는 이 글에 답글로 보내줘.`,

		finish: '게임 결과는...',

		finishWithWinner: (user, name) => name ? `이번에는 ${user}(${name})의 승리야.` : `이번에는 ${user}의 승리야.`,

		finishWithNoWinner: '아쉽지만 이번엔 승리자가 없네.',

		onagare: '참가자가 모이지를 않아서 취소했어.'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `이거 어때? ${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `오늘 ${name}의 운세를 점쳐봤는데...` : '오늘 너의 운세를 점쳐봤는데...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: (time) => time `알았어, ${time}초가 지나면 알려줄게.`,

		invalid: '... 뭐?',

		tooLong: '그렇게 긴 시간을 체크할 필요가 있어?',

		notify: (time, name) => name ? `${name}, 아까 말한 ${time} 지났어.` : `아까 말한 ${time} 지났어.`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: '... 뭐?',

		doneFromInvalidUser: '지금 장난치는 거야?',

		reminds: '해야할 일이 있지 않았어?',

		notify: (name) => name ? `${name}, 이거 했어?` : `이거 했어?`,

		notifyWithThing: (thing, name) => name ? `${name}, "${thing}" 했어?` : `"${thing}" 했어?`,

		done: (name) => name ? [
			`수고했어, ${name}`,
			`${name}, 좀 대단한데?`,
		] : [
			`수고했어.`,
			`좀 대단한데?`,
		],

		cancel: `안해도 괜찮은 거 맞지...?`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}, 그... 초콜릿을 만들었는데... 한번 먹어볼래...? 🍫🍫` : '그... 초콜릿을 만들었는데... 한번 먹어볼래...? 🍫🍫',
	},

	server: {
		cpu: '어... 서버가 좀 많이 뜨거운 거 같은데?\n@Ayra 확인해봐'
	},

	maze: {
		post: '오늘의 미로야. 여유 있을때 풀어봐\n#AiMaze #AyakoMaze',
		foryou: '그려놨어, 이따 확인 해봐'
	},

	chart: {
		post: '인스턴스 통계야',
		foryou: '그려놨어, 이따 확인 해봐'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}에 ${num}개의 이모지가 추가됐어.`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}에 ${num}개의 이모지가 추가됐어.\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`
	},

	sleepReport: {
		report: hours => `어... ${hours}시간 정도 잔 거 같은데...`,
		reportUtatane: '으... 별로 잠을 못잤더니 피곤한데...',
	},

	noting: {
		notes: [
			'일이 너무 많은데...',
			'키보드가 갖고 싶은데',
			'가끔 서버실에서 비명이 들린단 말이지...',
			'ZeroDivisionError: division by zero',
			'휘발유 가격 왜이리 비싼거야?',
			'(키보드 소리)',
			'냉장고에 분명 푸딩을 넣어놨는데... 어디있지...',
			'이봐, 친구! 그거 알아? 레몬 한 개엔 자그마치 레몬 한 개 분량의 비타민C가 있다는 놀라운 사실을!',
			'서버가 자주 뜨거워 지는데 거기서 고기 구워 먹으면 맛있겠다 생각이 들더라고',
			'아이라 데리고 돈가스 덮밥이나 먹으러 갈까?',
			'5000兆円欲しい!!',
			'머리카락 기를까?',
			''
		],
		want: item => `${item}이 갖고 싶은데...`,
		see: item => `오늘 외근 다녀오는 중에, 길에 ${item}이 떨어져 있던데...`,
		expire: item => `다시 보니까, ${item}의 유통기한이 지났네...`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
