module.exports = {
    DB_NAME: process.env.DB_NAME || 'auto_shop',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'root',

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'm.glub@gmail.com',
    ROOT_EMAIL_PASS: process.env.ROOT_EMAIL_PASS || '12345',
    FRONTEND_URL: process.env.FORNTEND_URL || 'https://owu.com.ua/',

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'HelloWorld',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'UltraSecret',
};
