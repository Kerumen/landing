export const openMailchimpModal = () => {
  window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
    L.start({
      baseUrl: 'mc.us19.list-manage.com',
      uuid: '4a11c93b3bc3fb3fa2bb52e8b',
      lid: 'a10b749ce9',
      uniqueMethods: true,
    })
  })
  document.cookie = 'MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie = 'MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
}
