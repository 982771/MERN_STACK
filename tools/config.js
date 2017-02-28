const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/retrodea',
  port: process.env.PORT || 3030,
};

export default config;
