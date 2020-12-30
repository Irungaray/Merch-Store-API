module.exports = {
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: 'merchstoreapibucket',
          publicFiles: false,
          uniform: false,
          basePath: '',
      },
  },
  //...
}