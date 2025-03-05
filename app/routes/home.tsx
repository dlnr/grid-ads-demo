import type {Route} from "./+types/home"
import {GridDemo} from "../grid/GridDemo"

export function meta({}: Route.MetaArgs) {
  return [{title: "ADS Grid Demo"}, {name: "description", content: "Welcom to gridding with components"}]
}

export default function Home() {
  return <GridDemo />
}
