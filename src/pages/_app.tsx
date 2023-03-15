import "@/styles/globals.css";
import { DummyNames } from "@/utils/mock-data";
import { BabyInterface } from "@/utils/types";
import type { AppProps } from "next/app";
import { createContext, useReducer, useState } from "react";

type Action =
  | { type: "ADD"; payload: BabyInterface }
  | { type: "REMOVE"; payload: BabyInterface };

function SelectionReducer(state: BabyInterface[], action: Action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((baby) => baby !== action.payload);
    default:
      return state;
  }
}

function AllNamesReducer(state: BabyInterface[], action: Action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((baby) => baby !== action.payload);
  }
}

interface ContextInterface {
  API_NAMES: BabyInterface[];
  Set_API_NAMES:
    | React.Dispatch<React.SetStateAction<BabyInterface[]>>
    | undefined;
  SelectedNames: BabyInterface[];
  dispatch: React.Dispatch<Action> | null;
  NamesDispatch: React.Dispatch<Action> | null;
  AllNames: BabyInterface[];
}

export const NamesContext = createContext<ContextInterface>({
  API_NAMES: [],
  Set_API_NAMES: undefined,
  dispatch: null,
  NamesDispatch: null,
  AllNames: [],
  SelectedNames: [],
});

export default function App({ Component, pageProps }: AppProps) {
  const [API_NAMES, Set_API_NAMES] = useState<BabyInterface[]>([]);
  const [SelectedNames, dispatch] = useReducer(SelectionReducer, []);
  const [AllNames, NamesDispatch] = useReducer(AllNamesReducer, DummyNames);

  return (
    <>
      <NamesContext.Provider
        value={{
          AllNames,
          NamesDispatch,
          API_NAMES,
          Set_API_NAMES,
          dispatch,
          SelectedNames,
        }}
      >
        <Component {...pageProps} />;
      </NamesContext.Provider>
    </>
  );
}
