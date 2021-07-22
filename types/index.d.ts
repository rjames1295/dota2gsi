import { PlayerExtension, TeamExtension } from './interfaces';
import { Dota2Raw, PlayerRaw, HeroRaw, PlayerKeys, PlayerKey, RadiantPlayerIds, DirePlayerIds } from './dota2';
import { Dota2, Player, Hero } from './parsed';
interface Events {
	data: (data: any) => void;
	newListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
	removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => void;
}
declare type EventNames = keyof Events;
interface EventDescriptor {
	listener: Events[EventNames];
	once: boolean;
}
declare class DOTA2GSI {
	private descriptors;
	private maxListeners;
	teams: {
		radiant: TeamExtension | null;
		dire: TeamExtension | null;
	};
	players: PlayerExtension[];
	last?: Dota2;
	constructor();
	eventNames: () => (keyof Events)[];
	getMaxListeners: () => number;
	listenerCount: (eventName: EventNames) => number;
	listeners: (
		eventName: EventNames
	) => (
		| ((data: any) => void)
		| (<K extends keyof Events>(eventName: K, listener: Events[K]) => void)
		| (<K_1 extends keyof Events>(eventName: K_1, listener: Events[K_1]) => void)
	)[];
	removeListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	off: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	addListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	on: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	once: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	prependListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	emit: (eventName: EventNames, arg?: any, arg2?: any) => boolean;
	prependOnceListener: <K extends keyof Events>(eventName: K, listener: Events[K]) => this;
	removeAllListeners: (eventName: EventNames) => this;
	setMaxListeners: (n: number) => this;
	rawListeners: (eventName: EventNames) => EventDescriptor[];
	digest: (rawGSI: Dota2Raw) => void;
}
export { DOTA2GSI };
export {
	PlayerRaw,
	Dota2Raw,
	Player,
	PlayerExtension,
	TeamExtension,
	Hero,
	HeroRaw,
	PlayerKeys,
	PlayerKey,
	RadiantPlayerIds,
	DirePlayerIds
};
