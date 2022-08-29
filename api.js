// import fetch from 'node-fetch'
// import {FormData} from 'formdata-node'

// const oAuthToken = 'y0_AgAAAABkHYlRAADLWwAAAADNNFsjCdaZNHf2QIK6836Wn7_ZnmST5Tg' // мой токен от Яндекс Диска

    //  получить данные о пользователе по секретному коду

// fetch('https://login.yandex.ru/info?format=json&jwt_secret=5944f66b8c214fa4a0c7a391214108d6&with_openid_identity=1&oauth_token=y0_AgAAAABkHYlRAADLWwAAAADNNFsjCdaZNHf2QIK6836Wn7_ZnmST5Tg')
//     .then(d => d.json())
//     .then(d => console.log(d))
//     .catch(error => console.log(error)
// )

// fetch('https://login.yandex.ru/info?format=jwt&jwt_secret=5944f66b8c214fa4a0c7a391214108d6&with_openid_identity=1&oauth_token=y0_AgAAAABkHYlRAADLWwAAAADNNFsjCdaZNHf2QIK6836Wn7_ZnmST5Tg')
//     .then(d => console.log(d))
//     .catch(error => console.log(error)
// )

// получить ссылку с Яндекс Диска, для загрузки файла на Яндекс Диск

// const yanDiskPuth = '/foto.jpg' // придумать или повторить исходное имя файла, под которым он загрузится на Яндекс Диск
// const fieldAttributes = `type='file'`// не обязательно
// const bazeURL = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${yanDiskPuth}&fields=${fieldAttributes}`
// let lincURL = ''

// try {
//   const response = await fetch(bazeURL, {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': `OAuth ${oAuthToken}`
//     }
//   })
//   const result = await response.json()
//   console.log('Успех:', JSON.stringify(result))
//   console.log('href:', JSON.stringify(result.href))
//   lincURL = JSON.stringify(result.href)
// } catch (error) {
//   console.error('Ошибка:', error)
// }

    // загрузить файл на Яндекс Диск по сгенерированной Яндекс Диском ссылке 
// const formData = new FormData()
// let fileField = document.querySelector('input[type="file"]')

// console.log(fileField)

// formData.append('username', 'abc123')
// formData.append('avatar', fileField.files[0])

// try {
//   const response = await fetch(lincURL, {
//     method: 'PUT',
//     body: formData,
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': `OAuth ${oAuthToken}`
//     }
//   })
//   const result = await response.json();
//   console.log('Успех:', JSON.stringify(result));
// } catch (error) {
//   console.error('Ошибка:', error)
// }

     // загрузить файл на Я.диск со стороннего ресурса
// const externalResourceURL = readerBlobFile.result; // url с данными   
// const yandexDiskPuth = '/avatar.jpg' // придумать или повторить исходное имя файла, под которым он загрузится на Яндекс Диск
// const oAuthToken = 'y0_AgAAAABkHYlRAADLWwAAAADNNFsjCdaZNHf2QIK6836Wn7_ZnmST5Tg' // мой токен от Яндекс Диска        
// const yandexDiskURL = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${yandexDiskPuth}&url=${externalResourceURL}` // ссылка на Яндекс Диск

//     try {
//         const response = await fetch(yandexDiskURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': `OAuth ${oAuthToken}`
//         }
//     })
//     const result = await response.json();
//     console.log('Успех:', JSON.stringify(result));
//     } catch (error) {
//     console.error('Ошибка:', error)
//     }

    // загрузить файл на Я.диск со стороннего ресурса
// const externalResourceURL = 'https://avatars.mds.yandex.net/get-yapic/41409/XUvOlGdlzAnJcMM28OFOc2BYG8o-1/islands-retina-middle' // ссылка на внешний ресурс, т е на загружаемый файл
// const yandexDiskPuth = '/avatar.jpg' // придумать или повторить исходное имя файла, под которым он загрузится на Яндекс Диск
// const oAuthToken = 'y0_AgAAAABkHYlRAADLWwAAAADNNFsjCdaZNHf2QIK6836Wn7_ZnmST5Tg' // мой токен от Яндекс Диска
// const externalResourceURL = localStorage["photoKey"]
// const yandexDiskURL = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${yandexDiskPuth}&url=${externalResourceURL}` // ссылка на Яндекс Диск

// try {
//   const response = await fetch(yandexDiskURL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `OAuth ${oAuthToken}`
//     }
//   })
//   const result = await response.json();
//   console.log('Успех:', JSON.stringify(result));
// } catch (error) {
//   console.error('Ошибка:', error)
// }
