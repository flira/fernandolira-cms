module.exports = ({ env }) => ({
  email: {
    provider: 'sendmail',
    providerOptions: {
      dkim: {
        privateKey: env('MAIL_KEY'),
        keySelector: env('MAIL_SELECTOR')
      },
      smtpHost: 'toscocloud.com'
    },
    settings: {
      defaultFrom: 'fernando@fernandolira.co',
      defaultReplyTo: 'fernando@fernandolira.co',
    }
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::work.work",
          modelName: "work",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: "title",
                weight: 100
              }, {
                name: "type",
                weight: 50
              },
              {
                name: "description",
                weight: -100
              }
            ]
          }
        }
      ]
    }
  }
})