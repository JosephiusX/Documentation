import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

// creating store
const useBearStore = create((set) => ({
  bears: 0, // initial state
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })), // Increase Action
  removeAllBears: () => set({ bears: 0 }), // Remove Action
}))

export const BearCounter = () => {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

export const Controls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}


export const Everything = () => {
// Fetch entire state 
// ! Component refresh every state change
  const state = useBearStore()
  return console.log(state)
}

export const StateSlices= () => {
// Select multiple state slices
// detect changes with strict equality (old === new)
// efficient for atomic state picks

  // const nuts = useBearStore((state) => state.nuts)
  // const honey = useBearStore((state) => state.honey)
  // or Array
// const [nuts, honey] = useBearStore(
// (state) => [state.nuts, state.honey],
// shallow
            // or both as Object
  const { nuts, honey } = useBearStore(
    (state) => ({ nuts: state.nuts, honey: state.honey }),
    shallow
  )
  // Mapped picks, re-renders the component when state.treats changes in order, count or keys

  const treats = useBearStore((state) => Object.keys(state.treats), shallow)


  return console.log({})
}

