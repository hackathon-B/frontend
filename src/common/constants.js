export const BASE_URL = 'https://127.0.0.1:8080';

/**
 * APIエンドポイントの定数と関数
 *
 * 各APIエンドポイントへのパスを定義しています。固定エンドポイントは文字列として、動的エンドポイントは関数として定義されています。
 */
export const API_URLS = {
    /**
     * ユーザーログイン
     * @type {string}
     */
    LOGIN: '/api/auth/login',

    /**
     * ユーザー登録
     * @type {string}
     */
    REGISTER: '/api/auth/register',

    /**
     * Googleログイン
     * @type {string}
     */
    GOOGLE_LOGIN: '/api/auth/google',

    /**
     * ログアウト
     * @type {string}
     */
    LOGOUT: '/api/auth/logout',

    /**
     * ユーザー情報取得
     * @type {string}
     */
    GET_USER: '/api/user',

    /**
     * ユーザー情報更新
     * @type {string}
     */
    UPDATE_USER: '/api/user',

    /**
     * ユーザー削除
     * @type {string}
     */
    DELETE_USER: '/api/user',

    /**
     * チャット開始
     * @type {string}
     */
    START_CHAT: '/api/chats',

    /**
     * チャット一覧取得
     * @type {string}
     */
    GET_CHAT_LIST: '/api/chats',

    /**
     * 特定のチャット情報取得
     * @function
     * @param {number|string} id - チャットID
     * @returns {string} チャット情報取得用のURL
     * @example
     * const endpoint = API_URLS.GET_CHAT_BY_ID(123);
     * // endpoint は "/api/chats/123" となる
     */
    GET_CHAT_BY_ID: (id) => `/api/chats/${id}`,

    /**
     * 特定のチャット情報更新
     * @function
     * @param {number|string} id - チャットID
     * @returns {string} チャット情報更新用のURL
     * @example
     * const endpoint = API_URLS.UPDATE_CHAT_BY_ID(123);
     * // endpoint は "/api/chats/123" となる
     */
    UPDATE_CHAT_BY_ID: (id) => `/api/chats/${id}`,

    /**
     * 特定のチャット削除
     * @function
     * @param {number|string} id - チャットID
     * @returns {string} チャット削除用のURL
     * @example
     * const endpoint = API_URLS.DELETE_CHAT_BY_ID(123);
     * // endpoint は "/api/chats/123" となる
     */
    DELETE_CHAT_BY_ID: (id) => `/api/chats/${id}`,

    /**
     * 特定チャットへのメッセージ追加
     * @function
     * @param {number|string} id - チャットID
     * @returns {string} メッセージ追加用のURL
     * @example
     * const endpoint = API_URLS.ADD_MESSAGE(123);
     * // endpoint は "/api/chats/123/messages" となる
     */
    ADD_MESSAGE: (id) => `/api/chats/${id}/messages`,

    /**
     * 特定チャット内のメッセージ更新
     * @function
     * @param {number|string} id - チャットID
     * @param {number|string} messageId - メッセージID
     * @returns {string} メッセージ更新用のURL
     * @example
     * const endpoint = API_URLS.UPDATE_MESSAGE(123, 456);
     * // endpoint は "/api/chats/123/messages/456" となる
     */
    UPDATE_MESSAGE: (id, messageId) => `/api/chats/${id}/messages/${messageId}`,

    /**
     * 辞書追加
     * @type {string}
     */
    ADD_DICTIONARY: '/api/dictionary',

    /**
     * 辞書一覧取得
     * @type {string}
     */
    GET_DICTIONARY_LIST: '/api/dictionary',

    /**
     * 特定辞書情報取得
     * @function
     * @param {number|string} id - 辞書ID
     * @returns {string} 辞書情報取得用のURL
     * @example
     * const endpoint = API_URLS.GET_DICTIONARY_BY_ID(789);
     * // endpoint は "/api/dictionary/789" となる
     */
    GET_DICTIONARY_BY_ID: (id) => `/api/dictionary/${id}`,

    /**
     * 特定辞書情報更新
     * @function
     * @param {number|string} id - 辞書ID
     * @returns {string} 辞書情報更新用のURL
     * @example
     * const endpoint = API_URLS.UPDATE_DICTIONARY_BY_ID(789);
     * // endpoint は "/api/dictionary/789" となる
     */
    UPDATE_DICTIONARY_BY_ID: (id) => `/api/dictionary/${id}`,

    /**
     * 特定辞書削除
     * @function
     * @param {number|string} id - 辞書ID
     * @returns {string} 辞書削除用のURL
     * @example
     * const endpoint = API_URLS.DELETE_DICTIONARY_BY_ID(789);
     * // endpoint は "/api/dictionary/789" となる
     */
    DELETE_DICTIONARY_BY_ID: (id) => `/api/dictionary/${id}`,

    /**
     * 辞書検索
     * @type {string}
     */
    SEARCH_DICTIONARY: '/api/dictionary/search',

    /**
     * ヘルスチェック
     * @type {string}
     */
    HEALTH_CHECK: '/api/health',
};

export const API_CHAT_URLS = (chat_id) => ({
  GET_CHAT_BY_ID: `/api/chats/${chat_id}`,
  UPDATE_CHAT_BY_ID: `/api/chats/${chat_id}`,
  DELETE_CHAT_BY_ID: `/api/chats/${chat_id}`, 
})


export const API_CHAT_MESSAGE_URLS = {
  ADD_MESSAGE: (id) => `/api/chats/${id}/messages`,
  UPDATE_MESSAGE: (id, messageId) => `/api/chats/${id}/messages/${messageId}`,
};

export const URL_ADD_CHAT_ID = {
  CHAT_ID: 'chatId',
};


export const URL_ADD_DICTIONARY_ID = (id) => {
  DICTIONARY_ID: 'dictionaryId',

};