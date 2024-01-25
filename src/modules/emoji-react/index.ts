import { bindThis } from '@/decorators.js';
import { parse } from 'twemoji-parser';

import type { Note } from '@/misskey/note.js';
import Module from '@/module.js';
import Stream from '@/stream.js';
import includes from '@/utils/includes.js';
import { sleep } from '@/utils/sleep.js';

export default class extends Module {
	public readonly name = 'emoji-react';

	private htl: ReturnType<Stream['useSharedConnection']>;

	@bindThis
	public install() {
		this.htl = this.ai.connection.useSharedConnection('homeTimeline');
		this.htl.on('note', this.onNote);

		return {};
	}

	@bindThis
	private async onNote(note: Note) {
		if (note.reply != null) return;
		if (note.text == null) return;
		if (note.text.includes('@')) return; // (自分または他人問わず)メンションっぽかったらreject
		if (note.user.host) return; // if user is from remote instance

		const react = async (reaction: string, immediate = false) => {
			if (!immediate) {
				await sleep(1500);
			}
			this.ai.api('notes/reactions/create', {
				noteId: note.id,
				reaction: reaction
			});
		};

		const newEmoji = note.text.match(/:etc_new_l::([^\n:]+?)(_)([^\n:]+?)::etc_new_r:/g)
		if (newEmoji)
			return react(newEmoji[0].slice(11, -11))

		const customEmojis = note.text.match(/:([^\n:]+?)(_)([^\n:]+?):/g);
		if (customEmojis) {
			// カスタム絵文字が複数種類ある場合はキャンセル
			if (!customEmojis.every((val, i, arr) => val === arr[0])) return;

			this.log(`Custom emoji detected - ${customEmojis[0]}`);

			return react(customEmojis[0]);
		}

		const emojis = parse(note.text).map(x => x.text);
		if (emojis.length > 0) {
			// 絵文字が複数種類ある場合はキャンセル
			if (!emojis.every((val, i, arr) => val === arr[0])) return;

			this.log(`Emoji detected - ${emojis[0]}`);

			let reaction = emojis[0];

			switch (reaction) {
				case '✊': return react('🖐', true);
				case '✌': return react('✊', true);
				case '🖐': case '✋': return react('✌', true);
			}

			return react(reaction);
		}

		if (includes(note.text, ['피자', '핏자'])) return react('🍕');
		if (includes(note.text, ['푸딩', '푸링'])) return react('🍮');
		if (includes(note.text, ['스시', '초밥', 'sushi'])) return react('🍣');
		if (includes(note.text, ['햄버거'])) return react('🍔');
		if (includes(note.text, ['타코'])) return react('🌮');
		if (includes(note.text, ['치킨'])) return react('🍗');
		if (includes(note.text, ['샐러드'])) return react('🥗');

		if (includes(note.text, ['아이쨩'])) return react('🙌');
	}
}
