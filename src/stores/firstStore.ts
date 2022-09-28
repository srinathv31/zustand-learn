import create from "zustand";

interface Players {
    bears: number,
    increase: (amt: number) => void,
    players: Player[],
    addPlayer: (newPlayer: Player) => void
}

interface Player {
    name: string,
    age: number,
    position: "PG" | "C"
}

const usePlayerStore = create<Players>()((set) => ({
    bears: 0,
    increase: (amt) => set((state) => ({ bears: state.bears + amt })),
    players: [
        {
            name: "Lebron",
            age: 23,
            position: "PG"
        }
    ],
    addPlayer: (newPlayer) => set((state) => ({ players: [ ...state.players, newPlayer ] }))
}));

export default usePlayerStore;
