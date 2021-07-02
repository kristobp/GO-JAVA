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
      gambar: './kategori/Pangandaran.jpg',
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
      gambar: './kategori/Karimun-Jawa.jpg',
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
      gambar: './kategori/10-November.jpg',
    },
    {
      nama: `Zoologi Bogor`,
      lokasi: `Jawa Barat`,
      kuota: 75,
      harga: 50000,
      rating: 3.5,
      gambar: './kategori/Zoologi-Bogor.jpg',
    },
    {
      nama: `Kretek Kudus`,
      lokasi: `Jawa Tengah`,
      kuota: 40,
      harga: 75000,
      rating: 0,
      gambar: './kategori/Kretek-Kudus.jpg',
    },
    {
      nama: `House of Sampoerna`,
      lokasi: `Jawa Timur`,
      kuota: 50,
      harga: 100000,
      rating: 4,
      gambar: './kategori/House-of-Sampoerna.jpg',
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
      gambar: './kategori/Trans-Snow-World-Bekasi.jpeg',
    },
    {
      nama: `Jawa Timur Park 2`,
      lokasi: `Jawa Timur`,
      kuota: 1500,
      harga: 150000,
      rating: 4.5,
      gambar: './kategori/Jatim-Park.jpg',
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
      gambar: './kategori/Kebun-Binatang-Surabaya.png',
    },
    {
      nama: `Margasatwa Semarang`,
      lokasi: `Jawa Tengah`,
      kuota: 300,
      harga: 35000,
      rating: 4.1,
      gambar: './kategori/Margasatwa-Semarang.png',
    },
    {
      nama: `Kebun Binatang Bandung`,
      lokasi: `Jawa Barat`,
      kuota: 300,
      harga: 65000,
      rating: 4,
      gambar: './kategori/Kebun-Binatang-Bandung.jpg',
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

let dataUser = [];

function suka() {
  Swal.fire(
    `Suka suka bae, ayo kesini ${dataUser[0]}, gw kirim info nya ke email lo ya, ke ${dataUser[1]}`
  );
}

// Display destinasi //
const displayDestinasi = function (destinasi) {
  const mainList = document.getElementById('main');
  mainList.innerHTML = '';

  for (kategori in destinasi) {
    let divClassRow = document.createElement('div');
    divClassRow.classList.add('row');

    for (desti of destinasi[kategori]) {
      let divCol = document.createElement('div');
      divCol.classList.add('col-sm-4');

      let divCard = document.createElement('div');
      divCard.classList.add('destinasi-box');
      divCard.setAttribute('style', 'width: 18rem;');

      let image = document.createElement('img');
      image.setAttribute('src', desti.gambar);
      image.classList.add('card-img-top');

      let divBody = document.createElement('div');
      divBody.classList.add('card-body');

      let like = document.createElement('button');
      like.innerHTML = 'sukak!';
      like.classList.add('btn-outline-danger');
      like.setAttribute('onclick', 'suka()');

      let dest = document.createElement('h5');
      dest.innerHTML = desti.nama;

      divBody.appendChild(like);
      divBody.appendChild(dest);
      divCard.appendChild(image);
      divCard.appendChild(divBody);
      divCol.appendChild(divCard);
      divClassRow.appendChild(divCol);
      mainList.appendChild(divClassRow);
    }
  }
};

// Search & Reset buttons //

const btnSearch = document.querySelector('.search-btn');
const btnReset = document.querySelector('.reset-btn');

const inputName = document.querySelector('#nama-user');
const inputEmail = document.querySelector('#email-user');

btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  if (!inputName.value || !inputEmail.value) {
    alert('Aelah, Masukin nama dan/atau email dong coy');
    return;
  }
  dataUser.push(inputName.value, inputEmail.value);

  displayDestinasi(destinasi);
});

btnReset.addEventListener('click', function (e) {
  inputName.value = '';
  inputEmail.value = '';
  inputBudget.value = '';
  dataUser = [];
});

// Like button //
