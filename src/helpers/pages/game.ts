export const play = gesture => fetch("/api/rounds", {
    method: 'POST',
    body: { gesture }
}).then(response => response.json())