// Returns a randomly selected item from an array of items
export function choice(items) {
    return items[ Math.floor(Math.random() * items.length)]
}


// Removes the first matching item
// If the item exists, returns the item : Otherwise returns undefined
export function remove(items, item) {
    return items.filter( i => i !== item)
}