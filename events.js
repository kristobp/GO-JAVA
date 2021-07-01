/*

dita: 1, 4, 5, 3
radit: 7, 8
kris: 2, 6 

1. Search button
- input:
. rangeBudget
- output:
. DISPLAY DESTINASI

2. Booking button
- input:
. gambar
. nama
. harga
- output:
. current window SPLITTED (ketambahan BOOKINGLIST window)
. DISPLAY DESTINASI yg dipilih 

3. Filter button
- input:
- output:
. UPDATE n DISPLAY DESTINASI (key => chosenCategory)
. chosenCategory (if unchosen, DISPLAY DESTINASI balik ke normal)

4. Plus button (<= kuota)
- input: klik, ketambah 1
- output:
. UPDATE n DISPLAY QTY (bertambah) 
. UPDATE n DISPLAY TOTALPRICE
. UPDATE n DISPLAY QTY DESTINASI

5. Minus button (>= 1)
- input: klik, kekurang 1
- output:
. UPDATE n DISPLAY QTY (berkurang) 
. UPDATE n DISPLAY TOTALPRICE
. UPDATE n DISPLAY QTY DESTINASI

6. Cancel button
- output: 
. kembali ke halaman KEDUA
. UPDATE n DISPLAY DESTINASI (kembali spt semula)

7. Order button
- input:
. nama
. email
- output: pop up window muncul

8. Close button
- output:
  . kembali ke halaman PERTAMA

*/
