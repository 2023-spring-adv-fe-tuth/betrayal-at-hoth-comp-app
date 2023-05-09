export interface GameResult {
    start: string;
    end: string;
    players: number;
    winner: string;
};

export interface SetupData {
    start: string;
    players: number;
};

export const winnerRecord = (results: GameResult[]) => {
    const recentWinners = results.map(x => ({winner: x.winner, players: x.players}));

    return recentWinners;
};

export type GetLongestGame = (results: GameResult[]) => number;
export type GetShortestGame = (results: GameResult[]) => number;
export type GetAverageGameLengthsByPlayerCount = (results: GameResult[]) => {players: number, avgTime: number}[];

export const getLongestGame: GetLongestGame = (results: GameResult[]) => 
    Math.max(...results.map(x => new Date(x.end).getTime() - new Date(x.start).getTime()));

export const getShortestGame: GetShortestGame = (results: GameResult[]) => 
    Math.min(...results.map(x => new Date(x.end).getTime() - new Date(x.start).getTime()));

export const getGameDuration = (results: GameResult) => 
    new Date(results.end).getTime() - new Date(results.start).getTime();

export const getAverageGameDuration = (results: GameResult[]) => {
    const sum = results.reduce((acc, x) => acc + getGameDuration(x), 0);
};

export const avgGameLengths: GetAverageGameLengthsByPlayerCount = (results: GameResult[]) => {
    const groupedByPlayers = results.reduce(
        (acc, x) => acc.set(x.players, [...acc.get(x.players) ?? [], 
        new Date(x.end).getTime() - new Date(x.start).getTime()]), 
        new Map<number, number[]>()
    );

    return [...groupedByPlayers].map(x => ({players: x[0],
        avgTime: x[1].reduce((acc, x) => acc + x, 0) / x[1].length}))
        .sort((a, b) => a.players < b.players ? -1 : 1);
};