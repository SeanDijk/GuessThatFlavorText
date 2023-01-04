import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export let randomGuessSettings = {
  enabledSets: persist(writable("[]"), createLocalStorage(), "enabledSets") // empty means that everything is enabled
}
