// Actions sent by main thread to the web worker
const mainToWorker = "[main --> worker]";
export const INIT = `${mainToWorker} INIT`;
export const REQUEST_BITMAP = `${mainToWorker} REQUEST_BITMAP`;
export const REQUEST_FRAME = `${mainToWorker} REQUEST_FRAME`;
export const START_RENDER_LOOP = `${mainToWorker} START_RENDER_LOOP`;
export const STOP_RENDER_LOOP = `${mainToWorker} STOP_RENDER_LOOP`;

// Actions sent by the web worker to the main thread
const workerToMain = "[main <-- worker]";
export const KILL_ME = `${workerToMain} KILLME`;
export const NOTIFY = `${workerToMain} NOTIFY`;
export const BITMAP = `${workerToMain} BITMAP`;
