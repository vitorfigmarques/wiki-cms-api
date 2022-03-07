module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'edc6dd5d4dad2a9500ffcfe9491fad74'),
  },
});
