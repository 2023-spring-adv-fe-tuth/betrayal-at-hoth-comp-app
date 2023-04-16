export interface GameResult {
    start: string;
    end: string;
    players: number;
    winner: string;
}

export const winnerRecord = (results: GameResult[]) => {
    const recentWinners = results.map(x => x.winner);

    return recentWinners;
};