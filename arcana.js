const storageProvider = require("@arcana/storage");
const ARCANA_APP_ADDRESS = "3c875b5915515c4491E1dcD8a1C218DeE64Eb8e3";
dAppStorageProvider = storageProvider.StorageProvider.init({
  appAddress: ARCANA_APP_ADDRESS,
  chainId: 100,
});
console.log(dAppStorageProvider);
