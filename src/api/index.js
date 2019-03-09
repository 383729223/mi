let baseUrl = '/mi'

// process.env.NODE_ENV === 'development' ? baseUrl = '/daxun' : baseUrl = 'https://www.daxunxun.com'
process.env.NODE_ENV === 'development' ? baseUrl = '/mi' : baseUrl = 'http://39.98.41.185/api'

export default baseUrl