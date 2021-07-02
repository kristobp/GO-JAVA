const destinasi = {
  gunung: [
    {
      nama: `Bromo`,
      lokasi: `Jawa Timur`,
      kuota: 20,
      harga: 200000,
      rating: 4.6,
      gambar: `./kategori/Bromo.png`,
    },
    {
      nama: `Semeru`,
      lokasi: `Jawa Timur`,
      kuota: 30,
      harga: 150000,
      rating: 4.6,
      gambar: `./kategori/Semeru.png`,
    },
    {
      nama: `Merapi`,
      lokasi: `Jawa Tengah`,
      kuota: 25,
      harga: 100000,
      rating: 4.4,
      gambar: `./kategori/Merapi.png`,
    },
    {
      nama: `Merbabu`,
      lokasi: `Jawa Tengah`,
      kuota: 40,
      harga: 250000,
      rating: 4.6,
      gambar: `./kategori/Merbabu.png`,
    },
    {
      nama: `Galunggung`,
      lokasi: `Jawa Barat`,
      kuota: 35,
      harga: 100000,
      rating: 4.4,
      gambar: `./kategori/Galunggung.png`,
    },
  ],

  pantai: [
    {
      nama: `Pangandaran`,
      lokasi: `Jawa Barat`,
      kuota: 70,
      harga: 300000,
      rating: 4.6,
      gambar: './kategori/Pangandaran.png',
    },
    {
      nama: `Balekambang`,
      lokasi: `Jawa Timur`,
      kuota: 50,
      harga: 150000,
      rating: 4.4,
      gambar: './kategori/Balekambang.jpg',
    },
    {
      nama: `Karimun Jawa`,
      lokasi: `Jawa Tengah`,
      kuota: 20,
      harga: 450000,
      rating: 4.6,
      gambar: './kategori/Karimun Jawa.jpg',
    },
    {
      nama: `Anyer`,
      lokasi: `Banten`,
      kuota: 100,
      harga: 150000,
      rating: 4.5,
      gambar: './kategori/Anyer.jpg',
    },
    {
      nama: `Carita`,
      lokasi: `Banten`,
      kuota: 50,
      harga: 50000,
      rating: 4.4,
      gambar: './kategori/Carita.jpg',
    },
  ],

  museum: [
    {
      nama: `Angkut`,
      lokasi: `Jawa Timur`,
      kuota: 200,
      harga: 300000,
      rating: 4.5,
      gambar: './kategori/Angkut.jpg',
    },
    {
      nama: `10 November`,
      lokasi: `Jawa Timur`,
      kuota: 150,
      harga: 150000,
      rating: 4.5,
      gambar: './kategori/10 November.jpg',
    },
    {
      nama: `Zoologi Bogor`,
      lokasi: `Jawa Barat`,
      kuota: 75,
      harga: 50000,
      rating: 3.5,
      gambar: './kategori/Zoologi Bogor.jpg',
    },
    {
      nama: `Kretek Kudus`,
      lokasi: `Jawa Tengah`,
      kuota: 40,
      harga: 75000,
      rating: 0,
      gambar: './kategori/Kretek Kudus',
    },
    {
      nama: `House of Sampoerna`,
      lokasi: `Jawa Timur`,
      kuota: 50,
      harga: 100000,
      rating: 4,
      gambar: './kategori/House of Sampoerna',
    },
  ],
  tamanRekreasi: [
    {
      nama: `Dunia Fantasi`,
      lokasi: `DKI Jakarta`,
      kuota: 5000,
      harga: 400000,
      rating: 4.6,
      gambar: './kategori/Dufan.jpg',
    },
    {
      nama: `Taman Mini Indonesia Indah`,
      lokasi: `DKI Jakarta`,
      kuota: 2000,
      harga: 200000,
      rating: 4.5,
      gambar: './kategori/TMII.jpg',
    },
    {
      nama: `Trans Snow World Bekasi`,
      lokasi: `Jawa Barat`,
      kuota: 500,
      harga: 600000,
      rating: 4.5,
      gambar: './kategori/Trans Snow World Bekasi.jpeg',
    },
    {
      nama: `Jawa Timur Park 2`,
      lokasi: `Jawa Timur`,
      kuota: 1500,
      harga: 150000,
      rating: 4.5,
      gambar: './kategori/Jatim Park.jpg',
    },
    {
      nama: `Batu Night Spectacular`,
      lokasi: `Jawa Timur`,
      kuota: 150,
      harga: 100000,
      rating: 4.4,
      gambar: './kategori/Batu Night.jpg',
    },
  ],

  kebunBinatang: [
    {
      nama: `Taman Margasatwa Ragunan`,
      lokasi: `DKI Jakarta`,
      kuota: 600,
      harga: 50000,
      rating: 4.5,
      gambar: './kategori/Ragunan.jpg',
    },
    {
      nama: `Kebun Binatang Surabaya`,
      lokasi: `Jawa Timur`,
      kuota: 500,
      harga: 75000,
      rating: 4.3,
      gambar: './kategori/Kebun Binatang Surabaya.png',
    },
    {
      nama: `Margasatwa Semarang`,
      lokasi: `Jawa Tengah`,
      kuota: 300,
      harga: 35000,
      rating: 4.1,
      gambar: './kategori/Margasatwa Semarang.png',
    },
    {
      nama: `Kebun Binatang Bandung`,
      lokasi: `Jawa Barat`,
      kuota: 300,
      harga: 65000,
      rating: 4,
      gambar: './kategori/Kebun Binatang Bandung.jpg',
    },
    {
      nama: `Taman Safari`,
      lokasi: `Jawa Barat`,
      kuota: 300,
      harga: 800000,
      rating: 4.6,
      gambar: './kategori/Taman Safari.jpg',
    },
  ],
};

const budgets = {
  1: {
    min: 0,
    max: 100000,
  },
  2: {
    min: 100000,
    max: 200000,
  },
  3: {
    min: 200000,
    max: 300000,
  },
  4: {
    min: 300000,
    max: Number.POSITIVE_INFINITY,
  },
};

// GET ELEMENTS
///////////////////////////////////////////////////////

// EVENT HANDLER //
///////////////////////////////////////////////////////

// Display destinasi //

// const kontainerDestinasi = document.querySelector('.destinasi-box');
// console.log(kontainerDestinasi.innerHTML);
//
// // get user budget input
// const getIndex = document.querySelectorAll('.budget');
// // gimana cara tau kalo user pilih opsi itu ???
// const inputBudget = document.querySelector('#budget-user');
// const getUserBudget = function (budgets, getIndex) {
//   // TODO: RETURN false IF buat kondisi kalo isinya "Pilih Range Harga"
//   for (el of getIndex) {
//     const budgetUser = el.className[el.className.length - 1];
//
//     const min = budgets[budgetUser].min;
//     const max = budgets[budgetUser].max;
//
//     return [min, max];
//   }
// };
// let rangeBudget = [0, 100000];
// // rangeBudget = false;
// // let rangeBudget = getUserBudget(budgets, getIndex);
// // console.log(rangeBudget);
//
// // sorting destinasi by harga per kategori
// const sorting = function (desKat) {
//   const sortedDestinasi = [];
//   const arr = [];
//   const index = [];
//   for ([i, el] of desKat.entries()) {
//     arr.push(el.harga);
//     index.push(i);
//   }
//   for (el of arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let tempEl = arr[i + 1];
//       let tempIn = index[i + 1];
//       if (arr[i] > tempEl) {
//         arr[i + 1] = arr[i];
//         index[i + 1] = index[i];
//         arr[i] = tempEl;
//         index[i] = tempIn;
//       }
//     }
//   }
//   for ([i, el] of index.entries()) {
//     sortedDestinasi.push(desKat[index[i]]);
//   }
//   return sortedDestinasi;
// };

// create list
const createList = function (destinasiReal, rangeBudget) {
  const mainList = document.getElementById('main');
  mainList.innerHTML = '';

  for (desti of destinasiReal) {
      let divCard = document.createElement('div');
      divCard.classList.add('destinasi-box');
      divCard.setAttribute('style', 'width: 18rem;');

      let image = document.createElement('img');
      image.setAttribute("src",desti.gambar);
      image.classList.add('card-img-top');

      let divBody = document.createElement('div');
      divBody.classList.add('card-body');

      let dest = document.createElement('h5');
      dest.innerHTML = desti.nama;
      divBody.appendChild(dest);

      let like = document.createElement(`button`)
      like.classList.add(`btn btn-outline-danger`)
      like.innerHTML = `♡`

      divCard.appendChild(image);
      divCard.appendChild(divBody);
      mainList.appendChild(divCard);
      // }
    }
  };


// let data = [
//   {
//     nama: `Bromo`,
//     lokasi: `Jawa Timur`,
//     kuota: 20,
//     harga: 200000,
//     rating: 4.6,
//     gambar: `./kategori/Bromo.png`,
//   },
//   {
//     nama: `Semeru`,
//     lokasi: `Jawa Timur`,
//     kuota: 30,
//     harga: 150000,
//     rating: 4.6,
//     gambar: `./kategori/Semeru.png`,
//   },
//   {
//     nama: `Merapi`,
//     lokasi: `Jawa Tengah`,
//     kuota: 25,
//     harga: 100000,
//     rating: 4.4,
//     gambar: `./kategori/Merapi.png`,
//   },
//   {
//     nama: `Merbabu`,
//     lokasi: `Jawa Tengah`,
//     kuota: 40,
//     harga: 250000,
//     rating: 4.6,
//     gambar: `./kategori/Merbabu.png`,
//   },
//   {
//     nama: `Galunggung`,
//     lokasi: `Jawa Barat`,
//     kuota: 35,
//     harga: 100000,
//     rating: 4.4,
//     gambar: `/Galunggung.png`,
//   },
// ]

// createList(data, 2000);

// const displayDestinasi = function (
//   destinasi,
//   rangeBudget,
//   filter = false,
//   sorted = false
// ) {
//   // Check budget
//   if (!rangeBudget) {
//     alert('Duit lu berapa neh? Pilih dulu ea');
//     return;
//   }
//   kontainerDestinasi.innerHTML = '';
//   console.log(kontainerDestinasi.innerHTML);
//
//   for (kategori in destinasi) {
//     // Check filter
//     if (filter) {
//       kategori = filter;
//       // Check sorted
//       const destinasiReal = sorted
//         ? sorting(destinasi[kategori].slice())
//         : destinasi[kategori].slice();
//       createList(destinasiReal, rangeBudget);
//       break;
//     } else {
//       // Check sorted
//       const destinasiReal = sorted
//         ? sorting(destinasi[kategori].slice())
//         : destinasi[kategori].slice();
//       createList(destinasiReal, rangeBudget);
//     }
//   }
// };
//
// // Update UI //
//
// // BUG masih nimpa
// const updateUI = function (
//   destinasi,
//   rangeBudget,
//   filter = false,
//   sorted = false
// ) {
//   kontainerDestinasi.innerHTML = ''; //BUG
//   // console.log(kontainerDestinasi.innerHTML);
//
//   displayDestinasi(destinasi, rangeBudget, filter, sorted);
// };
//
// // Search & Reset buttons //
//
// const btnSearch = document.querySelector('.search-btn');
// const btnReset = document.querySelector('.reset-btn');
//
// let dataUser = [];
// const inputName = document.querySelector('#nama-user');
// const inputEmail = document.querySelector('#email-user');
//
// btnSearch.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (!inputName.value || !inputEmail.value) {
//     alert('Aelah, Masukin nama dan email dong coy');
//     return;
//   }
//   dataUser.push(inputName.value, inputEmail.value);
//
//   updateUI(destinasi, rangeBudget);
// });
//
// btnReset.addEventListener('click', function (e) {
//   inputName.value = '';
//   inputEmail.value = '';
//   inputBudget.value = '';
//   dataUser = [];
// });

// Filter buttons //

// let filter = false;
//
// const btnGunung = document.querySelector('.gunung-btn');
// const btnPantai = document.querySelector('.pantai-btn');
// const btnMuseum = document.querySelector('.museum-btn');
// const btnTaman = document.querySelector('.taman-rekreasi-btn');
// const btnKebun = document.querySelector('.kebun-binatang-btn');
//
// btnPantai.addEventListener('click', function (e) {
//   filter = 'pantai';
//   updateUI(destinasi, rangeBudget, filter);
//   filter = false;
// });
// btnGunung.addEventListener('click', function (e) {
//   filter = 'gunung';
//   updateUI(destinasi, rangeBudget, filter);
//   filter = false;
// });
// btnMuseum.addEventListener('click', function (e) {
//   filter = 'museum';
//   updateUI(destinasi, rangeBudget, filter);
//   filter = false;
// });
// btnTaman.addEventListener('click', function (e) {
//   filter = 'tamanRekreasi';
//   updateUI(destinasi, rangeBudget, filter);
//   filter = false;
// });
// btnKebun.addEventListener('click', function (e) {
//   filter = 'kebunBinatang';
//   updateUI(destinasi, rangeBudget, filter);
//   filter = false;
// });
//
// // Sort button //
//
// let sorted = false;
//
// const btnSort = document.querySelector('.sorting-btn');
//
// btnSort.addEventListener('click', function (e) {
//   updateUI(destinasi, rangeBudget, filter, !sorted);
//   sorted = !sorted;
// });

///////////////////////////////////////////////////////
// NOTE: belum dikerjain, belum ada HTML untuk skenario slanjutnya
/*
// Booking button //

// splitted window, bookingList window muncul
// isinya list destinasi yg di klik "booking" nya
// didalemnya ada plus, minus, cancel, dan confirm button

// Plus & Minus buttons //

const btnPlus = document.querySelector('');
const btnMinus = document.querySelector('');

btnPlus.addEventListener('click', function (e) {
  // update qty (di database, display destinasi list & booking list)
  // plus (qty <= kuota)
  // minus (qty >= 1)
});

// Cancel button //

const btnCancel = document.querySelector('');

btnCancel.addEventListener('click', function () {
  // update qty
  // unsplitted window
});

// Confirm/Order button //

const btnConfirm = document.querySelector('');

btnConfirm.addEventListener('click', function () {
  // pop up window berisi `Selamat ${dataUser[0]}! Pesanan anda kami terima, kami akan segera kirim email konfirmasinya ke ${dataUser[1]}`
  // atau biar lebih gampang bisa pake alert aja
  // qty kembali normal
  // dan ada close button
});

// Close button //

const btnClose = document.querySelector('');

btnClose.addEventListener('click', function () {
  // kembali ke halaman awal/utama
});
*/
