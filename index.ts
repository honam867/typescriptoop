// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// Abstract classes
// Các phương thức muốn trừu tượng thì sử dụng từ khóa 'abstract' trước tên hàm
//---------------------
//Trong lập trình hướng đối tượng dựa trên lớp, hàm tạo (tiếng Anh: constructor, viết tắt: ctor) trong một lớp là một kiểu chương trình con đặc biệt được dùng để tạo ra đối tượng. Nó chuẩn bị đối tượng mới để sử dụng, thường chấp nhận các đối số mà hàm tạo dùng để thiết lập các biến thành viên bắt buộc.
//---------------------
// Định nghĩa lớp dẫn xuất:
// Một lớp được xây dựng thừa kế một lớp khác được gọi là lớp dẫn xuất; lớp dùng để xây dựng lớp dẫn xuất được gọi là lớp cơ sở.
// Một lớp dẫn xuất ngoài các thành phần riêng của lớp đó, còn được thừa kế các thành phần của các lớp cơ sở có liên quan
abstract class Warrior {
  readonly name : string;
  public weapon: string;
  constructor(name :string) {
    this.name = name;
  }
  sayhi(){
    console.log(`Tôi tên là:  ${name}`);
  }
  abstract arm(weapon: string): void; // hàm này phải được triển khai ở lớp dẫn xuất || Lớp nào thừa kế từ thằng Warrior này thì có quyền được sử dụng.
}
class SupperWarrior extends Warrior {
  constructor(name: string){
    super(name); //Hàm khởi tạo trong lớp dẫn xuất phải gọi supper;
  }
  arm(weapon) : void {
    console.log(`${this.name} là một siêu chiên binh chiến đâu với vũ khí ${this.weapon}`);
  }
  fly(): void {
    console.log(`${this.name} có thể bay`);
  }
}
let hercules : Warrior; // Đúng nếu tạo một tham chiếu với kiểu dữ liệu là lớp trừu tượng
hercules = new SupperWarrior('Thánh gióng');
hercules.arm('fdsg');
hercules.sayhi();
// Interface
// interface IWarrior {
//   name: string; 
//   weapon: string;
//   sayHi(): void; // Không thể định nghĩa code xử lý, chỉ có thể khai báo. phải được triển khai ở lớp thực thi 
//   arm(weapon: string): void; // hàm này phải được triển khai ở lớp thực thi
// }

// class SuperWarrior implements IWarrior {  // có thể implement được nhiều interface
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHi(): void {
//     console.log(`Hello, I am ${this.name}`);
//   }  
//   arm(weapon): void {
//     console.log(`${this.name} is a super warrior fighting with ${weapon}`);
//   }
// }

// class SuperHero implements IWarrior {  // có thể implement được nhiều interface
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHi(): void {
//     console.log(`Hi, I am ${this.name}, ahihi`);
//   }  
//   arm(weapon): void {
//     console.log(`${this.name} is a super hero fighting with ${weapon}`);
//   }
//   fly(): void {
//     console.log(`${this.name} can fly`);
//   }
// }


// let superman: IWarrior; // biến hercules tham chiếu với kiểu dữ liệu là interface IWarrior
// superman = new SuperHero(); // nếu khởi tạo superman bằng class SuperHero thì superman là một siêu anh hùng
// superman = new SuperWarrior(); // nếu khởi tạo superman bằng Class SuperWarrior thì superman sẽ là siêu chiến binh
// superman.arm();
// superman.sayHi();
// superman.fly(); // lỗi: phương thức không tồn tại trong interface IWarrior

appDiv.innerHTML = `<h1>Oop Trong TypeScript</h1>`;