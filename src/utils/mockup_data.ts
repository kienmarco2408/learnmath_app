export const TOPIC = [
  {
    file: 'bai1',
    title: 'Ôn tập và bổ sung về phân số',
  },
  {
    file: 'bai2',
    title: 'Ôn tập giải toán liên quan đến tỉ lệ',
  },
  {
    file: 'bai3',
    title: 'Bảng đơn vị đo độ dài, khối lượng, diện tích',
  },
  {
    file: 'bai4',
    title: 'Khái niệm số thập phân. Các hàng của số thập phân. So sánh hai số thập phân',
  },
  {
    file: 'bai5',
    title: 'Phép cộng và phép trừ các số thập phân',
  },
  {
    file: 'bai6',
    title: 'Phép nhân các số thập phân',
  },
  {
    file: 'bai7',
    title: 'Phép chia các số thập phân',
  },
  {
    file: 'bai8',
    title: 'Hình học',
  },
  {
    file: 'bai9',
    title:'Số đo thời gian. Toán chuyển động đều'
  }


];

export const listImages = [];

export const evaluateSentence = (mark: number) => {
  if (mark >= 3) {
    return [
      'Ôi bạn thật xuất sắc!',
      'Wow, giỏi quá đi! ',
      'Xin chúc mừng, bạn giỏi quá!',
      'Bài làm của bạn quá xuất sắc, thật ngưỡng mộ!',
    ];
  } else if (mark >= 2) {
    return [
      'Wow, bạn giỏi quá!',
      'Một kết quả tuyệt vời! Nếu muốn đạt huy chương vàng, bạn hãy xem lại lý thuyết và thử lại một lần nữa nhé!',
      'Thiếu 1 xíu nữa thôi là được huy chương vàng rồi ấy, thật bình tĩnh và thử lại nha!',
    ];
  } else if (mark >= 1) {
    return [
      'Yay! hãy cố gắng đạt huy chương vàng vào lần sau nha!',
      'Một kết quả khá tốt! Tuy nhiên mình tin bạn có thể làm tốt hơn nữa đó!',
      'Một vài câu sai khá đáng tiếc nè! Bạn hãy xem lại lý thuyết và thử lại nhé!',
    ];
  } else
    return [
      'Có vẻ như bạn chưa tập trung lắm, lần sau cố gắng làm tốt hơn nha!',
      'Kết quả này chưa được tốt lắm, hãy cố gắng hơn vào lần sau nhé!',
      'Hãy xem lại phần lý thuyết và thử lại một lần nữa nha!',
    ];
};
