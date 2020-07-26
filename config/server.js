module.exports = ({ env }) => {
  console.log('THE PORT IS ==========', env.int('PORT', 1337), '=============')
  console.log('THE DATABASE_HOST IS =============', env('DATABASE_HOST', ''), '=================')
  console.log('THE DATABASE_PORT IS =============', env('DATABASE_PORT', ''), '=================')
  console.log('THE DATABASE_NAME IS =============', env('DATABASE_NAME', ''), '=================')
  console.log('THE DATABASE_USERNAME IS =============', env('DATABASE_USERNAME', ''), '=================')
  console.log('THE DATABASE_PASSWORD IS =============', env('DATABASE_PASSWORD', ''), '=================')
  console.log('THE DATABASE_URI IS =============', env('DATABASE_URI', ''), '=================')
  return {
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
}};
