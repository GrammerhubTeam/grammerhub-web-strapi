module.exports = ({ env }) => {
  console.log('THE PORT IS ==========', env.int('PORT', 1337), '=============')
  return {
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
}};
