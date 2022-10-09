export default [
  {
    title: '4. Phép cộng và phép trừ các số thập phân',
    contents: [
      'Phép cộng và phép trừ các số thập phân được thực hiện như các số tự nhiên.',
      'Lưu ý: Khi đặt tính và tính, dấu phẩy của các số hạng (số bị trừ và số trừ) và của tổng (hiệu) phải thẳng hàng.',
    ],
    img: require('assets/images/b4a1.png'),
  },
  {
    title: '5. Phép nhân các số thập phân',
    contentWithImg: [
      {
        img: require('assets/images/b4a2.png'),
        contents: [
          'Phép nhân các số thập phân được thực hiện như sau:',
          'Bước 1: Nhân như nhân các số tự nhiên.',
          'Bước 2: Đếm xem trong phần thập phân của cả hai thừa số có tổng cộng bao nhiêu chữ số (phần thập phân của số tự nhiên có 0 chữ số) rồi dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số từ phải sang trái.',
        ],
      },
    ],
  },
  {
    title: '6. Phép chia các số thập phân',
    subcontents: [
      {
        title: '6.1.	Phép chia số thập phân cho số tự nhiên',
        contentWithImg: [
          {
            contents: [
              'Ta thực hiện các bước sau:',
              'Chia phần nguyên của số bị chia cho số chia.',
              'Viết dấu phẩy vào bên phải thương số trước khi lấy chữ số hàng phần mười của số bị chia để chia tiếp.',
              'Tiếp tục như vậy cho đến khi chia hết các hàng của số bị chia.',
            ],
          },
        ],
      },
      {
        title:
          '6.2.	Phép chia số tự nhiên cho số tự nhiên nhưng có kết quả là số thập phân',
        contentWithImg: [
          {
            contents: [
              'Ta thực hiện các bước sau: ',
              'Bước 1: Chia số bị chia cho số chia như chia các số tự nhiên.',
              'Bước 2: Viết dấu phẩy vào bên phải thương số',
              'Bước 3: Viết một chữ số 0 vào bên phải số dư và tiếp tục chia.',
              'Bước 4: Nếu còn dư, tiếp tục thực hiện bước 3 đối với số dư mới.',
            ],
          },
        ],
      },
      {
        title: '6.3.	Phép chia số tự nhiên cho số thập phân',
        contentWithImg: [
          {
            img: require('assets/images/b4a3.png'),
            contents: [
              'Ta thực hiện các bước sau:',
              'Bước 1: Đếm xem trong phần thập phân của số chia có bao nhiêu chữ số thì thêm vào bên phải số bị chia bấy nhiêu chữ số 0. ',
              'Bước 2: Bỏ dấu phẩy ở số chia.',
              'Bước 3: Chia như chia các số tự nhiên.',
            ],
          },
        ],
      },
      {
        title: '6.4.	Phép chia số thập phân cho số thập phân',
        contentWithImg: [
          {
            img: require('assets/images/b4a3.png'),
            contents: [
              'Nếu số bị chia có nhiều chữ số ở phần thập phân hơn số chia, ta thực hiện các bước sau:',
              'Bước 1: Đếm xem trong phần thập phân của số chia có bao nhiêu chữ số thì dịch dấu phẩy của số bị chia sang bên phải bấy nhiêu chữ số.',
              'Bước 2: Bỏ dấu phẩy ở số chia.',
              'Bước 3: Thực hiện phép chia như chia số thập phân cho số tự nhiên.',
            ],
          },
          {
            img: require('assets/images/b4a4.png'),
            contents: [
              'Nếu số bị chia và số chia có số chữ số ở phần thập phân bằng nhau, ta thực hiện các bước sau:',
              'Bước 1: Bỏ dấu phẩy ở cả số chia và số bị chia.',
              'Bước 2: Thực hiện phép chia như chia các số tự nhiên',
            ],
          },
          {
            img: require('assets/images/b4a5.png'),
            contents: [
              'Nếu số bị chia có ít chữ số ở phần thập phân hơn số chia, ta thực hiện các bước sau:',
              'Bước 1: Đếm xem trong phần thập phân của số bị chia có bao nhiêu chữ số thì dịch dấu phẩy của số chia sang bên phải bấy nhiêu chữ số.',
              'Bước 2: Bỏ dấu phẩy ở số chia.',
              'Bước 3: Thực hiện phép chia như chia một số tự nhiên cho số thập phân.',
            ],
          },
        ],
      },
      {
        title: '6.5.	Tỉ số phần trăm. Các bài toán về tỉ số phần trăm.',
        contentWithImg: [
          {
            img: require('assets/images/b4a6.png'),
            contents: ['Tỉ số phần trăm là tỉ số giữa một số và 100.'],
          },
          {
            img: require('assets/images/b4a7.png'),
            contents: [
              'Muốn tìm tỉ số phần trăm của hai số a và b, ta thực hiện như sau:',
              'Tìm thương giữa a và b.',
              'Lấy thương tìm được nhân với 100 rồi viết kí hiệu % vào bên phải kết quả.',
            ],
          },
          {
            img: require('assets/images/b4a8.png'),
            contents: [
              'Muốn tìm a% của số b, ta lấy b chia 100 rồi nhân với a hoặc lấy b nhân với a rồi chia 100.',
            ],
          },
          {
            img: require('assets/images/b4a9.png'),
            contents: [
              'Muốn tìm một số biết a% của nó bằng b, ta lấy b chia a rồi nhân với 100, hoặc lấy b nhân với 100 rồi chia a.',
            ],
          },
        ],
      },
    ],
  },
];
