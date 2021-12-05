export const play = gesture => fetch("/api/rounds", {
    method: 'POST',
    body: JSON.stringify({gesture})
}).then(response => response.json())
