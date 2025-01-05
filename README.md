# React useState Hook Not Updating State Correctly

This repository demonstrates a common React bug related to the `useState` hook not updating state as expected. The issue arises from incorrect logic in the `useEffect` hook when attempting to update state based on previous state. The component renders only once, despite having logic to change state.

## Bug Description

The provided `MyComponent` uses `useState` to manage a count. The `useEffect` hook is intended to increment the count. However, because of incorrect logic the component renders only once, displaying a count of 0 and the increment button has no effect.

## Solution

The solution involves correctly using the functional update approach for state updates within the `useEffect` hook to ensure the previous state is correctly used to update the new state.  Additionally, the initial increment in the useEffect hook may cause unexpected behavior, therefore this initial state change has been removed.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install the necessary packages.
4. Run `npm start` to start the development server.
5. Observe the component not updating its state.
