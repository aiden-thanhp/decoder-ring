const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8080";

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  default value returned if the fetch is cancelled.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options);

        if (response.status < 200 || response.status > 399) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }

        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }
        return Promise.resolve(onCancel)
    }
}

/**
 * Retrieves all existing games.
 * @returns {Promise<[games]>}
 *  a promise that resolves to a possibly empty array of games saved in the database.
 */
export async function listGames(signal) {
  const url = `${API_BASE_URL}/games`;
  return await fetchJson(url, { signal }, []);
}

/**
 * Retrieves the deck with the specified `gameId`
 * @param gameId
 *  the `id` property matching the desired game.
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<any>}
 *  a promise that resolves to the saved game.
 */
export async function readGame(gameId, signal) {
  const url = `${API_BASE_URL}/games/${gameId}`;
  return await fetchJson(url, { signal }, {});
}