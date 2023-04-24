export interface GameResult {
    start: string;
    end: string;
    players: number;
    winner: string;
}

export interface SetupData {
    start: string;
    players: number;
}

export const winnerRecord = (results: GameResult[]) => {
    const recentWinners = results.map(x => x.winner);

    return recentWinners;
};

export type GetLongestGame = (results: GameResult[]) => number;
export type GetShortestGame = (results: GameResult[]) => number;
export type GetAverageGameLengthsByPlayerCount = (results: GameResult[]) => { playerCount: number, avgTime: number }[];

export const getLongestGame: GetLongestGame = (results) => Math.max(...results.map(x => new Date(x.end).getTime() - new Date(x.start).getTime()));
export const getShortestGame: GetShortestGame = (results) => Math.min(...results.map(x => new Date(x.end).getTime() - new Date(x.start).getTime()));

// export const getAvgGameLengths: GetAverageGameLengthsByPlayerCount = (results) => {

// 	const gameDurationsGroupedByNumberOfPlayers = results.reduce(
// 		(acc, x) => acc.set(x.players.length
// 			, [
// 				...acc.get(x.players.length) ?? []
// 				, new Date(x.end).getTime() - new Date(x.start).getTime()
// 			]
// 		)
// 		, new Map<number, number[]>()
// 	);

// 	return [...gameDurationsGroupedByNumberOfPlayers]
// 		.map(x => ({
// 			playerCount: x[0]
// 			, avgTime: x[1].reduce((acc, x) => acc + x, 0) / x[1].length
// 		}))
// 		.sort(
// 			(a, b) => a.playerCount >= b.playerCount ? 1 : -1
// 		)
// 	;
// };