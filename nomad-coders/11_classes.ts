abstract class User {
  constructor(
    // private firstName: string,
    // private lastName: string,
    // private nickname: string
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Players extends User {
  getNickName() {
    console.log(this.nickname); // property들은 인스턴스 밖에서 접근할 수 없다. // 'nickname' 속성은 private이며 'User' 클래스 내에서만 액세스할 수 있습니다.
  }
}

const nicos = new Players("nico", "las", "ni"); // 추상 클래스의 인스턴스를 만들 수 없습니다.

nicos.getFullName();
nicos.firstName(); // 'firstName' 속성은 보호된 속성이며 'User' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
