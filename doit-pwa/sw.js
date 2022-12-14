self.addEventListener('install', pEvent => {
    console.log('서비스 워커 설치!', pEvent);
});

self.addEventListener('activate', pEvent => {
    console.log('서비스워커 활성화!', pEvent);
});

self.addEventListener('fetch', pEvent => {
    console.log('데이터 fetch', pEvent.request);
});